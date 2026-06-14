import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/commerce";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { buildMetadata } from "@/lib/seo";
import { PAGE_SEO_ZH } from "@/i18n/zh/product-seo";
import { IMPORTED } from "@/lib/images";
import { QuoteFirstNotice } from "@/components/quote-first-notice";
import { resolveProductCardImage } from "@/lib/resolve-product-card-image";
import { contactHref } from "@/i18n/nav";

const copy = PAGE_SEO_ZH.products;

export const metadata = buildMetadata({
  title: copy.title,
  description: copy.description,
  path: "/zh/products",
  locale: "zh",
});

export default async function ZhProductsPage() {
  const products = await prisma.product.findMany({
    where: { published: true },
    orderBy: { name: "asc" },
  });

  return (
    <>
      <PageHero
        eyebrow="手机农场硬件"
        title={copy.heroTitle}
        description={copy.heroDesc}
        image={IMPORTED.pageHero}
        imageAlt="手机农场产品目录"
        theme="light"
      />

      <Section>
        <div className="mb-8 max-w-3xl">
          <QuoteFirstNotice />
        </div>
        <SectionHeader
          eyebrow={`${products.length} SKU`}
          title="群控机箱 · 主板机 · 配件"
          description="点击产品查看中文说明与英文详情页。所有价格为参考价，最终配置报价确认。"
        />
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              slug={p.slug}
              name={p.name}
              shortDesc={p.shortDesc}
              priceUsd={p.priceUsd}
              stock={p.stock}
              imageCard={resolveProductCardImage(p.slug, p.imageCard)}
              category={p.category}
              productBasePath="/zh/products"
            />
          ))}
        </div>
        <p className="mt-10 text-sm text-[var(--text-muted)]">
          需要选型帮助？{" "}
          <Link href={contactHref("zh")} className="text-orange-700 font-medium hover:underline">
            索取书面 BOM 报价
          </Link>
          {" · "}
          <Link href="/products" className="text-orange-700 hover:underline" hrefLang="en">
            English catalog
          </Link>
        </p>
      </Section>
    </>
  );
}
