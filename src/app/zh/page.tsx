import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/commerce";
import { CONTACT } from "@/lib/config";
import { IMAGES } from "@/lib/images";
import { resolveProductCardImage } from "@/lib/resolve-product-card-image";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { FAQAccordion } from "@/components/commerce";
import { JsonLd } from "@/components/shared";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { PAGE_SEO_ZH } from "@/i18n/zh/product-seo";
import { FAQ_ZH } from "@/i18n/zh/faq";
import { contactHref, ui } from "@/i18n/nav";

const copy = PAGE_SEO_ZH.home;
const strings = ui("zh");

export const metadata = buildMetadata({
  title: copy.title,
  description: copy.description,
  path: "/zh",
  locale: "zh",
});

const TRUST = [
  { value: "2017", label: "供应起始" },
  { value: "广州", label: "出口基地" },
  { value: "MOQ 1", label: "支持样品" },
  { value: "全球", label: "空运/海运" },
];

const KEYWORDS_BLOCK = [
  "手机农场",
  "手机群控",
  "主板机",
  "群控盒子",
  "Phone Farm Box",
  "Android 群控",
  "TikTok 多账号硬件",
  "移动设备农场",
  "广州手机农场厂家",
];

const KEYWORD_GUIDES = [
  { href: "/zh/blog/what-is-phone-farm-phone-farming-guide", label: "什么是手机农场？" },
  { href: "/zh/blog/phone-farm-hardware-manufacturer-guide", label: "手机农场厂家怎么选" },
  { href: "/zh/blog/tiktok-phone-farm-android-farm-setup", label: "TikTok / Android 群控搭建" },
  { href: "/zh/glossary", label: "术语表（8 个核心词）" },
  { href: "/zh/products", label: "产品目录" },
  { href: "/zh/buyer-specs", label: "采购规格" },
];

export default async function ZhHomePage() {
  const products = await prisma.product.findMany({
    where: { published: true },
    orderBy: { priceUsd: "asc" },
    take: 6,
  });

  return (
    <>
      <JsonLd data={faqJsonLd(FAQ_ZH.slice(0, 6).map(({ question, answer }) => ({ question, answer })))} />
      <PageHero
        size="home"
        eyebrow={copy.eyebrow}
        title={copy.heroTitle}
        description={copy.heroDesc}
        image={IMAGES.homeHero}
        imageAlt="手机农场盒子硬件"
        theme="light"
      >
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 mb-8">
          <Link href={contactHref("zh")} className="btn-primary text-base px-7 py-3 sm:w-auto text-center">
            {strings.requestQuote}
          </Link>
          <Link href="/zh/products" className="btn-secondary text-base px-7 py-3 sm:w-auto text-center">
            {strings.browseCatalog}
          </Link>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-base px-7 py-3 sm:w-auto text-center"
          >
            WhatsApp
          </a>
        </div>
        <div className="hero-trust-metrics">
          {TRUST.map((m, i) => (
            <div key={m.label} className="hero-trust-metric">
              {i > 0 && <span className="hero-trust-divider hidden sm:block" aria-hidden />}
              <div className="font-bold text-slate-900 text-lg sm:text-xl leading-tight">{m.value}</div>
              <div className="text-[11px] sm:text-xs text-[var(--text-muted)] uppercase tracking-wide mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </PageHero>

      <Section variant="muted">
        <SectionHeader
          eyebrow="采购检索"
          title="手机农场 · 手机群控 · 主板机"
          description="Phones Farm Box 是广州 B2B 手机农场硬件出口商 — 真机群控机箱、USB Hub、电源散热，非云手机。以下为买家常用检索词与中文指南入口。"
          align="center"
          className="max-w-4xl"
        />
        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto mb-8">
          {KEYWORDS_BLOCK.map((kw) => (
            <span
              key={kw}
              className="text-sm px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700"
            >
              {kw}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm max-w-2xl mx-auto">
          {KEYWORD_GUIDES.map((g) => (
            <Link key={g.href} href={g.href} className="text-orange-700 font-medium hover:underline">
              {g.label}
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="产品"
          title="热门手机农场 SKU"
          description="列表价为 USD 参考价 — 槽位、Hub 档位、运费在书面报价中确认。"
        />
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              slug={p.slug}
              name={p.name}
              shortDesc={p.shortDesc}
              priceUsd={p.priceUsd}
              stock={p.stock}
              imageCard={resolveProductCardImage(p.slug, p.imageCard)}
              category={p.category}
              productBasePath="/zh/products"
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-4 mt-12">
          <Link href="/zh/products" className="btn-primary">
            查看全部产品
          </Link>
          <Link href="/zh/buyer-specs" className="btn-secondary">
            采购规格（中英）
          </Link>
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeader eyebrow="FAQ" title="手机农场常见问题" align="center" />
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={FAQ_ZH.slice(0, 8).map(({ question, answer }) => ({ question, answer }))} />
        </div>
        <p className="text-center mt-8">
          <Link href="/zh/faq" className="text-orange-700 font-medium hover:underline">
            查看全部 FAQ →
          </Link>
        </p>
      </Section>

      <Section>
        <Surface padding="lg" className="max-w-3xl mx-auto text-center border-orange-200 bg-orange-50/40">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">需要手机农场硬件报价？</h2>
          <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
            发送设备数量、机型、目的国与电压区域。我们在组装前提供书面 BOM 与交期。也可阅读{" "}
            <Link href="/" className="text-orange-700 hover:underline" hrefLang="en">
              English site
            </Link>
            。
          </p>
          <Link href={contactHref("zh")} className="btn-primary px-8">
            {strings.requestQuote}
          </Link>
        </Surface>
      </Section>
    </>
  );
}
