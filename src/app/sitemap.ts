import type { MetadataRoute } from "next";
import { SITE } from "@/lib/config";
import { BLOG_POSTS } from "@/data/blog";
import { PRODUCT_SEEDS } from "@/data/products";
import { SCENARIOS } from "@/data/scenarios";
import { FEATURE_PAGES } from "@/data/features-pages";
import { SOLUTION_PAGES } from "@/data/solutions-pages";
import { HELP_ARTICLES } from "@/data/help";
import { GLOSSARY_TERMS } from "@/data/glossary";
import { PLANNING_TOOLS } from "@/data/tools";
import { SERVICE_PAGES } from "@/data/services-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "", "/products", "/pricing", "/services", "/solutions", "/scenarios", "/features",
    "/help", "/glossary", "/tools", "/about", "/faq", "/contact", "/blog", "/alternatives", "/ai",
    "/how-to-order", "/sample-order", "/buyer-specs",
    "/privacy", "/cookies", "/refund", "/terms",
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const dynamic = [
    ...PRODUCT_SEEDS.map((p) => ({ url: `${SITE.url}/products/${p.slug}`, priority: 0.9 })),
    ...SCENARIOS.map((p) => ({ url: `${SITE.url}/scenarios/${p.slug}`, priority: 0.85 })),
    ...SOLUTION_PAGES.map((p) => ({ url: `${SITE.url}/solutions/${p.slug}`, priority: 0.85 })),
    ...FEATURE_PAGES.map((p) => ({ url: `${SITE.url}/features/${p.slug}`, priority: 0.85 })),
    ...HELP_ARTICLES.map((p) => ({ url: `${SITE.url}/help/${p.slug}`, priority: 0.75 })),
    ...GLOSSARY_TERMS.map((p) => ({ url: `${SITE.url}/glossary/${p.slug}`, priority: 0.7 })),
    ...PLANNING_TOOLS.map((p) => ({ url: `${SITE.url}/tools/${p.slug}`, priority: 0.7 })),
    ...BLOG_POSTS.map((p) => ({ url: `${SITE.url}/blog/${p.slug}`, priority: 0.7 })),
    ...SERVICE_PAGES.map((p) => ({ url: `${SITE.url}/services/${p.slug}`, priority: 0.8 })),
  ].map((p) => ({
    ...p,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
  }));

  return [...staticPages, ...dynamic];
}
