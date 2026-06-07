export type ImageType =
  | "official_photo"
  | "product_illustration"
  | "assembly_reference"
  | "packing_reference";

export type DatasheetStatus = "missing" | "partial" | "verified";

export const IMAGE_TYPES: ImageType[] = [
  "official_photo",
  "product_illustration",
  "assembly_reference",
  "packing_reference",
];

export const DATASHEET_STATUSES: DatasheetStatus[] = ["missing", "partial", "verified"];

export type ListFieldValue = string | string[];

export type ProductDataProfile = {
  dimensions?: string;
  weight?: string;
  powerRequirement?: string;
  fanCooling?: string;
  portLayout?: string;
  supportedModels?: ListFieldValue;
  compatiblePhones?: ListFieldValue;
  packingList?: ListFieldValue;
  warrantyTerms?: string;
  leadTimeNote?: string;
  moqNote?: string;
  primaryImageUrl?: string;
  galleryImages?: ListFieldValue;
  imageAlt?: string;
  imageSourceNote?: string;
  imageLastVerifiedAt?: string;
  imageType: ImageType;
  imageVerificationNote?: string;
  datasheetStatus: DatasheetStatus;
  internalAdminNote?: string;
};

export const MAX_PRODUCT_DATA_FIELD_LEN = 4000;

const TEXT_FIELDS = [
  "dimensions",
  "weight",
  "powerRequirement",
  "fanCooling",
  "portLayout",
  "warrantyTerms",
  "leadTimeNote",
  "moqNote",
  "primaryImageUrl",
  "imageAlt",
  "imageSourceNote",
  "imageLastVerifiedAt",
  "imageVerificationNote",
  "internalAdminNote",
] as const satisfies readonly (keyof ProductDataProfile)[];

const LIST_FIELDS = [
  "supportedModels",
  "compatiblePhones",
  "packingList",
  "galleryImages",
] as const satisfies readonly (keyof ProductDataProfile)[];

export const PENDING_QUOTE = "Confirmed before quote";
export const DEPENDS_CONFIG = "Depends on configuration";

const PENDING_SET = new Set([PENDING_QUOTE, DEPENDS_CONFIG, ""]);

function isValidLocalImagePath(path: string): boolean {
  const trimmed = path.trim();
  if (!trimmed.startsWith("/images/")) return false;
  if (trimmed.includes("..")) return false;
  if (/^https?:\/\//i.test(trimmed)) return false;
  return true;
}

function isValidImageLastVerifiedAt(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function trimOptional(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed || undefined;
}

export function listFieldToText(value?: ListFieldValue): string {
  if (!value) return "";
  if (Array.isArray(value)) return value.join("\n");
  return value;
}

export function textToListField(text: string): string[] | undefined {
  const items = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  return items.length > 0 ? items : undefined;
}

export function listFieldDisplayValue(value?: ListFieldValue): string | undefined {
  if (!value) return undefined;
  if (Array.isArray(value)) {
    if (value.length === 0) return undefined;
    return value.join(", ");
  }
  return value;
}

export function isListFieldMissing(value?: ListFieldValue): boolean {
  return isProfileFieldMissing(listFieldDisplayValue(value));
}

export function parseProductData(raw: string | null | undefined): ProductDataProfile | null {
  if (!raw || raw === "{}") return null;
  try {
    return JSON.parse(raw) as ProductDataProfile;
  } catch {
    return null;
  }
}

export function isProfileFieldMissing(value?: string): boolean {
  if (!value) return true;
  return PENDING_SET.has(value.trim());
}

export type ProfileCompleteness = {
  missingDimensions: boolean;
  missingWeight: boolean;
  missingPower: boolean;
  missingPacking: boolean;
};

export function getProfileCompleteness(data: ProductDataProfile | null): ProfileCompleteness {
  if (!data) {
    return {
      missingDimensions: true,
      missingWeight: true,
      missingPower: true,
      missingPacking: true,
    };
  }
  return {
    missingDimensions: isProfileFieldMissing(data.dimensions),
    missingWeight: isProfileFieldMissing(data.weight),
    missingPower: isProfileFieldMissing(data.powerRequirement),
    missingPacking: isListFieldMissing(data.packingList),
  };
}

export function displayProfileValue(value?: string | ListFieldValue): string {
  const normalized =
    typeof value === "string" || Array.isArray(value) ? listFieldDisplayValue(value) ?? value : value;
  if (typeof normalized !== "string") return PENDING_QUOTE;
  if (!normalized || PENDING_SET.has(normalized.trim())) return PENDING_QUOTE;
  return normalized;
}

export function serializeProductData(data: ProductDataProfile): string {
  return JSON.stringify(data);
}

export type ProductDataFormInput = {
  dimensions?: string;
  weight?: string;
  powerRequirement?: string;
  fanCooling?: string;
  portLayout?: string;
  supportedModels?: string;
  compatiblePhones?: string;
  packingList?: string;
  warrantyTerms?: string;
  leadTimeNote?: string;
  moqNote?: string;
  primaryImageUrl?: string;
  galleryImages?: string;
  imageAlt?: string;
  imageSourceNote?: string;
  imageLastVerifiedAt?: string;
  imageType?: string;
  imageVerificationNote?: string;
  datasheetStatus?: string;
  internalAdminNote?: string;
};

export function parseProductDataForm(
  input: ProductDataFormInput,
): { data: ProductDataProfile } | { error: string } {
  const imageType = input.imageType?.trim();
  const datasheetStatus = input.datasheetStatus?.trim();

  if (!imageType || !IMAGE_TYPES.includes(imageType as ImageType)) {
    return { error: "Invalid imageType" };
  }
  if (!datasheetStatus || !DATASHEET_STATUSES.includes(datasheetStatus as DatasheetStatus)) {
    return { error: "Invalid datasheetStatus" };
  }

  if (imageType === "official_photo") {
    const sourceNote = trimOptional(input.imageSourceNote);
    const verifyNote = trimOptional(input.imageVerificationNote);
    if (!sourceNote && !verifyNote) {
      return { error: "official_photo requires imageSourceNote or imageVerificationNote" };
    }
  }

  const profile: ProductDataProfile = {
    imageType: imageType as ImageType,
    datasheetStatus: datasheetStatus as DatasheetStatus,
  };

  for (const key of TEXT_FIELDS) {
    const value = trimOptional(input[key]);
    if (!value) continue;
    if (value.length > MAX_PRODUCT_DATA_FIELD_LEN) {
      return { error: `${key} exceeds maximum length` };
    }
    if (key === "primaryImageUrl" && !isValidLocalImagePath(value)) {
      return { error: "primaryImageUrl must be a local path under /images/" };
    }
    if (key === "imageLastVerifiedAt" && !isValidImageLastVerifiedAt(value)) {
      return { error: "imageLastVerifiedAt must be YYYY-MM-DD" };
    }
    profile[key] = value;
  }

  for (const key of LIST_FIELDS) {
    const items = textToListField(input[key] ?? "");
    if (!items) continue;
    if (key === "galleryImages") {
      for (const item of items) {
        if (!isValidLocalImagePath(item)) {
          return { error: "galleryImages paths must be local paths under /images/" };
        }
      }
    }
    const joined = items.join(", ");
    if (joined.length > MAX_PRODUCT_DATA_FIELD_LEN) {
      return { error: `${key} exceeds maximum length` };
    }
    profile[key] = items;
  }

  return { data: profile };
}

export function productDataToFormDefaults(data: ProductDataProfile | null): ProductDataFormInput {
  return {
    dimensions: data?.dimensions ?? "",
    weight: data?.weight ?? "",
    powerRequirement: data?.powerRequirement ?? "",
    fanCooling: data?.fanCooling ?? "",
    portLayout: data?.portLayout ?? "",
    supportedModels: listFieldToText(data?.supportedModels),
    compatiblePhones: listFieldToText(data?.compatiblePhones),
    packingList: listFieldToText(data?.packingList),
    warrantyTerms: data?.warrantyTerms ?? "",
    leadTimeNote: data?.leadTimeNote ?? "",
    moqNote: data?.moqNote ?? "",
    primaryImageUrl: data?.primaryImageUrl ?? "",
    galleryImages: listFieldToText(data?.galleryImages),
    imageAlt: data?.imageAlt ?? "",
    imageSourceNote: data?.imageSourceNote ?? "",
    imageLastVerifiedAt: data?.imageLastVerifiedAt ?? "",
    imageType: data?.imageType ?? "product_illustration",
    imageVerificationNote: data?.imageVerificationNote ?? "",
    datasheetStatus: data?.datasheetStatus ?? "partial",
    internalAdminNote: data?.internalAdminNote ?? "",
  };
}

export function imageTypeLabel(type: ImageType): string {
  const labels: Record<ImageType, string> = {
    official_photo: "Official product photo",
    product_illustration: "Product illustration",
    assembly_reference: "Assembly reference",
    packing_reference: "Packing reference",
  };
  return labels[type];
}

export function datasheetStatusLabel(status: DatasheetStatus): string {
  const labels: Record<DatasheetStatus, string> = {
    missing: "Datasheet not yet uploaded",
    partial: "Partial datasheet — confirm remaining fields at quote",
    verified: "Datasheet verified for quoted configuration",
  };
  return labels[status];
}

export const TECHNICAL_DATA_ROWS: { key: keyof ProductDataProfile; label: string }[] = [
  { key: "dimensions", label: "Dimensions" },
  { key: "weight", label: "Weight" },
  { key: "powerRequirement", label: "Power requirement" },
  { key: "fanCooling", label: "Fan / cooling" },
  { key: "portLayout", label: "Port layout" },
  { key: "supportedModels", label: "Supported models" },
  { key: "compatiblePhones", label: "Compatible devices" },
  { key: "packingList", label: "Packing list" },
  { key: "warrantyTerms", label: "Warranty" },
  { key: "leadTimeNote", label: "Lead time" },
  { key: "moqNote", label: "MOQ" },
];
