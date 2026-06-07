/**
 * Batch image import from CSV — dry-run by default (no DB writes).
 *
 * Usage:
 *   npm run images:import                              # dry-run
 *   npm run images:import -- --csv path/to/file.csv    # custom CSV
 *   npm run images:import -- --apply                     # write productData (requires DATABASE_URL)
 */
import "dotenv/config";
import fs from "fs";
import path from "path";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { PrismaClient } from "../src/generated/prisma/client.js";
import { serializeProductData } from "../src/lib/product-profile.js";
import {
  buildPatchesFromRows,
  fileExists,
  loadProductData,
  mergeProductData,
  parseImportCsv,
  validateImportRow,
} from "./lib/product-image-import.js";

const args = process.argv.slice(2);
const apply = args.includes("--apply");
const csvArgIdx = args.indexOf("--csv");
const csvPath =
  csvArgIdx >= 0 && args[csvArgIdx + 1]
    ? args[csvArgIdx + 1]
    : path.join(process.cwd(), "docs", "product-image-import-template.csv");

if (!fs.existsSync(csvPath)) {
  console.error(`CSV not found: ${csvPath}`);
  process.exit(1);
}

const content = fs.readFileSync(csvPath, "utf8");
const rows = parseImportCsv(content);

if (rows.length === 0) {
  console.log(`No data rows in ${csvPath}. Add rows when real image files are ready.`);
  process.exit(0);
}

const rowErrors = rows.flatMap((row) => validateImportRow(row));
if (rowErrors.length > 0) {
  console.error("CSV validation failed:");
  for (const err of rowErrors) console.error(`  ${err}`);
  process.exit(1);
}

const patches = buildPatchesFromRows(rows);

console.log(apply ? "MODE: apply (will update productData)\n" : "MODE: dry-run (no database writes)\n");
console.log(`CSV: ${csvPath}`);
console.log(`Rows: ${rows.length} → ${patches.length} SKU patch(es)\n`);

for (const patch of patches) {
  console.log(`SKU: ${patch.slug} (${patch.rowCount} row(s))`);
  if (patch.primaryImageUrl) console.log(`  primaryImageUrl: ${patch.primaryImageUrl}`);
  if (patch.galleryImages?.length) {
    console.log(`  galleryImages:`);
    for (const g of patch.galleryImages) console.log(`    - ${g}`);
  }
  if (patch.imageType) console.log(`  imageType: ${patch.imageType}`);
  if (patch.imageAlt) console.log(`  imageAlt: ${patch.imageAlt}`);
  if (patch.imageSourceNote) console.log(`  imageSourceNote: ${patch.imageSourceNote}`);
  if (patch.imageLastVerifiedAt) console.log(`  imageLastVerifiedAt: ${patch.imageLastVerifiedAt}`);

  const pathsToCheck = [
    ...(patch.primaryImageUrl ? [patch.primaryImageUrl] : []),
    ...(patch.galleryImages ?? []),
  ];
  for (const url of pathsToCheck) {
    if (!fileExists(url)) {
      console.log(`  WARNING: file missing on disk: ${url}`);
    }
  }
  console.log("");
}

if (!apply) {
  console.log("Dry-run complete. Re-run with --apply to write productData.");
  process.exit(0);
}

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error("DATABASE_URL required for --apply");
  process.exit(1);
}

const pool = new Pool({ connectionString: databaseUrl });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function applyPatches() {
  for (const patch of patches) {
    const product = await prisma.product.findUnique({ where: { slug: patch.slug } });
    if (!product) {
      console.error(`Skip ${patch.slug}: product not found`);
      continue;
    }

    const existing = loadProductData(product.productData);
    const merged = mergeProductData(existing, patch);

    if (merged.imageType === "official_photo") {
      const hasSource = merged.imageSourceNote?.trim() || merged.imageVerificationNote?.trim();
      if (!hasSource) {
        console.error(`Skip ${patch.slug}: official_photo would lack source note`);
        continue;
      }
    }

    await prisma.product.update({
      where: { slug: patch.slug },
      data: { productData: serializeProductData(merged) },
    });
    console.log(`Updated productData: ${patch.slug}`);
  }
}

applyPatches()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
