import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { buildMetadata } from "@/lib/seo";
import { ZH_GLOSSARY_TERMS } from "@/i18n/zh/glossary-terms";
import { IMPORTED } from "@/lib/images";

export const metadata = buildMetadata({
  title: "手机农场术语表 — Phone Farm · 群控 · 主板机",
  description:
    "Phone Farm、Phone Farming、Mobile Farm、Android Farm、TikTok Phone Farm、Phone Farm Hardware、手机农场厂家 — 中文采购术语解释。",
  path: "/zh/glossary",
  locale: "zh",
});

export default function ZhGlossaryPage() {
  return (
    <>
      <PageHero
        eyebrow="采购术语"
        title="手机农场术语表"
        description="Phone Farm、手机群控、主板机、Android Farm 等 B2B 硬件采购常用词 — 中文释义与相关产品链接。"
        image={IMPORTED.pageHero}
        imageAlt="手机农场术语"
        theme="light"
      />
      <Section>
        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {ZH_GLOSSARY_TERMS.map((t) => (
            <Link key={t.slug} href={`/zh/glossary/${t.slug}`} className="block group">
              <Surface padding="md" hover className="h-full">
                <h2 className="font-bold text-slate-900 group-hover:text-orange-700">{t.term}</h2>
                {t.termEn && <p className="text-xs text-[var(--text-muted)] mt-0.5">{t.termEn}</p>}
                <p className="text-sm text-[var(--text-secondary)] mt-2">{t.shortDef}</p>
              </Surface>
            </Link>
          ))}
        </div>
        <p className="text-center mt-10 text-sm text-[var(--text-muted)]">
          更多英文术语见{" "}
          <Link href="/glossary" hrefLang="en" className="text-orange-700 hover:underline">
            English glossary
          </Link>
        </p>
      </Section>
    </>
  );
}
