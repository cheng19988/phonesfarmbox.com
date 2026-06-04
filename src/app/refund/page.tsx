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
          If your phone farm box arrives with manufacturing defects, contact us within 7 days of delivery with photos and order details. We will offer repair, replacement, or refund after inspection.
        </p>
        <h2>USDT Payment Refunds</h2>
        <p>
          Refunds for eligible orders are processed in USDT on Tron TRC20 network to the wallet address you provide. Refund processing takes 3–7 business days after approval.
        </p>
        <h2>Non-Refundable Cases</h2>
        <p>
          Custom-configured hardware, pre-installed device setups, and orders where devices have been modified or deployed for 30+ days are generally not eligible for full refund. Sample evaluation units may be subject to restocking fee.
        </p>
        <h2>Shipping Damage</h2>
        <p>
          Report shipping damage within 48 hours with photos of packaging and product. We will coordinate replacement shipment from our Guangzhou factory.
        </p>
        <h2>Order Cancellation</h2>
        <p>
          Orders can be cancelled before shipment for full refund. Once shipped, standard return policy applies. Unpaid orders expire automatically after 30 minutes (USDT payment window).
        </p>
        <h2>Contact for Refunds</h2>
        <p>
          Email {CONTACT.email} or WhatsApp {CONTACT.whatsapp} with your order number. See also our <Link href="/terms" className="text-amber-400 hover:underline">Terms of Use</Link>.
        </p>
      </div>
    </div>
  );
}
