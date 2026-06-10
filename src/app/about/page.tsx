import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "@/components/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { buildMetadata } from "@/lib/seo";
import { IMPORTED } from "@/lib/images";
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

const STATS = [
  { stat: String(SITE.since), label: "Operating from Guangzhou" },
  { stat: "BOM", label: "Confirmed before quote" },
  { stat: "MOQ 1", label: "Sample orders" },
  { stat: "72h", label: "Typical burn-in (standard boxes)" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`${SITE.location} · Est. ${SITE.since}`}
        title="About Phones Farm Box"
        description="Guangzhou-based phone farm hardware supplier — design, assembly, QC, and export of chassis, motherboard racks, USB hubs, power and cooling modules, and rack-scale cabinet systems."
        image={IMPORTED.homeHero}
        imageAlt="Phone farm hardware assembly reference"
        theme="light"
      />

      <Section>
        <p className="text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed mb-12">
          Buyers include creator studios, marketing agencies, QA labs, and enterprise device rooms in North America, Europe, Southeast Asia, and the Middle East. Standard catalog items ship with burn-in QC and export packing; custom node counts and rack projects are quoted to drawing.
        </p>

        <div className="trust-strip max-w-4xl mb-16">
          {STATS.map((item) => (
            <div key={item.label} className="trust-strip-item">
              <div className="text-2xl font-bold text-white mb-1">{item.stat}</div>
              <div className="text-xs text-[var(--text-muted)] uppercase tracking-wide">{item.label}</div>
            </div>
          ))}
        </div>

        <SectionHeader eyebrow="Product lines" title="What we build" className="mb-8" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-4">
          {WHAT_WE_BUILD.map((item) => (
            <Link key={item.href} href={item.href}>
              <Surface padding="md" hover className="h-full">
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
              </Surface>
            </Link>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <SectionHeader
              eyebrow="Production"
              title="Factory workflow"
              description="Standard box orders — custom projects add CAD and acceptance test steps."
              className="mb-8"
            />
            <ol className="space-y-4">
              {FACTORY_STEPS.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="shrink-0 w-9 h-9 rounded-xl bg-amber-950/50 border border-amber-900/40 text-amber-400 flex items-center justify-center text-sm font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{s.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] mt-0.5">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Surface padding="md">
              <h2 className="font-bold text-white mb-4">Quality control</h2>
              <ul className="space-y-2">
                {QC_CHECKLIST.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-emerald-500 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Surface>
            <Surface padding="md">
              <h2 className="font-bold text-white mb-4">Export packing</h2>
              <ul className="space-y-2">
                {PACKING_LIST_STANDARD.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--accent)] shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[var(--text-muted)] mt-4">Commercial invoice lists weights and dimensions for freight quotes. Sea and air both supported.</p>
            </Surface>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <Surface padding="md">
            <h2 className="font-bold text-white mb-2">After-sales support</h2>
            <p className="text-sm text-[var(--text-secondary)]">
              Remote batch-control onboarding, wiring troubleshooting, and spare-part guidance via WhatsApp or Telegram. Hardware warranty terms on proforma invoice — typically 12 months on chassis and PSU for standard boxes.
            </p>
          </Surface>
          <Surface padding="md">
            <h2 className="font-bold text-white mb-2">Custom configuration</h2>
            <p className="text-sm text-[var(--text-secondary)]">
              Node counts, chassis dimensions, cooling layouts, tray designs, and rack integrations quoted to your device matrix. Share target quantity and models — we return a BOM before payment.
            </p>
            <Link href="/contact" className="inline-block mt-3 text-sm text-amber-400 hover:underline">Request custom quote →</Link>
          </Surface>
        </div>

        <SectionHeader
          eyebrow="Gallery"
          title="Product & production reference"
          description="Photos from our provided asset library — real hardware references. Slot counts and BOM confirmed on your written quote."
          className="mb-8"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {IMPORTED.factoryGallery.map((img) => (
            <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[var(--border-subtle)]">
              <Image src={img.src} alt={img.label} fill className="object-cover" sizes="(max-width:768px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060a12]/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-white text-xs leading-snug">{img.label}</span>
              </div>
            </div>
          ))}
        </div>

        <Surface padding="md" className="mb-12">
          <h2 className="font-bold text-white mb-3">Official contact channels</h2>
          <ul className="text-sm text-[var(--text-secondary)] space-y-1">
            <li>Phone: {CONTACT.phone}</li>
            <li>WhatsApp: {CONTACT.whatsapp}</li>
            <li>Telegram: {CONTACT.telegram}</li>
            <li>Email: {CONTACT.email}</li>
          </ul>
          <p className="text-xs text-[var(--text-muted)] mt-3">Use only contacts listed on this website. We never request payment through unofficial channels.</p>
        </Surface>

        <ContactCTA title="Discuss your deployment requirements" />
      </Section>
    </>
  );
}
