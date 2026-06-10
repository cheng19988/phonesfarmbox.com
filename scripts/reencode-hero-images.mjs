/**
 * Import hero/banner PNGs from local originals (full resolution, no upscale).
 * Keeps the same image-to-slot mapping — only replaces compressed chat uploads.
 *
 * Run: node scripts/reencode-hero-images.mjs
 * Override source folder: LOCAL_HERO_DIR="C:/path/to/folder" node scripts/reencode-hero-images.mjs
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const LOCAL_DIR =
  process.env.LOCAL_HERO_DIR ?? "C:/Users/cdl30/Desktop/新建文件夹";

const WEBP_OPTS = { quality: 95, effort: 6, smartSubsample: false };
const MAX_WIDTH = 2560;

/** Same slot mapping as site config — do not swap images. */
const JOBS = [
  {
    uuid: "60856b25",
    label: "home-banner (homepage)",
    png: "public/images/hero-import/hero-home-banner.png",
    webp: "public/images/hero-import/hero-home-banner.webp",
  },
  {
    uuid: "546b692f",
    label: "page-01 (Products/About/Contact)",
    png: "public/images/hero-import/hero-page-01.png",
    webp: "public/images/hero-import/hero-page-01.webp",
  },
  {
    uuid: "1caaec79",
    label: "page-02 (spare banner)",
    png: "public/images/hero-import/hero-page-02.png",
    webp: "public/images/hero-import/hero-page-02.webp",
  },
  {
    uuid: "95cd8e04",
    label: "page-03 (spare banner)",
    png: "public/images/hero-import/hero-page-03.png",
    webp: "public/images/hero-import/hero-page-03.webp",
  },
  {
    uuid: "dd0dcd8b",
    label: "deploy-01 (About factory gallery)",
    png: "public/images/factory/deploy-01.png",
    webp: "public/images/factory/deploy-01.webp",
  },
  {
    uuid: "1caaec79",
    label: "deploy-02",
    png: "public/images/factory/deploy-02.png",
    webp: "public/images/factory/deploy-02.webp",
  },
  {
    uuid: "546b692f",
    label: "deploy-03",
    png: "public/images/factory/deploy-03.png",
    webp: "public/images/factory/deploy-03.webp",
  },
  {
    uuid: "95cd8e04",
    label: "deploy-04",
    png: "public/images/factory/deploy-04.png",
    webp: "public/images/factory/deploy-04.webp",
  },
];

function findSource(uuid) {
  if (!fs.existsSync(LOCAL_DIR)) {
    throw new Error(`Local folder not found: ${LOCAL_DIR}`);
  }
  const match = fs.readdirSync(LOCAL_DIR).find((f) => f.startsWith(uuid) && /\.png$/i.test(f));
  if (!match) throw new Error(`Missing source for ${uuid} in ${LOCAL_DIR}`);
  return path.join(LOCAL_DIR, match);
}

async function importOne(job) {
  const srcPath = findSource(job.uuid);
  const input = sharp(srcPath).rotate();
  const meta = await input.metadata();

  let pipeline = input.clone();
  if (meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({
      width: MAX_WIDTH,
      fit: "inside",
      withoutEnlargement: true,
      kernel: sharp.kernel.lanczos3,
    });
  }

  await pipeline.clone().png({ compressionLevel: 6 }).toFile(job.png);
  await pipeline.clone().webp(WEBP_OPTS).toFile(job.webp);

  const outMeta = await sharp(job.png).metadata();
  const pngKb = Math.round(fs.statSync(job.png).size / 1024);
  const webpKb = Math.round(fs.statSync(job.webp).size / 1024);
  console.log(
    job.label,
    `${meta.width}x${meta.height} -> ${outMeta.width}x${outMeta.height}`,
    `png ${pngKb}KB webp ${webpKb}KB`,
  );
}

console.log("Importing from:", LOCAL_DIR);
for (const job of JOBS) {
  await importOne(job);
}
console.log("Done — heroes served as PNG (unoptimized, no upscale).");
