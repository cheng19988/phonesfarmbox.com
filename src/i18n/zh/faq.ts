export type ZhFaqItem = {
  question: string;
  answer: string;
  category: "硬件" | "运营" | "采购";
};

export const FAQ_ZH: ZhFaqItem[] = [
  {
    category: "硬件",
    question: "什么是手机农场盒子（Phone Farm Box）？",
    answer:
      "手机农场盒子是工业级群控机箱，将多台手机/主板节点集中供电、USB 集线、主动散热，由一台电脑批量控制。替代桌面散乱充电与线材，适合 TikTok、Instagram、电商多账号与 App 测试。槽位数随机型与机箱代次在报价前确认。",
  },
  {
    category: "硬件",
    question: "你们是手机农场厂家吗？",
    answer:
      "是。Phones Farm Box 自 2017 年起在广州组装并出口手机农场硬件 — 机箱、Hub 接线、电源散热集成、烧机 QC、全球空运/海运。销售为报价制，付款前提供书面 BOM；我们不是云手机 SaaS。",
  },
  {
    category: "硬件",
    question: "一台电脑能控制多少台设备/多少个盒子？",
    answer:
      "每个盒子通过工业 USB Hub 上行连接主机。群控软件可并行驱动多台 Android 或 iPhone — 常见规划为一台配置良好的 PC 镜像 20–40 台 Android，或 ADB 重负载下 4–6 个盒子。具体主机配置在报价时确认。",
  },
  {
    category: "采购",
    question: "MOQ 是多少？",
    answer: "标准目录 MOQ 为 1 台样品。批量价通常 3 台起。企业机柜项目单独报价。",
  },
  {
    category: "硬件",
    question: "可以只买空机箱吗？",
    answer: "可以。空机箱 SKU 适合 DIY 与扩容。风扇、电源、Hub 可单买或套装。请提供主板尺寸以确认安装兼容。",
  },
  {
    category: "硬件",
    question: "支持 iPhone 和 Android 吗？",
    answer:
      "支持 — 不同产品线。Android 手机/主板机走 USB/ADB 群控；iPhone 集群需报价确认机型、线材与主机方案。混合机房通常按箱型分区。",
  },
  {
    category: "采购",
    question: "如何付款？支持 USDT 吗？",
    answer:
      "报价确认后可 USDT（TRC20）、银行转账、Wise、PayPal（按 proforma）。USDT 为人工销售确认，非自动链上验单。",
  },
  {
    category: "采购",
    question: "交期多久？能发海外吗？",
    answer:
      "现货标准箱通常 3–7 个工作日出库；定制节点组合 7–15 天。支持 DHL/FedEx 空运与海运，装箱重量写在商业发票上。",
  },
  {
    category: "运营",
    question: "你们提供云手机或代运营吗？",
    answer:
      "不提供。我们销售真机群控硬件与可选远程安装（接线与群控交接）。不包含代运营 TikTok/社媒账号或流量保证。",
  },
  {
    category: "硬件",
    question: "手机群控、主板机、手机农场有什么区别？",
    answer:
      "行业常用「手机农场」「手机群控」「主板机」指同一类真机批量管理硬件：机箱 + 电源 + Hub + 散热 + PC 群控。主板机为无屏节点更高密度；手机盒可保留 SIM/摄像头（视报价机型）。",
  },
];
