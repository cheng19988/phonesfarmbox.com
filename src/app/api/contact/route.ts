import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { notifyInquiry } from "@/lib/notify";
import { generateInquiryRef } from "@/lib/inquiry-ref";

function str(form: FormData, key: string) {
  return String(form.get(key) || "").trim();
}

function buildRfqAppendix(form: FormData) {
  const lines: string[] = [];
  const platform = str(form, "platform");
  const connectionMode = str(form, "connectionMode");
  const voltageRegion = str(form, "voltageRegion");
  const chassisConfig = str(form, "chassisConfig");
  const targetModels = str(form, "targetModels");
  const paymentPreference = str(form, "paymentPreference");
  const docs: string[] = [];
  if (form.get("needDatasheet")) docs.push("datasheet");
  if (form.get("needPackingPhoto")) docs.push("packing photo");
  if (form.get("needShippingSize")) docs.push("shipping size/weight");

  if (platform) lines.push(`Platform: ${platform}`);
  if (connectionMode) lines.push(`Connection mode: ${connectionMode}`);
  if (voltageRegion) lines.push(`Voltage region: ${voltageRegion}`);
  if (chassisConfig) lines.push(`Chassis config: ${chassisConfig}`);
  if (targetModels) lines.push(`Target models: ${targetModels}`);
  if (paymentPreference) lines.push(`Payment preference: ${paymentPreference}`);
  if (docs.length) lines.push(`Documentation requested: ${docs.join(", ")}`);

  if (!lines.length) return "";
  return `\n\n--- RFQ details ---\n${lines.join("\n")}`;
}

function isAjax(form: FormData) {
  return str(form, "_ajax") === "1";
}

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const ajax = isAjax(form);
  const baseMessage = str(form, "message");
  const rfqAppendix = buildRfqAppendix(form);
  const data = {
    name: str(form, "name"),
    country: str(form, "country"),
    whatsapp: str(form, "whatsapp"),
    phone: str(form, "phone"),
    email: str(form, "email"),
    deviceQuantity: str(form, "deviceQuantity"),
    productInterest: str(form, "productInterest"),
    budget: str(form, "budget"),
    message: baseMessage + rfqAppendix,
  };

  const privacyConsent = form.get("privacyConsent");
  const missing: string[] = [];
  if (!data.name) missing.push("name");
  if (!data.email) missing.push("email");
  if (!data.whatsapp) missing.push("WhatsApp/Telegram");
  if (!data.country) missing.push("shipping country");
  if (!data.productInterest) missing.push("product interest");
  if (!data.deviceQuantity) missing.push("quantity");
  if (!str(form, "platform")) missing.push("platform");
  if (!str(form, "connectionMode")) missing.push("connection mode");
  if (!baseMessage) missing.push("message");
  if (!privacyConsent) missing.push("privacy consent");

  if (missing.length) {
    if (ajax) {
      return NextResponse.json({ error: `Required: ${missing.join(", ")}` }, { status: 400 });
    }
    const errUrl = new URL("/contact", req.url);
    errUrl.searchParams.set("error", "1");
    return NextResponse.redirect(errUrl);
  }

  const ref = generateInquiryRef();
  const messageWithRef = `[${ref}]\n${data.message}`;
  await prisma.contactSubmission.create({ data: { ...data, message: messageWithRef } });
  try {
    await notifyInquiry({ ...data, message: messageWithRef });
  } catch (e) {
    console.error("[contact] notify failed:", e);
  }

  if (ajax) {
    return NextResponse.json({ ok: true, ref });
  }

  const successUrl = new URL("/contact", req.url);
  successUrl.searchParams.set("submitted", ref);
  return NextResponse.redirect(successUrl);
}
