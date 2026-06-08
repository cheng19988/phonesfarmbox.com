export const HARDWARE_TRUST_POINTS = [
  { title: "Written BOM before payment", desc: "Device list, hub tier, PSU, and accessories confirmed on proforma — no surprise line items." },
  { title: "Burn-in before export", desc: "Standard boxes run loaded burn-in; checklist signed before carton close." },
  { title: "Assembly & wiring QC", desc: "Every slot power-on tested; USB path verified PC → hub → node." },
  { title: "Export packing from Guangzhou", desc: "Foam, shock padding, and commercial invoice weights for air or sea freight." },
  { title: "Post-ship setup support", desc: "Remote batch-control onboarding via WhatsApp or Telegram — scope on invoice." },
] as const;

export const DEPLOYMENT_STORIES = [
  {
    region: "Southeast Asia",
    size: "Example — multi-box Android rollout",
    hardware: "Phone farm boxes + industrial USB hubs + router bundle (quantities on quote)",
    problem: "Scattered phones on desks — unstable USB, no rack plan, shared office Wi‑Fi complicating per-group routing.",
    result: "Stacked chassis in office rack; batch-control groups per box; DHL ship + remote wiring call on day two.",
  },
  {
    region: "EU",
    size: "Example — QA lab expansion",
    hardware: "Motherboard boxes + USB hub expansion module (tier confirmed on datasheet)",
    problem: "QA team needed parallel APK installs on physical boards with stable USB paths and audit-friendly burn-in records.",
    result: "Motherboard nodes sized on quote; hub module added at expansion; burn-in report included for audit trail.",
  },
  {
    region: "North America",
    size: "Example — iPhone cluster handoff",
    hardware: "iPhone farm layout + remote control setup service",
    problem: "Agency needed Lightning/USB-C mix with batch dashboard before client handoff — tight air freight window.",
    result: "Model mix locked at quote; pre-burn devices; control stack configured remotely; lead time stated on proforma.",
  },
  {
    region: "Middle East",
    size: "Example — room-scale project",
    hardware: "Android clusters + network kit + phased sea shipment",
    problem: "Facilities team required electrical load sheet and split shipment (chassis first, phones follow).",
    result: "Project BOM with load note; sea freight crated; named engineering contact through install week.",
  },
] as const;

export const QC_CHECKLIST = [
  "Visual inspection of chassis, fans, and cable routing",
  "Power-on test for every node slot",
  "USB/data link check PC → hub → device",
  "72-hour burn-in under load (standard boxes)",
  "Fan noise and temperature spot-check before packing",
  "Accessory count vs packing list",
  "Export carton labeling and shock padding",
] as const;

export const PACKING_LIST_STANDARD = [
  "Phone farm box chassis (or agreed configuration)",
  "Device nodes as quoted (phones / motherboards / BYO TBD)",
  "USB data cables and PSU power cord",
  "Spare node power leads where applicable",
  "Batch control software access / setup notes",
  "Quick-start wiring diagram (digital)",
] as const;

export { QUOTE_PROCESS, QUOTE_PROCESS_STEPS } from "./quote-process";

export const WHY_BUYERS = [
  { title: "MOQ from 1 unit", desc: "Sample a box before a bulk rack order." },
  { title: "Reply within 24–72h", desc: "Complete inquiry forms answered on business days." },
  { title: "Configuration support", desc: "Hub, PSU, cooling, and network matched to your device list." },
  { title: "Global shipping", desc: "Air and sea export with export packaging." },
  { title: "After-sales support", desc: "Remote setup via WhatsApp/Telegram; warranty per invoice." },
] as const;

export const FACTORY_STEPS = [
  { title: "Requirement confirmation", desc: "Device matrix, box type, accessories locked on proforma." },
  { title: "Assembly", desc: "Chassis prep, fan mount, hub/PSU install, cable routing." },
  { title: "Wiring check", desc: "Slot-by-slot power and USB continuity before burn-in." },
  { title: "Burn-in test", desc: "Loaded run — duration per product class on checklist." },
  { title: "QC & export packing", desc: "Checklist sign-off, foam/carton, commercial invoice docs." },
  { title: "Shipment", desc: "Courier or freight forwarder per buyer instruction." },
] as const;

export const PRODUCT_CATEGORIES = [
  { name: "Android Phone Farm Box", href: "/products/phone-farm-box", desc: "Phone farm chassis — slot count and SIM/camera paths confirmed before quote." },
  { name: "Motherboard Rack Box", href: "/products/motherboard-box", desc: "Screenless Android boards for headless density — layout on datasheet." },
  { name: "iPhone Farm Cluster", href: "/products/iphone-phone-farm", desc: "Batch iPhone control — model mix confirmed at quote." },
  { name: "USB Hub & Power", href: "/products/usb-hub", desc: "Hub servers, PSU modules, cooling add-ons." },
  { name: "Accessories & Network", href: "/products/network-equipment", desc: "Routers, OTG Ethernet, rack parts." },
] as const;
