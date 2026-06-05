import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "@/components/shared";
import { buildMetadata } from "@/lib/seo";
import { IMAGES } from "@/lib/images";
import { SITE, CONTACT } from "@/lib/config";

export const metadata = buildMetadata({
  title: "About Phones Farm Box — Guangzhou Manufacturer",
  description:
    "Phones Farm Box is a Guangzhou-based real-device phone farm hardware brand. Factory-direct boxes, custom solutions, and global delivery since 2017.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container-wide max-w-4xl">
        <h1 className="section-title">About Phones Farm Box</h1>
        <p className="text-xl text-slate-300 mb-4 leading-relaxed">
          We design and assemble phone farm box hardware in Guangzhou — chassis, motherboard nodes, USB hubs, power and cooling modules, and rack-scale cabinet systems for teams that need stable multi-device operations on real mobile hardware.
        </p>
        <p className="text-slate-400 mb-8 leading-relaxed">
          Since {SITE.since}, we have supplied creator studios, marketing agencies, QA labs, and enterprise buyers in North America, Europe, and Southeast Asia. Every standard box ships with batch control software, QC burn-in, and export-ready packaging.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { stat: "2017", label: "Founded in Guangzhou" },
            { stat: "20+", label: "Devices per standard box" },
            { stat: "MOQ 1", label: "Sample orders accepted" },
            { stat: "72h", label: "Burn-in before shipment" },
          ].map((item) => (
            <div key={item.label} className="card p-4 text-center">
              <div className="text-2xl font-bold text-amber-400">{item.stat}</div>
              <div className="text-xs text-slate-400 mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { title: "Real hardware only", desc: "We build around physical Android phones, iPhones, and motherboard nodes — not virtual instances or emulators." },
            { title: "Factory-direct sales", desc: "Engineering, assembly, and export support sit under one team. No reseller markup on standard catalog items." },
            { title: "Custom engineering", desc: "Node counts, chassis dimensions, cooling layouts, and rack integrations are quoted to your workflow." },
            { title: "Post-sale support", desc: "Remote setup assistance for batch control, network planning, and first deployment via WhatsApp or Telegram." },
          ].map((item) => (
            <div key={item.title} className="card p-6">
              <h2 className="font-bold text-white mb-2">{item.title}</h2>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Workshop &amp; Fulfillment</h2>
        <p className="text-slate-400 mb-6">Assembly, QC, and export packaging are handled at our Guangzhou facility before DHL, FedEx, or sea freight dispatch.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {[
            { src: IMAGES.office, label: "Sales & Engineering" },
            { src: IMAGES.factory, label: "Assembly & QC" },
            { src: IMAGES.phoneFarmBox.hero, label: "Finished Products" },
            { src: IMAGES.customCabinet.hero, label: "Rack Builds" },
            { src: IMAGES.remoteControl.hero, label: "Control Station Setup" },
            { src: IMAGES.network.hero, label: "Network Equipment" },
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
          <p className="text-xs text-slate-500 mt-3">Use only the contacts listed on this website. We never request payment through unofficial channels.</p>
        </div>

        <ContactCTA title="Discuss Your Deployment Requirements" />
      </div>
    </div>
  );
}
