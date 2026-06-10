import Link from "next/link";
import { DELIVERY_FULFILLMENT_STEPS } from "@/data/delivery-process";

type Variant = "full" | "compact";

export function DeliveryProcessSection({
  variant = "full",
  title = "Delivery and fulfillment process",
  showCta = false,
}: {
  variant?: Variant;
  title?: string;
  showCta?: boolean;
}) {
  const steps = variant === "compact" ? DELIVERY_FULFILLMENT_STEPS.slice(0, 5) : DELIVERY_FULFILLMENT_STEPS;

  if (variant === "compact") {
    return (
      <div className="info-panel">
        <h3 className="font-semibold text-slate-900 text-sm mb-3">{title}</h3>
        <ol className="grid sm:grid-cols-2 gap-3 text-xs text-slate-600">
          {steps.map((s) => (
            <li key={s.step} className="flex gap-2">
              <span className="shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center justify-center font-mono text-[10px]">
                {s.step}
              </span>
              <span>
                <span className="text-slate-800 font-medium">{s.title}</span>
                {" — "}
                {s.detail}
              </span>
            </li>
          ))}
        </ol>
        {showCta && (
          <p className="text-xs text-slate-500 mt-3">
            Full delivery flow:{" "}
            <Link href="/pricing#delivery-process" className="link-accent">
              pricing page
            </Link>
            {" · "}
            <Link href="/help/delivery-process-phone-farm-hardware" className="link-accent">
              delivery guide
            </Link>
          </p>
        )}
      </div>
    );
  }

  return (
    <section id="delivery-process" className="mb-14">
      <h2 className="text-xl font-bold text-slate-900 mb-2">{title}</h2>
      <p className="text-sm text-slate-600 mb-6">
        After quote approval and payment confirmation — assembly, QC, packing, and shipment steps vary by configuration. No platform outcome guarantees.
      </p>
      <ol className="space-y-4">
        {steps.map((s) => (
          <li key={s.step} className="flex gap-4 items-start p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
            <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold text-sm">
              {s.step}
            </span>
            <div>
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{s.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
