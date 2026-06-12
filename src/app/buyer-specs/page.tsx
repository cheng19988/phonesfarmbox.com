import Link from "next/link";
import { ContactCTA, JsonLd } from "@/components/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { BUYER_SPECS_INTRO, BUYER_SPECS_ITEMS } from "@/data/buyer-specs";
import { IMAGES } from "@/lib/images";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Buyer Specs — Dimensions, Power, Lead Time, Warranty & Setup",
  description:
    "Procurement FAQ for phone farm hardware: device size, weight, power, voltage, supported models, PCs per box, delivery, packing, warranty, RMA, packing photos, remote setup.",
  path: "/buyer-specs",
});

export default function BuyerSpecsPage() {
  const faqForSchema = BUYER_SPECS_ITEMS.map((item) => ({
    question: `${item.questionEn} / ${item.questionZh}`,
    answer: [item.shortAnswer, ...item.bullets].join(" "),
  }));

  return (
    <>
      <JsonLd data={faqJsonLd(faqForSchema)} />

      <PageHero
        eyebrow="B2B procurement"
        title={BUYER_SPECS_INTRO.titleEn}
        description={`${BUYER_SPECS_INTRO.description} · ${BUYER_SPECS_INTRO.titleZh}`}
        image={IMAGES.phoneFarmBox.hero}
        imageAlt="Phone farm box buyer specifications"
        theme="light"
      />

      <Section>
        <SectionHeader
          title="12 questions before you issue a PO"
          description="Each item links to detailed guides. Final numbers are on your written proforma — request a quote with the checklist below."
        />

        <div className="max-w-3xl mb-10 flex flex-wrap gap-2 text-sm">
          {BUYER_SPECS_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 hover:border-orange-300 hover:text-orange-800 transition-colors"
            >
              {item.questionZh}
            </a>
          ))}
        </div>

        <ol className="space-y-8 max-w-3xl">
          {BUYER_SPECS_ITEMS.map((item, index) => (
            <li key={item.id} id={item.id} className="scroll-mt-24">
              <Surface padding="md" className="border-l-4 border-l-orange-500">
                <div className="flex gap-3 items-start mb-2">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-800 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">{item.questionEn}</h2>
                    <p className="text-sm font-medium text-orange-800/90">{item.questionZh}</p>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] mt-3 leading-relaxed">{item.shortAnswer}</p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--text-secondary)]">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-emerald-600 shrink-0">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  {item.links.map((link) => (
                    <Link key={link.href} href={link.href} className="link-accent font-medium">
                      {link.label} →
                    </Link>
                  ))}
                </div>
              </Surface>
            </li>
          ))}
        </ol>

        <Surface padding="md" className="max-w-3xl mt-12 bg-orange-50/50 border-orange-100">
          <h3 className="font-bold text-slate-900 mb-2">Copy into your RFQ</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-4">
            Use the bulk quote checklist or contact form — include destination, quantity, model list, voltage, connection mode, and whether you need datasheet, packing photos, or remote setup.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-semibold">
            <Link href="/contact" className="link-accent">
              Request written quote →
            </Link>
            <Link href="/tools/bulk-quote-checklist" className="link-accent">
              Bulk quote checklist →
            </Link>
            <Link href="/how-to-order" className="link-accent">
              How to order →
            </Link>
          </div>
        </Surface>

        <div className="max-w-3xl mt-10">
          <ContactCTA title="Need exact dimensions or host PC sizing on proforma?" />
        </div>
      </Section>
    </>
  );
}
