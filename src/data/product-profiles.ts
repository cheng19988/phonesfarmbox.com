import type { ImageType, ProductDataProfile } from "@/lib/product-profile";
import { DEPENDS_CONFIG, PENDING_QUOTE } from "@/lib/product-profile";
import {
  getAllModelMainImages,
  getPrimaryModelImage,
  MOTHERBOARD_GALLERY,
} from "./product-model-catalog";

function baseProfile(
  imageType: ImageType,
  overrides: Partial<ProductDataProfile> = {},
): ProductDataProfile {
  return {
    dimensions: PENDING_QUOTE,
    weight: PENDING_QUOTE,
    powerRequirement: PENDING_QUOTE,
    fanCooling: PENDING_QUOTE,
    portLayout: PENDING_QUOTE,
    supportedModels: PENDING_QUOTE,
    compatiblePhones: PENDING_QUOTE,
    packingList: PENDING_QUOTE,
    warrantyTerms: PENDING_QUOTE,
    leadTimeNote: PENDING_QUOTE,
    moqNote: PENDING_QUOTE,
    imageType,
    imageVerificationNote: "Not an official factory photo unless marked verified — ask for packing photo at quote.",
    datasheetStatus: "partial",
    internalAdminNote: "Fill verified values in productData JSON when supplier datasheet arrives.",
    ...overrides,
  };
}

/** Default B2B hardware profile framework per SKU — no fabricated dimensions or weights. */
export const PRODUCT_PROFILE_SEEDS: Record<string, ProductDataProfile> = {
  "phone-farm-box": baseProfile("official_photo", {
    primaryImageUrl: getPrimaryModelImage(),
    galleryImages: getAllModelMainImages(),
    imageVerificationNote: "Product detail photos from supplier asset library — slot count and BOM confirmed at quote.",
    fanCooling: DEPENDS_CONFIG,
    portLayout: "USB hub tree + mains input — port map on wiring diagram at quote",
    compatiblePhones: "Android phone models confirmed before quote",
    packingList: "Chassis, fan tray, internal harness, cables — itemized on proforma",
    moqNote: "1 unit sample",
    internalAdminNote: "Request chassis CAD + fan tray BOM from factory.",
  }),
  "motherboard-box": baseProfile("official_photo", {
    primaryImageUrl: MOTHERBOARD_GALLERY[0],
    galleryImages: MOTHERBOARD_GALLERY,
    imageVerificationNote: "White-background chassis photos from supplier library.",
    fanCooling: DEPENDS_CONFIG,
    compatiblePhones: "Screenless Android board list confirmed before quote",
    packingList: "Chassis, fan tray, node harness — boards optional per quote",
    moqNote: "1 unit",
    internalAdminNote: "Confirm board footprint template before marking dimensions verified.",
  }),
  "android-phone-farm": baseProfile("official_photo", {
    primaryImageUrl: getPrimaryModelImage(),
    galleryImages: getAllModelMainImages().slice(0, 8),
    imageVerificationNote: "Cluster reference photos — device list locked at quote.",
    supportedModels: "Android device list locked at quote",
    packingList: "Cluster BOM — boxes, hubs, cables; phones if quoted",
    moqNote: "1 cluster",
    leadTimeNote: DEPENDS_CONFIG,
    internalAdminNote: "Bundle SKU — attach combined datasheet when available.",
  }),
  "iphone-phone-farm": baseProfile("product_illustration", {
    compatiblePhones: "iPhone models confirmed before quote",
    portLayout: "Lightning / USB-C hub topology per quoted layout",
    packingList: "Cluster hardware + cabling — phones per supply terms",
    moqNote: "1 cluster",
    internalAdminNote: "Confirm hub chipset and cable plan per model mix.",
  }),
  "real-device-phone-farm": baseProfile("assembly_reference", {
    dimensions: DEPENDS_CONFIG,
    weight: DEPENDS_CONFIG,
    supportedModels: "Mixed Android/iPhone possible — segmented by rack",
    packingList: "Multi-carton project manifest on quote",
    moqNote: DEPENDS_CONFIG,
    datasheetStatus: "missing",
    internalAdminNote: "Project SKU — maintain room layout diagram separately.",
  }),
  "empty-box-chassis": baseProfile("product_illustration", {
    fanCooling: "Fan mount points — fan kit spec confirmed before quote",
    portLayout: "Hub mounting area — layout depends on chassis generation",
    compatiblePhones: "DIY build — buyer supplies phones/boards",
    packingList: "Empty chassis, mounting hardware, manual",
    moqNote: "1 unit",
  }),
  "usb-hub": baseProfile("product_illustration", {
    portLayout: "Port count and tier confirmed before quote",
    powerRequirement: DEPENDS_CONFIG,
    packingList: "Hub module, PSU lead if quoted, manual",
    moqNote: "1 unit",
    internalAdminNote: "Store industrial hub datasheet PDF when received.",
  }),
  "power-supply-solution": baseProfile("product_illustration", {
    powerRequirement: DEPENDS_CONFIG,
    portLayout: "Output rail count matched to node load at quote",
    packingList: "PSU module, output leads, manual",
    moqNote: "1 unit",
  }),
  "cooling-solution": baseProfile("product_illustration", {
    fanCooling: DEPENDS_CONFIG,
    dimensions: DEPENDS_CONFIG,
    packingList: "Fan kit, filters if quoted, install manual",
    moqNote: "1 kit",
    internalAdminNote: "Do not publish fan count until chassis pairing is verified.",
  }),
  "network-equipment": baseProfile("product_illustration", {
    portLayout: "Router/switch port map confirmed before quote",
    packingList: "Network module, power adapter, manual",
    moqNote: "1 unit",
  }),
  "custom-cabinet": baseProfile("assembly_reference", {
    dimensions: DEPENDS_CONFIG,
    weight: DEPENDS_CONFIG,
    packingList: "Cabinet crate — phased ship plan on quote",
    moqNote: DEPENDS_CONFIG,
    datasheetStatus: "missing",
    internalAdminNote: "Custom project — engineering drawing required before verified status.",
  }),
  "remote-control-setup": baseProfile("product_illustration", {
    dimensions: "N/A — service SKU",
    weight: "N/A — service SKU",
    powerRequirement: "N/A — service SKU",
    fanCooling: "N/A — service SKU",
    portLayout: "Host PC and device list confirmed before session",
    packingList: "Remote setup documentation deliverable",
    moqNote: "1 session",
    warrantyTerms: "Service scope per invoice",
    datasheetStatus: "partial",
    internalAdminNote: "Service SKU — no physical datasheet; keep SOP checklist instead.",
  }),
};

export function getProductProfileSeed(slug: string): ProductDataProfile {
  return PRODUCT_PROFILE_SEEDS[slug] ?? baseProfile("product_illustration");
}
