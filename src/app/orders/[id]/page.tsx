"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PAYMENT, CONTACT } from "@/lib/config";

type PaymentInfo = {
  id: string;
  expectedAmount: number;
  paymentAddress: string;
  paymentNetwork: string;
  paymentCurrency: string;
  paymentStatus: string;
  verificationStatus: string;
  expiresAt: string;
  txHash: string | null;
};

type OrderData = {
  id: string;
  orderNumber: string;
  status: string;
  totalUsd: number;
  items: { product: { name: string; slug: string }; quantity: number; unitPrice: number }[];
  payment: PaymentInfo | null;
};

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="text-xs font-medium text-orange-700 hover:text-orange-600 underline-offset-2 hover:underline"
    >
      {copied ? "Copied" : label}
    </button>
  );
}

export default function OrderPage() {
  const params = useParams<{ id: string }>();
  const orderId = params.id;
  const [order, setOrder] = useState<OrderData | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    fetch(`/api/orders/${orderId}`)
      .then((r) => {
        if (!r.ok) {
          setNotFound(true);
          return null;
        }
        return r.json();
      })
      .then((data) => data && setOrder(data))
      .catch(() => setNotFound(true));
  }, [orderId]);

  useEffect(() => {
    if (!order?.payment) return;
    const interval = setInterval(async () => {
      const res = await fetch(`/api/payment/verify?paymentId=${order.payment!.id}`);
      const data = await res.json();
      if (data.status === "paid") {
        fetch(`/api/orders/${orderId}`).then((r) => r.json()).then(setOrder);
      }
      const expires = new Date(order.payment!.expiresAt).getTime() - Date.now();
      if (expires <= 0) {
        setTimeLeft("Expired");
      } else {
        const mins = Math.floor(expires / 60000);
        const secs = Math.floor((expires % 60000) / 1000);
        setTimeLeft(`${mins}:${secs.toString().padStart(2, "0")}`);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [order, orderId]);

  if (notFound) {
    return (
      <div className="section">
        <div className="container-wide max-w-lg text-center">
          <h1 className="section-title">Order not found</h1>
          <p className="text-[var(--text-secondary)] mb-6">
            This link may be invalid or the order belongs to another account. For a new purchase, request a quote first — sample USDT checkout is optional.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-primary">Request Quote</Link>
            <Link href="/how-to-order" className="btn-outline">How to order</Link>
          </div>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="section">
        <div className="container-wide max-w-2xl text-[var(--text-muted)]">Loading order…</div>
      </div>
    );
  }

  const payment = order.payment;
  const waPayText = encodeURIComponent(
    `Hi, I paid USDT for order ${order.orderNumber}. Tx hash: [paste here]. Amount: ${payment?.expectedAmount ?? order.totalUsd} USDT`
  );

  return (
    <div className="section">
      <div className="container-wide max-w-2xl">
        <nav className="text-sm text-[var(--text-muted)] mb-6">
          <Link href="/how-to-order" className="hover:text-orange-700">How to order</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--text-secondary)]">Order {order.orderNumber}</span>
        </nav>

        <h1 className="section-title">Order {order.orderNumber}</h1>
        <p className="text-[var(--text-secondary)] mb-8">
          Status:{" "}
          <span className="font-semibold text-slate-900">{order.status}</span>
          {order.status === "Waiting for Payment" && (
            <span className="block text-sm text-[var(--text-muted)] mt-1">
              Sample-order checkout — payment is manually confirmed by sales after you send USDT and tx hash.
            </span>
          )}
        </p>

        <div className="card p-6 mb-6">
          <h2 className="font-bold text-slate-900 mb-4">Line items</h2>
          {order.items.map((item, i) => (
            <div key={i} className="flex justify-between text-sm py-2 border-b border-slate-100 last:border-0">
              <Link href={`/products/${item.product.slug}`} className="text-orange-700 hover:underline">
                {item.product.name}
              </Link>
              <span className="text-slate-700">${item.unitPrice} × {item.quantity}</span>
            </div>
          ))}
          <div className="flex justify-between font-bold text-slate-900 mt-4 pt-4 border-t border-slate-200">
            <span>Total (list price)</span>
            <span>${order.totalUsd.toLocaleString()}</span>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-2">Final amount on proforma may differ after configuration review.</p>
        </div>

        {payment && order.status === "Waiting for Payment" && (
          <div className="card p-6 mb-6 border-orange-200 bg-orange-50/30">
            <h2 className="font-bold text-slate-900 mb-1">Pay by USDT (Tron TRC20)</h2>
            <p className="text-sm text-[var(--text-secondary)] mb-5">Send exact amount within the timer. Then message us with your order number and transaction hash.</p>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-[var(--text-muted)]">Amount</dt>
                <dd className="font-mono font-semibold text-slate-900">{payment.expectedAmount} USDT</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[var(--text-muted)]">Network</dt>
                <dd className="text-slate-900">{payment.paymentNetwork}</dd>
              </div>
              <div>
                <dt className="text-[var(--text-muted)] mb-1">Wallet address</dt>
                <dd className="bg-white border border-slate-200 p-3 rounded-lg font-mono text-xs text-slate-800 break-all">{payment.paymentAddress}</dd>
                <CopyButton text={payment.paymentAddress} label="Copy address" />
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[var(--text-muted)]">Contract (USDT)</dt>
                <dd className="font-mono text-xs text-slate-700">{PAYMENT.contract}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[var(--text-muted)]">Expires in</dt>
                <dd className="font-semibold text-amber-700">{timeLeft}</dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`${CONTACT.whatsappUrl}?text=${waPayText}`} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                Send tx hash on WhatsApp
              </a>
              <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                Telegram
              </a>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-4">
              Automatic on-chain verification is not active — sales confirms manually within business hours.
            </p>
          </div>
        )}

        {order.status === "Paid" && (
          <div className="card p-6 mb-6 border-emerald-200 bg-emerald-50 text-emerald-900">
            <p className="font-semibold">Payment recorded.</p>
            <p className="text-sm mt-1">Sales will confirm shipment details by WhatsApp or email.</p>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          <Link href="/account/orders" className="btn-outline">My orders</Link>
          <Link href="/contact" className="btn-secondary">Contact sales</Link>
        </div>
      </div>
    </div>
  );
}
