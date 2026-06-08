/** Shared product-page conversion copy — aligns with Contact RFQ fields (P2-6/P2-7). */

export type ProductComparison = {
  otherSlug: string;
  otherLabel: string;
  chooseThis: string;
  chooseOther: string;
};

/** Reuses the same fields as /contact RFQ form — do not introduce a parallel checklist. */
export const QUOTE_PREPARE_CHECKLIST = [
  "Destination country",
  "Expected quantity (devices or chassis units)",
  "Phone or board model list (or ask us to recommend)",
  "Empty chassis vs phone-included vs BYO devices to mount",
  "Connection mode: USB / OTG / hybrid",
  "Voltage region: 110V / 220V / 220–240V",
  "Documentation: datasheet, packing photo, shipping size/weight (optional)",
  "Remote setup required or not (hardware/control workflow only — not account operation)",
] as const;

export const PRODUCT_COMPARISONS: Record<string, ProductComparison[]> = {
  "phone-farm-box": [
    {
      otherSlug: "motherboard-box",
      otherLabel: "Motherboard Box",
      chooseThis: "Choose Phone Farm Box if you need full phones with SIM/camera paths and rackable Android nodes.",
      chooseOther: "Choose Motherboard Box if you want headless Android nodes and lowest per-slot cost without displays.",
    },
    {
      otherSlug: "empty-box-chassis",
      otherLabel: "Empty Box / Chassis",
      chooseThis: "Choose Phone Farm Box for a wired, hub-ready chassis with PSU and cooling matched on quote.",
      chooseOther: "Choose Empty Chassis if you already have hubs/PSU and only need bare metal expansion.",
    },
    {
      otherSlug: "android-phone-farm",
      otherLabel: "Turnkey Android Cluster",
      chooseThis: "Choose Phone Farm Box when you want to pick hub/PSU tiers yourself or add incrementally.",
      chooseOther: "Choose Turnkey Android Cluster for one BOM that bundles box + accessories pre-matched to your device list.",
    },
  ],
  "motherboard-box": [
    {
      otherSlug: "phone-farm-box",
      otherLabel: "Phone Farm Box",
      chooseThis: "Choose Motherboard Box for screenless nodes and higher density when SIM/camera on every slot is not required.",
      chooseOther: "Choose Phone Farm Box when you need full phones, SIM paths, or camera workflows on quoted models.",
    },
    {
      otherSlug: "empty-box-chassis",
      otherLabel: "Empty Box / Chassis",
      chooseThis: "Choose Motherboard Box for pre-wired hub shelf and node mounting layout for board farms.",
      chooseOther: "Choose Empty Chassis for DIY layout when you supply all internal modules separately.",
    },
  ],
  "empty-box-chassis": [
    {
      otherSlug: "phone-farm-box",
      otherLabel: "Phone Farm Box",
      chooseThis: "Choose Empty Chassis if you have phones/boards and need additional bare metal slots only.",
      chooseOther: "Choose Phone Farm Box if you want turnkey wiring, hub tier, and cooling included on the BOM.",
    },
    {
      otherSlug: "android-phone-farm",
      otherLabel: "Turnkey Android Cluster",
      chooseThis: "Choose Empty Chassis for DIY expansion or custom internal layout with your own modules.",
      chooseOther: "Choose Turnkey Android Cluster if you want phones/devices and accessories bundled on one invoice.",
    },
  ],
  "android-phone-farm": [
    {
      otherSlug: "phone-farm-box",
      otherLabel: "Phone Farm Box",
      chooseThis: "Choose Turnkey Android Cluster for one invoice covering chassis + hub + cooling matched to your device list.",
      chooseOther: "Choose Phone Farm Box if you prefer to specify hub/PSU/accessories line-by-line on quote.",
    },
    {
      otherSlug: "iphone-phone-farm",
      otherLabel: "iPhone Phone Farm",
      chooseThis: "Choose Android cluster SKUs for ADB/batch Android workflows and SIM-capable paths where quoted.",
      chooseOther: "Choose iPhone Phone Farm when your stack requires iOS devices and quoted cable/host plan.",
    },
  ],
  "iphone-phone-farm": [
    {
      otherSlug: "phone-farm-box",
      otherLabel: "Phone Farm Box (Android)",
      chooseThis: "Choose iPhone Phone Farm when your team runs iOS batch control and quoted Lightning/USB-C cable plan.",
      chooseOther: "Choose Android Phone Farm Box for SIM/Android QA, app testing labs, or social media team Android workflows.",
    },
    {
      otherSlug: "empty-box-chassis",
      otherLabel: "Empty Box / Chassis",
      chooseThis: "Choose iPhone Phone Farm when you need iOS-specific hub topology and integration scope on quote.",
      chooseOther: "Choose Empty Chassis only if you are mounting BYO hardware yourself — not typical for iPhone cluster handoff.",
    },
  ],
  "usb-hub": [
    {
      otherSlug: "phone-farm-box",
      otherLabel: "Phone Farm Box",
      chooseThis: "Choose USB Hub as an accessory or replacement for an existing farm outgrowing PC ports.",
      chooseOther: "Choose Phone Farm Box if you need a complete chassis — a hub alone is not a phone farm.",
    },
    {
      otherSlug: "network-equipment",
      otherLabel: "Network Equipment",
      chooseThis: "Choose USB Hub to extend host PC data paths to more device nodes.",
      chooseOther: "Choose Network Equipment when you need router segmentation or OTG Ethernet offload — not USB port expansion.",
    },
  ],
  "power-supply-solution": [
    {
      otherSlug: "cooling-solution",
      otherLabel: "Cooling Solution",
      chooseThis: "Choose Power Supply when adding nodes or replacing an overloaded PSU module.",
      chooseOther: "Choose Cooling Solution when thermal throttling is the issue — PSU and fans are separate line items.",
    },
  ],
  "cooling-solution": [
    {
      otherSlug: "power-supply-solution",
      otherLabel: "Power Supply",
      chooseThis: "Choose Cooling when nodes throttle under sustained load or you retrofit an older chassis.",
      chooseOther: "Choose Power Supply when the issue is wattage headroom — not airflow.",
    },
  ],
  "network-equipment": [
    {
      otherSlug: "remote-control-setup",
      otherLabel: "Remote Control Setup",
      chooseThis: "Choose Network Equipment for router/switch hardware and IP planning worksheet.",
      chooseOther: "Choose Remote Setup for wiring and batch-control verification sessions — not router procurement alone.",
    },
    {
      otherSlug: "usb-hub",
      otherLabel: "USB Hub",
      chooseThis: "Choose Network Equipment when farms need VLAN segmentation or OTG Ethernet paths.",
      chooseOther: "Choose USB Hub when the bottleneck is PC USB port count — not network topology.",
    },
  ],
  "remote-control-setup": [
    {
      otherSlug: "network-equipment",
      otherLabel: "Network Equipment",
      chooseThis: "Choose Remote Setup when hardware is delivered and you need host PC, USB map, and batch-control handoff.",
      chooseOther: "Choose Network Equipment when you need physical routers/switches — setup service does not replace hardware.",
    },
    {
      otherSlug: "phone-farm-box",
      otherLabel: "Phone Farm Box",
      chooseThis: "Choose Remote Setup as an add-on after chassis delivery — scope is wiring and control verification only.",
      chooseOther: "Choose Phone Farm Box first if you still need chassis hardware — remote setup is a service SKU, not a box.",
    },
  ],
  "real-device-phone-farm": [
    {
      otherSlug: "custom-cabinet",
      otherLabel: "Custom Cabinet",
      chooseThis: "Choose Real Device Phone Farm project SKU for multi-box room BOM with mixed chassis on one schedule.",
      chooseOther: "Choose Custom Cabinet when you need floor/rack enclosure fabrication with CAD sign-off.",
    },
  ],
  "custom-cabinet": [
    {
      otherSlug: "real-device-phone-farm",
      otherLabel: "Real Device Phone Farm",
      chooseThis: "Choose Custom Cabinet for enterprise room-scale enclosure with tray CAD and PDU planning.",
      chooseOther: "Choose Real Device Phone Farm project when you need multi-SKU BOM without custom fabrication lead time.",
    },
  ],
};

export function getProductComparisons(slug: string): ProductComparison[] {
  return PRODUCT_COMPARISONS[slug] ?? [];
}
