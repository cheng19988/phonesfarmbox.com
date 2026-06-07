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
      "WhatsApp (+852 6215 5642), Telegram (@huicheng1998), phone (13059502618), or email (qiuxui646@gmail.com). Use only contacts listed on this website.",
    productLink: "/contact",
  },
  {
    category: "Ordering",
    question: "Can I buy a sample before bulk?",
    answer:
      "Yes — MOQ 1 on most catalog SKUs. Sample lets you verify mount compatibility, cooling, and batch software before a bulk PO.",
    productLink: "/products",
  },
];

export const FAQ_CATEGORIES = ["Hardware", "Operations", "Ordering"] as const;
