import type { Locale } from "./config";
import { DEFAULT_LOCALE, hasZhMirror } from "./config";

/** Normalize to site path starting with / (or / for root). */
export function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

export function inferLocaleFromPath(path: string): Locale {
  const p = normalizePath(path);
  return p === "/zh" || p.startsWith("/zh/") ? "zh" : DEFAULT_LOCALE;
}

/** Strip /zh prefix to get the English-equivalent path. */
export function toEnglishPath(path: string): string {
  const p = normalizePath(path);
  if (p === "/zh") return "/";
  if (p.startsWith("/zh/")) return p.slice(3) || "/";
  return p;
}

/** Build localized URL path from English base path. */
export function toLocalePath(enPath: string, locale: Locale): string {
  const base = normalizePath(enPath);
  if (locale === "en") return base;
  return base === "/" ? "/zh" : `/zh${base}`;
}

export function localeProductHref(slug: string, locale: Locale): string {
  return `${toLocalePath("/products", locale)}/${slug}`;
}
