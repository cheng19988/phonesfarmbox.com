import { FAQAccordion } from "@/components/commerce";
import { ContactCTA, JsonLd } from "@/components/shared";
import { FAQ_ITEMS, FAQ_CATEGORIES } from "@/data/faq";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Phone Farm FAQ — Hardware, Shipping, Payment & Support",
  description:
    "Answers about phone farm boxes, motherboard boxes, real device vs cloud, customization, MOQ, samples, delivery, USDT payment, and contacting sales.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ_ITEMS)} />
      <div className="section">
        <div className="container-wide max-w-3xl">
          <h1 className="section-title">Frequently Asked Questions</h1>
          <p className="section-subtitle">
            Hardware specs, deployment, ordering, shipping, and support — organized for buyers evaluating a phone farm box purchase.
          </p>

          {FAQ_CATEGORIES.map((cat) => {
            const items = FAQ_ITEMS.filter((f) => f.category === cat);
            return (
              <div key={cat} className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4">{cat}</h2>
                <FAQAccordion items={items} />
              </div>
            );
          })}

          <div className="mt-8">
            <ContactCTA title="Still have a project-specific question?" />
          </div>
        </div>
      </div>
    </>
  );
}
