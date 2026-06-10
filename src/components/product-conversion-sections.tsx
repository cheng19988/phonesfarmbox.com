import Link from "next/link";
import type { ProductB2B } from "@/data/product-b2b";
import {
  getProductComparisons,
  QUOTE_PREPARE_CHECKLIST,
} from "@/data/product-conversion";

export function ProductFitSection({ b2b }: { b2b: ProductB2B }) {
  return (
    <section className="grid md:grid-cols-2 gap-4">
      <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50">
        <h3 className="text-sm font-semibold text-emerald-800 mb-2">Best fit for</h3>
        <p className="text-sm text-slate-700">{b2b.bestFor}</p>
      </div>
      <div className="info-panel">
        <h3 className="text-sm font-semibold text-slate-700 mb-2">Not ideal for</h3>
        <p className="text-sm text-slate-600">{b2b.notIdealFor}</p>
      </div>
      {b2b.confirmBeforeQuote.length > 0 && (
        <div className="md:col-span-2 p-4 rounded-xl border border-orange-200 bg-orange-50/60">
          <h3 className="text-sm font-semibold text-orange-800 mb-2">Buyer should confirm before quote</h3>
          <ul className="text-sm text-slate-700 space-y-1">
            {b2b.confirmBeforeQuote.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export function ProductCompareSection({ slug }: { slug: string }) {
  const comparisons = getProductComparisons(slug);
  if (!comparisons.length) return null;

  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Compare with related options</h2>
      <div className="space-y-4">
        {comparisons.map((c) => (
          <div key={c.otherSlug} className="info-panel text-sm">
            <p className="text-slate-500 mb-2">
              vs{" "}
              <Link href={`/products/${c.otherSlug}`} className="link-accent">
                {c.otherLabel}
              </Link>
            </p>
            <p className="text-slate-700 mb-1">
              <span className="text-emerald-700 font-medium">This SKU:</span> {c.chooseThis}
            </p>
            <p className="text-slate-600">
              <span className="text-slate-500 font-medium">Other option:</span> {c.chooseOther}
            </p>
          </div>
        ))}
        <p className="text-xs text-slate-500">
          Not sure which fits?{" "}
          <Link href="/contact" className="link-accent">
            Request a quote
          </Link>{" "}
          with your use case — we confirm configuration before assembly.
        </p>
      </div>
    </section>
  );
}

export function CommonCombinationsSection({ items }: { items: string[] }) {
  if (!items.length) return null;

  return (
    <section className="info-panel">
      <h3 className="font-bold text-slate-900 mb-3">Common purchase combinations</h3>
      <ul className="text-sm text-slate-600 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-orange-600 shrink-0">+</span>
            {item}
          </li>
        ))}
      </ul>
      <p className="text-xs text-slate-500 mt-3">Quantities and line items confirmed on written quote — no fixed bundle pricing on this page.</p>
    </section>
  );
}

export function QuotePrepareSection({ productSlug }: { productSlug: string }) {
  return (
    <section className="info-panel bg-slate-50">
      <h3 className="font-semibold text-slate-900 text-sm mb-3">Before requesting a quote, prepare:</h3>
      <ul className="text-xs text-slate-600 space-y-1.5 mb-4">
        {QUOTE_PREPARE_CHECKLIST.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-slate-400 shrink-0">○</span>
            {item}
          </li>
        ))}
      </ul>
      <Link href={`/contact?product=${productSlug}`} className="link-accent text-sm">
        Open contact form with RFQ fields →
      </Link>
    </section>
  );
}

export function EnhancedAddonsSection({
  addons,
  relatedSlugs,
}: {
  addons: string[];
  relatedSlugs: string[];
}) {
  const slugLabels: Record<string, string> = {
    "usb-hub": "USB Hub Solution",
    "power-supply-solution": "Power Supply Solution",
    "cooling-solution": "Cooling Solution",
    "network-equipment": "Network Equipment",
    "remote-control-setup": "Remote Control Setup",
    "phone-farm-box": "Phone Farm Box",
    "motherboard-box": "Motherboard Box",
    "empty-box-chassis": "Empty Box / Chassis",
  };

  return (
    <section className="info-panel">
      <h3 className="font-bold text-slate-900 mb-3">Optional add-ons</h3>
      <ul className="space-y-1 text-sm text-slate-600 mb-3">
        {addons.map((a) => (
          <li key={a}>• {a}</li>
        ))}
      </ul>
      {relatedSlugs.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200">
          {relatedSlugs.slice(0, 4).map((s) => (
            <Link
              key={s}
              href={`/products/${s}`}
              className="text-xs px-2 py-1 rounded-lg border border-slate-200 text-slate-600 hover:text-orange-700 hover:border-orange-300 bg-white"
            >
              {slugLabels[s] ?? s}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
