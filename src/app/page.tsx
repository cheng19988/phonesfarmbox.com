import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { ProductCard, FAQAccordion } from "@/components/commerce";
import { ContactCTA } from "@/components/shared";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/shared";
import { FAQ_ITEMS } from "@/data/faq";
import { BLOG_POSTS } from "@/data/blog";
import { SCENARIOS } from "@/data/scenarios";
import { FEATURE_PAGES } from "@/data/features-pages";
import { SOLUTION_PAGES } from "@/data/solutions-pages";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Phone Farm Box Hardware, Accessories and Real-Device Deployment Guides",
  description: SITE.description,
  path: "/",
});

export default async function HomePage() {
  const products = await prisma.product.findMany({
    where: { published: true },
    orderBy: { priceUsd: "asc" },
    take: 8,
  });

  const previewFaq = FAQ_ITEMS.slice(0, 6);

  return (
    <>
      <JsonLd data={faqJsonLd(previewFaq)} />

      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <Image src={IMAGES.homeHero} alt="Phone farm box hardware" fill className="object-cover opacity-25" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/92 to-transparent" />
        <div className="container-wide relative py-20">
          <p className="text-amber-400 font-medium mb-3">📍 {SITE.location} · Real-Device Hardware Since {SITE.since}</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
            Phone Farm Box Hardware, Accessories and Real-Device Deployment Guides
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mb-8">{SITE.intro}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/products" className="btn-primary text-lg px-8 py-3">Shop Phone Farm Boxes</Link>
            <Link href="/help/what-is-phone-farm-box" className="btn-secondary text-lg px-8 py-3">What Is a Phone Farm Box?</Link>
          </div>
        </div>
      </section>

      {/* Core Features — duoplus homepage feature grid, converted to hardware */}
      <section className="section bg-slate-900/50">
        <div className="container-wide">
          <h2 className="section-title text-center">Real-Device Phone Farm Capabilities</h2>
          <p className="section-subtitle text-center mx-auto">Physical phone farm box infrastructure — the real-device alternative to cloud phone multi-account management.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Unlimited Device Scaling", desc: "Stack phone farm boxes modularly — no virtual device limits, scale with real hardware as your operation grows.", href: "/features/multi-device-dashboard" },
              { title: "Multi-Device Control", desc: "Control all physical devices from one PC via batch control software — no cloud client required.", href: "/features/synchronized-device-control" },
              { title: "Bulk App Management", desc: "Install, uninstall, and launch apps across 20+ real devices in one operation.", href: "/features/bulk-apk-deployment" },
              { title: "Device Profile Reset", desc: "Refresh device identity and system state on real hardware — prepare fresh account environments quickly.", href: "/features/device-profile-reset" },
              { title: "Team Device Sharing", desc: "Assign device groups to team members for collaborative multi-account operations.", href: "/features/team-device-management" },
              { title: "Network & IP Planning", desc: "Router solutions and per-device network segmentation — hardware equivalent of cloud proxy management.", href: "/features/network-setup" },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="card p-6 hover:border-amber-800 transition-colors group">
                <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Real Device vs Cloud */}
      <section className="section">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Real Device Deployment — Not Cloud Phone</h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Deploy real physical Android and iPhone devices in industrial phone farm boxes. Each device has genuine IMEI, sensors, and mobile hardware profiles — operating like authentic user devices to support stable multi-account workflows on TikTok, YouTube, Facebook, Instagram, and more.
            </p>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Unlike cloud phones running on shared virtual infrastructure, phone farm boxes provide hardware-level environment isolation with centralized power, cooling, and USB connectivity from our Guangzhou factory.
            </p>
            <Link href="/help/phone-farm-box-vs-cloud-phone" className="btn-primary">Box vs Cloud Comparison →</Link>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image src={IMAGES.realDevice.hero} alt="Real device phone farm deployment" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Platform Scenarios */}
      <section className="section bg-slate-900/50">
        <div className="container-wide">
          <h2 className="section-title">Platform Scenarios</h2>
          <p className="section-subtitle">Multi-device management for major platforms — converted from cloud phone scenarios to real hardware deployment.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SCENARIOS.map((s) => (
              <Link key={s.slug} href={`/scenarios/${s.slug}`} className="card p-5 hover:border-amber-800 transition-colors group">
                <span className="text-xs text-amber-400">{s.category}</span>
                <h3 className="font-bold text-white mt-1 group-hover:text-amber-400 transition-colors">{s.title.split(" with")[0]}</h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/scenarios" className="btn-outline">All Platform Scenarios →</Link>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section">
        <div className="container-wide">
          <h2 className="section-title">Industry Solutions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTION_PAGES.map((s) => (
              <Link key={s.slug} href={`/solutions/${s.slug}`} className="card p-6 hover:border-amber-800 transition-colors group">
                <span className="text-xs text-amber-400">{s.category}</span>
                <h3 className="font-bold text-white mt-2 group-hover:text-amber-400 transition-colors">{s.title}</h3>
                <p className="text-sm text-slate-400 mt-2 line-clamp-2">{s.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section bg-slate-900/50">
        <div className="container-wide">
          <h2 className="section-title">Phone Farm Box Products</h2>
          <p className="section-subtitle">Hardware, accessories, and deployment services — with prices and stock status.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} slug={p.slug} name={p.name} shortDesc={p.shortDesc} priceUsd={p.priceUsd} stock={p.stock} imageCard={p.imageCard} category={p.category} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products" className="btn-outline">View All Products →</Link>
          </div>
        </div>
      </section>

      {/* Features explore */}
      <section className="section">
        <div className="container-wide">
          <h2 className="section-title">Explore Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURE_PAGES.slice(0, 8).map((f) => (
              <Link key={f.slug} href={`/features/${f.slug}`} className="card p-4 hover:border-amber-800 transition-colors text-sm">
                <h3 className="font-semibold text-white hover:text-amber-400">{f.title}</h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/features" className="btn-outline">All Features →</Link>
          </div>
        </div>
      </section>

      {/* Knowledge hub */}
      <section className="section bg-slate-900/50">
        <div className="container-wide grid md:grid-cols-3 gap-6">
          {[
            { title: "Help Center", desc: "Setup guides, network config, troubleshooting, and payment docs.", href: "/help" },
            { title: "Glossary", desc: "20+ phone farm hardware terms — box, motherboard, ADB, batch control, and more.", href: "/glossary" },
            { title: "Free Tools", desc: "Sizing calculator, IP planner, buying checklist, and comparison guides.", href: "/tools" },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="card p-6 hover:border-amber-800 transition-colors group">
              <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">{item.title}</h3>
              <p className="text-sm text-slate-400 mt-2">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Factory */}
      <section className="section">
        <div className="container-wide">
          <h2 className="section-title">Guangzhou Factory &amp; Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { src: IMAGES.office, label: "Office" },
              { src: IMAGES.meeting, label: "Meeting Room" },
              { src: IMAGES.workshop, label: "Workshop" },
              { src: IMAGES.factory, label: "Assembly" },
              { src: IMAGES.warehouse, label: "Warehouse" },
            ].map((img) => (
              <div key={img.label} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image src={img.src} alt={img.label} fill className="object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-3">
                  <span className="text-white text-sm font-medium">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-slate-900/50">
        <div className="container-wide max-w-3xl">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <FAQAccordion items={previewFaq} />
          <div className="text-center mt-8">
            <Link href="/faq" className="btn-outline">View All FAQ →</Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="section">
        <div className="container-wide">
          <h2 className="section-title">Guides &amp; Blog</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card p-6 hover:border-amber-800 transition-colors group">
                <span className="text-xs text-amber-400">{post.category}</span>
                <h3 className="font-bold text-white mt-2 group-hover:text-amber-400 transition-colors">{post.title}</h3>
                <p className="text-sm text-slate-400 mt-2 line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="btn-outline">All Guides →</Link>
          </div>
        </div>
      </section>

      <section className="section bg-slate-900/50">
        <div className="container-wide">
          <ContactCTA title="Ready to Build Your Real-Device Phone Farm?" />
        </div>
      </section>
    </>
  );
}
