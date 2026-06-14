import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { hasZhMirror } from "@/i18n/config";
import { inferLocaleFromPath, toEnglishPath, toLocalePath } from "@/i18n/paths";
import { LOCALE_OG } from "@/i18n/config";
import { SITE } from "./config";
import { absoluteUrl } from "./site-url";
import { REFERENCE_PRICE_FULL } from "./pricing-copy";

type SEOInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  locale?: Locale;
};

export function buildMetadata({
  title,
  description,
  path = "",
  image,
  noIndex,
  locale,
}: SEOInput): Metadata {
  const resolvedLocale = locale ?? inferLocaleFromPath(path);
  const enPath = toEnglishPath(path);
  const url = absoluteUrl(toLocalePath(enPath, resolvedLocale), SITE.productionUrl);
  const ogImage = image || `${SITE.productionUrl}/images/hero_1600x900/phonesfarmbox.com-product-box-0f5501e1584de9a625d220f62951bc6d-d04df-hero_1600x900.webp`;

  const alternates: Metadata["alternates"] = { canonical: url };
  if (!noIndex && hasZhMirror(enPath)) {
    alternates.languages = {
      en: absoluteUrl(toLocalePath(enPath, "en"), SITE.productionUrl),
      "zh-CN": absoluteUrl(toLocalePath(enPath, "zh"), SITE.productionUrl),
      "x-default": absoluteUrl(toLocalePath(enPath, "en"), SITE.productionUrl),
    };
  }

  return {
    title: { absolute: `${title} | ${SITE.name}` },
    description,
    alternates,
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      images: [{ url: ogImage, width: 1600, height: 900, alt: title }],
      locale: LOCALE_OG[resolvedLocale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
      images: [ogImage],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export function buildContentMetadata(
  page: { title: string; subtitle: string },
  path: string
) {
  return buildMetadata({ title: page.title, description: page.subtitle, path });
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.productionUrl,
    logo: `${SITE.productionUrl}/images/card_800x800/phonesfarmbox.com-product-box-0f5501e1584de9a625d220f62951bc6d-d04df-card_800x800.webp`,
    description: SITE.description,
    foundingDate: String(SITE.since),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Guangzhou",
      addressCountry: "CN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "qiuxui646@gmail.com",
      contactType: "sales",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Chinese"],
    },
    knowsAbout: [
      "Phone farm",
      "Phone farm box",
      "Phone farming",
      "Mobile farm",
      "Mobile device farm",
      "Android farm",
      "TikTok phone farm",
      "Phone farm hardware",
      "Phone farm manufacturer",
      "Multi-account device farm",
      "TikTok device farm",
      "Instagram device farm",
      "Motherboard rack box",
      "USB hub phone farm",
      "Batch control software",
      "Network proxy planning",
      "B2B phone farm export",
    ],
  };
}

export function websiteJsonLd(locale: Locale = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: locale === "zh" ? `${SITE.productionUrl}/zh` : SITE.productionUrl,
    description: SITE.description,
    inLanguage: locale === "zh" ? "zh-CN" : "en-US",
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.productionUrl },
  };
}

export function productJsonLd(product: {
  name: string;
  description: string;
  slug: string;
  priceUsd: number;
  stock: number;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${SITE.productionUrl}${product.image}`,
    url: `${SITE.productionUrl}/products/${product.slug}`,
    brand: { "@type": "Brand", name: SITE.name },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.priceUsd,
      description: REFERENCE_PRICE_FULL,
      availability:
        product.stock > 0
          ? "https://schema.org/PreOrder"
          : "https://schema.org/OutOfStock",
      seller: { "@type": "Organization", name: SITE.name },
    },
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.productionUrl}${item.path}`,
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: `${SITE.productionUrl}${input.path}`,
    datePublished: input.datePublished,
    author: { "@type": "Organization", name: SITE.name },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.productionUrl,
    },
  };
}

export function definedTermJsonLd(term: string, definition: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term,
    description: definition,
    url: `${SITE.productionUrl}${path}`,
    inDefinedTermSet: `${SITE.productionUrl}/glossary`,
  };
}

export function collectionPageJsonLd(input: {
  name: string;
  description: string;
  path: string;
  items: { name: string; path: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path, SITE.productionUrl),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: input.items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        url: absoluteUrl(item.path, SITE.productionUrl),
      })),
    },
  };
}

export function contactPageJsonLd(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Request a Hardware Quote — Phones Farm Box",
    description,
    url: absoluteUrl("/contact", SITE.productionUrl),
    mainEntity: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.productionUrl,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "qiuxui646@gmail.com",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Chinese"],
      },
    },
  };
}
