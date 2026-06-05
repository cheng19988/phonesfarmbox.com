export type FAQItem = {
  question: string;
  answer: string;
  category: "Hardware" | "Operations" | "Ordering";
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: "Hardware",
    question: "What is a phone farm?",
    answer:
      "A phone farm is a collection of real smartphones organized, powered, cooled, and controlled together for scaled mobile operations — such as app testing, multi-account management, content workflows, and automation. Phones Farm Box builds the industrial box hardware that makes phone farms stable, cool-running, and scalable.",
  },
  {
    category: "Hardware",
    question: "What is a phone farm box?",
    answer:
      "A phone farm box (also called box phone farm) is a purpose-built chassis that houses multiple real smartphones — typically 20 nodes — with centralized power supply, active multi-fan cooling, and USB hub connectivity. It replaces scattered chargers and cable chaos with a single managed unit ready for 24/7 batch control from your PC.",
  },
  {
    category: "Hardware",
    question: "What is a motherboard box?",
    answer:
      "A motherboard box uses smartphone motherboards without screens or batteries to reduce cost per node. Each box has a 3-fan cooling system, unified power supply, and stackable design. Nodes run official or customized Android with USB debugging enabled — ideal for headless automation at scale.",
  },
  {
    category: "Hardware",
    question: "What's the difference between motherboard box and phone box?",
    answer:
      "Motherboard box: no phone frame, lower cost, official Android system, SIM support on some models. If USB authorization is lost, a temporary screen is needed to re-enable debugging. Phone box: has phone frame, SIM and camera support, customized ROM with auto-reconnect and factory reset without authorized PC. Both support batch PC control software.",
  },
  {
    category: "Hardware",
    question: "Real device phone farm vs cloud phone — what's the difference?",
    answer:
      "Real device box phone farms use physical smartphones with genuine hardware fingerprints, sensors, and carrier profiles. Cloud phones are virtualized instances on shared servers. Real devices offer higher platform trust, better sensor accuracy, and no shared-infrastructure detection risks.",
  },
  {
    category: "Hardware",
    question: "Real device phone farm vs emulator — what's the difference?",
    answer:
      "Emulators simulate Android/iOS in software on a PC. Real device box farms use actual hardware that platforms cannot distinguish from normal user devices. For account-sensitive operations, real devices significantly reduce detection and ban rates.",
  },
  {
    category: "Hardware",
    question: "Android phone farm vs iPhone phone farm?",
    answer:
      "Android box farms use USB hubs, ADB, and open batch control tools with lower per-node cost. iPhone farms use real iPhones with stable kernel control — no jailbreak required — and rich APIs for script developers. Phones Farm Box supplies hardware for both platforms from Guangzhou.",
  },
  {
    category: "Hardware",
    question: "How many devices can one box support?",
    answer:
      "Standard Phones Farm Box units support 20 nodes per chassis. Boxes are stackable — hundreds of phone windows can be controlled through PC batch software. Custom configurations scale to 40, 60, or 100+ devices with rackmount cabinets.",
  },
  {
    category: "Operations",
    question: "What is included with my box phone farm purchase?",
    answer:
      "Each box purchase includes the hardware (typically 20 phones or motherboards), USB cables, box power cord, spare motherboard power cords, and advanced batch control management software. No hidden fees — one-time purchase.",
  },
  {
    category: "Operations",
    question: "Can I control all phones at once?",
    answer:
      "Yes. Included batch control software allows you to control one phone individually or manage and synchronize all phone windows at once — providing a simple and efficient automation solution from a single PC interface.",
  },
  {
    category: "Operations",
    question: "Can you customize hardware?",
    answer:
      "Yes. We offer custom chassis dimensions, node counts, device models, power configurations, cooling layouts, and DIY parts for Android and iPhone farm builds. Share your requirements for a tailored quote.",
  },
  {
    category: "Operations",
    question: "Do you provide remote control software?",
    answer:
      "Yes. Advanced batch control management software is included with box purchases. We also offer remote control setup services — screen mirroring, ADB configuration, and visual device management workstation setup.",
  },
  {
    category: "Operations",
    question: "Do you support group control system configuration?",
    answer:
      "Yes. Our team configures group control systems for synchronized multi-device operations — batch task scheduling, project grouping, and automation script integration for agency and enterprise workflows.",
  },
  {
    category: "Operations",
    question: "Is there customer support?",
    answer:
      "Yes. We offer dedicated customer support and remote assistance to help you get the most from your box phone farm setup. Contact us via WhatsApp, Telegram, phone, or email.",
  },
  {
    category: "Ordering",
    question: "Do you support overseas shipping?",
    answer:
      "Yes. We ship worldwide from Guangzhou via DHL, FedEx, UPS express, and sea freight for bulk orders. All units are QC-tested and securely packaged before export.",
  },
  {
    category: "Ordering",
    question: "What is the MOQ (Minimum Order Quantity)?",
    answer:
      "Standard products MOQ is 1 unit for sample evaluation. Bulk pricing applies from 5 units. Enterprise rack deployments typically start at 10+ boxes with dedicated project management.",
  },
  {
    category: "Ordering",
    question: "Can I buy a sample?",
    answer:
      "Yes. Sample orders let you evaluate box hardware quality, cooling performance, and software compatibility before bulk purchase. Sample units ship within 3–5 business days.",
  },
  {
    category: "Ordering",
    question: "How long is delivery time?",
    answer:
      "In-stock units ship within 3–5 business days. Custom configurations take 7–15 business days. Express international delivery adds 3–7 days; sea freight 15–30 days.",
  },
  {
    category: "Ordering",
    question: "How to pay?",
    answer:
      "Online orders accept USDT on Tron TRC20 network (minimum 10 USDT, 30-minute payment window). For bulk orders, we also accept bank transfer (T/T), Wise, and PayPal upon request.",
  },
  {
    category: "Ordering",
    question: "How to contact sales?",
    answer:
      "Reach us via WhatsApp (+852 6215 5642), Telegram (@huicheng1998), phone (13059502618), or email (qiuxui646@gmail.com). We respond within 24 hours on business days.",
  },
  {
    category: "Ordering",
    question: "How do I verify official contact channels?",
    answer:
      "Only use contact details listed on this official website — phone 13059502618, Telegram @huicheng1998, WhatsApp +852 6215 5642, email qiuxui646@gmail.com. Beware of impersonators requesting payment through unofficial channels.",
  },
];

export const FAQ_CATEGORIES = ["Hardware", "Operations", "Ordering"] as const;
