"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { CONTACT } from "@/lib/config";
import { POST_RFQ_EXPECTATIONS } from "@/data/quote-process";
import { Surface } from "@/components/ui/surface";

export function ContactForm() {
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
    <Surface padding="lg" className="border-orange-200">
      <h2 className="text-xl font-bold text-slate-900 mb-1">Send your RFQ</h2>
      <p className="text-sm text-[var(--text-secondary)] mb-6">
        Written quote before assembly — no account required. Typical reply within one business day when details are complete.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-[var(--text-muted)] mb-1">Name *</label>
            <input name="name" required className="input-field" />
          </div>
          <div>
            <label className="block text-sm text-[var(--text-muted)] mb-1">Country *</label>
            <input name="country" required placeholder="Shipping destination" className="input-field" />
          </div>
          <div>
            <label className="block text-sm text-[var(--text-muted)] mb-1">WhatsApp / Telegram *</label>
            <input name="whatsapp" required className="input-field" placeholder="For quote follow-up" />
          </div>
          <div>
            <label className="block text-sm text-[var(--text-muted)] mb-1">Phone</label>
            <input name="phone" className="input-field" />
          </div>
          <div>
            <label className="block text-sm text-[var(--text-muted)] mb-1">Email *</label>
            <input name="email" type="email" required className="input-field" />
          </div>
          <div>
            <label className="block text-sm text-[var(--text-muted)] mb-1">Target device count *</label>
            <input name="deviceQuantity" required placeholder="e.g. 20, 40, 100+" className="input-field" />
          </div>
          <div>
            <label className="block text-sm text-[var(--text-muted)] mb-1">Target product / SKU</label>
            <input
              name="productInterest"
              defaultValue={searchParams.get("product") || searchParams.get("service") || searchParams.get("interest") || ""}
              placeholder="e.g. phone-farm-box, empty-box-chassis"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm text-[var(--text-muted)] mb-1">Budget range (USD)</label>
            <input name="budget" placeholder="Optional" className="input-field" />
          </div>
          <div>
            <label className="block text-sm text-[var(--text-muted)] mb-1">Connection mode</label>
            <select name="connectionMode" className="input-field">
              <option value="">Not sure / ask at quote</option>
              <option value="USB">USB — standard wired host control</option>
              <option value="OTG">OTG — quoted ROM / Ethernet path</option>
              <option value="Hybrid">Hybrid — mixed models or workflows</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-[var(--text-muted)] mb-1">Voltage region</label>
            <select name="voltageRegion" className="input-field">
              <option value="">Not sure</option>
              <option value="110V">110V</option>
              <option value="220V">220V</option>
              <option value="220-240V">220–240V</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-[var(--text-muted)] mb-1">Chassis configuration</label>
            <select name="chassisConfig" className="input-field">
              <option value="">Not sure</option>
              <option value="Empty chassis only">Empty chassis only</option>
              <option value="With phones / devices included">With phones / devices included</option>
              <option value="BYO devices to mount">BYO devices to mount</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-[var(--text-muted)] mb-1">Payment preference</label>
            <select name="paymentPreference" className="input-field">
              <option value="">Not sure</option>
              <option value="USDT">USDT (Tron TRC20)</option>
              <option value="Bank transfer">Bank transfer (T/T)</option>
              <option value="Wise">Wise</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm text-[var(--text-muted)] mb-1">Target phone / board models</label>
          <input
            name="targetModels"
            placeholder='e.g. Samsung A-series, iPhone 12 mix — or "recommend at quote"'
            className="input-field"
          />
        </div>
        <div>
          <label className="block text-sm text-[var(--text-muted)] mb-2">Documentation needed (optional)</label>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="needDatasheet" value="yes" className="rounded border-slate-300 text-orange-600" />
              Datasheet / spec sheet
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="needPackingPhoto" value="yes" className="rounded border-slate-300 text-orange-600" />
              Packing photo
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="needShippingSize" value="yes" className="rounded border-slate-300 text-orange-600" />
              Shipping size &amp; weight
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm text-[var(--text-muted)] mb-1">Project details *</label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Use case (app testing, QA, social media team, etc.), timeline, Android/iPhone mix, anything else for your written quote..."
            className="input-field"
          />
        </div>
        <button type="submit" disabled={status === "loading"} className="btn-primary w-full">
          {status === "loading" ? "Sending..." : "Send Inquiry"}
        </button>
        {status === "success" && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm space-y-3">
            <p className="text-emerald-800 font-medium">Inquiry received — thank you.</p>
            <p className="text-slate-700">What happens next:</p>
            <ul className="space-y-2 text-slate-600">
              {POST_RFQ_EXPECTATIONS.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-emerald-500 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-[var(--text-muted)] pt-1">
              USDT payments remain manually confirmed by sales after you send transaction hash — not automatic on-chain verification.
              {" "}
              <Link href="/help/usdt-payment-confirmation-hardware-orders" className="link-accent">
                USDT payment guide
              </Link>
              {" · "}
              <Link href="/pricing#quote-process" className="link-accent">
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
    </Surface>
  );
}
