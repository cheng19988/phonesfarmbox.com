"use client";

import { useState } from "react";
import { PAYMENT_STATUS_LABELS, paymentStatusBadgeClass } from "@/lib/payment-status";

type AdminPayment = {
  id: string;
  expectedAmount: number;
  receivedAmount: number | null;
  paymentAddress: string;
  txHash: string | null;
  paymentStatus: string;
  verificationStatus: string;
  expiresAt: Date;
  order: {
    id: string;
    orderNumber: string;
    totalUsd: number;
    status: string;
    user: { email: string };
  };
};

const STATUS_OPTIONS = [
  "pending",
  "manual_review",
  "paid",
  "underpaid",
  "overpaid",
  "expired",
] as const;

export function AdminPaymentRow({ payment: initial }: { payment: AdminPayment }) {
  const [payment, setPayment] = useState(initial);
  const [status, setStatus] = useState(payment.paymentStatus);
  const [txHash, setTxHash] = useState(payment.txHash ?? "");
  const [received, setReceived] = useState(
    payment.receivedAmount != null ? String(payment.receivedAmount) : ""
  );
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function save() {
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch(`/api/admin/payments/${payment.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentStatus: status,
          txHash,
          receivedAmount: received,
        }),
      });
      if (!res.ok) {
        const err = await res.json();
        setMessage(err.error || "Update failed");
        return;
      }
      const updated = await res.json();
      setPayment({ ...payment, ...updated });
      setMessage("Saved");
    } catch {
      setMessage("Network error");
    } finally {
      setSaving(false);
    }
  }

  const label =
    PAYMENT_STATUS_LABELS[payment.paymentStatus as keyof typeof PAYMENT_STATUS_LABELS] ??
    payment.paymentStatus;

  return (
    <div className="card p-4 text-sm space-y-3">
      <div className="flex flex-wrap justify-between gap-2 items-start">
        <div>
          <a href={`/orders/${payment.order.id}`} className="text-orange-700 font-medium hover:underline">
            {payment.order.orderNumber}
          </a>
          <p className="text-slate-600 mt-0.5">{payment.order.user.email}</p>
        </div>
        <span className={`text-xs font-semibold px-2 py-1 rounded ${paymentStatusBadgeClass(payment.paymentStatus)}`}>
          {label}
        </span>
      </div>

      <dl className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
        <dt className="text-slate-500">Order total</dt>
        <dd className="font-mono">${payment.order.totalUsd.toFixed(2)}</dd>
        <dt className="text-slate-500">USDT expected</dt>
        <dd className="font-mono">{payment.expectedAmount.toFixed(2)}</dd>
        <dt className="text-slate-500">Verification</dt>
        <dd>{payment.verificationStatus}</dd>
        <dt className="text-slate-500">Expires</dt>
        <dd>{new Date(payment.expiresAt).toLocaleString()}</dd>
        <dt className="text-slate-500 col-span-2">TRC20 address</dt>
        <dd className="col-span-2 font-mono text-[10px] break-all">{payment.paymentAddress}</dd>
      </dl>

      <div className="grid sm:grid-cols-3 gap-2">
        <label className="block">
          <span className="text-xs text-slate-500">Status</span>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="input-field text-xs mt-0.5 w-full"
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {PAYMENT_STATUS_LABELS[s]}
              </option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs text-slate-500">Tx hash</span>
          <input
            value={txHash}
            onChange={(e) => setTxHash(e.target.value)}
            className="input-field text-xs mt-0.5 w-full font-mono"
            placeholder="64-char hex"
          />
        </label>
        <label className="block">
          <span className="text-xs text-slate-500">Received USDT</span>
          <input
            value={received}
            onChange={(e) => setReceived(e.target.value)}
            className="input-field text-xs mt-0.5 w-full font-mono"
            placeholder={payment.expectedAmount.toFixed(2)}
          />
        </label>
      </div>

      <div className="flex items-center gap-3">
        <button type="button" onClick={save} disabled={saving} className="btn-primary text-xs py-1.5 px-3">
          {saving ? "Saving…" : "Update payment"}
        </button>
        {message && <span className="text-xs text-slate-600">{message}</span>}
      </div>
    </div>
  );
}
