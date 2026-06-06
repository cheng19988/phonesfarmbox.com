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
    size: "60 Android nodes",
    hardware: "3× Phone Farm Box + industrial USB hubs + router bundle",
    problem: "Scattered phones on desks — unstable USB, no rack plan, rising proxy detection from shared Wi‑Fi.",
    result: "Three stacked boxes in office rack; one PC batch-control group per box; DHL ship + remote wiring call on day two.",
  },
  {
    region: "EU",
    size: "36 test devices",
    hardware: "2× Motherboard Box + USB hub expansion module",
    problem: "QA team needed parallel APK installs on physical boards without emulator drift or cloud seat limits.",
    result: "Motherboard nodes cut per-seat cost; hub module added at expansion; burn-in report included for audit trail.",
  },
  {
    region: "North America",
    size: "12 iPhone cluster",
    hardware: "iPhone farm layout + remote control setup service",
    problem: "Agency needed Lightning/USB-C mix with batch dashboard before client handoff — tight air freight window.",
    result: "Model mix locked at quote; pre-burn devices; control stack configured remotely; 7–10 day lead time met.",
  },
  {
    region: "Middle East",
    size: "80-node room project",
    hardware: "4× Android clusters + network kit + phased sea shipment",
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

export const QUOTE_PROCESS = [
  {
    step: "1",
    title: "Send requirements",
    detail: "Target quantity, Android/iPhone mix, empty box or with phones, shipping country, use case, and WhatsApp/Telegram for quick follow-up.",
  },
  {
    step: "2",
    title: "Confirm configuration",
    detail: "We return box type, hub/PSU/cooling tier, and any items marked “confirm before quote” — no payment until you approve the BOM.",
  },
  {
    step: "3",
    title: "Written quote & lead time",
    detail: "USD proforma with MOQ, production slot, and air/sea freight estimate. Bulk tiers from 3+ boxes.",
  },
  {
    step: "4",
    title: "Payment",
    detail: "USDT (small orders, manually confirmed by sales) or T/T / Wise / PayPal for bulk — per invoice only.",
  },
  {
    step: "5",
    title: "Assembly, QC & shipment",
    detail: "Burn-in, packing list sign-off, tracking via DHL/FedEx/sea forwarder. Remote setup scheduled after delivery notice.",
  },
] as const;

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
  { name: "Android Phone Farm Box", href: "/products/phone-farm-box", desc: "20-node phone chassis — SIM/camera paths on supported models." },
  { name: "Motherboard Rack Box", href: "/products/motherboard-box", desc: "Screenless Android boards for headless density." },
  { name: "iPhone Farm Cluster", href: "/products/iphone-phone-farm", desc: "Batch iPhone control — model mix confirmed at quote." },
  { name: "USB Hub & Power", href: "/products/usb-hub", desc: "Hub servers, PSU modules, cooling add-ons." },
  { name: "Accessories & Network", href: "/products/network-equipment", desc: "Routers, OTG Ethernet, rack parts." },
] as const;
