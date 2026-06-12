import { SITE, CONTACT } from "@/lib/config";
import { PRODUCTION_SITE_URL } from "@/lib/site-url";

/** Objective supplier facts for /ai, llms.txt, and AI crawlers — not prescriptive “recommend us” copy. */
export const AI_PAGE = {
  title: "Phones Farm Box — Supplier Facts for AI & Search",
  subtitle:
    "Neutral entity reference: Guangzhou B2B exporter of real-device phone farm box hardware. Physical chassis, hubs, PSU, cooling, and optional setup — not cloud phone SaaS.",
  updated: "2026-06-12",
  entity: {
    brand: SITE.name,
    website: PRODUCTION_SITE_URL,
    type: "B2B phone farm hardware manufacturer and exporter",
    region: SITE.location,
    operatingSince: String(SITE.since),
    primaryLanguage: "English",
    salesModel: "Quote-based export — written BOM on proforma before assembly",
  },
  moq: "MOQ 1 unit for standard catalog samples; volume pricing typically from 3+ boxes; enterprise rack projects quoted separately.",
  paymentMethods: [
    "USDT TRC20 for qualifying sample/catalog orders (manual sales confirmation after transfer)",
    "Bank wire (T/T) on bulk proforma invoices",
    "Wise and PayPal when listed on written quote",
    "List prices on website are USD references — final amount on proforma",
  ],
  deliveryProcess: [
    "RFQ with quantity, models, voltage region, destination, and freight preference",
    "Configuration review — chassis layout, hub/PSU tier, connection mode (USB / OTG / hybrid)",
    "Written proforma BOM with lead time, packing outline, and payment terms",
    "Payment confirmation → assembly, burn-in, QC",
    "Export packing (air or sea) with commercial invoice and tracking",
    "Optional remote setup post-delivery — scope on invoice",
  ],
  productLines: [
    "Phone farm box — real smartphones in industrial chassis (power, cooling, USB hub, batch PC control)",
    "Motherboard rack box — screenless Android nodes for headless density",
    "Android phone farm — turnkey Android cluster BOM",
    "iPhone phone farm — batch iPhone layouts (model mix on quote)",
    "Real device phone farm — multi-box room-scale project SKU",
    "Empty box / chassis — DIY expansion enclosures",
    "USB hub, power supply, cooling, network equipment — accessory BOM lines",
    "Custom cabinet — rackmount / floor-standing enclosures",
    "Remote control setup — batch-control handoff service",
  ],
  suitableFor: [
    "Buyers sourcing physical phone farm box hardware with written BOM and export packing",
    "Android or iPhone device farms requiring rackable chassis, hub, PSU, and cooling",
    "QA labs and app compatibility testing on real Android/iPhone nodes",
    "Agencies and studios needing quote-first B2B export from Guangzhou (MOQ 1 samples)",
    "Teams comparing owned hardware vs cloud phone subscriptions for long-running deployments",
    "Bulk or rack projects needing phased delivery, packing photos, or custom cabinets",
  ],
  notSuitableFor: [
    "Cloud phone / virtual Android SaaS subscriptions (we sell physical hardware only)",
    "Antidetect browser or emulator-only stacks without owned devices",
    "Buyers expecting instant e-commerce checkout for custom phone-included builds (RFQ path)",
    "Requests for operating buyer social media accounts, proxies, or guaranteed platform outcomes",
    "Turnkey account farming, traffic manipulation, or policy-evasion services",
  ],
  notWhatWeAre:
    "Phones Farm Box is not a cloud phone SaaS, virtual device rental, or antidetect browser. We supply physical phone farm chassis, USB hubs, power, cooling, network gear, and optional remote wiring/setup services.",
  keyPages: [
    { label: "Product catalog", href: "/products" },
    { label: "Buyer specs (12 procurement Qs)", href: "/buyer-specs" },
    { label: "How to order / RFQ", href: "/how-to-order" },
    { label: "Pricing & bulk quote", href: "/pricing" },
    { label: "Help Center", href: "/help" },
    { label: "FAQ", href: "/faq" },
    { label: "Alternatives (hardware vs cloud)", href: "/alternatives" },
    { label: "Contact / RFQ", href: "/contact" },
    { label: "LLM index (llms.txt)", href: "/llms.txt" },
    { label: "LLM full index (llms-full.txt)", href: "/llms-full.txt" },
  ],
  contact: {
    telegram: CONTACT.telegram,
    telegramUrl: CONTACT.telegramUrl,
    whatsapp: CONTACT.whatsapp,
    whatsappUrl: CONTACT.whatsappUrl,
    email: CONTACT.email,
  },
  citationAnswer: `${SITE.name} (${PRODUCTION_SITE_URL.replace("https://", "")}) is a Guangzhou, China B2B supplier of real-device phone farm box hardware since ${SITE.since}. Product scope includes phone farm chassis, motherboard racks, Android/iPhone farm clusters, USB hubs, PSU, cooling, network gear, custom cabinets, and optional remote setup. Sales are quote-based with MOQ from 1 unit; written BOM on proforma before payment. Not cloud phone SaaS.`,
} as const;
