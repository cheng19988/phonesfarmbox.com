import Link from "next/link";
import { Suspense } from "react";
import { ContactBar } from "@/components/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { CONTACT, SITE } from "@/lib/config";
import { IMPORTED } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { ContactForm } from "./contact-form";

export const metadata = buildMetadata({
  title: "Request a Hardware Quote — Phones Farm Box",
  description:
    "Send RFQ details for phone farm boxes, motherboard racks, and accessories. Written BOM and lead time before payment.",
  path: "/contact",
});

const INQUIRY_CHECKLIST = [
  "Target product / SKU",
  "Destination country & freight (air / sea)",
  "Expected device quantity",
  "Connection mode: USB / OTG / hybrid",
  "Voltage region: 110V / 220V / 220–240V",
  "Empty chassis vs phones on quote",
  "Target phone or board models",
  "Datasheet, packing photo, or shipping dimensions",
  "Payment: USDT / bank / Wise / PayPal",
  "Use case & WhatsApp / Telegram for follow-up",
];

const SAMPLE_INQUIRY = `"We need an Android phone farm for app testing, shipping to Germany.
~40 nodes, phone farm boxes, USB mode, 220V region.
Empty chassis first. Need datasheet and packing dimensions before payment.
Payment: USDT or Wise. WhatsApp: +xx xxx. Timeline: 3 weeks."`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={`${SITE.name} · Quote-based B2B hardware`}
        title="Request a hardware quote"
        description="Share quantity, platform mix, shipping country, and timeline. We return a written BOM, connection mode, and lead time before assembly — no account required."
        image={IMPORTED.homeHero}
        imageAlt="Phone farm hardware production reference"
        theme="light"
      />

      <Section>
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <Suspense fallback={<Surface padding="lg"><p className="text-[var(--text-secondary)]">Loading form…</p></Surface>}>
              <ContactForm />
            </Suspense>
          </div>

          <aside className="space-y-6">
            <Surface padding="md">
              <h2 className="font-bold text-slate-900 mb-3">Include in your RFQ</h2>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                {INQUIRY_CHECKLIST.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[var(--accent)] shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Surface>

            <Surface padding="md">
              <h2 className="font-bold text-slate-900 mb-3">Example inquiry</h2>
              <p className="text-xs text-[var(--text-secondary)] whitespace-pre-wrap leading-relaxed font-mono">{SAMPLE_INQUIRY}</p>
            </Surface>

            <Surface padding="md">
              <h2 className="font-bold text-slate-900 mb-3">Quote &amp; delivery</h2>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Full quote workflow, packing documentation, and post-payment steps are on our pricing page — avoid duplicating process blocks here.
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/pricing#quote-process" className="text-sm link-accent font-medium">
                  Quote process →
                </Link>
                <Link href="/pricing#delivery" className="text-sm link-accent font-medium">
                  Delivery &amp; packing →
                </Link>
                <Link href="/help/usdt-payment-confirmation-hardware-orders" className="text-sm link-accent font-medium">
                  USDT payment guide →
                </Link>
              </div>
            </Surface>

            <Surface padding="md">
              <h2 className="font-bold text-slate-900 mb-3">Direct lines</h2>
              <ContactBar />
              <ul className="mt-4 space-y-2 text-sm text-[var(--text-secondary)]">
                <li>Phone: {CONTACT.phone}</li>
                <li>
                  WhatsApp:{" "}
                  <a href={CONTACT.whatsappUrl} className="link-accent">
                    {CONTACT.whatsapp}
                  </a>
                </li>
                <li>
                  Telegram:{" "}
                  <a href={CONTACT.telegramUrl} className="link-accent">
                    {CONTACT.telegram}
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a href={`mailto:${CONTACT.email}`} className="link-accent">
                    {CONTACT.email}
                  </a>
                </li>
                <li>Location: {SITE.location}</li>
              </ul>
              <p className="text-xs text-[var(--text-muted)] mt-4">Mon–Sat, 9:00–18:00 (GMT+8). Urgent inquiries via WhatsApp when online.</p>
            </Surface>
          </aside>
        </div>

        <p className="text-center text-sm text-[var(--text-muted)] mt-12">
          Browse first:{" "}
          <Link href="/products" className="link-accent">product catalog</Link>
          {" · "}
          <Link href="/pricing" className="link-accent">pricing tiers</Link>
          {" · "}
          <Link href="/faq" className="link-accent">FAQ</Link>
        </p>
      </Section>
    </>
  );
}
