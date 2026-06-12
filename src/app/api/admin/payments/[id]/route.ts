import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { isPaymentStatus, PAYMENT_STATUSES } from "@/lib/payment-status";

type Params = { params: Promise<{ id: string }> };

const ADMIN_SETTABLE: readonly string[] = PAYMENT_STATUSES;

export async function PATCH(req: NextRequest, { params }: Params) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const body = await req.json();
  const paymentStatus = body.paymentStatus !== undefined ? String(body.paymentStatus) : undefined;
  const txHash = body.txHash !== undefined ? String(body.txHash).trim() || null : undefined;
  const receivedAmount =
    body.receivedAmount !== undefined && body.receivedAmount !== ""
      ? Number(body.receivedAmount)
      : undefined;

  if (paymentStatus && !isPaymentStatus(paymentStatus)) {
    return NextResponse.json(
      { error: `Invalid paymentStatus. Allowed: ${ADMIN_SETTABLE.join(", ")}` },
      { status: 400 }
    );
  }

  const payment = await prisma.payment.findUnique({
    where: { id },
    include: { order: true },
  });
  if (!payment) return NextResponse.json({ error: "Payment not found" }, { status: 404 });

  const verificationStatus =
    paymentStatus === "paid" || paymentStatus === "underpaid" || paymentStatus === "overpaid"
      ? "verified"
      : paymentStatus === "manual_review"
        ? "manual_review"
        : paymentStatus === "expired"
          ? "expired"
          : paymentStatus === "pending"
            ? "unverified"
            : undefined;

  const orderStatus =
    paymentStatus === "paid" || paymentStatus === "overpaid"
      ? "Paid"
      : paymentStatus === "expired"
        ? "Expired"
        : paymentStatus === "manual_review" || paymentStatus === "underpaid"
          ? "Waiting for Payment"
          : undefined;

  const updated = await prisma.payment.update({
    where: { id },
    data: {
      ...(paymentStatus ? { paymentStatus } : {}),
      ...(verificationStatus ? { verificationStatus } : {}),
      ...(txHash !== undefined ? { txHash } : {}),
      ...(receivedAmount !== undefined && !Number.isNaN(receivedAmount) ? { receivedAmount } : {}),
      ...(paymentStatus === "paid" || paymentStatus === "overpaid" ? { paidAt: new Date() } : {}),
    },
  });

  if (orderStatus) {
    await prisma.order.update({
      where: { id: payment.orderId },
      data: { status: orderStatus },
    });
  }

  return NextResponse.json(updated);
}
