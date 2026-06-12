import Link from "next/link";
import { redirect } from "next/navigation";
import { AdminContactRow } from "@/components/admin-contact-row";
import { AdminPaymentRow } from "@/components/admin-payment-row";
import { AdminProductRow } from "@/components/admin-product-row";
import { AdminProductDataSection } from "@/components/admin-product-data-section";
import { prisma } from "@/lib/prisma";
import { parseProductData } from "@/lib/product-profile";
import { requireAdmin } from "@/lib/auth";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Admin Dashboard",
  description: "Admin panel",
  path: "/admin",
  noIndex: true,
});

export default async function AdminPage() {
  const admin = await requireAdmin();
  if (!admin) redirect("/login");

  const [users, orders, contacts, products] = await Promise.all([
    prisma.user.count(),
    prisma.order.count(),
    prisma.contactSubmission.count(),
    prisma.product.count(),
  ]);

  const recentOrders = await prisma.order.findMany({
    take: 10,
    orderBy: { createdAt: "desc" },
    include: { user: { select: { email: true } }, payment: true, items: { include: { product: { select: { name: true } } } } },
  });

  const recentPayments = await prisma.payment.findMany({
    take: 15,
    orderBy: { createdAt: "desc" },
    include: {
      order: {
        select: {
          id: true,
          orderNumber: true,
          totalUsd: true,
          status: true,
          user: { select: { email: true } },
        },
      },
    },
  });

  const recentContacts = await prisma.contactSubmission.findMany({
    take: 10,
    orderBy: { createdAt: "desc" },
  });

  const allProducts = await prisma.product.findMany({ orderBy: { name: "asc" } });
  const dataCompleteness = allProducts.map((p) => ({
    slug: p.slug,
    name: p.name,
    data: parseProductData(p.productData),
  }));

  return (
    <div className="section">
      <div className="container-wide">
        <h1 className="section-title">Admin Dashboard</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Users", value: users },
            { label: "Orders", value: orders },
            { label: "Contacts", value: contacts },
            { label: "Products", value: products },
          ].map((s) => (
            <div key={s.label} className="card p-6 text-center">
              <div className="text-3xl font-bold text-orange-700">{s.value}</div>
              <div className="text-slate-600 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-2">USDT payments</h2>
          <p className="text-sm text-slate-600 mb-4">
            Manual confirmation flow — statuses: pending, paid, underpaid, overpaid, expired, manual review.
            Automatic on-chain verification is not active until TronGrid is configured.
          </p>
          <div className="space-y-3">
            {recentPayments.length === 0 ? (
              <p className="text-sm text-slate-500">No USDT payments yet.</p>
            ) : (
              recentPayments.map((p) => <AdminPaymentRow key={p.id} payment={p} />)
            )}
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Orders</h2>
            <div className="space-y-3">
              {recentOrders.map((o) => (
                <div key={o.id} className="card p-4 text-sm">
                  <div className="flex justify-between">
                    <Link href={`/orders/${o.id}`} className="text-orange-700 font-medium hover:underline">
                      {o.orderNumber}
                    </Link>
                    <span className="text-slate-700 font-medium">{o.status}</span>
                  </div>
                  <p className="text-slate-600 mt-1">{o.user.email} · ${o.totalUsd}</p>
                  {o.payment && (
                    <p className="text-slate-500 mt-1">
                      Payment: {o.payment.paymentStatus} · {o.payment.expectedAmount.toFixed(2)} USDT
                      {o.payment.txHash ? ` · tx ${o.payment.txHash.slice(0, 8)}…` : ""}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Contact Submissions</h2>
            <div className="space-y-3">
              {recentContacts.map((c) => (
                <AdminContactRow key={c.id} contact={c} />
              ))}
            </div>
          </section>
        </div>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Product Inventory</h2>
          <div className="overflow-x-auto card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-600 bg-slate-50">
                  <th className="text-left py-3 px-4 font-semibold">Product</th>
                  <th className="text-left py-3 px-4 font-semibold">Price</th>
                  <th className="text-left py-3 px-4 font-semibold">Stock</th>
                  <th className="text-left py-3 px-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {allProducts.map((p) => (
                  <AdminProductRow key={p.id} id={p.id} name={p.name} priceUsd={p.priceUsd} stock={p.stock} />
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-4">Use Prisma Studio or API to update prices and stock: npx prisma studio</p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Product data completeness</h2>
          <p className="text-sm text-slate-600 mb-4">
            Track datasheet, dimensions, weight, power, and packing status per SKU. &ldquo;pending&rdquo; means still
            awaiting verified supplier data — not shown as fixed specs on the storefront.
          </p>
          <AdminProductDataSection rows={dataCompleteness} />
        </section>
      </div>
    </div>
  );
}
