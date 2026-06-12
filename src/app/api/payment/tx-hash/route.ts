import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

const TX_HASH_PATTERN = /^[0-9a-fA-F]{64}$/;

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const paymentId = String(body.paymentId || "");
  const txHash = String(body.txHash || "").trim();

  if (!paymentId || !txHash) {
    return NextResponse.json({ error: "paymentId and txHash required" }, { status: 400 });
  }

  if (!TX_HASH_PATTERN.test(txHash)) {
    return NextResponse.json({ error: "Invalid Tron transaction hash (64 hex characters)" }, { status: 400 });
  }

  const payment = await prisma.payment.findUnique({
    where: { id: paymentId },
    include: { order: true },
  });

  if (!payment || payment.userId !== session.id) {
    return NextResponse.json({ error: "Payment not found" }, { status: 404 });
  }

  if (payment.paymentStatus === "expired" || new Date() > payment.expiresAt) {
    return NextResponse.json({ error: "Payment window expired" }, { status: 410 });
  }

  if (payment.paymentStatus === "paid") {
    return NextResponse.json({ error: "Payment already confirmed" }, { status: 409 });
  }

  const updated = await prisma.payment.update({
    where: { id: paymentId },
    data: {
      txHash,
      paymentStatus: "manual_review",
      verificationStatus: "manual_review",
    },
  });

  return NextResponse.json({
    ok: true,
    payment: {
      paymentStatus: updated.paymentStatus,
      verificationStatus: updated.verificationStatus,
      txHash: updated.txHash,
    },
  });
}
