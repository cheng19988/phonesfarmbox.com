export type BuyerSpecLink = { label: string; href: string };

export type BuyerSpecItem = {
  id: string;
  questionEn: string;
  questionZh: string;
  shortAnswer: string;
  bullets: string[];
  links: BuyerSpecLink[];
};

/** Twelve procurement questions buyers ask before PO — indexed for /buyer-specs and llms.txt */
export const BUYER_SPECS_ITEMS: BuyerSpecItem[] = [
  {
    id: "dimensions",
    questionEn: "Device dimensions (L × W × H)",
    questionZh: "设备尺寸",
    shortAnswer:
      "Chassis outer dimensions depend on slot count, phone height, and generation — confirmed on written quote and optional datasheet. We do not publish one fixed size for all SKUs.",
    bullets: [
      "Standard Phone Farm Box: slot layout and rack footprint confirmed before build.",
      "Empty chassis / custom cabinet: send board or phone dimensions — mount spacing on datasheet.",
      "Export shipping dimensions (carton L×W×H) provided after packing plan is confirmed — useful for freight booking.",
      "Request “datasheet with dimensions” on your RFQ if procurement needs sign-off before payment.",
    ],
    links: [
      { label: "Phone Farm Box product", href: "/products/phone-farm-box" },
      { label: "Packing list verification", href: "/help/packing-list-verification" },
      { label: "Custom cabinet SKU", href: "/products/custom-cabinet" },
    ],
  },
  {
    id: "weight",
    questionEn: "Weight (packed / invoice)",
    questionZh: "重量",
    shortAnswer:
      "Packed weight varies by slot count, phones on BOM, and crated vs carton export. Commercial invoice weight and carton size are confirmed before shipment.",
    bullets: [
      "Empty chassis orders weigh less than phone-included or turnkey builds.",
      "Custom cabinets and multi-box sea freight: weight on proforma for forwarder quotes.",
      "Packing photos can include scale reference when requested on RFQ.",
      "Air vs sea freight planning: see export shipping guide for $/kg tradeoffs.",
    ],
    links: [
      { label: "Delivery process", href: "/help/delivery-process-phone-farm-hardware" },
      { label: "Export shipping (air vs sea)", href: "/blog/export-shipping-air-vs-sea-phone-farm" },
      { label: "Packing list verification", href: "/help/packing-list-verification" },
    ],
  },
  {
    id: "power",
    questionEn: "Power consumption",
    questionZh: "功耗",
    shortAnswer:
      "PSU wattage is sized from your BOM — node type, charge state, and workload. Plan with ~8 W per Android node as a starting range; final load note on proforma.",
    bullets: [
      "Each chassis has a unified AC input; internal distribution to slots and hub.",
      "Mirror-heavy farms draw more host-side power; headless motherboard nodes often lower per slot.",
      "Room HVAC plus chassis fan kit both matter above ~30°C ambient.",
      "Use the Power Consumption Estimator with your target node count before RFQ.",
    ],
    links: [
      { label: "Power consumption estimator", href: "/tools/power-consumption-estimator" },
      { label: "Power & voltage for export", href: "/help/power-voltage-export-orders" },
      { label: "Rack power planning blog", href: "/blog/phone-farm-power-planning-rack" },
    ],
  },
  {
    id: "voltage",
    questionEn: "Voltage & plug standard",
    questionZh: "电压",
    shortAnswer:
      "110 V, 220 V, or 220–240 V regional PSU and plug type confirmed on quote from destination country — not assumed from catalog list price.",
    bullets: [
      "North America, EU, UK, AU, and SEA plug standards supported when declared on RFQ.",
      "PSU module and mains lead matched to proforma — wattage sized from device list.",
      "Mixed-voltage rooms (e.g. US gear in EU facility): note on inquiry for adapter vs native PSU.",
    ],
    links: [
      { label: "FAQ — voltage regions", href: "/faq" },
      { label: "110V vs 220V guide", href: "/blog/voltage-region-110v-220v-phone-farm" },
      { label: "Power & voltage help", href: "/help/power-voltage-export-orders" },
    ],
  },
  {
    id: "phone-models",
    questionEn: "Supported phone models",
    questionZh: "支持什么手机型号",
    shortAnswer:
      "Android and iPhone paths are quoted per model list — board footprint, USB/OTG mode, ROM path, and SIM/camera needs. Catalog gallery shows common mounts; not an exclusive-only list.",
    bullets: [
      "Send target models on RFQ — we confirm slot compatibility and power draw before quote.",
      "One phone family per chassis is typical; mixed models may need hybrid wiring on quote.",
      "Motherboard / headless nodes: board model list and footprint required.",
      "iPhone farms use separate chassis and host tooling — confirmed on iPhone SKU proforma.",
    ],
    links: [
      { label: "Phone Farm Box + model gallery", href: "/products/phone-farm-box" },
      { label: "First box setup guide", href: "/help/account-setup-first-box" },
      { label: "iPhone farm SKU", href: "/products/iphone-phone-farm" },
    ],
  },
  {
    id: "boxes-per-pc",
    questionEn: "How many boxes can one PC control?",
    questionZh: "一台电脑控制多少盒",
    shortAnswer:
      "Most buyers run 1 control PC per 1–3 standard Android boxes when using screen mirroring; ADB-light workflows may reach 4–6 boxes with PCIe USB controllers. Each box uses one hub uplink to the host.",
    bullets: [
      "Plan by total mirrored nodes (often 20–40 Android nodes per well-specced PC) as much as box count.",
      "One industrial hub tree per box → one dedicated host USB3 uplink; avoid consumer hub daisy-chains.",
      "Heavy scripts, live mirror, or iPhone stacks usually need a second PC sooner.",
      "Send box count, nodes per box, and software name on RFQ — host sizing note on proforma.",
    ],
    links: [
      { label: "Full guide: one PC, how many boxes?", href: "/help/one-pc-how-many-phone-farm-boxes" },
      { label: "Host PC requirements", href: "/help/host-pc-requirements-phone-farm" },
      { label: "USB port calculator", href: "/tools/usb-port-requirement-calculator" },
    ],
  },
  {
    id: "lead-time",
    questionEn: "Lead time & delivery",
    questionZh: "交货时间",
    shortAnswer:
      "In-stock standard chassis: 3–5 business days dispatch after payment. Custom node mix: 7–15 days. iPhone / custom cabinet longer. Air +3–7 days transit; sea 15–30 days.",
    bullets: [
      "Written quote includes production slot and ship-by window before you pay.",
      "Bulk phased ship (chassis sea, devices air) available on project SKUs.",
      "Express courier or sea freight per buyer instruction on proforma.",
      "Import duties buyer responsibility unless DDP stated on invoice.",
    ],
    links: [
      { label: "How to order", href: "/how-to-order" },
      { label: "Lead time & scheduling blog", href: "/blog/lead-time-phone-farm-production-scheduling" },
      { label: "Delivery process help", href: "/help/delivery-process-phone-farm-hardware" },
    ],
  },
  {
    id: "packing",
    questionEn: "Packing method",
    questionZh: "包装方式",
    shortAnswer:
      "Foam-lined export cartons with shock padding; rack/cabinet orders may use crated freight. Packing list matched to proforma BOM — confirmed before export packing closes.",
    bullets: [
      "Typical lines: chassis, hub/wiring kit, PSU, cooling, cables, software notes per order terms.",
      "Phone-included builds list devices separately on packing list when agreed.",
      "Sea freight multi-box: pallet or crate plan on quote.",
      "Commercial invoice includes weights for forwarder booking.",
    ],
    links: [
      { label: "Packing list verification", href: "/help/packing-list-verification" },
      { label: "What you receive on quote", href: "/how-to-order" },
      { label: "Overseas delivery service", href: "/services/overseas-delivery" },
    ],
  },
  {
    id: "warranty",
    questionEn: "Warranty duration",
    questionZh: "质保多久",
    shortAnswer:
      "Chassis and PSU: typically 12 months against manufacturing defects. Fan kits often 6 months. Phones follow supply terms on invoice. Exact text on your proforma.",
    bullets: [
      "Misuse, unauthorized mods, and buyer-caused damage excluded.",
      "OEM network gear: pass-through supplier terms where applicable.",
      "Remote setup: re-training window (e.g. 14 days) when listed on service line.",
      "Extended maintenance optional for 24/7 production racks.",
    ],
    links: [
      { label: "Warranty & after-sales help", href: "/help/warranty-after-sales-phone-farm-hardware" },
      { label: "Warranty & RMA blog", href: "/blog/warranty-rma-export-phone-farm" },
      { label: "Terms of service", href: "/terms" },
    ],
  },
  {
    id: "rma",
    questionEn: "Defects, DOA & returns",
    questionZh: "坏了怎么处理",
    shortAnswer:
      "Report DOA within 48 hours with photos. Manufacturing defects within 7 days of receipt. RMA replacement or parts after inspection — return freight rules on proforma.",
    bullets: [
      "Shipping damage: photos of carton and product within 48 hours.",
      "Spare fan/PSU/cable lines on first bulk order reduce air-freight on single-part RMA.",
      "Custom or deployed hardware may require buyer-paid return freight.",
      "We do not guarantee platform account outcomes — hardware RMA separate from workflow results.",
    ],
    links: [
      { label: "Warranty & after-sales help", href: "/help/warranty-after-sales-phone-farm-hardware" },
      { label: "Refund policy", href: "/refund" },
      { label: "Maintenance service", href: "/services/maintenance-support" },
    ],
  },
  {
    id: "packing-photos",
    questionEn: "Pre-shipment photos",
    questionZh: "发货前能不能拍照",
    shortAnswer:
      "Yes — request on RFQ or quote reply. Carton exterior and foam layout photos provided after packing plan is confirmed, often before shipment for bulk buyers.",
    bullets: [
      "Contact form includes “packing photo” checkbox.",
      "Quote process step 5: assembly, test & packing photos when requested.",
      "Packing list sign-off against proforma before export packing closes.",
      "Shipping size/weight shared alongside photos for freight approval.",
    ],
    links: [
      { label: "Request a quote", href: "/contact" },
      { label: "How to order — step 5", href: "/how-to-order" },
      { label: "Packing list verification", href: "/help/packing-list-verification" },
    ],
  },
  {
    id: "remote-setup",
    questionEn: "Remote installation / setup",
    questionZh: "能不能远程安装",
    shortAnswer:
      "Yes — optional remote setup service after delivery. Covers USB/hub wiring, device visibility, and batch-control handoff. Does not include operating your accounts or proxies.",
    bullets: [
      "Buyer prepares: powered hardware, host PC with admin access, stable internet for screen share.",
      "Scope tied to device count and session length on proforma.",
      "Pre-ship validation in Guangzhou; remote session usually post-delivery when host PC is ready.",
      "Product SKU: Remote Control Setup — add on RFQ or order separately.",
    ],
    links: [
      { label: "Remote setup scope help", href: "/help/remote-setup-support-scope" },
      { label: "Remote setup product", href: "/products/remote-control-setup" },
      { label: "Remote configuration service", href: "/services/remote-control-configuration" },
    ],
  },
];

export const BUYER_SPECS_INTRO = {
  titleEn: "Buyer specifications — procurement FAQ",
  titleZh: "采购规格说明",
  description:
    "Twelve questions export buyers ask before purchase — dimensions, weight, power, voltage, models, host PC sizing, lead time, packing, warranty, RMA, packing photos, and remote setup. Reference ranges where applicable; final BOM on written quote.",
};
