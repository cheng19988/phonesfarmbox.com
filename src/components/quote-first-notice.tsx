import Link from "next/link";
import { RFQ_FIRST_NOTICE } from "@/lib/pricing-copy";

export function QuoteFirstNotice({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="text-xs text-[var(--text-muted)]">
        {RFQ_FIRST_NOTICE}{" "}
        <Link href="/how-to-order" className="link-accent font-medium">
          How to order →
        </Link>
      </p>
    );
  }

  return (
    <div className="rounded-xl border border-orange-200 bg-orange-50/50 px-4 py-3 text-sm text-slate-800">
      <p className="font-semibold text-slate-900 mb-1">Quote-first B2B supplier</p>
      <p className="text-[var(--text-secondary)] leading-relaxed">{RFQ_FIRST_NOTICE}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs">
        <Link href="/pricing#quote-process" className="link-accent font-medium">
          Written BOM & proforma
        </Link>
        <Link href="/pricing#delivery" className="link-accent font-medium">
          QC, packing & shipping
        </Link>
        <Link href="/help" className="link-accent font-medium">
          Setup & knowledge base
        </Link>
      </div>
    </div>
  );
}
