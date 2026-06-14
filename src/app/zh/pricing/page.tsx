import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { buildMetadata } from "@/lib/seo";
import { PAGE_SEO_ZH } from "@/i18n/zh/product-seo";
import { CONTACT } from "@/lib/config";
import { IMAGES } from "@/lib/images";
import { contactHref } from "@/i18n/nav";
import { REFERENCE_PRICE_DISCLAIMER } from "@/lib/pricing-copy";

const copy = PAGE_SEO_ZH.pricing;

export const metadata = buildMetadata({
  title: copy.title,
  description: copy.description,
  path: "/zh/pricing",
  locale: "zh",
});

const STEPS = [
  { title: "1. 发送 RFQ", desc: "数量、机型、目的国、电压、连接方式（USB/OTG）。" },
  { title: "2. 书面 BOM", desc: "机箱、Hub 档位、PSU、散热、可选设备 — proforma 确认。" },
  { title: "3. 付款", desc: "USDT (TRC20)、银行、Wise、PayPal（按报价单）。" },
  { title: "4. 组装烧机", desc: "标准箱 loaded burn-in，QC 清单签字。" },
  { title: "5. 出口", desc: "空运/海运，商业发票重量，可要求装箱照片。" },
];

const TIERS = [
  { name: "样品 / 小批", desc: "MOQ 1 — 验证安装与散热后再大批量。", from: "空机箱约 $265 起（参考价）" },
  { name: "标准部署", desc: "多箱 Android 农场或 QA 实验室 — BOM 匹配节点清单。", from: "按 BOM 报价" },
  { name: "批量 / 机柜项目", desc: "多箱或定制机柜 — 批量价、分批发货、专属对接。", from: "项目报价" },
];

export default function ZhPricingPage() {
  return (
    <>
      <PageHero
        eyebrow="手机农场 B2B"
        title={copy.heroTitle}
        description={copy.heroDesc}
        image={IMAGES.phoneFarmBox.hero}
        imageAlt="手机农场报价流程"
        theme="light"
      />
      <Section>
        <p className="text-sm text-[var(--text-muted)] max-w-3xl mb-10">{REFERENCE_PRICE_DISCLAIMER}</p>
        <SectionHeader title="报价流程" description="参考价用于预算；最终价格在 proforma 上锁定。" />
        <div className="grid md:grid-cols-5 gap-4 mb-16">
          {STEPS.map((s) => (
            <Surface key={s.title} padding="md" className="h-full">
              <h3 className="font-bold text-slate-900 text-sm mb-2">{s.title}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{s.desc}</p>
            </Surface>
          ))}
        </div>
        <SectionHeader title="采购档位" />
        <div className="grid md:grid-cols-3 gap-6">
          {TIERS.map((t) => (
            <Surface key={t.name} padding="md" className="h-full border-orange-100">
              <h3 className="font-bold text-lg text-slate-900">{t.name}</h3>
              <p className="text-sm text-[var(--text-secondary)] mt-2">{t.desc}</p>
              <p className="text-sm font-semibold text-orange-700 mt-4">{t.from}</p>
            </Surface>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link href={contactHref("zh")} className="btn-primary px-8">
            索取报价
          </Link>
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary px-8">
            WhatsApp
          </a>
          <Link href="/pricing" hrefLang="en" className="btn-outline px-8">
            English pricing
          </Link>
        </div>
      </Section>
    </>
  );
}
