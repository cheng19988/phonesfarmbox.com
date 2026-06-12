"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { CONTACT } from "@/lib/config";
import { POST_RFQ_EXPECTATIONS } from "@/data/quote-process";

function FieldLabel({ htmlFor, required, children }: { htmlFor?: string; required?: boolean; children: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-slate-700 mb-1.5">
      {children}
      {required && <span className="text-orange-600 ml-0.5">*</span>}
    </label>
  );
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [inquiryRef, setInquiryRef] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", { method: "POST", body: form });
    if (res.ok) {
      const data = await res.json();
      setInquiryRef(data.ref ?? "");
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  const waPrefill = encodeURIComponent(
    `Hi, RFQ inquiry${inquiryRef ? ` ${inquiryRef}` : ""}. Product: ${searchParams.get("product") || "phone farm hardware"}. `
  );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="px-6 py-5 md:px-8 border-b border-slate-200 bg-slate-50">
        <h2 className="text-xl font-bold text-slate-900">Hardware quote request</h2>
        <p className="text-sm text-[var(--text-secondary)] mt-1">
          Prefer chat?{" "}
          <a href={`${CONTACT.whatsappUrl}?text=${waPrefill}`} target="_blank" rel="noopener noreferrer" className="link-accent font-medium">
            WhatsApp {CONTACT.whatsapp}
          </a>
          {" · "}
          Typical reply within one business day (GMT+8).
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <FieldLabel required>Name</FieldLabel>
            <input name="name" required className="input-field" />
          </div>
          <div>
            <FieldLabel required>Country / ship-to</FieldLabel>
            <input name="country" required placeholder="e.g. Germany, USA, UAE" className="input-field" />
          </div>
          <div>
            <FieldLabel required>WhatsApp / Telegram</FieldLabel>
            <input name="whatsapp" required className="input-field" placeholder="+country code" />
          </div>
          <div>
            <FieldLabel required>Email</FieldLabel>
            <input name="email" type="email" required className="input-field" />
          </div>
          <div>
            <FieldLabel required>Device quantity</FieldLabel>
            <input name="deviceQuantity" required placeholder="e.g. 20 nodes, 2 boxes" className="input-field" />
          </div>
          <div>
            <FieldLabel>Product / SKU</FieldLabel>
            <input
              name="productInterest"
              defaultValue={searchParams.get("product") || searchParams.get("service") || searchParams.get("interest") || ""}
              placeholder="phone-farm-box, motherboard-box…"
              className="input-field"
            />
          </div>
        </div>

        <div>
          <FieldLabel required>Project summary</FieldLabel>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Use case (TikTok farm, QA lab, etc.), Android/iPhone mix, timeline, freight preference (air/sea)…"
            className="input-field"
          />
        </div>

        <details className="rounded-xl border border-slate-200 bg-slate-50/50 open:bg-white">
          <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-slate-800 select-none">
            Advanced configuration (optional)
          </summary>
          <div className="px-4 pb-4 pt-2 grid sm:grid-cols-2 gap-4 border-t border-slate-200">
            <div>
              <FieldLabel>Connection mode</FieldLabel>
              <select name="connectionMode" className="input-field">
                <option value="">Not sure</option>
                <option value="USB">USB</option>
                <option value="OTG">OTG</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div>
              <FieldLabel>Voltage</FieldLabel>
              <select name="voltageRegion" className="input-field">
                <option value="">Not sure</option>
                <option value="110V">110V</option>
                <option value="220V">220V</option>
                <option value="220-240V">220–240V</option>
              </select>
            </div>
            <div>
              <FieldLabel>Chassis</FieldLabel>
              <select name="chassisConfig" className="input-field">
                <option value="">Not sure</option>
                <option value="Empty chassis only">Empty chassis only</option>
                <option value="With phones / devices included">Phones on quote</option>
                <option value="BYO devices to mount">BYO devices</option>
              </select>
            </div>
            <div>
              <FieldLabel>Payment preference</FieldLabel>
              <select name="paymentPreference" className="input-field">
                <option value="">Not sure</option>
                <option value="USDT">USDT TRC20</option>
                <option value="Bank transfer">Bank T/T</option>
                <option value="Wise">Wise</option>
                <option value="PayPal">PayPal</option>
              </select>
            </div>
            <div>
              <FieldLabel>Phone</FieldLabel>
              <input name="phone" className="input-field" />
            </div>
            <div>
              <FieldLabel>Budget (USD)</FieldLabel>
              <input name="budget" placeholder="Optional" className="input-field" />
            </div>
            <div className="sm:col-span-2">
              <FieldLabel>Target models</FieldLabel>
              <input name="targetModels" placeholder="Samsung A-series, iPhone 11, etc." className="input-field" />
            </div>
            <div className="sm:col-span-2 flex flex-wrap gap-3">
              {[
                { name: "needDatasheet", label: "Need datasheet" },
                { name: "needPackingPhoto", label: "Packing photo" },
                { name: "needShippingSize", label: "Shipping dimensions" },
              ].map(({ name, label }) => (
                <label key={name} className="inline-flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" name={name} value="yes" className="rounded border-slate-300 text-orange-600" />
                  {label}
                </label>
              ))}
            </div>
          </div>
        </details>

        <button type="submit" disabled={status === "loading"} className="btn-primary w-full text-base py-3.5">
          {status === "loading" ? "Sending…" : "Submit RFQ"}
        </button>

        {status === "success" && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-sm space-y-3">
            <p className="text-emerald-900 font-semibold text-base">
              Inquiry received{inquiryRef ? ` — ref ${inquiryRef}` : ""}
            </p>
            <p className="text-slate-700">Save this reference when messaging us on WhatsApp.</p>
            <ul className="space-y-2 text-slate-600">
              {POST_RFQ_EXPECTATIONS.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-emerald-600 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={`${CONTACT.whatsappUrl}?text=${encodeURIComponent(`Hi, following up on RFQ ${inquiryRef}. `)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex text-sm mt-2"
            >
              Open WhatsApp with ref
            </a>
          </div>
        )}
        {status === "error" && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            Send failed — try{" "}
            <a href={CONTACT.whatsappUrl} className="font-semibold underline">WhatsApp</a>.
          </div>
        )}
      </form>
    </div>
  );
}
