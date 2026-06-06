export const BLOG_POSTS = [
  {
    slug: "what-is-box-phone-farm",
    title: "What Is a Box Phone Farm? B2B Hardware Guide",
    category: "Box Knowledge",
    date: "2026-05-28",
    excerpt:
      "A box phone farm is a purpose-built chassis housing real smartphones with centralized power, cooling, and batch PC control. Learn how it works and who needs one.",
    content: `If you manage many smartphones for social media, app testing, or automation, scattered phones create cable clutter, uneven cooling, and unreliable USB trees.

A **box phone farm** is an industrial chassis that houses real phone motherboards or mobile phones (often screenless mounts) in one enclosure with unified power, active cooling, USB hub wiring, and batch PC control.

**Key components of a box phone farm:**
- Industrial metal enclosure with fan tray mounts (fan kit spec confirmed at quote)
- Integrated USB hub and power distribution module
- Concealed cable routing and rear cable management
- Batch control software for synchronized multi-device operations
- Stackable modular design for phased expansion

**Who needs a box phone farm?**
Social media teams, app developers, QA labs, and operators who need rackable density instead of desk clutter.

Phones Farm Box supplies chassis, hubs, PSU modules, cooling kits, and assembly documentation from Guangzhou. Contact us with your target device count — slot layout and BOM are confirmed before quote.`,
  },
  {
    slug: "motherboard-box-vs-phone-box",
    title: "Motherboard Box vs Phone Box: Which Should You Choose?",
    category: "Box Knowledge",
    date: "2026-04-17",
    excerpt:
      "Detailed comparison of motherboard boxes and phone boxes — cost, SIM support, system options, and ideal use cases.",
    content: `Choosing between a motherboard box and a phone box is one of the most important decisions when building a box phone farm.

**Motherboard Box**
- No phone frame — bare motherboard nodes only
- Removes battery and screen to save cost
- Uses official original Android system with USB debugging enabled
- Some models support SIM cards
- Active fan tray — kit matched to chassis generation at quote
- Limitation: if USB authorization is lost, you need a temporary screen to re-enable debugging
- Customized ROM available on request

**Phone Box**
- Has phone frame with SIM and camera support on quoted models
- Usually uses customized ROM for streamlined automation
- No authorized PC required — auto-reconnect, factory reset, streamlined apps
- OEM bootloader may be unlocked on custom ROM models
- Official original system available on request
- Higher per-node cost but easier day-to-day management

**Which to choose?**
Choose motherboard box for maximum density and lowest cost when you run headless automation. Choose phone box when you need SIM, camera, and easier device management without USB auth headaches.

Phones Farm Box offers both configurations. Request a sample or datasheet for your workflow before final BOM sign-off.`,
  },
  {
    slug: "box-phone-farm-cooling-guide",
    title: "Box Phone Farm Cooling: Planning Active Airflow",
    category: "Hardware & Selection",
    date: "2026-03-27",
    excerpt:
      "Overheating kills phone farm performance. Learn how to plan fan kits, chassis airflow, and maintenance for dense deployments.",
    content: `Phones mounted close together generate heat. Without proper cooling, you get performance throttling, unexpected shutdowns, and shortened device lifespan.

**Why box phone farm cooling matters:**
- Dense chassis layouts need matched intake/exhaust paths — layout confirmed at quote
- Thermal throttling reduces app performance and automation speed
- Active fan kits (count and CFM) depend on node load, ambient room temperature, and chassis generation
- Metal chassis with heat dissipation channels improves efficiency when fan direction is correct

**What to look for:**
- Fan kit spec on written quote — not fixed across all chassis variants
- Rear or top exhaust airflow design documented on wiring/packing sheet
- Cleanable fan filters for long-term maintenance
- Factory burn-in testing under load when ordered

Every Phones Farm Box unit can include burn-in testing at our Guangzhou workshop before shipment — scope stated on proforma.`,
  },
  {
    slug: "real-device-vs-cloud-phone",
    title: "Physical Phone Farm Hardware vs Virtual Device Services",
    category: "Applications & Use Cases",
    date: "2026-02-12",
    excerpt:
      "When to buy rackable phone farm chassis versus renting virtual device seats — procurement notes for B2B buyers.",
    content: `Some teams rent virtual Android instances on shared cloud infrastructure. Box phone farms use **physical hardware** you own — chassis, wiring, PSU, cooling, and USB hub tree — assembled for your quoted device list.

**Virtual device services suit:** short sandboxes, temporary tests, or pilots under 30 days with low hardware logistics tolerance.

**Physical box hardware suits:** long-running operations, custom wiring, mixed Android/iPhone rooms, and buyers who need packing lists, datasheets, and warranty on tangible equipment.

Phones Farm Box sells hardware and integration services only — not cloud phone SaaS. Slot count, power draw, and cooling plan are confirmed during quotation.`,
  },
  {
    slug: "box-phone-farm-setup-guide",
    title: "Box Phone Farm Setup Guide: From Unbox to Batch Control",
    category: "Setup & Tutorials",
    date: "2026-01-20",
    excerpt:
      "Step-by-step guide to deploying your first box phone farm — power, USB hub, network, software, and first synchronized test.",
    content: `This guide walks through deploying a Phones Farm Box from unboxing to first batch control test.

**Step 1: Unbox and inspect**
Verify device slots, power cable, USB cables, cooling fans, and spare power cords. Run visual QC on each node against the packing list.

**Step 2: Power and network**
Connect mains input to the unified PSU (110–240 VAC range — region plug on invoice). Attach network router if your workflow requires dedicated IP per device group.

**Step 3: PC connection**
Single USB uplink from box hub tier to control PC. Install included batch control management software and verify all devices appear.

**Step 4: Device preparation**
Enable USB debugging (Android) or verify kernel connection (iPhone). Install required apps in batch if needed.

**Step 5: First batch test**
Control one device individually, then sync device groups. Monitor temperature and connection stability for 24 hours.

Need help? WhatsApp +852 6215 5642 or Telegram @huicheng1998 for remote setup support.`,
  },
  {
    slug: "diy-android-farm-parts-guide",
    title: "DIY Android Farm Parts: Building Your Own Box Phone Farm",
    category: "Box Knowledge",
    date: "2026-05-15",
    excerpt:
      "Guide to DIY Android farm box chassis, USB HUB servers, power modules, and expansion parts for custom box phone farm builds.",
    content: `Not every deployment needs a fully pre-configured turnkey cluster. DIY Android farm parts let you build and expand custom configurations with phased BOM lines.

**DIY components available from Phones Farm Box:**
- Empty box / chassis with fan mounts and cable routing
- USB HUB server modules
- Power supply solutions
- Cooling fan modules
- Network equipment and OTG Ethernet adapters
- iPhone farm DIY parts

**When DIY makes sense:**
- Expanding an existing farm with additional chassis
- Custom node counts or device model combinations
- Replacing individual components (PSU, fans, hubs)
- Building a phased deployment starting small

Contact our sales team with your device count, models, and workflow for a DIY parts recommendation and datasheet request.`,
  },
  {
    slug: "phone-farm-network-proxy-setup",
    title: "Phone Farm Network & Proxy Setup Guide",
    category: "Setup & Tutorials",
    date: "2026-05-20",
    excerpt:
      "How to plan IP allocation, bind proxies per device group, and configure routers for multi-account phone farm operations.",
    content: `Network setup is the foundation of stable multi-account phone farm operations. This guide covers hardware-level network planning for routers, switches, and OTG paths.

**One device, one IP (recommended for social media)**
Assign dedicated proxy or mobile data routes per device or device group. Bulk import proxy lists and bind via batch control software and router configuration.

**Supported proxy types**
HTTP, HTTPS, and SOCKS5 proxies can be assigned per device group. Use industrial routers sized for your quoted node count.

**Network architecture**
- Control PC connects to phone farm box via USB uplink
- Router handles per-group IP routing
- OTG Ethernet reduces USB bandwidth bottlenecks on large farms

**Monitoring**
Check connection status per device group in batch control dashboard. Plan backup IPs for failover during long-running campaigns.

Phones Farm Box sells network equipment and provides deployment guides with every hardware order.`,
  },
  {
    slug: "cloud-phone-vs-box-farm-2026",
    title: "Hardware Ownership vs Virtual Device Rentals: Procurement Notes",
    category: "Applications & Use Cases",
    date: "2026-06-01",
    excerpt:
      "Procurement comparison: recurring virtual device subscriptions vs one-time phone farm box hardware for long-running teams.",
    content: `Teams choosing between virtual device SaaS and phone farm box hardware face a trade-off: recurring opex vs cap-ex you own and can rack, ship, and service.

**Virtual device SaaS**
- Monthly per-device subscription
- Quick setup, no hardware logistics
- Shared infrastructure you do not control
- Best for: short pilots and sandboxes

**Box phone farm hardware**
- One-time hardware purchase — you own chassis, PSU, hub, and cooling
- Slot count, wiring diagram, and packing list on proforma
- Stackable scaling — box count confirmed during quotation
- Best for: long-term operations needing datasheets, warranty, and export packing

**Pricing model difference**
Virtual services charge recurring fees. Phones Farm Box hardware starts from sample orders at 1 unit — see our pricing page for current catalog prices.

**Our recommendation**
If you need tangible BOM, shipping weight, and factory warranty terms, request a hardware quote. If you need a short sandbox only, virtual rentals may suffice for the pilot phase.`,
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
