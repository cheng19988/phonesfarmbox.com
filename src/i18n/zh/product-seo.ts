/** Chinese SEO titles & descriptions — 手机农场 / 手机群控 / 主板机 */
export const PRODUCT_SEO_ZH: Record<string, { title: string; description: string; nameZh: string; summaryZh: string }> = {
  "phone-farm-box": {
    title: "手机农场盒子厂家 — 群控机箱 · 一台电脑控制多设备",
    description:
      "广州手机农场盒子厂家 — Android 手机群控机箱，集成 USB Hub、电源、散热。一台电脑批量控制多台真机；MOQ 1 样品；书面 BOM 确认后付款。",
    nameZh: "手机农场盒子（Phone Farm Box）",
    summaryZh: "工业级群控机箱，集中供电、USB 集线、主动散热，适合 TikTok、Instagram、电商多账号与 App 测试。",
  },
  "motherboard-box": {
    title: "主板机手机农场 — Android 主板集群机箱",
    description:
      "主板机（无屏无电池）手机农场硬件 — 更高节点密度、更低单槽成本。广州厂家出口，配置与 BOM 报价前书面确认。",
    nameZh: "主板机盒子（Motherboard Box）",
    summaryZh: "无屏 Android 主板节点集群，适合大规模手机群控与自动化测试。",
  },
  "android-phone-farm": {
    title: "Android 手机农场整箱方案 —  turnkey 硬件 BOM",
    description:
      "Android 手机农场 turnkey 方案 — 机箱、Hub 档位、散热按机型清单匹配。广州手机农场厂家，全球空运/海运出口。",
    nameZh: "Android 手机农场",
    summaryZh: "按目标机型组装的 Android 群控整箱方案。",
  },
  "iphone-phone-farm": {
    title: "iPhone 手机农场 — 批量控制多台 iPhone",
    description:
      "iPhone 手机农场硬件 — 一台管理界面控制多台真机。机型组合、Hub 拓扑、主机方案报价前确认。广州厂家全球发货。",
    nameZh: "iPhone 手机农场",
    summaryZh: "批量 iPhone 群控布局，机型与线材方案报价确认。",
  },
  "real-device-phone-farm": {
    title: "真机手机农场 — 多箱机房级项目 BOM",
    description:
      "多箱真机手机农场项目 SKU — 含布局图、分批发货选项与单一项目对接。适合机房级手机群控部署。",
    nameZh: "真机手机农场（多箱项目）",
    summaryZh: "机房级多箱手机农场标准化部署方案。",
  },
  "empty-box-chassis": {
    title: "空机箱 DIY 手机农场 — 扩展群控机架",
    description:
      "空手机农场机箱 — 工业外壳、风扇位、Hub 槽位。适合 DIY 扩展现有 Android 手机农场；安装尺寸报价确认。",
    nameZh: "空机箱（DIY）",
    summaryZh: "仅机箱，风扇/电源/Hub 另配或套装。",
  },
  "usb-hub": {
    title: "手机农场 USB Hub 服务器 — 多口集线器",
    description:
      "工业 USB Hub — 10/16/20+ 口档位，稳定多设备连接。手机农场配套设备，口数与 BOM 报价确认，广州全球出口。",
    nameZh: "USB Hub 集线器",
    summaryZh: "群控机箱配套工业 Hub，口数按节点数报价。",
  },
  "power-supply-solution": {
    title: "手机农场电源模块 — 统一供电 PSU",
    description:
      "手机农场统一电源 — 按节点清单与 110V/220V 区域定 wattage。机架级 Android/iPhone 农场配套。",
    nameZh: "电源模块（PSU）",
    summaryZh: "单路墙插驱动整箱节点，功率报价确认。",
  },
  "cooling-solution": {
    title: "手机农场散热风扇套件",
    description:
      "手机农场散热套件 — 风扇数量与风量按机箱代次确认。高密度 Android 设备农场必备。",
    nameZh: "散热风扇套件",
    summaryZh: "主动风冷，避免长时间群控过热。",
  },
  "network-equipment": {
    title: "手机农场网络设备 — OTG 以太网 · 多设备 LAN",
    description:
      "路由器、交换机、OTG 以太网模块 — 手机农场机房分段组网，稳定多设备网络。硬件出口广州。",
    nameZh: "网络设备",
    summaryZh: "按设备组分 IP/代理规划的网络硬件。",
  },
  "custom-cabinet": {
    title: "定制机柜手机农场 — 2U+ 机架方案",
    description:
      "定制机架/落地机柜 — 企业级手机农场，含 PDU 规划、理线与海运木箱选项。",
    nameZh: "定制机柜",
    summaryZh: "机房级大规模手机群控机柜。",
  },
  "remote-control-setup": {
    title: "手机农场远程安装 — 群控软件交接",
    description:
      "可选远程安装 — USB/OTG 接线验证、群控软件交接。范围按设备数量写在 proforma 上。",
    nameZh: "远程安装服务",
    summaryZh: "发货后远程协助群控上线，不含代运营账号。",
  },
};

export function getProductSeoZh(slug: string, fallbackName: string, fallbackDesc: string) {
  const entry = PRODUCT_SEO_ZH[slug];
  return {
    title: entry?.title ?? `${fallbackName} — 手机农场硬件`,
    description: entry?.description ?? fallbackDesc,
    nameZh: entry?.nameZh ?? fallbackName,
    summaryZh: entry?.summaryZh ?? fallbackDesc,
  };
}

export const PAGE_SEO_ZH = {
  home: {
    title: "手机农场盒子厂家 — Phone Farm · Phone Farm Box · 广州群控硬件",
    description:
      "Phones Farm Box 广州 phone farm manufacturer — 手机农场、Phone Farm Box、Phone Farming、Mobile Device Farm、Android Farm、TikTok Phone Farm 真机群控硬件。MOQ 1 · 全球发货 · 报价确认后付款。",
    heroTitle: "工业级手机农场硬件，为规模化群控而生",
    heroDesc:
      "广州手机农场盒子厂家 — 群控机箱、主板机机架、USB Hub、电源与散热。一台电脑控制多台真机；配置与交期在书面 BOM 确认后再生产。",
    eyebrow: "广州 · 2017 年起 · B2B 手机农场硬件",
  },
  products: {
    title: "手机农场产品目录 — 群控盒子 · 主板机 · 配件",
    description:
      "手机农场硬件目录 — Android/iPhone 群控机箱、主板机、USB Hub 服务器、OTG 网络设备。广州厂家；参考价 USD，最终报价书面确认。",
    heroTitle: "手机农场硬件目录",
    heroDesc: "群控机箱、整箱方案、主板机、Hub、电源、散热与远程安装 — 列表价为参考价，槽位与 Hub 档位报价确认。",
  },
  about: {
    title: "手机农场厂家 — 广州 Phones Farm Box 出口指南",
    description:
      "2017 年起广州手机农场盒子厂家 — 真机群控硬件、USB 集线、烧机 QC、全球空运海运。非云手机 SaaS，B2B 报价制。",
    heroTitle: "广州手机农场硬件厂家",
    heroDesc: "我们组装并出口真机群控机箱 — 书面 BOM、烧机检测、出口包装，服务海外 B2B 买家。",
  },
  contact: {
    title: "索取手机农场硬件报价 — RFQ",
    description:
      "发送手机农场采购需求 — 数量、机型、目的国、电压。书面 BOM 与交期确认后再付款。WhatsApp / Telegram 跟进。",
    heroTitle: "索取硬件报价",
    heroDesc: "提供数量、平台组合、发货国家与时间线。我们返回书面 BOM、连接方式与交期 — 无需注册账户。",
  },
  faq: {
    title: "手机农场常见问题 — 群控硬件 FAQ",
    description:
      "手机农场盒子、主板机、MOQ、USB/OTG 连接、110V/220V 电源、空机箱 vs 含机、全球发货 — 买家常见问题。",
    heroTitle: "手机农场硬件 FAQ",
    heroDesc: "群控机箱、采购、付款与售后 — 海外 B2B 买家最常问的问题。",
  },
  buyerSpecs: {
    title: "手机农场采购规格 — 尺寸 · 功耗 · 交期 · 质保",
    description:
      "手机农场买家规格表 — 设备尺寸、重量、功耗、电压、支持机型、一台电脑控制盒数、交期、包装、质保与远程安装。",
    heroTitle: "采购规格（中英对照）",
    heroDesc: "下单前买家常问的 12 项硬件规格 — 尺寸、功耗、机型、交期、质保等。",
  },
  pricing: {
    title: "手机农场报价流程 — BOM · 形式发票 · 付款",
    description:
      "手机农场 B2B 报价流程 — 书面 BOM、形式发票、USDT/银行付款、空运海运、烧机 QC。参考价非最终价。",
    heroTitle: "报价与交付流程",
    heroDesc: "参考价用于预算沟通；最终槽位、Hub、运费在 proforma 上确认后再组装。",
  },
  blog: {
    title: "手机农场指南与文章 — 群控硬件采购",
    description:
      "手机农场硬件指南 — 群控搭建、USB Hub 选型、电源规划、出口物流、TikTok/Instagram 多账号设备农场采购要点。",
    heroTitle: "手机农场采购指南",
    heroDesc: "群控硬件、RFQ 清单、出口与网络规划 — 面向 B2B 买家的中文索引（详细技术文以英文版为准）。",
  },
  scenarios: {
    title: "手机农场应用场景 — TikTok · 电商 · 多账号",
    description:
      "真机手机农场场景 — TikTok、Instagram、Facebook、YouTube、Telegram、WhatsApp 与跨境电商多账号群控硬件说明。",
    heroTitle: "平台应用场景",
    heroDesc: "多账号团队在 TikTok、社媒、电商 App 上使用真机群控的部署说明。",
  },
  help: {
    title: "手机农场帮助中心 — 安装 · 网络 · 付款",
    description:
      "手机农场盒子安装、网络与代理、群控软件、USDT 付款、故障排查 — 硬件买家帮助文档索引。",
    heroTitle: "帮助中心",
    heroDesc: "安装、网络、群控与付款 — 详细步骤见各英文帮助文（持续补充中文摘要）。",
  },
} as const;
