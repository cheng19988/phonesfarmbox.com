import Link from "next/link";
import { FREE_TOOLS } from "@/data/tools";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Free Tools — Phone Farm Planning & Guides",
  description: "Free phone farm sizing calculator, network IP planner, box vs cloud comparison, power estimator, buying guide checklist, and glossary reference.",
  path: "/tools",
});

export default function ToolsIndexPage() {
  return (
    <div className="section">
      <div className="container-wide">
        <h1 className="section-title">Free Tools & Resources</h1>
        <p className="section-subtitle">
          Planning guides and reference tools for phone farm box hardware deployment — sizing, networking, comparison, and buying checklists.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FREE_TOOLS.map((t) => (
            <Link key={t.slug} href={`/tools/${t.slug}`} className="card p-6 hover:border-amber-800 transition-colors group">
              <h2 className="font-bold text-white group-hover:text-amber-400 transition-colors">{t.title}</h2>
              <p className="text-sm text-slate-400 mt-2">{t.description}</p>
              <span className="text-xs text-amber-400 mt-4 inline-block">Open tool →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
