import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { HELP_ARTICLES } from "@/data/help";
import { buildMetadata } from "@/lib/seo";
import { PAGE_SEO_ZH } from "@/i18n/zh/product-seo";
import { IMPORTED } from "@/lib/images";

const copy = PAGE_SEO_ZH.help;

const HELP_ZH: Record<string, string> = {
  "usdt-payment-confirmation-hardware-orders": "USDT 付款确认流程",
  "one-pc-how-many-phone-farm-boxes": "一台电脑能控制多少盒子",
  "phone-farm-box-initial-setup": "手机农场盒子初次安装",
  "network-proxy-setup-phone-farm": "网络与代理规划",
  "batch-control-software-overview": "群控软件概览",
};

export const metadata = buildMetadata({
  title: copy.title,
  description: copy.description,
  path: "/zh/help",
  locale: "zh",
});

export default function ZhHelpPage() {
  const featured = HELP_ARTICLES.filter((a) => HELP_ZH[a.slug]).slice(0, 12);

  return (
    <>
      <PageHero
        eyebrow="硬件买家"
        title={copy.heroTitle}
        description={copy.heroDesc}
        image={IMPORTED.pageHero}
        imageAlt="手机农场帮助中心"
        theme="light"
      />
      <Section>
        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
          {featured.map((a) => (
            <Link key={a.slug} href={`/help/${a.slug}`} hrefLang="en" className="block group">
              <Surface padding="md" hover className="h-full">
                <span className="text-xs text-violet-700 font-medium">{a.category}</span>
                <h2 className="font-bold text-slate-900 mt-1 group-hover:text-orange-700">
                  {HELP_ZH[a.slug] ?? a.title}
                </h2>
                <p className="text-sm text-[var(--text-muted)] mt-2 line-clamp-2">{a.summary}</p>
              </Surface>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-sm text-center">
          <Link href="/help" hrefLang="en" className="text-orange-700 hover:underline">
            全部英文帮助文档 ({HELP_ARTICLES.length} 篇)
          </Link>
        </p>
      </Section>
    </>
  );
}
