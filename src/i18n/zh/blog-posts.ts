/** Chinese blog posts mirrored under /zh/blog/[slug] */
export type ZhBlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
};

export const ZH_BLOG_SLUGS = [
  "what-is-phone-farm-phone-farming-guide",
  "phone-farm-hardware-manufacturer-guide",
  "tiktok-phone-farm-android-farm-setup",
] as const;

export const ZH_BLOG_POSTS: ZhBlogPost[] = [
  {
    slug: "what-is-phone-farm-phone-farming-guide",
    title: "什么是手机农场（Phone Farm）？Phone Farming、Mobile Farm 与 Mobile Device Farm 详解",
    category: "盒子知识",
    date: "2026-06-14",
    excerpt:
      "手机农场、Phone Farming、Mobile Farm、Mobile Device Farm — 真机群控硬件与云手机的区别，以及 B2B 买家如何报价。",
    content: `海外采购与中文行业搜索里，**手机农场（Phone Farm）**、**Phone Farming**、**Mobile Farm**、**Mobile Device Farm** 常指同一类基础设施：在**真机硬件**上规模化运行多台手机，而不是租用云端虚拟 Android。

**手机农场（Phone Farm）是什么？**
**Phone Farm / 手机农场** 指多台实体智能手机或主板节点，由一台或多台主机 PC 集中群控。工业部署通常使用 **Phone Farm Box（手机农场盒子）** — 集成统一电源、USB Hub 接线、主动散热与群控软件。

**Phone Farming（手机农场运营）**
**Phone Farming** 指在上述硬件上批量运行设备 — App 兼容性测试矩阵、移动设备实验室、或多账号移动端工作流（按设备组隔离）。这是一种**基础设施模式**，不是某个单一 App。以硬件为先的 Phone Farming 用可机架化的 **Phone Farm Hardware** 替代桌面散乱充电与线材。

**Mobile Farm 与 Mobile Device Farm**
**Mobile Farm（移动农场）** 是同一概念的简称 — 多台移动节点组成可管理堆栈。**Mobile Device Farm（移动设备农场）** 常指机房级规划：多箱 chassis、多台主机、USB 拓扑、网络分段与分批发货。Phones Farm Box 从单箱 SKU 报价到多箱项目 BOM 均可覆盖。

**Phone Farm Box 与整站农场**
- **Phone Farm Box** = 单个工业机箱 SKU（槽位数报价确认）
- **Phone Farm / Mobile Device Farm** = 整体部署（箱子 + Hub + 电源 + 网络 + 主机）

**不是云手机 SaaS**
云手机在共享服务器上租用虚拟实例。我们出口的是**真机 Phone Farm Hardware** — 本地供电、接线、群控，付款前提供书面 BOM。

**采购清单（RFQ 建议包含）**
1. 目标节点数量与机型
2. Android Farm 或 iPhone Farm（通常分箱型）
3. USB / OTG / 混合连接方式
4. 110V / 220V 电压区域与目的国
5. 空机箱或含机（可选报价）

[索取报价](/zh/contact/) · [术语：手机农场](/zh/glossary/phone-farm) · [采购规格](/zh/buyer-specs/) · [产品目录](/zh/products/)`,
  },
  {
    slug: "phone-farm-hardware-manufacturer-guide",
    title: "Phone Farm Hardware 与手机农场厂家 — B2B 采购指南",
    category: "采购与物流",
    date: "2026-06-14",
    excerpt:
      "如何评估 Phone Farm Manufacturer（手机农场厂家）、Phone Farm Box SKU 与完整 Phone Farm Hardware BOM — 机箱、Hub、电源、散热、广州出口。",
    content: `采购团队搜索 **Phone Farm Hardware** 与 **Phone Farm Manufacturer** 时，需要的是可机架化的真机基础设施 — 与纯群控软件商或云手机 SaaS 不同。

**Phone Farm Hardware 包含什么？**
- **Phone Farm Box** 群控机箱（真机支架）
- **Motherboard Box** 主板机机架（无屏 Android 节点）
- 工业 **USB Hub 服务器**（10 / 16 / 20+ 口档位，报价确认）
- **电源（PSU）** 与 **散热** 套件，按节点负载定规格
- **网络设备** — 路由器、交换机、OTG 以太网分流
- **定制机柜** — 机房级 Mobile Device Farm 项目
- 可选 **远程安装** — 接线验证与群控软件交接

**如何选择手机农场厂家？**
可靠的 **Phone Farm Manufacturer** 应提供：
1. 付款前 **书面 BOM**（无隐藏增项）
2. 标准箱烧机 QC 清单
3. 出口装箱重量与商业发票
4. 范围清晰 — 仅硬件或含可选安装服务
5. MOQ 透明（我们许多 SKU 支持 MOQ 1 样品）

Phones Farm Box 自 **2017 年起在广州** 组装并出口，是 **Phone Farm Box 厂家** — 非账号代运营或流量保证服务。

**Phone Farm Box 与配件**
多数买家先采购一台 **Phone Farm Box** 及匹配的 Hub/电源/散热档位，再堆叠扩容。DIY 扩展可用 **空机箱** SKU。企业买家可申请 **定制机柜** 图纸。

**报价优先流程**
RFQ → 配置审核 → 形式发票 → 付款 → 组装 → QC → 全球空运/海运。目录参考价在 BOM 确认前非最终价。

[联系索取 RFQ](/zh/contact/) · [关于厂家](/zh/about/) · [产品目录](/zh/products/) · [常见问题](/zh/faq/)`,
  },
  {
    slug: "tiktok-phone-farm-android-farm-setup",
    title: "TikTok Phone Farm 与 Android Farm — 群控硬件搭建指南",
    category: "应用场景",
    date: "2026-06-14",
    excerpt:
      "用真机搭建 TikTok Phone Farm 或 Android Farm — 机箱选型、USB Hub、网络 IP 规划，向手机农场厂家采购 Phone Farm Hardware。",
    content: `计划搭建 **TikTok Phone Farm** 或 **Android Farm** 的团队，需要自有的 **Phone Farm Hardware** — 工业机箱、稳定 USB 树形拓扑、按组分网络路由 — 而不是桌面散乱手机。

**TikTok Phone Farm（硬件层）**
**TikTok 手机农场** 在 **Phone Farm Box** 机箱内运行真机 Android 或 iPhone 节点。按组规划网络时，不同账号组可运行在独立物理设备上。我们供应机箱与接线；平台规则与账号运营由买家负责。

**Android Farm 组成**
1. **Phone Farm Box** 或 **Motherboard Box** 机箱（槽位报价确认）
2. 与节点数匹配的工业 **USB Hub** 档位
3. 按目的国 **110V/220V** 选型的 **PSU**
4. 24/7 满载运行的 **散热** 风扇套件
5. 镜像或 ADB 重负载下配置足够的 USB 控制器主机 PC
6. 可选 **网络设备** — OTG 以太网或分段 LAN

**Mobile Farm 扩容**
先买一箱验证安装兼容与散热，再增加机箱提升 **Mobile Device Farm** 密度。机房级项目使用 **定制机柜** SKU。

**典型 Phone Farming 流程**
- 主机 PC 群控软件（买家自备或报价范围确认）
- 批量装 APK、脚本 UI 或按组镜像操作
- 代理/住宅 IP 规划写在报价工作表 — 代理服务由买家选择

**厂家支持**
Phones Farm Box 是广州 **Phone Farm Manufacturer** — 书面 BOM、烧机 QC、发货后可选远程安装。许多目录 SKU 支持 MOQ 1 样品。

[索取报价](/zh/contact/) · [TikTok 场景说明（英文详文）](/scenarios/tiktok) · [Android 手机农场产品](/zh/products/android-phone-farm) · [Phone Farm Hardware 词条](/zh/glossary/phone-farm-hardware)`,
  },
];

export function getZhBlogPost(slug: string) {
  return ZH_BLOG_POSTS.find((p) => p.slug === slug);
}

export function isZhBlogSlug(slug: string) {
  return ZH_BLOG_SLUGS.includes(slug as (typeof ZH_BLOG_SLUGS)[number]);
}
