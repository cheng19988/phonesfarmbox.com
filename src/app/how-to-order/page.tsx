import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { CONTACT } from "@/lib/config";
import { IMAGES } from "@/lib/images";
import { QUOTE_PROCESS_STEPS, WRITTEN_QUOTE_INCLUDES } from "@/data/quote-process";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "How to Order — Quote-First B2B Process",
  description:
    "Step-by-step: RFQ inquiry, written BOM quote, payment, assembly, QC, and export from Guangzhou. Optional USDT sample checkout explained.",
  path: "/how-to-order",
});

export default function HowToOrderPage() {
  return (
    <>
      <PageHero
        eyebrow="B2B buying guide"
        title="How to order phone farm hardware"
        description="We are a quote-first supplier — not a shopping-cart store. Most buyers start with an RFQ; optional USDT sample checkout exists for small catalog orders."
        image={IMAGES.serviceScene}
        imageAlt="Phone farm hardware export process"
        theme="light"
      />

      <Section>
        <SectionHeader title="Standard path (recommended)" description="Used for 90%+ of export orders — samples and rack projects." />
        <ol className="space-y-4 max-w-3xl mb-12">
          {QUOTE_PROCESS_STEPS.map((s) => (
            <li key={s.step} className="flex gap-4 items-start">
              <span className="shrink-0 w-9 h-9 rounded-full bg-orange-100 border border-orange-200 text-orange-800 flex items-center justify-center font-bold text-sm">
                {s.step}
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">{s.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-0.5">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <Surface padding="md" className="mb-12 max-w-3xl border-l-4 border-l-orange-500">
          <h3 className="font-bold text-slate-900 mb-3">Included in your written quote</h3>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm text-[var(--text-secondary)]">
            {WRITTEN_QUOTE_INCLUDES.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-emerald-600 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </Surface>

        <SectionHeader title="Optional: USDT sample checkout" description="For MOQ-1 catalog SKUs when you already know the configuration." />
        <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-4xl">
          <Surface padding="md">
            <h3 className="font-semibold text-slate-900 mb-2">When to use</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Repeat buyers or simple accessory orders (hub, cooling kit, empty chassis) where list price matches your need. Create an account optional — login tracks order status.
            </p>
          </Surface>
          <Surface padding="md">
            <h3 className="font-semibold text-slate-900 mb-2">How it works</h3>
            <ol className="text-sm text-[var(--text-secondary)] space-y-1 list-decimal list-inside">
              <li>Product page → Sample order (USDT)</li>
              <li>Pay TRC20 within 30 minutes</li>
              <li>WhatsApp tx hash + order number</li>
              <li>Sales confirms manually → assembly ships</li>
            </ol>
          </Surface>
        </div>
        <Link href="/sample-order" className="btn-outline mb-16 inline-flex">
          USDT sample checkout details →
        </Link>

        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn-primary">Send RFQ</Link>
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp</a>
          <Link href="/pricing" className="btn-outline">Pricing & payment options</Link>
        </div>
      </Section>
    </>
  );
}
