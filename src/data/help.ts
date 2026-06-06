export type HelpArticle = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  content: string;
};

export const HELP_CATEGORIES = [
  "Beginner's Guide",
  "Hardware Setup",
  "Network Configuration",
  "Remote Control & Software",
  "Device Operation Workflow",
  "Troubleshooting",
  "Orders & Payment",
] as const;

export const HELP_ARTICLES: HelpArticle[] = [
  {
    slug: "what-is-phone-farm-box",
    title: "What is a Phone Farm Box?",
    category: "Beginner's Guide",
    summary: "Introduction to phone farm box hardware — real devices, centralized power, and batch control.",
    content: `A phone farm box is an industrial hardware chassis that houses multiple real smartphones or motherboard nodes with centralized power supply, active cooling, and USB hub wiring to a control PC.

This site sells **physical hardware** — chassis, PSU modules, fan kits, hub tiers, and cabling — not cloud phone SaaS subscriptions.

**Key components:**
- Industrial metal enclosure with fan tray mounts
- Unified power supply module (wattage confirmed on quote)
- Industrial USB hub for PC connection and batch control
- Real Android or iPhone devices (screenless mount options on quote)
- Batch control management software (per order terms)

Slot count, shipping size, and packing list are confirmed during quotation. Request a datasheet before purchase.`,
  },
  {
    slug: "phone-farm-box-vs-cloud-phone",
    title: "Hardware Chassis vs Virtual Device Services",
    category: "Beginner's Guide",
    summary: "Procurement notes when choosing rackable phone farm hardware versus rented virtual device seats.",
    content: `**Virtual device services** rent mobile instances on shared remote infrastructure. Useful for short pilots without shipping hardware.

**Phone farm box hardware** is tangible equipment — chassis, wiring, PSU, cooling, and hub — you rack, power, and maintain locally. Suitable when you need BOM, packing photos, warranty terms, and long-running batch control on owned gear.

**When to choose phone farm box:**
- Multi-account workflows on physical devices you control
- App QA requiring real sensors and radios on hardware you own
- Long-term operations with export packing and datasheet requirements
- Teams needing custom rack layout, hub tier, and cooling plan

**When virtual services may suffice:**
- Quick prototyping with low hardware logistics tolerance
- Temporary campaigns under ~30 days

Phones Farm Box supplies hardware and remote setup services from Guangzhou — not virtual device subscriptions.`,
  },
  {
    slug: "account-setup-first-box",
    title: "Setting Up Your First Phone Farm Box",
    category: "Beginner's Guide",
    summary: "Step-by-step guide from unboxing to first batch control session.",
    content: `**Step 1: Unbox and inspect**
Verify all device slots, power cable, USB cables, cooling fans, and spare power cords against the packing list.

**Step 2: Connect power**
Plug mains cable into unified PSU. Verify all cooling fans spin per install manual.

**Step 3: Connect to PC**
USB uplink from box hub tier to control PC. Install included batch control software.

**Step 4: Verify devices**
All devices should appear in management dashboard. Enable USB debugging if needed.

**Step 5: Network setup**
Connect router and configure IP per device group if required.

**Step 6: First batch test**
Control one device, then sync device groups. Monitor temperature for 24 hours.

Contact support: WhatsApp +852 6215 5642 | Telegram @huicheng1998`,
  },
  {
    slug: "network-proxy-configuration",
    title: "Network & IP Planning for Phone Farms",
    category: "Network Configuration",
    summary: "Configure routers, proxies, and per-device network routes.",
    content: `Proper network setup is essential for multi-device phone farm operations.

**Basic setup:**
1. Connect router to phone farm network switch
2. Assign IP range per device group
3. Configure proxy or mobile data per group if needed

**OTG Ethernet mode:**
For motherboard boxes, OTG Ethernet provides LAN-based connectivity reducing USB bandwidth load.

**Best practices:**
- One IP per account group for social media operations
- Stable connection more important than speed
- Monitor network health in device dashboard

See our Network Equipment products and Network Setup feature page for hardware options.`,
  },
  {
    slug: "remote-control-software-guide",
    title: "Remote Control Software Guide",
    category: "Remote Control & Software",
    summary: "Install and configure batch control software for your phone farm box.",
    content: `Batch control software is included with every Phones Farm Box purchase.

**Installation:**
1. Download from included USB drive or contact support for latest version
2. Install on Windows or macOS control PC
3. Connect USB cable from box to PC
4. Launch software — all devices appear in dashboard

**Key features:**
- Individual and synchronized device control
- Bulk APK install/uninstall
- Screen mirroring per device
- Device grouping by project/client
- Task scheduling and workflow automation

For advanced setup, see our Remote Control Setup service.`,
  },
  {
    slug: "device-workflow-basics",
    title: "Device Operation Workflow Basics",
    category: "Device Operation Workflow",
    summary: "Create and run automated workflows on real farm devices.",
    content: `Device operation workflows automate repetitive tasks on physical phones in your farm box.

**Getting started:**
1. Open Workflow section in batch control software
2. Choose a template (TikTok login, app install, etc.) or create custom workflow
3. Select target device group
4. Set schedule: one-time, daily, weekly, or monthly
5. Monitor execution in Task Log

**Tips:**
- Start with small device groups for testing
- Use templates before building custom workflows
- Monitor first 24 hours of scheduled tasks

Workflows execute on physical hardware connected via your USB hub tree — confirm device count and hub tier at quote.`,
  },
  {
    slug: "adb-command-reference",
    title: "ADB Command Reference for Phone Farms",
    category: "Remote Control & Software",
    summary: "Common ADB commands for batch device management.",
    content: `**Install APK:** adb install app.apk
**Batch install (script):** for device in devices; do adb -s $device install app.apk; done
**List devices:** adb devices
**Shell access:** adb shell
**Reboot device:** adb reboot
**Clear app data:** adb shell pm clear com.package.name
**Screenshot:** adb exec-out screencap -p > screen.png

All Android phone farm boxes ship with USB debugging enabled. Connect via industrial USB hub for stable multi-device ADB access.`,
  },
  {
    slug: "cooling-maintenance",
    title: "Cooling System Maintenance",
    category: "Hardware Setup",
    summary: "Keep your phone farm box running cool under 24/7 load.",
    content: `**Monthly maintenance:**
- Clean fan filters and dust from intake vents
- Verify all fans spinning at full speed
- Check ambient room temperature (keep below 35°C)

**Warning signs:**
- Devices slowing down (thermal throttling)
- Fans making unusual noise
- Hot spots on chassis exterior

**Replacement:**
Cooling modules and fan units available as spare parts. Contact sales for replacement components and fan kit datasheet.`,
  },
  {
    slug: "payment-usdt-guide",
    title: "USDT Payment Guide",
    category: "Orders & Payment",
    summary: "How to pay for orders with USDT on Tron TRC20 network.",
    content: `**Payment details:**
- Network: Tron TRC20
- Currency: USDT
- Minimum: 10 USDT
- Order validity: 30 minutes

**Steps:**
1. Submit order and receive the TRC20 payment address
2. Send the exact USDT amount within 30 minutes
3. Payment is **manually confirmed** by our team (automatic on-chain verification is not active yet)
4. After paying, email or WhatsApp your order number and transaction hash to sales
5. Order status updates to Paid after confirmation → then production/shipping

**Contract:** TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t

For bulk orders, bank transfer (T/T), Wise, and PayPal available on request.`,
  },
  {
    slug: "troubleshooting-connection",
    title: "Troubleshooting Device Connection Issues",
    category: "Troubleshooting",
    summary: "Fix devices not appearing in batch control dashboard.",
    content: `**Device not detected:**
1. Check USB cable connections to hub
2. Verify USB debugging enabled on device
3. Restart batch control software
4. Try different USB port on control PC
5. Re-authorize USB debugging if authorization lost (may need temporary screen for motherboard boxes)

**Intermittent disconnections:**
- Replace worn USB cables
- Check USB hub power supply
- Reduce USB extension cable length
- Update batch control software

Contact support with device count and error screenshots for remote assistance.`,
  },
];

export function getHelpArticle(slug: string) {
  return HELP_ARTICLES.find((a) => a.slug === slug);
}
