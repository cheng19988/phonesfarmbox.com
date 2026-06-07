export type ProductFAQ = { q: string; a: string };

export type ProductB2B = {
  overview: string;
  bestFor: string;
  recommendedConfiguration: string;
  capacity: string;
  cooling: string;
  powerAndPorts: string;
  compatibleModels: string;
  deploymentNotes: string[];
  included: string[];
  optionalAddons: string[];
  shippingPackage: string[];
  moq: string;
  leadTime: string;
  warranty: string;
  imageCaption: string;
  faq: ProductFAQ[];
  relatedSlugs: string[];
};

export const PRODUCT_B2B: Record<string, ProductB2B> = {
  "phone-farm-box": {
    overview:
      "Standard Android phone farm chassis for buyers who need SIM-capable nodes, camera paths on supported models, and rackable density without desk clutter. Each unit consolidates power, USB data, and cooling into one export-ready box.",
    bestFor: "Agencies and studios running multi-account Android workflows per chassis with SIM or camera requirements.",
    recommendedConfiguration:
      "Chassis (slot count on quote) + matched hub tier + PSU for quoted phone models + control PC with batch software. Add network router bundle when each box needs isolated IP groups.",
    capacity: "Confirmed before quote — slot layout depends on phone height and chassis variant.",
    cooling: "Active top-exhaust fan tray; fan count and CFM target confirmed per order.",
    powerAndPorts: "Single chassis AC input; internal USB hub tree to control PC — port map on wiring diagram.",
    compatibleModels: "Android phone models confirmed before quote (board size, USB mode, ROM path).",
    deploymentNotes: [
      "Confirm phone model list before mount — we do not assume universal brackets.",
      "Plan one dedicated PC USB3 port per box uplink; avoid consumer hubs on the host side.",
      "Allow rack clearance for top fan exhaust; ambient above 30°C may need extra fan kit.",
      "Batch control software install on host PC before first production run.",
    ],
    included: ["Metal chassis with fan tray", "Internal USB/power distribution", "Data cables & mains lead", "Batch control software (per order terms)", "Burn-in test report (sample orders)"],
    optionalAddons: ["Extra fan kit", "Network router bundle", "Remote setup session", "Spare USB cables"],
    shippingPackage: ["Foam-lined export carton", "Weight/dimensions on commercial invoice", "Digital wiring diagram"],
    moq: "1 unit sample",
    leadTime: "In-stock: 3–5 business days dispatch; custom node mix: 7–15 days",
    warranty: "12-month chassis & PSU defect support; phones per supply terms on invoice",
    imageCaption: "Product illustration — configuration varies by order",
    relatedSlugs: ["usb-hub", "power-supply-solution", "cooling-solution", "network-equipment"],
    faq: [
      { q: "Can I mount my own phones?", a: "Yes. Send model list and dimensions — we confirm slot compatibility and power draw before quote." },
      { q: "Is SIM supported on every model?", a: "No — SIM path depends on phone model and ROM. We mark SIM-capable models on the proforma." },
      { q: "How many PCs do I need?", a: "Most buyers run 1 PC per 1–3 boxes depending on hub tier and script load — confirm at quote." },
      { q: "Can boxes stack in a rack?", a: "Yes — stackable chassis with airflow spacing noted in packing guide." },
      { q: "What is not included?", a: "Phones (unless quoted), host PC, proxies/VPN, and destination import duties." },
    ],
  },
  "motherboard-box": {
    overview:
      "Headless Android node chassis for teams optimizing cost per slot. Screenless motherboard nodes reduce unit cost while keeping USB debugging and batch control from a single host PC.",
    bestFor: "Automation teams and QA labs that do not need displays or cameras on every node.",
    recommendedConfiguration:
      "Motherboard box (node count on quote) + industrial USB hub + PSU sized to node list + temporary screen kit for initial USB auth if needed.",
    capacity: "Confirmed before quote — depends on board footprint and node mix.",
    cooling: "Integrated fan tray; airflow direction marked on chassis.",
    powerAndPorts: "Central PSU rail; per-node power leads; USB hub uplink to host PC.",
    compatibleModels: "Mainboard models confirmed before production — USB debugging must be supported.",
    deploymentNotes: [
      "Keep a temporary display handy for USB debugging re-authorization on some boards.",
      "Label each node slot in software to match physical position for easier maintenance.",
      "Motherboard nodes run hotter under sustained CPU load — verify fan tray is unobstructed.",
    ],
    included: ["Chassis + fan tray", "Node mounting hardware", "Power harness", "USB hub module (tier per quote)"],
    optionalAddons: ["Temporary screen kit", "OTG Ethernet module", "Stacking brackets"],
    shippingPackage: ["Double-wall carton", "Anti-static wraps if boards pre-installed"],
    moq: "1 unit",
    leadTime: "3–7 business days standard; board prep adds time if we mount boards",
    warranty: "Chassis & PSU 12 months; motherboards per supplier terms",
    imageCaption: "Assembly reference — node count varies",
    relatedSlugs: ["empty-box-chassis", "usb-hub", "cooling-solution", "android-phone-farm"],
    faq: [
      { q: "Why choose motherboard over full phone box?", a: "Lower per-node cost and higher density when you do not need SIM/camera on every slot." },
      { q: "What happens if USB auth is lost?", a: "Connect a temporary screen to re-enable debugging — we can include a loaner kit as add-on." },
      { q: "Can I mix board models in one box?", a: "Only if footprints match — usually one model family per chassis for wiring consistency." },
      { q: "Do you supply the boards?", a: "Optional — quote as BYO boards or vendor-sourced nodes." },
      { q: "Is ROM customizable?", a: "Official Android or custom ROM paths confirmed before mount." },
    ],
  },
  "android-phone-farm": {
    overview:
      "Turnkey Android cluster SKU — chassis, hub tier, cooling, and cabling matched to your quoted device list on one BOM. Reduces integration time for buyers replacing ad-hoc desk setups.",
    bestFor: "Buyers wanting a single invoice for box + accessories without picking each component separately.",
    recommendedConfiguration:
      "Target device count → chassis qty from capacity estimator (slots per box confirmed at quote) + hub/PSU tier from planning tools + optional network kit for multi-account segmentation.",
    capacity: "Confirmed before quote — box count sized from your device list.",
    cooling: "PSU and fan package matched to quoted Android models.",
    powerAndPorts: "Pre-mapped USB tree; one primary PC uplink (secondary PC optional).",
    compatibleModels: "Android models locked at quote — mount and power verified per model.",
    deploymentNotes: [
      "Lock device list before production — changes after assembly may delay ship date.",
      "First boot checklist covers ADB visibility on all nodes before handoff.",
      "For large farms, plan phased hub uplinks rather than one overloaded PC port.",
    ],
    included: ["Box + cooling + hub tier as quoted", "Cabling kit", "Control software setup sheet"],
    optionalAddons: ["Pre-loaded APK bundle (customer list)", "Remote onboarding session", "Additional boxes"],
    shippingPackage: ["Carton or pallet per quantity", "Serial manifest when devices included"],
    moq: "1 cluster",
    leadTime: "5–10 business days depending on device sourcing",
    warranty: "Hardware shell 12 months; phones per OEM pass-through",
    imageCaption: "Deployment example",
    relatedSlugs: ["phone-farm-box", "motherboard-box", "remote-control-setup", "network-equipment"],
    faq: [
      { q: "How is this different from buying a phone farm box alone?", a: "This SKU bundles hub, cooling, and cabling tiers pre-matched to your device list — one BOM, one lead time." },
      { q: "Can I supply my own phones?", a: "Yes — share model list for mount and burn-in scope before quote." },
      { q: "Typical lead time?", a: "5–10 business days when devices are in stock; longer if sourcing specific models." },
      { q: "Multi-box discount?", a: "Volume pricing from 3+ boxes — request bulk quote." },
      { q: "Software included?", a: "Batch control setup sheet included; remote setup available as add-on." },
    ],
  },
  "iphone-phone-farm": {
    overview:
      "iPhone cluster hardware and integration for script teams needing batch control without per-device manual trust workflows. Model mix, cable plan, and host requirements are confirmed before build.",
    bestFor: "Script developers and agencies running batch iPhone operations — cluster size confirmed at quote.",
    recommendedConfiguration:
      "Quoted iPhone count + powered USB hub topology + Mac or PC host (confirmed at quote) + remote control setup service for first deployment.",
    capacity: "Confirmed before quote — density depends on model and cable plan.",
    cooling: "Fan assist where required; thermal profile varies by iOS workload.",
    powerAndPorts: "Powered USB-C/Lightning hub; host count confirmed at quote.",
    compatibleModels: "iPhone models & iOS range confirmed before quote.",
    deploymentNotes: [
      "Lightning vs USB-C cable plan must be fixed before packing — mixed orders need explicit slot map.",
      "Host machine spec (Mac mini vs PC) affects control stack — confirm before purchase.",
      "Allow extra lead time for model-specific burn-in and trust workflows.",
    ],
    included: ["Rack/box layout as quoted", "Hub/charging plan", "Control stack setup notes"],
    optionalAddons: ["Remote control setup service", "Mac mini sourcing (TBD)", "Spare cables"],
    shippingPackage: ["Shock packaging if devices shipped installed", "Separate hub carton if large"],
    moq: "1 cluster (practical minimum discussed at quote)",
    leadTime: "7–14 business days — model mix dependent",
    warranty: "Integration support 90 days; Apple device warranty unchanged",
    imageCaption: "Product illustration — cable plan per quote",
    relatedSlugs: ["remote-control-setup", "usb-hub", "network-equipment", "custom-cabinet"],
    faq: [
      { q: "Is jailbreak required?", a: "No — control path depends on quoted stack; confirm compatible iOS range at quote." },
      { q: "Can I mix iPhone generations?", a: "Possible with separate cable zones — increases integration time; confirm on BOM." },
      { q: "Do you supply iPhones?", a: "Optional — quote with or without devices; model availability affects lead time." },
      { q: "Mac or PC host?", a: "Depends on control stack — stated on quote before payment." },
      { q: "Minimum practical cluster size?", a: "Depends on hub tier and setup scope — smaller samples discussed case by case at quote." },
    ],
  },
  "real-device-phone-farm": {
    overview:
      "Project SKU for buyers standardizing a full room — multiple chassis, network, accessories, and documentation on one scope. Includes BOM, layout diagram, and phased ship options for large rollouts.",
    bestFor: "Operators planning multi-chassis device rooms with mixed SKUs and facilities coordination.",
    recommendedConfiguration:
      "Workshop call → device matrix → box count + hub/PSU/network lines → optional custom cabinet → burn-in schedule → split or single shipment.",
    capacity: "Project-based — total device count confirmed before quote.",
    cooling: "Per-box cooling plus room airflow guidance document.",
    powerAndPorts: "Electrical load sheet for facilities team.",
    compatibleModels: "Mixed Android/iPhone possible — segmented by box type.",
    deploymentNotes: [
      "Facilities team should review electrical load sheet before install date.",
      "Phased delivery (chassis first, devices follow) available for import timing.",
      "Dedicated project contact for large-scope deployments.",
    ],
    included: ["Bill of materials", "Layout diagram", "QC checklist copy", "Shipping plan"],
    optionalAddons: ["Custom cabinet", "Enterprise PM", "On-call burn-in monitoring"],
    shippingPackage: ["Split shipments available"],
    moq: "Confirm at quote — typically 2+ boxes",
    leadTime: "2–4 weeks project schedule",
    warranty: "Per-line-item on invoice",
    imageCaption: "Deployment example — multi-box layout",
    relatedSlugs: ["phone-farm-box", "custom-cabinet", "network-equipment", "remote-control-setup"],
    faq: [
      { q: "Is this a single product or a project?", a: "A project BOM — multiple SKUs, one quote, one schedule." },
      { q: "Can Android and iPhone mix in one room?", a: "Yes — usually separate boxes per platform for wiring clarity." },
      { q: "Do you visit on-site?", a: "Remote first; on-site supervision quoted separately if needed." },
      { q: "How is shipping staged?", a: "Single or split shipment — chassis, accessories, devices can ship in phases." },
      { q: "Who is the single point of contact?", a: "Named sales/engineering contact on proforma for bulk projects." },
    ],
  },
  "empty-box-chassis": {
    overview:
      "Bare metal chassis for DIY builders expanding an existing farm or mounting customer-owned boards. Includes fan mounts and cable channels — PSU, hub, and fans ordered separately or as kits.",
    bestFor: "Teams with existing nodes who need additional slots or custom internal layout.",
    recommendedConfiguration:
      "Chassis + fan kit + PSU module + hub shelf — share board dimensions for mount hole confirmation.",
    capacity: "Slot count per chassis variant — confirm drawing before order.",
    cooling: "Fan mounts included; fans ordered separately or as kit.",
    powerAndPorts: "PSU mount points; hub shelf; cable channels only.",
    compatibleModels: "Buyer-supplied — share datasheets for max board dimensions.",
    deploymentNotes: [
      "Send photos or drawings of boards before order — we advise on slot spacing.",
      "DIY assembly manual covers fan direction and PSU torque specs.",
      "Flat-pack ship saves freight; assembled ship available.",
    ],
    included: ["Empty metal chassis", "Fan grill / mount hardware", "Basic assembly manual"],
    optionalAddons: ["Fan kit", "PSU module", "USB hub shelf", "Custom paint/logo (bulk)"],
    shippingPackage: ["Flat-pack or assembled — selectable at quote"],
    moq: "1 chassis",
    leadTime: "3–5 business days",
    warranty: "12 months on chassis fabrication defects",
    imageCaption: "Chassis illustration",
    relatedSlugs: ["cooling-solution", "power-supply-solution", "usb-hub", "phone-farm-box"],
    faq: [
      { q: "What is not included?", a: "Phones, motherboards, PSU, hub, and fans unless added as line items." },
      { q: "Can you drill custom mount patterns?", a: "Bulk custom drilling quoted — send board CAD or sample." },
      { q: "Flat-pack vs assembled ship?", a: "Selectable — flat-pack lowers air freight cost." },
      { q: "Compatible with your full boxes?", a: "Same chassis family — accessories often interchangeable; confirm generation." },
      { q: "MOQ for custom color/logo?", a: "Bulk only — MOQ stated on custom quote." },
    ],
  },
  "usb-hub": {
    overview:
      "Industrial USB hub modules for farms outgrowing PC port count or replacing consumer hubs that drop ADB links under load. Tier selection based on node count and host PC count.",
    bestFor: "Existing farms adding nodes or replacing failed consumer-grade hubs.",
    recommendedConfiguration:
      "Nodes ÷ ports per hub = hub qty; one powered hub per tier; active USB3 extension for runs over 3m.",
    capacity: "Port tiers confirmed before quote — cascaded layouts available for larger farms.",
    cooling: "Metal enclosures; powered hubs required — amperage on label.",
    powerAndPorts: "Dedicated adapter per hub tier; USB3 uplink to host.",
    compatibleModels: "Android ADB paths standard; iPhone hub chipset quoted separately.",
    deploymentNotes: [
      "Never cascade unpowered consumer hubs — use industrial powered tiers only.",
      "Label uplink ports on host PC to match box ID in batch software.",
      "Spare hub recommended for large node rooms to minimize downtime.",
    ],
    included: ["Hub module", "Power adapter (region plug)", "Mounting screws"],
    optionalAddons: ["Extended USB3 active cables", "Secondary uplink card", "19″ rack ears"],
    shippingPackage: ["Small parcel; anti-static bag"],
    moq: "1 unit",
    leadTime: "2–5 business days",
    warranty: "6–12 months on hub electronics (see invoice)",
    imageCaption: "Accessory product illustration",
    relatedSlugs: ["power-supply-solution", "phone-farm-box", "motherboard-box", "network-equipment"],
    faq: [
      { q: "How many devices per hub?", a: "Depends on tier and amperage — port count confirmed on quote datasheet." },
      { q: "Will this fix ADB disconnects?", a: "Industrial powered hubs reduce dropouts vs consumer gear — host PC and cable quality also matter." },
      { q: "iPhone compatible?", a: "Separate hub chipset quoted for iPhone paths." },
      { q: "Rack mountable?", a: "19″ ears available as add-on for select tiers." },
      { q: "Can I mix hub brands?", a: "Possible but we recommend one tier per box for consistent power budgeting." },
    ],
  },
  "power-supply-solution": {
    overview:
      "Industrial PSU modules sized from your node list — replaces overloaded power strips when adding slots or upgrading chassis. Output harness matched to box family on quote.",
    bestFor: "Buyers upgrading power after node expansion or replacing failed PSU modules.",
    recommendedConfiguration:
      "Run power estimator (Planning Tools) → add 15–20% headroom → match harness to chassis generation.",
    capacity: "Wattage sized from node list — confirmed before invoice.",
    cooling: "PSU fan exhaust orientation noted in install guide.",
    powerAndPorts: "Input: 110–240 VAC; output rails per agreed harness.",
    compatibleModels: "Electrical spec only — chassis family must match harness.",
    deploymentNotes: [
      "Verify facility circuit capacity before plugging multiple boxes on one breaker.",
      "Do not exceed rated wattage — recalculate when adding nodes.",
      "Keep PSU exhaust path clear inside rack.",
    ],
    included: ["PSU module", "Input cable (region)", "Output harness to box family"],
    optionalAddons: ["Redundant PSU (custom)", "PDU shelf", "Spare harness"],
    shippingPackage: ["Heavy parcel; weight on invoice for freight"],
    moq: "1 unit",
    leadTime: "3–7 business days",
    warranty: "12 months manufacturing defect",
    imageCaption: "Power module reference",
    relatedSlugs: ["cooling-solution", "phone-farm-box", "usb-hub", "empty-box-chassis"],
    faq: [
      { q: "How do I size wattage?", a: "Use our power estimator or send node list — we calculate with headroom on quote." },
      { q: "110V vs 220V?", a: "Input range 110–240 VAC — region plug supplied per destination." },
      { q: "Compatible with empty chassis?", a: "Yes — harness matched to chassis family at quote." },
      { q: "Redundant PSU available?", a: "Custom quote for rack projects." },
      { q: "Can I replace PSU myself?", a: "Yes — manual covers disconnect order; warranty void if harness modified." },
    ],
  },
  "cooling-solution": {
    overview:
      "Fan upgrade kits for hot climates, sustained load, or retrofitting older chassis. Matched to airflow path of your box family — send chassis photo if unsure.",
    bestFor: "Operators seeing thermal throttling or upgrading first-generation boxes.",
    recommendedConfiguration:
      "Identify chassis family → select fan kit → confirm 12V tap from box PSU → replace filters quarterly.",
    capacity: "Fan kits sized to chassis airflow path.",
    cooling: "Replacement/upgrade fans; filter mesh optional.",
    powerAndPorts: "12V fan harness from box PSU — connector confirmed before ship.",
    compatibleModels: "Chassis family must match — send photo of existing box.",
    deploymentNotes: [
      "Maintain intake/exhaust direction labels after swap.",
      "Clean filters every 30 days in dusty environments.",
      "Pair with room AC planning for 24/7 dense racks.",
    ],
    included: ["Fan set", "Mount screws", "Airflow direction label"],
    optionalAddons: ["Temperature probe kit", "Filter pack", "Fan speed controller (custom)"],
    shippingPackage: ["Small carton"],
    moq: "1 kit",
    leadTime: "2–5 business days",
    warranty: "6 months on fan motors",
    imageCaption: "Cooling accessory reference",
    relatedSlugs: ["phone-farm-box", "motherboard-box", "empty-box-chassis", "power-supply-solution"],
    faq: [
      { q: "How many fans do I need?", a: "Depends on chassis generation and node load — kit spec confirmed at quote." },
      { q: "Will this fit any box?", a: "No — chassis family must match; send photo if unsure." },
      { q: "DIY install?", a: "Yes — manual included; we offer remote guidance as add-on." },
      { q: "Filter maintenance?", a: "Clean or replace filters every 30 days in dusty sites." },
      { q: "Warranty on motors?", a: "6 months manufacturing defect — see invoice." },
    ],
  },
  "network-equipment": {
    overview:
      "Router, switch, and OTG Ethernet accessories for multi-account farms needing network segmentation or wired offload. IP planning worksheet included — proxy binding remains customer workflow.",
    bestFor: "Multi-account setups needing router segmentation or Android OTG Ethernet paths.",
    recommendedConfiguration:
      "Router/switch tier matched to quoted node count + patch cables + IP worksheet; add switch if PoE cameras or APs required.",
    capacity: "Depends on router model quoted.",
    cooling: "Fanless shelf mount typical; separate switch if PoE needed.",
    powerAndPorts: "WAN + LAN map diagram; OTG path for supported Android models.",
    compatibleModels: "Android OTG Ethernet when device supports it — confirm model list.",
    deploymentNotes: [
      "Document IP group per box before go-live.",
      "Separate management VLAN from device traffic when possible.",
      "Spare router recommended for production rooms.",
    ],
    included: ["Router or switch as quoted", "Patch cables (qty on invoice)", "IP planning worksheet"],
    optionalAddons: ["Router config service", "Spare switch", "Cat6 bulk"],
    shippingPackage: ["Retail router box inside export carton"],
    moq: "1 kit",
    leadTime: "3–7 business days",
    warranty: "OEM device warranty pass-through",
    imageCaption: "Network accessory reference",
    relatedSlugs: ["phone-farm-box", "android-phone-farm", "usb-hub", "remote-control-setup"],
    faq: [
      { q: "Do you configure proxies?", a: "We supply hardware and IP worksheet — proxy/VPN binding is customer-side." },
      { q: "One router per box?", a: "Topology depends on router model and account segmentation — confirmed at quote." },
      { q: "OTG Ethernet for all Android?", a: "Only supported models — confirm list before order." },
      { q: "Enterprise switch options?", a: "Quoted separately for rack projects." },
      { q: "Ship internationally?", a: "Yes — region-appropriate power plugs on network gear where applicable." },
    ],
  },
  "custom-cabinet": {
    overview:
      "Floor-standing or rack cabinets for enterprise rooms — position count and cable management confirmed on CAD before fabrication.",
    bestFor: "Enterprise buyers needing room-scale density with structured cable management.",
    recommendedConfiguration:
      "Site dimensions → tray design per device family → PDU plan → cooling/airflow note → factory acceptance test before ship.",
    capacity: "Position count confirmed on CAD before build.",
    cooling: "Ducted or aisle airflow plan; AC load note for facilities.",
    powerAndPorts: "PDU design, per-tray USB, network patch panel options.",
    compatibleModels: "Tray design per device family specified on drawing.",
    deploymentNotes: [
      "Facilities sign-off on floor load and AC capacity before manufacturing start.",
      "Sea freight crated; partial disassembly for air freight if agreed.",
      "On-site assembly supervision available as quoted add-on.",
    ],
    included: ["Cabinet fabrication", "Trays (qty per drawing)", "Cable management", "Factory acceptance test"],
    optionalAddons: ["On-site install supervision", "Monitoring cameras", "Spare trays"],
    shippingPackage: ["Sea freight crated; air option if agreed"],
    moq: "Project quote — typically 1 cabinet",
    leadTime: "4–8 weeks manufacturing",
    warranty: "12 months structural; electronics per sub-BOM",
    imageCaption: "Cabinet layout illustration",
    relatedSlugs: ["real-device-phone-farm", "phone-farm-box", "network-equipment", "power-supply-solution"],
    faq: [
      { q: "Minimum device count for custom cabinet?", a: "Scope confirmed on project quote — smaller custom racks discussed case by case." },
      { q: "CAD approval process?", a: "Drawing sign-off required before fabrication — revision rounds included in schedule." },
      { q: "On-site installation?", a: "Quoted separately — travel and duration on proforma." },
      { q: "Lead time?", a: "4–8 weeks manufacturing after CAD approval." },
      { q: "Mixed tray types?", a: "Yes — tray design per device family on same cabinet." },
    ],
  },
  "remote-control-setup": {
    overview:
      "Remote integration service for buyers who have hardware but need batch control, screen mirroring, and group operations configured before go-live. Scope tied to device count on your invoice.",
    bestFor: "Teams receiving hardware without in-house time to wire USB maps and control software.",
    recommendedConfiguration:
      "Hardware delivered → share USB/network map → remote session(s) → written config export → optional follow-up within 14 days.",
    capacity: "Covers device count on invoice (session blocks).",
    cooling: "N/A — service SKU.",
    powerAndPorts: "Session documents your USB/network map.",
    compatibleModels: "Android ADB standard; iPhone path requires quoted control stack.",
    deploymentNotes: [
      "Host PC with admin access required during session.",
      "Stable internet on farm side for screen share.",
      "Scope changes after session may need additional block.",
    ],
    included: ["Remote session(s)", "Screen layout template", "Written config export"],
    optionalAddons: ["Extra sessions", "On-site visit (travel quoted)", "Custom script handoff"],
    shippingPackage: ["Digital delivery — no physical ship"],
    moq: "1 service block",
    leadTime: "Schedule within 5 business days of hardware delivery notice",
    warranty: "Re-session within 14 days if scope unchanged and issue is config-related",
    imageCaption: "Control workstation reference",
    relatedSlugs: ["phone-farm-box", "iphone-phone-farm", "android-phone-farm", "network-equipment"],
    faq: [
      { q: "Is software license included?", a: "Service covers configuration — software licensing per hardware order terms." },
      { q: "How long is a session?", a: "Block length stated on quote — typically sized to device count." },
      { q: "On-site available?", a: "Yes — travel quoted separately." },
      { q: "iPhone and Android same session?", a: "Usually separate sessions unless small mixed scope agreed upfront." },
      { q: "What if config breaks after session?", a: "One re-session within 14 days for same scope — see warranty line on invoice." },
    ],
  },
};

export function getProductB2B(slug: string) {
  return PRODUCT_B2B[slug];
}

/** Hero + SEO description when B2B content exists — avoids stale DB shortDesc. */
export function getProductSummary(slug: string, dbShortDesc: string) {
  const b2b = getProductB2B(slug);
  return b2b?.overview ?? dbShortDesc;
}
