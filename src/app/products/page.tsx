import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/commerce";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Phone Farm Products & Hardware Shop",
  description:
    "Shop phone farm boxes, motherboard boxes, Android & iPhone farms, USB hubs, power, cooling, network equipment, and custom cabinets. Factory-direct from Guangzhou.",
  path: "/products",
});

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

  return (
    <div className="section">
      <div className="container-wide">
        <h1 className="section-title">Phone Farm Hardware Catalog</h1>
        <p className="section-subtitle">
          Factory-direct pricing in USD. In-stock units typically ship within 3–5 business days after payment confirmation.
        </p>

        <div className="card p-5 mb-8 flex flex-wrap items-center justify-between gap-4 border-amber-800/30 bg-amber-950/10">
          <div>
            <p className="font-medium text-white">Need a bulk or custom quote?</p>
            <p className="text-sm text-slate-400">Send device count, platform, and delivery country — we reply with MOQ, lead time, and shipping options.</p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">Request Quote</Link>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <Link href="/products" className={`px-3 py-1 rounded-full text-sm border ${!params.category ? "border-amber-600 text-amber-400" : "border-slate-700 text-slate-400"}`}>
            All
          </Link>
          {categories.map((cat) => (
            <Link key={cat} href={`/products?category=${encodeURIComponent(cat)}`} className={`px-3 py-1 rounded-full text-sm border ${params.category === cat ? "border-amber-600 text-amber-400" : "border-slate-700 text-slate-400"}`}>
              {cat}
            </Link>
          ))}
        </div>

        <div className="flex gap-3 mb-8 text-sm">
          <span className="text-slate-500">Sort:</span>
          <Link href={`/products?${params.category ? `category=${encodeURIComponent(params.category)}&` : ""}sort=price-asc`} className="text-slate-400 hover:text-white">Price: low to high</Link>
          <Link href={`/products?${params.category ? `category=${encodeURIComponent(params.category)}&` : ""}sort=price-desc`} className="text-slate-400 hover:text-white">Price: high to low</Link>
        </div>

        {products.length === 0 ? (
          <p className="text-slate-400">No products in this category. <Link href="/contact" className="text-amber-400 hover:underline">Contact us</Link> for availability.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} slug={p.slug} name={p.name} shortDesc={p.shortDesc} priceUsd={p.priceUsd} stock={p.stock} imageCard={p.imageCard} category={p.category} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
