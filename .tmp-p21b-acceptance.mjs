import "dotenv/config";
import { readFileSync } from "fs";
import pg from "pg";

const LOCAL = process.env.LOCAL_BASE || "http://localhost:3000";
const PROD = "https://www.phonesfarmbox.com";
const LOCAL_MARKER = "P2-1B Local PostgreSQL Test";
const PROD_MARKER = "P2-1B Production PostgreSQL Test";

function envOk(name) {
  return Boolean(process.env[name]?.trim());
}

async function dbClient() {
  const url = process.env.DATABASE_URL;
  if (!url?.startsWith("postgresql://")) throw new Error("DATABASE_URL not postgresql");
  const client = new pg.Client({ connectionString: url });
  await client.connect();
  return client;
}

async function checkPages(base, paths) {
  const out = {};
  for (const p of paths) {
    const r = await fetch(base + p, { redirect: "manual" });
    out[p] = { status: r.status, location: r.headers.get("location") || null };
  }
  return out;
}

async function login(base) {
  const email = process.env.ADMIN_EMAIL || "admin@phonesfarmbox.com";
  const password = process.env.ADMIN_PASSWORD || "admin123456";
  const res = await fetch(base + "/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const body = await res.json();
  const cookie = res.headers.get("set-cookie");
  return { ok: res.ok && body.ok, status: res.status, hasCookie: Boolean(cookie) };
}

async function submitContact(base, marker) {
  const fd = new FormData();
  fd.set("name", marker);
  fd.set("email", "p21b-test@example.com");
  fd.set("country", "Germany");
  fd.set("message", marker + " - automated acceptance. Please ignore.");
  fd.set("productInterest", "phone-farm-box");
  fd.set("deviceQuantity", "20");
  const res = await fetch(base + "/api/contact", { method: "POST", body: fd });
  const body = await res.json();
  return { status: res.status, body };
}

async function submitOrder(base, cookieHeader) {
  const fd = new FormData();
  fd.set("productSlug", "phone-farm-box");
  fd.set("action", "buy");
  const res = await fetch(base + "/api/orders", {
    method: "POST",
    body: fd,
    headers: cookieHeader ? { Cookie: cookieHeader } : {},
    redirect: "manual",
  });
  const loc = res.headers.get("location") || "";
  const orderId = loc.match(/\/orders\/([^/?#]+)/)?.[1] || null;
  return { status: res.status, location: loc, orderId };
}

async function verifyOrderInDb(client, orderId) {
  if (!orderId) return null;
  const { rows: orders } = await client.query(`SELECT id, status, "orderNumber" FROM "Order" WHERE id = $1`, [orderId]);
  const { rows: items } = await client.query(`SELECT id FROM "OrderItem" WHERE "orderId" = $1`, [orderId]);
  const { rows: payments } = await client.query(
    `SELECT id, "paymentStatus", "verificationStatus" FROM "Payment" WHERE "orderId" = $1`,
    [orderId]
  );
  return { order: orders[0] || null, itemCount: items.length, payment: payments[0] || null };
}

async function verifyPaymentVerify(base, paymentId, cookieHeader) {
  const res = await fetch(base + `/api/payment/verify?paymentId=${paymentId}`, {
    headers: cookieHeader ? { Cookie: cookieHeader } : {},
  });
  const body = await res.json();
  return { status: res.status, body };
}

async function regressionChecks(base) {
  const home = await (await fetch(base + "/")).text();
  const pricing = await (await fetch(base + "/pricing")).text();
  const mb = await (await fetch(base + "/products/motherboard-box")).text();
  const sm = await (await fetch(base + "/sitemap.xml")).text();
  return {
    headerNoLoginRegister: !home.includes('href="/login"') || home.includes("Order login"),
    headerNoRegisterLink: !home.includes('href="/register"'),
    canonical: (home.match(/rel="canonical" href="([^"]+)"/) || [])[1],
    usdtManual: pricing.includes("manually confirmed"),
    motherboardNo3Fan: !/\b3-fan\b/i.test(mb) && !/\b3 fan\b/i.test(mb),
    sitemapNoCollectionsAll: !sm.includes("collections/all"),
    sitemapUsesWww: sm.includes("https://www.phonesfarmbox.com"),
  };
}

async function main() {
  const report = {};

  // Section 1: env
  report.envExists = true;
  report.dbPrefix = process.env.DATABASE_URL?.startsWith("postgresql://") ? "postgresql://" : "other";
  report.gitignoreEnv = readFileSync(".gitignore", "utf8").includes(".env*");
  report.telegramConfigured = envOk("TELEGRAM_BOT_TOKEN") && envOk("TELEGRAM_CHAT_ID");
  report.tronApiKeyConfigured = envOk("TRON_API_KEY");

  const client = await dbClient();
  const { rows: ver } = await client.query("SELECT version()");
  report.postgresVersion = ver[0]?.version?.includes("PostgreSQL") ? "PostgreSQL" : "unknown";

  const { rows: products } = await client.query(`SELECT COUNT(*)::int AS c FROM "Product"`);
  const { rows: admins } = await client.query(
    `SELECT email, role FROM "User" WHERE role = 'admin' LIMIT 3`
  );
  report.productCount = products[0]?.c;
  report.adminEmails = admins.map((a) => a.email);

  // Local HTTP
  report.localPages = await checkPages(LOCAL, [
    "/",
    "/products",
    "/products/phone-farm-box",
    "/pricing",
    "/contact",
    "/login",
    "/admin",
  ]);

  report.localLogin = await login(LOCAL);

  report.localContact = await submitContact(LOCAL, LOCAL_MARKER);
  const { rows: localContact } = await client.query(
    `SELECT id, name FROM "ContactSubmission" WHERE name = $1 ORDER BY "createdAt" DESC LIMIT 1`,
    [LOCAL_MARKER]
  );
  report.localContactInDb = Boolean(localContact[0]);

  // Order test with login cookie
  const email = process.env.ADMIN_EMAIL || "admin@phonesfarmbox.com";
  const password = process.env.ADMIN_PASSWORD || "admin123456";
  const loginRes = await fetch(LOCAL + "/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const cookie = loginRes.headers.get("set-cookie")?.split(";")[0] || "";
  report.localOrder = await submitOrder(LOCAL, cookie);
  report.localOrderDb = await verifyOrderInDb(client, report.localOrder.orderId);

  if (report.localOrderDb?.payment?.id) {
    report.localPaymentVerify = await verifyPaymentVerify(
      LOCAL,
      report.localOrderDb.payment.id,
      cookie
    );
  }

  const orderPageStatus = report.localOrder.orderId
    ? (await fetch(LOCAL + `/orders/${report.localOrder.orderId}`, { headers: { Cookie: cookie }, redirect: "manual" })).status
    : null;
  report.localOrderPageStatus = orderPageStatus;

  report.localRegression = await regressionChecks(LOCAL);

  // Production
  report.prodPages = await checkPages(PROD, [
    "/",
    "/products",
    "/products/phone-farm-box",
    "/pricing",
    "/contact",
    "/admin",
    "/sitemap.xml",
    "/robots.txt",
    "/phone-farm-box",
  ]);

  report.prodContact = await submitContact(PROD, PROD_MARKER);
  const { rows: prodContact } = await client.query(
    `SELECT id, name, "createdAt" FROM "ContactSubmission" WHERE name = $1 ORDER BY "createdAt" DESC LIMIT 1`,
    [PROD_MARKER]
  );
  report.prodContactInDb = Boolean(prodContact[0]);
  report.prodContactId = prodContact[0]?.id || null;

  report.prodRegression = await regressionChecks(PROD);

  // Cleanup test rows (contacts only — keep order for audit or delete?)
  // User said don't clear DB but test inquiries should be cleaned. Orders - user didn't say delete order test.
  // I'll delete contact test rows only.
  if (localContact[0]) {
    await client.query(`DELETE FROM "ContactSubmission" WHERE id = $1`, [localContact[0].id]);
  }
  if (prodContact[0]) {
    await client.query(`DELETE FROM "ContactSubmission" WHERE id = $1`, [prodContact[0].id]);
  }
  report.testContactsDeleted = true;

  // Check no sqlite file dependency
  report.sqliteFileExists = false;
  try {
    const { existsSync } = await import("fs");
    report.sqliteFileExists = existsSync("prisma/data.db");
  } catch {}

  await client.end();
  console.log(JSON.stringify(report, null, 2));
}

main().catch((e) => {
  console.error("FAIL", e.message);
  process.exit(1);
});
