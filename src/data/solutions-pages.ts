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
      { heading: "Unified Multi-Platform Management", body: "Manage TikTok, Facebook, Instagram, YouTube, and Telegram accounts across real devices from one control station. No need to purchase dozens of individual phones — one phone farm box replaces 20 devices with unified infrastructure." },
      { heading: "Cost Savings vs Scattered Phones", body: "Centralized power, cooling, and USB connectivity dramatically reduce hardware costs and desk space compared to operating multiple standalone phones." },
      { heading: "Global Market Targeting", body: "Configure network routes per device group for North America, Europe, Southeast Asia, and other regions. Set up independent accounts for different countries on real mobile hardware." },
    ],
    benefits: [
      { title: "Hardware Environment Isolation", desc: "Each account on separate physical device reduces association risks." },
      { title: "Batch Operations", desc: "Synchronized posting, engagement, and app management across device groups." },
      { title: "Team Collaboration", desc: "Share device clusters among marketing team members." },
      { title: "Scalable Matrix", desc: "Expand from 20 to 200+ devices with modular box stacking." },
    ],
    faq: [
      { q: "Do I need multiple physical phones for social media marketing?", a: "No. One phone farm box manages 20 real devices. Stack multiple boxes for larger matrices." },
      { q: "How does phone farm box prevent account association?", a: "Each account runs on independent real hardware with separate network routing — not shared cloud infrastructure." },
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
      { title: "24/7 Operation Ready", desc: "Industrial hardware runs continuously for global time zones." },
    ],
    faq: [],
    relatedSlugs: ["social-media-marketing", "whatsapp"],
  },
  {
    slug: "app-development-qa",
    title: "App Development & QA Device Farm",
    subtitle: "Real-device testing environment for Android and iOS app developers",
    category: "Development",
    heroImage: IMAGES.workshop,
    intro:
      "App developers and QA teams use phone farm boxes as real-device testing farms — for compatibility testing, performance monitoring, and automated test suite execution on physical hardware.",
    sections: [
      { heading: "Real Device Test Farm", body: "Test apps on 20+ real Android or iPhone devices simultaneously. Authentic hardware sensors, GPS, camera, and network profiles provide accurate test results unavailable on emulators." },
      { heading: "ADB & Automation Integration", body: "Connect Appium, UIAutomator, and custom test scripts via ADB batch automation. Run test suites across all devices in parallel." },
    ],
    benefits: [
      { title: "Not Emulator, Not Cloud", desc: "Real physical devices with genuine hardware behavior." },
      { title: "Parallel Testing", desc: "Run same test on 20 devices simultaneously." },
      { title: "Custom Configurations", desc: "Mix device models and Android versions per box." },
    ],
    faq: [
      { q: "Can phone farm box replace emulators for QA?", a: "For compatibility and sensor testing, real devices are superior. Phone farm boxes provide emulator-scale parallelism on real hardware." },
    ],
    relatedSlugs: ["adb-batch-automation", "bulk-apk-deployment"],
  },
  {
    slug: "cross-border-marketing",
    title: "Cross-Border Marketing Device Farm",
    subtitle: "Global multi-account operations on real devices from Guangzhou factory",
    category: "Marketing",
    heroImage: IMAGES.customCabinet.hero,
    intro:
      "Cross-border marketing teams deploy phone farm boxes for multi-region, multi-platform account operations on real mobile hardware — with factory-direct pricing and worldwide delivery from Guangzhou.",
    sections: [
      { heading: "Global Deployment Hardware", body: "Phone farm boxes ship worldwide with region-specific power cables and setup guides. Deploy device farms in any country with our overseas delivery service." },
      { heading: "Multi-Region Account Matrix", body: "Configure device groups for different countries with dedicated network routes. Operate North America, Europe, and Asia accounts simultaneously on real devices." },
    ],
    benefits: [
      { title: "Factory-Direct Pricing", desc: "No middlemen — buy directly from Guangzhou manufacturer." },
      { title: "Worldwide Shipping", desc: "DHL, FedEx, and sea freight options." },
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
      "Affiliate marketers use phone farm boxes to operate multiple accounts across reward apps, survey platforms, and promotional programs on real physical devices at scale.",
    sections: [
      { heading: "Multi-Account Infrastructure", body: "Run dozens of affiliate accounts on real devices with independent hardware identities. Phone farm boxes provide the physical infrastructure for scaled affiliate operations." },
      { heading: "Automated Task Workflows", body: "Device operation workflows automate repetitive affiliate tasks — app downloads, survey completion, ad viewing — across all devices in batch." },
    ],
    benefits: [
      { title: "Real Device Trust", desc: "Platforms recognize authentic mobile hardware." },
      { title: "Scale Efficiently", desc: "20 devices per box, stackable for growth." },
      { title: "Low Operating Cost", desc: "Unified power and cooling vs individual phone chargers." },
    ],
    faq: [],
    relatedSlugs: ["device-operation-workflow", "social-media-marketing"],
  },
  {
    slug: "game-account-maintenance",
    title: "Game Account Maintenance Device Farm",
    subtitle: "24/7 real-device game account farming on phone farm box hardware",
    category: "Gaming",
    heroImage: IMAGES.androidFarm.hero,
    intro:
      "Game account maintenance teams use phone farm boxes to keep multiple game accounts online continuously on real physical devices — unaffected by location constraints, with centralized power and cooling for 24/7 operation.",
    sections: [
      { heading: "Continuous 24/7 Device Operation", body: "Phone farm boxes provide unified power and active cooling for round-the-clock game account maintenance. Real devices run game clients natively — not emulated or virtualized — maintaining authentic device behavior." },
      { heading: "Multi-Account Game Farming", body: "Run dozens of game accounts simultaneously across device slots in stacked phone farm boxes. Batch control software manages login sessions, daily tasks, and account rotation workflows." },
    ],
    benefits: [
      { title: "Real Hardware Gaming", desc: "Native game performance on physical devices." },
      { title: "Always-On Infrastructure", desc: "Industrial PSU and cooling for continuous operation." },
      { title: "Scalable Account Count", desc: "Expand with additional boxes as account portfolio grows." },
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
      { heading: "Real Device Camera Support", body: "Phone box configurations retain camera hardware for live streaming apps. Each device slot can run an independent streaming session with dedicated network routing." },
      { heading: "Multi-Channel Broadcasting", body: "Manage multiple live streaming accounts across TikTok Live, YouTube Live, and other platforms from centralized batch control dashboard on real physical devices." },
    ],
    benefits: [
      { title: "Camera-Ready Phone Boxes", desc: "SIM and camera support for mobile streaming apps." },
      { title: "Stable 24/7 Streaming", desc: "Cooling and power infrastructure for long sessions." },
      { title: "Batch Management", desc: "Monitor all streaming devices from one PC." },
    ],
    faq: [],
    relatedSlugs: ["tiktok", "youtube", "social-media-marketing"],
  },
];

export function getSolutionPage(slug: string) {
  return SOLUTION_PAGES.find((s) => s.slug === slug);
}
