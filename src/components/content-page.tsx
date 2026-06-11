import Image from "next/image";
import Link from "next/link";
import { FAQAccordion } from "./commerce";
import type { ContentPage } from "@/data/scenarios";
import { CONTACT } from "@/lib/config";
import { buildContentMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "./shared";
import { Surface } from "./ui/surface";

type Props = {
  page: ContentPage;
  basePath: string;
  baseLabel: string;
  variant?: "default" | "scenario" | "solution" | "feature";
  getRelatedHref: (slug: string) => string;
  getRelatedTitle?: (slug: string) => string;
  contactQueryKey?: "interest" | "service";
};

export function ContentPageLayout({ page, basePath, baseLabel, variant = "default", getRelatedHref, getRelatedTitle, contactQueryKey = "interest" }: Props) {
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
        <section className="border-b border-slate-200 bg-slate-100">
          <div className="container-wide py-16 md:py-20">
            <span className="eyebrow">{page.category}</span>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-4 max-w-3xl tracking-tight">{page.title}</h1>
            <p className="text-lg text-slate-600 max-w-2xl">{page.subtitle}</p>
          </div>
        </section>
      ) : (
        <section className="relative min-h-[40vh] md:min-h-[44vh] flex items-end overflow-hidden border-b border-slate-200">
          {page.heroImage && (
            <Image src={page.heroImage} alt={page.title} fill className="object-cover object-[75%_center]" priority sizes="100vw" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
          <div className="container-wide relative py-14">
            <span className="eyebrow">{page.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4 max-w-3xl">{page.title}</h1>
            <p className="text-lg text-slate-600 max-w-2xl">{page.subtitle}</p>
            {page.heroImage && variant !== "feature" && (
              <p className="text-xs text-slate-500 mt-3">Deployment illustration — hardware spec confirmed at quote.</p>
            )}
          </div>
        </section>
      )}

      <section className="section">
        <div className="container-wide max-w-3xl">
          <p className="text-lg text-slate-600 leading-relaxed">{page.intro}</p>
        </div>
      </section>

      {variant === "solution" && page.benefits.length > 0 && (
        <section className="section border-y border-slate-200 bg-slate-50">
          <div className="container-wide grid md:grid-cols-2 gap-8">
            {page.benefits.map((b) => (
              <div key={b.title} className="flex gap-4">
                <div className="w-1 shrink-0 bg-orange-500 rounded-full" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{b.title}</h3>
                  <p className="text-sm text-slate-600">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {variant === "feature" && page.benefits.length > 0 && (
        <section className="section bg-slate-50">
          <div className="container-wide">
            <dl className="grid sm:grid-cols-2 gap-4">
              {page.benefits.map((b) => (
                <Surface key={b.title} padding="sm">
                  <dt className="font-semibold text-orange-700 text-sm">{b.title}</dt>
                  <dd className="text-sm text-slate-600 mt-1">{b.desc}</dd>
                </Surface>
              ))}
            </dl>
          </div>
        </section>
      )}

      {variant === "default" && page.benefits.length > 0 && (
        <section className="section bg-slate-50">
          <div className="container-wide grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {page.benefits.map((b) => (
              <Surface key={b.title} padding="md">
                <h3 className="font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-sm text-slate-600">{b.desc}</p>
              </Surface>
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
                  <span className="shrink-0 text-2xl font-bold text-orange-200">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">{s.heading}</h2>
                    <p className="text-slate-600 leading-relaxed">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          ) : (
            <div className="space-y-10">
              {page.sections.map((s, i) => (
                <div key={s.heading} className={variant === "solution" && i % 2 === 1 ? "pl-6 border-l-2 border-orange-200" : ""}>
                  <h2 className="text-xl font-bold text-slate-900 mb-3">{s.heading}</h2>
                  <p className="text-slate-600 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {page.faq.length > 0 && (
        <section className="section bg-slate-50">
          <div className="container-wide max-w-3xl">
            <h2 className="text-xl font-bold text-slate-900 mb-6">FAQ</h2>
            <FAQAccordion items={page.faq.map((f) => ({ question: f.q, answer: f.a }))} />
          </div>
        </section>
      )}

      {page.relatedSlugs && page.relatedSlugs.length > 0 && (
        <section className="section">
          <div className="container-wide">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Related</h2>
            <div className="flex flex-wrap gap-2">
              {page.relatedSlugs.map((slug) => (
                <Link
                  key={slug}
                  href={getRelatedHref(slug)}
                  className="text-sm px-3 py-1.5 rounded-full border border-slate-200 text-slate-600 hover:border-orange-300 hover:text-orange-700 bg-white"
                >
                  {getRelatedTitle?.(slug) ?? slug.replace(/-/g, " ")}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section border-t border-slate-200">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Need hardware for this use case?</h2>
          <p className="text-slate-600 text-sm mb-6">Tell us device count and platform — we suggest a box BOM.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href={`/contact?${contactQueryKey}=${page.slug}`} className="btn-primary">Get Quote</Link>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}

export { buildContentMetadata };
