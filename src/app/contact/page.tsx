import Link from "next/link";
import { Suspense, type ReactNode } from "react";
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

const QUICK_LINKS = [
  { href: "/pricing#quote-process", label: "Quote process", desc: "BOM → proforma → payment" },
  { href: "/pricing#delivery", label: "Delivery & packing", desc: "Air/sea, packing photos" },
  { href: "/help/usdt-payment-confirmation-hardware-orders", label: "USDT payment guide", desc: "Manual confirmation flow" },
];

const TRUST_STRIP = [
  { value: "1 day", label: "Typical RFQ reply" },
  { value: "Written", label: "BOM before assembly" },
  { value: "MOQ 1", label: "Sample orders OK" },
  { value: "Global", label: "Air & sea export" },
];

function SidebarCard({
  icon,
  title,
  children,
  accent = false,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <Surface
      padding="md"
      className={`${accent ? "border-orange-200 bg-gradient-to-br from-orange-50/80 to-white shadow-md" : "shadow-sm"}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
            accent ? "bg-orange-600 text-white" : "bg-slate-100 text-orange-700"
          }`}
        >
          {icon}
        </div>
        <h2 className="font-bold text-slate-900">{title}</h2>
      </div>
      {children}
    </Surface>
  );
}

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

      <div className="border-b border-slate-200 bg-white">
        <div className="container-wide py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {TRUST_STRIP.map((item) => (
              <div key={item.label} className="text-center md:text-left">
                <div className="text-xl md:text-2xl font-bold text-orange-700">{item.value}</div>
                <div className="text-xs text-[var(--text-muted)] uppercase tracking-wide mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Section className="!pt-12 md:!pt-16">
        <div className="grid lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px] gap-10 lg:gap-12 items-start">
          <div>
            <Suspense
              fallback={
                <Surface padding="lg">
                  <p className="text-[var(--text-secondary)]">Loading form…</p>
                </Surface>
              }
            >
              <ContactForm />
            </Suspense>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24">
            <SidebarCard
              accent
              title="Direct lines"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }
            >
              <p className="text-sm text-slate-600 mb-4">Mon–Sat, 9:00–18:00 (GMT+8). Urgent inquiries via WhatsApp when online.</p>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center text-sm py-2.5 mb-4"
              >
                WhatsApp {CONTACT.whatsapp}
              </a>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <span className="text-[var(--text-muted)]">Telegram </span>
                  <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="link-accent font-medium">
                    {CONTACT.telegram}
                  </a>
                </li>
                <li>
                  <span className="text-[var(--text-muted)]">WhatsApp </span>
                  <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="link-accent font-medium">
                    {CONTACT.whatsapp}
                  </a>
                </li>
                <li>
                  <span className="text-[var(--text-muted)]">Email </span>
                  <a href={`mailto:${CONTACT.email}`} className="link-accent font-medium break-all">
                    {CONTACT.email}
                  </a>
                </li>
                <li className="text-[var(--text-secondary)]">📍 {SITE.location}</li>
              </ul>
            </SidebarCard>

            <SidebarCard
              title="Include in your RFQ"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              }
            >
              <ul className="space-y-2">
                {INQUIRY_CHECKLIST.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-slate-600">
                    <span className="text-orange-600 shrink-0 mt-0.5 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </SidebarCard>

            <SidebarCard
              title="Example inquiry"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              }
            >
              <blockquote className="text-sm text-slate-600 whitespace-pre-wrap leading-relaxed border-l-4 border-orange-400 pl-4 bg-orange-50/50 py-3 pr-2 rounded-r-lg">
                {SAMPLE_INQUIRY}
              </blockquote>
            </SidebarCard>

            <SidebarCard
              title="Quote & delivery"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            >
              <div className="space-y-2">
                {QUICK_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between gap-2 p-3 rounded-xl border border-slate-200 bg-slate-50/80 hover:border-orange-300 hover:bg-orange-50/50 transition-colors group"
                  >
                    <div>
                      <span className="block text-sm font-semibold text-slate-900 group-hover:text-orange-700">{link.label}</span>
                      <span className="block text-xs text-[var(--text-muted)] mt-0.5">{link.desc}</span>
                    </div>
                    <span className="text-orange-600 shrink-0 group-hover:translate-x-0.5 transition-transform">→</span>
                  </Link>
                ))}
              </div>
            </SidebarCard>
          </aside>
        </div>

        <p className="text-center text-sm text-[var(--text-muted)] mt-14 pt-8 border-t border-slate-200">
          Browse first:{" "}
          <Link href="/products" className="link-accent font-medium">
            product catalog
          </Link>
          {" · "}
          <Link href="/pricing" className="link-accent font-medium">
            pricing tiers
          </Link>
          {" · "}
          <Link href="/tools" className="link-accent font-medium">
            planning tools
          </Link>
          {" · "}
          <Link href="/faq" className="link-accent font-medium">
            FAQ
          </Link>
        </p>
      </Section>
    </>
  );
}
