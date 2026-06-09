/**
 * Import product detail images (model + specs in filename), spec slides, and hero/factory photos.
 * Run: node scripts/import-product-models.mjs
 */
import fs from "fs";
import path from "path";

const DETAIL_DIR = "D:\\产品商品详情图";
const MOTHERBOARD_DIR = "E:\\主板机照片素材";
const PROMO_DIR = "E:\\宣传资料主板机照片";
const SLIDES_DIRS = ["E:\\主板机照片素材\\水印\\演示文稿", "E:\\主板机照片素材"];

const OUT = {
  models: "public/images/products/models",
  specs: "public/images/products/specs",
  factory: "public/images/factory",
  hero: "public/images/hero-import",
  motherboard: "public/images/products/motherboard",
};

const EXT = /\.(jpg|jpeg|png|webp|gif|bmp)$/i;

function ensureDirs() {
  for (const d of Object.values(OUT)) fs.mkdirSync(d, { recursive: true });
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    try {
      const st = fs.statSync(full);
      if (st.isDirectory()) walk(full, out);
      else if (EXT.test(name)) out.push({ full, name, size: st.size });
    } catch {}
  }
  return out;
}

function safeSlug(s) {
  return s.replace(/[^a-z0-9-]/gi, "-").replace(/-+/g, "-").replace(/^-|-$/g, "").toLowerCase();
}

function extractBoxSlug(name) {
  const m =
    name.match(/box-phone-farm-([a-z0-9-]+)/i) ||
    name.match(/boxphone-([a-z0-9-]+)/i) ||
    name.match(/device-([a-z0-9-]+)/i);
  if (!m) return null;
  return m[1].replace(/-en$|-id$/i, "").replace(/-+$/, "");
}

function extractSpecs(name) {
  const ramStorage = name.match(/(\d+)_(\d+)GB/i);
  const connection = name.includes("USB_LAN_OTG") || name.includes("USB_Port_LAN_OTG")
    ? "USB · LAN · OTG"
    : name.includes("USB_LAN") || name.includes("Cong_USB_LAN")
      ? "USB · LAN"
      : name.includes("USB")
        ? "USB"
        : "Confirm at quote";
  const variant = name.includes("Super_Change")
    ? "Super Change ROM"
    : name.includes("_Change_") || name.includes("_change")
      ? "Change ROM"
      : name.includes("Latest_Generation") || name.includes("Generasi_Terbaru")
        ? "Latest generation chassis"
        : undefined;
  const board = name.includes("black_circuit") || name.includes("Black_Circuit") ? "Black circuit board" : undefined;
  return {
    ram: ramStorage ? `${ramStorage[1]}GB` : undefined,
    storage: ramStorage ? `${ramStorage[2]}GB` : undefined,
    connection,
    variant,
    board,
  };
}

const SLUG_DISPLAY = {
  "s21-fe": "Samsung Galaxy S21 FE",
  s20: "Samsung Galaxy S20",
  s10: "Samsung Galaxy S10",
  "s10-change": "Samsung Galaxy S10 (Change)",
  s9: "Samsung Galaxy S9",
  "s8-change": "Samsung Galaxy S8 (Change)",
  "s8-super-change": "Samsung Galaxy S8 (Super Change)",
  s8: "Samsung Galaxy S8",
  "note-20": "Samsung Galaxy Note 20",
  "note-9": "Samsung Galaxy Note 9",
  "note-8": "Samsung Galaxy Note 8",
  "note-8-super-change": "Samsung Galaxy Note 8 (Super Change)",
  "note-10-lite-change": "Samsung Galaxy Note 10 Lite (Change)",
  "oneplus-8-pro": "OnePlus 8 Pro",
  "pixel-4xl-super-change": "Google Pixel 4 XL (Super Change)",
  "nubia-z17": "Nubia Z17",
  a908n: "Samsung A908N",
  "z-flip3": "Samsung Galaxy Z Flip3",
  "z-flip4": "Samsung Galaxy Z Flip4",
  "device-s8": "Samsung Galaxy S8 (device module sold separately)",
};

function displayName(slug) {
  if (SLUG_DISPLAY[slug]) return SLUG_DISPLAY[slug];
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function copyFile(src, destDir, destName) {
  const dest = path.join(destDir, destName);
  fs.copyFileSync(src, dest);
  return `/images/${path.relative("public/images", dest).replace(/\\/g, "/")}`;
}

function importDetailImages(files) {
  const groups = new Map();

  for (const f of files) {
    if (!f.name.startsWith("product_Box_Phone_Farm") && !f.name.startsWith("product_Perangkat")) continue;
    const slug = extractBoxSlug(f.name);
    if (!slug) continue;

    const ext = path.extname(f.name).toLowerCase() || ".png";
    const isMain = /_main_/i.test(f.name) || /_main\./i.test(f.name);
    const isGallery = /gallery/i.test(f.name);
    const role = isMain ? "main" : isGallery ? "gallery" : "other";
    const destName = `${slug}-${role}-${safeSlug(path.basename(f.name, ext)).slice(0, 48)}${ext}`;

    const url = copyFile(f.full, OUT.models, destName);
    if (!groups.has(slug)) {
      const specs = extractSpecs(f.name);
      groups.set(slug, {
        id: slug,
        modelName: displayName(slug),
        ...specs,
        images: { main: undefined, gallery: [] },
      });
    }
    const entry = groups.get(slug);
    if (role === "main" && !entry.images.main) entry.images.main = url;
    else entry.images.gallery.push(url);
  }

  return [...groups.values()].sort((a, b) => a.modelName.localeCompare(b.modelName));
}

function importSlides(files, limit = 20) {
  const slides = files
    .filter((f) => /幻灯片\d+/i.test(f.name))
    .sort((a, b) => {
      const na = parseInt(a.name.match(/(\d+)/)?.[1] || "0", 10);
      const nb = parseInt(b.name.match(/(\d+)/)?.[1] || "0", 10);
      return na - nb;
    })
    .slice(0, limit);

  return slides.map((f, i) => {
    const ext = path.extname(f.name).toLowerCase() || ".png";
    const destName = `slide-${String(i + 1).padStart(2, "0")}${ext}`;
    const url = copyFile(f.full, OUT.specs, destName);
    return { src: url, label: `Specification slide ${i + 1}` };
  });
}

function importMotherboard(files, limit = 8) {
  const whiteBg = files.filter((f) => f.full.includes("白底") || /IMG_05/i.test(f.name));
  const sorted = [...whiteBg].sort((a, b) => b.size - a.size).slice(0, limit);
  return sorted.map((f, i) => {
    const ext = path.extname(f.name).toLowerCase() || ".png";
    const destName = `mb-${String(i + 1).padStart(2, "0")}${ext}`;
    return copyFile(f.full, OUT.motherboard, destName);
  });
}

function importHeroAndFactory(promoFiles, motherboardFiles) {
  const heroes = [];
  const whiteBg = motherboardFiles
    .filter((f) => f.full.includes("白底"))
    .sort((a, b) => b.size - a.size)
    .slice(0, 3);
  for (let i = 0; i < whiteBg.length; i++) {
    const ext = path.extname(whiteBg[i].name).toLowerCase() || ".png";
    heroes.push({
      key: i === 0 ? "home" : `hero-${i + 1}`,
      url: copyFile(whiteBg[i].full, OUT.hero, `hero-clean-${String(i + 1).padStart(2, "0")}${ext}`),
    });
  }

  const roomShots = promoFiles
    .filter((f) => /\.jpg$/i.test(f.name) && f.size > 3_000_000 && f.size < 6_500_000)
    .sort((a, b) => b.size - a.size)
    .slice(0, 6);

  const factory = roomShots.map((f, i) => {
    const ext = path.extname(f.name).toLowerCase() || ".jpg";
    return copyFile(f.full, OUT.factory, `deploy-${String(i + 1).padStart(2, "0")}${ext}`);
  });

  return { heroes, factory };
}

ensureDirs();

const detailFiles = walk(DETAIL_DIR);
const motherboardFiles = walk(MOTHERBOARD_DIR);
const promoFiles = walk(PROMO_DIR);
const slideFiles = [...walk(SLIDES_DIRS[0]), ...walk(SLIDES_DIRS[1])];

const models = importDetailImages(detailFiles);
const specSlides = importSlides(slideFiles);
const motherboardImages = importMotherboard(motherboardFiles);
const { heroes, factory } = importHeroAndFactory(promoFiles, motherboardFiles);

const catalog = {
  importedAt: new Date().toISOString(),
  models,
  specSlides,
  motherboardImages,
  heroes,
  factoryDeploy: factory,
};

fs.writeFileSync("public/images/product-model-catalog.json", JSON.stringify(catalog, null, 2));

const ts = `/** Auto-generated by scripts/import-product-models.mjs — do not edit by hand. */
export type ProductModelEntry = {
  id: string;
  modelName: string;
  ram?: string;
  storage?: string;
  connection: string;
  variant?: string;
  board?: string;
  images: { main?: string; gallery: string[] };
};

export type SpecSlide = { src: string; label: string };

export const PRODUCT_MODEL_CATALOG: ProductModelEntry[] = ${JSON.stringify(models, null, 2)};

export const SPEC_SLIDES: SpecSlide[] = ${JSON.stringify(specSlides, null, 2)};

export const MOTHERBOARD_GALLERY: string[] = ${JSON.stringify(motherboardImages, null, 2)};

export const HERO_IMAGES = ${JSON.stringify(
  Object.fromEntries(heroes.map((h) => [h.key, h.url])),
  null,
  2,
)} as const;

export const FACTORY_DEPLOY_IMAGES: string[] = ${JSON.stringify(factory, null, 2)};

export function getModelsForSku(sku: "phone-farm-box" | "android-phone-farm") {
  return PRODUCT_MODEL_CATALOG;
}

export function getPrimaryModelImage(): string | undefined {
  return PRODUCT_MODEL_CATALOG.find((m) => m.images.main)?.images.main;
}

export function getAllModelMainImages(): string[] {
  return PRODUCT_MODEL_CATALOG.map((m) => m.images.main).filter((x): x is string => Boolean(x));
}
`;

fs.writeFileSync("src/data/product-model-catalog.ts", ts);

console.log("Models:", models.length);
console.log("Spec slides:", specSlides.length);
console.log("Motherboard images:", motherboardImages.length);
console.log("Hero:", heroes[0]?.url);
console.log("Wrote product-model-catalog.json and src/data/product-model-catalog.ts");
