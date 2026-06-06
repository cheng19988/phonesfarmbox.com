import Link from "next/link";
import { FAQAccordion } from "@/components/commerce";
import { ContactCTA, JsonLd } from "@/components/shared";
import { FAQ_ITEMS, FAQ_CATEGORIES } from "@/data/faq";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Phone Farm FAQ — Hardware, Shipping, Payment & Support",
  description:
    "MOQ, empty boxes, iPhone/Android support, packing, warranty, payment confirmation, and how to request a hardware quote.",
  path: "/faq",
});

function FaqAnswer({ answer, productLink }: { answer: string; productLink?: string }) {
  return (
    <p className="mt-3 text-slate-400 text-sm leading-relaxed">
      {answer}
      {productLink && (
        <>
          {" "}
          <Link href={productLink} className="text-amber-400 hover:underline">
            Learn more →
          </Link>
        </>
      )}
    </p>
  );
}

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ_ITEMS.map(({ question, answer }) => ({ question, answer })))} />
      <div className="section">
        <div className="container-wide max-w-3xl">
          <h1 className="section-title">Frequently Asked Questions</h1>
          <p className="section-subtitle">
            Hardware specs, ordering, packing, and support — for buyers evaluating a phone farm box purchase.
          </p>

          {FAQ_CATEGORIES.map((cat) => {
            const items = FAQ_ITEMS.filter((f) => f.category === cat);
            return (
              <div key={cat} className="mb-12">
                <h2 className="text-xl font-bold text-white mb-4">{cat}</h2>
                <div className="space-y-3">
                  {items.map((item) => (
                    <details key={item.question} className="card p-4 group">
                      <summary className="font-medium text-white cursor-pointer list-none flex justify-between items-center">
                        {item.question}
                        <span className="text-amber-400 group-open:rotate-45 transition-transform text-xl">+</span>
                      </summary>
                      <FaqAnswer answer={item.answer} productLink={item.productLink} />
                    </details>
                  ))}
                </div>
              </div>
            );
          })}

          <p className="text-sm text-slate-500 mb-8">
            Still deciding on configuration?{" "}
            <Link href="/contact" className="text-amber-400 hover:underline">Request a quote</Link>
            {" or browse "}
            <Link href="/products" className="text-amber-400 hover:underline">product catalog</Link>.
          </p>

          <ContactCTA title="Project-specific question?" />
        </div>
      </div>
    </>
  );
}
