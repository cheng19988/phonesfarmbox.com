import "dotenv/config";
import { execSync } from "node:child_process";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { PrismaClient } from "../src/generated/prisma/client.js";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.log("seed-if-empty: skip (DATABASE_URL not set)");
  process.exit(0);
}

const pool = new Pool({ connectionString: databaseUrl });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const count = await prisma.product.count();
  if (count > 0) {
    console.log(`seed-if-empty: skip (${count} products already in database)`);
    return;
  }
  console.log("seed-if-empty: database empty — running seed");
  execSync("npx tsx prisma/seed.ts", { stdio: "inherit", env: process.env });
}

main()
  .catch((e) => {
    console.error("seed-if-empty failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
