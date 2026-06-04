import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "./shared";
import { FAQAccordion } from "./commerce";
import type { ContentPage } from "@/data/scenarios";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "./shared";

type Props = {
  page: ContentPage;
  basePath: string;
  baseLabel: string;
  getRelatedHref: (slug: string) => string;
  getRelatedTitle?: (slug: string) => string;
};

export function ContentPageLayout({ page, basePath, baseLabel, getRelatedHref, getRelatedTitle }: Props) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: baseLabel, path: basePath },
          { name: page.title, path: `${basePath}/${page.slug}` },
        ])}
      />
      {page.faq.length > 0 && <JsonLd data={faqJsonLd(page.faq.map((f) => ({ question: f.q, answer: f.a })))} />}

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        {page.heroImage && (
          <Image src={page.heroImage} alt={page.title} fill className="object-cover opacity-25" priority />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
        <div className="container-wide relative py-16">
          <span className="text-xs text-amber-400 font-medium uppercase tracking-wider">{page.category}</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight mt-2 mb-4">{page.title}</h1>
          <p className="text-lg text-slate-300 max-w-3xl">{page.subtitle}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container-wide max-w-4xl">
          <p className="text-xl text-slate-300 leading-relaxed">{page.intro}</p>
        </div>
      </section>

      {/* Benefits */}
      {page.benefits.length > 0 && (
        <section className="section bg-slate-900/50">
          <div className="container-wide">
            <h2 className="section-title">Key Benefits</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {page.benefits.map((b) => (
                <div key={b.title} className="card p-6">
                  <h3 className="font-bold text-white mb-2">{b.title}</h3>
                  <p className="text-sm text-slate-400">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sections */}
      <section className="section">
        <div className="container-wide max-w-4xl space-y-12">
          {page.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-2xl font-bold text-white mb-4">{s.heading}</h2>
              <p className="text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      {page.faq.length > 0 && (
        <section className="section bg-slate-900/50">
          <div className="container-wide max-w-3xl">
            <h2 className="section-title text-center">Frequently Asked Questions</h2>
            <FAQAccordion items={page.faq.map((f) => ({ question: f.q, answer: f.a }))} />
          </div>
        </section>
      )}

      {/* Related */}
      {page.relatedSlugs && page.relatedSlugs.length > 0 && (
        <section className="section">
          <div className="container-wide">
            <h2 className="section-title">Explore More</h2>
            <div className="flex flex-wrap gap-3">
              {page.relatedSlugs.map((slug) => (
                <Link key={slug} href={getRelatedHref(slug)} className="btn-outline text-sm">
                  {getRelatedTitle?.(slug) ?? slug.replace(/-/g, " ")} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section bg-slate-900/50">
        <div className="container-wide">
          <ContactCTA title="Get Phone Farm Box Hardware & Setup Support" />
        </div>
      </section>
    </>
  );
}

export function buildContentMetadata(
  page: { title: string; subtitle: string },
  path: string
) {
  return buildMetadata({ title: page.title, description: page.subtitle, path });
}
