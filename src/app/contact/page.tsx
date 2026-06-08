"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import Link from "next/link";
import { QuoteProcessSection } from "@/components/quote-process-section";
import { ContactBar } from "@/components/shared";
import { CONTACT, SITE } from "@/lib/config";
import { POST_RFQ_EXPECTATIONS } from "@/data/quote-process";

const INQUIRY_CHECKLIST = [
  "Target product / SKU (e.g. phone-farm-box, empty-box-chassis, iphone-phone-farm)",
  "Destination country and preferred freight (air / sea)",
  "Expected device quantity",
  "Preferred connection mode: USB / OTG / hybrid / not sure",
  "Voltage region: 110V / 220V / 220–240V / not sure",
  "Empty chassis vs phones included on quote",
  "Target phone or board models (or “recommend at quote”)",
  "Need packing photo, datasheet, or shipping dimensions?",
  "Payment preference: USDT / bank transfer / Wise / PayPal / not sure",
  "Use case (app testing, QA, social media ops, remote operation, etc.)",
  "WhatsApp or Telegram for fast follow-up",
];

const DATASHEET_INQUIRY = [
  "Ask for datasheet (PDF or spec sheet for your quoted configuration)",
  "Ask for packing photo (carton exterior + foam layout if available)",
  "Ask for compatible phone / board list (model numbers you plan to mount)",
  "Ask for power and cooling confirmation (PSU tier, fan kit, ambient limits)",
  "Ask for shipping size and weight (carton L×W×H and gross weight for freight)",
];

const SAMPLE_INQUIRY = `Example inquiry:

"We need an Android phone farm for app testing and social media team workflows, shipping to Germany.
~40 nodes, prefer phone farm boxes, USB mode (not sure on voltage — 220V region).
Empty chassis first, phones sourced on second PO. Need datasheet and packing dimensions before payment.
Payment: USDT or Wise. WhatsApp: +xx xxx. Timeline: 3 weeks."`;

function ContactForm() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", { method: "POST", body: form });
    setStatus(res.ok ? "success" : "error");
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-400 mb-1">Name *</label>
          <input name="name" required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">Country *</label>
          <input name="country" required placeholder="Shipping destination" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">WhatsApp / Telegram *</label>
          <input name="whatsapp" required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" placeholder="For quote follow-up" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">Phone</label>
          <input name="phone" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">Email *</label>
          <input name="email" type="email" required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">Target device count *</label>
          <input name="deviceQuantity" required placeholder="e.g. 20, 40, 100+" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">Target product / SKU</label>
          <input
            name="productInterest"
            defaultValue={searchParams.get("product") || searchParams.get("service") || ""}
            placeholder="e.g. phone-farm-box, empty-box-chassis"
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">Budget range (USD)</label>
          <input name="budget" placeholder="Optional" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">Connection mode</label>
          <select name="connectionMode" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white">
            <option value="">Not sure / ask at quote</option>
            <option value="USB">USB — standard wired host control</option>
            <option value="OTG">OTG — quoted ROM / Ethernet path</option>
            <option value="Hybrid">Hybrid — mixed models or workflows</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">Voltage region</label>
          <select name="voltageRegion" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white">
            <option value="">Not sure</option>
            <option value="110V">110V</option>
            <option value="220V">220V</option>
            <option value="220-240V">220–240V</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">Chassis configuration</label>
          <select name="chassisConfig" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white">
            <option value="">Not sure</option>
            <option value="Empty chassis only">Empty chassis only</option>
            <option value="With phones / devices included">With phones / devices included</option>
            <option value="BYO devices to mount">BYO devices to mount</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">Payment preference</label>
          <select name="paymentPreference" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white">
            <option value="">Not sure</option>
            <option value="USDT">USDT (Tron TRC20)</option>
            <option value="Bank transfer">Bank transfer (T/T)</option>
            <option value="Wise">Wise</option>
            <option value="PayPal">PayPal</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm text-slate-400 mb-1">Target phone / board models</label>
        <input
          name="targetModels"
          placeholder="e.g. Samsung A-series, iPhone 12 mix — or “recommend at quote”"
          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white"
        />
      </div>
      <div>
        <label className="block text-sm text-slate-400 mb-2">Documentation needed (optional)</label>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          <label className="flex items-center gap-2">
            <input type="checkbox" name="needDatasheet" value="yes" className="rounded border-slate-600" />
            Datasheet / spec sheet
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" name="needPackingPhoto" value="yes" className="rounded border-slate-600" />
            Packing photo
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" name="needShippingSize" value="yes" className="rounded border-slate-600" />
            Shipping size &amp; weight
          </label>
        </div>
      </div>
      <div>
        <label className="block text-sm text-slate-400 mb-1">Project details *</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Use case (app testing, QA, social media team, etc.), timeline, Android/iPhone mix, anything else for your written quote..."
          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white"
        />
      </div>
      <button type="submit" disabled={status === "loading"} className="btn-primary w-full">
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>
      {status === "success" && (
        <div className="rounded-lg border border-emerald-800/40 bg-emerald-950/20 p-4 text-sm space-y-3">
          <p className="text-emerald-400 font-medium">Inquiry received — thank you.</p>
          <p className="text-slate-300">What happens next:</p>
          <ul className="space-y-2 text-slate-400">
            {POST_RFQ_EXPECTATIONS.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-emerald-500 shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500 pt-1">
            USDT payments remain manually confirmed by sales after you send transaction hash — not automatic on-chain verification.
            Browse{" "}
            <Link href="/help/usdt-payment-confirmation-hardware-orders" className="text-amber-400 hover:underline">
              USDT payment guide
            </Link>
            {" · "}
            <Link href="/pricing#quote-process" className="text-amber-400 hover:underline">
              full quote process
            </Link>
          </p>
        </div>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm">
          Could not send the form. Please message us on{" "}
          <a href={CONTACT.whatsappUrl} className="underline">
            WhatsApp
          </a>
          .
        </p>
      )}
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container-wide max-w-4xl">
        <h1 className="section-title">Request a Hardware Quote</h1>
        <p className="section-subtitle">
          {SITE.name} — quote-based B2B phone farm hardware supplier. Share enough detail for a written BOM, connection mode, and lead time. Written quote before assembly — no account required.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="card p-6">
            <h2 className="font-bold text-white mb-3">What to include in your quote request</h2>
            <ul className="space-y-2 text-sm text-slate-400">
              {INQUIRY_CHECKLIST.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-amber-500">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h2 className="font-bold text-white mb-3">Ask for verified hardware data</h2>
            <ul className="space-y-2 text-sm text-slate-400">
              {DATASHEET_INQUIRY.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-emerald-500">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card p-6 mb-10">
          <h2 className="font-bold text-white mb-3">Recommended inquiry format</h2>
          <pre className="text-xs text-slate-400 whitespace-pre-wrap font-sans leading-relaxed">{SAMPLE_INQUIRY}</pre>
        </div>

        <div className="card p-4 mb-8 border-amber-900/30 bg-amber-950/10 text-sm text-slate-400">
          <strong className="text-slate-300">Response expectation:</strong> We review RFQ details before quoting. Typical reply within one business day when information is complete.
          {" "}
          <strong className="text-slate-300">USDT orders:</strong> Payment is manually confirmed by sales after you send transaction hash — not automatic on-chain verification.
        </div>

        <QuoteProcessSection variant="compact" title="How the quote process works" showCta />

        <div className="card p-6 mb-8 mt-8">
          <h2 className="font-bold text-white mb-3">After you submit</h2>
          <ul className="space-y-2 text-sm text-slate-400">
            {POST_RFQ_EXPECTATIONS.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-amber-500">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Suspense fallback={<div className="card p-6 text-slate-400">Loading form...</div>}>
          <ContactForm />
        </Suspense>

        <p className="text-center text-sm text-slate-500 mt-6">
          Browse first:{" "}
          <Link href="/products" className="text-amber-400 hover:underline">
            product catalog
          </Link>
          {" · "}
          <Link href="/pricing" className="text-amber-400 hover:underline">
            pricing tiers
          </Link>
          {" · "}
          <Link href="/faq" className="text-amber-400 hover:underline">
            FAQ
          </Link>
        </p>

        <div className="card p-6 mt-10">
          <h2 className="font-bold text-white mb-4">Direct lines</h2>
          <ContactBar />
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>Phone: {CONTACT.phone}</li>
            <li>
              WhatsApp:{" "}
              <a href={CONTACT.whatsappUrl} className="text-amber-400 hover:underline">
                {CONTACT.whatsapp}
              </a>
            </li>
            <li>
              Telegram:{" "}
              <a href={CONTACT.telegramUrl} className="text-amber-400 hover:underline">
                {CONTACT.telegram}
              </a>
            </li>
            <li>
              Email:{" "}
              <a href={`mailto:${CONTACT.email}`} className="text-amber-400 hover:underline">
                {CONTACT.email}
              </a>
            </li>
            <li>Location: {SITE.location}</li>
          </ul>
          <p className="text-xs text-slate-500 mt-4">Business hours: Mon–Sat, 9:00–18:00 (GMT+8). Urgent inquiries via WhatsApp when online.</p>
        </div>
      </div>
    </div>
  );
}
