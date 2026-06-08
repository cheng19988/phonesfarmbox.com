export type ProductFAQ = { q: string; a: string };

export type ProductB2B = {
  overview: string;
  bestFor: string;
  notIdealFor: string;
  confirmBeforeQuote: string[];
  commonCombinations: string[];
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
    notIdealFor:
      "Buyers who only need bare metal without hub/PSU wiring, want turnkey iPhone clusters, or expect phones included without confirming models on quote.",
    confirmBeforeQuote: [
      "Destination country and expected chassis quantity",
      "Android phone model list or ask us to recommend compatible mounts",
      "Empty chassis vs phone-included vs BYO devices to mount",
      "USB / OTG / hybrid connection mode for your ROM and host workflow",
      "110V / 220V / 220–240V power region",
      "Whether you need packing photo, datasheet, or shipping size before shipment",
    ],
    commonCombinations: [
      "Phone Farm Box + USB hub tier + power supply module + cooling fan kit",
      "Phone Farm Box + network equipment for multi-account IP segmentation",
      "Phone Farm Box + remote setup session for host PC and batch-control handoff",
      "Multiple Phone Farm Boxes + custom cabinet for room-scale Android farm",
    ],
    recommendedConfiguration:
      "Chassis (slot count on quote) + matched hub tier + PSU for quoted phone models + control PC with batch software. Add network router bundle when each box needs isolated IP groups.",
    capacity: "Confirmed before quote — slot layout depends on phone height and chassis variant.",
    cooling: "Active top-exhaust fan tray; fan count and CFM target confirmed per order.",
    powerAndPorts:
      "Single chassis AC input; internal USB hub tree to control PC — port map on wiring diagram. Connection mode (USB, OTG, or hybrid) confirmed during quotation based on ROM path and host workflow.",
    compatibleModels: "Android phone models confirmed before quote (board size, USB mode, ROM path).",
    deploymentNotes: [
      "Confirm phone model list before mount — we do not assume universal brackets.",
      "USB mode suits standard wired debugging and host-side batch control; OTG mode when a quoted ROM or control path requires OTG-style wiring; hybrid layouts confirmed when mixing models or workflows.",
      "110V, 220V, or 220–240V regional power option confirmed before quote — final PSU, cable set, and plug standard depend on destination country and chassis configuration.",
      "Plan one dedicated PC USB3 port per box uplink; avoid consumer hubs on the host side.",
      "Allow rack clearance for top fan exhaust; ambient above 30°C may need extra fan kit.",
      "Batch control software install on host PC before first production run.",
      "USB debugging or device authorization may be required depending on your workflow — remote setup session can help verify wiring and control paths.",
    ],
    included: [
      "Metal chassis with fan tray",
      "Internal USB/power distribution (wiring mode per quote)",
      "Data cables & mains lead (plug standard per destination)",
      "Batch control software (per order terms)",
      "Burn-in test report (sample orders)",
    ],
    optionalAddons: [
      "Extra fan kit",
      "Network router bundle",
      "Remote setup session (wiring & control verification only)",
      "Spare USB cables",
      "Packing photo / shipping size request on RFQ",
      "Datasheet with confirmed dimensions and power draw",
    ],
    shippingPackage: [
      "Chassis or rack frame as quoted",
      "USB/OTG wiring kit per connection mode on BOM",
      "PSU and plug standard confirmed by region",
      "Cooling kit per configuration",
      "Foam-lined export carton — packing list confirmed before shipment",
      "Weight/dimensions on commercial invoice",
      "Digital wiring diagram",
    ],
    moq: "1 unit sample",
    leadTime: "In-stock: 3–5 business days dispatch; custom node mix: 7–15 days",
    warranty: "12-month chassis & PSU defect support; phones per supply terms on invoice",
    imageCaption: "Product illustration — configuration varies by order",
    relatedSlugs: ["usb-hub", "power-supply-solution", "cooling-solution", "network-equipment"],
    faq: [
      { q: "Can I mount my own phones?", a: "Yes. Send model list and dimensions — we confirm slot compatibility and power draw before quote." },
      { q: "USB vs OTG vs hybrid connection — which do I need?", a: "USB mode fits standard wired debugging and host-side control. OTG mode applies when your quoted ROM or control path needs OTG-style wiring. Hybrid is confirmed during quotation when you combine different phone models, ROM paths, or host workflows — we do not assume all ROMs support every mode." },
      { q: "What voltage plug do I get?", a: "110V, 220V, or 220–240V regional option confirmed before quote. Final PSU, cable set, and plug standard depend on destination country and chassis configuration — wattage is sized from your BOM, not fixed on this page." },
      { q: "Is SIM supported on every model?", a: "No — SIM path depends on phone model and ROM. We mark SIM-capable models on the proforma." },
      { q: "How many PCs do I need?", a: "Most buyers run 1 PC per 1–3 boxes depending on hub tier and script load — confirm at quote." },
      { q: "Can boxes stack in a rack?", a: "Yes — stackable chassis with airflow spacing noted in packing guide." },
      { q: "Can I get packing photos before shipment?", a: "Yes — request on RFQ or quote reply. Photos and shipping size provided after packing plan is confirmed when available for your build." },
      { q: "What is not included?", a: "Phones (unless quoted), host PC, proxies/VPN, and destination import duties." },
      { q: "Does this include phones?", a: "Not by default — phones are line items on quote when you choose phone-included or turnkey device sourcing. Empty chassis ships without devices unless on BOM." },
      { q: "What should I prepare before quote?", a: "Destination country, quantity, model list, connection mode, voltage region, and whether you need packing photos or datasheet — same fields as our contact RFQ form." },
      { q: "Does remote setup include account operation?", a: "No — remote setup covers host PC connectivity, USB wiring, and batch-control verification. It does not include operating your social media accounts, proxies, or platform outcome guarantees." },
    ],
  },
  "motherboard-box": {
    overview:
      "Headless Android node chassis for teams optimizing cost per slot. Screenless motherboard nodes reduce unit cost while keeping USB debugging and batch control from a single host PC.",
    bestFor: "Automation teams and QA labs that do not need displays or cameras on every node.",
    notIdealFor:
      "Teams needing SIM/camera on every slot, iPhone workflows, or buyers who want turnkey phones included without sourcing boards.",
    confirmBeforeQuote: [
      "Board model list and footprint — one family per chassis is typical",
      "Node count target and USB vs OTG wiring path",
      "Whether you supply boards (BYO) or want vendor-sourced nodes on quote",
      "110V / 220V / 220–240V destination power",
      "Temporary screen kit need for USB auth on headless boards",
    ],
    commonCombinations: [
      "Motherboard Box + USB hub tier + power supply sized to node list",
      "Motherboard Box + cooling fan kit for sustained CPU load",
      "Multiple Motherboard Boxes + custom cabinet for dense QA lab",
      "Motherboard Box + remote setup for ADB visibility and wiring map",
    ],
    recommendedConfiguration:
      "Motherboard box (node count on quote) + industrial USB hub + PSU sized to node list + temporary screen kit for initial USB auth if needed.",
    capacity: "Confirmed before quote — depends on board footprint and node mix.",
    cooling: "Integrated fan tray; airflow direction marked on chassis.",
    powerAndPorts:
      "Central PSU rail; per-node power leads; USB hub uplink to host PC. USB vs OTG wiring confirmed during quotation — not all board ROM paths support every mode.",
    compatibleModels: "Mainboard models confirmed before production — USB debugging must be supported.",
    deploymentNotes: [
      "Keep a temporary display handy for USB debugging re-authorization on some boards.",
      "USB mode suits standard ADB host-side workflows; OTG mode when quoted ROM or Ethernet offload path requires it — hybrid confirmed when mixing board families.",
      "110V, 220V, or 220–240V regional power option confirmed before quote; PSU wattage sized from node list on BOM.",
      "Label each node slot in software to match physical position for easier maintenance.",
      "Motherboard nodes run hotter under sustained CPU load — verify fan tray is unobstructed.",
      "Buyer should confirm target board model list before production; remote setup can verify wiring and ADB visibility.",
    ],
    included: ["Chassis + fan tray", "Node mounting hardware", "Power harness (region plug per quote)", "USB hub module (tier per quote)"],
    optionalAddons: ["Temporary screen kit", "OTG Ethernet module", "Stacking brackets", "Packing photo on RFQ", "Remote setup session"],
    shippingPackage: [
      "Chassis + fan tray",
      "USB/OTG wiring per quoted connection mode",
      "PSU and regional plug standard on invoice",
      "Cooling kit as configured",
      "Double-wall carton — packing list confirmed before shipment",
      "Anti-static wraps if boards pre-installed",
    ],
    moq: "1 unit",
    leadTime: "3–7 business days standard; board prep adds time if we mount boards",
    warranty: "Chassis & PSU 12 months; motherboards per supplier terms",
    imageCaption: "Assembly reference — node count varies",
    relatedSlugs: ["empty-box-chassis", "usb-hub", "cooling-solution", "android-phone-farm"],
    faq: [
      { q: "Why choose motherboard over full phone box?", a: "Lower per-node cost and higher density when you do not need SIM/camera on every slot." },
      { q: "USB vs OTG for motherboard farms?", a: "USB mode fits standard ADB debugging from a host PC. OTG mode applies when your quoted ROM or control path requires OTG-style wiring or Ethernet offload. Hybrid layouts are confirmed during quotation — we do not promise every ROM supports every mode." },
      { q: "What happens if USB auth is lost?", a: "Connect a temporary screen to re-enable debugging — we can include a loaner kit as add-on." },
      { q: "Can I mix board models in one box?", a: "Only if footprints match — usually one model family per chassis for wiring consistency." },
      { q: "Do you supply the boards?", a: "Optional — quote as BYO boards or vendor-sourced nodes." },
      { q: "Is ROM customizable?", a: "Official Android or custom ROM paths confirmed before mount." },
      { q: "Does this include phones?", a: "No — this SKU uses screenless motherboard nodes. Full phones belong on Phone Farm Box unless boards are quoted separately." },
      { q: "Can I choose USB or OTG?", a: "Yes — confirmed during quotation. USB suits standard ADB; OTG when quoted ROM path requires it." },
      { q: "Can you support 110V / 220V?", a: "Yes — regional PSU and plug standard confirmed before quote based on destination country." },
      { q: "What should I prepare before quote?", a: "Board model list, node count, connection mode, voltage region, and whether boards are BYO or vendor-sourced." },
    ],
  },
  "android-phone-farm": {
    overview:
      "Turnkey Android cluster SKU — chassis, hub tier, cooling, and cabling matched to your quoted device list on one BOM. Reduces integration time for buyers replacing ad-hoc desk setups.",
    bestFor: "Buyers wanting a single invoice for box + accessories without picking each component separately.",
    notIdealFor:
      "Buyers who only need one empty chassis, iPhone-only workflows, or accessory-only orders without a chassis SKU.",
    confirmBeforeQuote: [
      "Total Android device count and model list",
      "Connection mode and host PC plan",
      "Empty vs phone-included delivery",
      "Destination country and voltage region",
      "Network segmentation needs for multi-account workflows",
    ],
    commonCombinations: [
      "Turnkey Android cluster + network equipment for IP groups",
      "Turnkey Android cluster + remote setup for batch-control handoff",
      "Multiple clusters + real-device phone farm project BOM for full room",
    ],
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
    optionalAddons: ["Pre-loaded APK bundle (customer list)", "Remote onboarding session", "Additional boxes", "Packing photo / datasheet on RFQ"],
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
    notIdealFor:
      "Android-only workflows, buyers who want empty chassis without iOS integration scope, or customers expecting platform performance guarantees.",
    confirmBeforeQuote: [
      "iPhone model mix and iOS range for cable plan",
      "Lightning vs USB-C slot map — mixed generations need explicit BOM",
      "Battery-powered vs chassis power-feed per node",
      "Mac vs PC host requirement for your control stack",
      "Empty chassis vs phone-included — lead time differs",
      "110V / 220V / 220–240V export power",
    ],
    commonCombinations: [
      "iPhone Phone Farm + remote control setup for first deployment handoff",
      "iPhone Phone Farm + USB hub tier matched to cable plan",
      "iPhone Phone Farm + network equipment for segmented IP groups",
      "iPhone cluster + custom cabinet for enterprise iOS QA lab",
    ],
    recommendedConfiguration:
      "Quoted iPhone count + powered USB hub topology + Mac or PC host (confirmed at quote) + remote control setup service for first deployment.",
    capacity: "Confirmed before quote — density depends on model and cable plan.",
    cooling: "Fan assist where required; thermal profile varies by iOS workload.",
    powerAndPorts: "Powered USB-C/Lightning hub; host count confirmed at quote. Battery-powered phones vs chassis power-feed cable is a procurement choice confirmed on BOM.",
    compatibleModels: "iPhone models & iOS range confirmed before quote.",
    deploymentNotes: [
      "Lightning vs USB-C cable plan must be fixed before packing — mixed orders need explicit slot map.",
      "Battery-powered phones use the device battery — simpler to move devices but may need monitoring during 24/7 runs. Chassis power-feed cable routes power through the box harness — safer for fixed rack installs but devices stay in chassis.",
      "Phone-included orders typically need longer lead time: model list, battery condition check, cable/power plan, and burn-in scope are confirmed before assembly.",
      "Host machine spec (Mac mini vs PC) affects control stack — confirm before purchase.",
      "110V, 220V, or 220–240V PSU and plug standard confirmed for export destination.",
      "Allow extra lead time for model-specific burn-in and device authorization workflows.",
    ],
    included: ["Rack/box layout as quoted", "Hub/charging plan", "Control stack setup notes"],
    optionalAddons: ["Remote control setup service", "Mac mini sourcing (TBD)", "Spare cables", "Packing photo before shipment", "Datasheet with slot map"],
    shippingPackage: [
      "Chassis or rack frame as quoted",
      "Hub/cable kit per slot map",
      "PSU and plug standard by destination",
      "Devices listed separately if included on BOM",
      "Packing list and photos available before shipment on request",
    ],
    moq: "1 cluster (practical minimum discussed at quote)",
    leadTime: "Empty chassis: 7–14 business days typical; phone-included clusters often 10–21 business days — model mix, sourcing, and testing scope confirmed on proforma",
    warranty: "Integration support 90 days; Apple device warranty unchanged",
    imageCaption: "Product illustration — cable plan per quote",
    relatedSlugs: ["remote-control-setup", "usb-hub", "network-equipment", "custom-cabinet"],
    faq: [
      { q: "Is jailbreak required?", a: "No — control path depends on quoted stack; confirm compatible iOS range at quote." },
      { q: "Does iPhone farm include phones?", a: "Optional on quote — we ship empty chassis, chassis with your BYO devices, or source iPhones per agreed model list. Device line items are marked on the proforma." },
      { q: "Why do phone-included orders take longer?", a: "We confirm phone model, battery condition, cable/power plan, and testing process before assembly. Sourcing and burn-in add time beyond empty-chassis builds — lead time stated on quote." },
      { q: "Battery power vs chassis power-feed cable?", a: "Battery-powered nodes use the phone battery — flexible but needs monitoring on long runs. Chassis power-feed uses the box harness — better for fixed rack installs. Choice confirmed during quotation." },
      { q: "Can I mix iPhone generations?", a: "Possible with separate cable zones — increases integration time; confirm on BOM." },
      { q: "Mac or PC host?", a: "Depends on control stack — stated on quote before payment." },
      { q: "Does this include phones?", a: "Optional on quote — empty chassis, BYO devices, or vendor-sourced iPhones per agreed model list on proforma." },
      { q: "Can you support 110V / 220V?", a: "Yes — PSU and plug standard confirmed for export destination on BOM." },
      { q: "What should I prepare before quote?", a: "Model list, quantity, host type, cable plan preference, and whether devices are included — use our contact RFQ fields." },
      { q: "Can you provide packing photos?", a: "Yes — request on RFQ. Photos and shipping size provided after packing plan is confirmed when available." },
      { q: "Does remote setup include account operation?", a: "No — remote setup verifies wiring and batch-control workflow only. It does not operate TikTok/social accounts or guarantee platform results." },
    ],
  },
  "real-device-phone-farm": {
    overview:
      "Project SKU for buyers standardizing a full room — multiple chassis, network, accessories, and documentation on one scope. Includes BOM, layout diagram, and phased ship options for large rollouts.",
    bestFor: "Operators planning multi-chassis device rooms with mixed SKUs and facilities coordination.",
    notIdealFor:
      "Single-box sample orders or buyers who only need one accessory SKU without a project BOM.",
    confirmBeforeQuote: [
      "Total device count across Android/iPhone mix",
      "Room layout constraints and facilities electrical capacity",
      "Phased vs single shipment preference",
      "Network and remote setup scope for handoff",
    ],
    commonCombinations: [
      "Multiple Phone Farm Boxes + motherboard boxes + network equipment on one project BOM",
      "Room-scale deployment + custom cabinet + PDU plan",
      "Project BOM + remote setup blocks per platform (Android / iPhone)",
    ],
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
    notIdealFor:
      "Buyers wanting turnkey phone-included delivery, iPhone cluster integration, or a complete farm without sourcing PSU/hub/fans separately.",
    confirmBeforeQuote: [
      "Board or phone dimensions for mount spacing",
      "Whether PSU, hub, and fan kit are separate line items or bundled on quote",
      "USB / OTG / hybrid wiring plan for your ROM path",
      "110V / 220V / 220–240V regional power",
      "Flat-pack vs assembled ship preference",
    ],
    commonCombinations: [
      "Empty Box Chassis + buyer-provided phones or boards",
      "Empty Chassis + fan kit + PSU module + USB hub shelf",
      "Empty Chassis expansion alongside existing Phone Farm Box units",
    ],
    recommendedConfiguration:
      "Chassis + fan kit + PSU module + hub shelf — share board dimensions for mount hole confirmation.",
    capacity: "Slot count per chassis variant — confirm drawing before order.",
    cooling: "Fan mounts included; fans ordered separately or as kit.",
    powerAndPorts:
      "PSU mount points; hub shelf; cable channels only — connection mode and wattage confirmed on quote.",
    compatibleModels: "Buyer-supplied — share datasheets for max board dimensions.",
    deploymentNotes: [
      "Send photos or drawings of boards before order — we advise on slot spacing.",
      "Choose USB, OTG, or hybrid wiring during quotation — final harness depends on your ROM path and host workflow.",
      "110V, 220V, or 220–240V regional power option confirmed before quote; PSU and fan kit ordered separately or as line items.",
      "DIY assembly manual covers fan direction and PSU torque specs.",
      "Flat-pack ship saves freight; assembled ship available.",
      "Host PC required for first wiring test; USB debugging may be needed depending on workflow.",
      "Packing list confirms no phones/devices included unless added on BOM; request packing photo before shipment on RFQ if needed.",
    ],
    included: ["Empty metal chassis", "Fan grill / mount hardware", "Basic assembly manual"],
    optionalAddons: ["Fan kit", "PSU module", "USB hub shelf", "Custom paint/logo (bulk)", "Packing photo on RFQ", "Datasheet with mount dimensions"],
    shippingPackage: [
      "Chassis frame (flat-pack or assembled per quote)",
      "USB/OTG wiring not included unless added on BOM",
      "PSU, plug standard, and cooling kit confirmed separately",
      "Packing list confirmed before shipment",
    ],
    moq: "1 chassis",
    leadTime: "3–5 business days",
    warranty: "12 months on chassis fabrication defects",
    imageCaption: "Chassis illustration",
    relatedSlugs: ["cooling-solution", "power-supply-solution", "usb-hub", "phone-farm-box"],
    faq: [
      { q: "What is not included?", a: "Phones, motherboards, PSU, hub, and fans unless added as line items." },
      { q: "Can I choose USB or OTG wiring?", a: "Yes — connection mode is confirmed during quotation. USB suits standard host-side debugging; OTG when your quoted ROM path requires it; hybrid when mixing models or workflows." },
      { q: "Can you drill custom mount patterns?", a: "Bulk custom drilling quoted — send board CAD or sample." },
      { q: "Flat-pack vs assembled ship?", a: "Selectable — flat-pack lowers air freight cost." },
      { q: "Compatible with your full boxes?", a: "Same chassis family — accessories often interchangeable; confirm generation." },
      { q: "MOQ for custom color/logo?", a: "Bulk only — MOQ stated on custom quote." },
      { q: "Does this include phones?", a: "No — empty chassis only. Phones and boards are buyer-supplied or added as separate line items on quote." },
      { q: "Can I choose USB or OTG?", a: "Yes — wiring mode confirmed during quotation based on your ROM and host workflow." },
      { q: "Can you support 110V / 220V?", a: "Yes — PSU and plug ordered separately or as line items; region confirmed before quote." },
      { q: "What should I prepare before quote?", a: "Board dimensions or photos, slot count target, connection mode, voltage region, and accessory needs (fan/PSU/hub)." },
      { q: "Can you provide packing photos?", a: "Yes — note on RFQ. Packing list confirms no devices unless on BOM." },
    ],
  },
  "usb-hub": {
    overview:
      "Industrial USB hub modules for farms outgrowing PC port count or replacing consumer hubs that drop ADB links under load. Tier selection based on node count and host PC count.",
    bestFor: "Existing farms adding nodes or replacing failed consumer-grade hubs.",
    notIdealFor:
      "Buyers expecting a complete phone farm from a hub alone, or first-time buyers without a chassis or host PC plan.",
    confirmBeforeQuote: [
      "Node count and host PC USB port availability",
      "Android ADB vs iPhone hub chipset requirement",
      "Cable run lengths (active extension needed over 3m)",
      "Chassis family the hub must integrate with",
    ],
    commonCombinations: [
      "USB hub as replacement or expansion for Phone Farm Box / Motherboard Box",
      "USB hub + power supply upgrade when adding nodes",
      "USB hub + network equipment when combining data and IP segmentation upgrades",
    ],
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
    optionalAddons: ["Extended USB3 active cables", "Secondary uplink card", "19″ rack ears", "Spare hub for failover"],
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
      { q: "Does this include phones?", a: "No — USB hub is an accessory only, not a complete phone farm." },
      { q: "What should I prepare before quote?", a: "Node count, platform (Android/iPhone), host PC ports, and chassis family — hub tier confirmed on datasheet." },
    ],
  },
  "power-supply-solution": {
    overview:
      "Industrial PSU modules sized from your node list — replaces overloaded power strips when adding slots or upgrading chassis. Output harness matched to box family on quote.",
    bestFor: "Buyers upgrading power after node expansion or replacing failed PSU modules.",
    notIdealFor:
      "Buyers who need a full chassis — PSU is a module matched to an existing or quoted box family.",
    confirmBeforeQuote: [
      "Chassis family and generation for harness compatibility",
      "Node list for wattage calculation with headroom",
      "Destination voltage and plug standard",
      "Facility circuit capacity if stacking multiple boxes",
    ],
    commonCombinations: [
      "Power supply + cooling fan kit after node expansion",
      "Power supply + empty chassis or Phone Farm Box on new build",
      "PSU module + USB hub tier upgrade on same quote",
    ],
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
    notIdealFor:
      "Buyers whose bottleneck is PSU wattage — cooling kits do not replace power sizing.",
    confirmBeforeQuote: [
      "Chassis family photo or generation for fan kit match",
      "Ambient room temperature and rack density",
      "Whether 12V tap from existing box PSU is available",
    ],
    commonCombinations: [
      "Cooling solution + power supply when upgrading dense racks",
      "Fan kit + Phone Farm Box or Motherboard Box retrofit",
      "Cooling kit + remote setup guidance for airflow verification",
    ],
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
    notIdealFor:
      "Single-box hobby setups without IP segmentation needs, or buyers wanting proxy/VPN configuration as a service.",
    confirmBeforeQuote: [
      "Node count and account segmentation plan",
      "Android models for OTG Ethernet compatibility",
      "WAN uplink and management VLAN preference",
      "Whether router config service is needed vs hardware only",
    ],
    commonCombinations: [
      "Network equipment + Phone Farm Box or Android cluster for multi-account farms",
      "Network equipment + remote-control-setup for IP worksheet and handoff",
      "Router/switch kit + USB hub when upgrading data and network paths together",
    ],
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
    optionalAddons: ["Router config service", "Spare switch", "Cat6 bulk", "IP planning workshop add-on"],
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
    notIdealFor:
      "Sample single-chassis orders or buyers without facilities sign-off on floor load and AC capacity.",
    confirmBeforeQuote: [
      "Site dimensions and position count target",
      "Tray design per device family (Android phone vs motherboard vs iPhone)",
      "PDU and cooling/airflow plan for facilities team",
      "CAD approval timeline before manufacturing",
    ],
    commonCombinations: [
      "Custom cabinet + Phone Farm Boxes + network equipment + PDU plan",
      "Custom cabinet + real-device phone farm project BOM",
      "Cabinet fabrication + remote setup for tray wiring verification",
    ],
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
    notIdealFor:
      "Buyers without hardware yet expecting platform account results, traffic guarantees, or 24/7 NOC as default scope.",
    confirmBeforeQuote: [
      "Device count covered by session blocks on quote",
      "Android vs iPhone scope (usually separate sessions)",
      "Host PC admin access and stable screen-share internet",
      "Whether hardware is already delivered or scheduled",
    ],
    commonCombinations: [
      "Remote setup + Phone Farm Box or iPhone Phone Farm after delivery",
      "Remote setup + network equipment for IP map documentation",
      "Remote setup follow-up block within 14 days if scope unchanged",
    ],
    recommendedConfiguration:
      "Hardware delivered → share USB/network map → remote session(s) → written config export → optional follow-up within 14 days.",
    capacity: "Covers device count on invoice (session blocks).",
    cooling: "N/A — service SKU.",
    powerAndPorts: "Session documents your USB/network map.",
    compatibleModels: "Android ADB standard; iPhone path requires quoted control stack.",
    deploymentNotes: [
      "Host PC with admin access required during session.",
      "Stable internet on farm side for screen share.",
      "Buyer provides target model list and credentials for their own control tools.",
      "Covers wiring and batch-control verification — not account farming, platform manipulation, or marketing outcome guarantees.",
      "Scope changes after session may need additional block.",
    ],
    included: ["Remote session(s)", "Screen layout template", "Written config export"],
    optionalAddons: ["Extra sessions", "On-site visit (travel quoted)", "Custom script handoff", "Post-delivery packing photo review (hardware scope only)"],
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
      { q: "What is not included?", a: "Account farming, traffic guarantees, TikTok or social media performance promises, or operating buyer proxies/tools on your behalf." },
      { q: "Does remote setup include account operation?", a: "No — scope is host PC connectivity, USB/hub wiring, and batch-control workflow verification only." },
      { q: "What should I prepare before quote?", a: "Hardware delivery status, device count, platform mix, and host access plan — request alongside chassis RFQ if ordering together." },
      { q: "Can you provide packing photos?", a: "Hardware packing photos are a separate RFQ item on chassis orders — remote setup is a digital service SKU." },
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
