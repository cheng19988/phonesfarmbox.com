import fs from "fs";
import path from "path";
import type { ImageType, ProductDataProfile } from "../../src/lib/product-profile.js";
import {
  IMAGE_TYPES,
  listFieldToText,
  parseProductData,
  textToListField,
} from "../../src/lib/product-profile.js";

function isValidLocalImagePath(urlPath: string): boolean {
  const trimmed = urlPath.trim();
  if (!trimmed.startsWith("/images/")) return false;
  if (trimmed.includes("..")) return false;
  if (/^https?:\/\//i.test(trimmed)) return false;
  return true;
}

export const ROLE_DIRS: Record<string, string> = {
  primary: "products",
  gallery: "products",
  packing: "packing",
  assembly: "assembly",
  factory: "factory",
  real: "real",
};

export function publicFilePath(urlPath: string, root = process.cwd()): string {
  return path.join(root, "public", urlPath.replace(/^\//, ""));
}

export function fileExists(urlPath: string, root = process.cwd()): boolean {
  return fs.existsSync(publicFilePath(urlPath, root));
}

export function resolveImportImagePath(imageFile: string, role: string): string {
  const trimmed = imageFile.trim();
  if (trimmed.startsWith("/images/")) return trimmed;
  const dir = ROLE_DIRS[role.toLowerCase()] ?? "products";
  return `/images/${dir}/${trimmed.replace(/^\/+/, "")}`;
}

export function collectImagePaths(data: ProductDataProfile | null): { field: string; path: string }[] {
  if (!data) return [];
  const out: { field: string; path: string }[] = [];
  if (data.primaryImageUrl?.trim()) {
    out.push({ field: "primaryImageUrl", path: data.primaryImageUrl.trim() });
  }
  const gallery = data.galleryImages;
  if (gallery) {
    const items = Array.isArray(gallery) ? gallery : textToListField(listFieldToText(gallery)) ?? [];
    items.forEach((p, i) => out.push({ field: `galleryImages[${i}]`, path: p }));
  }
  return out;
}

export function officialPhotoMissingSource(data: ProductDataProfile): boolean {
  if (data.imageType !== "official_photo") return false;
  const source = data.imageSourceNote?.trim();
  const verify = data.imageVerificationNote?.trim();
  return !source && !verify;
}

export type ImportRow = {
  slug: string;
  image_file: string;
  image_role: string;
  image_type: string;
  image_alt: string;
  image_source_note: string;
  image_verification_note: string;
  verified_date: string;
  notes: string;
  line: number;
};

export function parseImportCsv(content: string): ImportRow[] {
  const lines = content.split(/\r?\n/);
  const rows: ImportRow[] = [];
  let header: string[] | null = null;

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i].trim();
    if (!raw || raw.startsWith("#")) continue;
    const cols = raw.split(",").map((c) => c.trim());
    if (!header) {
      header = cols.map((h) => h.toLowerCase());
      continue;
    }
    const columns = header;
    const get = (name: string) => cols[columns.indexOf(name)] ?? "";
    rows.push({
      slug: get("slug"),
      image_file: get("image_file"),
      image_role: get("image_role"),
      image_type: get("image_type"),
      image_alt: get("image_alt"),
      image_source_note: get("image_source_note"),
      image_verification_note: get("image_verification_note"),
      verified_date: get("verified_date"),
      notes: get("notes"),
      line: i + 1,
    });
  }
  return rows;
}

export function validateImportRow(row: ImportRow): string[] {
  const errors: string[] = [];
  if (!row.slug) errors.push(`line ${row.line}: missing slug`);
  if (!row.image_file) errors.push(`line ${row.line}: missing image_file`);
  if (!row.image_role) errors.push(`line ${row.line}: missing image_role`);
  if (row.image_type && !IMAGE_TYPES.includes(row.image_type as ImageType)) {
    errors.push(`line ${row.line}: invalid image_type "${row.image_type}"`);
  }
  if (row.image_file && row.image_role) {
    const resolved = resolveImportImagePath(row.image_file, row.image_role);
    if (!isValidLocalImagePath(resolved)) {
      errors.push(`line ${row.line}: invalid path "${resolved}"`);
    }
  }
  if (row.image_type === "official_photo") {
    if (!row.image_source_note.trim() && !row.image_verification_note.trim()) {
      errors.push(`line ${row.line}: official_photo requires image_source_note or image_verification_note`);
    }
  }
  if (row.verified_date && !/^\d{4}-\d{2}-\d{2}$/.test(row.verified_date)) {
    errors.push(`line ${row.line}: verified_date must be YYYY-MM-DD`);
  }
  return errors;
}

export type SkuImagePatch = {
  slug: string;
  primaryImageUrl?: string;
  galleryImages?: string[];
  imageAlt?: string;
  imageSourceNote?: string;
  imageVerificationNote?: string;
  imageLastVerifiedAt?: string;
  imageType?: ImageType;
  rowCount: number;
};

export function buildPatchesFromRows(rows: ImportRow[]): SkuImagePatch[] {
  const bySlug = new Map<string, ImportRow[]>();
  for (const row of rows) {
    if (!row.slug) continue;
    const list = bySlug.get(row.slug) ?? [];
    list.push(row);
    bySlug.set(row.slug, list);
  }

  const patches: SkuImagePatch[] = [];
  for (const [slug, slugRows] of bySlug) {
    const gallery: string[] = [];
    const patch: SkuImagePatch = { slug, rowCount: slugRows.length };

    for (const row of slugRows) {
      const url = resolveImportImagePath(row.image_file, row.image_role);
      const role = row.image_role.toLowerCase();

      if (role === "primary") {
        patch.primaryImageUrl = url;
        if (row.image_type) patch.imageType = row.image_type as ImageType;
        if (row.image_alt) patch.imageAlt = row.image_alt;
        if (row.image_source_note) patch.imageSourceNote = row.image_source_note;
        if (row.image_verification_note) patch.imageVerificationNote = row.image_verification_note;
        if (row.verified_date) patch.imageLastVerifiedAt = row.verified_date;
      } else if (!gallery.includes(url)) {
        gallery.push(url);
      }

      if (role !== "primary" && row.image_type && !patch.imageType) {
        patch.imageType = row.image_type as ImageType;
      }
    }

    if (gallery.length > 0) patch.galleryImages = gallery;
    patches.push(patch);
  }
  return patches;
}

export function mergeProductData(
  existing: ProductDataProfile | null,
  patch: SkuImagePatch,
): ProductDataProfile {
  const base: ProductDataProfile = existing ?? {
    imageType: "product_illustration",
    datasheetStatus: "partial",
  };

  const mergedGallery = [...(Array.isArray(base.galleryImages) ? base.galleryImages : textToListField(listFieldToText(base.galleryImages)) ?? [])];
  if (patch.galleryImages) {
    for (const url of patch.galleryImages) {
      if (!mergedGallery.includes(url)) mergedGallery.push(url);
    }
  }

  return {
    ...base,
    ...(patch.primaryImageUrl ? { primaryImageUrl: patch.primaryImageUrl } : {}),
    ...(patch.imageAlt ? { imageAlt: patch.imageAlt } : {}),
    ...(patch.imageSourceNote ? { imageSourceNote: patch.imageSourceNote } : {}),
    ...(patch.imageVerificationNote ? { imageVerificationNote: patch.imageVerificationNote } : {}),
    ...(patch.imageLastVerifiedAt ? { imageLastVerifiedAt: patch.imageLastVerifiedAt } : {}),
    ...(patch.imageType ? { imageType: patch.imageType } : {}),
    ...(mergedGallery.length > 0 ? { galleryImages: mergedGallery } : {}),
  };
}

export function loadProductData(raw: string): ProductDataProfile | null {
  return parseProductData(raw);
}
