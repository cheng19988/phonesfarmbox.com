export const LOCALES = ["en", "zh"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  zh: "中文",
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  en: "en",
  zh: "zh-CN",
};

export const LOCALE_OG: Record<Locale, string> = {
  en: "en_US",
  zh: "zh_CN",
};

/** English paths that have a dedicated Chinese mirror under /zh */
export const ZH_MIRROR_STATIC_PATHS = new Set([
  "/",
  "/products",
  "/about",
  "/contact",
  "/faq",
  "/buyer-specs",
  "/pricing",
  "/blog",
  "/scenarios",
  "/help",
]);

export function hasZhMirror(enPath: string): boolean {
  const p = enPath === "" ? "/" : enPath.startsWith("/") ? enPath : `/${enPath}`;
  if (ZH_MIRROR_STATIC_PATHS.has(p)) return true;
  if (p.startsWith("/products/") && p.length > "/products/".length) return true;
  return false;
}
