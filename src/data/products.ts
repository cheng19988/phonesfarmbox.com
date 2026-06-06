import { IMAGES } from "@/lib/images";

export type ProductSeed = {
  slug: string;
  name: string;
  category: string;
  shortDesc: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  scenarios: string[];
  accessories: string[];
  delivery: string[];
  maintenance: string[];
  faq: { q: string; a: string }[];
  priceUsd: number;
  stock: number;
  imageCard: string;
  imageHero: string;
  imageDetail: string;
};

function p(
  slug: string,
  name: string,
  category: string,
  shortDesc: string,
  imgs: { card: string; hero: string; detail: string },
  priceUsd: number,
  stock: number,
  extra?: Partial<ProductSeed>
): ProductSeed {
  return {
    slug,
    name,
    category,
    shortDesc,
    description:
      extra?.description ||
      `${name} — supplied by Phones Farm Box, Guangzhou. Configuration, device models, and lead time confirmed on written quote.`,
    features: extra?.features || [
      "Industrial chassis or module per SKU spec sheet",
      "Quoted with your target device list",
      "Export packaging from Guangzhou",
    ],
    specs: extra?.specs || {
      "Configuration": "Confirm before quote",
      "Lead time": "Stated on proforma invoice",
      "MOQ": "Typically 1 unit for samples — see product page",
    },
    scenarios: extra?.scenarios || [],
    accessories: extra?.accessories || [
      "Box chassis with integrated cooling fans",
      "USB data cables and box power cord",
      "Spare motherboard power cords",
      "Advanced batch control management software",
    ],
    delivery: extra?.delivery || [
      "Factory QC and 72-hour burn-in test",
      "Secure export packaging from Guangzhou",
      "DHL/FedEx/sea freight worldwide",
      "Remote setup assistance included",
    ],
    maintenance: extra?.maintenance || [
      "Clean fan filters every 30 days",
      "Verify USB connections monthly",
      "Keep ambient temperature below 35°C",
      "Contact support for software updates",
    ],
    faq: extra?.faq || [
      {
        q: "Can I control all phones at once?",
        a: "Yes. Included batch control software lets you manage one device individually or synchronize all phone windows simultaneously from your PC.",
      },
      {
        q: "Is this a one-time purchase?",
        a: "Yes. No hidden fees or recurring subscriptions. Hardware and control software are included with your box purchase.",
      },
    ],
    priceUsd,
    stock,
    imageCard: imgs.card,
    imageHero: imgs.hero,
    imageDetail: imgs.detail,
  };
}

export const PRODUCT_SEEDS: ProductSeed[] = [
  p("phone-farm-box", "Phone Farm Box", "Phone Farm Box", "Real smartphones in a unified box — centralized heat dissipation, unified power, and PC batch control for hundreds of device windows.", IMAGES.phoneFarmBox, 728, 18, {
    description: "Phone Farm Box houses real mobile phones (non-bare motherboard, non-virtual) with screen and battery removed. Each box includes multi-fan cooling, unified power supply, and USB hub integration. Control hundreds of phone windows in batches through PC group software.",
    features: [
      "Real phone hardware with frame — SIM and camera on supported models",
      "Customized ROM options: auto-reconnect, factory reset paths confirmed at quote",
      "Active fan tray cooling — fan count confirmed per order",
      "Stackable chassis for modular expansion",
      "USB cables, power cords, and batch control software per order terms",
    ],
    specs: {
      "Node Type": "Real smartphone (screenless mount option on quote)",
      "Capacity": "Typically 20 phones — layout confirmed before quote",
      "Cooling": "Active fan tray — spec confirmed on proforma",
      "SIM Support": "Model dependent — marked on quote",
      "Camera Support": "Model dependent",
      "Control": "PC batch software via USB hub tree",
    },
  }),
  p("motherboard-box", "Motherboard Box", "Motherboard Box", "Screenless Android motherboard chassis for headless node density — fan tray and slot layout confirmed before quote.", IMAGES.motherboardBox, 598, 14, {
    description: "Motherboard Box mounts screenless Android boards to reduce per-node cost. Fan tray, PSU, and USB hub tier matched to your board list — configuration confirmed on written quote before assembly.",
    features: [
      "No phone frame — bare motherboard nodes",
      "Official original Android system with USB debugging enabled",
      "SIM card support on select models",
      "Lower per-node cost for high-density scaling",
      "Stackable modular expansion",
    ],
    specs: {
      "Node Type": "Android motherboard (screenless)",
      "Capacity": "Up to 20 nodes — layout confirmed before quote",
      "Cooling": "Fan tray — spec confirmed on proforma",
      "System": "Official or custom Android — confirm at quote",
      "SIM Support": "Model dependent",
      "Stackable": "Yes",
      "Re-auth Note": "Temporary screen if USB auth is lost",
    },
  }),
  p("android-phone-farm", "Android Phone Farm", "Android Phone Farm", "Turnkey Android clusters: chassis, hub tier, and cooling matched to your quoted device list.", IMAGES.androidFarm, 849, 16, {
    description: "Android Phone Farm bundles box hardware with the hub and cooling tier sized for your target models. We confirm board dimensions, USB mode, and ROM path before build. Suitable for agencies replacing desk clutter with rackable density.",
    features: [
      "Android-only cluster BOM on one invoice",
      "Device models locked at quote stage",
      "Batch control software setup sheet included",
      "Stack additional boxes for 40+ devices",
    ],
    specs: {
      "Platform": "Android phones or motherboard nodes",
      "Typical capacity": "20 devices per box (confirm layout)",
      "Control": "PC host via USB hub tree",
      "ROM path": "Customer choice — confirm compatibility",
    },
    faq: [
      { q: "Can I supply my own phones?", a: "Yes — share model list for mount and power verification before quote." },
      { q: "Lead time?", a: "5–10 business days if devices are in stock; longer if sourcing specific models." },
    ],
  }),
  p("iphone-phone-farm", "iPhone Phone Farm", "iPhone Phone Farm", "No jailbreak, no signing required — stable kernel with rich APIs for batch iPhone control and script development.", IMAGES.iphoneFarm, 1380, 6, {
    description: "iPhone Farm solution controls real iPhones without jailbreaking or installing special apps on each device. Software kernel runs stably with rich APIs for script developers. Batch control multiple iPhones from a single management interface.",
    features: [
      "Batch iPhone control — model mix confirmed at quote",
      "Stable kernel with developer-friendly APIs",
      "Batch control interface for script automation",
      "Lightning/USB-C hub topology per quoted layout",
      "Dedicated remote setup support available",
    ],
    specs: {
      "Device Type": "Real iPhone hardware",
      "Capacity": "10–20 devices per cluster",
      "Jailbreak Required": "No",
      "API Support": "Rich script developer APIs",
      "Connectivity": "Lightning / USB-C hub",
      "Control": "Batch management software",
    },
  }),
  p("real-device-phone-farm", "Real Device Phone Farm", "Real Device Phone Farm", "Multi-box deployment package for teams standardizing a full device room — BOM and layout diagram on quote.", IMAGES.realDevice, 1050, 10, {
    description: "Real Device Phone Farm is a project SKU for buyers needing multiple chassis, network, and accessory lines on one scope. Includes layout diagram, QC checklist copy, and phased ship plan if required.",
    features: [
      "Multi-box BOM with single project contact",
      "Mixed Android/iPhone possible — segmented by rack",
      "Electrical load note for facilities team",
      "Optional custom cabinet line item",
    ],
    specs: {
      "Scope": "Project-based — not a single SKU shelf unit",
      "Typical size": "40–100+ devices (confirm target)",
      "Documentation": "BOM + wiring overview on quote",
    },
  }),
  p("empty-box-chassis", "Empty Box / Chassis", "Empty Box / Chassis", "DIY Android farm box chassis — empty industrial enclosure for custom builds and farm expansion.", IMAGES.emptyBox, 265, 28, {
    description: "Empty Box / Chassis for DIY Android farm builds. Industrial metal enclosure with cooling fan mounts, cable routing channels, and USB hub mounting points. Expand existing deployments or build custom configurations.",
  }),
  p("usb-hub", "USB Hub Solution", "USB Hub", "Industrial USB HUB server modules for stable multi-device connectivity in box phone farm clusters.", IMAGES.usbHub, 95, 55, {
    description: "USB HUB Server modules provide stable data and power distribution for box phone farm clusters. Industrial-grade hubs with concealed cable routing and rear cable management.",
  }),
  p("power-supply-solution", "Power Supply Solution", "Power Supply", "Unified industrial power supply for box phone farms — single wall outlet powers all devices in the chassis.", IMAGES.power, 115, 42),
  p("cooling-solution", "Cooling Solution", "Cooling Solution", "Multi-fan cooling modules (4–8 fans) to prevent thermal throttling in dense box phone farm deployments.", IMAGES.cooling, 68, 48),
  p("network-equipment", "Network Equipment", "Network", "Routers, switches, and OTG Ethernet modules for stable multi-device box farm networking.", IMAGES.network, 145, 32),
  p("custom-cabinet", "Custom Cabinet", "Custom Cabinet", "Custom rackmount and floor-standing cabinets for enterprise-scale box phone farm deployments.", IMAGES.customCabinet, 2650, 4),
  p("remote-control-setup", "Remote Control Setup", "Remote Control", "Batch control software configuration, screen mirroring, and group control system setup for your box phone farm.", IMAGES.remoteControl, 320, 99, {
    description: "Remote Control Setup includes batch management software installation, synchronized operation interface configuration, ADB setup, and group control system integration. Control each device like a personal phone or sync multiple devices simultaneously.",
  }),
];

export function getProductSeed(slug: string) {
  return PRODUCT_SEEDS.find((p) => p.slug === slug);
}
