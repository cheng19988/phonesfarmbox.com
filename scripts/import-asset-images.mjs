import fs from "fs";
import path from "path";

const SOURCES = [
  "E:\\宣传资料主板机照片",
  "E:\\主板机照片素材",
  "E:\\主板机照片素材\\水印\\演示文稿",
  "D:\\产品商品详情图",
];

const OUT = {
  factory: "public/images/factory",
  hero: "public/images/hero-import",
  products: "public/images/products/import",
};

const EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".bmp", ".gif", ".JPG", ".JPEG", ".PNG", ".WEBP"]);

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    try {
      const st = fs.statSync(full);
      if (st.isDirectory()) walk(full, out);
      else if (EXT.has(path.extname(name))) out.push({ full, size: st.size, name });
    } catch {}
  }
  return out;
}

function ensureDirs() {
  for (const d of Object.values(OUT)) fs.mkdirSync(d, { recursive: true });
}

function copyBest(files, destDir, prefix, limit) {
  const sorted = [...files].sort((a, b) => b.size - a.size);
  const picked = [];
  for (const f of sorted) {
    if (picked.length >= limit) break;
    const ext = path.extname(f.name).toLowerCase() || ".jpg";
    const destName = `${prefix}-${String(picked.length + 1).padStart(2, "0")}${ext}`;
    const dest = path.join(destDir, destName);
    fs.copyFileSync(f.full, dest);
    picked.push({ src: f.full, dest: `/images/${path.relative("public/images", dest).replace(/\\/g, "/")}`, size: f.size });
  }
  return picked;
}

ensureDirs();
const all = [];
for (const src of SOURCES) {
  const found = walk(src);
  console.log(src, "files:", found.length);
  all.push(...found);
}

console.log("Total images found:", all.length);

const factory = copyBest(all, OUT.factory, "factory", 12);
const hero = copyBest(all, OUT.hero, "hero", 5);
const products = copyBest(all.filter((_, i) => i % 3 === 0), OUT.products, "product", 15);

const manifest = { importedAt: new Date().toISOString(), factory, hero, products };
fs.writeFileSync("public/images/import-manifest.json", JSON.stringify(manifest, null, 2));
console.log("Manifest written. factory:", factory.length, "hero:", hero.length, "products:", products.length);
