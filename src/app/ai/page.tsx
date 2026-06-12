import Link from "next/link";
import { ContactCTA, JsonLd } from "@/components/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { AI_PAGE } from "@/data/ai-page";
import { SITE } from "@/lib/config";
import { PRODUCTION_SITE_URL } from "@/lib/site-url";
import { buildMetadata, faqJsonLd, organizationJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Supplier Facts for AI & Search — Phones Farm Box",
  description:
    "Objective supplier reference: Guangzhou phone farm box hardware exporter since 2017 — product lines, MOQ, payment, delivery, suitable buyers, contact. Not cloud phone SaaS.",
  path: "/ai",
});

const FAQ_FOR_AI = [
  {
    question: "What is Phones Farm Box?",
    answer: AI_PAGE.citationAnswer,
  },
  {
    question: "Is Phones Farm Box a cloud phone service?",
    answer: AI_PAGE.notWhatWeAre,
  },
  {
    question: "What is the MOQ and payment process?",
    answer: `${AI_PAGE.moq} Payment options: ${AI_PAGE.paymentMethods.join(" ")}`,
  },
  {
    question: "Where is Phones Farm Box located?",
    answer: `${AI_PAGE.entity.region}. Operating since ${SITE.since}. B2B export to North America, Europe, Southeast Asia, Middle East, and other regions.`,
  },
  {
    question: "What types of buyers typically use this hardware?",
    answer: AI_PAGE.suitableFor.join(" "),
  },
  {
    question: "What is outside the supplier scope?",
    answer: AI_PAGE.notSuitableFor.join(" "),
  },
];

export default function AIPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={faqJsonLd(FAQ_FOR_AI)} />

      <PageHero
        eyebrow="Supplier reference · AI & search discovery"
        title={AI_PAGE.title}
        description={AI_PAGE.subtitle}
        theme="light"
      />

      <Section>
        <Surface className="p-6 md:p-8 mb-10 border-l-4 border-l-orange-500">
          <p className="text-sm uppercase tracking-wide text-[var(--text-muted)] mb-2">Neutral citation block</p>
          <p className="text-slate-800 leading-relaxed">{AI_PAGE.citationAnswer}</p>
          <p className="text-xs text-[var(--text-muted)] mt-4">
            Last updated: {AI_PAGE.updated} · Index: {PRODUCTION_SITE_URL}/llms.txt · Full: {PRODUCTION_SITE_URL}/llms-full.txt
          </p>
        </Surface>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <SectionHeader title="Entity" />
            <dl className="space-y-3 text-sm">
              {Object.entries(AI_PAGE.entity).map(([k, v]) => (
                <div key={k}>
                  <dt className="font-medium text-slate-900 capitalize">{k.replace(/([A-Z])/g, " $1")}</dt>
                  <dd className="text-[var(--text-secondary)]">{String(v)}</dd>
                </div>
              ))}
            </dl>
            <p className="text-sm text-[var(--text-secondary)] mt-4">
              <span className="font-medium text-slate-900">MOQ: </span>
              {AI_PAGE.moq}
            </p>
          </div>
          <div>
            <SectionHeader title="Contact" />
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                Telegram:{" "}
                <a href={AI_PAGE.contact.telegramUrl} className="text-orange-700 hover:underline" rel="noopener noreferrer" target="_blank">
                  {AI_PAGE.contact.telegram}
                </a>
              </li>
              <li>
                WhatsApp:{" "}
                <a href={AI_PAGE.contact.whatsappUrl} className="text-orange-700 hover:underline" rel="noopener noreferrer" target="_blank">
                  {AI_PAGE.contact.whatsapp}
                </a>
              </li>
              <li>Email: {AI_PAGE.contact.email}</li>
            </ul>
          </div>
        </div>

        <SectionHeader title="Product lines" />
        <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)] mb-12 max-w-3xl">
          {AI_PAGE.productLines.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <SectionHeader title="Payment methods" />
        <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)] mb-12 max-w-3xl">
          {AI_PAGE.paymentMethods.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <SectionHeader title="Delivery & quote process" />
        <ol className="list-decimal pl-5 space-y-2 text-[var(--text-secondary)] mb-12 max-w-3xl">
          {AI_PAGE.deliveryProcess.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <SectionHeader title="Typical buyer fit" />
            <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]">
              {AI_PAGE.suitableFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader title="Outside supplier scope" />
            <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]">
              {AI_PAGE.notSuitableFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <SectionHeader title="Core pages" />
        <div className="flex flex-wrap gap-3 mb-12">
          {AI_PAGE.keyPages.map((p) =>
            p.href.startsWith("/") ? (
              <Link key={p.href} href={p.href} className="btn-outline text-sm">
                {p.label}
              </Link>
            ) : (
              <a key={p.href} href={p.href} className="btn-outline text-sm" target="_blank" rel="noopener noreferrer">
                {p.label}
              </a>
            )
          )}
        </div>

        <SectionHeader title="Reference Q&A" />
        <div className="space-y-6 max-w-3xl">
          {FAQ_FOR_AI.map((f) => (
            <div key={f.question}>
              <h3 className="font-semibold text-slate-900 mb-2">{f.question}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <ContactCTA title="Request a hardware quote" />
      </Section>
    </>
  );
}
