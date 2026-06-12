/** Payment lifecycle statuses stored in Payment.paymentStatus */
export const PAYMENT_STATUSES = [
  "pending",
  "paid",
  "underpaid",
  "overpaid",
  "expired",
  "manual_review",
] as const;

export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];

/** Verification channel stored in Payment.verificationStatus */
export const VERIFICATION_STATUSES = [
  "unverified",
  "manual_review",
  "verified",
  "expired",
] as const;

export type VerificationStatus = (typeof VERIFICATION_STATUSES)[number];

export const PAYMENT_STATUS_LABELS: Record<PaymentStatus, string> = {
  pending: "Pending",
  paid: "Paid",
  underpaid: "Underpaid",
  overpaid: "Overpaid",
  expired: "Expired",
  manual_review: "Manual review",
};

export const VERIFICATION_STATUS_LABELS: Record<VerificationStatus, string> = {
  unverified: "Unverified",
  manual_review: "Manual review",
  verified: "Verified",
  expired: "Expired",
};

export function paymentStatusBadgeClass(status: string): string {
  switch (status) {
    case "paid":
      return "bg-emerald-100 text-emerald-800";
    case "underpaid":
      return "bg-amber-100 text-amber-900";
    case "overpaid":
      return "bg-sky-100 text-sky-900";
    case "expired":
      return "bg-slate-200 text-slate-700";
    case "manual_review":
      return "bg-violet-100 text-violet-900";
    default:
      return "bg-orange-100 text-orange-800";
  }
}

export function isPaymentStatus(value: string): value is PaymentStatus {
  return (PAYMENT_STATUSES as readonly string[]).includes(value);
}
