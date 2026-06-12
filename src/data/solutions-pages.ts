import { IMAGES } from "@/lib/images";
import type { ContentPage } from "./scenarios";

export const SOLUTION_PAGES: ContentPage[] = [
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing with Phone Farm Box",
    subtitle: "Multi-device management for TikTok, Facebook, YouTube, Instagram and global social platforms",
    category: "Marketing",
    heroImage: IMAGES.serviceScene,
    intro:
      "Phones Farm Box enables social media marketing teams to operate multiple accounts on real physical devices — with hardware-level environment isolation, batch control, and network planning for global campaigns.",
    sections: [
      { heading: "Unified Multi-Platform Management", body: "Manage TikTok, Facebook, Instagram, YouTube, and Telegram accounts across real devices from one control station. One phone farm chassis consolidates power, cooling, USB wiring, and rack space versus scattered standalone phones." },
      { heading: "Cost Savings vs Scattered Phones", body: "Centralized power, cooling, and USB connectivity reduce desk clutter and cable management compared to operating multiple standalone phones." },
      { heading: "Global Market Targeting", body: "Configure network routes per device group for North America, Europe, Southeast Asia, and other regions. Set up independent accounts for different countries on real mobile hardware." },
    ],
    benefits: [
      { title: "Hardware Environment Isolation", desc: "Each account on separate physical device reduces association risks when network routes are planned per group." },
      { title: "Batch Operations", desc: "Synchronized posting, engagement, and app management across device groups." },
      { title: "Team Collaboration", desc: "Share device clusters among marketing team members." },
      { title: "Scalable Matrix", desc: "Expand with additional chassis and custom cabinets — scope confirmed on quote." },
    ],
    faq: [
      { q: "Do I need multiple physical phones for social media marketing?", a: "No. One phone farm box manages multiple real devices per quoted layout. Add chassis units as your matrix grows." },
      { q: "How does phone farm box help account separation?", a: "Each account runs on independent hardware with separate network routing when configured per group." },
    ],
    relatedSlugs: ["tiktok", "cross-border-marketing"],
  },
  {
    slug: "ecommerce-operations",
    title: "E-commerce Operations Device Farm",
    subtitle: "Multi-store management on real devices for cross-border e-commerce teams",
    category: "E-commerce",
    heroImage: IMAGES.phoneFarmBox.hero,
    intro:
      "Cross-border e-commerce sellers use phone farm boxes to operate multiple store accounts on real mobile devices — for Amazon, Shopee, TikTok Shop, and regional marketplace apps.",
    sections: [
      { heading: "Multi-Store Device Infrastructure", body: "Run separate e-commerce app instances on independent physical devices. Each store account maintains its own device identity, network route, and app environment." },
      { heading: "Order & Listing Workflows", body: "Batch manage product listings, order processing, and customer communication across multiple store accounts with device operation workflows." },
    ],
    benefits: [
      { title: "Regional Store Separation", desc: "Different device groups for different marketplace regions." },
      { title: "Secure Data Isolation", desc: "Store credentials and data isolated per physical device." },
      { title: "24/7 Operation Ready", desc: "Industrial hardware runs continuously for global time zones when cooling and PSU are sized on quote." },
    ],
    faq: [],
    relatedSlugs: ["social-media-marketing", "whatsapp"],
  },
  {
    slug: "app-development-qa",
    title: "Mobile Device Lab & App QA — Real Device Testing Hardware",
    subtitle: "Mobile testing and device lab management on real Android and iPhone phone farm hardware",
    category: "Development",
    heroImage: IMAGES.workshop,
    intro:
      "App developers and QA teams use phone farm boxes as **mobile device labs** and **real device testing** farms — compatibility testing, parallel test runs, and automated suites on physical hardware (not cloud phone SaaS).",
    sections: [
      { heading: "Real Device Test Farm", body: "Mobile testing on multiple real Android or iPhone devices in parallel — hardware sensors, GPS, camera, and network paths on physical nodes. Supports QA workflows beyond software-only simulation." },
      { heading: "Device Lab Management Hardware", body: "Centralize lab nodes in phone farm chassis with unified PSU, cooling, and USB hub trees. Label slots by OS version or test group; expand with stacked boxes as matrix grows." },
      { heading: "ADB & Automation Integration", body: "Connect Appium, UIAutomator, and custom test scripts via ADB batch automation. Run test suites across device groups in parallel." },
    ],
    benefits: [
      { title: "Physical Hardware QA", desc: "Radios, sensors, and USB paths on mounted devices." },
      { title: "Parallel Testing", desc: "Run the same test across your quoted slot count simultaneously." },
      { title: "Custom Configurations", desc: "Mix device models and Android versions per box when confirmed at quote." },
    ],
    faq: [
      { q: "Why use a phone farm box for QA?", a: "For compatibility and sensor testing, physical devices provide hardware paths that software simulation cannot fully replace. Parallelism depends on hub tier and host PC." },
    ],
    relatedSlugs: ["adb-batch-automation", "bulk-apk-deployment"],
  },
  {
    slug: "cross-border-marketing",
    title: "Cross-Border Marketing Device Farm",
    subtitle: "Global multi-account operations on real devices from Guangzhou",
    category: "Marketing",
    heroImage: IMAGES.customCabinet.hero,
    intro:
      "Cross-border marketing teams deploy phone farm boxes for multi-region, multi-platform account operations on real mobile hardware — with written quotes, export packing, and worldwide delivery from Guangzhou.",
    sections: [
      { heading: "Global Deployment Hardware", body: "Phone farm boxes ship worldwide with region-specific power cables and setup guides. Deploy device farms in any country with our overseas delivery service." },
      { heading: "Multi-Region Account Matrix", body: "Configure device groups for different countries with dedicated network routes. Operate North America, Europe, and Asia accounts simultaneously on real devices." },
    ],
    benefits: [
      { title: "Direct Sales from Guangzhou", desc: "Hardware quoted and shipped from our workshop — confirm BOM on proforma." },
      { title: "Worldwide Shipping", desc: "DHL, FedEx, and sea freight options with carton weight on invoice." },
      { title: "Remote Setup Support", desc: "Our team assists with international deployment." },
    ],
    faq: [],
    relatedSlugs: ["social-media-marketing", "network-setup"],
  },
  {
    slug: "affiliate-marketing",
    title: "Affiliate Marketing Device Farm",
    subtitle: "Scale affiliate operations with multi-device real hardware infrastructure",
    category: "Marketing",
    heroImage: IMAGES.androidFarm.hero,
    intro:
      "Affiliate marketers use phone farm boxes to run parallel campaign accounts on real physical devices — with chassis power, cooling, and USB wiring sized on quote for multi-device publishing and tracking workflows.",
    sections: [
      { heading: "Multi-Account Infrastructure", body: "Run affiliate accounts on real devices with independent hardware identities. Phone farm boxes provide chassis, power, cooling, and USB wiring for scaled operations." },
      { heading: "Automated Task Workflows", body: "Device operation workflows automate repetitive affiliate tasks — app installs, content checks, and scheduled batch steps — across device groups from one host PC." },
    ],
    benefits: [
      { title: "Physical Hardware", desc: "Operations run on mounted phones and boards you own." },
      { title: "Scale Efficiently", desc: "Slot count per chassis confirmed at quote — stack additional units for growth." },
      { title: "Lower Cable Clutter", desc: "Unified power and cooling vs individual phone chargers." },
    ],
    faq: [],
    relatedSlugs: ["device-operation-workflow", "social-media-marketing"],
  },
  {
    slug: "game-account-maintenance",
    title: "Game Account Maintenance Device Farm",
    subtitle: "24/7 real-device game session maintenance on phone farm box hardware",
    category: "Gaming",
    heroImage: IMAGES.androidFarm.hero,
    intro:
      "Game operations teams use phone farm boxes to keep multiple game client sessions online continuously on real physical devices — with centralized power and cooling for 24/7 operation.",
    sections: [
      { heading: "Continuous 24/7 Device Operation", body: "Phone farm boxes provide unified power and active cooling for round-the-clock game client maintenance. Real devices run game clients natively on mounted hardware." },
      { heading: "Multi-Account Game Operations", body: "Run game client sessions simultaneously across device slots in stacked phone farm boxes. Batch control software manages login sessions, daily tasks, and account rotation workflows." },
    ],
    benefits: [
      { title: "Native Game Performance", desc: "Games run on physical devices in your chassis." },
      { title: "Always-On Infrastructure", desc: "Industrial PSU and cooling when sized on quote for continuous operation." },
      { title: "Scalable Account Count", desc: "Expand with additional chassis as account portfolio grows." },
    ],
    faq: [
      { q: "Can phone farm boxes run games 24/7?", a: "Yes. Designed for continuous operation with active cooling. Monitor device temperature and perform monthly fan maintenance." },
    ],
    relatedSlugs: ["app-development-qa", "device-operation-workflow"],
  },
  {
    slug: "live-streaming-device-farm",
    title: "Live Streaming Device Farm",
    subtitle: "Multi-device live streaming infrastructure on real phone farm hardware",
    category: "Streaming",
    heroImage: IMAGES.remoteControl.hero,
    intro:
      "Live streaming operations on multiple accounts use phone farm box hardware to run real devices with camera support — for unmanned streaming workflows, multi-channel broadcasting, and content matrix operations.",
    sections: [
      { heading: "Real Device Camera Support", body: "Phone box configurations can retain camera hardware for live streaming apps. Each device slot can run an independent streaming session with dedicated network routing." },
      { heading: "Multi-Channel Broadcasting", body: "Manage multiple live streaming accounts across TikTok Live, YouTube Live, and other platforms from centralized batch control dashboard on physical devices." },
    ],
    benefits: [
      { title: "Camera-Ready Phone Boxes", desc: "SIM and camera support on quoted phone box models." },
      { title: "Stable 24/7 Streaming", desc: "Cooling and power infrastructure for long sessions when sized on quote." },
      { title: "Batch Management", desc: "Monitor all streaming devices from one PC." },
    ],
    faq: [],
    relatedSlugs: ["tiktok", "youtube", "social-media-marketing"],
  },
];

export function getSolutionPage(slug: string) {
  return SOLUTION_PAGES.find((s) => s.slug === slug);
}
