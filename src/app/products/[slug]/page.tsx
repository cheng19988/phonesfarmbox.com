import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getProductB2B, getProductSummary } from "@/data/product-b2b";
import { getProductProfileSeed } from "@/data/product-profiles";
import { BuyButtons, FAQAccordion } from "@/components/commerce";
import { ProductImageStatus } from "@/components/product-image-status";
import { ProductTechnicalDataStatus } from "@/components/product-technical-data";
import {
  CommonCombinationsSection,
  EnhancedAddonsSection,
  ProductCompareSection,
  ProductFitSection,
  QuotePrepareSection,
} from "@/components/product-conversion-sections";
import {
  MotherboardModelGallery,
  ProductModelGallery,
} from "@/components/product-model-gallery";
import {
  getModelsForSku,
  MOTHERBOARD_GALLERY,
  SPEC_SLIDES,
} from "@/data/product-model-catalog";
import { ContactCTA, JsonLd, AvailabilityBadge } from "@/components/shared";
import { buildMetadata, productJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { resolveGalleryImages, resolvePrimaryImageUrl, resolveProductImageAlt } from "@/lib/product-images";
import { getProductProcurement } from "@/lib/product-procurement";
import { ProductProcurementSection } from "@/components/product-procurement-section";
import { getProductSeo } from "@/data/product-seo";
import { parseProductData } from "@/lib/product-profile";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = await prisma.product.findUnique({ where: { slug } });
  if (!product) return {};
  const seo = getProductSeo(slug, product.name, getProductSummary(slug, product.shortDesc));
  return buildMetadata({
    title: seo.title,
    description: seo.description,
    path: `/products/${slug}`,
    image: product.imageHero,
  });
}

function parseJson<T>(s: string, fallback: T): T {
  try {
    return JSON.parse(s);
  } catch {
    return fallback;
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = await prisma.product.findUnique({ where: { slug } });
  if (!product) notFound();

  const b2b = getProductB2B(slug);
  const summary = getProductSummary(slug, product.shortDesc);
  const productData =
    parseProductData(product.productData) ?? getProductProfileSeed(slug);
  const primaryImage = resolvePrimaryImageUrl(productData, product.imageDetail);
  const imageAlt = resolveProductImageAlt(productData, product.name);
  const galleryImages = resolveGalleryImages(productData);
  const features = parseJson<string[]>(product.features, []);
  const specs = parseJson<Record<string, string>>(product.specs, {});
  const dbFaq = parseJson<{ q: string; a: string }[]>(product.faq, []);
  const faq = b2b?.faq?.length ? b2b.faq : dbFaq;
  const procurement = getProductProcurement(slug, b2b);

  const related = b2b?.relatedSlugs?.length
    ? await prisma.product.findMany({
        where: { slug: { in: b2b.relatedSlugs }, published: true },
        select: { slug: true, name: true, priceUsd: true },
      })
    : [];

  return (
    <>
      <JsonLd
        data={[
          productJsonLd({
            name: product.name,
            description: summary,
            slug: product.slug,
            priceUsd: product.priceUsd,
            stock: product.stock,
            image: product.imageHero,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: product.name, path: `/products/${slug}` },
          ]),
          ...(faq.length > 0
            ? [faqJsonLd(faq.map((f) => ({ question: f.q, answer: f.a })))]
            : []),
        ]}
      />

      <div className="section pt-8 md:pt-12">
        <div className="container-wide">
          <nav className="text-sm text-[var(--text-muted)] mb-8">
            <Link href="/products" className="hover:text-orange-700">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--text-secondary)]">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            <div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
                <Image src={primaryImage} alt={imageAlt} fill className="object-contain p-3" priority sizes="(max-width:1024px) 100vw, 50vw" />
              </div>
              <ProductImageStatus data={productData} fallbackCaption={b2b?.imageCaption} />
              {galleryImages.length > 0 && (
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {galleryImages.map((src) => (
                    <div key={src} className="relative aspect-square rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                      <Image src={src} alt="" fill className="object-cover" sizes="120px" />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="lg:py-4">
              <p className="eyebrow mb-3">{product.category}</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 tracking-tight leading-tight">{product.name}</h1>
              <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">{summary}</p>
              <div className="flex flex-wrap items-center gap-4 mb-3">
                <span className="text-4xl font-bold text-slate-900">From ${product.priceUsd.toLocaleString()}</span>
                <AvailabilityBadge stock={product.stock} />
              </div>
              <p className="text-sm text-[var(--text-muted)] mb-8">List price in USD — final BOM, freight, and configuration confirmed on written quote before payment.</p>
              <BuyButtons slug={product.slug} name={product.name} stock={product.stock} />
              <p className="text-xs text-slate-500 mt-4">
                Bulk pricing: <Link href="/pricing" className="link-accent">pricing overview</Link>
                {" · "}
                <Link href={`/contact?product=${slug}`} className="link-accent">request written quote</Link>
              </p>
            </div>
          </div>

          {b2b && (
            <div className="mb-8">
              <ProductFitSection b2b={b2b} />
            </div>
          )}

          {(slug === "phone-farm-box" || slug === "android-phone-farm") && (
            <ProductModelGallery
              models={getModelsForSku(slug)}
              specSlides={slug === "phone-farm-box" ? SPEC_SLIDES : []}
            />
          )}

          {slug === "motherboard-box" && <MotherboardModelGallery images={MOTHERBOARD_GALLERY} />}

          {procurement && <ProductProcurementSection procurement={procurement} />}

          {b2b && (
            <section className="mb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Capacity", value: b2b.capacity },
                { label: "Cooling", value: b2b.cooling },
                { label: "Power & ports", value: b2b.powerAndPorts },
                { label: "Compatible models", value: b2b.compatibleModels },
                { label: "MOQ", value: b2b.moq },
                { label: "Lead time", value: b2b.leadTime },
              ].map((row) => (
                <div key={row.label} className="p-4 rounded-lg info-panel">
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">{row.label}</div>
                  <div className="text-sm text-slate-700">{row.value}</div>
                </div>
              ))}
            </section>
          )}

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Product overview</h2>
                <p className="text-slate-600 leading-relaxed">{b2b?.overview ?? product.description}</p>
              </section>

              {b2b?.recommendedConfiguration && (
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Recommended configuration</h2>
                  <p className="text-slate-600 leading-relaxed">{b2b.recommendedConfiguration}</p>
                </section>
              )}

              <ProductTechnicalDataStatus slug={slug} data={productData} />

              {features.length > 0 && !b2b && (
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Highlights</h2>
                  <ul className="space-y-2">
                    {features.map((f) => (
                      <li key={f} className="flex gap-2 text-slate-600">
                        <span className="text-emerald-500">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {Object.keys(specs).length > 0 && !b2b && (
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Technical details</h2>
                  <p className="text-xs text-slate-500 mb-3">Dimensions and exact counts confirmed on written quote when not listed.</p>
                  <table className="w-full text-sm">
                    <tbody>
                      {Object.entries(specs).map(([k, v]) => (
                        <tr key={k} className="border-b border-slate-200">
                          <td className="py-3 text-slate-400 pr-4 w-1/3">{k}</td>
                          <td className="py-3 text-slate-900">{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
              )}

              {b2b?.deploymentNotes && b2b.deploymentNotes.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Deployment notes</h2>
                  <ul className="space-y-2">
                    {b2b.deploymentNotes.map((note) => (
                      <li key={note} className="flex gap-2 text-sm text-slate-600">
                        <span className="text-amber-500 shrink-0">•</span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {b2b && <ProductCompareSection slug={slug} />}

              {faq.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">FAQ</h2>
                  <FAQAccordion items={faq.map((f) => ({ question: f.q, answer: f.a }))} />
                </section>
              )}
            </div>

            <div className="space-y-6">
              {b2b && (
                <>
                  <section className="info-panel">
                    <h3 className="font-bold text-slate-900 mb-3">What&apos;s included</h3>
                    <ul className="space-y-1 text-sm text-slate-400">
                      {b2b.included.map((a) => (
                        <li key={a}>• {a}</li>
                      ))}
                    </ul>
                  </section>
                  <EnhancedAddonsSection addons={b2b.optionalAddons} relatedSlugs={b2b.relatedSlugs} />
                  <section className="info-panel">
                    <h3 className="font-bold text-slate-900 mb-3">Export packing</h3>
                    <ul className="space-y-1 text-sm text-slate-400">
                      {b2b.shippingPackage.map((d) => (
                        <li key={d}>• {d}</li>
                      ))}
                    </ul>
                  </section>
                  <section className="info-panel">
                    <h3 className="font-bold text-slate-900 mb-3">MOQ · Lead time · Warranty</h3>
                    <dl className="text-sm text-slate-400 space-y-2">
                      <div>
                        <dt className="text-slate-500 text-xs uppercase">MOQ</dt>
                        <dd>{b2b.moq}</dd>
                      </div>
                      <div>
                        <dt className="text-slate-500 text-xs uppercase">Lead time</dt>
                        <dd>{b2b.leadTime}</dd>
                      </div>
                      <div>
                        <dt className="text-slate-500 text-xs uppercase">Warranty</dt>
                        <dd>{b2b.warranty}</dd>
                      </div>
                    </dl>
                  </section>
                </>
              )}
            </div>
          </div>

          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Related hardware</h2>
              <div className="flex flex-wrap gap-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/products/${r.slug}`}
                    className="px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-700 bg-white"
                  >
                    {r.name}
                    <span className="text-slate-500 ml-2">from ${r.priceUsd}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-16 grid lg:grid-cols-2 gap-6">
            {b2b && b2b.commonCombinations.length > 0 && (
              <CommonCombinationsSection items={b2b.commonCombinations} />
            )}
            <QuotePrepareSection productSlug={slug} />
          </div>

          <div className="mt-16">
            <ContactCTA title={`Request a quote for ${product.name}`} />
          </div>
        </div>
      </div>
    </>
  );
}
