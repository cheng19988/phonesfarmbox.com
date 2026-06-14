import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { FAQAccordion } from "@/components/commerce";
import { JsonLd } from "@/components/shared";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { PAGE_SEO_ZH } from "@/i18n/zh/product-seo";
import { FAQ_ZH } from "@/i18n/zh/faq";
import { IMPORTED } from "@/lib/images";
import { contactHref } from "@/i18n/nav";

const copy = PAGE_SEO_ZH.faq;

export const metadata = buildMetadata({
  title: copy.title,
  description: copy.description,
  path: "/zh/faq",
  locale: "zh",
});

export default function ZhFaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ_ZH.map(({ question, answer }) => ({ question, answer })))} />
      <PageHero
        eyebrow="手机农场 · 手机群控"
        title={copy.heroTitle}
        description={copy.heroDesc}
        image={IMPORTED.pageHero}
        imageAlt="手机农场 FAQ"
        theme="light"
      />
      <Section>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={FAQ_ZH.map(({ question, answer }) => ({ question, answer }))} />
        </div>
        <p className="text-center mt-10 text-sm text-[var(--text-muted)]">
          <Link href="/faq" hrefLang="en" className="text-orange-700 hover:underline">
            English FAQ（更多问题）
          </Link>
          {" · "}
          <Link href={contactHref("zh")} className="text-orange-700 hover:underline">
            索取报价
          </Link>
        </p>
      </Section>
    </>
  );
}
