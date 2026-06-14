import type { Locale } from "./config";

type NavItem = { href: string; label: string };

const NAV_EN: NavItem[] = [
  { href: "/products", label: "Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/scenarios", label: "Scenarios" },
  { href: "/features", label: "Features" },
  { href: "/help", label: "Help Center" },
  { href: "/tools", label: "Planning Tools" },
  { href: "/contact", label: "Contact" },
];

const NAV_ZH: NavItem[] = [
  { href: "/products", label: "产品目录" },
  { href: "/pricing", label: "报价流程" },
  { href: "/buyer-specs", label: "采购规格" },
  { href: "/scenarios", label: "应用场景" },
  { href: "/help", label: "帮助中心" },
  { href: "/blog", label: "指南文章" },
  { href: "/faq", label: "常见问题" },
  { href: "/contact", label: "获取报价" },
];

export function getNav(locale: Locale): NavItem[] {
  return locale === "zh" ? NAV_ZH : NAV_EN;
}

export function getNavHref(itemHref: string, locale: Locale): string {
  if (locale === "en") return itemHref;
  return itemHref === "/" ? "/zh" : `/zh${itemHref}`;
}

export const UI_STRINGS = {
  en: {
    tagline: "B2B phone farm hardware",
    getQuote: "Get Quote",
    account: "Account",
    switchLang: "中文",
    switchLangHref: "/zh",
    browseCatalog: "Browse Catalog",
    requestQuote: "Request Hardware Quote",
    readEnglish: "English",
    readChinese: "中文",
    langSwitcherLabel: "Language",
  },
  zh: {
    tagline: "B2B 手机农场硬件",
    getQuote: "获取报价",
    account: "账户",
    switchLang: "English",
    switchLangHref: "/",
    browseCatalog: "浏览产品",
    requestQuote: "索取硬件报价",
    readEnglish: "English",
    readChinese: "中文",
    langSwitcherLabel: "语言",
  },
} as const;

export function ui(locale: Locale) {
  return UI_STRINGS[locale];
}

export function homeHref(locale: Locale): string {
  return locale === "zh" ? "/zh" : "/";
}

export function contactHref(locale: Locale): string {
  return locale === "zh" ? "/zh/contact" : "/contact";
}
