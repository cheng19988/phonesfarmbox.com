import Link from "next/link";
import type { ReactNode } from "react";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { CTABand, Surface } from "@/components/ui/surface";
import { PLANNING_TOOLS } from "@/data/tools";
import { IMPORTED } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Planning Tools — Capacity, Power & Quote Checklist",
  description:
    "Interactive estimators for phone farm box capacity, power, USB hubs, plus bulk quote checklists for hardware buyers.",
  path: "/tools",
});

const TOOL_UI: Record<
  string,
  { tag: string; tagClass: string; icon: ReactNode }
> = {
  "phone-farm-capacity-estimator": {
    tag: "Estimator",
    tagClass: "bg-orange-100 text-orange-800 border-orange-200",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h10M4 17h6" />
        <rect x="15" y="14" width="5" height="5" rx="1" />
      </svg>
    ),
  },
  "power-consumption-estimator": {
    tag: "Estimator",
    tagClass: "bg-amber-100 text-amber-900 border-amber-200",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  "usb-port-requirement-calculator": {
    tag: "Calculator",
    tagClass: "bg-sky-100 text-sky-900 border-sky-200",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m-6 4h6m2 5H7a2 2 0 01-2-2V6a2 2 0 012-2h5l2 2h4a2 2 0 012 2v8a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  "bulk-quote-checklist": {
    tag: "Checklist",
    tagClass: "bg-emerald-100 text-emerald-900 border-emerald-200",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  "box-vs-cloud-comparison": {
    tag: "Guide",
    tagClass: "bg-violet-100 text-violet-900 border-violet-200",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  "buying-guide-checklist": {
    tag: "Checklist",
    tagClass: "bg-emerald-100 text-emerald-900 border-emerald-200",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
};

const ESTIMATORS = PLANNING_TOOLS.filter((t) => t.interactive);
const GUIDES = PLANNING_TOOLS.filter((t) => !t.interactive);

function ToolCard({ slug, title, description, interactive }: (typeof PLANNING_TOOLS)[number]) {
  const ui = TOOL_UI[slug] ?? {
    tag: "Tool",
    tagClass: "bg-slate-100 text-slate-700 border-slate-200",
    icon: null,
  };

  return (
    <Link href={`/tools/${slug}`} className="group block h-full">
      <Surface padding="md" hover className="h-full flex flex-col border-slate-200 shadow-sm hover:shadow-md hover:border-orange-300 transition-all">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 text-white flex items-center justify-center shadow-md shadow-orange-600/25 shrink-0 group-hover:scale-105 transition-transform">
            {ui.icon}
          </div>
          <span className={`text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border ${ui.tagClass}`}>
            {ui.tag}
          </span>
        </div>
        <h2 className="font-bold text-slate-900 text-lg leading-snug group-hover:text-orange-700 transition-colors">
          {title}
        </h2>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed flex-1">{description}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-700 mt-5 group-hover:gap-2.5 transition-all">
          {interactive ? "Open estimator" : "Read guide"}
          <span aria-hidden>→</span>
        </span>
      </Surface>
    </Link>
  );
}

export default function ToolsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Free planning aids"
        title="Planning Tools"
        description="Interactive estimators and checklists for sizing a hardware order. Results are planning aids — confirm slot count, PSU tier, and freight on a written quote before payment."
        image={IMPORTED.pageHero}
        imageAlt="Phone farm hardware planning"
        theme="light"
      />

      <Section>
        <SectionHeader
          eyebrow="Interactive"
          title="Estimators & calculators"
          description="Run quick numbers for capacity, power draw, and USB hub tiers before you request a quote."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {ESTIMATORS.map((t) => (
            <ToolCard key={t.slug} {...t} />
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeader
          eyebrow="Procurement"
          title="Guides & checklists"
          description="Copy-ready lists and decision notes for first-time buyers and bulk RFQs."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {GUIDES.map((t) => (
            <ToolCard key={t.slug} {...t} />
          ))}
        </div>
      </Section>

      <Section>
        <CTABand
          title="Need a written hardware quote?"
          description="Send device count, connection mode, voltage region, and destination country. We reply with BOM, lead time, and proforma pricing."
        >
          <Link href="/contact" className="btn-primary px-8">
            Request Quote
          </Link>
          <Link href="/pricing" className="btn-secondary px-8">
            View pricing tiers
          </Link>
        </CTABand>
      </Section>
    </>
  );
}
