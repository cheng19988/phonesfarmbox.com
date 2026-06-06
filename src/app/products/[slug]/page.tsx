import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getProductB2B } from "@/data/product-b2b";
import { BuyButtons, FAQAccordion } from "@/components/commerce";
import { ContactCTA, JsonLd, StockBadge } from "@/components/shared";
import { buildMetadata, productJsonLd, breadcrumbJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = await prisma.product.findUnique({ where: { slug } });
  if (!product) return {};
  return buildMetadata({
    title: product.name,
    description: product.shortDesc,
    path: `/products/${slug}`,
    image: product.imageHero,
  });
}

function parseJson<T>(s: string, fallback: T): T {
  try { return JSON.parse(s); } catch { return fallback; }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = await prisma.product.findUnique({ where: { slug } });
  if (!product) notFound();

  const b2b = getProductB2B(slug);
  const features = parseJson<string[]>(product.features, []);
  const specs = parseJson<Record<string, string>>(product.specs, {});
  const scenarios = parseJson<string[]>(product.scenarios, []);
  const faq = parseJson<{ q: string; a: string }[]>(product.faq, []);

  return (
    <>
      <JsonLd data={[
        productJsonLd({ name: product.name, description: product.shortDesc, slug: product.slug, priceUsd: product.priceUsd, stock: product.stock, image: product.imageHero }),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: product.name, path: `/products/${slug}` },
        ]),
      ]} />

      <div className="section">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-900">
                <Image src={product.imageDetail} alt={product.name} fill className="object-cover" priority />
              </div>
              {b2b && <p className="text-xs text-slate-500 mt-2">{b2b.imageCaption}</p>}
            </div>
            <div>
              <p className="text-amber-400/80 text-sm mb-2">{product.category}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{product.name}</h1>
              <p className="text-slate-300 mb-4">{product.shortDesc}</p>
              {b2b && (
                <p className="text-sm text-slate-400 mb-4 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-500">Best for:</span> {b2b.bestFor}
                </p>
              )}
              <div className="flex items-center gap-4 mb-2">
                <span className="text-3xl font-bold text-white">${product.priceUsd.toLocaleString()}</span>
                <StockBadge stock={product.stock} />
              </div>
              <p className="text-xs text-slate-500 mb-6">List price — confirm configuration and freight before payment.</p>
              <BuyButtons slug={product.slug} name={product.name} stock={product.stock} />
            </div>
          </div>

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
                <div key={row.label} className="p-4 rounded-lg border border-slate-800 bg-slate-900/30">
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">{row.label}</div>
                  <div className="text-sm text-slate-200">{row.value}</div>
                </div>
              ))}
            </section>
          )}

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                <p className="text-slate-300 leading-relaxed">{product.description}</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Highlights</h2>
                <ul className="space-y-2">
                  {features.map((f) => (
                    <li key={f} className="flex gap-2 text-slate-300"><span className="text-emerald-500">✓</span>{f}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Specifications</h2>
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(specs).map(([k, v]) => (
                      <tr key={k} className="border-b border-slate-800">
                        <td className="py-3 text-slate-400 pr-4 w-1/3">{k}</td>
                        <td className="py-3 text-white">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
              {scenarios.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Typical use cases</h2>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {scenarios.map((s) => (
                      <li key={s} className="text-sm text-slate-400 py-2 px-3 rounded border border-slate-800">{s}</li>
                    ))}
                  </ul>
                </section>
              )}
              {faq.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">FAQ</h2>
                  <FAQAccordion items={faq.map((f) => ({ question: f.q, answer: f.a }))} />
                </section>
              )}
            </div>
            <div className="space-y-6">
              {b2b && (
                <>
                  <section className="p-5 rounded-xl border border-slate-800">
                    <h3 className="font-bold text-white mb-3">What&apos;s included</h3>
                    <ul className="space-y-1 text-sm text-slate-400">
                      {b2b.included.map((a) => <li key={a}>• {a}</li>)}
                    </ul>
                  </section>
                  <section className="p-5 rounded-xl border border-slate-800">
                    <h3 className="font-bold text-white mb-3">Optional add-ons</h3>
                    <ul className="space-y-1 text-sm text-slate-400">
                      {b2b.optionalAddons.map((a) => <li key={a}>• {a}</li>)}
                    </ul>
                  </section>
                  <section className="p-5 rounded-xl border border-slate-800">
                    <h3 className="font-bold text-white mb-3">Shipping package</h3>
                    <ul className="space-y-1 text-sm text-slate-400">
                      {b2b.shippingPackage.map((d) => <li key={d}>• {d}</li>)}
                    </ul>
                  </section>
                  <section className="p-5 rounded-xl border border-slate-800">
                    <h3 className="font-bold text-white mb-3">Warranty &amp; support</h3>
                    <p className="text-sm text-slate-400">{b2b.warranty}</p>
                  </section>
                </>
              )}
            </div>
          </div>

          <div className="mt-16">
            <ContactCTA title={`Request a quote for ${product.name}`} />
          </div>
        </div>
      </div>
    </>
  );
}
