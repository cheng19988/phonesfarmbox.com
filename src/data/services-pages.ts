import { IMAGES } from "@/lib/images";
import type { ContentPage } from "./scenarios";

export const SERVICE_PAGES: ContentPage[] = [
  {
    slug: "phone-farm-setup",
    title: "Phone Farm Setup Service",
    subtitle: "End-to-end chassis assembly, wiring, burn-in, and first-boot validation from Guangzhou",
    category: "Deployment",
    heroImage: IMAGES.serviceScene,
    intro:
      "Phone farm setup covers hardware assembly through first successful batch-control session — scoped on your written quote by device count, connection mode, and whether phones are buyer-supplied or sourced on proforma.",
    sections: [
      {
        heading: "What setup includes",
        body: "Chassis prep, fan and PSU install, hub tier wiring, slot-by-slot power-on, USB path verification PC → hub → node, and optional loaded burn-in before carton close. Software handoff scope is listed separately when remote setup is ordered.",
      },
      {
        heading: "Buyer inputs required",
        body: "Target slot count, Android/iPhone mix, connection mode (USB, OTG, hybrid), voltage region, and destination country for plug type. Empty chassis vs phones-on-quote must be declared before assembly starts.",
      },
      {
        heading: "Deliverables",
        body: "Packing list signed against proforma, wiring diagram (digital), burn-in checklist when included, and tracking after export packing. Lead time confirmed on quote — not fixed site-wide.",
      },
    ],
    benefits: [
      { title: "Factory QC", desc: "Slot power and USB continuity checked before ship." },
      { title: "Burn-in option", desc: "Loaded run under factory conditions when ordered." },
      { title: "Export-ready packing", desc: "Foam, shock padding, and commercial invoice weights." },
      { title: "Remote handoff", desc: "Optional screen-share session after delivery." },
    ],
    faq: [
      { q: "Can I skip setup and receive a kit?", a: "Yes for DIY buyers — order empty chassis and hub/PSU modules separately. Setup service is for turnkey assembly before export." },
      { q: "Does setup include app installation?", a: "Bulk APK scope is a separate workflow. Setup validates hardware paths; app prep can be quoted under bulk deployment." },
      { q: "How long does setup take?", a: "Depends on slot count and burn-in duration — stated on proforma, typically days to weeks not hours for full racks." },
    ],
    relatedSlugs: ["remote-control-configuration", "bulk-device-deployment"],
  },
  {
    slug: "remote-control-configuration",
    title: "Remote Control Configuration",
    subtitle: "Screen mirroring, ADB paths, and multi-device dashboard setup for host PC workflows",
    category: "Software integration",
    heroImage: IMAGES.remoteControl.hero,
    intro:
      "Remote control configuration connects your host PC to quoted phone farm hardware — verifying USB uplink, device authorization, and batch-control or mirroring stack for your Android or iPhone node mix.",
    sections: [
      {
        heading: "Typical stack",
        body: "Host PC with admin access, hub uplink cable, batch-control or mirroring software (buyer-owned or quoted), and network router when per-group IP is required. iPhone paths may need additional host tooling — confirmed on datasheet.",
      },
      {
        heading: "Session scope",
        body: "Verify all nodes appear in dashboard, walk through single-device control then group sync, document cable labeling, and note spare port policy for expansion. Does not include ongoing 24/7 NOC unless extended support is on invoice.",
      },
      {
        heading: "Prerequisites",
        body: "Hardware powered, room network stable for screen share, and list of target apps or test APKs if validation is part of scope.",
      },
    ],
    benefits: [
      { title: "Faster go-live", desc: "Reduce first-week wiring mistakes." },
      { title: "Documented handoff", desc: "Session notes tied to your slot map." },
      { title: "Android & iPhone", desc: "Scope adjusted per platform on quote." },
      { title: "Add-on friendly", desc: "Combine with group control configuration." },
    ],
    faq: [
      { q: "Do you supply control software licenses?", a: "Software licensing is buyer or third-party unless explicitly listed on proforma. We configure hardware paths for your chosen stack." },
      { q: "Can setup be done before shipment?", a: "Pre-ship validation happens in Guangzhou. Remote session is usually post-delivery when buyer has host PC ready." },
    ],
    relatedSlugs: ["group-control-system-configuration", "phone-farm-setup"],
  },
  {
    slug: "group-control-system-configuration",
    title: "Group Control System Configuration",
    subtitle: "Batch tasks, synchronized actions, and team device grouping for agency-scale farms",
    category: "Software integration",
    heroImage: IMAGES.remoteControl.detail,
    intro:
      "Group control configuration organizes dozens or hundreds of real devices into project groups — enabling synchronized taps, scheduled tasks, and multi-user access patterns common in social media and e-commerce ops teams.",
    sections: [
      {
        heading: "Grouping model",
        body: "Devices mapped to client/project groups on host PC. USB tree and hub tier must support concurrent operations — undersized hubs cause sync failures during bulk actions.",
      },
      {
        heading: "Synchronized operations",
        body: "Operation sync runs the same gesture or script across a selected group. Requires stable USB and adequate host CPU/RAM — host PC requirements should be confirmed before large sync jobs.",
      },
      {
        heading: "Team access",
        body: "Share device clusters among operators with role separation on software side. Hardware remains in your facility; access control is via your batch-control platform.",
      },
    ],
    benefits: [
      { title: "Agency workflows", desc: "Multiple clients on one rack with clear group boundaries." },
      { title: "Batch efficiency", desc: "Reduce per-device manual steps." },
      { title: "Scalable groups", desc: "Add chassis stacks as client count grows." },
      { title: "Automation hooks", desc: "ADB and script integration where quoted." },
    ],
    faq: [
      { q: "Is this the same as RPA?", a: "We configure hardware and batch paths. RPA/script logic is buyer-owned tooling on top of stable USB connectivity." },
      { q: "How many devices per sync group?", a: "Depends on hub tier, host PC, and operation type — confirmed during quotation, not a fixed platform limit." },
    ],
    relatedSlugs: ["device-operation-workflow", "synchronized-device-control"],
  },
  {
    slug: "bulk-device-deployment",
    title: "Bulk Device Deployment",
    subtitle: "Large-scale provisioning — APK prep, account setup scope, and fleet health checks",
    category: "Enterprise",
    heroImage: IMAGES.factory,
    intro:
      "Bulk deployment serves orders of 50+ nodes or multi-rack projects — coordinating phased assembly, burn-in batches, crated sea freight, and optional on-site or remote rollout support.",
    sections: [
      {
        heading: "Provisioning scope",
        body: "May include APK pre-install, proxy binding assistance at hardware/network layer, slot labeling, and health monitoring setup. Account credentials and platform policy compliance remain buyer responsibility.",
      },
      {
        heading: "Phased delivery",
        body: "Chassis wave one, devices wave two, or region-split shipments — each phase on proforma line with its own ETA. Common for room-scale and overseas warehouse handoff.",
      },
      {
        heading: "Project management",
        body: "Named engineering contact, BOM revision control, and packing photo approval gates before each export batch.",
      },
    ],
    benefits: [
      { title: "Volume coordination", desc: "Single BOM across multiple cartons." },
      { title: "Burn-in at scale", desc: "Checklist per batch when ordered." },
      { title: "Sea freight crating", desc: "Shock-rated packing for racks." },
      { title: "Enterprise RFQ", desc: "Custom cabinet integration available." },
    ],
    faq: [
      { q: "Minimum size for bulk deployment service?", a: "Typically 50+ nodes or multi-box rack — smaller orders use standard setup SKU." },
      { q: "Do you operate buyer accounts?", a: "No. We provision hardware and documented network paths; account operations stay with buyer team." },
    ],
    relatedSlugs: ["enterprise-deployment", "overseas-delivery"],
  },
  {
    slug: "custom-hardware-solution",
    title: "Custom Hardware Solution",
    subtitle: "Bespoke slot counts, chassis dimensions, cooling, and rack integration",
    category: "Engineering",
    heroImage: IMAGES.customCabinet.hero,
    intro:
      "Custom hardware quotes non-catalog node layouts — mixed board sizes, special cable egress, redundant PSU, or integration with existing rack standards. Drawing approval before payment.",
    sections: [
      {
        heading: "Design inputs",
        body: "Send device matrix (model, count, connection mode), target rack footprint, ambient temperature range, and photos of install site when available.",
      },
      {
        heading: "Engineering output",
        body: "BOM with chassis drawing or revision notes, fan CFM class, hub tier, PSU wattage planning range, and lead time tied to fabrication slot.",
      },
      {
        heading: "Samples",
        body: "Prototype or single-box pilot before full rack PO is common for custom programs.",
      },
    ],
    benefits: [
      { title: "Non-standard density", desc: "Layouts beyond catalog slot maps." },
      { title: "Mixed models", desc: "Android and specialty board sizes on one quote." },
      { title: "Rack integration", desc: "Mounting ears and cable service loops." },
      { title: "Revision control", desc: "Drawing sign-off before batch build." },
    ],
    faq: [
      { q: "Can you copy a third-party chassis?", a: "We design from your device matrix and constraints — we do not clone other vendors' proprietary enclosures." },
      { q: "Custom MOQ?", a: "Usually higher than catalog MOQ 1 — stated on custom proforma." },
    ],
    relatedSlugs: ["custom-cabinet", "enterprise-deployment"],
  },
  {
    slug: "enterprise-deployment",
    title: "Enterprise Deployment",
    subtitle: "Full rack programs with redundant power, segmentation, and account management",
    category: "Enterprise",
    heroImage: IMAGES.customCabinet.detail,
    intro:
      "Enterprise deployment combines custom cabinets, network segmentation plans, redundant PSU options, remote monitoring scope, and dedicated sales/engineering contact through install week.",
    sections: [
      {
        heading: "Infrastructure layer",
        body: "Rackmount cabinets, PDU planning, labeled USB/power plant, and segregated hub groups for blast-radius control during maintenance.",
      },
      {
        heading: "Network segmentation",
        body: "Router and switch sizing for per-group IP, VLAN notes when buyer IT requires, and OTG offload paths on large Android farms.",
      },
      {
        heading: "Support model",
        body: "SLA-backed spare parts pool and escalation path when on invoice — not included on standard catalog sample orders.",
      },
    ],
    benefits: [
      { title: "Room-scale", desc: "50–500+ node programs." },
      { title: "Redundancy options", desc: "PSU and fan spares on BOM." },
      { title: "Documentation", desc: "Load sheets and wiring books for facilities." },
      { title: "Phased rollout", desc: "Region or team waves on one master BOM." },
    ],
    faq: [
      { q: "Do you install on-site overseas?", a: "Default is Guangzhou assembly plus remote support. On-site install quoted case-by-case when travel is feasible." },
      { q: "Enterprise payment terms?", a: "Bank T/T milestones common — not USDT-only checkout for large POs." },
    ],
    relatedSlugs: ["bulk-device-deployment", "maintenance-support"],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    subtitle: "Spare parts, remote diagnostics, and SLA options for production farms",
    category: "After-sales",
    heroImage: IMAGES.workshop,
    intro:
      "Maintenance programs cover fan/PSU/cable replacements, firmware or hub board swaps, remote diagnostics, and optional SLA response windows — scoped per chassis generation on active invoice.",
    sections: [
      {
        heading: "Spare parts kit",
        body: "Pre-position fan trays, PSU modules, uplink cables, and node harnesses matched to your chassis generation — reduces air freight on single-part emergencies.",
      },
      {
        heading: "Remote diagnostics",
        body: "Screen-share sessions to isolate USB vs PSU vs node failures. On-site dispatch not included unless travel quoted.",
      },
      {
        heading: "Warranty alignment",
        body: "Maintenance SKUs complement standard chassis warranty — see Refund Policy and proforma for defect vs wear boundaries.",
      },
    ],
    benefits: [
      { title: "Uptime focus", desc: "Spares pool for production teams." },
      { title: "Generation match", desc: "Parts tied to your BOM revision." },
      { title: "SLA optional", desc: "Response window on enterprise invoice." },
      { title: "Upgrade path", desc: "Hub tier bumps when expanding slots." },
    ],
    faq: [
      { q: "Is maintenance mandatory?", a: "No — optional after standard warranty. Recommended for 24/7 production racks." },
      { q: "Can I buy parts only?", a: "Yes — quote fan, PSU, hub, or cable by chassis family." },
    ],
    relatedSlugs: ["phone-farm-setup", "warranty-after-sales-phone-farm-hardware"],
  },
  {
    slug: "sample-solution",
    title: "Sample Solution",
    subtitle: "Evaluation kits — MOQ 1, setup guide, and onboarding call before bulk PO",
    category: "Evaluation",
    heroImage: IMAGES.phoneFarmBox.card,
    intro:
      "Sample solution packages one catalog chassis (or agreed pilot SKU) with standard hub/PSU match, quick-start wiring diagram, and optional remote onboarding — so buyers validate mount, cooling, and control stack before bulk rack orders.",
    sections: [
      {
        heading: "What samples prove",
        body: "Build quality, fan noise, USB stability with your phone models, packing for your forwarder, and ops team comfort with batch-control handoff.",
      },
      {
        heading: "Sample to bulk",
        body: "Reference sample order number on bulk RFQ — sales reuses verified connection mode and model list on expanded BOM.",
      },
      {
        heading: "Pricing",
        body: "Catalog list price applies unless volume tier quoted separately. Sample freight usually air express.",
      },
    ],
    benefits: [
      { title: "MOQ 1", desc: "Low risk entry for overseas buyers." },
      { title: "Fast path", desc: "Often shorter lead than custom slot counts." },
      { title: "Onboarding call", desc: "Optional remote session included on some SKUs." },
      { title: "Bulk continuity", desc: "Same supplier for scale-up." },
    ],
    faq: [
      { q: "Sample return for refund?", a: "See Refund Policy — evaluation samples are not automatic full refund if deployed." },
      { q: "Can sample include phones?", a: "Optional on quote — extends lead time and customs documentation." },
    ],
    relatedSlugs: ["phone-farm-setup", "overseas-delivery"],
  },
  {
    slug: "overseas-delivery",
    title: "Overseas Delivery",
    subtitle: "International logistics from Guangzhou — air, sea, docs, and door-to-door options",
    category: "Logistics",
    heroImage: IMAGES.warehouse,
    intro:
      "Overseas delivery coordinates export packing, commercial invoice, packing list, courier or sea booking, and tracking handoff — destination duties and import compliance remain buyer responsibility unless DDP quoted.",
    sections: [
      {
        heading: "Air vs sea",
        body: "Air for samples and urgent replacements; sea LCL or crated freight for multi-box racks. Freight preference on RFQ — we return viable options.",
      },
      {
        heading: "Documentation",
        body: "Commercial invoice, packing list, weights/dimensions after packing plan confirmed. Battery-in-device shipments may need extra declarations — declare on RFQ.",
      },
      {
        heading: "Forwarder cooperation",
        body: "We ship to your freight forwarder or door address. Provide consignee legal name and contact phone for courier.",
      },
    ],
    benefits: [
      { title: "Guangzhou export hub", desc: "Consolidated factory-to-carton workflow." },
      { title: "Packing photos", desc: "Available before ship on bulk orders." },
      { title: "Global regions", desc: "North America, EU, SEA, Middle East common." },
      { title: "Phased ship", desc: "Split waves on one master PO." },
    ],
    faq: [
      { q: "Who pays import duty?", a: "Buyer unless DDP explicitly on proforma." },
      { q: "Can you ship phones and chassis separately?", a: "Yes — phased plan on quote for customs and cash flow." },
    ],
    relatedSlugs: ["export-shipping-air-vs-sea-phone-farm", "bulk-device-deployment"],
  },
];

export function getServicePage(slug: string) {
  return SERVICE_PAGES.find((p) => p.slug === slug);
}
