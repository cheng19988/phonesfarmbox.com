"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PAYMENT, CONTACT } from "@/lib/config";
import { PAYMENT_STATUS_LABELS, paymentStatusBadgeClass } from "@/lib/payment-status";

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
  const [txHashInput, setTxHashInput] = useState("");
  const [txSubmitting, setTxSubmitting] = useState(false);
  const [txMessage, setTxMessage] = useState("");

  useEffect(() => {
    fetch(`/api/orders/${orderId}`)
      .then((r) => {
        if (!r.ok) {
          setNotFound(true);
          return null;
        }
        return r.json();
      })
      .then((data) => {
        if (data) {
          setOrder(data);
          if (data.payment?.txHash) setTxHashInput(data.payment.txHash);
        }
      })
      .catch(() => setNotFound(true));
  }, [orderId]);

  useEffect(() => {
    if (!order?.payment) return;
    const interval = setInterval(async () => {
      const res = await fetch(`/api/payment/verify?paymentId=${order.payment!.id}`);
      const data = await res.json();
      if (data.status === "paid" || data.status === "expired" || data.status === "underpaid" || data.status === "overpaid") {
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
  const usdtPayable = payment?.expectedAmount ?? order.totalUsd;
  const amountsMatch =
    payment == null || Math.abs(order.totalUsd - payment.expectedAmount) < 0.001;
  const paymentLabel =
    payment &&
    (PAYMENT_STATUS_LABELS[payment.paymentStatus as keyof typeof PAYMENT_STATUS_LABELS] ??
      payment.paymentStatus);
  const waPayText = encodeURIComponent(
    `Hi, I paid USDT for order ${order.orderNumber}. Tx hash: ${payment?.txHash || "[paste here]"}. Amount: ${usdtPayable.toFixed(2)} USDT`
  );

  async function submitTxHash(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!payment) return;
    setTxSubmitting(true);
    setTxMessage("");
    try {
      const res = await fetch("/api/payment/tx-hash", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentId: payment.id, txHash: txHashInput.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setTxMessage(data.error || "Could not save tx hash");
        return;
      }
      setTxMessage("Tx hash saved — awaiting manual confirmation by sales.");
      fetch(`/api/orders/${orderId}`).then((r) => r.json()).then(setOrder);
    } catch {
      setTxMessage("Network error — try WhatsApp instead.");
    } finally {
      setTxSubmitting(false);
    }
  }

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
          {payment && (
            <span
              className={`ml-2 text-xs font-semibold px-2 py-0.5 rounded ${paymentStatusBadgeClass(payment.paymentStatus)}`}
            >
              {paymentLabel}
            </span>
          )}
          {(order.status === "Waiting for Payment" || payment?.paymentStatus === "manual_review") && (
            <span className="block text-sm text-[var(--text-muted)] mt-2">
              <strong>Manual confirmation</strong> — sales verifies your USDT transfer and tx hash before assembly.
              Automatic on-chain verification is not active.
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
            <span>Order total</span>
            <span>${order.totalUsd.toFixed(2)}</span>
          </div>
          {payment && (
            <div className="flex justify-between text-sm mt-2">
              <span className="text-[var(--text-muted)]">USDT payable (1:1)</span>
              <span className="font-mono font-semibold text-slate-900">{payment.expectedAmount.toFixed(2)} USDT</span>
            </div>
          )}
          {!amountsMatch && (
            <p className="text-xs text-amber-800 mt-2">Amount mismatch — contact sales before sending USDT.</p>
          )}
          <p className="text-xs text-[var(--text-muted)] mt-2">Sample checkout uses 1:1 USD→USDT list price. Proforma quotes may differ after configuration review.</p>
        </div>

        {payment && order.status === "Waiting for Payment" && payment.paymentStatus !== "expired" && (
          <div className="card p-6 mb-6 border-orange-200 bg-orange-50/30">
            <h2 className="font-bold text-slate-900 mb-1">Pay by USDT (Tron TRC20)</h2>
            <p className="text-sm text-[var(--text-secondary)] mb-5">
              Send exactly <strong>{payment.expectedAmount.toFixed(2)} USDT</strong> within the timer.
              Order <strong>{order.orderNumber}</strong>. Then submit your tx hash below or message sales.
            </p>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-[var(--text-muted)]">USDT amount</dt>
                <dd className="font-mono font-semibold text-slate-900">{payment.expectedAmount.toFixed(2)} USDT</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[var(--text-muted)]">Order number</dt>
                <dd className="font-mono font-semibold text-slate-900">{order.orderNumber}</dd>
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
            <form onSubmit={submitTxHash} className="mt-6 space-y-3 border-t border-orange-200/60 pt-5">
              <label className="block text-sm">
                <span className="text-[var(--text-muted)]">Transaction hash (after transfer)</span>
                <input
                  type="text"
                  value={txHashInput}
                  onChange={(e) => setTxHashInput(e.target.value)}
                  placeholder="64-character hex tx hash"
                  className="input-field mt-1 font-mono text-xs w-full"
                  disabled={payment.paymentStatus === "manual_review" || !!payment.txHash}
                />
              </label>
              {payment.txHash ? (
                <p className="text-xs text-violet-800">
                  Tx hash on file: <span className="font-mono break-all">{payment.txHash}</span> — manual confirmation pending.
                </p>
              ) : (
                <button
                  type="submit"
                  disabled={txSubmitting || !txHashInput.trim()}
                  className="btn-outline text-sm disabled:opacity-40"
                >
                  {txSubmitting ? "Saving…" : "Submit tx hash"}
                </button>
              )}
              {txMessage && <p className="text-xs text-slate-600">{txMessage}</p>}
            </form>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`${CONTACT.whatsappUrl}?text=${waPayText}`} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                Send tx hash on WhatsApp
              </a>
              <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                Telegram
              </a>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-4">
              <strong>Manual confirmation</strong> — automatic on-chain verification is not active. Sales confirms within business hours.
            </p>
          </div>
        )}

        {payment?.paymentStatus === "manual_review" && order.status === "Waiting for Payment" && (
          <div className="card p-6 mb-6 border-violet-200 bg-violet-50/40 text-violet-950">
            <p className="font-semibold">Manual confirmation in progress</p>
            <p className="text-sm mt-1">
              Your tx hash is recorded. Sales will verify the transfer on TRC20 and update this order.
            </p>
          </div>
        )}

        {order.status === "Expired" || payment?.paymentStatus === "expired" ? (
          <div className="card p-6 mb-6 border-slate-300 bg-slate-50 text-slate-800">
            <p className="font-semibold">Payment window expired</p>
            <p className="text-sm mt-1">Contact sales to reopen or place a new sample order.</p>
          </div>
        ) : null}

        {(order.status === "Paid" || payment?.paymentStatus === "paid" || payment?.paymentStatus === "overpaid") && (
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
