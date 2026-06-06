import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "@/components/shared";
import { buildMetadata } from "@/lib/seo";
import { IMAGES } from "@/lib/images";
import { SITE, CONTACT } from "@/lib/config";
import { FACTORY_STEPS, QC_CHECKLIST, PACKING_LIST_STANDARD } from "@/data/homepage-trust";

export const metadata = buildMetadata({
  title: "About Phones Farm Box — Guangzhou Hardware Supplier",
  description:
    "Guangzhou phone farm hardware supplier — phone farm boxes, motherboard racks, USB hubs, cooling, assembly workflow, QC, export packing, and after-sales support.",
  path: "/about",
});

const WHAT_WE_BUILD = [
  { title: "Phone farm box", desc: "Android phone chassis with power, USB hub wiring, and cooling — slot count confirmed before quote.", href: "/products/phone-farm-box" },
  { title: "Motherboard rack box", desc: "Headless Android node chassis for lower per-slot cost.", href: "/products/motherboard-box" },
  { title: "iPhone farm cluster", desc: "Batch iPhone layouts — model and cable plan confirmed at quote.", href: "/products/iphone-phone-farm" },
  { title: "USB hub & power", desc: "Industrial hubs, PSU modules, and cooling accessories.", href: "/products/usb-hub" },
  { title: "Network & rack", desc: "Routers, switches, custom cabinets for room-scale projects.", href: "/products/network-equipment" },
  { title: "Integration services", desc: "Remote batch-control setup after hardware delivery.", href: "/products/remote-control-setup" },
];

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container-wide max-w-4xl">
        <h1 className="section-title">About Phones Farm Box</h1>
        <p className="text-xl text-slate-300 mb-4 leading-relaxed">
          We are a Guangzhou-based phone farm hardware supplier — design, assembly, QC, and export of chassis, motherboard racks, USB hubs, power and cooling modules, and rack-scale cabinet systems for multi-device mobile operations.
        </p>
        <p className="text-slate-400 mb-8 leading-relaxed">
          Buyers include creator studios, marketing agencies, QA labs, and enterprise device rooms in North America, Europe, Southeast Asia, and the Middle East. Standard catalog items ship with burn-in QC and export packing; custom node counts and rack projects are quoted to drawing.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { stat: String(SITE.since), label: "Operating from Guangzhou" },
            { stat: "BOM", label: "Confirmed before quote" },
            { stat: "MOQ 1", label: "Sample orders" },
            { stat: "72h", label: "Typical burn-in (standard boxes)" },
          ].map((item) => (
            <div key={item.label} className="card p-4 text-center">
              <div className="text-2xl font-bold text-amber-400">{item.stat}</div>
              <div className="text-xs text-slate-400 mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">What we build</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {WHAT_WE_BUILD.map((item) => (
              <Link key={item.href} href={item.href} className="card p-5 hover:border-amber-800/50 transition-colors">
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Factory workflow</h2>
          <p className="text-sm text-slate-500 mb-6">Standard box orders — custom projects add CAD and acceptance test steps.</p>
          <ol className="space-y-3">
            {FACTORY_STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-4 items-start">
                <span className="shrink-0 w-8 h-8 rounded-full bg-amber-900/50 text-amber-400 flex items-center justify-center font-bold text-sm">{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-white">{s.title}</h3>
                  <p className="text-sm text-slate-400">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">Quality control checklist</h2>
            <ul className="space-y-2">
              {QC_CHECKLIST.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-300">
                  <span className="text-emerald-500">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-4">Export packing process</h2>
            <ul className="space-y-2">
              {PACKING_LIST_STANDARD.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-300">
                  <span className="text-amber-500">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 mt-4">Commercial invoice lists weights and dimensions for freight quotes. Sea and air both supported.</p>
          </section>
        </div>

        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="card p-6">
            <h2 className="font-bold text-white mb-2">After-sales support</h2>
            <p className="text-sm text-slate-400">
              Remote batch-control onboarding, wiring troubleshooting, and spare-part guidance via WhatsApp or Telegram. Hardware warranty terms on proforma invoice — typically 12 months on chassis and PSU for standard boxes.
            </p>
          </div>
          <div className="card p-6">
            <h2 className="font-bold text-white mb-2">Custom configuration</h2>
            <p className="text-sm text-slate-400">
              Node counts, chassis dimensions, cooling layouts, tray designs, and rack integrations quoted to your device matrix. Share target quantity and models — we return a BOM before payment.
            </p>
            <Link href="/contact" className="inline-block mt-3 text-sm text-amber-400 hover:underline">Request custom quote →</Link>
          </div>
        </section>

        <h2 className="text-2xl font-bold text-white mb-4">Reference images</h2>
        <p className="text-slate-500 text-sm mb-6">Assembly reference, packing reference, and deployment examples — not on-site factory photography unless labeled otherwise.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {[
            { src: IMAGES.office, label: "Sales & engineering" },
            { src: IMAGES.factory, label: "Assembly reference" },
            { src: IMAGES.phoneFarmBox.hero, label: "Product reference" },
            { src: IMAGES.customCabinet.hero, label: "Cabinet layout reference" },
            { src: IMAGES.remoteControl.hero, label: "Control workstation reference" },
            { src: IMAGES.network.hero, label: "Network accessory reference" },
          ].map((img) => (
            <div key={img.label} className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image src={img.src} alt={img.label} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent flex items-end p-3">
                <span className="text-white text-sm">{img.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="card p-6 mb-12">
          <h2 className="font-bold text-white mb-3">Official contact channels</h2>
          <ul className="text-sm text-slate-400 space-y-1">
            <li>Phone: {CONTACT.phone}</li>
            <li>WhatsApp: {CONTACT.whatsapp}</li>
            <li>Telegram: {CONTACT.telegram}</li>
            <li>Email: {CONTACT.email}</li>
          </ul>
          <p className="text-xs text-slate-500 mt-3">Use only contacts listed on this website. We never request payment through unofficial channels.</p>
        </div>

        <ContactCTA title="Discuss your deployment requirements" />
      </div>
    </div>
  );
}
