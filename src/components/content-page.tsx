import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "./shared";
import { FAQAccordion } from "./commerce";
import type { ContentPage } from "@/data/scenarios";
import { CONTACT } from "@/lib/config";
import { buildMetadata, buildContentMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "./shared";

type Props = {
  page: ContentPage;
  basePath: string;
  baseLabel: string;
  variant?: "default" | "scenario" | "solution" | "feature";
  getRelatedHref: (slug: string) => string;
  getRelatedTitle?: (slug: string) => string;
};

export function ContentPageLayout({ page, basePath, baseLabel, variant = "default", getRelatedHref, getRelatedTitle }: Props) {
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

      {variant === "scenario" ? (
        <section className="border-b border-slate-800 bg-slate-900/40">
          <div className="container-wide py-14">
            <span className="text-xs text-amber-400 uppercase tracking-wider">{page.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4 max-w-3xl">{page.title}</h1>
            <p className="text-lg text-slate-300 max-w-2xl">{page.subtitle}</p>
          </div>
        </section>
      ) : (
        <section className="relative min-h-[36vh] flex items-end overflow-hidden">
          {page.heroImage && (
            <Image src={page.heroImage} alt={page.title} fill className="object-cover opacity-20" priority />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent" />
          <div className="container-wide relative py-14">
            <span className="text-xs text-amber-400 uppercase tracking-wider">{page.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4 max-w-3xl">{page.title}</h1>
            <p className="text-lg text-slate-300 max-w-2xl">{page.subtitle}</p>
            {page.heroImage && variant !== "feature" && (
              <p className="text-xs text-slate-500 mt-3">Deployment illustration — hardware spec confirmed at quote.</p>
            )}
          </div>
        </section>
      )}

      <section className="section">
        <div className="container-wide max-w-3xl">
          <p className="text-lg text-slate-300 leading-relaxed">{page.intro}</p>
        </div>
      </section>

      {variant === "solution" && page.benefits.length > 0 && (
        <section className="section border-y border-slate-800/80">
          <div className="container-wide grid md:grid-cols-2 gap-8">
            {page.benefits.map((b) => (
              <div key={b.title} className="flex gap-4">
                <div className="w-1 shrink-0 bg-amber-700 rounded-full" />
                <div>
                  <h3 className="font-bold text-white mb-1">{b.title}</h3>
                  <p className="text-sm text-slate-400">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {variant === "feature" && page.benefits.length > 0 && (
        <section className="section bg-slate-900/30">
          <div className="container-wide">
            <dl className="grid sm:grid-cols-2 gap-4">
              {page.benefits.map((b) => (
                <div key={b.title} className="p-4 rounded-lg border border-slate-800">
                  <dt className="font-semibold text-amber-400/90 text-sm">{b.title}</dt>
                  <dd className="text-sm text-slate-400 mt-1">{b.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {variant === "default" && page.benefits.length > 0 && (
        <section className="section bg-slate-900/50">
          <div className="container-wide grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {page.benefits.map((b) => (
              <div key={b.title} className="p-5 rounded-xl border border-slate-800">
                <h3 className="font-bold text-white mb-2">{b.title}</h3>
                <p className="text-sm text-slate-400">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="section">
        <div className="container-wide max-w-3xl">
          {variant === "scenario" ? (
            <ol className="space-y-10">
              {page.sections.map((s, i) => (
                <li key={s.heading} className="flex gap-6">
                  <span className="shrink-0 text-2xl font-bold text-amber-900/80">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2">{s.heading}</h2>
                    <p className="text-slate-400 leading-relaxed">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          ) : (
            <div className="space-y-10">
              {page.sections.map((s, i) => (
                <div key={s.heading} className={variant === "solution" && i % 2 === 1 ? "pl-6 border-l-2 border-slate-700" : ""}>
                  <h2 className="text-xl font-bold text-white mb-3">{s.heading}</h2>
                  <p className="text-slate-400 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {page.faq.length > 0 && (
        <section className="section bg-slate-900/30">
          <div className="container-wide max-w-3xl">
            <h2 className="text-xl font-bold text-white mb-6">FAQ</h2>
            <FAQAccordion items={page.faq.map((f) => ({ question: f.q, answer: f.a }))} />
          </div>
        </section>
      )}

      {page.relatedSlugs && page.relatedSlugs.length > 0 && (
        <section className="section">
          <div className="container-wide">
            <h2 className="text-lg font-semibold text-white mb-4">Related</h2>
            <div className="flex flex-wrap gap-2">
              {page.relatedSlugs.map((slug) => (
                <Link key={slug} href={getRelatedHref(slug)} className="text-sm px-3 py-1.5 rounded-full border border-slate-700 text-slate-300 hover:border-amber-700 hover:text-white">
                  {getRelatedTitle?.(slug) ?? slug.replace(/-/g, " ")}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section border-t border-slate-800">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-white mb-3">Need hardware for this use case?</h2>
          <p className="text-slate-400 text-sm mb-6">Tell us device count and platform — we suggest a box BOM.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href={`/contact?interest=${page.slug}`} className="btn-primary">Get Quote</Link>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}

export { buildContentMetadata };
