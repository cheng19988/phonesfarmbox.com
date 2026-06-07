import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { parseProductDataForm, serializeProductData, type ProductDataFormInput } from "@/lib/product-profile";

type RouteContext = { params: Promise<{ slug: string }> };

export async function PATCH(req: NextRequest, context: RouteContext) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { slug } = await context.params;
  if (!slug?.trim()) return NextResponse.json({ error: "Product slug required" }, { status: 400 });

  let body: ProductDataFormInput;
  try {
    body = (await req.json()) as ProductDataFormInput;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = parseProductDataForm(body);
  if ("error" in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  try {
    const product = await prisma.product.update({
      where: { slug },
      data: { productData: serializeProductData(parsed.data) },
      select: { id: true, slug: true, name: true, productData: true },
    });

    return NextResponse.json({ ok: true, product });
  } catch {
    return NextResponse.json({ error: "Product not found or update failed" }, { status: 404 });
  }
}
