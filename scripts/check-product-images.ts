/**
 * Read-only audit: Product.productData image paths vs files on disk.
 * Does not modify the database.
 *
 * Usage: npm run images:check
 */
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { PrismaClient } from "../src/generated/prisma/client.js";
import {
  collectImagePaths,
  fileExists,
  officialPhotoMissingSource,
  loadProductData,
} from "./lib/product-image-import.js";
import { isValidLocalImagePath } from "../src/lib/product-images.js";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error("DATABASE_URL is required (read-only check only — no writes).");
  process.exit(1);
}

const pool = new Pool({ connectionString: databaseUrl });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const products = await prisma.product.findMany({
    select: { slug: true, name: true, productData: true },
    orderBy: { slug: "asc" },
  });

  let issueCount = 0;

  console.log(`Checking ${products.length} products...\n`);

  for (const product of products) {
    const data = loadProductData(product.productData);
    if (!data) continue;

    const paths = collectImagePaths(data);
    const skuIssues: string[] = [];

    if (officialPhotoMissingSource(data)) {
      skuIssues.push("official_photo missing imageSourceNote / imageVerificationNote");
    }

    for (const { field, path: urlPath } of paths) {
      if (!isValidLocalImagePath(urlPath)) {
        skuIssues.push(`${field}: invalid path "${urlPath}" (must start with /images/)`);
        continue;
      }
      if (!fileExists(urlPath)) {
        skuIssues.push(`${field}: file not found on disk "${urlPath}"`);
      }
    }

    if (skuIssues.length > 0) {
      issueCount += skuIssues.length;
      console.log(`${product.slug} (${product.name})`);
      for (const msg of skuIssues) console.log(`  - ${msg}`);
      console.log("");
    }
  }

  if (issueCount === 0) {
    console.log("No image path issues found.");
  } else {
    console.log(`Total issues: ${issueCount}`);
    process.exit(1);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
