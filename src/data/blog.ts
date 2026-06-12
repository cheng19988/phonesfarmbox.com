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

Need help? Message us on WhatsApp or Telegram — contact details on our Contact page.`,
  },
  {
    slug: "how-to-request-phone-farm-quote",
    title: "How to Request a Phone Farm Hardware Quote (RFQ Checklist)",
    category: "Procurement & Shipping",
    date: "2026-06-07",
    excerpt:
      "What to include in your RFQ so Guangzhou suppliers can return a written BOM, lead time, and freight options without back-and-forth delays.",
    content: `A complete RFQ shortens quote cycles. Phones Farm Box replies on business days when these fields are clear.

**Include in every hardware inquiry:**
- Destination country and preferred freight (air express vs sea LCL)
- Target product or SKU (chassis only, motherboard box, phone box, hub, PSU)
- Expected device quantity and Android / iPhone mix
- Connection mode: USB, OTG, or hybrid — affects hub tier and cable kit
- Voltage region: 110 V, 220 V, or 220–240 V — PSU and plug type on invoice
- Empty chassis vs phones or boards supplied on quote
- Target phone or board models (if known)
- Use case: social ops, QA lab, e-commerce, live streaming, etc.
- Payment preference: USDT, bank T/T, Wise, PayPal
- WhatsApp or Telegram for follow-up

**What you receive on quote:**
Written BOM line items, slot layout note, lead time window, packing weight estimate, and payment instructions. Specs marked "confirmed before quote" stay open until you sign off.

**Common delays:**
Missing destination country, vague device count, or no connection mode — we can still reply, but configuration may stay provisional until clarified.

Use our Contact form — RFQ fields map directly to what sales needs for a proforma.`,
  },
  {
    slug: "usb-hub-sizing-phone-farm",
    title: "USB Hub Sizing for Phone Farm Boxes",
    category: "Hardware & Selection",
    date: "2026-06-06",
    excerpt:
      "How hub tier, uplink bandwidth, and OTG paths affect stable multi-device control — planning notes before you lock a BOM.",
    content: `USB is the backbone of most Android phone farm deployments. Undersized hubs cause disconnect loops, slow APK pushes, and flaky batch control.

**Key sizing factors:**
- Node count per chassis (slots confirmed on quote)
- USB 2.0 vs 3.x uplink from hub to control PC
- Whether OTG Ethernet offloads traffic from the USB tree
- Simultaneous operations: idle monitoring vs bulk APK install vs screen mirror

**Typical architecture:**
Control PC → hub uplink → internal distribution board → per-node data cables. One weak link affects the whole group.

**When to step up hub tier:**
- 16+ active nodes with frequent file transfer
- Mixed OTG + USB paths in one rack
- Long cable runs without powered hubs

**What we confirm on quote:**
Hub model, uplink count, spare port policy, and cable length class. We do not publish a single hub SKU for all chassis generations — layout varies by slot count.

Cross-check node count with our USB port requirement calculator under Planning Tools, then send results with your RFQ.`,
  },
  {
    slug: "phone-farm-power-planning-rack",
    title: "Power Planning for Rack-Scale Phone Farms",
    category: "Hardware & Selection",
    date: "2026-06-05",
    excerpt:
      "PSU sizing, circuit loading, and thermal headroom for multi-box racks — what facilities teams should ask before install week.",
    content: `Power mistakes show up as breaker trips, voltage sag, or fans running at max 24/7. Plan before racks arrive.

**Start with quoted load:**
Each proforma can include a load note per chassis — actual watts depend on node type, charge state, and workload. Treat catalog examples as planning ranges until your BOM is signed.

**Facility checklist:**
- Dedicated circuit vs shared office power
- 110 V vs 220–240 V region match on PSU SKU
- UPS scope: control PC only vs whole rack (buyer decision)
- Room HVAC vs chassis fan kit — both matter in summer

**Multi-box racks:**
Stagger inrush if several PSUs switch on together. Label circuits per stack so maintenance does not drop an entire row.

**Cooling linkage:**
Higher sustained load needs matched fan kit and exhaust path — see our cooling guide for airflow basics.

Send target box count and region voltage with your RFQ; we align PSU and fan lines on the written quote.`,
  },
  {
    slug: "iphone-farm-vs-android-farm-procurement",
    title: "iPhone Farm vs Android Farm: Procurement Differences",
    category: "Box Knowledge",
    date: "2026-06-04",
    excerpt:
      "Lightning/USB-C mix, control software, density, and quote fields that differ when you buy iPhone clusters vs Android chassis.",
    content: `Android and iPhone farms share chassis concepts but differ in cable plant, control stack, and per-node cost.

**Android-heavy farms:**
- USB debugging and batch APK workflows are standard
- Motherboard boxes maximize density for headless tasks
- Hub tier and OTG options drive stability at scale

**iPhone clusters:**
- Cable mix (Lightning / USB-C) locked at quote
- Control software and host OS requirements stated on datasheet
- Often higher per-node cost; SIM/camera paths depend on quoted models

**Mixed rooms:**
Possible with clear BOM separation — Android stacks and iPhone stacks on distinct hubs and PSUs reduces cross-interference.

**Quote fields that change:**
Target models, OS/control stack, cable kit, and burn-in scope. Do not assume one chassis SKU covers both platforms interchangeably.

Tell us your platform mix early; we route you to the closest catalog SKU and note gaps as "confirmed before quote."`,
  },
  {
    slug: "sample-order-moq-phone-farm-hardware",
    title: "Sample Orders and MOQ for Phone Farm Hardware",
    category: "Procurement & Shipping",
    date: "2026-06-03",
    excerpt:
      "MOQ from one unit, what sample orders include, and how pilots roll into bulk rack quotes without changing supplier.",
    content: `Phones Farm Box lists MOQ from 1 unit for standard catalog chassis — samples are normal for overseas B2B buyers.

**What a sample order validates:**
- Build quality, fan noise, cable routing
- Hub stability with your target phone models
- Packing quality for your freight forwarder
- Remote onboarding flow with your ops team

**Sample vs bulk quote:**
Sample uses current catalog price; bulk lines may include quantity tiers, sea freight crating, and phased shipment — all on separate proforma.

**Lead time:**
Samples often ship faster than custom slot counts or phone-included builds. Exact window confirmed on quote, not fixed site-wide.

**After sample approval:**
Reference your sample order number in bulk RFQ so sales reuses verified models and connection mode.

Start from Products or Contact — specify "sample evaluation" in the message field.`,
  },
  {
    slug: "export-shipping-air-vs-sea-phone-farm",
    title: "Export Shipping: Air vs Sea for Phone Farm Hardware",
    category: "Procurement & Shipping",
    date: "2026-06-02",
    excerpt:
      "When DHL air makes sense vs sea LCL for chassis, hubs, and rack projects — packing and documentation notes from Guangzhou export.",
    content: `Freight choice affects landed cost and install timeline. We export from Guangzhou with commercial invoice and packing list on every shipment.

**Air express (courier):**
- Best for: samples, urgent replacements, 1–3 chassis
- Faster customs clearance for small cartons
- Higher $/kg — weigh against delay cost

**Sea LCL / freight:**
- Best for: multi-box racks, cabinet projects, heavy PSU/hub spares
- Crating and shock padding spec on quote
- Plan extra days for port handling and last-mile

**What we need from you:**
Consignee details, destination port or door address, and whether you have a forwarder. Battery-in-device shipments may need extra documentation — declare phone-included vs empty chassis on RFQ.

**Insurance:**
Buyer-arranged cargo insurance is recommended on sea freight above project threshold.

State freight preference in Contact — we return air and sea options when both are viable.`,
  },
  {
    slug: "usdt-payment-phone-farm-orders",
    title: "USDT (TRC20) Payment for Phone Farm Orders",
    category: "Procurement & Shipping",
    date: "2026-05-30",
    excerpt:
      "How small hardware orders pay by USDT, what to send after transfer, and why confirmation is manual — not automated on-chain.",
    content: `USDT on Tron TRC20 is available for qualifying orders. Amount, network, and address appear on your order page after checkout.

**Process:**
1. Place order or receive proforma with USDT option
2. Send exact USDT amount to the TRC20 address shown
3. Email or message order number + transaction hash (txid)
4. Sales confirms payment manually and updates order status

**Important:**
- Use TRC20 only — wrong network may lose funds
- We do not auto-verify on-chain without manual review in current workflow
- Large bulk orders may use bank T/T, Wise, or PayPal per invoice

**Expiry:**
Payment window is shown on order page (typically 30 minutes for online checkout). Request extension via WhatsApp/Telegram if needed before resending.

**Refunds:**
See Refund Policy — crypto refunds follow same inspection rules as other methods.

For invoice-only bulk deals, ask sales for bank details instead of checkout USDT.`,
  },
  {
    slug: "factory-burn-in-what-to-expect",
    title: "Factory Burn-In Testing: What Buyers Should Expect",
    category: "Hardware & Selection",
    date: "2026-05-29",
    excerpt:
      "Loaded burn-in before export, what is checked, and what documentation you can request for QA or enterprise procurement.",
    content: `Burn-in catches early fan, PSU, and USB path failures before cartons leave Guangzhou.

**Standard scope (when ordered):**
- Power-on every slot
- USB/data path check control PC → hub → node
- Loaded run duration depends on product class — stated on packing checklist
- Fan noise and temperature spot-check

**What burn-in is not:**
It does not replace your app-level soak test with production accounts. It validates hardware assembly, not your campaign logic.

**Documentation:**
Buyers can request checklist sign-off or summary note for audit — specify on RFQ for enterprise deals.

**Skip burn-in:**
Possible on rush samples by agreement; trade-off is higher DOA risk in your first week.

Include "burn-in required" in Contact if procurement mandates pre-ship load testing.`,
  },
  {
    slug: "empty-chassis-vs-phones-included-quote",
    title: "Empty Chassis vs Phones-Included Orders",
    category: "Procurement & Shipping",
    date: "2026-05-25",
    excerpt:
      "When to buy empty box only, when to quote devices on chassis, and how BOM lines change for customs and lead time.",
    content: `Empty chassis keeps you flexible with BYO devices; phones-included speeds up turn-key pilots.

**Empty chassis / motherboard-only:**
- You supply phones or boards matching quoted slot layout
- Often faster customs description (hardware accessory)
- Lower unit price; you manage device procurement locally

**Phones or boards on quote:**
- Models and counts locked on proforma
- Longer lead time for device sourcing and burn-in
- Packing list shows device + chassis lines for invoice

**Customs note:**
Mixed shipments affect declared value and HS codes — provide forwarder guidance when you know it.

**Hybrid phased:**
Common for large projects: chassis sea freight first, devices air later. State phased plan on RFQ.

Tell us which model on Contact — connection mode and slot count still required either way.`,
  },
  {
    slug: "rack-cabinet-phone-farm-planning",
    title: "Rack and Cabinet Planning for Phone Farm Projects",
    category: "Setup & Tutorials",
    date: "2026-05-22",
    excerpt:
      "Stacking boxes, custom cabinets, cable management, and facility layout for 50+ device rooms.",
    content: `Room-scale projects fail in planning when power, heat, and cable length are treated as afterthoughts.

**Layout steps:**
1. Count boxes from capacity estimator (Planning Tools)
2. Assign one control PC per hub group or per row — scope on quote
3. Plan hot aisle / exhaust direction for fan kits
4. Label USB and power per stack before go-live

**Custom cabinets:**
Available for enterprise RFQs — dimensions, door access, and fan plenum confirmed on drawing, not from a fixed catalog page.

**Cable management:**
Service loops at hub tier; avoid tension on node ports during stack maintenance.

**Access:**
Leave front/service clearance for slot swap without moving entire rack.

Send room photo or rack sketch with device target count — engineering uses it for cabinet and PSU recommendations.`,
  },
  {
    slug: "tiktok-device-farm-hardware-checklist",
    title: "TikTok Multi-Device Farm: Hardware Checklist",
    category: "Applications & Use Cases",
    date: "2026-05-18",
    excerpt:
      "Chassis, network, and ops planning for teams running many TikTok accounts on real devices — hardware-only perspective.",
    content: `This checklist covers **hardware and network** for TikTok-style multi-account ops — not platform policy advice.

**Hardware baseline:**
- Real devices per account or strict small groups (buyer policy)
- Phone box when SIM/camera paths matter; motherboard box for headless density
- Stable USB tree sized for simultaneous mirror/APK tasks

**Network:**
- Dedicated IP or mobile route per group where ops requires isolation
- Router sized for concurrent connections — see network setup guide

**Environment:**
- Cooling plan for 24/7 sessions; throttling hurts upload consistency
- Control PC spec adequate for batch dashboard load

**Scaling:**
Add chassis in stacks; re-quote hub and PSU tiers instead of overloading one box.

**Compliance:**
You own account and content policy risk — we supply rackable hardware and integration docs only.

Link to our TikTok scenario page for workflow context; use Contact for chassis count quotes.`,
  },
  {
    slug: "voltage-region-110v-220v-phone-farm",
    title: "110 V vs 220 V: PSU Selection for Phone Farm Hardware",
    category: "Hardware & Selection",
    date: "2026-05-12",
    excerpt:
      "How voltage region affects PSU SKU, plug type, and facility planning for US, EU, and Southeast Asia deployments.",
    content: `Wrong PSU region causes rework at install. Declare destination voltage on RFQ.

**Common regions:**
- North America: 110–120 V circuits — PSU and plug matched on invoice
- EU / UK / most of Asia: 220–240 V — different PSU SKU and cord set
- Mixed facilities: quote per rack if you deploy globally from one purchase

**What we do not guess:**
We do not infer voltage from shipping country alone if you have a forwarder warehouse — state **install site** voltage.

**Converters:**
Buyer-supplied step-up/down for ad-hoc tests is not a substitute for correct PSU on production racks.

**Labeling:**
Cartons include PSU rating label photo on request for facility approval.

Add "Voltage region" in Contact RFQ — it maps to the same field sales uses on proforma.`,
  },
  {
    slug: "otg-vs-usb-phone-farm-connection",
    title: "OTG vs USB: Connection Modes for Phone Farms",
    category: "Hardware & Selection",
    date: "2026-05-10",
    excerpt:
      "When OTG Ethernet helps, when pure USB suffices, and how connection mode changes hub and cable BOM lines.",
    content: `Connection mode is a core RFQ field — it drives hub tier, cable kit, and stability profile.

**USB-only:**
- Control and data on USB tree to control PC
- Simplest for small farms and lab benches
- Bandwidth shared across nodes on same hub

**OTG / Ethernet offload:**
- Reduces USB congestion for large farms
- Adds router/switch lines to BOM
- Useful when many nodes push heavy traffic concurrently

**Hybrid:**
Some stacks USB for control, OTG for network path — layout documented on wiring diagram at quote.

**Change mid-project:**
Possible with spare hub and cable lines; may require re-burn-in after rewire.

State current and target connection mode on RFQ so sales does not assume USB-only by default.`,
  },
  {
    slug: "warranty-rma-export-phone-farm",
    title: "Warranty and RMA for Export Phone Farm Hardware",
    category: "Procurement & Shipping",
    date: "2026-05-08",
    excerpt:
      "Defect reporting, photo evidence, repair vs replacement, and what warranty terms typically cover on chassis exports.",
    content: `Export hardware warranty is invoice-based — terms confirmed on proforma, not generic web boilerplate alone.

**Report defects within:**
Contact within stated window after delivery (see Refund Policy) with photos, order number, and slot ID if applicable.

**Manufacturing defects:**
Chassis, PSU, fan tray, hub board — inspection then repair, replacement part, or credit per case.

**Not covered:**
Device end-of-life, improper voltage, physical damage after delivery, or unauthorized modification of wiring.

**RMA logistics:**
Return shipping for warranty claims coordinated case-by-case for overseas buyers — declare forwarder preference early.

**Spares strategy:**
Bulk buyers often add spare fan/PSU/cable lines on first order to avoid air freight on single-part RMA.

Ask for warranty paragraph on bulk proforma before payment — we align with Refund Policy page baseline.`,
  },
  {
    slug: "qa-lab-phone-farm-configuration",
    title: "QA Lab Phone Farm Configuration Guide",
    category: "Applications & Use Cases",
    date: "2026-05-05",
    excerpt:
      "Motherboard density, APK batch install, and audit-friendly burn-in records for app testing teams buying hardware.",
    content: `QA labs prioritize repeatable installs, stable USB, and traceable pre-ship checks over social-style account isolation.

**Hardware fit:**
- Motherboard boxes for headless APK and regression loops
- Phone boxes when camera, SIM, or sensor paths are in test scope
- Hub tier sized for parallel APK push, not idle monitoring only

**Workflow:**
1. Flash or install build via batch tool
2. Run automated test suite per node group
3. Log failures with slot ID — chassis labeling helps

**Burn-in paper trail:**
Request checklist sign-off for audit — note on RFQ for enterprise QA procurement.

**Scaling:**
Add identical chassis stacks for parallel CI lanes; keep hub/PSU SKU consistent for spare pooling.

See App Development & QA solution page; send test matrix (OS versions, node count) on Contact for BOM.`,
  },
  {
    slug: "ecommerce-seller-phone-farm-hardware",
    title: "E-Commerce Seller Device Farms: Hardware Planning",
    category: "Applications & Use Cases",
    date: "2026-05-02",
    excerpt:
      "Multi-store ops on real devices — chassis count, network kit, and quote fields for Amazon, Shopee, and cross-border seller teams.",
    content: `Seller teams use device farms for store ops, messaging, and listing workflows on **real hardware** they control — not shared virtual phones.

**Typical hardware pattern:**
- Phone boxes when mobile apps and SMS paths matter
- Per-store or per-region device groups on network plan
- Secondary chassis for seasonal scale-up

**Network:**
Stable IP plan per store group — coordinate with your proxy/mobile data vendor before hub quote.

**Ops:**
Batch control for app updates across store devices; plan maintenance windows for USB-heavy updates.

**Quote inputs:**
Store count, regions, Android/iPhone mix, and peak concurrent devices — not just "need 20 phones."

**Platform risk:**
Marketplace policies are your compliance scope — we deliver export-ready chassis and docs.

See Amazon & Shopee scenario and E-commerce solution pages; RFQ via Contact with store count and regions.`,
  },
  {
    slug: "lead-time-phone-farm-production-scheduling",
    title: "Lead Time and Production Scheduling for Phone Farm Orders",
    category: "Procurement & Shipping",
    date: "2026-04-28",
    excerpt:
      "Why lead times vary by SKU, what speeds samples, and how phased delivery works for large rack projects.",
    content: `Lead time is always **confirmed on quote** — catalog pages show planning ranges only.

**Usually faster:**
- Standard empty chassis from current stock rotation
- Single-box sample with catalog hub/PSU match

**Usually longer:**
- Custom slot count or cabinet drawing approval
- Phones/boards sourced on same proforma
- Large sea-crated rack with burn-in for every unit

**Phased delivery:**
Chassis batch one, devices batch two — common for room-scale; each phase gets its own proforma line and ETA.

**Holiday impact:**
Chinese New Year and Golden Week can shift Guangzhou workshop schedules — plan bulk orders accordingly.

**Expedite:**
Air freight and simplified BOM may shorten timeline; rush may skip optional burn-in by agreement.

Send target go-live date on RFQ — sales marks feasible or proposes phased plan on written reply.`,
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
  {
    slug: "best-phone-farm-box-supplier-2026",
    title: "Best Phone Farm Box Supplier in 2026 — What to Look For",
    category: "Procurement & Shipping",
    date: "2026-06-08",
    excerpt:
      "How to evaluate phone farm hardware manufacturers: BOM transparency, burn-in QC, MOQ, export packing, batch control scope, and Guangzhou supply chain experience.",
    content: `Buyers searching for the **best phone farm box supplier** in 2026 should evaluate hardware vendors on factors beyond catalog photos.

**Checklist for supplier evaluation**
1. **Written BOM before payment** — slot count, hub tier, PSU watts, fan kit, and cable list on proforma
2. **Factory burn-in** — loaded power-on under factory conditions before carton close
3. **MOQ flexibility** — sample orders at 1 unit for evaluation before bulk
4. **Export documentation** — commercial invoice weights, packing photos, and voltage plug matching destination
5. **Batch control scope** — what software setup is included vs optional remote service
6. **After-sales warranty** — RMA process and spare parts availability

**Why Guangzhou**
Guangzhou concentrates phone farm assembly, USB hub sourcing, and export logistics for overseas B2B buyers. Phones Farm Box has operated from Guangzhou since 2017.

**Phones Farm Box positioning**
We supply real-device chassis — not cloud phone subscriptions. Request a quote with device count, platform mix, and destination country.`,
  },
  {
    slug: "phone-farm-hardware-vs-cloud-emulator-2026",
    title: "Phone Farm Hardware vs Cloud Phone vs Emulator (2026 Guide)",
    category: "Applications & Use Cases",
    date: "2026-06-07",
    excerpt:
      "Full comparison of real-device phone farms, cloud phone SaaS, and Android emulators for TikTok, Instagram, and multi-account operations — security, cost, and scaling.",
    content: `Choosing infrastructure for **multi-account mobile operations** in 2026 comes down to three models.

**Real-device phone farm box**
- Physical smartphones or motherboard nodes in industrial chassis
- Hardware-level environment isolation per slot
- One-time cap-ex; stackable scaling
- Best for long-running TikTok, Instagram, and e-commerce device farms

**Cloud phone SaaS**
- Virtual Android on remote servers
- Fast setup, monthly per-device fees
- Best for short pilots without shipping logistics

**Android emulator**
- Software on PC — detectable by many platforms
- Low cost but high account risk at production scale

See our full comparison at /alternatives and the box-vs-cloud planning tool.`,
  },
  {
    slug: "antidetect-phone-farm-multi-account-hardware",
    title: "Antidetect Phone Farm Hardware — Device + Network Layers Explained",
    category: "Applications & Use Cases",
    date: "2026-06-06",
    excerpt:
      "Multi-account anti-detection on real hardware: physical device isolation, IP planning, proxy assignment, and batch control for TikTok and Instagram device farms.",
    content: `**Antidetect** multi-account operations rely on two layers: **device environment** and **network environment**.

**Device layer (hardware)**
Each account group runs on separate physical phones or motherboard nodes in a phone farm box. Real radios, sensors, and storage — not shared emulator fingerprints.

**Network layer**
Per-group IP planning with residential or mobile proxies, OTG Ethernet for bandwidth, and geo-consistent routing. Use our network IP planner tool before quote.

**Behavior layer**
Batch control software manages synchronized or individual operations — avoid identical timing patterns across accounts.

Phones Farm Box supplies the **device layer hardware** and deployment guides. Network proxy services are buyer-selected; we help plan architecture.`,
  },
  {
    slug: "guangzhou-phone-farm-manufacturer-guide",
    title: "Guangzhou Phone Farm Manufacturer — B2B Export Guide",
    category: "Procurement & Shipping",
    date: "2026-06-05",
    excerpt:
      "Why Guangzhou is the hub for phone farm box manufacturing, how export quotes work, air vs sea freight, and what overseas buyers should confirm before payment.",
    content: `**Guangzhou** is a primary export hub for phone farm hardware — chassis assembly, USB hub integration, PSU and cooling kits, and rack-scale cabinet projects.

**Typical export workflow**
1. RFQ with device count, platform mix, destination country, and voltage region
2. Written proforma with BOM, lead time, and freight option (air/sea)
3. USDT or agreed payment after proforma acceptance
4. Factory assembly, burn-in QC, export packing with photos
5. Tracking and after-sales scope per warranty terms

**What to declare in RFQ**
Android/iPhone mix, connection mode (USB/OTG/hybrid), empty chassis vs phones on quote, and documentation needs (datasheet, wiring diagram).

Phones Farm Box — Guangzhou supplier since 2017. MOQ from 1 unit.`,
  },
  {
    slug: "tiktok-multi-account-phone-farm-guide-2026",
    title: "TikTok Multi-Account Phone Farm — Hardware Setup Guide 2026",
    category: "Applications & Use Cases",
    date: "2026-06-04",
    excerpt:
      "Build a TikTok device farm with real phones: chassis sizing, network IP planning, batch control, cooling, and procurement checklist for agencies and creators.",
    content: `Running **multiple TikTok accounts** on real devices requires rackable hardware, planned networking, and batch control — not scattered desk phones.

**Hardware stack**
- Phone farm box or motherboard rack for node density
- Industrial USB hub sized to slot count
- PSU and cooling matched on quote
- Host PC with batch control software

**Network planning**
Assign IP routes per account group. Avoid shared datacenter IPs across unrelated accounts. See help article on network proxy configuration.

**Scaling**
Stack additional chassis as your TikTok matrix grows. Custom cabinets for room-scale deployments.

Phones Farm Box supplies TikTok-oriented hardware from Guangzhou — see /scenarios/tiktok for platform-specific notes.`,
  },
  {
    slug: "instagram-device-farm-hardware-2026",
    title: "Instagram Device Farm Hardware — Multi-Account Infrastructure 2026",
    category: "Applications & Use Cases",
    date: "2026-06-03",
    excerpt:
      "Instagram multi-account operations on physical devices: phone farm box layout, Reels workflow hardware, team sharing, and network isolation best practices.",
    content: `**Instagram device farms** for agencies and brands use real phones in centralized chassis for Reels publishing, comment management, and multi-account traffic funnels.

**Why physical hardware**
Instagram monitors device and network signals. Real phones in isolated slots with per-group IP planning reduce association risk vs emulators or shared environments.

**Team workflow**
Batch control dashboard lets operators switch between device windows, deploy APKs in bulk, and run synchronized or individual actions. Team sharing scopes device groups per staff member.

**Hardware procurement**
Quote slot count, iPhone vs Android mix, and connection mode. Phones Farm Box confirms BOM before payment — see /scenarios/instagram.`,
  },
  {
    slug: "phone-farm-vs-antidetect-browser-2026",
    title: "Phone Farm Hardware vs Antidetect Browser — 2026 Multi-Account Guide",
    category: "Applications & Use Cases",
    date: "2026-06-09",
    excerpt:
      "Compare physical phone farm boxes and antidetect browsers for multi-account operations — when to use mobile hardware vs web browser isolation for TikTok, Instagram, and e-commerce.",
    content: `Multi-account teams in 2026 often need **both mobile and web** isolation layers.

**Antidetect browsers** (AdsPower, GoLogin, Multilogin) isolate desktop browser fingerprints for web-based accounts — Facebook web, seller dashboards, ad managers.

**Phone farm hardware** runs native mobile apps on real Android/iPhone nodes — TikTok, Instagram Reels, WhatsApp, Telegram mobile clients.

**When to buy phone farm boxes**
- Your revenue depends on mobile app accounts
- You need radios, sensors, and authentic device paths
- Long-running ops where cap-ex beats monthly SaaS

Phones Farm Box supplies rackable mobile hardware from Guangzhou — pair with your chosen antidetect browser stack for web accounts.`,
  },
  {
    slug: "multi-account-three-layers-phone-farm",
    title: "Three Layers of Multi-Account Phone Farm Operations (Device, Network, Behavior)",
    category: "Applications & Use Cases",
    date: "2026-06-09",
    excerpt:
      "Device isolation, network IP planning, and behavior patterns — the three layers that keep TikTok and Instagram device farms stable at scale.",
    content: `Mature **multi-account operations** depend on three layers:

**1. Device layer** — separate physical phones or motherboard nodes per account group in a phone farm box. Real hardware beats emulators for platform trust.

**2. Network layer** — residential or mobile proxies, per-group IP binding, geo consistency. Use our network IP planner before quote.

**3. Behavior layer** — varied posting schedules, content differentiation, and batch control settings that avoid synchronized bot patterns.

Phones Farm Box owns layer 1 — chassis, PSU, hub, cooling, and setup. Layers 2–3 are configured per your ops playbook.`,
  },
  {
    slug: "vpn-vs-proxy-phone-farm-2026",
    title: "VPN vs Proxy for Phone Farms — Which to Use in 2026?",
    category: "Setup & Tutorials",
    date: "2026-06-08",
    excerpt:
      "VPN vs residential proxy vs mobile proxy for phone farm device groups — setup tips for TikTok, Instagram, and cross-border seller operations.",
    content: `**VPN** encrypts all device traffic through one tunnel — simple but shared IP across apps can link accounts on the same node.

**Proxy (HTTP/SOCKS5/residential/mobile)** binds specific routes per device group — standard for multi-account phone farms where each account group needs its own IP identity.

**Best practice for phone farms**
- Assign one proxy profile per account group on real hardware
- Avoid datacenter IPs for high-value social accounts
- Size router and OTG paths for your quoted node count

Phones Farm Box sells network equipment and deployment guides — proxy subscriptions are buyer-selected.`,
  },
  {
    slug: "best-phone-farm-hardware-2026-comparison",
    title: "Which Phone Farm Hardware Is Best for Multi-Account Marketing in 2026?",
    category: "Hardware & Selection",
    date: "2026-06-08",
    excerpt:
      "Compare phone farm box, motherboard rack, cloud phone SaaS, and emulator options for TikTok, Instagram, and e-commerce multi-account teams.",
    content: `Buyers asking **which phone farm solution is best in 2026** should match infrastructure to runtime length and account value.

**Phone farm box (real phones)** — agencies, creators, long-term TikTok/Instagram matrix.

**Motherboard rack box** — headless density, lower per-slot cost.

**Cloud phone SaaS** — short pilots, no shipping.

**Emulator** — casual testing only.

**Phones Farm Box** focuses on export-grade chassis with MOQ from 1, written BOM, burn-in QC, and stackable scaling. See /alternatives for full comparison table.`,
  },
  {
    slug: "pinterest-multi-account-phone-farm",
    title: "Pinterest Multi-Account Phone Farm — IP and Hardware Planning",
    category: "Applications & Use Cases",
    date: "2026-06-07",
    excerpt:
      "Manage multiple Pinterest accounts on real devices — Carrier ASN, geo-consistency, IP stability, and phone farm hardware for visual marketing teams.",
    content: `Pinterest monitors **network signals** — Carrier ASN, geo-consistency, and IP stability — alongside device environment.

**Hardware approach**
Run brand, regional, and test accounts on separate physical device groups in a phone farm box. Batch upload workflows via batch control software on real Android nodes.

**Network pairing**
Pair each device group with stable residential or mobile IPs — avoid rotating datacenter pools for long-lived seller accounts.

Phones Farm Box supplies chassis and network planning tools — see /blog/phone-farm-network-proxy-setup for architecture notes.`,
  },
  {
    slug: "tiktok-maximum-attempts-phone-farm-fix",
    title: "Fix TikTok Login Limits — Phone Farm Hardware and Network Tips",
    category: "Applications & Use Cases",
    date: "2026-06-07",
    excerpt:
      "TikTok 'Maximum number of attempts reached' — why login limits happen and how real-device phone farms with proper IP planning reduce restriction risk.",
    content: `TikTok's **"Maximum number of attempts reached"** error often follows unusual login patterns, shared IPs, or environment flags — not just wrong passwords.

**Hardware fixes**
- Run each account group on separate physical devices in a phone farm box
- Avoid emulator or shared virtual environments for production accounts
- Keep devices powered and cooled for stable 24/7 sessions

**Network fixes**
- Dedicated IP per account group — not one VPN for 50 accounts
- Match geo to account registration region
- Reduce rapid IP switching during login windows

Phones Farm Box supplies real-device infrastructure from Guangzhou — network proxy planning is covered in our help center.`,
  },
  {
    slug: "whatsapp-multi-account-phone-farm-hardware",
    title: "WhatsApp Multi-Account Management — Phone Farm Hardware Guide",
    category: "Applications & Use Cases",
    date: "2026-06-06",
    excerpt:
      "Run multiple WhatsApp accounts on real devices with phone farm boxes — registration stability, SMS verification, and batch control for business teams.",
    content: `**WhatsApp Business** and multi-number operations need stable physical devices — not emulators flagged by Meta.

**Phone farm setup for WhatsApp**
- One physical phone per WhatsApp account (or official dual-SIM models on quote)
- Batch control for monitoring and scripted workflows where permitted
- Network routes per account group

**Common issues**
SMS verification failures often trace to VoIP numbers or flagged device environments. Real phones in isolated chassis with consistent IPs improve stability.

See /scenarios/whatsapp for platform notes and request a quote with your target account count.`,
  },
  {
    slug: "facebook-multi-account-phone-farm-2026",
    title: "Facebook Multi-Account Device Farm — Hardware Infrastructure 2026",
    category: "Applications & Use Cases",
    date: "2026-06-06",
    excerpt:
      "Facebook and Meta app multi-account operations on real phone farm hardware — device isolation, Reels publishing, and network planning for agencies.",
    content: `**Facebook and Meta app** multi-account teams use phone farm boxes for mobile-native workflows — Reels, Groups, Marketplace — on real Android and iPhone hardware.

**Why hardware**
Meta apps expect mobile device signals. Physical nodes in industrial chassis with per-group network routes outperform emulators for production account matrices.

**Scaling**
Start with one chassis pilot (MOQ 1), validate burn-in and batch control, then stack boxes or move to custom cabinet quotes for 50+ nodes.

Phones Farm Box — /scenarios/facebook and /solutions/social-media-marketing.`,
  },
  {
    slug: "stable-account-environments-phone-farm",
    title: "Why Stable Device Environments Win in Multi-Account Phone Farms",
    category: "Box Knowledge",
    date: "2026-06-05",
    excerpt:
      "Shift from speed-only scaling to predictable device + network infrastructure — how phone farm hardware supports long-term TikTok and Instagram account growth.",
    content: `Teams that survived platform crackdowns invest in **environmental consistency** — same device, same IP profile, same behavior patterns over months.

**Phone farm hardware role**
- Rackable chassis with unified PSU and cooling — fewer random shutdowns
- Documented BOM and wiring — reproducible replacements
- Burn-in QC before export — fewer DOA slots

**Cloud and emulator contrast**
Virtual seats change underlying infrastructure; emulators rotate fingerprints. Owned hardware gives predictable baselines for account aging strategies.

Request a sample box from Phones Farm Box to benchmark stability before bulk rack quotes.`,
  },
  {
    slug: "cross-border-ecommerce-phone-farm-infrastructure",
    title: "Cross-Border E-Commerce Phone Farm Infrastructure — Amazon, Shopee, TikTok Shop",
    category: "Applications & Use Cases",
    date: "2026-06-05",
    excerpt:
      "Build seller device farms for Amazon, Shopee, and TikTok Shop — multi-store hardware, network segmentation, and Guangzhou procurement for overseas teams.",
    content: `**Cross-border sellers** running multiple storefronts need device + network infrastructure that survives platform reviews.

**Typical stack**
- Phone farm box per region or brand line
- Network router with segmented VLANs or per-group proxy binding
- Batch control for listing uploads and shop management apps

**Procurement**
Quote device count, Android/iPhone mix, voltage region, and destination country. Phones Farm Box returns written BOM with lead time before payment.

See /scenarios/amazon-shopee and /solutions/ecommerce-operations.`,
  },
  {
    slug: "phone-farm-box-bulk-order-wholesale-pricing",
    title: "Phone Farm Box Bulk Order & Wholesale Pricing Tiers Explained",
    category: "Procurement & Shipping",
    date: "2026-06-10",
    excerpt:
      "How phone farm box bulk orders, wholesale volume tiers, and phased delivery work — MOQ 1 samples vs 3+ box quotes from a Guangzhou hardware supplier.",
    content: `Buyers searching **phone farm wholesale** or **phone farm box bulk order** usually need clarity on MOQ, discount tiers, and how phased delivery fits rack projects.

**MOQ and samples**
- Standard catalog chassis: **MOQ 1** for sample evaluation
- List prices on the website are USD reference points — final amount on written proforma

**Volume tiers (typical)**
- **3+ boxes:** volume discount on chassis and accessory lines — exact percent on quote
- **10+ nodes / multi-box rooms:** project BOM with hub/PSU matched to device list
- **Enterprise rack / custom cabinet:** separate engineering contact and sea-freight planning

**Bulk order workflow**
1. RFQ with device count, models, voltage region, destination, and timeline
2. Written BOM + lead time on proforma
3. Payment via USDT (qualifying samples), bank T/T, Wise, or PayPal per invoice
4. Assembly, burn-in, export packing — packing list before shipment

**Phased delivery**
Large orders may ship chassis sea freight first and devices air later — each phase on its own proforma line and ETA.

**What wholesale pricing includes**
Chassis, hub tier, PSU, fans, cables, optional phones, remote setup, and freight — not cloud phone subscriptions or buyer proxy services.

Request a bulk quote via Contact or see /pricing for tier overview.`,
  },
  {
    slug: "mobile-device-lab-compatibility-testing-hardware",
    title: "Mobile Device Lab Hardware for App Compatibility Testing",
    category: "Applications & Use Cases",
    date: "2026-06-09",
    excerpt:
      "Build a mobile device lab on real Android hardware — motherboard density, APK batch install, and audit-friendly burn-in for app compatibility testing teams.",
    content: `**Mobile device lab** and **app compatibility testing** teams often outgrow ad-hoc phone piles. Phone farm box hardware packages real nodes with centralized power, cooling, and USB hub trees for repeatable QA.

**Why real hardware for compatibility testing**
- Test on physical radios, sensors, and GPU paths emulators miss
- Run parallel OS versions across labeled slots
- Audit-friendly burn-in records before production campaigns

**Hardware paths**
- **Motherboard box:** lowest cost per slot for headless APK and ADB workflows
- **Phone farm box:** SIM/camera paths when apps require full handset features
- **Android phone farm cluster:** turnkey BOM when you want one invoice

**Lab planning checklist**
- Target node count and OS version matrix
- Host PC spec (cores, RAM, USB controllers)
- Hub tier for parallel APK pushes
- Network: shared lab LAN vs isolated groups

**Procurement**
Send model list, node target, and compliance needs (burn-in checklist, packing photos) on RFQ. See QA Lab Phone Farm Configuration blog and /products/motherboard-box.`,
  },
  {
    slug: "ad-creative-qa-physical-device-lab",
    title: "Ad Creative QA on Physical Android Devices — Hardware Lab Setup",
    category: "Applications & Use Cases",
    date: "2026-06-08",
    excerpt:
      "Use a physical device lab to preview ad creatives, in-app placements, and screen formats on real Android phones — hardware planning for marketing QA teams.",
    content: `Marketing and growth teams sometimes search for **ad verification phone farm** when they need to **preview ad creatives on real devices** before spend goes live. Phones Farm Box supplies the **hardware layer** — not ad network accounts or placement guarantees.

**What a physical ad creative QA lab does**
- Mount real Android phones with consistent screen sizes and OS versions
- Batch-open apps or browsers to screenshot or record creative render paths
- Separate device groups when teams test multiple locales or app builds

**Recommended hardware**
- Phone farm box when camera/display fidelity matters
- Motherboard box when headless render capture via ADB is enough
- Network router bundle when each test group needs isolated LAN

**What we do not provide**
- Operating ad accounts, buying traffic, or platform outcome guarantees
- Bypassing ad platform policies — buyer compliance scope

**Quote fields**
Device count, target models, host software name, voltage region, and export destination. Useful for agencies running **multi-device workflow** QA before client handoff.`,
  },
  {
    slug: "buy-phone-farm-box-rfq-vs-usdt-sample",
    title: "Buy Phone Farm Box: RFQ vs USDT Sample Order — Which Path?",
    category: "Procurement & Shipping",
    date: "2026-06-07",
    excerpt:
      "Should you buy a phone farm box through RFQ or USDT sample checkout? When each B2B path fits — bulk, custom, and phone-included orders vs MOQ-1 catalog SKUs.",
    content: `**Buy phone farm box** can mean two different procurement paths on phonesfarmbox.com — both are B2B hardware, not instant retail checkout.

**Path 1 — Written quote (RFQ) — recommended for most buyers**
- Send quantity, models, voltage, connection mode, freight preference
- Receive BOM, lead time, and payment terms on proforma before assembly
- Required for bulk orders, phone-included builds, custom cabinets, and export packing photos pre-ship

**Path 2 — USDT sample checkout (optional)**
- MOQ-1 catalog SKUs when list price matches your need
- Pay TRC20, send tx hash + order number to sales — manual confirmation
- Best for repeat buyers or simple accessory orders (hub, fan kit, empty chassis)

**When to skip sample checkout**
- First-time rack project needing host PC sizing notes
- iPhone farms with model mix confirmation
- Any order where freight or voltage was not yet declared

See /how-to-order and /contact for RFQ form fields.`,
  },
  {
    slug: "phone-farm-equipment-checklist-bom",
    title: "Phone Farm Equipment Checklist — Hub, PSU, Cooling & Network BOM",
    category: "Hardware & Selection",
    date: "2026-06-06",
    excerpt:
      "Complete phone farm equipment list beyond the box — USB hub tier, PSU wattage, fan kit, host PC, and network gear sized from your node count.",
    content: `**Phone farm equipment** is more than the chassis. Use this checklist when building a BOM for RFQ or internal procurement.

**Core hardware**
- [ ] Phone farm box or motherboard box chassis (slot count on quote)
- [ ] Industrial USB hub tier — one uplink per box to host PC
- [ ] PSU module — wattage from node list + 110V/220V region
- [ ] Cooling fan kit — CFM target for ambient and node load
- [ ] Data cables and regional mains lead

**Host & software**
- [ ] Control PC — 8+ cores, 32GB+ RAM for large mirror farms
- [ ] PCIe USB 3.x cards when exceeding onboard ports
- [ ] Batch-control or ADB stack (buyer-owned unless on proforma)

**Optional network layer**
- [ ] Industrial router/switch for segmented device groups
- [ ] OTG Ethernet offload on large Android farms

**Documentation to request**
- [ ] Wiring diagram PC → hub → node
- [ ] Burn-in checklist (standard box orders)
- [ ] Packing list + invoice weights before export

Copy fields into /tools/bulk-quote-checklist or Contact RFQ. Accessory SKUs: /products/usb-hub, /products/power-supply-solution, /products/cooling-solution, /products/network-equipment.`,
  },
];

export const BLOG_CATEGORIES = [
  "Box Knowledge",
  "Hardware & Selection",
  "Applications & Use Cases",
  "Setup & Tutorials",
  "Procurement & Shipping",
] as const;

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(category: string) {
  return BLOG_POSTS.filter((p) => p.category === category);
}

export function getSortedBlogPosts() {
  return [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
}
