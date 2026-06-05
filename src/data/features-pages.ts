import { IMAGES } from "@/lib/images";
import type { ContentPage } from "./scenarios";

export const FEATURE_PAGES: ContentPage[] = [
  {
    slug: "device-operation-workflow",
    title: "Device Operation Workflow",
    subtitle: "Automate repetitive device tasks with workflow templates — the real-device alternative to cloud RPA",
    category: "Automation",
    heroImage: IMAGES.remoteControl.hero,
    intro:
      "Phones Farm Box device operation workflows replace cloud RPA with real-device automation. Create, schedule, and monitor batch tasks on physical phones in your farm box — from app installs to synchronized social media operations.",
    sections: [
      { heading: "Workflow Creation & Templates", body: "Build custom device operation workflows or use pre-built templates for TikTok, YouTube, Facebook, and Google account tasks. Drag-and-drop workflow builder connects to real devices via batch control software." },
      { heading: "Scheduled & Recurring Tasks", body: "Set one-time, daily, weekly, or monthly automated tasks on selected device groups. Workflows execute on real hardware while you monitor progress in the task log dashboard." },
      { heading: "Task Monitoring & Logs", body: "Full-process tracking synchronizes task progress and results across all devices in real time. Failed tasks on one device do not affect others — each device queue is independent." },
    ],
    benefits: [
      { title: "Real Device Execution", desc: "Workflows run on physical phones — not virtual cloud environments." },
      { title: "Low-Code Templates", desc: "Pre-built templates for common platform operations, customizable for your workflow." },
      { title: "24/7 Unattended Operation", desc: "Schedule tasks to run overnight on powered, cooled phone farm hardware." },
      { title: "No Extra Software Fees", desc: "Batch control software included with phone farm box purchase." },
    ],
    faq: [
      { q: "How is device workflow different from cloud RPA?", a: "Cloud RPA runs on virtual phones. Our device workflows execute on real physical devices in your phone farm box, providing authentic hardware fingerprints and sensor data." },
      { q: "Does workflow automation work on all 20 devices simultaneously?", a: "Yes. Intelligent buffering handles speed differences between devices. Progress displays per device in the task log." },
    ],
    relatedSlugs: ["synchronized-device-control", "bulk-apk-deployment"],
  },
  {
    slug: "network-setup",
    title: "Network Setup & IP Planning",
    subtitle: "Router solutions, proxy planning, and per-device network segmentation for phone farms",
    category: "Network",
    heroImage: IMAGES.network.hero,
    intro:
      "Proper network setup is critical for multi-device phone farm operations. Phones Farm Box provides network equipment, router solutions, and IP planning guides — the hardware equivalent of cloud proxy management.",
    sections: [
      { heading: "One Device, One IP — Independent Network Environments", body: "Each device slot in your phone farm box can bind a dedicated proxy or mobile data connection. Bulk import and assign network routes to device groups for multi-account operations on real physical hardware you own." },
      { heading: "Bulk Network Configuration", body: "Supports HTTP/HTTPS/SOCKS5 proxy assignment per device group. Import proxy lists in batch and bind to device clusters for TikTok, Facebook, YouTube multi-account scenarios without manual per-phone configuration." },
      { heading: "Router & OTG Ethernet Solutions", body: "OTG Ethernet and LAN-based connection modes provide stable data paths for motherboard boxes and phone farm boxes. Reduces USB bandwidth bottlenecks in large deployments." },
      { heading: "Network Monitoring & Failover", body: "Monitor connection status per device group via batch control dashboard. Plan failover routes and backup IPs for stable 24/7 cross-border operations on real hardware." },
    ],
    benefits: [
      { title: "Device-Level IP Isolation", desc: "One device-one IP binding reduces account association risk on real hardware." },
      { title: "Bulk Import & Binding", desc: "Assign hundreds of network routes to device groups at scale." },
      { title: "Hardware Router Integration", desc: "Industrial routers and switches designed for phone farm density." },
      { title: "No Cloud Subscription", desc: "Own your network hardware — no per-device monthly fees." },
    ],
    faq: [
      { q: "What is phone farm network setup vs cloud proxy management?", a: "Cloud proxy management runs on virtual phones. Phone farm network setup configures real devices with dedicated routers, proxy bindings, and IP planning — hardware you control permanently." },
      { q: "Do I need a proxy for every device?", a: "For sensitive multi-account operations, one IP per device or device group is recommended. Lower-risk QA testing may share IP per group." },
      { q: "Will network issues on one device affect others?", a: "No. Each device has independent network configuration. An anomaly on one device does not interrupt the entire cluster." },
      { q: "What proxy protocols are supported?", a: "HTTP, HTTPS, and SOCKS5 proxies can be assigned per device group via router configuration and batch control software." },
      { q: "Does network setup require extra fees?", a: "Network equipment is sold as hardware products. No recurring cloud subscription — routers and switches are one-time purchases." },
    ],
    relatedSlugs: ["team-device-management", "remote-control-integration"],
  },
  {
    slug: "team-device-management",
    title: "Team Device Management",
    subtitle: "Shared device access, role assignment, and collaborative phone farm operations",
    category: "Collaboration",
    heroImage: IMAGES.office,
    intro:
      "Teams managing large phone farms need shared device access with clear permissions. Phones Farm Box supports team device operation — assign device groups to members, share management dashboards, and collaborate on multi-account workflows.",
    sections: [
      { heading: "Device Group Assignment", body: "Organize devices into groups by client, project, or platform. Assign groups to team members with appropriate access levels for device control and monitoring." },
      { heading: "Shared Management Dashboard", body: "Central dashboard displays all device groups, task status, and hardware health. Team leads monitor operations while members control assigned device clusters." },
      { heading: "Enterprise Deployment Support", body: "For large teams, we provide custom cabinet deployments with redundant power, network segmentation, and dedicated account management from our Guangzhou factory." },
    ],
    benefits: [
      { title: "Role-Based Access", desc: "Control who can operate, monitor, or configure each device group." },
      { title: "One-Click Device Sharing", desc: "Share device cluster access among team members efficiently." },
      { title: "Centralized Data", desc: "All device status and task logs stored in one management interface." },
    ],
    faq: [
      { q: "Can multiple people control the same phone farm?", a: "Yes. Batch control software supports multi-user access with device group permissions for team collaboration." },
    ],
    relatedSlugs: ["multi-device-dashboard", "remote-control-integration"],
  },
  {
    slug: "remote-control-integration",
    title: "Remote Control Integration",
    subtitle: "Device management API, ADB integration, and third-party system connectivity",
    category: "Integration",
    heroImage: IMAGES.remoteControl.detail,
    intro:
      "Integrate your phone farm box with existing systems via remote control interfaces and ADB automation. The hardware equivalent of cloud phone API — connect real devices to your workflows, scripts, and management platforms.",
    sections: [
      { heading: "ADB & Script Integration", body: "Deep ADB integration supports batch commands, UI automation, and custom script deployment across all devices in the farm box. Compatible with standard Android automation frameworks." },
      { heading: "Management Interface API", body: "Remote control software provides device management interfaces for listing devices, executing commands, pushing APKs, and retrieving device status programmatically." },
      { heading: "Third-Party Tool Compatibility", body: "Phone farm boxes work with popular group control software, screen mirroring tools, and custom automation scripts used by cross-border operations teams." },
    ],
    benefits: [
      { title: "Open ADB Access", desc: "Standard Android Debug Bridge on every device node." },
      { title: "Script-Friendly", desc: "Connect Python, Node.js, or custom automation to real devices." },
      { title: "Remote Setup Support", desc: "Our team configures integrations during deployment." },
    ],
    faq: [
      { q: "Is there an API for phone farm boxes?", a: "Remote control software provides device management interfaces for listing devices, executing commands, and pushing APKs. ADB enables direct script-level integration with each physical device — the hardware equivalent of cloud phone API access." },
      { q: "Can I integrate phone farm boxes with my existing automation scripts?", a: "Yes. Standard ADB access on every Android node supports Python, Node.js, and custom automation frameworks. Our deployment team can assist with initial integration setup." },
      { q: "Does API access require a monthly subscription?", a: "No. Device management interfaces and ADB access are included with phone farm box hardware — no per-device API fees like cloud phone SaaS platforms." },
    ],
    relatedSlugs: ["adb-batch-automation", "device-operation-workflow"],
  },
  {
    slug: "synchronized-device-control",
    title: "Synchronized Device Control",
    subtitle: "Mirror master device actions across all phones in your farm box simultaneously",
    category: "Control",
    heroImage: IMAGES.serviceScene,
    intro:
      "Operation sync lets you control a master device and replicate actions across all connected phones in real time — the real-device equivalent of cloud operation sync for batch social media and app testing workflows.",
    sections: [
      { heading: "Master-Slave Synchronization", body: "Operate one device as master; all other devices in the group replicate taps, swipes, and inputs simultaneously. Ideal for batch app testing and synchronized content operations." },
      { heading: "Selective Group Sync", body: "Choose which device groups participate in sync operations. Different projects can run independent sync groups on the same phone farm infrastructure." },
    ],
    benefits: [
      { title: "Real-Time Mirroring", desc: "Actions on master device reflected instantly on slave devices." },
      { title: "Flexible Grouping", desc: "Sync 5, 10, or all 20 devices as needed per task." },
      { title: "Manual + Automated", desc: "Combine sync control with scheduled workflow automation." },
    ],
    faq: [
      { q: "Does sync work across different phone models?", a: "Best results with same-model devices in a group. We recommend uniform device configurations per box." },
    ],
    relatedSlugs: ["multi-device-dashboard", "device-operation-workflow"],
  },
  {
    slug: "adb-batch-automation",
    title: "ADB Batch Automation",
    subtitle: "Deep Android ADB integration for batch control of real devices in phone farm boxes",
    category: "Automation",
    heroImage: IMAGES.usbHub.hero,
    intro:
      "Android ADB batch automation enables script-level control of every device in your phone farm box. Install apps, run shell commands, capture screens, and automate UI interactions across 20+ real devices from one PC.",
    sections: [
      { heading: "Batch ADB Commands", body: "Execute ADB commands on all devices simultaneously — install APKs, clear app data, reboot devices, and pull logs in batch." },
      { heading: "UIAutomator & Script Support", body: "Compatible with UIAutomator, Appium, and custom ADB scripts for automated testing and operation workflows on real hardware." },
    ],
    benefits: [
      { title: "Standard ADB Protocol", desc: "No proprietary lock-in — use any ADB-compatible tool." },
      { title: "USB Hub Stability", desc: "Industrial USB hubs maintain stable ADB connections for all nodes." },
      { title: "Developer-Friendly", desc: "Ideal for QA teams running automated test suites on real devices." },
    ],
    faq: [
      { q: "Is ADB enabled on all devices?", a: "Yes. USB debugging is enabled on all Android phone farm and motherboard box configurations." },
    ],
    relatedSlugs: ["remote-control-integration", "bulk-apk-deployment"],
  },
  {
    slug: "multi-device-dashboard",
    title: "Multi-Device Dashboard",
    subtitle: "Aggregated view of all devices in your phone farm — focus mode for large-scale operations",
    category: "Management",
    heroImage: IMAGES.remoteControl.hero,
    intro:
      "The multi-device dashboard displays all phone farm devices on a single screen. Monitor status, switch between devices, and manage large device clusters efficiently — equivalent to cloud focus mode for real hardware.",
    sections: [
      { heading: "Aggregated Device View", body: "See all 20+ device screens in a grid layout. Click any device to take direct control while monitoring the rest." },
      { heading: "Health & Status Monitoring", body: "Real-time display of device connection status, temperature indicators, and task progress across the entire farm." },
    ],
    benefits: [
      { title: "Single-Screen Overview", desc: "Manage dozens of devices without switching physical phones." },
      { title: "Quick Device Switching", desc: "Click any device window to take immediate control." },
      { title: "Scalable to 100+ Devices", desc: "Dashboard scales with multi-box and rackmount deployments." },
    ],
    faq: [],
    relatedSlugs: ["synchronized-device-control", "team-device-management"],
  },
  {
    slug: "bulk-apk-deployment",
    title: "Bulk APK Deployment",
    subtitle: "Install and manage applications across all devices in your phone farm box at once",
    category: "App Management",
    heroImage: IMAGES.androidFarm.hero,
    intro:
      "Bulk APK deployment lets you install, update, and uninstall applications across all devices in your phone farm simultaneously — the real-device equivalent of cloud app pre-installation.",
    sections: [
      { heading: "One-Click Batch Install", body: "Select one or multiple APK files and deploy to all devices or selected groups. Progress displays per device with success/failure reporting." },
      { heading: "App Lifecycle Management", body: "Batch start, stop, clear data, and uninstall apps across device clusters. Maintain consistent app versions across your entire phone farm." },
    ],
    benefits: [
      { title: "20+ Devices at Once", desc: "Deploy apps to entire box in single operation." },
      { title: "Version Consistency", desc: "Ensure all devices run same app version for testing." },
      { title: "Pre-Deployment Setup", desc: "Factory can pre-install apps before shipping." },
    ],
    faq: [
      { q: "Can you pre-install apps before delivery?", a: "Yes. We offer pre-installation service for bulk orders — specify APK list during order." },
    ],
    relatedSlugs: ["adb-batch-automation", "device-operation-workflow"],
  },
  {
    slug: "device-profile-reset",
    title: "Device Profile Reset",
    subtitle: "Reset device identity and configuration for fresh account environments",
    category: "Management",
    heroImage: IMAGES.motherboardBox.hero,
    intro:
      "Device profile reset refreshes hardware parameters and system state on real devices — equivalent to cloud one-click new device for phone farm boxes with customized ROM support.",
    sections: [
      { heading: "Factory Reset & Reconnect", body: "Phone box configurations support factory reset and automatic PC reconnection without re-authorization. Quickly prepare devices for new account registration." },
      { heading: "System Reconfiguration", body: "Change device model parameters, language settings, and system configuration through batch control software or custom ROM tools." },
    ],
    benefits: [
      { title: "Quick Turnaround", desc: "Reset and reconfigure devices in minutes, not hours." },
      { title: "Batch Reset", desc: "Reset multiple devices simultaneously." },
      { title: "Custom ROM Support", desc: "Advanced reset and identity options on customized systems." },
    ],
    faq: [],
    relatedSlugs: ["device-operation-workflow"],
  },
  {
    slug: "device-asset-management",
    title: "Device Asset Management",
    subtitle: "File push, APK storage, and asset distribution across phone farm devices",
    category: "Management",
    heroImage: IMAGES.warehouse,
    intro:
      "Manage files, APKs, media assets, and configuration packages across all devices in your phone farm. Central asset library with batch push to selected device groups.",
    sections: [
      { heading: "Central Asset Library", body: "Store APKs, images, videos, and config files in a central repository. Push assets to one device or all devices in batch." },
      { heading: "Batch File Distribution", body: "Distribute content packages, scripts, and media files to device groups for synchronized content operations." },
    ],
    benefits: [
      { title: "Organized Asset Storage", desc: "Keep all deployment files in one management interface." },
      { title: "Batch Push", desc: "Send files to 20+ devices with one action." },
      { title: "Team Shared Assets", desc: "Team members access shared asset library." },
    ],
    faq: [],
    relatedSlugs: ["bulk-apk-deployment"],
  },
  {
    slug: "unmanned-live-streaming",
    title: "Unmanned Live Streaming on Phone Farm Box",
    subtitle: "Multi-account automated streaming on real devices with camera support",
    category: "Streaming",
    heroImage: IMAGES.iphoneFarm.hero,
    intro:
      "Unmanned live streaming on phone farm box hardware — the real-device alternative to cloud phone streaming. Run multiple live streaming accounts on physical devices with camera support, dedicated network routes, and 24/7 powered infrastructure.",
    sections: [
      { heading: "Real Device Camera Streaming", body: "Phone box configurations retain camera hardware for TikTok Live, YouTube Live, and other mobile streaming apps. Each device runs an independent streaming session on authentic mobile hardware." },
      { heading: "Multi-Account Streaming Matrix", body: "Manage multiple streaming accounts across device groups from centralized batch control dashboard. Plan network and IP per channel for regional streaming strategies." },
      { heading: "24/7 Powered Infrastructure", body: "Industrial PSU and active cooling support continuous streaming sessions without the thermal throttling common in scattered phone setups." },
    ],
    benefits: [
      { title: "Physical Camera Hardware", desc: "Real device cameras — not virtualized streaming environments." },
      { title: "Multi-Channel Scale", desc: "20+ streaming devices per box, stackable for growth." },
      { title: "Stable Power & Cooling", desc: "Designed for continuous 24/7 operation." },
    ],
    faq: [
      { q: "Can phone farm boxes run live streams unattended?", a: "Yes. With batch control software and stable power/cooling, devices can run scheduled streaming workflows on real hardware." },
    ],
    relatedSlugs: ["network-setup", "device-operation-workflow"],
  },
];

export function getFeaturePage(slug: string) {
  return FEATURE_PAGES.find((f) => f.slug === slug);
}
