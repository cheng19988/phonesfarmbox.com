import { readFileSync } from "fs";
import pg from "pg";

const env = readFileSync(".env", "utf8");
const m = env.match(/^DATABASE_URL="([^"]+)"/m);
if (!m) throw new Error("DATABASE_URL not found");
const client = new pg.Client({ connectionString: m[1] });
await client.connect();

const marker = "P2-8 Production Acceptance Test";
const { rows } = await client.query(
  `SELECT id, name, email, country, "productInterest", "deviceQuantity", message, "createdAt"
   FROM "ContactSubmission"
   WHERE name = $1 OR message ILIKE $2
   ORDER BY "createdAt" DESC
   LIMIT 5`,
  [marker, `%${marker}%`]
);

if (rows.length === 0) {
  console.log("NOT_FOUND");
  await client.end();
  process.exit(1);
}

const row = rows[0];
const msg = row.message ?? "";
const hasAppendix = msg.includes("--- RFQ details ---");
const userPart = hasAppendix ? msg.split("--- RFQ details ---")[0].trim() : msg;

const checks = {
  id: row.id,
  name: row.name,
  email: row.email,
  country: row.country,
  deviceQuantity: row.deviceQuantity,
  productInterest: row.productInterest,
  hasRfqAppendix: hasAppendix,
  userMessagePreserved: userPart.includes("remote setup") && userPart.includes(marker),
  connectionMode: msg.includes("Connection mode: Hybrid"),
  voltageRegion: msg.includes("Voltage region: 220V"),
  chassisConfig: msg.includes("Chassis config: Empty chassis only"),
  paymentPreference: msg.includes("Payment preference: USDT"),
  docsRequested:
    msg.includes("Documentation requested:") &&
    /datasheet|packing photo|shipping size/i.test(msg),
  remoteSetupKeyword: /remote setup/i.test(msg),
};

console.log(JSON.stringify(checks, null, 2));

await client.query(`DELETE FROM "ContactSubmission" WHERE id = $1`, [row.id]);
const { rows: after } = await client.query(
  `SELECT id FROM "ContactSubmission" WHERE id = $1`,
  [row.id]
);
console.log("DELETED:", after.length === 0);

await client.end();
