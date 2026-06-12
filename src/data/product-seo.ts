/** Per-SKU SEO title and meta description — procurement long-tail without changing visible H1 */
export const PRODUCT_SEO: Record<string, { title: string; description: string }> = {
  "phone-farm-box": {
    title: "Android Phone Farm Box — B2B Supplier Quote",
    description:
      "Phone farm box supplier quote — Android phone farm chassis with USB hub, PSU, and cooling. Buy phone farm box hardware with MOQ 1 sample; written BOM and lead time before payment.",
  },
  "motherboard-box": {
    title: "Motherboard Phone Farm Box — Headless Android Rack",
    description:
      "Motherboard phone farm box for headless Android device farms — screenless node density, batch control from one PC. Phone farm hardware supplier; configuration confirmed on quote.",
  },
  "android-phone-farm": {
    title: "Turnkey Android Phone Farm Hardware — Cluster BOM",
    description:
      "Android phone farm hardware cluster — chassis, hub tier, and cooling matched to your device list. Android device farm hardware for agencies and QA labs; quote-based export from Guangzhou.",
  },
  "iphone-phone-farm": {
    title: "iPhone Phone Farm Cluster Hardware — Batch Control",
    description:
      "iPhone phone farm hardware for real-device batch control — model mix, hub topology, and host setup confirmed on written quote. B2B export from Guangzhou.",
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
    title: "Phone Farm USB Hub Server — Industrial Hub Tier",
    description:
      "Industrial USB hub for phone farm box clusters — stable multi-device data paths. Phone farm equipment accessory; hub tier and port count sized on BOM.",
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
    title: "Phone Farm Network Router & Switch — Multi-Device LAN",
    description:
      "Network equipment for phone farm box rooms — routers, switches, and OTG Ethernet for segmented device groups. Hardware-only; proxy services buyer-selected.",
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
