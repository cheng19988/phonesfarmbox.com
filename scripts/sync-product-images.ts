/**
 * Sync product image URLs and productData galleries after asset import.
 * Run on build so production DB picks up new images without full re-seed.
 */
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { PrismaClient } from "../src/generated/prisma/client.js";
import { PRODUCT_SEEDS } from "../src/data/products.js";
import { getProductProfileSeed } from "../src/data/product-profiles.js";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.log("sync-product-images: skip (DATABASE_URL not set)");
  process.exit(0);
}

const pool = new Pool({ connectionString: databaseUrl });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  let updated = 0;
  for (const seed of PRODUCT_SEEDS) {
    const existing = await prisma.product.findUnique({ where: { slug: seed.slug } });
    if (!existing) continue;

    const productData = JSON.stringify(getProductProfileSeed(seed.slug));
    await prisma.product.update({
      where: { slug: seed.slug },
      data: {
        imageCard: seed.imageCard,
        imageHero: seed.imageHero,
        imageDetail: seed.imageDetail,
        productData,
      },
    });
    updated++;
  }
  console.log(`sync-product-images: updated ${updated} products`);
}

main()
  .catch((e) => {
    console.error("sync-product-images failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
