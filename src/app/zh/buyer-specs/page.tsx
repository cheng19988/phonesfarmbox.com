import Link from "next/link";
import { ContactCTA, JsonLd } from "@/components/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { BUYER_SPECS_INTRO, BUYER_SPECS_ITEMS } from "@/data/buyer-specs";
import { IMAGES } from "@/lib/images";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { PAGE_SEO_ZH } from "@/i18n/zh/product-seo";

const copy = PAGE_SEO_ZH.buyerSpecs;

export const metadata = buildMetadata({
  title: copy.title,
  description: copy.description,
  path: "/zh/buyer-specs",
  locale: "zh",
});

export default function ZhBuyerSpecsPage() {
  const faqForSchema = BUYER_SPECS_ITEMS.map((item) => ({
    question: item.questionZh,
    answer: [item.shortAnswer, ...item.bullets].join(" "),
  }));

  return (
    <>
      <JsonLd data={faqJsonLd(faqForSchema)} />
      <PageHero
        eyebrow="B2B 手机农场采购"
        title={copy.heroTitle}
        description={BUYER_SPECS_INTRO.titleZh}
        image={IMAGES.phoneFarmBox.hero}
        imageAlt="手机农场采购规格"
        theme="light"
      />
      <Section>
        <SectionHeader
          title="下单前 12 个硬件问题"
          description="最终数值以书面 proforma 为准 — 请附带以下信息索取报价。"
        />
        <ol className="space-y-8 max-w-3xl">
          {BUYER_SPECS_ITEMS.map((item, index) => (
            <li key={item.id} id={item.id} className="scroll-mt-24">
              <Surface padding="md" className="border-l-4 border-l-orange-500">
                <div className="flex gap-3 items-start mb-2">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-800 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">{item.questionZh}</h2>
                    <p className="text-sm text-[var(--text-muted)]">{item.questionEn}</p>
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
              </Surface>
            </li>
          ))}
        </ol>
        <ContactCTA title="发送 RFQ — 获取书面 BOM" />
        <p className="text-center mt-8 text-sm">
          <Link href="/buyer-specs" hrefLang="en" className="text-orange-700 hover:underline">
            English buyer specs
          </Link>
        </p>
      </Section>
    </>
  );
}
