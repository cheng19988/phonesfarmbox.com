import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { BLOG_POSTS } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";
import { PAGE_SEO_ZH } from "@/i18n/zh/product-seo";
import { ZH_BLOG_POSTS } from "@/i18n/zh/blog-posts";
import { IMPORTED } from "@/lib/images";

const copy = PAGE_SEO_ZH.blog;

export const metadata = buildMetadata({
  title: copy.title,
  description:
    "手机农场、Phone Farm、Android Farm、TikTok Phone Farm 中文采购指南 — 广州群控硬件厂家 Phones Farm Box。",
  path: "/zh/blog",
  locale: "zh",
});

/** English-only guides (title in Chinese, body in English). */
const EN_SUPPLEMENTS = [
  { slug: "what-is-box-phone-farm", zh: "什么是盒子手机农场？" },
  { slug: "guangzhou-phone-farm-manufacturer-guide", zh: "广州手机农场厂家出口指南" },
  { slug: "phone-farm-box-manufacturer-control-multiple-devices", zh: "一台电脑控制多设备" },
  { slug: "how-to-request-phone-farm-quote", zh: "如何索取 RFQ 报价" },
  { slug: "usdt-payment-phone-farm-orders", zh: "USDT 付款说明" },
];

export default function ZhBlogPage() {
  return (
    <>
      <PageHero
        eyebrow="手机农场 · 群控硬件"
        title={copy.heroTitle}
        description="中文指南优先 — 涵盖 Phone Farm、Phone Farming、Mobile Device Farm、Android Farm 等采购要点。"
        image={IMPORTED.pageHero}
        imageAlt="手机农场指南"
        theme="light"
      />
      <Section>
        <SectionHeader
          eyebrow={`${ZH_BLOG_POSTS.length} 篇中文`}
          title="中文采购指南"
          description="完整中文正文，可直接阅读；每篇底部可选查看英文版。"
        />
        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mb-14">
          {ZH_BLOG_POSTS.map((g) => (
            <Link key={g.slug} href={`/zh/blog/${g.slug}`} className="block group">
              <Surface padding="md" hover className="h-full border-orange-100">
                <span className="text-[11px] font-semibold uppercase text-orange-700">{g.category}</span>
                <h2 className="font-bold text-slate-900 mt-2 group-hover:text-orange-700 leading-snug">{g.title}</h2>
                <p className="text-sm text-[var(--text-secondary)] mt-2 line-clamp-2">{g.excerpt}</p>
              </Surface>
            </Link>
          ))}
        </div>

        <SectionHeader
          eyebrow="补充阅读"
          title="更多主题（英文正文）"
          description="以下话题仅有英文详文，中文站提供标题索引便于检索。"
        />
        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
          {EN_SUPPLEMENTS.map((g) => (
            <Link key={g.slug} href={`/blog/${g.slug}`} hrefLang="en" className="block group">
              <Surface padding="md" hover className="h-full">
                <h2 className="font-bold text-slate-900 group-hover:text-orange-700">{g.zh}</h2>
                <p className="text-xs text-[var(--text-muted)] mt-2">英文全文 →</p>
              </Surface>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-sm text-[var(--text-muted)] text-center">
          英文指南库共 {BLOG_POSTS.length} 篇 ·{" "}
          <Link href="/glossary" hrefLang="en" className="text-orange-700 hover:underline">
            英文术语表
          </Link>
          {" · "}
          <Link href="/zh/glossary" className="text-orange-700 hover:underline">
            中文术语表
          </Link>
        </p>
      </Section>
    </>
  );
}
