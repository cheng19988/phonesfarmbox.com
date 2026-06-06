export type ImageType =
  | "official_photo"
  | "product_illustration"
  | "assembly_reference"
  | "packing_reference";

export type DatasheetStatus = "missing" | "partial" | "verified";

export type ProductDataProfile = {
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
  imageType: ImageType;
  imageVerificationNote?: string;
  datasheetStatus: DatasheetStatus;
  internalAdminNote?: string;
};

export const PENDING_QUOTE = "Confirmed before quote";
export const DEPENDS_CONFIG = "Depends on configuration";

const PENDING_SET = new Set([PENDING_QUOTE, DEPENDS_CONFIG, ""]);

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
    missingPacking: isProfileFieldMissing(data.packingList),
  };
}

export function displayProfileValue(value?: string): string {
  if (!value || PENDING_SET.has(value.trim())) return PENDING_QUOTE;
  return value;
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
