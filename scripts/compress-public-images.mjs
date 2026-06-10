/**
 * Compress large PNG/JPG in public/images to WebP for Vercel deployment limits.
 * Run: node scripts/compress-public-images.mjs
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const TARGET_DIRS = [
  "public/images/products/models",
  "public/images/products/specs",
  "public/images/products/motherboard",
  "public/images/hero-import",
  "public/images/factory",
];

const EXT = /\.(png|jpe?g)$/i;
const MIN_BYTES = 200_000;
const MAX_WIDTH = { hero: 2560, default: 1200, thumb: 900 };
const WEBP_QUALITY = { hero: 94, default: 82 };

function kindForPath(p) {
  if (p.includes("hero-import") || p.includes("deploy-")) return "hero";
  if (p.includes("specs") || p.includes("slide-")) return "thumb";
  return "default";
}

async function compressFile(full) {
  const ext = path.extname(full);
  const webp = full.replace(ext, ".webp");
  if (fs.existsSync(webp) && fs.statSync(webp).mtimeMs >= fs.statSync(full).mtimeMs) {
    return { src: full, dest: webp, skipped: true };
  }
  const kind = kindForPath(full);
  const maxWidth = MAX_WIDTH[kind];
  const quality = WEBP_QUALITY[kind] ?? WEBP_QUALITY.default;
  await sharp(full)
    .rotate()
    .resize({ width: maxWidth, height: maxWidth, fit: "inside", withoutEnlargement: true })
    .webp({ quality, effort: kind === "hero" ? 6 : 4, smartSubsample: false })
    .toFile(webp);
  return { src: full, dest: webp, skipped: false };
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full, out);
    else if (EXT.test(name) && st.size >= MIN_BYTES) out.push(full);
  }
  return out;
}

const files = TARGET_DIRS.flatMap((d) => walk(d));
let saved = 0;
const mapping = {};

for (const full of files) {
  const before = fs.statSync(full).size;
  const { dest, skipped } = await compressFile(full);
  const after = fs.statSync(dest).size;
  saved += before - after;
  const pub = "/" + path.relative("public", dest).replace(/\\/g, "/");
  const oldPub = "/" + path.relative("public", full).replace(/\\/g, "/");
  mapping[oldPub] = pub;
  if (!skipped) console.log(`${oldPub} -> ${pub} (${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB)`);
}

// Update catalog TS/JSON paths
function rewritePaths(text) {
  let out = text;
  for (const [from, to] of Object.entries(mapping).sort((a, b) => b[0].length - a[0].length)) {
    out = out.split(from).join(to);
  }
  return out;
}

for (const file of ["src/data/product-model-catalog.ts", "public/images/product-model-catalog.json"]) {
  if (fs.existsSync(file)) {
    fs.writeFileSync(file, rewritePaths(fs.readFileSync(file, "utf8")));
  }
}

const totalAfter = TARGET_DIRS.reduce((sum, d) => {
  if (!fs.existsSync(d)) return sum;
  return sum + walk(d).reduce((s, f) => s + fs.statSync(f.replace(/\.(png|jpe?g)$/i, ".webp")).size, 0);
}, 0);

console.log(`Compressed ${files.length} files, saved ~${Math.round(saved / 1024 / 1024)}MB`);
console.log(`WebP total in target dirs ~${Math.round(totalAfter / 1024 / 1024)}MB`);
