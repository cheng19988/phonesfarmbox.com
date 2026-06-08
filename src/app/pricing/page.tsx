import Link from "next/link";
import { DeliveryProcessSection } from "@/components/delivery-process-section";
import { QuoteProcessSection } from "@/components/quote-process-section";
import { buildMetadata } from "@/lib/seo";
import { CONTACT } from "@/lib/config";
import {
  PACKING_DOCUMENTATION_POINTS,
  REMOTE_SETUP_EXCLUDES,
  REMOTE_SETUP_INCLUDES,
  WARRANTY_AFTER_SALES_POINTS,
} from "@/data/delivery-process";
import {
  PAYMENT_OPTIONS,
  QUOTE_FACTORS,
  WRITTEN_QUOTE_INCLUDES,
} from "@/data/quote-process";

export const metadata = buildMetadata({
  title: "Hardware Pricing & Bulk Quote",
  description:
    "B2B phone farm hardware pricing — sample, standard deployment, and bulk project tiers. Price factors, TCO comparison, and request quote.",
  path: "/pricing",
});

const TIERS = [
  {
    name: "Small batch / Sample",
    desc: "Evaluate one box or accessory before a rack purchase.",
    detail: "MOQ 1 unit · Single chassis or module · Burn-in per product class · Air freight quoted separately",
    differs: "Lowest commitment — ideal for mount compatibility and cooling checks before bulk PO.",
    from: "From $265 (empty chassis SKUs)",
  },
  {
    name: "Standard deployment",
    desc: "Single team rolling out a multi-device Android farm or QA lab.",
    detail: "Multiple boxes · Hub/PSU matched to device list · Remote setup optional",
    differs: "Matched BOM on one invoice — hub tier and PSU sized to your node list, not generic bundles.",
    from: "Quote per BOM",
  },
  {
    name: "Bulk / rack project",
    desc: "Agency or enterprise room build-out.",
    detail: "Multi-box or custom cabinet · Volume pricing · Sea freight · Dedicated PM on request",
    differs: "Volume tiers, phased shipment, electrical load sheet, and named project contact.",
    from: "Custom quote",
  },
];

const TCO_ROWS = [
  { factor: "Upfront cost", hardware: "One-time invoice (USD)", cloud: "Low setup, recurring monthly" },
  { factor: "Scale model", hardware: "Add physical boxes and hubs", cloud: "Add virtual seats" },
  { factor: "3-year ops (illustrative)", hardware: "Cap-ex + power + host PC", cloud: "Subscription × months × devices" },
  { factor: "Best fit", hardware: "Long-run multi-device ops you control", cloud: "Short tests or sandboxes" },
];

export default function PricingPage() {
  return (
    <div className="section">
      <div className="container-wide max-w-5xl">
        <h1 className="section-title">Hardware Pricing &amp; Bulk Inquiry</h1>
        <p className="section-subtitle">
          List prices are USD starting points.{" "}
          <strong className="text-slate-300">
            Final price depends on product type, empty vs phone-included configuration, connection mode, voltage region,
            destination, and documentation requests
          </strong>{" "}
          — request a written quote before payment.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {TIERS.map((t) => (
            <div key={t.name} className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col">
              <h2 className="text-lg font-bold text-white mb-2">{t.name}</h2>
              <p className="text-sm text-slate-300 mb-2">{t.desc}</p>
              <p className="text-xs text-slate-500 mb-3">{t.detail}</p>
              <p className="text-xs text-slate-400 mb-4 flex-1">{t.differs}</p>
              <p className="text-amber-400 font-semibold mb-4">{t.from}</p>
              <Link href="/contact" className="btn-primary text-center text-sm py-2">
                Request Quote
              </Link>
            </div>
          ))}
        </div>

        <QuoteProcessSection />

        <DeliveryProcessSection />

        <div className="mb-14">
          <h2 className="text-xl font-bold text-white mb-4">Packing list, photos, and shipping size</h2>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-400">
            {PACKING_DOCUMENTATION_POINTS.map((item) => (
              <li key={item} className="flex gap-2 p-3 rounded-lg border border-slate-800">
                <span className="text-emerald-500 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-14 grid lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Warranty and after-sales</h2>
            <ul className="space-y-2 text-sm text-slate-400">
              {WARRANTY_AFTER_SALES_POINTS.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-amber-500 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 mt-3">
              Details:{" "}
              <Link href="/terms" className="text-amber-400 hover:underline">
                Terms
              </Link>
              {" · "}
              <Link href="/refund" className="text-amber-400 hover:underline">
                Refund policy
              </Link>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Remote setup scope</h2>
            <p className="text-xs text-slate-500 mb-2">Includes:</p>
            <ul className="space-y-1.5 text-sm text-slate-400 mb-4">
              {REMOTE_SETUP_INCLUDES.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-emerald-500 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 mb-2">Does not include:</p>
            <ul className="space-y-1.5 text-sm text-slate-500">
              {REMOTE_SETUP_EXCLUDES.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-red-400/80 shrink-0">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-xl font-bold text-white mb-4">What is included in a written quote</h2>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-400">
            {WRITTEN_QUOTE_INCLUDES.map((item) => (
              <li key={item} className="flex gap-2 p-3 rounded-lg border border-slate-800">
                <span className="text-emerald-500 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-14">
          <h2 className="text-xl font-bold text-white mb-4">What affects your quote</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {QUOTE_FACTORS.map((p) => (
              <div key={p.factor} className="p-4 rounded-lg border border-slate-800 text-sm">
                <div className="font-medium text-white">{p.factor}</div>
                <div className="text-slate-500 mt-1">{p.note}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-xl font-bold text-white mb-4">Payment options</h2>
          <p className="text-sm text-slate-500 mb-4">
            Payment method and instructions are confirmed on your written quote or sales message — not on product pages.
          </p>
          <div className="space-y-3">
            {PAYMENT_OPTIONS.map((p) => (
              <div key={p.method} className="p-4 rounded-lg border border-slate-800 text-sm">
                <div className="font-medium text-white">{p.method}</div>
                <div className="text-slate-500 mt-1">{p.detail}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14 overflow-x-auto">
          <h2 className="text-xl font-bold text-white mb-4">Hardware purchase vs cloud subscription — TCO snapshot</h2>
          <p className="text-sm text-slate-500 mb-4">Illustrative comparison for procurement discussions — not a financial guarantee.</p>
          <table className="w-full text-sm border border-slate-800">
            <thead>
              <tr className="bg-slate-900/80 text-left">
                <th className="p-3 text-slate-400">Factor</th>
                <th className="p-3 text-white">Phone farm hardware (one-time)</th>
                <th className="p-3 text-slate-400">Cloud phone SaaS (recurring)</th>
              </tr>
            </thead>
            <tbody>
              {TCO_ROWS.map((r) => (
                <tr key={r.factor} className="border-t border-slate-800">
                  <td className="p-3 text-slate-400">{r.factor}</td>
                  <td className="p-3 text-slate-200">{r.hardware}</td>
                  <td className="p-3 text-slate-500">{r.cloud}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 rounded-xl border border-amber-800/30 bg-amber-950/10 mb-14">
          <h2 className="font-bold text-white mb-2">Bulk discount inquiry</h2>
          <p className="text-sm text-slate-400 mb-4">
            Multi-box, mixed SKU, or custom cabinet projects — send a device matrix (quantity, Android/iPhone mix, empty vs
            with phones, connection mode, voltage region, country) and we return tiered pricing with lead time confirmed on quote.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact?type=bulk" className="btn-primary">
              Request Bulk Quote
            </Link>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              WhatsApp Sales
            </a>
          </div>
        </div>

        <div className="text-sm text-slate-500 space-y-2 mb-10">
          <p>
            <strong className="text-slate-400">Lead time:</strong> Confirmed on quote — longer for phone-included orders,
            iPhone farm layouts, and custom cabinets after model and power plan review.
          </p>
          <p>
            Catalog:{" "}
            <Link href="/products" className="text-amber-400 hover:underline">
              all products
            </Link>
            {" · "}
            <Link href="/faq" className="text-amber-400 hover:underline">
              ordering FAQ
            </Link>
            {" · "}
            <Link href="/help/how-to-request-phone-farm-hardware-quote" className="text-amber-400 hover:underline">
              how to request a quote
            </Link>
            {" · "}
            <Link href="/help/delivery-process-phone-farm-hardware" className="text-amber-400 hover:underline">
              delivery process
            </Link>
          </p>
        </div>

        <div className="text-center p-10 rounded-2xl border border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-3">Request Quote</h2>
          <p className="text-slate-400 mb-6">
            Share quantity, models, connection mode, voltage region, and destination — we reply with configuration and lead
            time confirmed on quote.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-3">
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
}
