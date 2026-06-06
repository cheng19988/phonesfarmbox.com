"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import Link from "next/link";
import { ContactBar } from "@/components/shared";
import { CONTACT, SITE } from "@/lib/config";

const INQUIRY_CHECKLIST = [
  "Target device quantity (e.g. 20, 40, 100+)",
  "Android, iPhone, or mixed — and empty box vs phones included",
  "Phone/board models if known (or “recommend at quote”)",
  "Shipping country and preferred freight (air / sea)",
  "Use case (QA, social ops, scripts, etc.)",
  "Budget range in USD (optional but speeds matching)",
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

"We need 40 Android nodes for TikTok ops, shipping to Germany.
Prefer phone farm boxes with SIM path. Budget $8k–12k hardware.
WhatsApp: +xx xxx. Timeline: 3 weeks."`;

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
          <label className="block text-sm text-slate-400 mb-1">Country</label>
          <input name="country" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
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
          <label className="block text-sm text-slate-400 mb-1">Product or service interest</label>
          <input name="productInterest" defaultValue={searchParams.get("product") || searchParams.get("service") || ""} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">Budget range (USD)</label>
          <input name="budget" placeholder="Optional" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
        </div>
      </div>
      <div>
        <label className="block text-sm text-slate-400 mb-1">Project details *</label>
        <textarea name="message" required rows={5} placeholder="Android/iPhone mix, empty box or with phones, use case, timeline..." className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
      </div>
      <button type="submit" disabled={status === "loading"} className="btn-primary w-full">
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>
      {status === "success" && (
        <p className="text-green-400 text-sm">Received. We typically reply within 24–72 hours on business days.</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm">
          Could not send the form. Please message us on{" "}
          <a href={CONTACT.whatsappUrl} className="underline">WhatsApp</a>.
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
          B2B inquiry form — share enough detail for a written BOM and lead time. No account registration required.
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
          <strong className="text-slate-300">Response expectation:</strong> We reply on business days within 24–72 hours when the form includes quantity, platform mix, and shipping country.
          {" "}
          <strong className="text-slate-300">USDT orders:</strong> Payment is manually confirmed by sales after you send transaction hash — not automatic on-chain verification.
        </div>

        <div className="card p-6 mb-8">
          <h2 className="font-bold text-white mb-4">Direct lines</h2>
          <ContactBar />
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>Phone: {CONTACT.phone}</li>
            <li>
              WhatsApp:{" "}
              <a href={CONTACT.whatsappUrl} className="text-amber-400 hover:underline">{CONTACT.whatsapp}</a>
            </li>
            <li>
              Telegram:{" "}
              <a href={CONTACT.telegramUrl} className="text-amber-400 hover:underline">{CONTACT.telegram}</a>
            </li>
            <li>
              Email:{" "}
              <a href={`mailto:${CONTACT.email}`} className="text-amber-400 hover:underline">{CONTACT.email}</a>
            </li>
            <li>Location: {SITE.location}</li>
          </ul>
          <p className="text-xs text-slate-500 mt-4">Business hours: Mon–Sat, 9:00–18:00 (GMT+8). Urgent inquiries via WhatsApp when online.</p>
        </div>

        <Suspense fallback={<div className="card p-6 text-slate-400">Loading form...</div>}>
          <ContactForm />
        </Suspense>

        <p className="text-center text-sm text-slate-500 mt-6">
          Browse first:{" "}
          <Link href="/products" className="text-amber-400 hover:underline">product catalog</Link>
          {" · "}
          <Link href="/pricing" className="text-amber-400 hover:underline">pricing tiers</Link>
          {" · "}
          <Link href="/faq" className="text-amber-400 hover:underline">FAQ</Link>
        </p>
      </div>
    </div>
  );
}
