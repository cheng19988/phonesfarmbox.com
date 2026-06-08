import { buildMetadata } from "@/lib/seo";
import { SITE, CONTACT } from "@/lib/config";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Refund Policy",
  description: `Refund and return policy for ${SITE.name} phone farm box hardware orders.`,
  path: "/refund",
});

export default function RefundPage() {
  return (
    <div className="section">
      <div className="container-wide max-w-3xl prose-content">
        <h1 className="section-title">Refund Policy</h1>
        <p>Last updated: June 2026</p>
        <h2>Hardware Defects</h2>
        <p>
          If your phone farm box arrives with manufacturing defects, contact us within 7 days of delivery with photos and order details. We will offer repair, replacement parts, or refund after inspection — eligibility depends on issue type and terms on your proforma, not automatic full refund in all cases.
        </p>
        <h2>DOA &amp; Shipping Damage</h2>
        <p>
          Report dead-on-arrival or carrier damage within 48 hours with photos of outer carton, inner foam, and product. We coordinate replacement shipment or parts from Guangzhou when the claim is validated. Delayed reports may limit replacement options.
        </p>
        <h2>Return Shipping</h2>
        <p>
          Return shipping responsibility depends on issue type and quote terms. Manufacturing defect cases may include return label or replacement ship at our discretion after inspection. Buyer-initiated returns of custom-configured or deployed hardware may require buyer-paid return freight and restocking terms stated on invoice.
        </p>
        <h2>USDT Payment Refunds</h2>
        <p>
          Refunds for eligible orders are processed in USDT on Tron TRC20 network to the wallet address you provide. Refund processing takes 3–7 business days after approval. Payment was manually confirmed at order time — refunds likewise require sales approval.
        </p>
        <h2>Non-Refundable Cases</h2>
        <p>
          Custom-configured hardware, phone-included builds with agreed model lists, and orders where devices have been modified or deployed for 30+ days are generally not eligible for full refund. Sample evaluation units may be subject to restocking fee. We do not guarantee platform account results or marketing outcomes — hardware suitability is separate from buyer workflow success.
        </p>
        <h2>Spare Parts &amp; Repair</h2>
        <p>
          Fan kits, PSU modules, cables, and replacement chassis parts are available by quote. Match chassis family before ordering spares. Out-of-warranty repair may be quoted case by case.
        </p>
        <h2>Order Cancellation</h2>
        <p>
          Orders can be cancelled before assembly or shipment for refund per invoice terms. Once assembly starts on approved BOM, cancellation may incur costs for completed work. Unpaid USDT checkout orders expire automatically after 30 minutes.
        </p>
        <h2>Contact for Refunds</h2>
        <p>
          Email {CONTACT.email} or WhatsApp {CONTACT.whatsapp} with your order number. See also our{" "}
          <Link href="/terms" className="text-amber-400 hover:underline">
            Terms of Use
          </Link>
          {" "}and{" "}
          <Link href="/help/warranty-after-sales-phone-farm-hardware" className="text-amber-400 hover:underline">
            warranty &amp; after-sales guide
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
