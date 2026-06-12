import { REFERENCE_PRICE_DISCLAIMER, REFERENCE_PRICE_LABEL } from "@/lib/pricing-copy";

type ReferencePriceProps = {
  amountUsd: number;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const SIZE_CLASSES = {
  sm: { amount: "text-lg font-bold", note: "text-[10px]" },
  md: { amount: "text-lg font-bold", note: "text-xs" },
  lg: { amount: "text-4xl font-bold", note: "text-sm" },
} as const;

export function ReferencePrice({ amountUsd, size = "md", className = "" }: ReferencePriceProps) {
  const s = SIZE_CLASSES[size];
  return (
    <div className={className}>
      <p className={`${s.amount} text-slate-900`}>
        {REFERENCE_PRICE_LABEL}: ${amountUsd.toLocaleString()}
      </p>
      <p className={`${s.note} text-[var(--text-muted)] mt-0.5`}>{REFERENCE_PRICE_DISCLAIMER}</p>
    </div>
  );
}

export function ReferencePriceInline({ amountUsd }: { amountUsd: number }) {
  return (
    <span className="inline-flex flex-col">
      <span>
        {REFERENCE_PRICE_LABEL}: ${amountUsd.toLocaleString()}
      </span>
      <span className="text-[10px] font-normal text-slate-500">{REFERENCE_PRICE_DISCLAIMER}</span>
    </span>
  );
}
