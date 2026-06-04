import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { buildMetadata } from "@/lib/seo";
import { ContactCTA } from "@/components/shared";
import { CONTACT } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Phone Farm Box Pricing — Hardware & Accessories",
  description:
    "Factory-direct phone farm box pricing from Guangzhou. Phone farm boxes, motherboard boxes, USB hubs, power, cooling, and deployment services. Sample orders from 1 unit.",
  path: "/pricing",
});

export default async function PricingPage() {
  const products = await prisma.product.findMany({
    where: { published: true },
    orderBy: { priceUsd: "asc" },
  });

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="section">
      <div className="container-wide max-w-5xl">
        <h1 className="section-title">Phone Farm Box Pricing</h1>
        <p className="section-subtitle">
          Factory-direct hardware pricing from Guangzhou — one-time purchase, no cloud subscription. Unlike cloud phone SaaS billing, phone farm boxes are physical hardware you own outright.
        </p>

        {/* vs Cloud comparison banner */}
        <div className="card p-6 mb-12 border-amber-800/40 bg-amber-950/20">
          <h2 className="text-lg font-bold text-white mb-2">Real Device Hardware vs Cloud Phone Subscription</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Cloud phone services charge monthly per virtual device. Phones Farm Box sells physical phone farm hardware — you pay once, own the equipment, and scale by adding boxes. Bulk pricing available from 5+ units. Sample orders from 1 unit.
          </p>
        </div>

        {categories.map((cat) => {
          const items = products.filter((p) => p.category === cat);
          return (
            <div key={cat} className="mb-10">
              <h2 className="text-xl font-bold text-white mb-4">{cat}</h2>
              <div className="space-y-3">
                {items.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="card p-4 flex flex-wrap items-center justify-between gap-4 hover:border-amber-800 transition-colors group"
                  >
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors">{p.name}</h3>
                      <p className="text-sm text-slate-400 line-clamp-1">{p.shortDesc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-2xl font-bold text-amber-400">${p.priceUsd.toFixed(0)}</div>
                      <div className="text-xs text-slate-500">
                        {p.stock > 0 ? `${p.stock} in stock` : "Out of stock"}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { title: "Sample Order", desc: "MOQ 1 unit — evaluate hardware before bulk purchase", price: "From $265" },
            { title: "Bulk Pricing", desc: "5+ units — contact sales for volume discount", price: "Custom quote" },
            { title: "Enterprise Rack", desc: "42U custom cabinet, 100+ devices, dedicated PM", price: "From $2,650" },
          ].map((tier) => (
            <div key={tier.title} className="card p-6 text-center">
              <h3 className="font-bold text-white mb-2">{tier.title}</h3>
              <div className="text-2xl font-bold text-amber-400 mb-3">{tier.price}</div>
              <p className="text-sm text-slate-400">{tier.desc}</p>
            </div>
          ))}
        </div>

        <div className="card p-6 mb-12">
          <h2 className="text-lg font-bold text-white mb-3">Payment Methods</h2>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>✓ Online orders: USDT on Tron TRC20 (min 10 USDT, 30-min payment window)</li>
            <li>✓ Bulk orders: Bank transfer (T/T), Wise, PayPal on request</li>
            <li>✓ All prices in USD — shipping quoted separately</li>
          </ul>
        </div>

        <ContactCTA title="Get Custom Quote for Your Phone Farm Deployment" />
        <p className="text-center text-sm text-slate-500 mt-6">
          WhatsApp {CONTACT.whatsapp} · Telegram {CONTACT.telegram} · {CONTACT.email}
        </p>
      </div>
    </div>
  );
}
