/** Chinese glossary terms under /zh/glossary/[slug] */
export type ZhGlossaryTerm = {
  slug: string;
  term: string;
  termEn?: string;
  shortDef: string;
  definition: string;
  relatedSlugs?: string[];
};

export const ZH_GLOSSARY_SLUGS = [
  "phone-farm",
  "phone-farming",
  "mobile-farm",
  "mobile-device-farm",
  "android-farm",
  "tiktok-phone-farm",
  "phone-farm-hardware",
  "phone-farm-manufacturer",
] as const;

export const ZH_GLOSSARY_TERMS: ZhGlossaryTerm[] = [
  {
    slug: "phone-farm",
    term: "手机农场",
    termEn: "Phone Farm",
    shortDef: "多台真机/mobile 节点集中群控的规模化硬件架构。",
    definition:
      "手机农场（Phone Farm）指在同一套基础设施下运行多台实体智能手机或主板节点 — 通常采用工业群控机箱，统一供电、USB Hub 接线、散热，并由主机 PC 批量控制。适用于 App QA、移动设备实验室或多账号移动端工作流。Phones Farm Box 供应广州出口的硬件层；槽位与 BOM 在报价前书面确认。",
    relatedSlugs: ["phone-farm-box", "phone-farming", "mobile-device-farm"],
  },
  {
    slug: "phone-farming",
    term: "Phone Farming（手机农场运营）",
    termEn: "Phone Farming",
    shortDef: "在 Phone Farm Hardware 上规模化运行多台设备的运营模式。",
    definition:
      "Phone Farming 描述在工业手机农场硬件上批量运营多台真机 — 不是云手机订阅或单一 App 功能。硬件优先的 Phone Farming 用 Phone Farm Box、Hub、电源与散热替代桌面散乱充电。Phones Farm Box 销售机箱与配件；不包含代运营买家账号。",
    relatedSlugs: ["phone-farm", "phone-farm-hardware", "android-farm"],
  },
  {
    slug: "mobile-farm",
    term: "Mobile Farm（移动农场）",
    termEn: "Mobile Farm",
    shortDef: "与 Phone Farm 同义 — 多台移动节点组成可管理硬件堆栈。",
    definition:
      "Mobile Farm 是行业简称，与手机农场、Mobile Device Farm 指同一类真机群控基础设施。采购时对应 Phone Farm Box SKU、主板机、Hub 与网络配件 — 均在书面 BOM 确认后组装。",
    relatedSlugs: ["phone-farm", "mobile-device-farm"],
  },
  {
    slug: "mobile-device-farm",
    term: "Mobile Device Farm（移动设备农场）",
    termEn: "Mobile Device Farm",
    shortDef: "机房/机架级真机移动基础设施，用于 QA 或多账号群控。",
    definition:
      "Mobile Device Farm 常指多箱 chassis、主机 PC、USB 拓扑与可选网络分段的机房级部署。Phones Farm Box 提供单箱 SKU 到多箱项目 BOM（含布局说明）— 适合 App 兼容性实验室或 TikTok 风格多设备真机方案。",
    relatedSlugs: ["phone-farm-box", "phone-farm-hardware"],
  },
  {
    slug: "android-farm",
    term: "Android Farm（Android 手机农场）",
    termEn: "Android Farm",
    shortDef: "多台真机 Android 手机或主板节点，由 PC 群控。",
    definition:
      "Android Farm 通过 USB/ADB 或 OTG 路径，由主机 PC 控制机箱内的多台物理 Android 节点。Turnkey Android Farm BOM 按报价机型匹配 Hub 档位与散热。iPhone Farm 为独立产品线 — 混合机房通常按箱型分区。",
    relatedSlugs: ["phone-farm-box", "android-phone-farm"],
  },
  {
    slug: "tiktok-phone-farm",
    term: "TikTok Phone Farm（TikTok 手机农场）",
    termEn: "TikTok Phone Farm",
    shortDef: "为 TikTok 多账号场景配置的真机 Phone Farm 硬件。",
    definition:
      "TikTok Phone Farm 指在 Phone Farm Box 等工业机箱内运行真机 Android 或 iPhone — 含电源、Hub、散热与按组分网络规划，供多账号团队在独立硬件上操作。Phones Farm Box 供应广州出口硬件；平台政策与账号运营由买家负责。",
    relatedSlugs: ["tiktok-device-farm", "phone-farm-box", "android-farm"],
  },
  {
    slug: "phone-farm-hardware",
    term: "Phone Farm Hardware（手机农场硬件）",
    termEn: "Phone Farm Hardware",
    shortDef: "机箱、Hub、电源、散热与网络等真机群控硬件总成。",
    definition:
      "Phone Farm Hardware 包括工业 Phone Farm Box、主板机架、USB Hub 服务器、电源模块、散热套件、路由器/OTG 以太网、定制机柜及可选远程安装 — 非云手机 SaaS。Phones Farm Box 是 B2B 手机农场硬件厂家，广州出口，MOQ 从 1 起，付款前书面 proforma。",
    relatedSlugs: ["phone-farm-box", "phone-farm-manufacturer"],
  },
  {
    slug: "phone-farm-manufacturer",
    term: "Phone Farm Manufacturer（手机农场厂家）",
    termEn: "Phone Farm Manufacturer",
    shortDef: "组装并出口 Phone Farm 机箱与接线的工厂。",
    definition:
      "Phone Farm Manufacturer 负责工业外壳组装、USB Hub 与电源接线、烧机 QC 与出口装箱 — 区别于纯群控软件商或云手机提供商。Phones Farm Box 自 2017 年起在广州供应报价制手机农场硬件，支持全球空运与海运。",
    relatedSlugs: ["phone-farm-hardware", "phone-farm-box"],
  },
];

/** Related slug → display label on zh glossary (falls back to slug if no zh term). */
export const ZH_GLOSSARY_RELATED_LABELS: Record<string, string> = {
  "phone-farm-box": "Phone Farm Box（手机农场盒子）",
  "phone-farming": "Phone Farming",
  "mobile-device-farm": "Mobile Device Farm",
  "phone-farm": "手机农场",
  "phone-farm-hardware": "Phone Farm Hardware",
  "android-farm": "Android Farm",
  "tiktok-device-farm": "TikTok Device Farm",
  "phone-farm-manufacturer": "手机农场厂家",
  "android-phone-farm": "Android 手机农场产品",
};

export function getZhGlossaryTerm(slug: string) {
  return ZH_GLOSSARY_TERMS.find((t) => t.slug === slug);
}

export function isZhGlossarySlug(slug: string) {
  return ZH_GLOSSARY_SLUGS.includes(slug as (typeof ZH_GLOSSARY_SLUGS)[number]);
}

export function zhGlossaryRelatedLabel(slug: string): string {
  const term = getZhGlossaryTerm(slug);
  if (term) return term.term;
  return ZH_GLOSSARY_RELATED_LABELS[slug] ?? slug;
}

/** Related slug href — zh term if we have it, else English glossary or zh product. */
export function zhGlossaryRelatedHref(slug: string): string {
  if (isZhGlossarySlug(slug)) return `/zh/glossary/${slug}`;
  if (slug === "android-phone-farm") return "/zh/products/android-phone-farm";
  if (slug === "phone-farm-box") return "/zh/products/phone-farm-box";
  if (slug === "tiktok-device-farm") return "/zh/scenarios";
  return `/glossary/${slug}`;
}
