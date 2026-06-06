import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/commerce";
import { CONTACT, SITE } from "@/lib/config";
import { IMAGES } from "@/lib/images";
import {
  DEPLOYMENT_STORIES,
  FACTORY_STEPS,
  PACKING_LIST_STANDARD,
  PRODUCT_CATEGORIES,
  QC_CHECKLIST,
  QUOTE_PROCESS,
  WHY_BUYERS,
} from "@/data/homepage-trust";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Phone Farm Box Hardware Supplier — Guangzhou",
  description:
    "Phones Farm Box supplies real Android and iPhone farm hardware — boxes, motherboard racks, USB hubs, cooling, and batch control — from Guangzhou since 2017. MOQ from 1 unit. Global shipping.",
  path: "/",
});

export default async function HomePage() {
  const products = await prisma.product.findMany({
    where: { published: true },
    orderBy: { priceUsd: "asc" },
    take: 6,
  });

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden border-b border-slate-800">
        <Image src={IMAGES.homeHero} alt="Phone farm box hardware" fill className="object-cover opacity-20" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/70" />
        <div className="container-wide relative py-20">
          <p className="text-amber-400/90 text-sm font-medium tracking-wide mb-4">
            {SITE.location} hardware supplier · Est. {SITE.since}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
            Phone farm box hardware for teams running real Android &amp; iPhone devices at scale
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8">
            We supply chassis, motherboard racks, USB hubs, power, cooling, and batch-control-ready setups — physical hardware you own. Not cloud phones. Not emulators.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Link href="/contact" className="btn-primary text-lg px-8 py-3">Get a Hardware Quote</Link>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg px-8 py-3">WhatsApp Inquiry</a>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
            <li>MOQ from 1 unit</li>
            <li>Lead time quoted per configuration</li>
            <li>Air &amp; sea export</li>
            <li>Custom rack projects</li>
          </ul>
        </div>
      </section>

      {/* Product categories */}
      <section className="section">
        <div className="container-wide">
          <h2 className="section-title">Hardware Categories</h2>
          <p className="section-subtitle">Browse by chassis type — final device list confirmed before invoice.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRODUCT_CATEGORIES.map((c) => (
              <Link key={c.href} href={c.href} className="block p-5 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-amber-800/60 transition-colors">
                <h3 className="font-semibold text-white mb-2">{c.name}</h3>
                <p className="text-sm text-slate-400">{c.desc}</p>
              </Link>
            ))}
            <Link href="/products" className="block p-5 rounded-xl border border-dashed border-slate-700 hover:border-amber-700 flex items-center justify-center text-amber-400 font-medium">
              Full catalog →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="section bg-slate-900/30 border-y border-slate-800/80">
        <div className="container-wide">
          <h2 className="section-title">Popular SKUs</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} slug={p.slug} name={p.name} shortDesc={p.shortDesc} priceUsd={p.priceUsd} stock={p.stock} imageCard={p.imageCard} category={p.category} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/pricing" className="btn-outline">View pricing &amp; bulk inquiry</Link>
          </div>
        </div>
      </section>

      {/* Factory capability */}
      <section className="section">
        <div className="container-wide">
          <h2 className="section-title">Assembly, Test &amp; Shipment</h2>
          <p className="section-subtitle mb-8">Workflow we follow for standard box orders. Illustrations on this site are product references — ask for photos of your exact build if needed.</p>
          <div className="grid md:grid-cols-5 gap-4">
            {FACTORY_STEPS.map((s, i) => (
              <div key={s.title} className="relative pl-4 border-l-2 border-amber-800/50">
                <span className="text-xs text-amber-500 font-mono">0{i + 1}</span>
                <h3 className="font-semibold text-white mt-1 mb-1">{s.title}</h3>
                <p className="text-xs text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QC + packing */}
      <section className="section bg-slate-900/30">
        <div className="container-wide grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Quality control checklist</h2>
            <ul className="space-y-2">
              {QC_CHECKLIST.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-300"><span className="text-emerald-500">✓</span>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Typical packing list</h2>
            <ul className="space-y-2">
              {PACKING_LIST_STANDARD.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-300"><span className="text-amber-500">•</span>{item}</li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 mt-4">Warranty and after-sales terms stated on proforma invoice. Remote setup available as add-on.</p>
          </div>
        </div>
      </section>

      {/* Deployment stories */}
      <section className="section">
        <div className="container-wide">
          <h2 className="section-title">Deployment Examples</h2>
          <p className="section-subtitle">Anonymous buyer scenarios — company names omitted. Configurations vary; confirm yours at quote.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {DEPLOYMENT_STORIES.map((s) => (
              <article key={s.title} className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                <p className="text-xs text-amber-400 mb-2">{s.region}</p>
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 mb-2"><span className="text-slate-500">Setup:</span> {s.setup}</p>
                <p className="text-sm text-slate-300">{s.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why buyers */}
      <section className="section bg-slate-900/30 border-y border-slate-800/80">
        <div className="container-wide">
          <h2 className="section-title text-center">Why Buyers Work With Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
            {WHY_BUYERS.map((w) => (
              <div key={w.title} className="text-center p-4">
                <h3 className="font-semibold text-white text-sm mb-2">{w.title}</h3>
                <p className="text-xs text-slate-400">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote process */}
      <section className="section">
        <div className="container-wide max-w-4xl">
          <h2 className="section-title text-center">Quote Process</h2>
          <ol className="space-y-4 mt-8">
            {QUOTE_PROCESS.map((q) => (
              <li key={q.step} className="flex gap-4 items-start">
                <span className="shrink-0 w-8 h-8 rounded-full bg-amber-900/50 text-amber-400 flex items-center justify-center font-bold text-sm">{q.step}</span>
                <div>
                  <h3 className="font-semibold text-white">{q.title}</h3>
                  <p className="text-sm text-slate-400">{q.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Use cases link strip */}
      <section className="section bg-slate-900/30">
        <div className="container-wide text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Deployment by platform or industry</h2>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">Guides for TikTok, YouTube, QA labs, and cross-border teams — hardware-first, not SaaS signup.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/scenarios/tiktok" className="btn-outline text-sm">TikTok farms</Link>
            <Link href="/solutions/app-development-qa" className="btn-outline text-sm">QA labs</Link>
            <Link href="/solutions/cross-border-marketing" className="btn-outline text-sm">Cross-border ops</Link>
            <Link href="/help" className="btn-outline text-sm">Setup docs</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container-wide max-w-3xl mx-auto text-center rounded-2xl border border-amber-800/40 bg-gradient-to-b from-slate-900 to-slate-950 p-10 md:p-14">
          <h2 className="text-3xl font-bold text-white mb-4">Get a hardware quote today</h2>
          <p className="text-slate-300 mb-8">Send device count, models (if known), country, and timeline. We respond on business days within 72 hours.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary px-8 py-3">Contact Sales</Link>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary px-8 py-3">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
