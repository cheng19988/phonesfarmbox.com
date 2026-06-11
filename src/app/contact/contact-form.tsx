"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { CONTACT } from "@/lib/config";
import { POST_RFQ_EXPECTATIONS } from "@/data/quote-process";

function FormSection({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return (
    <fieldset className="space-y-4 pt-2 first:pt-0">
      <legend className="w-full pb-4 mb-2 border-b border-slate-200">
        <span className="block text-sm font-bold text-slate-900 uppercase tracking-wide">{title}</span>
        {description && <span className="block text-xs text-[var(--text-muted)] mt-1 font-normal normal-case tracking-normal">{description}</span>}
      </legend>
      {children}
    </fieldset>
  );
}

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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", { method: "POST", body: form });
    setStatus(res.ok ? "success" : "error");
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60 overflow-hidden">
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-5 md:px-8 md:py-6 text-white">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">Send your RFQ</h2>
            <p className="text-orange-50 text-sm mt-1 leading-relaxed">
              Written quote before assembly — no account required. Typical reply within one business day.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
        <FormSection title="Your contact details" description="We use these to send your written BOM and follow up on WhatsApp or email.">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <FieldLabel required>Name</FieldLabel>
              <input name="name" required className="input-field" />
            </div>
            <div>
              <FieldLabel required>Country / region</FieldLabel>
              <input name="country" required placeholder="Shipping destination" className="input-field" />
            </div>
            <div>
              <FieldLabel required>WhatsApp / Telegram</FieldLabel>
              <input name="whatsapp" required className="input-field" placeholder="For quote follow-up" />
            </div>
            <div>
              <FieldLabel>Phone</FieldLabel>
              <input name="phone" className="input-field" />
            </div>
            <div className="sm:col-span-2">
              <FieldLabel required>Email</FieldLabel>
              <input name="email" type="email" required className="input-field" />
            </div>
          </div>
        </FormSection>

        <FormSection title="Hardware requirements" description="Rough numbers are fine — we confirm slot count and BOM on the written quote.">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <FieldLabel required>Target device count</FieldLabel>
              <input name="deviceQuantity" required placeholder="e.g. 20, 40, 100+" className="input-field" />
            </div>
            <div>
              <FieldLabel>Target product / SKU</FieldLabel>
              <input
                name="productInterest"
                defaultValue={searchParams.get("product") || searchParams.get("service") || searchParams.get("interest") || ""}
                placeholder="e.g. phone-farm-box, empty-box-chassis"
                className="input-field"
              />
            </div>
            <div>
              <FieldLabel>Connection mode</FieldLabel>
              <select name="connectionMode" className="input-field">
                <option value="">Not sure / ask at quote</option>
                <option value="USB">USB — standard wired host control</option>
                <option value="OTG">OTG — quoted ROM / Ethernet path</option>
                <option value="Hybrid">Hybrid — mixed models or workflows</option>
              </select>
            </div>
            <div>
              <FieldLabel>Voltage region</FieldLabel>
              <select name="voltageRegion" className="input-field">
                <option value="">Not sure</option>
                <option value="110V">110V</option>
                <option value="220V">220V</option>
                <option value="220-240V">220–240V</option>
              </select>
            </div>
            <div>
              <FieldLabel>Chassis configuration</FieldLabel>
              <select name="chassisConfig" className="input-field">
                <option value="">Not sure</option>
                <option value="Empty chassis only">Empty chassis only</option>
                <option value="With phones / devices included">With phones / devices included</option>
                <option value="BYO devices to mount">BYO devices to mount</option>
              </select>
            </div>
            <div>
              <FieldLabel>Payment preference</FieldLabel>
              <select name="paymentPreference" className="input-field">
                <option value="">Not sure</option>
                <option value="USDT">USDT (Tron TRC20)</option>
                <option value="Bank transfer">Bank transfer (T/T)</option>
                <option value="Wise">Wise</option>
                <option value="PayPal">PayPal</option>
              </select>
            </div>
            <div>
              <FieldLabel>Budget range (USD)</FieldLabel>
              <input name="budget" placeholder="Optional" className="input-field" />
            </div>
            <div>
              <FieldLabel>Target phone / board models</FieldLabel>
              <input
                name="targetModels"
                placeholder='e.g. Samsung A-series — or "recommend at quote"'
                className="input-field"
              />
            </div>
          </div>
        </FormSection>

        <FormSection title="Documentation & project notes">
          <div>
            <FieldLabel>Documentation needed (optional)</FieldLabel>
            <div className="flex flex-wrap gap-3 mt-1">
              {[
                { name: "needDatasheet", label: "Datasheet / spec sheet" },
                { name: "needPackingPhoto", label: "Packing photo" },
                { name: "needShippingSize", label: "Shipping size & weight" },
              ].map(({ name, label }) => (
                <label
                  key={name}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-700 cursor-pointer hover:border-orange-300 hover:bg-orange-50/50 has-[:checked]:border-orange-400 has-[:checked]:bg-orange-50 has-[:checked]:text-orange-900 transition-colors"
                >
                  <input type="checkbox" name={name} value="yes" className="rounded border-slate-300 text-orange-600 focus:ring-orange-500/25" />
                  {label}
                </label>
              ))}
            </div>
          </div>
          <div>
            <FieldLabel required>Project details</FieldLabel>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Use case (app testing, QA, social team, etc.), timeline, Android/iPhone mix, freight preference (air/sea), anything else for your written quote..."
              className="input-field"
            />
          </div>
        </FormSection>

        <div className="pt-2">
          <button type="submit" disabled={status === "loading"} className="btn-primary w-full text-base py-3.5 shadow-lg shadow-orange-600/20">
            {status === "loading" ? "Sending inquiry…" : "Send RFQ inquiry"}
          </button>
          <p className="text-xs text-center text-[var(--text-muted)] mt-3">
            By submitting you agree we may contact you about this quote request.
          </p>
        </div>

        {status === "success" && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-sm space-y-3">
            <p className="text-emerald-800 font-semibold text-base">Inquiry received — thank you.</p>
            <p className="text-slate-700 font-medium">What happens next:</p>
            <ul className="space-y-2 text-slate-600">
              {POST_RFQ_EXPECTATIONS.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-emerald-600 shrink-0 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-[var(--text-muted)] pt-1 border-t border-emerald-200/80">
              USDT payments are manually confirmed by sales after you send the transaction hash.{" "}
              <Link href="/help/usdt-payment-confirmation-hardware-orders" className="link-accent">
                USDT payment guide
              </Link>
              {" · "}
              <Link href="/pricing#quote-process" className="link-accent">
                Full quote process
              </Link>
            </p>
          </div>
        )}
        {status === "error" && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            Could not send the form. Please message us on{" "}
            <a href={CONTACT.whatsappUrl} className="font-semibold underline">
              WhatsApp
            </a>
            .
          </div>
        )}
      </form>
    </div>
  );
}
