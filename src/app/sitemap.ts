import type { MetadataRoute } from "next";
import { absoluteUrl, isSitemapPathAllowed } from "@/lib/site-url";
import { getCanonicalOrigin } from "@/lib/canonical-url";
import { BLOG_POSTS } from "@/data/blog";
import { PRODUCT_SEEDS } from "@/data/products";
import { ZH_MIRROR_STATIC_PATHS } from "@/i18n/config";
import { toLocalePath } from "@/i18n/paths";
import { SCENARIOS } from "@/data/scenarios";
import { FEATURE_PAGES } from "@/data/features-pages";
import { SOLUTION_PAGES } from "@/data/solutions-pages";
import { HELP_ARTICLES } from "@/data/help";
import { GLOSSARY_TERMS } from "@/data/glossary";
import { PLANNING_TOOLS } from "@/data/tools";
import { SERVICE_PAGES } from "@/data/services-pages";

function entry(path: string, priority: number): MetadataRoute.Sitemap[number] | null {
  if (!isSitemapPathAllowed(path)) return null;
  return {
    url: absoluteUrl(path, getCanonicalOrigin()),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/products",
    "/pricing",
    "/services",
    "/solutions",
    "/scenarios",
    "/features",
    "/help",
    "/glossary",
    "/tools",
    "/about",
    "/faq",
    "/contact",
    "/blog",
    "/alternatives",
    "/ai",
    "/how-to-order",
    "/buyer-specs",
    "/privacy",
    "/cookies",
    "/refund",
    "/terms",
  ];

  const dynamicPaths: { path: string; priority: number }[] = [
    ...PRODUCT_SEEDS.map((p) => ({ path: `/products/${p.slug}`, priority: 0.9 })),
    ...SCENARIOS.map((p) => ({ path: `/scenarios/${p.slug}`, priority: 0.85 })),
    ...SOLUTION_PAGES.map((p) => ({ path: `/solutions/${p.slug}`, priority: 0.85 })),
    ...FEATURE_PAGES.map((p) => ({ path: `/features/${p.slug}`, priority: 0.85 })),
    ...HELP_ARTICLES.map((p) => ({ path: `/help/${p.slug}`, priority: 0.75 })),
    ...GLOSSARY_TERMS.map((p) => ({ path: `/glossary/${p.slug}`, priority: 0.7 })),
    ...PLANNING_TOOLS.map((p) => ({ path: `/tools/${p.slug}`, priority: 0.7 })),
    ...BLOG_POSTS.map((p) => ({ path: `/blog/${p.slug}`, priority: 0.7 })),
    ...SERVICE_PAGES.map((p) => ({ path: `/services/${p.slug}`, priority: 0.8 })),
  ];

  return [
    ...staticPaths.map((path) => entry(path, path === "" ? 1 : 0.8)),
    ...dynamicPaths.map(({ path, priority }) => entry(path, priority)),
    ...[...ZH_MIRROR_STATIC_PATHS]
      .filter((p) => p !== "/")
      .map((p) => entry(toLocalePath(p, "zh"), p === "/products" ? 0.85 : 0.8)),
    entry("/zh", 0.95),
    ...PRODUCT_SEEDS.map((p) => entry(`/zh/products/${p.slug}`, 0.88)),
  ].filter((e): e is MetadataRoute.Sitemap[number] => e !== null);
}
