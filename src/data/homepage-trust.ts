export const DEPLOYMENT_STORIES = [
  {
    title: "Cross-border social team — 60 Android nodes",
    region: "Southeast Asia buyer",
    setup: "3× Phone Farm Box units + network router bundle",
    outcome:
      "Team moved from scattered phones on desks to three stacked boxes in a small office rack. Batch control from one PC, separate proxy groups per box. Shipped DHL; remote setup call on day two.",
  },
  {
    title: "App QA lab — mixed Android models",
    region: "EU software company",
    setup: "2× Motherboard Box + USB hub expansion",
    outcome:
      "QA lead needed parallel installs on physical devices without emulator drift. Motherboard nodes cut per-seat cost; USB hub module added when they expanded from 20 to 36 test devices.",
  },
  {
    title: "iPhone script shop — 12-device cluster",
    region: "North America agency",
    setup: "iPhone Phone Farm cluster + remote control setup service",
    outcome:
      "Buyer required Lightning/USB-C mix confirmed at quote stage. We pre-burned devices, configured batch dashboard, and packed for air freight. Lead time quoted 7–10 days for custom node mix.",
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
  { step: "1", title: "Send requirements", detail: "Device count, Android/iPhone mix, platforms, destination country, timeline." },
  { step: "2", title: "Confirm model & configuration", detail: "We reply with box type, cooling, hub, network options — or mark items as confirm before quote." },
  { step: "3", title: "Quote & lead time", detail: "USD price, MOQ, production slot, shipping method estimate." },
  { step: "4", title: "Payment", detail: "USDT (sample/small order) or T/T / Wise / PayPal for bulk — per invoice." },
  { step: "5", title: "Production & shipping", detail: "QC burn-in, packing, DHL/FedEx/sea freight with tracking." },
] as const;

export const WHY_BUYERS = [
  { title: "MOQ from 1 unit", desc: "Sample a box before a bulk rack order." },
  { title: "Quote within 72h", desc: "Business-day response for complete requirement forms." },
  { title: "Configuration support", desc: "Hub, PSU, cooling, and network matched to your device list." },
  { title: "Global shipping", desc: "Air and sea export from Guangzhou with export packaging." },
  { title: "After-sales support", desc: "Remote setup help via WhatsApp/Telegram; hardware warranty per invoice." },
] as const;

export const FACTORY_STEPS = [
  { title: "Assembly", desc: "Chassis prep, fan mount, hub/PSU install, cable routing." },
  { title: "Device install", desc: "Nodes mounted per order — phone box, motherboard, or customer-supplied TBD." },
  { title: "Burn-in test", desc: "Loaded run before release (duration per product class)." },
  { title: "QC & packing", desc: "Checklist sign-off, foam/carton, export docs as needed." },
  { title: "Shipment", desc: "Courier or freight forwarder per buyer instruction." },
] as const;

export const PRODUCT_CATEGORIES = [
  { name: "Android Phone Farm Box", href: "/products/phone-farm-box", desc: "20-node phone chassis, SIM/camera paths on supported models." },
  { name: "Motherboard Rack Box", href: "/products/motherboard-box", desc: "Screenless Android boards for headless density." },
  { name: "iPhone Farm Cluster", href: "/products/iphone-phone-farm", desc: "Batch iPhone control — model mix confirmed at quote." },
  { name: "USB Hub & Power", href: "/products/usb-hub", desc: "Hub servers, PSU modules, cooling add-ons." },
  { name: "Accessories & Network", href: "/products/network-equipment", desc: "Routers, OTG Ethernet, rack parts." },
] as const;
