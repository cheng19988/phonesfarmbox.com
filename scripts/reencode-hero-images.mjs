/**
 * Re-import hero/banner images at NATIVE resolution (no upscale) and high-quality WebP.
 * Upscaling 1024px chat uploads to 1920/2560 causes blur; aggressive WebP q82 adds artifacts.
 *
 * Run: node scripts/reencode-hero-images.mjs
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const ASSETS =
  "C:/Users/cdl30/.cursor/projects/d-phonesfarmbox-com/assets";

const SRC = {
  img1: path.join(
    ASSETS,
    "c__Users_cdl30_AppData_Roaming_Cursor_User_workspaceStorage_7288b39aa0bcdff12e6477087f6c1a92_images_546b692f-eb6f-4fc4-9f98-b26c37d7ddb6-712ee2fa-2970-420a-b072-65e60a0338d3.png",
  ),
  img2: path.join(
    ASSETS,
    "c__Users_cdl30_AppData_Roaming_Cursor_User_workspaceStorage_7288b39aa0bcdff12e6477087f6c1a92_images_dd0dcd8b-81fb-48ff-9c67-046da3a7aa11-a800c5d4-9b28-4c1b-9251-f39e83fc8a1d.png",
  ),
  img3: path.join(
    ASSETS,
    "c__Users_cdl30_AppData_Roaming_Cursor_User_workspaceStorage_7288b39aa0bcdff12e6477087f6c1a92_images_95cd8e04-d67c-4b8d-acf2-8de29a776d48-56956614-e585-435f-9da0-d21b1042ef80.png",
  ),
  img4: path.join(
    ASSETS,
    "c__Users_cdl30_AppData_Roaming_Cursor_User_workspaceStorage_7288b39aa0bcdff12e6477087f6c1a92_images_1caaec79-c5ac-4bd3-8d20-4c56d511f4c1-d3667c43-f62e-4ff2-8f55-3bd74c3e4c3f.png",
  ),
  img5: path.join(
    ASSETS,
    "c__Users_cdl30_AppData_Roaming_Cursor_User_workspaceStorage_7288b39aa0bcdff12e6477087f6c1a92_images_60856b25-cddf-405e-bf68-be9555a60092-3950ef4f-5a4b-4206-b26c-38862d3bce2a.png",
  ),
};

const JOBS = [
  { src: "img5", png: "public/images/hero-import/hero-home-banner.png", webp: "public/images/hero-import/hero-home-banner.webp" },
  { src: "img1", png: "public/images/hero-import/hero-page-01.png", webp: "public/images/hero-import/hero-page-01.webp" },
  { src: "img4", png: "public/images/hero-import/hero-page-02.png", webp: "public/images/hero-import/hero-page-02.webp" },
  { src: "img3", png: "public/images/hero-import/hero-page-03.png", webp: "public/images/hero-import/hero-page-03.webp" },
];

const WEBP_OPTS = { quality: 95, effort: 6, smartSubsample: false };

async function exportNative(srcPath, pngOut, webpOut) {
  if (!fs.existsSync(srcPath)) {
    console.warn("SKIP missing source:", srcPath);
    return;
  }

  const input = sharp(srcPath).rotate();
  const meta = await input.metadata();

  await input.clone().png({ compressionLevel: 6 }).toFile(pngOut);
  await input.clone().webp(WEBP_OPTS).toFile(webpOut);

  const pngKb = Math.round(fs.statSync(pngOut).size / 1024);
  const webpKb = Math.round(fs.statSync(webpOut).size / 1024);
  console.log(
    path.basename(webpOut),
    `${meta.width}x${meta.height} (native, no upscale)`,
    `png ${pngKb}KB`,
    `webp ${webpKb}KB`,
  );
}

for (const job of JOBS) {
  await exportNative(SRC[job.src], job.png, job.webp);
}

console.log("Done — use .png paths with unoptimized Image for sharpest delivery.");
