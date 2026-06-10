import Link from "next/link";
import { QUOTE_PROCESS_STEPS } from "@/data/quote-process";

type Variant = "full" | "compact";

export function QuoteProcessSection({
  variant = "full",
  title = "How the quote process works",
  showCta = false,
}: {
  variant?: Variant;
  title?: string;
  showCta?: boolean;
}) {
  const steps = variant === "compact" ? QUOTE_PROCESS_STEPS.slice(0, 4) : QUOTE_PROCESS_STEPS;

  if (variant === "compact") {
    return (
      <div className="info-panel">
        <h3 className="font-semibold text-slate-900 text-sm mb-3">{title}</h3>
        <ol className="grid sm:grid-cols-2 gap-3 text-xs text-slate-600">
          {steps.map((q) => (
            <li key={q.step} className="flex gap-2">
              <span className="shrink-0 w-5 h-5 rounded-full bg-orange-100 text-orange-700 border border-orange-200 flex items-center justify-center font-mono text-[10px]">
                {q.step}
              </span>
              <span>
                <span className="text-slate-800 font-medium">{q.title}</span>
                {" — "}
                {q.detail}
              </span>
            </li>
          ))}
        </ol>
        {showCta && (
          <p className="text-xs text-slate-500 mt-3">
            Full process:{" "}
            <Link href="/pricing#quote-process" className="link-accent">
              pricing page
            </Link>
          </p>
        )}
      </div>
    );
  }

  return (
    <section id="quote-process" className="mb-14">
      <h2 className="text-xl font-bold text-slate-900 mb-2">{title}</h2>
      <p className="text-sm text-slate-600 mb-6">
        Quote-based B2B hardware — lead time and BOM confirmed on written quote before assembly. No platform outcome guarantees.
      </p>
      <ol className="space-y-4">
        {steps.map((q) => (
          <li key={q.step} className="flex gap-4 items-start p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
            <span className="shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-700 border border-orange-200 flex items-center justify-center font-bold text-sm">
              {q.step}
            </span>
            <div>
              <h3 className="font-semibold text-slate-900">{q.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{q.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
