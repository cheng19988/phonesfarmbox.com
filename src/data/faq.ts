export type FAQItem = {
  question: string;
  answer: string;
  category: "Hardware" | "Operations" | "Ordering";
  productLink?: string;
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: "Hardware",
    question: "What is a phone farm box?",
    answer:
      "A phone farm box is an industrial chassis that houses multiple mobile nodes with centralized PSU, USB hub wiring, and cooling. Slot count varies by phone model and chassis variant — confirmed before quote. It replaces scattered chargers and cable clutter with one rackable unit for batch control from a host PC.",
  },
  {
    category: "Hardware",
    question: "What is the MOQ?",
    answer:
      "Standard catalog MOQ is 1 unit for sample evaluation. Volume pricing typically starts at 3+ boxes. Enterprise rack and cabinet projects are quoted separately — see our pricing page for tier overview.",
    productLink: "/pricing",
  },
  {
    category: "Hardware",
    question: "Can I buy empty boxes only?",
    answer:
      "Yes. The empty box / chassis SKU is for DIY builders and expansion. Fans, PSU, and hub are ordered separately or as kits. Share board dimensions so we confirm mount compatibility.",
    productLink: "/products/empty-box-chassis",
  },
  {
    category: "Hardware",
    question: "Can you supply phones together with the box?",
    answer:
      "Optional on quote. We can ship chassis-only, mount your BYO devices, or source Android/iPhone nodes per agreed model list. Device availability affects lead time — locked on proforma before assembly.",
    productLink: "/products/phone-farm-box",
  },
  {
    category: "Hardware",
    question: "Do you support iPhone and Android?",
    answer:
      "Yes — separate product lines. Android phone and motherboard boxes use USB/ADB batch paths. iPhone clusters require quoted model mix, cable plan, and host setup. Mixed rooms are usually segmented by box type.",
    productLink: "/products/android-phone-farm",
  },
  {
    category: "Hardware",
    question: "Can you customize the rack size?",
    answer:
      "Node counts, chassis dimensions, cooling layout, and custom cabinets are quoted to drawing. Send target quantity and device matrix — we return a BOM before payment.",
    productLink: "/products/custom-cabinet",
  },
  {
    category: "Hardware",
    question: "What's the difference between USB, OTG, and hybrid connection modes?",
    answer:
      "USB mode suits standard wired debugging and host-side batch control from your PC. OTG mode applies when a quoted ROM or control path requires OTG-style wiring or Ethernet offload. Hybrid layouts are confirmed during quotation when you combine different phone models, ROM paths, or host workflows — we do not assume every ROM supports every mode.",
    productLink: "/products/phone-farm-box",
  },
  {
    category: "Hardware",
    question: "How do I choose 110V, 220V, or 220–240V power?",
    answer:
      "Regional power option is confirmed before quote. Final PSU, cable set, and plug standard depend on your destination country and chassis configuration. Wattage is sized from your BOM — not fixed on product pages. Share shipping country when requesting a quote.",
    productLink: "/contact",
  },
  {
    category: "Hardware",
    question: "Empty chassis vs turnkey phone farm — what's the difference?",
    answer:
      "Empty chassis is metal frame only — PSU, hub, fans, and devices are separate line items for DIY builders. Turnkey Android or iPhone farm SKUs bundle chassis, hub tier, cooling, and cabling matched to your quoted device list on one BOM. Both paths use written quote before assembly.",
    productLink: "/products/empty-box-chassis",
  },
  {
    category: "Hardware",
    question: "Does iPhone farm include phones?",
    answer:
      "Optional on quote. We can ship empty chassis, mount your BYO iPhones, or source devices per agreed model list. Phone-included orders typically need longer lead time for model confirmation, cable/power plan, and burn-in — stated on proforma.",
    productLink: "/products/iphone-phone-farm",
  },
  {
    category: "Hardware",
    question: "Why do phone-included orders take longer?",
    answer:
      "We confirm phone model list, battery condition, cable and power plan, and testing scope before assembly. Sourcing specific models and burn-in add time beyond empty-chassis or BYO mounts — lead time is locked on your written quote.",
    productLink: "/products/android-phone-farm",
  },
  {
    category: "Operations",
    question: "What should buyers prepare before remote setup?",
    answer:
      "Have hardware powered and cabled, a host PC with admin access, stable internet for screen share, and your target device model list ready. USB debugging or device authorization may be required depending on workflow. Remote setup verifies wiring and control paths — scope is tied to device count on your invoice.",
    productLink: "/products/remote-control-setup",
  },
  {
    category: "Operations",
    question: "Can you provide packing photos and a datasheet before payment or shipment?",
    answer:
      "Yes — request a datasheet, packing photo, compatible model list, and shipping dimensions on your quote inquiry. We confirm packing list before shipment. Sample and bulk buyers often review these before issuing a PO.",
    productLink: "/contact",
  },
  {
    category: "Hardware",
    question: "What's the difference between motherboard box and phone box?",
    answer:
      "Motherboard box: screenless Android boards, lower per-node cost, USB debugging required — temporary screen may be needed for re-auth. Phone box: full phone frame, SIM/camera paths on supported models, higher flexibility per slot.",
    productLink: "/products/motherboard-box",
  },
  {
    category: "Operations",
    question: "Can you help choose the right configuration?",
    answer:
      "Yes. Send quantity, platform, and use case via the contact form or WhatsApp. We recommend box type, hub tier, PSU, and cooling — or mark items “confirm before quote” when models are unknown.",
    productLink: "/contact",
  },
  {
    category: "Operations",
    question: "How do you pack and ship?",
    answer:
      "Standard export packing: foam-lined cartons, shock padding, accessory count vs packing list, commercial invoice weights. Air (DHL/FedEx) or sea freight for bulk. Split shipment available on project orders.",
  },
  {
    category: "Operations",
    question: "How is warranty handled?",
    answer:
      "Chassis and PSU typically 12 months on manufacturing defects for standard boxes — exact terms on proforma. Phones and OEM network gear follow supplier pass-through. Integration re-session window stated on service SKUs.",
  },
  {
    category: "Operations",
    question: "Do you provide remote setup support?",
    answer:
      "Yes — included setup notes with hardware; remote batch-control sessions available as add-on or via the remote control setup service SKU.",
    productLink: "/products/remote-control-setup",
  },
  {
    category: "Ordering",
    question: "What information should I include in an RFQ?",
    answer:
      "Include target product or SKU, device quantity, shipping destination, connection mode (USB / OTG / hybrid), voltage region, empty chassis vs phone-included, target phone or board models, use case (app testing, QA, social media ops, remote operation), and payment preference. Request datasheet, packing photo, or shipping size on the same form if needed.",
    productLink: "/contact",
  },
  {
    category: "Ordering",
    question: "Can I pay with USDT?",
    answer:
      "Yes for sample and small orders on Tron TRC20. Send order number and transaction hash to sales — payment is manually confirmed, not automatic on-chain verification. Bulk orders may use bank transfer, Wise, or PayPal per written quote.",
    productLink: "/help/usdt-payment-confirmation-hardware-orders",
  },
  {
    category: "Ordering",
    question: "When can I receive packing photos or shipping size?",
    answer:
      "Request these on your RFQ or quote reply. Datasheet, packing photo, and shipping dimensions are prepared after configuration is confirmed on quote — often before payment for bulk buyers. Packing list is confirmed before shipment.",
    productLink: "/help/packing-list-verification",
  },
  {
    category: "Ordering",
    question: "Why do phone-included orders require quotation confirmation?",
    answer:
      "Phone-included Android farms, iPhone clusters, and custom cabinets need model list, cable and power plan, and burn-in scope locked before assembly. Sourcing and testing add time beyond empty-chassis orders — lead time is stated on your written proforma, not fixed on product pages.",
    productLink: "/pricing",
  },
  {
    category: "Operations",
    question: "Can I request packing photos before shipment?",
    answer:
      "Yes — note the request on your RFQ or quote reply. Packing photos (carton exterior and foam layout when available) and shipping size/weight are provided after packing plan is confirmed, often before shipment for bulk buyers. Packing list is signed off against proforma before export packing closes.",
    productLink: "/help/packing-list-verification",
  },
  {
    category: "Operations",
    question: "What happens if hardware arrives damaged?",
    answer:
      "Report DOA or shipping damage within 48 hours with photos of packaging and product. We inspect the claim and coordinate replacement parts or shipment per invoice terms. Manufacturing defect reports within 7 days may qualify for repair or replacement — not unconditional refund in every case.",
    productLink: "/refund",
  },
  {
    category: "Operations",
    question: "What does remote setup support include?",
    answer:
      "Remote setup helps verify host PC access, USB or OTG wiring, device authorization, and batch-control workflow for your quoted stack — useful for app testing, QA, or social media team hardware handoff. It does not include operating buyer accounts, platform manipulation, traffic guarantees, or TikTok or social media performance guarantees.",
    productLink: "/help/remote-setup-support-scope",
  },
  {
    category: "Operations",
    question: "Who pays return shipping for warranty cases?",
    answer:
      "Return shipping depends on issue type and terms on your proforma. Validated manufacturing defects or DOA may include replacement ship or return label at our discretion after inspection. Buyer-initiated returns of custom or deployed hardware often require buyer-paid return freight — stated on invoice when applicable.",
    productLink: "/terms",
  },
  {
    category: "Ordering",
    question: "Do I need to register before asking for a quote?",
    answer:
      "No. Use the contact form or WhatsApp/Telegram with quantity and shipping country. Registration is only for placing USDT sample orders online — quotes do not require an account.",
    productLink: "/contact",
  },
  {
    category: "Ordering",
    question: "Is payment automatically confirmed?",
    answer:
      "No. USDT payments are manually confirmed by sales after you send order number and transaction hash. Automatic on-chain verification is not active. Bulk orders use T/T, Wise, or PayPal per invoice.",
  },
  {
    category: "Ordering",
    question: "How long is delivery time?",
    answer:
      "In-stock standard boxes: 3–5 business days dispatch. Custom node mix: 7–15 days. iPhone clusters and cabinet projects: longer — stated on quote. Express international freight adds 3–7 days; sea 15–30 days.",
  },
  {
    category: "Ordering",
    question: "How to contact sales?",
    answer:
      "Telegram (@huicheng1998), WhatsApp (+85262155642), or email (qiuxui646@gmail.com). Use the floating contact button or contacts listed on this website.",
    productLink: "/contact",
  },
  {
    category: "Ordering",
    question: "Can I buy a sample before bulk?",
    answer:
      "Yes — MOQ 1 on most catalog SKUs. Sample lets you verify mount compatibility, cooling, and batch software before a bulk PO.",
    productLink: "/products",
  },
  {
    category: "Hardware",
    question: "What is batch control on a phone farm?",
    answer:
      "Batch control is host PC software that lists, mirrors, or automates many real devices connected through USB hub trees. Phones Farm Box supplies chassis and hub wiring; you choose compatible control software for Android or iPhone stacks.",
    productLink: "/help/batch-control-software-overview",
  },
  {
    category: "Hardware",
    question: "What is synchronized device control?",
    answer:
      "Synchronized control runs the same gesture or script across a device group. It requires adequate hub bandwidth, host PC resources, and cooling — group size limits depend on your quoted layout, not a fixed universal cap.",
    productLink: "/help/synchronized-device-operations-guide",
  },
  {
    category: "Hardware",
    question: "What host PC do I need?",
    answer:
      "Depends on mirror count and software. Plan 8+ cores and 32 GB+ RAM for large Android mirror farms; add USB 3.x controller cards when exceeding onboard ports. Send node count and software name on RFQ for sizing notes on quote.",
    productLink: "/help/host-pc-requirements-phone-farm",
  },
  {
    category: "Operations",
    question: "How do I plan IP addresses per device group?",
    answer:
      "Assign proxy, mobile data, or VLAN routes per group on your router plan. Use the Network IP Planner tool and network help articles, then include results in your RFQ so hub and router tiers match concurrent connections.",
    productLink: "/tools/network-ip-planner",
  },
  {
    category: "Operations",
    question: "Can multiple team members share one phone farm?",
    answer:
      "Yes — group devices by client or project in batch-control software and label physical slots to match. Hardware access and software roles remain your operational security scope.",
    productLink: "/help/team-device-sharing-setup",
  },
  {
    category: "Operations",
    question: "How does bulk APK install work?",
    answer:
      "Push the same APK to a selected device group via batch tools over USB. Large parallel installs need hub tier headroom — avoid mixing with heavy mirroring on the same host session.",
    productLink: "/help/bulk-apk-install-guide",
  },
  {
    category: "Operations",
    question: "What deployment services do you offer?",
    answer:
      "Setup, remote control configuration, group control configuration, bulk deployment, custom hardware, enterprise racks, maintenance, samples, and overseas delivery — each with detail pages under Services.",
    productLink: "/services",
  },
  {
    category: "Ordering",
    question: "Are there subscription fees for phone farm hardware?",
    answer:
      "Hardware is a one-time purchase on proforma — no per-device SaaS seat from Phones Farm Box. Third-party control software may have its own licensing.",
    productLink: "/pricing",
  },
  {
    category: "Ordering",
    question: "What fees appear on a hardware quote?",
    answer:
      "BOM lines for chassis, hub, PSU, fans, cables, optional phones, services, and freight. Import duties are buyer unless DDP is stated. See help article on pricing and fees.",
    productLink: "/help/phone-farm-pricing-fees-explained",
  },
  {
    category: "Ordering",
    question: "Do you offer enterprise rack deployment?",
    answer:
      "Yes — custom cabinets, redundant PSU options, phased sea freight, and SLA maintenance quoted under enterprise deployment service.",
    productLink: "/services/enterprise-deployment",
  },
  {
    category: "Hardware",
    question: "What is unlimited device scaling?",
    answer:
      "Stack additional phone farm chassis and hub tiers as your matrix grows — slot count and rack layout confirmed on each quote wave, not a single fixed platform cap.",
    productLink: "/products/phone-farm-box",
  },
  {
    category: "Operations",
    question: "What is device environment refresh?",
    answer:
      "Clearing app data or ROM state on a physical node between QA cycles or campaign handoffs — equivalent to a clean device baseline on hardware you own. Network routes should be re-bound after refresh.",
    productLink: "/help/device-profile-reset-workflow",
  },
];

export const FAQ_CATEGORIES = ["Hardware", "Operations", "Ordering"] as const;
