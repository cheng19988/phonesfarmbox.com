/** Per-SKU SEO title and meta description — procurement long-tail without changing visible H1 */
export const PRODUCT_SEO: Record<string, { title: string; description: string }> = {
  "phone-farm-box": {
    title: "Phone Farm Box Manufacturer Quote — Control Multiple Devices",
    description:
      "Phone farm box manufacturer in Guangzhou — Android phone farm chassis with USB hub, PSU, cooling. Control multiple devices from one PC; MOQ 1 sample. Reference price — final quote confirmed before payment.",
  },
  "motherboard-box": {
    title: "Motherboard Phone Farm Box — Android Board Cluster Hardware",
    description:
      "Motherboard phone farm box manufacturer spec — headless Android clusters, screenless node density, batch control multiple devices from one host. Configuration confirmed on written quote.",
  },
  "android-phone-farm": {
    title: "Android Phone Farm Box Cluster — Turnkey Hardware BOM",
    description:
      "Turnkey Android phone farm box cluster — chassis, USB hub tier, and cooling matched to your device list. Phone farm box manufacturer; control multiple Android devices; worldwide delivery on quote.",
  },
  "iphone-phone-farm": {
    title: "iPhone Phone Farm Box — Control Multiple iPhones",
    description:
      "iPhone phone farm box hardware — control multiple iPhones from one management interface. Model mix, hub topology, and host setup on written quote. Manufacturer export from Guangzhou with worldwide delivery.",
  },
  "real-device-phone-farm": {
    title: "Real Device Phone Farm — Multi-Box Project BOM",
    description:
      "Multi-box real device phone farm project SKU — room-scale device farm hardware with layout diagram, phased ship options, and single project contact.",
  },
  "empty-box-chassis": {
    title: "Empty Phone Farm Box Chassis — DIY Android Farm",
    description:
      "Empty phone farm box chassis for DIY builds — industrial enclosure with fan mounts and hub slots. Expand existing Android phone farm hardware; mount dimensions confirmed on quote.",
  },
  "usb-hub": {
    title: "20 Port USB Hub Server — Phone Farm Box Cluster",
    description:
      "Industrial USB hub for phone farm boxes — 10/16/20+ port tiers, stable multi-device control, concealed cabling. Phone farm equipment; hub port count sized on BOM with worldwide delivery from Guangzhou.",
  },
  "power-supply-solution": {
    title: "Phone Farm Power Supply Module — PSU for Chassis",
    description:
      "Unified phone farm power supply — PSU wattage sized from node list and 110V/220V region on quote. Phone farm equipment for rack-scale Android and iPhone farms.",
  },
  "cooling-solution": {
    title: "Phone Farm Cooling Fan Kit — Active Airflow",
    description:
      "Phone farm cooling kit — fan count and CFM target confirmed per chassis generation. Phone farm equipment for dense Android device farm hardware deployments.",
  },
  "network-equipment": {
    title: "Phone Farm Network Gear — OTG Ethernet & Multi-Device LAN",
    description:
      "Routers, switches, and OTG Ethernet modules for phone farm box rooms — segmented device groups, stable multi-device networking. Hardware-only; worldwide export from Guangzhou.",
  },
  "custom-cabinet": {
    title: "Rackmount Phone Farm Cabinet — Custom 2U+ Rack",
    description:
      "Custom rackmount phone farm cabinet and floor-standing enclosures — enterprise device farm hardware with PDU planning, cable management, and crated sea freight options.",
  },
  "remote-control-setup": {
    title: "Phone Farm Remote Setup — Batch Control Handoff",
    description:
      "Phone farm box with remote setup service — USB wiring verification and batch-control handoff after delivery. Optional add-on scoped to device count on proforma.",
  },
};

export function getProductSeo(slug: string, fallbackName: string, fallbackDesc: string) {
  const entry = PRODUCT_SEO[slug];
  return {
    title: entry?.title ?? fallbackName,
    description: entry?.description ?? fallbackDesc,
  };
}
