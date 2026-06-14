import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getZhGlossaryTerm,
  ZH_GLOSSARY_SLUGS,
  zhGlossaryRelatedHref,
  zhGlossaryRelatedLabel,
} from "@/i18n/zh/glossary-terms";
import { ContactCTA, JsonLd } from "@/components/shared";
import { buildMetadata, breadcrumbJsonLd, definedTermJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ZH_GLOSSARY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const term = getZhGlossaryTerm(slug);
  if (!term) return {};
  return buildMetadata({
    title: `${term.term} — 术语表`,
    description: term.shortDef,
    path: `/zh/glossary/${slug}`,
    locale: "zh",
  });
}

export default async function ZhGlossaryTermPage({ params }: Props) {
  const { slug } = await params;
  const term = getZhGlossaryTerm(slug);
  if (!term) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "首页", path: "/zh" },
            { name: "术语表", path: "/zh/glossary" },
            { name: term.term, path: `/zh/glossary/${slug}` },
          ]),
          definedTermJsonLd(term.term, term.shortDef, `/zh/glossary/${slug}`),
        ]}
      />
      <div className="section">
        <div className="container-wide max-w-3xl">
          <Link href="/zh/glossary" className="text-sm text-orange-700 font-medium hover:underline mb-4 inline-block">
            ← 术语表
          </Link>
          <h1 className="section-title">{term.term}</h1>
          {term.termEn && <p className="text-sm text-[var(--text-muted)] mb-2">{term.termEn}</p>}
          <p className="text-lg text-slate-600 mb-6">{term.shortDef}</p>
          <div className="prose-content text-slate-700">{term.definition}</div>
          {term.relatedSlugs && term.relatedSlugs.length > 0 && (
            <div className="mt-8">
              <h2 className="text-lg font-bold text-slate-900 mb-3">相关术语</h2>
              <div className="flex flex-wrap gap-2">
                {term.relatedSlugs.map((rs) => (
                  <Link key={rs} href={zhGlossaryRelatedHref(rs)} className="btn-outline text-sm">
                    {zhGlossaryRelatedLabel(rs)}
                  </Link>
                ))}
              </div>
            </div>
          )}
          <p className="mt-8 text-sm text-[var(--text-muted)]">
            英文词条：
            <Link href={`/glossary/${slug}`} hrefLang="en" className="text-orange-700 hover:underline ml-1">
              {term.termEn ?? slug}
            </Link>
          </p>
        </div>
      </div>
      <section className="section bg-slate-50 border-t border-slate-200">
        <div className="container-wide">
          <ContactCTA title="咨询手机农场硬件？" />
        </div>
      </section>
    </>
  );
}
