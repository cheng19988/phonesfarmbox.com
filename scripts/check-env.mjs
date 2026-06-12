import "dotenv/config";
import { Pool } from "pg";

const REQUIRED = [
  { key: "DATABASE_URL", test: "db" },
  { key: "JWT_SECRET", minLen: 16, notDefault: "huicheng-phonefarm-dev-secret-change-in-production" },
  { key: "ADMIN_EMAIL", minLen: 5 },
  { key: "ADMIN_PASSWORD", minLen: 8, notDefault: "admin123456" },
];

const NOTIFY = [
  { key: "TELEGRAM_BOT_TOKEN", minLen: 10 },
  { key: "TELEGRAM_CHAT_ID", minLen: 1 },
];

const OPTIONAL = [
  { key: "RESEND_API_KEY" },
  { key: "CONTACT_NOTIFY_EMAIL" },
  { key: "CONTACT_FROM_EMAIL" },
  { key: "TRON_API_KEY" },
  { key: "NEXT_PUBLIC_SITE_URL" },
  { key: "SITE_URL" },
];

function mask(key, val) {
  if (!val) return "(empty)";
  if (key === "DATABASE_URL") {
    try {
      const u = new URL(val);
      return `${u.protocol}//${u.hostname}/... (${val.length} chars)`;
    } catch {
      return `(invalid url, ${val.length} chars)`;
    }
  }
  if (val.length <= 8) return `(${val.length} chars)`;
  return `${val.slice(0, 4)}…${val.slice(-4)} (${val.length} chars)`;
}

function status(label, ok, detail = "") {
  console.log(`${ok ? "OK" : "WARN"}  ${label}${detail ? " — " + detail : ""}`);
}

async function testDb(url) {
  const pool = new Pool({ connectionString: url });
  try {
    const r = await pool.query("SELECT 1 AS ok");
    await pool.end();
    return r.rows[0]?.ok === 1;
  } catch (e) {
    await pool.end().catch(() => {});
    throw e;
  }
}

async function testTelegram(token, chatId) {
  const me = await fetch(`https://api.telegram.org/bot${token}/getMe`);
  const meJson = await me.json();
  if (!meJson.ok) return { ok: false, detail: `getMe: ${meJson.description || me.status}` };

  const msg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: "[phonesfarmbox.com env check] RFQ notification test — ignore.",
    }),
  });
  const msgJson = await msg.json();
  if (!msgJson.ok) return { ok: false, detail: `sendMessage: ${msgJson.description || msg.status}` };
  return { ok: true, detail: `bot @${meJson.result.username}` };
}

async function main() {
  console.log("=== Environment variable check (values masked) ===\n");

  for (const { key, minLen, notDefault } of REQUIRED) {
    const val = process.env[key]?.trim() || "";
    const present = val.length > 0;
    const lenOk = !minLen || val.length >= minLen;
    const notDef = !notDefault || val !== notDefault;
    status(key, present && lenOk && notDef, mask(key, val));
    if (!present) status(`${key} missing`, false);
    else if (!lenOk) status(`${key} too short`, false, `need >= ${minLen}`);
    else if (!notDef) status(`${key} still default`, false);
  }

  console.log("\n--- Notify (Telegram / Email) ---");
  const tgToken = process.env.TELEGRAM_BOT_TOKEN?.trim() || "";
  const tgChat = process.env.TELEGRAM_CHAT_ID?.trim() || "";
  const resend = process.env.RESEND_API_KEY?.trim() || "";
  const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL?.trim() || "";
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || "";

  status("TELEGRAM_BOT_TOKEN", tgToken.length > 10, mask("TELEGRAM_BOT_TOKEN", tgToken));
  status("TELEGRAM_CHAT_ID", tgChat.length > 0, mask("TELEGRAM_CHAT_ID", tgChat));

  if (resend && notifyEmail) {
    status("RESEND_API_KEY", true, mask("RESEND_API_KEY", resend));
    status("CONTACT_NOTIFY_EMAIL", true, notifyEmail);
    status("CONTACT_FROM_EMAIL", fromEmail.length > 0, fromEmail || "(empty — will use inquiry@phonesfarmbox.com)");
  } else {
    status("Email notify path", false, !resend ? "RESEND_API_KEY not set" : "CONTACT_NOTIFY_EMAIL empty");
    if (!resend) status("RESEND_API_KEY", false, "(not set)");
    if (!notifyEmail) status("CONTACT_NOTIFY_EMAIL", false, "(empty)");
  }

  const notifyOk = (tgToken && tgChat) || (resend && notifyEmail);
  status("At least one notify channel", notifyOk, notifyOk ? "" : "RFQ saves to DB only");

  console.log("\n--- Optional ---");
  for (const { key } of OPTIONAL) {
    const val = process.env[key]?.trim() || "";
    status(key, val.length > 0, val ? mask(key, val) : "(not set / empty)");
  }

  if (process.env.TRON_API_KEY?.trim()) {
    status("TRON auto-verify", false, "key set but code not implemented — manual USDT confirmation only");
  }

  console.log("\n--- Live tests ---");
  try {
    await testDb(process.env.DATABASE_URL);
    status("DATABASE_URL connection", true);
  } catch (e) {
    status("DATABASE_URL connection", false, e instanceof Error ? e.message : String(e));
  }

  if (tgToken && tgChat) {
    try {
      const tg = await testTelegram(tgToken, tgChat);
      status("Telegram bot + sendMessage", tg.ok, tg.detail);
    } catch (e) {
      status("Telegram", false, e instanceof Error ? e.message : String(e));
    }
  }

  console.log("\nNote: Vercel Production env must match separately — this checks local .env only.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
