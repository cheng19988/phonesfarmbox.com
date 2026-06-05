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
import { SOLUTION_PAGES } from "@/data/solutions-pages";
import { IMAGES } from "@/lib/images";
import { SITE, CONTACT } from "@/lib/config";

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
        <Image src={IMAGES.homeHero} alt="Phone farm box hardware chassis" fill className="object-cover opacity-25" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/92 to-transparent" />
        <div className="container-wide relative py-20">
          <p className="text-amber-400 font-medium mb-3">{SITE.location} · Manufacturing since {SITE.since}</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
            Phone Farm Box Hardware, Accessories and Real-Device Deployment Guides
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mb-8">
            Factory-direct phone farm boxes, motherboard chassis, power and cooling systems, and deployment support for teams running real Android and iPhone devices at scale.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Link href="/products" className="btn-primary text-lg px-8 py-3">Browse Products</Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-3">Request a Quote</Link>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <span>MOQ from 1 unit</span>
            <span>·</span>
            <span>Sample orders welcome</span>
            <span>·</span>
            <span>Ships worldwide from Guangzhou</span>
          </div>
        </div>
      </section>

      {/* Core capabilities */}
      <section className="section bg-slate-900/50">
        <div className="container-wide">
          <h2 className="section-title text-center">What You Can Run on Phone Farm Box Hardware</h2>
          <p className="section-subtitle text-center mx-auto">Industrial chassis, unified power, active cooling, and batch PC control — built for 24/7 multi-device operations.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Modular Box Scaling", desc: "Standard 20-node boxes stack vertically. Add capacity by adding chassis, not by renting more virtual seats.", href: "/features/multi-device-dashboard" },
              { title: "Synchronized Device Control", desc: "Operate one master device and mirror actions across a full device group from a single PC.", href: "/features/synchronized-device-control" },
              { title: "Bulk App Deployment", desc: "Install, update, or remove apps across every connected device in one batch operation.", href: "/features/bulk-apk-deployment" },
              { title: "Device Profile Reset", desc: "Refresh system state and prepare clean account environments without rebuilding your rack.", href: "/features/device-profile-reset" },
              { title: "Team Device Assignment", desc: "Split device groups by client, region, or project with shared dashboard access.", href: "/features/team-device-management" },
              { title: "Network & IP Planning", desc: "Router integration, proxy assignment, and per-group connectivity for multi-account workflows.", href: "/features/network-setup" },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="card p-6 hover:border-amber-800 transition-colors group">
                <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Real device positioning */}
      <section className="section">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Physical Devices, Not Virtual Instances</h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Each node in a Phones Farm Box is a real Android phone, iPhone, or motherboard with genuine IMEI, sensors, and mobile hardware behavior. That matters when your workflow depends on platform trust, camera access, SIM routing, or long-running sessions.
            </p>
            <p className="text-slate-400 mb-6 leading-relaxed">
              We engineer the enclosure around the devices: centralized PSU, active cooling, cable management, and a single USB path to your control PC. Units leave our Guangzhou workshop after burn-in testing.
            </p>
            <Link href="/help/phone-farm-box-vs-cloud-phone" className="btn-primary">Read the hardware comparison</Link>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image src={IMAGES.realDevice.hero} alt="Real device phone farm box deployment" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Platform Scenarios */}
      <section className="section bg-slate-900/50">
        <div className="container-wide">
          <h2 className="section-title">Platform Deployment Guides</h2>
          <p className="section-subtitle">Hardware and workflow notes for teams operating multiple accounts on major social, video, and messaging platforms.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SCENARIOS.slice(0, 8).map((s) => (
              <Link key={s.slug} href={`/scenarios/${s.slug}`} className="card p-5 hover:border-amber-800 transition-colors group">
                <span className="text-xs text-amber-400">{s.category}</span>
                <h3 className="font-bold text-white mt-1 group-hover:text-amber-400 transition-colors text-sm">{s.title.split(" with")[0]}</h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/scenarios" className="btn-outline">All platform guides</Link>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section">
        <div className="container-wide">
          <h2 className="section-title">Solutions by Use Case</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTION_PAGES.slice(0, 6).map((s) => (
              <Link key={s.slug} href={`/solutions/${s.slug}`} className="card p-6 hover:border-amber-800 transition-colors group">
                <span className="text-xs text-amber-400">{s.category}</span>
                <h3 className="font-bold text-white mt-2 group-hover:text-amber-400 transition-colors">{s.title}</h3>
                <p className="text-sm text-slate-400 mt-2 line-clamp-2">{s.subtitle}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/solutions" className="btn-outline">All solutions</Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section bg-slate-900/50">
        <div className="container-wide">
          <h2 className="section-title">Hardware Catalog</h2>
          <p className="section-subtitle">Boxes, chassis, hubs, power, cooling, and network parts — priced in USD with current stock status.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} slug={p.slug} name={p.name} shortDesc={p.shortDesc} priceUsd={p.priceUsd} stock={p.stock} imageCard={p.imageCard} category={p.category} />
            ))}
          </div>
          <div className="text-center mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/products" className="btn-outline">Full product list</Link>
            <Link href="/pricing" className="btn-secondary">View pricing overview</Link>
          </div>
        </div>
      </section>

      {/* Knowledge hub */}
      <section className="section">
        <div className="container-wide grid md:grid-cols-3 gap-6">
          {[
            { title: "Help Center", desc: "Setup, network configuration, remote control, troubleshooting, and payment documentation.", href: "/help" },
            { title: "Glossary", desc: "Definitions for box hardware, ADB, batch control, cooling, and deployment terminology.", href: "/glossary" },
            { title: "Planning Tools", desc: "Sizing calculator, IP planner, buying checklist, and hardware comparison worksheets.", href: "/tools" },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="card p-6 hover:border-amber-800 transition-colors group">
              <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">{item.title}</h3>
              <p className="text-sm text-slate-400 mt-2">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Factory */}
      <section className="section bg-slate-900/50">
        <div className="container-wide">
          <h2 className="section-title">Guangzhou Workshop &amp; Fulfillment</h2>
          <p className="section-subtitle mb-8">Assembly, QC burn-in, and export packaging handled in-house before shipment.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: IMAGES.office, label: "Sales & Engineering Office" },
              { src: IMAGES.factory, label: "Assembly & Burn-in" },
              { src: IMAGES.phoneFarmBox.hero, label: "Finished Phone Farm Boxes" },
              { src: IMAGES.customCabinet.hero, label: "Rack & Cabinet Builds" },
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
      <section className="section">
        <div className="container-wide max-w-3xl">
          <h2 className="section-title text-center">Common Questions from Buyers</h2>
          <FAQAccordion items={previewFaq} />
          <div className="text-center mt-8">
            <Link href="/faq" className="btn-outline">Full FAQ</Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="section bg-slate-900/50">
        <div className="container-wide">
          <h2 className="section-title">Deployment Guides</h2>
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
            <Link href="/blog" className="btn-outline">All guides</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <ContactCTA title="Tell Us Your Device Count and Workflow" />
          <p className="text-center text-sm text-slate-500 mt-4">
            Typical reply within one business day · {CONTACT.whatsapp} · {CONTACT.telegram}
          </p>
        </div>
      </section>
    </>
  );
}
