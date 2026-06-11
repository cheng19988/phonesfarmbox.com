import Link from "next/link";
import { FAQAccordion } from "@/components/commerce";
import { ContactCTA, JsonLd } from "@/components/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { ALTERNATIVES_PAGE } from "@/data/alternatives-page";
import { IMAGES } from "@/lib/images";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Phone Farm Box vs Cloud Phone vs Emulator",
  description: ALTERNATIVES_PAGE.subtitle,
  path: "/alternatives",
});

export default function AlternativesPage() {
  const page = ALTERNATIVES_PAGE;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Alternatives", path: "/alternatives" },
        ])}
      />
      <JsonLd data={faqJsonLd(page.faq.map((f) => ({ question: f.q, answer: f.a })))} />

      <PageHero
        eyebrow={page.category}
        title={page.title}
        description={page.subtitle}
        image={IMAGES.serviceScene}
        imageAlt="Phone farm hardware comparison"
        theme="light"
      />

      <Section>
        <p className="text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed mb-12">{page.intro}</p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left p-4 font-semibold text-slate-900">Factor</th>
                <th className="text-left p-4 font-semibold text-slate-900">Phone farm box</th>
                <th className="text-left p-4 font-semibold text-slate-900">Cloud phone</th>
                <th className="text-left p-4 font-semibold text-slate-900">Emulator</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {[
                ["Device type", "Physical phones / boards in chassis", "Virtual ARM on remote servers", "Software on PC"],
                ["Cost model", "One-time cap-ex + power", "Monthly per-device subscription", "Free/low software cost"],
                ["Account isolation", "Hardware per device slot", "Virtual environment per instance", "Weak — shared PC fingerprint"],
                ["Platform trust", "Real radios, sensors, USB", "Provider-managed ARM profile", "Often detected by apps"],
                ["Scaling", "Stackable chassis + cabinets", "Add cloud seats instantly", "PC RAM/CPU limits"],
                ["Best for", "Long-term multi-account ops", "Short pilots & sandboxes", "Casual app testing"],
                ["Phones Farm Box", "✓ Supplier — Guangzhou since 2017", "Not our product", "Not our product"],
              ].map(([factor, box, cloud, emu]) => (
                <tr key={factor} className="bg-white">
                  <td className="p-4 font-medium text-slate-900">{factor}</td>
                  <td className="p-4 text-[var(--text-secondary)]">{box}</td>
                  <td className="p-4 text-[var(--text-secondary)]">{cloud}</td>
                  <td className="p-4 text-[var(--text-secondary)]">{emu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-10 mb-12 max-w-3xl">
          {page.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-bold text-slate-900 mb-3">{s.heading}</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <SectionHeader title="Why choose hardware from us" />
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {page.benefits.map((b) => (
            <Surface key={b.title} className="p-5">
              <h3 className="font-semibold text-slate-900 mb-2">{b.title}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{b.desc}</p>
            </Surface>
          ))}
        </div>

        <SectionHeader title="FAQ" />
        <div className="max-w-3xl mb-10">
          <FAQAccordion items={page.faq.map((f) => ({ question: f.q, answer: f.a }))} />
        </div>

        <div className="flex flex-wrap gap-4">
          <Link href="/tools/box-vs-cloud-comparison" className="btn-outline">
            Hardware vs cloud planning tool
          </Link>
          <Link href="/ai" className="btn-outline">
            Entity facts for AI assistants
          </Link>
          <Link href="/products" className="btn-primary">
            Browse hardware catalog
          </Link>
        </div>
      </Section>

      <Section variant="muted">
        <ContactCTA />
      </Section>
    </>
  );
}
