import Link from "next/link";
import { FAQAccordion } from "@/components/commerce";
import { ContactCTA, JsonLd } from "@/components/shared";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { FAQ_ITEMS, FAQ_CATEGORIES } from "@/data/faq";
import { IMAGES } from "@/lib/images";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Phone Farm FAQ — Hardware, Shipping, Payment & Support",
  description:
    "MOQ, empty boxes, iPhone/Android support, packing, warranty, payment confirmation, and how to request a hardware quote.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ_ITEMS.map(({ question, answer }) => ({ question, answer })))} />

      <PageHero
        eyebrow="Support & buying guide"
        title="Frequently asked questions"
        description="Hardware specs, ordering, packing, payment confirmation, and support — for buyers evaluating a phone farm box purchase."
        image={IMAGES.phoneFarmBox.hero}
        imageAlt="Phone farm box hardware reference"
      />

      <Section>
        <div className="max-w-3xl mx-auto">
          {FAQ_CATEGORIES.map((cat) => {
            const items = FAQ_ITEMS.filter((f) => f.category === cat);
            return (
              <div key={cat} className="mb-12">
                <h2 className="text-xl font-bold text-slate-900 mb-4">{cat}</h2>
                <FAQAccordion
                    items={items.map((item) => ({
                      question: item.question,
                      answer: (
                        <>
                          {item.answer}
                          {item.productLink && (
                            <>
                              {" "}
                              <Link href={item.productLink} className="link-accent">
                                Learn more →
                              </Link>
                            </>
                          )}
                        </>
                      ),
                    }))}
                />
              </div>
            );
          })}

          <p className="text-sm text-[var(--text-muted)] mb-6">
            <Link href="/buyer-specs" className="link-accent font-medium">
              Buyer specs — dimensions, power, lead time, warranty &amp; 12 procurement questions →
            </Link>
          </p>

          <p className="text-sm text-[var(--text-muted)] mb-10">
            Still deciding on configuration?{" "}
            <Link href="/contact" className="link-accent">Request a quote</Link>
            {" or browse "}
            <Link href="/products" className="link-accent">product catalog</Link>.
          </p>

          <ContactCTA title="Project-specific question?" />
        </div>
      </Section>
    </>
  );
}
