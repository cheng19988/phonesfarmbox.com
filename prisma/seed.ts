import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { PrismaClient } from "../src/generated/prisma/client.js";
import { PRODUCT_SEEDS } from "../src/data/products.js";
import { getProductProfileSeed } from "../src/data/product-profiles.js";
import bcrypt from "bcryptjs";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("DATABASE_URL is required to run seed");
}

const pool = new Pool({ connectionString: databaseUrl });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  for (const seed of PRODUCT_SEEDS) {
    const productData = JSON.stringify(getProductProfileSeed(seed.slug));
    await prisma.product.upsert({
      where: { slug: seed.slug },
      update: {
        name: seed.name,
        category: seed.category,
        shortDesc: seed.shortDesc,
        description: seed.description,
        features: JSON.stringify(seed.features),
        specs: JSON.stringify(seed.specs),
        scenarios: JSON.stringify(seed.scenarios),
        accessories: JSON.stringify(seed.accessories),
        delivery: JSON.stringify(seed.delivery),
        maintenance: JSON.stringify(seed.maintenance),
        faq: JSON.stringify(seed.faq),
        priceUsd: seed.priceUsd,
        stock: seed.stock,
        imageCard: seed.imageCard,
        imageHero: seed.imageHero,
        imageDetail: seed.imageDetail,
        productData,
      },
      create: {
        slug: seed.slug,
        name: seed.name,
        category: seed.category,
        shortDesc: seed.shortDesc,
        description: seed.description,
        features: JSON.stringify(seed.features),
        specs: JSON.stringify(seed.specs),
        scenarios: JSON.stringify(seed.scenarios),
        accessories: JSON.stringify(seed.accessories),
        delivery: JSON.stringify(seed.delivery),
        maintenance: JSON.stringify(seed.maintenance),
        faq: JSON.stringify(seed.faq),
        priceUsd: seed.priceUsd,
        stock: seed.stock,
        imageCard: seed.imageCard,
        imageHero: seed.imageHero,
        imageDetail: seed.imageDetail,
        productData,
      },
    });
  }

  const adminEmail = process.env.ADMIN_EMAIL || "admin@phonesfarmbox.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123456";
  const passwordHash = await bcrypt.hash(adminPassword, 12);

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: process.env.ADMIN_PASSWORD
      ? { role: "admin", passwordHash }
      : { role: "admin" },
    create: {
      email: adminEmail,
      name: "Admin",
      role: "admin",
      passwordHash,
    },
  });

  console.log("Seeded products and admin user (upsert — orders/contacts unchanged)");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
