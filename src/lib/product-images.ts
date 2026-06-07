import type { ListFieldValue, ProductDataProfile } from "./product-profile";
import { listFieldToText, textToListField } from "./product-profile";

const LOCAL_IMAGE_PREFIX = "/images/";
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export function isValidLocalImagePath(path: string): boolean {
  const trimmed = path.trim();
  if (!trimmed.startsWith(LOCAL_IMAGE_PREFIX)) return false;
  if (trimmed.includes("..")) return false;
  if (/^https?:\/\//i.test(trimmed)) return false;
  return true;
}

export function isValidImageLastVerifiedAt(value: string): boolean {
  return DATE_RE.test(value);
}

export function resolvePrimaryImageUrl(
  data: ProductDataProfile | null,
  fallback: string,
): string {
  const primary = data?.primaryImageUrl?.trim();
  if (primary && isValidLocalImagePath(primary)) return primary;
  return fallback;
}

export function resolveProductImageAlt(data: ProductDataProfile | null, productName: string): string {
  return data?.imageAlt?.trim() || productName;
}

export function resolveGalleryImages(data: ProductDataProfile | null): string[] {
  const raw = data?.galleryImages;
  if (!raw) return [];
  const items = Array.isArray(raw) ? raw : textToListField(raw) ?? [];
  return items.map((item) => item.trim()).filter((item) => isValidLocalImagePath(item));
}

export function galleryImagesToText(value?: ListFieldValue): string {
  return listFieldToText(value);
}
