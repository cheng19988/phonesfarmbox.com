import Link from "next/link";
import { redirect } from "next/navigation";
import { LogoutButton } from "@/components/logout-button";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { PAYMENT_STATUS_LABELS, paymentStatusBadgeClass } from "@/lib/payment-status";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "My Orders",
  description: "View your phone farm hardware orders and payment status.",
  path: "/account/orders",
  noIndex: true,
});

export default async function AccountOrdersPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const orders = await prisma.order.findMany({
    where: { userId: session.id },
    include: { items: { include: { product: { select: { name: true } } } }, payment: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="section">
      <div className="container-wide max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <h1 className="section-title mb-0">My orders</h1>
          <LogoutButton />
        </div>
        <p className="text-sm text-[var(--text-secondary)] mb-8">
          USDT sample checkout history. For new projects,{" "}
          <Link href="/contact" className="link-accent">submit an RFQ</Link>.
        </p>
        {orders.length === 0 ? (
          <div className="card p-8 text-center">
            <p className="text-[var(--text-secondary)] mb-4">No orders yet.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-primary">Request Quote</Link>
              <Link href="/products" className="btn-outline">Browse catalog</Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <Link key={order.id} href={`/orders/${order.id}`} className="card p-6 block hover:border-orange-300 transition-colors">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="font-bold text-slate-900">{order.orderNumber}</p>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">
                      {order.items.map((i) => i.product.name).join(", ")}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-slate-900 font-bold">${order.totalUsd.toFixed(2)}</p>
                    <p className="text-sm text-orange-700 font-medium">{order.status}</p>
                    {order.payment && (
                      <span
                        className={`inline-block mt-1 text-[10px] font-semibold px-1.5 py-0.5 rounded ${paymentStatusBadgeClass(order.payment.paymentStatus)}`}
                      >
                        {PAYMENT_STATUS_LABELS[order.payment.paymentStatus as keyof typeof PAYMENT_STATUS_LABELS] ??
                          order.payment.paymentStatus}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
