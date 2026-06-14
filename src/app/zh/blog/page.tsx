import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { BLOG_POSTS } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";
import { PAGE_SEO_ZH } from "@/i18n/zh/product-seo";
import { IMPORTED } from "@/lib/images";

const copy = PAGE_SEO_ZH.blog;

export const metadata = buildMetadata({
  title: copy.title,
  description: copy.description,
  path: "/zh/blog",
  locale: "zh",
});

const ZH_GUIDES = [
  { href: "/blog/what-is-phone-farm-phone-farming-guide", zh: "什么是 Phone Farm / Phone Farming？", en: "Phone Farm & Phone Farming Guide" },
  { href: "/blog/phone-farm-hardware-manufacturer-guide", zh: "Phone Farm Hardware 厂家指南", en: "Phone Farm Manufacturer Guide" },
  { href: "/blog/tiktok-phone-farm-android-farm-setup", zh: "TikTok Phone Farm · Android Farm", en: "TikTok & Android Farm Setup" },
  { href: "/blog/what-is-box-phone-farm", zh: "什么是盒子手机农场？", en: "What Is a Box Phone Farm?" },
  { href: "/blog/guangzhou-phone-farm-manufacturer-guide", zh: "广州手机农场厂家出口指南", en: "Guangzhou Manufacturer Guide" },
  { href: "/blog/phone-farm-box-manufacturer-control-multiple-devices", zh: "一台电脑控制多设备", en: "Control Multiple Devices" },
  { href: "/blog/tiktok-multi-account-phone-farm-guide-2026", zh: "TikTok 多账号手机农场", en: "TikTok Multi-Account Guide" },
  { href: "/blog/how-to-request-phone-farm-quote", zh: "如何索取 RFQ 报价", en: "RFQ Checklist" },
  { href: "/blog/usdt-payment-phone-farm-orders", zh: "USDT 付款说明", en: "USDT Payment" },
];

export default function ZhBlogPage() {
  return (
    <>
      <PageHero
        eyebrow="手机农场 · 群控硬件"
        title={copy.heroTitle}
        description={copy.heroDesc}
        image={IMPORTED.pageHero}
        imageAlt="手机农场指南"
        theme="light"
      />
      <Section>
        <div className="max-w-3xl mb-10 prose-content">
          <p>
            本站技术文章以<strong>英文</strong>维护（便于全球 B2B 买家与 AI 索引）。以下为与「手机农场」「手机群控」相关的热门指南 — 点击阅读英文全文。
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
          {ZH_GUIDES.map((g) => (
            <Link key={g.href} href={g.href} hrefLang="en" className="block group">
              <Surface padding="md" hover className="h-full">
                <h2 className="font-bold text-slate-900 group-hover:text-orange-700">{g.zh}</h2>
                <p className="text-sm text-[var(--text-muted)] mt-1">{g.en}</p>
              </Surface>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-sm text-[var(--text-muted)]">
          全部 {BLOG_POSTS.length} 篇英文指南：{" "}
          <Link href="/blog" hrefLang="en" className="text-orange-700 hover:underline">
            /blog
          </Link>
        </p>
      </Section>
    </>
  );
}
