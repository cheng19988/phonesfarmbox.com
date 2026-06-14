import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { SCENARIOS } from "@/data/scenarios";
import { buildMetadata } from "@/lib/seo";
import { PAGE_SEO_ZH } from "@/i18n/zh/product-seo";
import { IMPORTED } from "@/lib/images";

const copy = PAGE_SEO_ZH.scenarios;

const SCENARIO_ZH: Record<string, { title: string; subtitle: string }> = {
  tiktok: { title: "TikTok 多账号手机农场", subtitle: "真机群控 · 批量管理 TikTok 账号" },
  instagram: { title: "Instagram 设备农场", subtitle: "Reels 与多账号矩阵硬件" },
  facebook: { title: "Facebook 群控硬件", subtitle: "多账号社媒运营真机方案" },
  youtube: { title: "YouTube 设备农场", subtitle: "多频道真机管理" },
  "amazon-shopee": { title: "亚马逊 / Shopee 卖家农场", subtitle: "跨境电商多店铺真机" },
  telegram: { title: "Telegram 多账号", subtitle: "批量真机管理" },
  whatsapp: { title: "WhatsApp 多账号", subtitle: "群控硬件方案" },
  "twitter-x": { title: "Twitter (X) 设备农场", subtitle: "多账号真机基础设施" },
};

export const metadata = buildMetadata({
  title: copy.title,
  description: copy.description,
  path: "/zh/scenarios",
  locale: "zh",
});

export default function ZhScenariosPage() {
  return (
    <>
      <PageHero
        eyebrow="按平台"
        title={copy.heroTitle}
        description={copy.heroDesc}
        image={IMPORTED.pageHero}
        imageAlt="手机农场应用场景"
        theme="light"
      />
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCENARIOS.map((s) => {
            const zh = SCENARIO_ZH[s.slug];
            return (
              <Link key={s.slug} href={`/scenarios/${s.slug}`} hrefLang="en" className="group block h-full">
                <article className="card overflow-hidden h-full">
                  {s.heroImage && (
                    <div className="relative aspect-video bg-slate-100">
                      <Image src={s.heroImage} alt={zh?.title ?? s.title} fill className="object-cover" />
                    </div>
                  )}
                  <Surface padding="md" className="border-0 shadow-none rounded-none">
                    <h2 className="font-bold text-slate-900 group-hover:text-orange-700">{zh?.title ?? s.title}</h2>
                    <p className="text-sm text-slate-600 mt-2">{zh?.subtitle ?? s.subtitle}</p>
                    <span className="inline-block text-xs text-orange-700 mt-3">英文详情 →</span>
                  </Surface>
                </article>
              </Link>
            );
          })}
        </div>
        <p className="text-center mt-10 text-sm">
          <Link href="/scenarios" hrefLang="en" className="text-orange-700 hover:underline">
            English scenarios index
          </Link>
        </p>
      </Section>
    </>
  );
}
