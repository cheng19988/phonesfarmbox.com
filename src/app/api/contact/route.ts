import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { notifyInquiry } from "@/lib/notify";
import { generateInquiryRef } from "@/lib/inquiry-ref";

function str(form: FormData, key: string) {
  return String(form.get(key) || "").trim();
}

function buildRfqAppendix(form: FormData) {
  const lines: string[] = [];
  const connectionMode = str(form, "connectionMode");
  const voltageRegion = str(form, "voltageRegion");
  const chassisConfig = str(form, "chassisConfig");
  const targetModels = str(form, "targetModels");
  const paymentPreference = str(form, "paymentPreference");
  const docs: string[] = [];
  if (form.get("needDatasheet")) docs.push("datasheet");
  if (form.get("needPackingPhoto")) docs.push("packing photo");
  if (form.get("needShippingSize")) docs.push("shipping size/weight");

  if (connectionMode) lines.push(`Connection mode: ${connectionMode}`);
  if (voltageRegion) lines.push(`Voltage region: ${voltageRegion}`);
  if (chassisConfig) lines.push(`Chassis config: ${chassisConfig}`);
  if (targetModels) lines.push(`Target models: ${targetModels}`);
  if (paymentPreference) lines.push(`Payment preference: ${paymentPreference}`);
  if (docs.length) lines.push(`Documentation requested: ${docs.join(", ")}`);

  if (!lines.length) return "";
  return `\n\n--- RFQ details ---\n${lines.join("\n")}`;
}

export async function POST(req: NextRequest) {
  const form = await req.formData();
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
  if (!data.name || !data.email) {
    return NextResponse.json({ error: "Name and email required" }, { status: 400 });
  }
  const ref = generateInquiryRef();
  const messageWithRef = `[${ref}]\n${data.message}`;
  await prisma.contactSubmission.create({ data: { ...data, message: messageWithRef } });
  try {
    await notifyInquiry({ ...data, message: messageWithRef });
  } catch (e) {
    console.error("[contact] notify failed:", e);
  }
  return NextResponse.json({ ok: true, ref });
}
