import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/commerce";
import { CONTACT, SITE } from "@/lib/config";
import { IMAGES, IMPORTED } from "@/lib/images";
import { resolveProductCardImage } from "@/lib/resolve-product-card-image";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { CTABand, Surface } from "@/components/ui/surface";
import { FACTORY_STEPS, HARDWARE_TRUST_POINTS, PRODUCT_CATEGORIES } from "@/data/homepage-trust";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Phone Farm Box Hardware Supplier — Guangzhou",
  description: SITE.description,
  path: "/",
});

const TRUST_METRICS = [
  { value: "2017", label: "Supplier since" },
  { value: "Guangzhou", label: "Export hub" },
  { value: "MOQ 1", label: "Samples welcome" },
  { value: "Global", label: "Air & sea export" },
];

export default async function HomePage() {
  const products = await prisma.product.findMany({
    where: { published: true },
    orderBy: { priceUsd: "asc" },
    take: 6,
  });

  return (
    <>
      <PageHero
        size="home"
        eyebrow={`${SITE.location} · Est. ${SITE.since} · B2B phone farm hardware`}
        title="Industrial phone farm hardware, built for scale"
        description="Chassis, motherboard racks, USB hubs, power, and cooling — assembled, tested, and exported from Guangzhou. Configuration and lead time confirmed on written quote before payment."
        image={IMAGES.homeHero}
        imageAlt="Phone farm box hardware"
        theme="light"
      >
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 mb-8">
          <Link href="/contact" className="btn-primary text-base px-7 py-3 sm:w-auto text-center">
            Request Hardware Quote
          </Link>
          <Link href="/products" className="btn-secondary text-base px-7 py-3 sm:w-auto text-center">
            Browse Catalog
          </Link>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-base px-7 py-3 sm:w-auto text-center"
          >
            WhatsApp
          </a>
        </div>
        <div className="hero-trust-metrics">
          {TRUST_METRICS.map((m, i) => (
            <div key={m.label} className="hero-trust-metric">
              {i > 0 && <span className="hero-trust-divider hidden sm:block" aria-hidden />}
              <div className="font-bold text-slate-900 text-lg sm:text-xl leading-tight">{m.value}</div>
              <div className="text-[11px] sm:text-xs text-[var(--text-muted)] uppercase tracking-wide mt-1">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </PageHero>

      <Section variant="muted">
        <SectionHeader
          eyebrow="Why buyers quote with us"
          title="Quote-first B2B hardware — not a template shop"
          description="Written BOM, connection mode, voltage region, and lead time on proforma before assembly. USDT and bank transfer options; packing photos and datasheet on request."
          align="center"
          className="max-w-4xl"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {HARDWARE_TRUST_POINTS.map((t) => (
            <Surface key={t.title} padding="md" hover className="h-full">
              <h3 className="font-semibold text-slate-900 mb-2">{t.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{t.desc}</p>
            </Surface>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Catalog"
          title="Popular hardware SKUs"
          description="List prices in USD — slot count, hub tier, and freight confirmed on your written quote."
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
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-4 mt-12">
          <Link href="/products" className="btn-primary">
            Full catalog
          </Link>
          <Link href="/pricing" className="btn-secondary">
            Pricing tiers
          </Link>
        </div>
      </Section>

      <Section variant="muted">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
            <Image src={IMPORTED.factoryHero} alt="Assembly and test workflow" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            <p className="absolute bottom-4 left-4 right-4 text-xs text-white bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2">
              Real product reference from our hardware library — slot count and BOM confirmed on your written quote.
            </p>
          </div>
          <div>
            <SectionHeader
              eyebrow="Factory workflow"
              title="Assembly, test, and export-ready packing"
              description="Standard box orders follow a documented workflow. Illustrations on this site are references — your BOM defines the exact build."
              className="mb-8"
            />
            <ol className="space-y-4">
              {FACTORY_STEPS.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="shrink-0 w-9 h-9 rounded-xl bg-orange-100 border border-orange-200 text-orange-700 flex items-center justify-center text-sm font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">{s.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] mt-0.5">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link href="/pricing" className="inline-flex mt-8 text-amber-400 hover:text-amber-300 font-medium text-sm">
              Full quote &amp; delivery process →
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Browse by type" title="Hardware categories" />
        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCT_CATEGORIES.slice(0, 3).map((c, i) => {
            const imgs = [IMAGES.phoneFarmBox.hero, IMAGES.motherboardBox.hero, IMAGES.androidFarm.hero];
            return (
              <Link key={c.href} href={c.href} className="group block rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-orange-300 shadow-sm hover:shadow-md transition-all">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-50">
                  <Image src={imgs[i] ?? IMAGES.homeHero} alt="" fill className="object-contain p-3 group-hover:scale-[1.02] transition-transform duration-500" sizes="33vw" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-slate-900 text-lg mb-2 group-hover:text-orange-700 transition-colors">{c.name}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{c.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-8">
          <Link href="/products" className="btn-outline">
            View all categories
          </Link>
        </div>
      </Section>

      <Section variant="dark">
        <CTABand
          title="Ready for a written hardware quote?"
          description="Send quantity, platform mix, shipping country, and timeline. We reply on business days with configuration, lead time, and payment options."
        >
          <Link href="/contact" className="btn-primary px-8">
            Request Quote
          </Link>
          <Link href="/pricing" className="btn-secondary px-8">
            See pricing
          </Link>
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-outline px-8">
            WhatsApp
          </a>
        </CTABand>
      </Section>
    </>
  );
}
