/** Production canonical origin — always www, never apex, localhost, or preview hosts. */
export const PRODUCTION_SITE_URL = "https://www.phonesfarmbox.com";

const BLOCKED_CANONICAL_HOSTS = new Set(["localhost", "127.0.0.1"]);

function isBlockedCanonicalHost(hostname: string): boolean {
  const h = hostname.toLowerCase();
  if (BLOCKED_CANONICAL_HOSTS.has(h)) return true;
  if (h.endsWith(".vercel.app")) return true;
  if (h === "phonesfarmbox.com") return true;
  return false;
}

/** Canonical site URL for metadata, sitemap, robots, and llms.txt — never localhost or preview. */
export function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? PRODUCTION_SITE_URL;
  try {
    const u = new URL(raw);
    if (isBlockedCanonicalHost(u.hostname)) return PRODUCTION_SITE_URL;
    return `${u.protocol}//${u.host}`.replace(/\/$/, "");
  } catch {
    return PRODUCTION_SITE_URL;
  }
}

export function absoluteUrl(path: string, base = resolveSiteUrl()): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

/** Paths excluded from sitemap.xml (auth, checkout, admin, API). */
export const SITEMAP_EXCLUDED_PATHS = new Set([
  "/login",
  "/register",
  "/admin",
  "/account",
  "/account/orders",
  "/orders",
  "/sample-order",
  "/api",
]);

export function isSitemapPathAllowed(path: string): boolean {
  const p = path === "" ? "" : path.startsWith("/") ? path : `/${path}`;
  if (SITEMAP_EXCLUDED_PATHS.has(p)) return false;
  for (const prefix of SITEMAP_EXCLUDED_PATHS) {
    if (prefix !== "/" && p.startsWith(`${prefix}/`)) return false;
  }
  return true;
}
