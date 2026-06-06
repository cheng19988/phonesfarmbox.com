import Link from "next/link";
import { PLANNING_TOOLS } from "@/data/tools";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Planning Tools — Capacity, Power & Quote Checklist",
  description: "Interactive estimators for phone farm box capacity, power, USB hubs, plus bulk quote checklists for hardware buyers.",
  path: "/tools",
});

export default function ToolsIndexPage() {
  return (
    <div className="section">
      <div className="container-wide">
        <h1 className="section-title">Planning Tools</h1>
        <p className="section-subtitle">
          Interactive estimators and checklists for sizing a hardware order. Results are planning aids — confirm with sales before purchase.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLANNING_TOOLS.map((t) => (
            <Link key={t.slug} href={`/tools/${t.slug}`} className="block p-6 rounded-xl border border-slate-800 hover:border-amber-800/50 transition-colors">
              <h2 className="font-bold text-white">{t.title}</h2>
              <p className="text-sm text-slate-400 mt-2">{t.description}</p>
              <span className="text-xs text-amber-400 mt-4 inline-block">
                {t.interactive ? "Open estimator →" : "Read guide →"}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
