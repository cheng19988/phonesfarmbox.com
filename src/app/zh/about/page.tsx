import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { buildMetadata } from "@/lib/seo";
import { PAGE_SEO_ZH } from "@/i18n/zh/product-seo";
import { SITE, CONTACT } from "@/lib/config";
import { IMAGES, IMPORTED } from "@/lib/images";
import { contactHref } from "@/i18n/nav";

const copy = PAGE_SEO_ZH.about;

export const metadata = buildMetadata({
  title: copy.title,
  description: copy.description,
  path: "/zh/about",
  locale: "zh",
});

const LINES = [
  { title: "手机农场盒子", desc: "Android 群控机箱 — 电源、USB Hub、散热一体化，槽位报价前确认。", href: "/zh/products/phone-farm-box" },
  { title: "主板机机架", desc: "无屏 Android 节点，更高密度、更低单槽成本。", href: "/zh/products/motherboard-box" },
  { title: "iPhone 群控", desc: "批量 iPhone 布局 — 机型与线材方案报价确认。", href: "/zh/products/iphone-phone-farm" },
  { title: "Hub 与电源", desc: "工业 USB Hub、PSU、散热配件。", href: "/zh/products/usb-hub" },
];

export default function ZhAboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`${SITE.location} · ${SITE.since} 年起`}
        title={copy.heroTitle}
        description={copy.heroDesc}
        image={IMAGES.factory}
        imageAlt="广州手机农场工厂"
        theme="light"
      />
      <Section>
        <div className="max-w-3xl mx-auto prose-content">
          <p>
            <strong>Phones Farm Box</strong> 是广州 B2B 手机农场硬件出口商。我们组装真机群控机箱 — 非云手机 SaaS，非虚拟设备租赁。
            买家获得实体机架、Hub、电源、散热与可选远程安装，适合 TikTok、Instagram、跨境电商、App 测试等需要<strong>一台电脑控制多台真机</strong>的团队。
          </p>
          <p>
            销售流程为<strong>报价制</strong>：RFQ → 书面 BOM / 形式发票 → 付款 → 组装烧机 → 出口。MOQ 1 台样品，批量 3 台起常见档位。
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          {LINES.map((l) => (
            <Link key={l.href} href={l.href} className="block group">
              <Surface padding="md" hover className="h-full">
                <h2 className="font-bold text-slate-900 group-hover:text-orange-700">{l.title}</h2>
                <p className="text-sm text-[var(--text-secondary)] mt-2">{l.desc}</p>
              </Surface>
            </Link>
          ))}
        </div>
        <p className="text-center mt-12 text-sm">
          <Link href="/about" hrefLang="en" className="text-orange-700 hover:underline">
            English about page
          </Link>
          {" · "}
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-orange-700 hover:underline">
            WhatsApp {CONTACT.whatsapp}
          </a>
        </p>
      </Section>
    </>
  );
}
