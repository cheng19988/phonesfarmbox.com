import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { buildMetadata } from "@/lib/seo";
import { PAGE_SEO_ZH } from "@/i18n/zh/product-seo";
import { CONTACT, SITE } from "@/lib/config";
import { IMPORTED } from "@/lib/images";
import { ContactForm } from "@/app/contact/contact-form";
import { QuoteFirstNotice } from "@/components/quote-first-notice";
import { JsonLd } from "@/components/shared";
import { contactPageJsonLd } from "@/lib/seo";

const copy = PAGE_SEO_ZH.contact;

export const metadata = buildMetadata({
  title: copy.title,
  description: copy.description,
  path: "/zh/contact",
  locale: "zh",
});

const CHECKLIST_ZH = [
  "目标产品 / SKU",
  "目的国与运输方式（空运/海运）",
  "预计设备数量",
  "平台（Android / iPhone / 混合）",
  "连接方式：USB / OTG / 混合",
  "电压：110V / 220V",
  "空机箱或含机",
  "目标机型",
  "是否需要 datasheet / 装箱照片",
  "付款方式：USDT / 银行 / Wise",
  "用途与 WhatsApp / Telegram 联系方式",
];

export default function ZhContactPage() {
  return (
    <>
      <JsonLd
        data={contactPageJsonLd(
          "发送手机农场采购需求 — 数量、机型、目的国。书面 BOM 与交期确认后再付款。"
        )}
      />
      <PageHero
        eyebrow={`${SITE.name} · B2B 手机农场硬件`}
        title={copy.heroTitle}
        description={copy.heroDesc}
        image={IMPORTED.homeHero}
        imageAlt="手机农场硬件报价"
        theme="light"
      />
      <Section>
        <div className="mb-8 max-w-3xl">
          <QuoteFirstNotice />
        </div>
        <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
          <ContactForm />
          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="card p-6">
              <h2 className="font-bold text-slate-900 mb-3">RFQ 请包含</h2>
              <ul className="space-y-2 text-sm text-slate-600">
                {CHECKLIST_ZH.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-orange-600 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h2 className="font-bold text-slate-900 mb-3">直接联系</h2>
              <p className="text-sm text-slate-600 mb-4">周一至周六 9:00–18:00 (GMT+8)</p>
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center text-sm mb-3 block">
                WhatsApp {CONTACT.whatsapp}
              </a>
              <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-orange-700 hover:underline block">
                Telegram {CONTACT.telegram}
              </a>
            </div>
            <p className="text-sm text-[var(--text-muted)]">
              <Link href="/contact" hrefLang="en" className="text-orange-700 hover:underline">
                English contact form
              </Link>
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
