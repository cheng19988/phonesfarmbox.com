import fs from "fs";
import path from "path";

const SEED_DB_PATH = path.join(process.cwd(), "prisma", "data.db");
const VERCEL_RUNTIME_DB = "/tmp/phonesfarmbox.db";

/** Default SQLite file used locally and as the bundled seed on Vercel. */
export const DEFAULT_DATABASE_URL = "file:./prisma/data.db";

export function resolveDatabaseUrl(): string {
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL;
  }

  if (process.env.VERCEL) {
    ensureVercelRuntimeDatabase();
    return `file:${VERCEL_RUNTIME_DB}`;
  }

  return DEFAULT_DATABASE_URL;
}

function ensureVercelRuntimeDatabase() {
  if (fs.existsSync(VERCEL_RUNTIME_DB)) return;
  if (!fs.existsSync(SEED_DB_PATH)) {
    throw new Error(
      "Missing prisma/data.db in deployment bundle. Ensure the seeded database is committed and included in output file tracing.",
    );
  }
  fs.copyFileSync(SEED_DB_PATH, VERCEL_RUNTIME_DB);
}
