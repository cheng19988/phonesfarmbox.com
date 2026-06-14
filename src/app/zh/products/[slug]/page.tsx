import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getProductSeoZh } from "@/i18n/zh/product-seo";
import { getProductSummary } from "@/data/product-b2b";
import { BuyButtons } from "@/components/commerce";
import { ReferencePrice } from "@/components/reference-price";
import { QuoteFirstNotice } from "@/components/quote-first-notice";
import { JsonLd, AvailabilityBadge, ContactCTA } from "@/components/shared";
import { buildMetadata, productJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { resolvePrimaryImageUrl } from "@/lib/product-images";
import { parseProductData } from "@/lib/product-profile";
import { getProductProfileSeed } from "@/data/product-profiles";
import { PRODUCT_SEEDS } from "@/data/products";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return PRODUCT_SEEDS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = await prisma.product.findUnique({ where: { slug } });
  if (!product) return {};
  const seo = getProductSeoZh(slug, product.name, product.shortDesc);
  return buildMetadata({
    title: seo.title,
    description: seo.description,
    path: `/zh/products/${slug}`,
    locale: "zh",
    image: product.imageHero,
  });
}

export default async function ZhProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await prisma.product.findUnique({ where: { slug } });
  if (!product) notFound();

  const seo = getProductSeoZh(slug, product.name, product.shortDesc);
  const summary = getProductSummary(slug, product.shortDesc);
  const productData = parseProductData(product.productData) ?? getProductProfileSeed(slug);
  const primaryImage = resolvePrimaryImageUrl(productData, product.imageDetail);

  return (
    <>
      <JsonLd
        data={[
          productJsonLd({
            name: seo.nameZh,
            description: seo.summaryZh,
            slug: product.slug,
            priceUsd: product.priceUsd,
            stock: product.stock,
            image: primaryImage,
          }),
          breadcrumbJsonLd([
            { name: "首页", path: "/zh" },
            { name: "产品", path: "/zh/products" },
            { name: seo.nameZh, path: `/zh/products/${slug}` },
          ]),
        ]}
      />
      <div className="section">
        <div className="container-wide">
          <nav className="text-sm text-[var(--text-muted)] mb-8 flex flex-wrap gap-2">
            <Link href="/zh" className="hover:text-orange-700">
              首页
            </Link>
            <span>/</span>
            <Link href="/zh/products" className="hover:text-orange-700">
              产品
            </Link>
            <span>/</span>
            <span className="text-slate-700">{seo.nameZh}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="relative aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
              <Image src={primaryImage} alt={seo.nameZh} fill className="object-contain p-6" priority sizes="(max-width:1024px) 100vw, 50vw" />
            </div>
            <div>
              <p className="text-sm font-semibold text-orange-700 uppercase tracking-wide mb-2">手机农场硬件</p>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{seo.nameZh}</h1>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">{seo.summaryZh}</p>
              <AvailabilityBadge stock={product.stock} />
              <div className="my-6">
                <ReferencePrice amountUsd={product.priceUsd} size="lg" />
              </div>
              <QuoteFirstNotice />
              <div className="mt-8 flex flex-wrap gap-3">
                <BuyButtons slug={slug} name={product.name} stock={product.stock} />
              </div>
              <p className="mt-6 text-sm text-[var(--text-muted)]">
                <Link href={`/products/${slug}`} className="text-orange-700 hover:underline" hrefLang="en">
                  查看英文完整规格页 →
                </Link>
              </p>
            </div>
          </div>

          <div className="prose-content max-w-3xl mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-4">产品说明</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">{summary}</p>
            <p className="text-[var(--text-secondary)] leading-relaxed mt-4">{product.shortDesc}</p>
          </div>

          <ContactCTA title="索取此 SKU 的书面报价" />
        </div>
      </div>
    </>
  );
}
