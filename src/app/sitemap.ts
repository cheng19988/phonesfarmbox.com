import type { MetadataRoute } from "next";
import { SITE } from "@/lib/config";
import { absoluteUrl, isSitemapPathAllowed } from "@/lib/site-url";
import { BLOG_POSTS } from "@/data/blog";
import { PRODUCT_SEEDS } from "@/data/products";
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
    url: absoluteUrl(path, SITE.url),
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
  ].filter((e): e is MetadataRoute.Sitemap[number] => e !== null);
}
