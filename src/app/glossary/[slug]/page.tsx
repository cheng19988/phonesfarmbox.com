import { notFound } from "next/navigation";
import Link from "next/link";
import { GLOSSARY_TERMS, getGlossaryTerm } from "@/data/glossary";
import { ContactCTA } from "@/components/shared";
import { buildMetadata, breadcrumbJsonLd, definedTermJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/shared";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return GLOSSARY_TERMS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) return {};
  return buildMetadata({ title: `${term.term} — Glossary`, description: term.shortDef, path: `/glossary/${slug}` });
}

export default async function GlossaryTermPage({ params }: Props) {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Glossary", path: "/glossary" },
            { name: term.term, path: `/glossary/${slug}` },
          ]),
          definedTermJsonLd(term.term, term.shortDef, `/glossary/${slug}`),
        ]}
      />
      <div className="section">
        <div className="container-wide max-w-3xl">
          <Link href="/glossary" className="text-sm text-orange-700 font-medium hover:underline mb-4 inline-block">
            ← Glossary
          </Link>
          <h1 className="section-title">{term.term}</h1>
          <p className="text-lg text-slate-600 mb-6">{term.shortDef}</p>
          <div className="prose-content text-slate-700">{term.definition}</div>
          {term.relatedTerms && term.relatedTerms.length > 0 && (
            <div className="mt-8">
              <h2 className="text-lg font-bold text-slate-900 mb-3">Related Terms</h2>
              <div className="flex flex-wrap gap-2">
                {term.relatedTerms.map((rs) => {
                  const related = getGlossaryTerm(rs);
                  return related ? (
                    <Link key={rs} href={`/glossary/${rs}`} className="btn-outline text-sm">
                      {related.term}
                    </Link>
                  ) : null;
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <section className="section bg-slate-50 border-t border-slate-200">
        <div className="container-wide">
          <ContactCTA title="Questions About Phone Farm Hardware?" />
        </div>
      </section>
    </>
  );
}
