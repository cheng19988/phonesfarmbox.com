/** Display-only catalog groups for /products — does not change DB SKUs or slugs. */
export const PRODUCT_CATALOG_GROUPS = [
  {
    id: "chassis-rack",
    title: "Chassis & Rack",
    description:
      "Metal enclosures and rack-scale cabinets — slot layout, cooling, and wiring confirmed on written quote before assembly.",
    slugs: ["phone-farm-box", "empty-box-chassis", "custom-cabinet"],
  },
  {
    id: "turnkey-farms",
    title: "Turnkey Device Farms",
    description:
      "Bundled clusters and headless node chassis for Android, iPhone, or room-scale projects — device list locked on proforma.",
    slugs: ["android-phone-farm", "iphone-phone-farm", "real-device-phone-farm", "motherboard-box"],
  },
  {
    id: "parts-accessories",
    title: "Parts & Accessories",
    description:
      "Hub, PSU, and cooling modules sized from your BOM — wattage and port tiers confirmed during quotation, not fixed on page.",
    slugs: ["usb-hub", "power-supply-solution", "cooling-solution"],
  },
  {
    id: "network-remote",
    title: "Network & Remote Setup",
    description:
      "Routing hardware and remote integration services for multi-device farms — scope tied to quoted node count.",
    slugs: ["network-equipment", "remote-control-setup"],
  },
] as const;
