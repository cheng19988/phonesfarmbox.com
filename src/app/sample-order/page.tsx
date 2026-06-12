import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { CONTACT, PAYMENT } from "@/lib/config";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "USDT Sample Order Checkout",
  description:
    "Optional catalog checkout for MOQ-1 sample orders — pay USDT TRC20, send tx hash to sales, manual confirmation before assembly.",
  path: "/sample-order",
});

export default function SampleOrderPage() {
  return (
    <>
      <PageHero
        eyebrow="Optional checkout"
        title="USDT sample order (catalog SKUs)"
        description="For small repeat orders when configuration is already agreed. Most first-time buyers should use the RFQ form instead."
        theme="light"
      />

      <Section>
        <div className="max-w-3xl space-y-8">
          <Surface padding="md" className="border-amber-200 bg-amber-50/40">
            <p className="text-sm text-slate-800">
              <strong>Not sure about configuration?</strong>{" "}
              <Link href="/contact" className="link-accent font-medium">Send an RFQ</Link> first — we return a written BOM before you pay.
            </p>
          </Surface>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Steps</h2>
            <ol className="space-y-4">
              {[
                "Open a product page and expand «Sample order (USDT)» at the bottom.",
                "Submit order — you receive an order number and payment screen.",
                `Send exactly the shown amount in USDT on ${PAYMENT.network} within 30 minutes.`,
                "Message sales on WhatsApp or Telegram with order number + transaction hash.",
                "Sales confirms manually → assembly and export per your prior quote or catalog SKU.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3 text-sm text-[var(--text-secondary)]">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <Surface padding="md">
            <h2 className="font-bold text-slate-900 mb-2">Account (optional)</h2>
            <p className="text-sm text-[var(--text-secondary)]">
              <Link href="/login" className="link-accent">Log in</Link> to track orders at{" "}
              <Link href="/account/orders" className="link-accent">My orders</Link>. Registration is not required for RFQ inquiries.
            </p>
          </Surface>

          <div className="flex flex-wrap gap-3">
            <Link href="/products" className="btn-primary">Browse catalog</Link>
            <Link href="/how-to-order" className="btn-outline">Full buying guide</Link>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp</a>
          </div>
        </div>
      </Section>
    </>
  );
}
