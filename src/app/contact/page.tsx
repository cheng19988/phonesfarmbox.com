"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import Link from "next/link";
import { ContactBar } from "@/components/shared";
import { CONTACT, SITE } from "@/lib/config";

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
          <label className="block text-sm text-slate-400 mb-1">WhatsApp / Telegram</label>
          <input name="whatsapp" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
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
          <label className="block text-sm text-slate-400 mb-1">Target device count</label>
          <input name="deviceQuantity" placeholder="e.g. 20, 40, 100+" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
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
        <label className="block text-sm text-slate-400 mb-1">Project details</label>
        <textarea name="message" rows={4} placeholder="Platform, Android/iPhone mix, network requirements, delivery country..." className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white" />
      </div>
      <button type="submit" disabled={status === "loading"} className="btn-primary w-full">
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>
      {status === "success" && <p className="text-green-400 text-sm">Received. We typically reply within one business day.</p>}
      {status === "error" && <p className="text-red-400 text-sm">Could not send the form. Please message us on <a href={CONTACT.whatsappUrl} className="underline">WhatsApp</a>.</p>}
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container-wide max-w-4xl">
        <h1 className="section-title">Contact Sales</h1>
        <p className="section-subtitle">Share your device count, platform, and delivery country. We will return a quote with lead time and shipping options.</p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { step: "1", title: "Send requirements", desc: "Device count, Android/iPhone mix, platforms, and destination country." },
            { step: "2", title: "Receive quote", desc: "Hardware list, pricing, MOQ, and estimated production or ship date." },
            { step: "3", title: "Deploy with support", desc: "Remote setup help for batch control, network, and first test run." },
          ].map((s) => (
            <div key={s.step} className="card p-4">
              <span className="text-amber-400 font-bold">{s.step}</span>
              <h2 className="font-semibold text-white mt-1 mb-1">{s.title}</h2>
              <p className="text-xs text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="card p-6 mb-8">
          <h2 className="font-bold text-white mb-4">Direct lines</h2>
          <ContactBar />
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>Phone: {CONTACT.phone}</li>
            <li>WhatsApp: <a href={CONTACT.whatsappUrl} className="text-amber-400 hover:underline">{CONTACT.whatsapp}</a></li>
            <li>Telegram: <a href={CONTACT.telegramUrl} className="text-amber-400 hover:underline">{CONTACT.telegram}</a></li>
            <li>Email: <a href={`mailto:${CONTACT.email}`} className="text-amber-400 hover:underline">{CONTACT.email}</a></li>
            <li>Location: {SITE.location}</li>
          </ul>
          <p className="text-xs text-slate-500 mt-4">Business hours: Mon–Sat, 9:00–18:00 (GMT+8). Urgent inquiries via WhatsApp are answered when online.</p>
        </div>

        <Suspense fallback={<div className="card p-6 text-slate-400">Loading form...</div>}>
          <ContactForm />
        </Suspense>

        <p className="text-center text-sm text-slate-500 mt-6">
          Prefer to browse first? <Link href="/products" className="text-amber-400 hover:underline">View the product catalog</Link> or <Link href="/pricing" className="text-amber-400 hover:underline">see pricing overview</Link>.
        </p>
      </div>
    </div>
  );
}
