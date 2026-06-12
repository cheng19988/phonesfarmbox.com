import Link from "next/link";
import type { ReactNode } from "react";
import { CONTACT } from "@/lib/config";
import { ContactFormClientBridge, ContactFormSuccess } from "./contact-form-client-bridge";

function FieldLabel({
  htmlFor,
  required,
  children,
}: {
  htmlFor?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-slate-700 mb-1.5">
      {children}
      {required && <span className="text-orange-600 ml-0.5">*</span>}
    </label>
  );
}

export function ContactForm({
  initialProduct = "",
  initialService = "",
  initialInterest = "",
  submittedRef = "",
  submitError = false,
}: {
  initialProduct?: string;
  initialService?: string;
  initialInterest?: string;
  submittedRef?: string;
  submitError?: boolean;
}) {
  const productPrefill = initialProduct || initialService || initialInterest || "";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="px-6 py-5 md:px-8 border-b border-slate-200 bg-slate-50">
        <h2 className="text-xl font-bold text-slate-900">Hardware quote request (RFQ)</h2>
        <p className="text-sm text-[var(--text-secondary)] mt-1">
          Written BOM and proforma before payment — configuration is not locked until you approve the quote.{" "}
          Prefer chat?{" "}
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="link-accent font-medium">
            WhatsApp {CONTACT.whatsapp}
          </a>
          {" · "}
          Typical reply within one business day (GMT+8).
        </p>
      </div>

      {submittedRef && <div className="p-6 md:p-8 pb-0"><ContactFormSuccess inquiryRef={submittedRef} /></div>}

      {submitError && (
        <div className="mx-6 md:mx-8 mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          Send failed — try{" "}
          <a href={CONTACT.whatsappUrl} className="font-semibold underline">
            WhatsApp
          </a>
          .
        </div>
      )}

      <form
        id="rfq-form"
        action="/api/contact"
        method="POST"
        className="p-6 md:p-8 space-y-6"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <FieldLabel htmlFor="rfq-name" required>
              Name
            </FieldLabel>
            <input id="rfq-name" name="name" required autoComplete="name" className="input-field" />
          </div>
          <div>
            <FieldLabel htmlFor="rfq-email" required>
              Email
            </FieldLabel>
            <input id="rfq-email" name="email" type="email" required autoComplete="email" className="input-field" />
          </div>
          <div>
            <FieldLabel htmlFor="rfq-whatsapp" required>
              WhatsApp / Telegram
            </FieldLabel>
            <input
              id="rfq-whatsapp"
              name="whatsapp"
              required
              autoComplete="tel"
              placeholder="+country code or @handle"
              className="input-field"
            />
          </div>
          <div>
            <FieldLabel htmlFor="rfq-country" required>
              Shipping country
            </FieldLabel>
            <input
              id="rfq-country"
              name="country"
              required
              placeholder="e.g. Germany, USA, UAE"
              autoComplete="country-name"
              className="input-field"
            />
          </div>
          <div>
            <FieldLabel htmlFor="rfq-product" required>
              Product interest / SKU
            </FieldLabel>
            <input
              id="rfq-product"
              name="productInterest"
              required
              defaultValue={productPrefill}
              placeholder="phone-farm-box, motherboard-box, USB hub…"
              className="input-field"
            />
          </div>
          <div>
            <FieldLabel htmlFor="rfq-qty" required>
              Quantity / node count
            </FieldLabel>
            <input
              id="rfq-qty"
              name="deviceQuantity"
              required
              placeholder="e.g. 20 nodes, 2 boxes"
              className="input-field"
            />
          </div>
          <div>
            <FieldLabel htmlFor="rfq-platform" required>
              Platform
            </FieldLabel>
            <select id="rfq-platform" name="platform" required className="input-field" defaultValue="">
              <option value="" disabled>
                Select platform
              </option>
              <option value="Android">Android</option>
              <option value="iPhone">iPhone</option>
              <option value="Android + iPhone">Android + iPhone</option>
              <option value="Motherboard / headless">Motherboard / headless</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>
          <div>
            <FieldLabel htmlFor="rfq-connection" required>
              Connection mode
            </FieldLabel>
            <select id="rfq-connection" name="connectionMode" required className="input-field" defaultValue="">
              <option value="" disabled>
                Select connection mode
              </option>
              <option value="USB">USB</option>
              <option value="OTG">OTG</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Not sure">Not sure — advise on quote</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <FieldLabel htmlFor="rfq-budget">Budget (USD, optional)</FieldLabel>
            <input id="rfq-budget" name="budget" placeholder="Optional planning figure" className="input-field" />
          </div>
        </div>

        <div>
          <FieldLabel htmlFor="rfq-message" required>
            Message / project summary
          </FieldLabel>
          <textarea
            id="rfq-message"
            name="message"
            required
            rows={4}
            placeholder="Use case, target models, voltage region (110V/220V), timeline, air vs sea freight, remote setup needs…"
            className="input-field"
          />
        </div>

        <details className="rounded-xl border border-slate-200 bg-slate-50/50 open:bg-white">
          <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-slate-800 select-none">
            Advanced configuration (optional)
          </summary>
          <div className="px-4 pb-4 pt-2 grid sm:grid-cols-2 gap-4 border-t border-slate-200">
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
              <FieldLabel>Phone (optional)</FieldLabel>
              <input name="phone" autoComplete="tel" className="input-field" />
            </div>
            <div className="sm:col-span-2">
              <FieldLabel>Target models</FieldLabel>
              <input name="targetModels" placeholder="Samsung A-series, iPhone 11, board SKU…" className="input-field" />
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

        <label className="flex items-start gap-3 text-sm text-slate-600 cursor-pointer">
          <input
            type="checkbox"
            name="privacyConsent"
            value="yes"
            required
            className="mt-1 rounded border-slate-300 text-orange-600 shrink-0"
          />
          <span>
            I agree to the processing of my inquiry data per the{" "}
            <Link href="/privacy" className="link-accent font-medium" target="_blank">
              Privacy Policy
            </Link>
            .<span className="text-orange-600 ml-0.5">*</span>
          </span>
        </label>

        <button type="submit" className="btn-primary w-full text-base py-3.5">
          Submit RFQ
        </button>

        <div id="rfq-form-status" aria-live="polite" />

        <noscript>
          <p className="text-xs text-slate-500">
            JavaScript is off — click Submit RFQ to send via standard form POST. You will return to this page with a
            reference number.
          </p>
        </noscript>
      </form>

      <ContactFormClientBridge />
    </div>
  );
}
