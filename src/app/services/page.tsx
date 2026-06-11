import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { CTABand, Surface } from "@/components/ui/surface";
import { SERVICES } from "@/data/services";
import { IMPORTED } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Phone Farm Services & Solutions",
  description:
    "Phone farm setup, remote control configuration, group control, bulk deployment, custom hardware, enterprise solutions, maintenance, samples, and overseas delivery.",
  path: "/services",
});

const HIGHLIGHTS = [
  {
    title: "Pre-shipment configuration",
    desc: "Burn-in testing, firmware checks, and cable/PSU verification before export.",
  },
  {
    title: "Remote onboarding",
    desc: "Screen sharing support for batch control install, ADB setup, and first synchronized test.",
  },
  {
    title: "Enterprise project management",
    desc: "Dedicated engineering contact for 50+ device racks and custom cabinet builds.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Guangzhou workshop"
        title="Deployment services"
        description="Hardware is only half the deployment. We help with remote control setup, network planning, group control configuration, and enterprise rack rollouts."
        image={IMPORTED.factoryHero}
        imageAlt="Phone farm deployment services"
        theme="light"
      />

      <Section>
        <SectionHeader
          eyebrow="What we deliver"
          title="Before and after shipment"
          description="Services are scoped on your written quote — device count, software stack, and timeline confirmed before work starts."
        />
        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-4">
          {HIGHLIGHTS.map((item) => (
            <Surface key={item.title} padding="md" className="border-slate-200 shadow-sm h-full">
              <h2 className="font-bold text-slate-900 mb-2">{item.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </Surface>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeader eyebrow="Service catalog" title="Request by project type" align="left" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((svc) => (
            <article key={svc.slug} className="card overflow-hidden group border-slate-200 shadow-sm hover:border-orange-300 hover:shadow-md transition-all">
              <div className="relative aspect-video bg-slate-100">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-700 transition-colors">
                  {svc.title}
                </h2>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{svc.description}</p>
                <Link
                  href={`/contact?service=${svc.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-orange-700 group-hover:gap-2 transition-all"
                >
                  Request this service <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <CTABand
          title="Not sure which service fits your project?"
          description="Send device count, platform mix, and timeline — we recommend scope on your written quote."
        >
          <Link href="/contact" className="btn-primary px-8">
            Contact Sales
          </Link>
          <Link href="/tools" className="btn-secondary px-8">
            Planning tools
          </Link>
        </CTABand>
      </Section>
    </>
  );
}
