import { PRODUCT_SEEDS } from "@/data/products";
import { getPrimaryModelImage } from "@/data/product-model-catalog";

const FALLBACK = getPrimaryModelImage() ?? "/images/products/models/s21-fe-main-product-box-phone-farm-s21-fe-6-128gb-usb-lan-ot.webp";

/** Prefer seed/catalog WebP paths when DB still has old or broken image URLs. */
export function resolveProductCardImage(slug: string, imageCard: string): string {
  const trimmed = imageCard?.trim() ?? "";
  if (
    trimmed.includes("/products/models/") ||
    trimmed.includes("/products/motherboard/") ||
    trimmed.includes("/factory/deploy-") ||
    trimmed.endsWith(".webp")
  ) {
    return trimmed;
  }
  const seed = PRODUCT_SEEDS.find((p) => p.slug === slug);
  return seed?.imageCard ?? FALLBACK;
}
