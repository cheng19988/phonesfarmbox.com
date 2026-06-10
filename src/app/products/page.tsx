import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/commerce";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { buildMetadata } from "@/lib/seo";
import { ProductModelStrip } from "@/components/product-model-strip";
import { PRODUCT_CATALOG_GROUPS } from "@/data/product-catalog-groups";
import { IMPORTED } from "@/lib/images";
import { resolveProductCardImage } from "@/lib/resolve-product-card-image";

export const metadata = buildMetadata({
  title: "Phone Farm Products & Hardware Shop",
  description:
    "Shop phone farm boxes, motherboard racks, USB hubs, power, cooling, and custom cabinets. Phones Farm Box — quote-based B2B hardware; configuration confirmed before invoice.",
  path: "/products",
});

type ProductRow = Awaited<ReturnType<typeof prisma.product.findMany>>[number];

function sortProducts(products: ProductRow[], sort?: string) {
  const list = [...products];
  if (sort === "price-desc") return list.sort((a, b) => b.priceUsd - a.priceUsd);
  if (sort === "price-asc") return list.sort((a, b) => a.priceUsd - b.priceUsd);
  return list.sort((a, b) => a.name.localeCompare(b.name));
}

function ProductGrid({ products }: { products: ProductRow[] }) {
  return (
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
        />
      ))}
    </div>
  );
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ sort?: string; category?: string }>;
}) {
  const params = await searchParams;
  const orderBy =
    params.sort === "price-desc"
      ? { priceUsd: "desc" as const }
      : params.sort === "price-asc"
        ? { priceUsd: "asc" as const }
        : { name: "asc" as const };

  const products = await prisma.product.findMany({
    where: {
      published: true,
      ...(params.category ? { category: params.category } : {}),
    },
    orderBy,
  });

  const categories = [...new Set(products.map((p) => p.category))];
  const showGrouped = !params.category;
  const productBySlug = new Map(products.map((p) => [p.slug, p]));

  const buildProductsHref = (overrides: { category?: string | null; sort?: string | null } = {}) => {
    const parts: string[] = [];
    const cat = "category" in overrides ? overrides.category : params.category;
    const sort = "sort" in overrides ? overrides.sort : params.sort;
    if (cat) parts.push(`category=${encodeURIComponent(cat)}`);
    if (sort) parts.push(`sort=${sort}`);
    return parts.length ? `/products?${parts.join("&")}` : "/products";
  };

  return (
    <>
      <PageHero
        eyebrow="B2B hardware catalog"
        title="Phone farm hardware shop"
        description="Chassis, racks, hubs, power, cooling, and services — list prices are USD starting points. Slot layout, connection mode, and freight confirmed on written quote."
        image={IMPORTED.homeHero}
        imageAlt="Phone farm box product photo background"
        theme="light"
      />

      <Section>
        <ProductModelStrip />
        <Surface padding="md" className="mb-10 flex flex-wrap items-center justify-between gap-4 border-orange-200">
          <div>
            <p className="font-semibold text-slate-900">Need a bulk or custom quote?</p>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Send device count, platform, connection mode, voltage region, and delivery country.
            </p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            Request Quote
          </Link>
        </Surface>

        <div className="flex flex-wrap gap-2 mb-8">
          <Link
            href={buildProductsHref({ category: null })}
            className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors ${
              !params.category
                ? "border-orange-400 bg-orange-50 text-orange-800"
                : "border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-white"
            }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={buildProductsHref({ category: cat })}
              className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors ${
                params.category === cat
                  ? "border-orange-400 bg-orange-50 text-orange-800"
                  : "border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-white"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        <div className="flex gap-4 mb-12 text-sm text-[var(--text-muted)]">
          <span>Sort:</span>
          <Link href={buildProductsHref({ sort: "price-asc" })} className="hover:text-orange-700">
            Price ↑
          </Link>
          <Link href={buildProductsHref({ sort: "price-desc" })} className="hover:text-orange-700">
            Price ↓
          </Link>
        </div>

        {products.length === 0 ? (
          <p className="text-[var(--text-secondary)]">
            No products in this category.{" "}
            <Link href="/contact" className="link-accent">
              Contact us
            </Link>
          </p>
        ) : showGrouped ? (
          <div className="space-y-20">
            {PRODUCT_CATALOG_GROUPS.map((group) => {
              const groupProducts = sortProducts(
                group.slugs.map((slug) => productBySlug.get(slug)).filter((p): p is ProductRow => Boolean(p)),
                params.sort
              );
              if (groupProducts.length === 0) return null;
              return (
                <section key={group.id} id={group.id}>
                  <SectionHeader title={group.title} description={group.description} className="mb-8" />
                  <ProductGrid products={groupProducts} />
                </section>
              );
            })}
          </div>
        ) : (
          <ProductGrid products={products} />
        )}
      </Section>
    </>
  );
}
