import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { CONTACT } from "@/lib/config";

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
    detail: "MOQ 1 unit · Single chassis or module · Standard burn-in · Air freight quoted separately",
    differs: "Lowest commitment — ideal for mount compatibility and cooling checks before bulk PO.",
    from: "From $265 (empty chassis SKUs)",
  },
  {
    name: "Standard deployment",
    desc: "Single team rolling out 20–60 devices.",
    detail: "1–3 boxes · Hub/PSU matched to device list · Remote setup optional",
    differs: "Matched BOM on one invoice — hub tier and PSU sized to your node list, not generic bundles.",
    from: "Quote per BOM",
  },
  {
    name: "Bulk / rack project",
    desc: "Agency or enterprise room build-out.",
    detail: "5+ boxes or custom cabinet · Volume pricing · Sea freight · Dedicated PM on request",
    differs: "Volume tiers, phased shipment, electrical load sheet, and named project contact.",
    from: "Custom quote",
  },
];

const PRICE_FACTORS = [
  { factor: "Phone / board models", note: "Mount, power draw, and ROM path — locked before assembly" },
  { factor: "Quantity & box count", note: "Volume tiers from 3+ boxes; rack projects priced separately" },
  { factor: "Chassis type", note: "Phone box vs motherboard vs empty chassis vs iPhone layout" },
  { factor: "USB hub tier", note: "Port count and powered industrial grade vs consumer" },
  { factor: "PSU & cooling", note: "Wattage headroom and fan kit matched to load" },
  { factor: "Cables & accessories", note: "Region plugs, spare leads, network kit" },
  { factor: "Packing & freight", note: "Air vs sea, carton vs pallet, destination duties excluded" },
  { factor: "Integration services", note: "Remote setup blocks quoted separately" },
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
          List prices are USD starting points. <strong className="text-slate-300">Final price depends on phone model, quantity, chassis, hub, power, cables, packing, and shipping destination</strong> — request a written quote before payment.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {TIERS.map((t) => (
            <div key={t.name} className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col">
              <h2 className="text-lg font-bold text-white mb-2">{t.name}</h2>
              <p className="text-sm text-slate-300 mb-2">{t.desc}</p>
              <p className="text-xs text-slate-500 mb-3">{t.detail}</p>
              <p className="text-xs text-slate-400 mb-4 flex-1">{t.differs}</p>
              <p className="text-amber-400 font-semibold mb-4">{t.from}</p>
              <Link href="/contact" className="btn-primary text-center text-sm py-2">Request Quote</Link>
            </div>
          ))}
        </div>

        <div className="mb-14">
          <h2 className="text-xl font-bold text-white mb-4">What affects your quote</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {PRICE_FACTORS.map((p) => (
              <div key={p.factor} className="p-4 rounded-lg border border-slate-800 text-sm">
                <div className="font-medium text-white">{p.factor}</div>
                <div className="text-slate-500 mt-1">{p.note}</div>
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
            5+ boxes, mixed SKUs, or cabinet projects — send a device matrix (quantity, Android/iPhone, empty vs with phones, country) and we return tiered pricing and lead time.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact?type=bulk" className="btn-primary">Request Bulk Quote</Link>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp Sales</a>
          </div>
        </div>

        <div className="text-sm text-slate-500 space-y-2 mb-10">
          <p>
            <strong className="text-slate-400">Payment:</strong> USDT (Tron TRC20) for small orders — manually confirmed by sales after you send tx hash. T/T, Wise, or PayPal for bulk by invoice.
          </p>
          <p>
            Catalog: <Link href="/products" className="text-amber-400 hover:underline">all products</Link>
            {" · "}
            <Link href="/faq" className="text-amber-400 hover:underline">ordering FAQ</Link>
          </p>
        </div>

        <div className="text-center p-10 rounded-2xl border border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-3">Request Quote</h2>
          <p className="text-slate-400 mb-6">Share quantity, models, and destination — we reply with configuration and lead time on business days.</p>
          <Link href="/contact" className="btn-primary px-8 py-3">Contact Sales</Link>
        </div>
      </div>
    </div>
  );
}
