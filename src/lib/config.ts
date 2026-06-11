export const SITE = {
  name: "Phones Farm Box",
  domain: "phonesfarmbox.com",
  url: "https://www.phonesfarmbox.com",
  tagline: "Quote-based phone farm hardware, rack assembly, and B2B export from Guangzhou",
  intro:
    "Guangzhou supplier of phone farm boxes, motherboard chassis, USB hubs, power and cooling modules, and rack-scale cabinet systems for overseas B2B buyers.",
  location: "Guangzhou, China",
  since: 2017,
  description:
    "Phones Farm Box supplies quote-based phone farm hardware, rack assembly, USB hub, power and cooling configurations for overseas B2B buyers. Guangzhou supplier since 2017.",
} as const;

export const CONTACT = {
  telegram: "@huicheng1998",
  telegramUrl: "https://t.me/huicheng1998",
  whatsapp: "+85262155642",
  whatsappUrl: "https://wa.me/85262155642",
  email: "qiuxui646@gmail.com",
  /** Gmail web compose — works in browser without a desktop mail client */
  emailUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=qiuxui646@gmail.com",
  emailMailto: "mailto:qiuxui646@gmail.com",
} as const;

export const PAYMENT = {
  network: "Tron TRC20",
  currency: "USDT",
  address: "TH42KshQyz15iWk5svAwS475RM8oYQjwjW",
  contract: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  minAmount: 10,
  expiryMinutes: 30,
} as const;

export const NAV = [
  { href: "/products", label: "Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/scenarios", label: "Scenarios" },
  { href: "/features", label: "Features" },
  { href: "/help", label: "Help Center" },
  { href: "/tools", label: "Planning Tools" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_LINKS = {
  solutions: [
    { href: "/solutions/social-media-marketing", label: "Social Media Marketing" },
    { href: "/solutions/ecommerce-operations", label: "E-commerce Operations" },
    { href: "/solutions/app-development-qa", label: "App Development & QA" },
    { href: "/solutions/cross-border-marketing", label: "Cross-Border Marketing" },
    { href: "/solutions/game-account-maintenance", label: "Game Account Maintenance" },
    { href: "/solutions/affiliate-marketing", label: "Affiliate Marketing" },
    { href: "/solutions/live-streaming-device-farm", label: "Live Streaming Farm" },
  ],
  scenarios: [
    { href: "/scenarios/tiktok", label: "TikTok Device Farm" },
    { href: "/scenarios/youtube", label: "YouTube Device Farm" },
    { href: "/scenarios/facebook", label: "Facebook Device Farm" },
    { href: "/scenarios/instagram", label: "Instagram Device Farm" },
    { href: "/scenarios/telegram", label: "Telegram Device Farm" },
    { href: "/scenarios/whatsapp", label: "WhatsApp Device Farm" },
    { href: "/scenarios/twitter-x", label: "Twitter (X) Device Farm" },
    { href: "/scenarios/amazon-shopee", label: "Amazon & Shopee Farm" },
  ],
  features: [
    { href: "/features/device-operation-workflow", label: "Device Operation Workflow" },
    { href: "/features/network-setup", label: "Network Setup & IP Planning" },
    { href: "/features/team-device-management", label: "Team Device Management" },
    { href: "/features/remote-control-integration", label: "Remote Control Integration" },
    { href: "/features/unmanned-live-streaming", label: "Unmanned Live Streaming" },
  ],
  resources: [
    { href: "/pricing", label: "Pricing" },
    { href: "/help", label: "Help Center" },
    { href: "/glossary", label: "Glossary" },
    { href: "/tools", label: "Planning Tools" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Guides & Blog" },
    { href: "/alternatives", label: "Hardware vs Cloud" },
    { href: "/ai", label: "For AI Assistants" },
  ],
} as const;
