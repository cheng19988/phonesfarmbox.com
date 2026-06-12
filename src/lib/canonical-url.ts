import { PRODUCTION_SITE_URL } from "./site-url";

/** Canonical origin for sitemap, robots, Open Graph, and JSON-LD — always www production. */
export function getCanonicalOrigin(): string {
  return PRODUCTION_SITE_URL;
}
