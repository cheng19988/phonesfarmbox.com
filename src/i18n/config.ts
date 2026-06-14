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
  "/glossary",
  "/scenarios",
  "/help",
]);

export function hasZhMirror(enPath: string): boolean {
  const p = enPath === "" ? "/" : enPath.startsWith("/") ? enPath : `/${enPath}`;
  if (ZH_MIRROR_STATIC_PATHS.has(p)) return true;
  if (p.startsWith("/products/") && p.length > "/products/".length) return true;
  if (p.startsWith("/blog/")) {
    const slug = p.slice("/blog/".length);
    return (
      slug === "what-is-phone-farm-phone-farming-guide" ||
      slug === "phone-farm-hardware-manufacturer-guide" ||
      slug === "tiktok-phone-farm-android-farm-setup"
    );
  }
  if (p.startsWith("/glossary/")) {
    const slug = p.slice("/glossary/".length);
    return (
      slug === "phone-farm" ||
      slug === "phone-farming" ||
      slug === "mobile-farm" ||
      slug === "mobile-device-farm" ||
      slug === "android-farm" ||
      slug === "tiktok-phone-farm" ||
      slug === "phone-farm-hardware" ||
      slug === "phone-farm-manufacturer"
    );
  }
  return false;
}
