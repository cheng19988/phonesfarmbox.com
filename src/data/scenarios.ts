import { IMAGES } from "@/lib/images";

export type ContentPage = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  heroImage?: string;
  intro: string;
  sections: { heading: string; body: string }[];
  benefits: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
  relatedSlugs?: string[];
};

export const SCENARIOS: ContentPage[] = [
  {
    slug: "tiktok",
    title: "TikTok Multi-Device Management with Phone Farm Box",
    subtitle: "Run multiple TikTok accounts on real physical devices with isolated hardware environments",
    category: "Social Platform",
    heroImage: IMAGES.serviceScene,
    intro:
      "Phones Farm Box provides real Android and iPhone devices in industrial chassis for TikTok content teams, agencies, and creators who need multiple accounts on physical mobile hardware. This site sells chassis and accessories — not cloud phone SaaS.",
    sections: [
      {
        heading: "Real Device TikTok Operations",
        body: "Each device slot in a phone farm box runs a physical smartphone mounted in the chassis. Suitable for multi-account content publishing, engagement testing, and regional account management when network and model mix are confirmed at quote.",
      },
      {
        heading: "Centralized Device Dashboard",
        body: "Control TikTok devices from a single PC workstation via batch control software. Switch between device windows, deploy APKs in bulk, and monitor device health — each account runs on separate hardware when grouped and routed per your network plan.",
      },
      {
        heading: "Hardware for TikTok Content Matrix",
        body: "Phone farm boxes support stackable expansion with USB hubs, cooling kits, and network routers. Total slot count and rack layout are confirmed during quotation — varies by phone model, chassis generation, and cooling plan.",
      },
    ],
    benefits: [
      { title: "Physical Device Isolation", desc: "Each TikTok account can run on separate hardware with planned network routes." },
      { title: "Batch Control Efficiency", desc: "Synchronize actions across devices or manage individually from one dashboard." },
      { title: "24/7 Stable Operation", desc: "Industrial cooling and unified power keep devices running continuously when sized on quote." },
      { title: "Scalable Hardware", desc: "Add chassis units and cabinets as your TikTok account matrix grows." },
    ],
    faq: [
      { q: "Can a phone farm box manage multiple TikTok accounts?", a: "Yes. Each device slot runs an independent physical phone. Batch control software lets you manage all devices from one PC with synchronized or individual operations." },
      { q: "How many TikTok devices per box?", a: "Slot count depends on phone height, chassis variant, and hub tier — confirmed before quote. Custom rack projects scale further with cabinet SKUs." },
    ],
    relatedSlugs: ["youtube", "instagram", "social-media-marketing"],
  },
  {
    slug: "youtube",
    title: "YouTube Multi-Channel Device Farm",
    subtitle: "Manage multiple YouTube channels on real Android devices with centralized control",
    category: "Video Platform",
    heroImage: IMAGES.remoteControl.hero,
    intro:
      "YouTube channel operators and MCN teams use Phones Farm Box hardware to run multiple channels on real physical devices — for upload workflows, comment management, and multi-region content testing.",
    sections: [
      {
        heading: "Multi-Channel Hardware Setup",
        body: "Deploy real Android devices in phone farm boxes for YouTube app operations. Each device maintains independent storage, Google account credentials, and network routing for channel isolation.",
      },
      {
        heading: "Upload and Engagement Workflows",
        body: "Batch control software supports synchronized or scheduled device operations. Teams can manage video uploads, community posts, and analytics checks across multiple YouTube channels from a single control station.",
      },
    ],
    benefits: [
      { title: "Real Mobile Environment", desc: "YouTube mobile app operations on physical devices in your chassis." },
      { title: "Team Device Sharing", desc: "Assign device groups to team members with shared management access." },
      { title: "Network Per Device Group", desc: "Dedicated router and IP planning for regional channel strategies." },
    ],
    faq: [
      { q: "Can I run multiple YouTube channels on one phone farm box?", a: "Yes. Each quoted device slot can run a separate YouTube account with independent network configuration when planned per group." },
      { q: "Do I need separate PCs for each channel?", a: "No. One control PC manages devices through batch control software connected via USB hub." },
    ],
    relatedSlugs: ["tiktok", "facebook"],
  },
  {
    slug: "facebook",
    title: "Facebook Multi-Account Device Farm",
    subtitle: "Real-device Facebook account management for marketing teams and agencies",
    category: "Social Platform",
    heroImage: IMAGES.phoneFarmBox.hero,
    intro:
      "Facebook marketing teams use phone farm box hardware to operate multiple accounts on real mobile devices with independent hardware environments and network segmentation.",
    sections: [
      {
        heading: "Independent Device Environments",
        body: "Each Facebook account runs on a separate physical device in the phone farm box. Device model and mobile network path are configured per quoted slot — confirm compatibility at quote.",
      },
      {
        heading: "Global Marketing Operations",
        body: "Configure network routers and proxy planning per device group for regional Facebook marketing. Phone farm boxes ship worldwide from Guangzhou with setup support.",
      },
    ],
    benefits: [
      { title: "Hardware-Level Separation", desc: "Physical devices with separate network routes when configured per group." },
      { title: "Bulk App Management", desc: "Install Facebook, Messenger, and related apps across all devices at once." },
      { title: "Consolidated Infrastructure", desc: "One chassis consolidates power, cooling, and USB wiring versus scattered phones." },
    ],
    faq: [
      { q: "How does phone farm box help Facebook multi-account management?", a: "Each account operates on independent hardware with separate network routing when planned per device group." },
    ],
    relatedSlugs: ["instagram", "social-media-marketing"],
  },
  {
    slug: "instagram",
    title: "Instagram Multi-Account Device Farm",
    subtitle: "Visual content teams manage multiple Instagram accounts on real devices",
    category: "Social Platform",
    heroImage: IMAGES.androidFarm.hero,
    intro:
      "Instagram content creators and social media agencies use phone farm boxes to manage multiple accounts on real iPhone and Android devices for posts, stories, reels, and engagement workflows.",
    sections: [
      {
        heading: "Real Device Instagram Operations",
        body: "Run Instagram mobile app on physical devices with camera and network paths on quoted models. Phone farm boxes support both Android and iPhone configurations for mixed content strategies.",
      },
      {
        heading: "Content Team Device Management",
        body: "Assign device groups to content creators, schedule batch operations, and monitor all Instagram accounts from a centralized device management dashboard.",
      },
    ],
    benefits: [
      { title: "Camera & SIM Support", desc: "Phone box configurations retain camera and SIM on supported models — confirm list at quote." },
      { title: "Synchronized Operations", desc: "Batch like, follow, and posting workflows across selected device groups." },
      { title: "Scalable Content Matrix", desc: "Expand with additional chassis and cabinets — scope confirmed on quote." },
    ],
    faq: [
      { q: "Android or iPhone for Instagram phone farm?", a: "Both work. Android farms often lower cost; iPhone farms suit iOS-specific workflows. Hardware quoted separately per platform." },
    ],
    relatedSlugs: ["tiktok", "facebook"],
  },
  {
    slug: "telegram",
    title: "Telegram Multi-Account Device Farm",
    subtitle: "Manage multiple Telegram accounts on real devices for community and marketing operations",
    category: "Messaging Platform",
    heroImage: IMAGES.network.hero,
    intro:
      "Telegram community managers and cross-border teams use phone farm box hardware to operate multiple Telegram accounts on real mobile devices with independent SIM and network configurations.",
    sections: [
      {
        heading: "Multi-Account Telegram Hardware",
        body: "Each Telegram account runs on a separate physical device with its own phone number, SIM card (where supported), and network route. Phone farm boxes centralize power, cooling, and USB connectivity for simultaneous sessions.",
      },
      {
        heading: "Community & Channel Management",
        body: "Batch control software lets teams manage multiple Telegram groups, channels, and bots across device clusters from one workstation.",
      },
    ],
    benefits: [
      { title: "SIM-Ready Phone Boxes", desc: "Phone box configurations support SIM cards for Telegram phone verification on quoted models." },
      { title: "Independent Sessions", desc: "Each device maintains separate Telegram login state." },
      { title: "Remote Control Access", desc: "Manage devices remotely via control software from any PC." },
    ],
    faq: [
      { q: "How many Telegram accounts per phone farm box?", a: "Equals your quoted slot count per chassis — confirm layout and SIM plan at quote." },
    ],
    relatedSlugs: ["whatsapp", "cross-border-marketing"],
  },
  {
    slug: "whatsapp",
    title: "WhatsApp Multi-Account Device Farm",
    subtitle: "Real-device WhatsApp Business operations at scale",
    category: "Messaging Platform",
    heroImage: IMAGES.iphoneFarm.hero,
    intro:
      "WhatsApp Business operators use phone farm boxes to run multiple WhatsApp accounts on real devices — each with independent SIM, hardware identity, and network configuration for customer service and marketing workflows.",
    sections: [
      {
        heading: "Physical Device WhatsApp Setup",
        body: "WhatsApp requires real mobile devices with valid phone numbers. Phone farm boxes with SIM support provide the hardware infrastructure for multi-account WhatsApp Business operations.",
      },
      {
        heading: "Customer Service at Scale",
        body: "Teams assign device groups to support agents, manage conversations through batch control dashboards, and scale WhatsApp operations without purchasing individual phones for each account.",
      },
    ],
    benefits: [
      { title: "Real SIM & Phone Number", desc: "Phone box hardware supports SIM cards for WhatsApp verification on quoted models." },
      { title: "Unified Infrastructure", desc: "One chassis consolidates power, cooling, and USB wiring for many accounts." },
      { title: "Team Device Assignment", desc: "Share device groups among team members with role-based access." },
    ],
    faq: [
      { q: "Can WhatsApp run on motherboard boxes?", a: "Phone boxes with SIM support are recommended for WhatsApp. Motherboard boxes suit headless automation without messaging apps." },
    ],
    relatedSlugs: ["telegram", "ecommerce-operations"],
  },
  {
    slug: "twitter-x",
    title: "Twitter (X) Multi-Account Device Farm",
    subtitle: "Manage multiple X/Twitter accounts on real physical devices",
    category: "Social Platform",
    heroImage: IMAGES.network.hero,
    intro:
      "Social media teams use phone farm boxes to operate multiple Twitter (X) accounts on real mobile devices with independent hardware environments and network segmentation.",
    sections: [
      { heading: "Real Device X Operations", body: "Each X account runs on a separate physical device with mobile app environment. Batch control software manages posting, engagement, and account switching from one workstation." },
      { heading: "Content Matrix at Scale", body: "Scale account count with stackable phone farm boxes, network routers, and team device management — total scope confirmed on quote." },
    ],
    benefits: [
      { title: "Hardware Isolation", desc: "Independent device per account when configured with separate network routes." },
      { title: "Batch Posting Workflows", desc: "Device operation workflows automate repetitive tasks." },
      { title: "Team Collaboration", desc: "Assign device groups to content team members." },
    ],
    faq: [
      { q: "Can I manage multiple X accounts on one phone farm box?", a: "Yes. Up to your quoted slot count per chassis on separate physical devices with batch control software." },
    ],
    relatedSlugs: ["social-media-marketing", "facebook"],
  },
  {
    slug: "amazon-shopee",
    title: "Amazon & Shopee Device Farm",
    subtitle: "Cross-border e-commerce multi-store management on real devices",
    category: "E-commerce Platform",
    heroImage: IMAGES.customCabinet.card,
    intro:
      "Cross-border sellers use phone farm boxes to operate multiple Amazon, Shopee, and marketplace accounts on real mobile devices — for listing management, order processing, and regional store operations.",
    sections: [
      { heading: "Multi-Marketplace Hardware", body: "Run Amazon Seller, Shopee, and other marketplace apps on independent physical devices. Each store account maintains separate device identity and network configuration." },
      { heading: "Regional Store Separation", body: "Configure device groups for US, EU, Southeast Asia, and other markets with dedicated network routes per region." },
    ],
    benefits: [
      { title: "Real Mobile Seller Apps", desc: "Native marketplace app experience on physical devices." },
      { title: "Multi-Region Support", desc: "Device groups per country/marketplace." },
      { title: "Secure Account Isolation", desc: "Hardware-level separation between store accounts." },
    ],
    faq: [],
    relatedSlugs: ["ecommerce-operations", "cross-border-marketing"],
  },
];

export function getScenario(slug: string) {
  return SCENARIOS.find((s) => s.slug === slug);
}
