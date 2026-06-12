import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SITE, CONTACT } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: `Terms of use for ${SITE.name} website, product purchases, and USDT payment policies.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="section">
      <div className="container-wide max-w-3xl prose-content">
        <h1 className="section-title">Terms of Use</h1>
        <p>Last updated: June 2026</p>
        <h2>Products &amp; Orders</h2>
        <p>
          All products are real-device phone farm hardware supplied by Phones Farm Box from Guangzhou, China. List prices are USD starting points; final configuration, BOM, and lead time are confirmed on written quote before assembly. Orders are subject to stock and production slot availability.
        </p>
        <h2>Payment</h2>
        <p>
          Online sample orders may accept USDT on Tron TRC20 network. Minimum payment is 10 USDT. Orders expire after 30 minutes if payment is not received. USDT payments are manually confirmed by sales after you send order number and transaction hash — we do not rely on automatic on-chain verification alone for order release.
        </p>
        <h2>Shipping &amp; Delivery</h2>
        <p>
          International shipping is available worldwide. Delivery times vary by method (express 3–7 days after dispatch, sea freight 15–30 days). Import duties and taxes are the buyer&apos;s responsibility. Packing list is confirmed before shipment; packing photos and shipping dimensions available on request when noted on your quote.
        </p>
        <h2>Warranty</h2>
        <p>
          Standard chassis and PSU hardware carries a 12-month warranty against manufacturing defects unless otherwise stated on your proforma. Misuse, unauthorized modifications, normal wear, and buyer-caused damage are excluded. Phones and OEM network equipment follow supplier pass-through terms where applicable.
        </p>
        <h2>DOA &amp; Shipping Damage</h2>
        <p>
          Report dead-on-arrival or shipping damage within 48 hours of delivery with photos of packaging and product. We coordinate inspection and offer repair, replacement parts, or case-by-case resolution — not unconditional refund for all scenarios.
        </p>
        <h2>Remote Setup Support</h2>
        <p>
          Optional remote setup covers host PC connectivity, USB or OTG wiring verification, device authorization checks, and batch-control workflow handoff for your quoted hardware. It does not include operating buyer accounts, platform manipulation, traffic guarantees, or marketing or social media account performance guarantees.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these terms:{" "}
          <a
            href={CONTACT.emailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline"
          >
            {CONTACT.email}
          </a>
          . See also our{" "}
          <Link href="/refund" className="text-amber-400 hover:underline">
            Refund Policy
          </Link>
          {" "}and{" "}
          <Link href="/help/warranty-after-sales-phone-farm-hardware" className="text-amber-400 hover:underline">
            warranty guide
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
