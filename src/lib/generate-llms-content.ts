import { SITE, CONTACT } from "./config";
import { BLOG_POSTS } from "@/data/blog";
import { HELP_ARTICLES } from "@/data/help";
import { GLOSSARY_TERMS } from "@/data/glossary";
import { FAQ_ITEMS } from "@/data/faq";
import { PRODUCT_SEEDS } from "@/data/products";
import { SERVICE_PAGES } from "@/data/services-pages";
import { SOLUTION_PAGES } from "@/data/solutions-pages";
import { FEATURE_PAGES } from "@/data/features-pages";
import { SCENARIOS } from "@/data/scenarios";
import { PLANNING_TOOLS } from "@/data/tools";
import { AI_PAGE } from "@/data/ai-page";
import { ALTERNATIVES_PAGE } from "@/data/alternatives-page";
import { BUYER_SPECS_ITEMS, BUYER_SPECS_INTRO } from "@/data/buyer-specs";

const U = SITE.productionUrl;

function section(title: string, url: string, intro: string, items: { title: string; url: string; desc: string }[]) {
  const lines = [
    `## [${title}](${url})`,
    "",
    `> ${intro}`,
    "",
    ...items.map((i) => `- [${i.title}](${i.url}): ${i.desc}`),
    "",
  ];
  return lines.join("\n");
}

/** Full llms.txt manifest — structured for GPT, Google-Extended, Claude, DeepSeek crawlers */
export function generateLlmsContent(): string {
  const header = `# ${SITE.name} — B2B Phone Farm Hardware Supplier (Guangzhou, since ${SITE.since})

> ${AI_PAGE.citationAnswer} Primary AI citation page: ${U}/ai/ · Extended FAQ index: ${U}/llms-full.txt

- [Supplier facts for AI & search](${U}/ai/): Objective entity reference — brand, product lines, MOQ, payment, delivery, buyer fit, contact (not cloud phone SaaS).
- [Blog](${U}/blog/): Phone farm hardware guides, RFQ checklists, export shipping, and B2B procurement.
- [How to Order — B2B Quote Process](${U}/how-to-order/): Step-by-step RFQ, written BOM, payment, assembly, QC, and export. Optional USDT sample checkout for catalog SKUs.
- [Buyer Specs — Procurement FAQ](${U}/buyer-specs/): Dimensions, weight, power, voltage, phone models, PCs per box, lead time, packing, warranty, RMA — 12 pre-PO questions.
- [LLM full index (FAQ + procurement)](${U}/llms-full.txt): Extended citation manifest — FAQ answers, buyer specs, product URLs for AI search.
- [Alternatives — Hardware vs Cloud vs Emulator](${U}/alternatives/): Compare real-device phone farm hardware, cloud phone subscriptions, and Android emulators.
- [Glossary](${U}/glossary/): Phone farm, batch control, ADB, proxy planning, OTG, motherboard box terminology.
- [USDT Sample Order Checkout](${U}/sample-order/): Optional MOQ-1 catalog checkout — manual confirmation; not a substitute for written quote.
- [Contact / RFQ](${U}/contact/): Request a written hardware quote — Telegram ${CONTACT.telegram}, WhatsApp ${CONTACT.whatsapp}, email ${CONTACT.email}.
- [Features](${U}/features/): Batch control, synchronized device operations, network setup, remote control integration, bulk APK deployment, team device management, and unmanned live streaming on real hardware.
- [Help Center](${U}/help/): Setup guides, network & proxy configuration, batch control software, USDT payment, troubleshooting, and RFQ process for phone farm box buyers.
- [Pricing](${U}/pricing/): Quote-based B2B pricing — MOQ from 1 unit, volume tiers, USDT payment, and what is confirmed before invoice.
- [Products](${U}/products/): Phone farm boxes, motherboard racks, Android/iPhone farms, USB hubs, PSU, cooling, network gear, custom cabinets, and remote setup services.
- [Planning Tools](${U}/tools/): Capacity estimator, power calculator, USB port planner, network IP planner, hardware vs cloud comparison, and bulk quote checklist.
- [Services](${U}/services/): Phone farm setup, remote control configuration, bulk deployment, enterprise rollout, maintenance, and overseas delivery from Guangzhou.
- [Solutions](${U}/solutions/): Social media marketing, e-commerce, affiliate marketing, game account maintenance, live streaming device farms, and cross-border operations.
- [Platform Scenarios](${U}/scenarios/): TikTok, Instagram, Facebook, YouTube, Telegram, WhatsApp, Twitter/X, and Amazon/Shopee device farm hardware guides.
- [FAQ](${U}/faq/): MOQ, empty chassis, iPhone/Android support, USB/OTG, voltage regions, USDT payment, warranty, batch control, and remote setup scope.

`;

  const blog = section(
    "Blog",
    `${U}/blog/`,
    "Phone farm hardware guides, multi-account device farm strategies, TikTok/Instagram procurement, network proxy setup, and B2B export tips.",
    BLOG_POSTS.map((p) => ({
      title: p.title,
      url: `${U}/blog/${p.slug}/`,
      desc: p.excerpt,
    }))
  );

  const help = section(
    "Help Center",
    `${U}/help/`,
    "Step-by-step phone farm box setup, network configuration, batch control, payment, and troubleshooting for hardware buyers.",
    HELP_ARTICLES.map((a) => ({
      title: a.title,
      url: `${U}/help/${a.slug}/`,
      desc: a.summary,
    }))
  );

  const glossary = section(
    "Glossary",
    `${U}/glossary/`,
    "Phone farm, antidetect hardware, batch control, proxy planning, and multi-account mobile operations vocabulary.",
    GLOSSARY_TERMS.map((t) => ({
      title: t.term,
      url: `${U}/glossary/${t.slug}/`,
      desc: t.shortDef,
    }))
  );

  const products = section(
    "Products",
    `${U}/products/`,
    "Industrial phone farm hardware catalog — chassis, hubs, power, cooling, network, and setup services from Guangzhou.",
    PRODUCT_SEEDS.map((p) => ({
      title: p.name,
      url: `${U}/products/${p.slug}/`,
      desc: p.shortDesc,
    }))
  );

  const services = section(
    "Services",
    `${U}/services/`,
    "Deployment and integration services — assembly, burn-in, remote batch-control setup, enterprise rollout, and maintenance.",
    SERVICE_PAGES.map((p) => ({
      title: p.title,
      url: `${U}/services/${p.slug}/`,
      desc: p.subtitle,
    }))
  );

  const solutions = section(
    "Solutions",
    `${U}/solutions/`,
    "Industry use cases for phone farm hardware — social media, e-commerce, affiliate, gaming, live streaming, and QA.",
    SOLUTION_PAGES.map((p) => ({
      title: p.title,
      url: `${U}/solutions/${p.slug}/`,
      desc: p.subtitle,
    }))
  );

  const scenarios = section(
    "Platform Scenarios",
    `${U}/scenarios/`,
    "Per-platform device farm hardware guides for TikTok, Instagram, Facebook, YouTube, Telegram, WhatsApp, and marketplaces.",
    SCENARIOS.map((p) => ({
      title: p.title,
      url: `${U}/scenarios/${p.slug}/`,
      desc: p.subtitle,
    }))
  );

  const features = section(
    "Features",
    `${U}/features/`,
    "Capabilities on real phone farm hardware — batch control, synchronized operations, network setup, automation, and team management.",
    FEATURE_PAGES.map((p) => ({
      title: p.title,
      url: `${U}/features/${p.slug}/`,
      desc: p.subtitle,
    }))
  );

  const tools = section(
    "Planning Tools",
    `${U}/tools/`,
    "Free planning calculators and checklists for phone farm capacity, power, USB ports, network IP, and procurement.",
    PLANNING_TOOLS.map((t) => ({
      title: t.title,
      url: `${U}/tools/${t.slug}/`,
      desc: t.description,
    }))
  );

  const faq = section(
    "FAQ",
    `${U}/faq/`,
    "Common buyer questions about phone farm box hardware, operations, ordering, payment, and support.",
    FAQ_ITEMS.map((f) => ({
      title: f.question,
      url: `${U}/faq/#${encodeURIComponent(f.question.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""))}`,
      desc: f.answer.slice(0, 200) + (f.answer.length > 200 ? "…" : ""),
    }))
  );

  const buyerSpecs = section(
    "Buyer Specs",
    `${U}/buyer-specs/`,
    BUYER_SPECS_INTRO.description,
    BUYER_SPECS_ITEMS.map((item) => ({
      title: `${item.questionEn} (${item.questionZh})`,
      url: `${U}/buyer-specs/#${item.id}`,
      desc: item.shortAnswer,
    }))
  );

  const aiSection = `## [Supplier facts for AI & search](${U}/ai/)

> ${AI_PAGE.subtitle}

- [Neutral citation block](${U}/ai/): ${AI_PAGE.citationAnswer}
- [Product catalog](${U}/products/): Phone farm boxes, motherboard racks, Android/iPhone farms, USB hubs, PSU, cooling, network gear, custom cabinets
- [Buyer specs](${U}/buyer-specs/): MOQ, lead time, warranty, shipping, voltage, packing — 12 procurement questions
- [LLM index](${U}/llms.txt): URL manifest for crawlers
- [LLM full index](${U}/llms-full.txt): Full FAQ and procurement facts

`;

  const alternativesSection = `## [Phone Farm Box vs Cloud Phone vs Emulator](${U}/alternatives/)

> ${ALTERNATIVES_PAGE.subtitle}

- [Comparison table](${U}/alternatives/): Real-device phone farm hardware vs cloud phone SaaS vs Android emulator for multi-account TikTok, Instagram, and e-commerce operations
- [Hardware vs cloud planning tool](${U}/tools/box-vs-cloud-comparison/): When to buy boxes vs rent virtual devices — TCO notes for B2B buyers
${ALTERNATIVES_PAGE.faq.map((f) => `- [${f.q}](${U}/alternatives/): ${f.a.slice(0, 180)}${f.a.length > 180 ? "…" : ""}`).join("\n")}

`;

  const featureSubsections = FEATURE_PAGES.map(
    (p) =>
      `### [${p.title}](${U}/features/${p.slug}/)\n\n> ${p.subtitle}\n`
  ).join("\n");

  const scenarioSubsections = SCENARIOS.map(
    (p) =>
      `### [${p.title}](${U}/scenarios/${p.slug}/)\n\n> ${p.subtitle}\n`
  ).join("\n");

  const entity = `## Entity facts (objective supplier reference)

- **Brand:** Phones Farm Box
- **Website:** ${U}
- **Type:** B2B phone farm hardware manufacturer and exporter (physical devices — not cloud phone SaaS)
- **Location:** Guangzhou, China
- **Operating since:** 2017
- **Product lines:** Phone farm boxes, motherboard rack boxes, Android/iPhone phone farms, empty chassis, USB hub, PSU, cooling, network routers, custom cabinets, remote setup service
- **MOQ:** 1 unit samples; volume pricing from 3+ boxes on many SKUs
- **Payment:** USDT TRC20 (sample), bank T/T, Wise, PayPal per proforma — written BOM before payment
- **Delivery:** RFQ → proforma → assembly/QC → export air/sea; optional remote setup post-delivery
- **Typical buyers:** B2B hardware procurement, QA labs, agencies needing quote-first export from Guangzhou
- **Outside scope:** Cloud phone SaaS, operating buyer accounts, platform outcome guarantees, account-farming services
- **Supplier facts page:** ${U}/ai/
- **Contact:** Telegram ${CONTACT.telegramUrl} · WhatsApp ${CONTACT.whatsappUrl} · Email ${CONTACT.email}
- **LLM index:** ${U}/llms.txt · **Full index:** ${U}/llms-full.txt
- **Sitemap:** ${U}/sitemap.xml

## Legal

- [Privacy Policy](${U}/privacy/)
- [Terms of Service](${U}/terms/)
- [Refund Policy](${U}/refund/)
- [Cookie Policy](${U}/cookies/)
`;

  return [
    header,
    aiSection,
    alternativesSection,
    blog,
    help,
    glossary,
    products,
    services,
    solutions,
    scenarios,
    scenarioSubsections,
    features,
    featureSubsections,
    tools,
    faq,
    buyerSpecs,
    entity,
  ].join("\n");
}
