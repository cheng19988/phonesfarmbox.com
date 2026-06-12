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

Contact support via WhatsApp or Telegram — see our Contact page.`,
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
  {
    slug: "usb-vs-otg-connection-selection",
    title: "USB vs OTG Connection Selection",
    category: "Hardware Setup",
    summary: "How to choose USB, OTG, or hybrid wiring for your phone farm chassis — confirmed during quotation.",
    content: `Phones Farm Box confirms connection mode on your written quote — we do not assume every ROM supports every path.

**USB mode**
- Standard wired link from chassis hub to host PC
- Suitable for official Android ROM paths with USB debugging and typical ADB batch control
- Common for app testing, QA labs, and social media teams running host-side multi-device management

**OTG mode**
- Used when your quoted ROM or control path requires OTG-style wiring or Ethernet offload
- May need router on the same LAN as the host — topology confirmed on wiring diagram

**Hybrid mode**
- Confirmed during quotation when you combine different phone models, ROM paths, or host workflows
- We map which slots use USB vs OTG before assembly — not a default catalog setting

**What to send on inquiry**
- Target phone or board models (or ask us to recommend at quote)
- ROM path if known (official vs custom)
- Host PC OS and control software plans
- Destination country for plug and PSU standard

Request a quote via the contact form — connection mode is locked on proforma before payment.`,
  },
  {
    slug: "packing-list-verification",
    title: "Packing List Verification Before Shipment",
    category: "Orders & Payment",
    summary: "Review chassis, cabling, PSU, and accessory counts against your BOM before export packing closes.",
    content: `Every Phones Farm Box shipment includes a packing list matched to your proforma invoice.

**Typical line items (vary by quote)**
- Chassis or rack frame
- USB/OTG wiring kit per connection mode on BOM
- PSU module and regional plug standard
- Cooling kit (fan count confirmed at quote)
- Data cables and mains lead
- Batch control software access or setup notes (per order terms)

**Empty chassis vs phone-included**
- Empty chassis orders list frame, mounts, fans/grills, and accessories only — no phones or boards unless on BOM
- Phone-included orders list device line items separately; IMEI or serial notes only when available and agreed on quote

**Before shipment**
- Request packing list review when placing bulk orders
- Ask for packing photos (carton exterior and foam layout) before shipment if procurement requires them
- Shipping weight and carton dimensions provided after packing plan is confirmed — useful for freight booking

**On receipt**
- Compare accessory count to packing list within 48 hours
- Report shipping damage with photos of packaging and product within 48 hours
- Keep burn-in report copy if included on sample orders

Datasheet, packing photo, and shipping size requests can be made on your quote inquiry — no account required.`,
  },
  {
    slug: "power-voltage-export-orders",
    title: "Power and Voltage Confirmation for Export Orders",
    category: "Hardware Setup",
    summary: "110V, 220V, and 220–240V options — PSU sizing and plug standards confirmed before quote.",
    content: `Phones Farm Box sizes PSU and mains cabling from your node list — wattage is confirmed on BOM, not fixed on product pages.

**Regional power**
- 110V, 220V, or 220–240V option confirmed before quote
- Final plug standard depends on destination country and chassis configuration
- Share shipping country on every inquiry

**Sizing process**
- Send target device count and models (or ask for recommendation at quote)
- We calculate PSU tier with headroom for your quoted layout
- Facilities teams on large projects may request an electrical load note — available on project SKUs

**iPhone clusters**
- Battery-powered phones vs chassis power-feed cable is a procurement choice on BOM
- Power-feed routing is safer for fixed rack installs; battery paths need monitoring on long runs

**Accessories**
- PSU modules, fan kits, and hub tiers are separate catalog SKUs or line items on turnkey quotes
- Replacement PSU harness must match chassis family — confirm generation before ordering spares

Use Planning Tools or contact sales with your node list for a written quote before payment.`,
  },
  {
    slug: "how-to-request-phone-farm-hardware-quote",
    title: "How to Request a Phone Farm Hardware Quote",
    category: "Orders & Payment",
    summary: "RFQ checklist for B2B buyers — what to send before we return a written BOM and lead time.",
    content: `Phones Farm Box is a quote-based B2B hardware supplier. Assembly starts only after you approve a written proforma.

**Step 1 — Choose your starting SKU**
Browse the catalog: phone farm box, motherboard rack, empty chassis, iPhone farm cluster, or accessories. You do not need a final BOM to open an inquiry.

**Step 2 — Submit an RFQ**
Use the contact form or WhatsApp with:
- Target quantity and shipping destination
- Connection mode: USB, OTG, hybrid, or not sure
- Voltage region: 110V, 220V, 220–240V, or not sure
- Empty chassis vs phone-included vs BYO devices
- Target phone or board models (or ask for recommendation at quote)
- Use case: app testing, QA lab, social media team ops, multi-device management, etc.
- Payment preference and documentation needs (datasheet, packing photo, shipping size)

**Step 3 — Configuration review**
Sales confirms chassis layout, hub/PSU tier, and wiring path. Missing details may trigger a follow-up before quoting.

**Step 4 — Written quote**
You receive a BOM, lead time confirmed on quote, packing list outline, freight estimate, and accepted payment methods. Phone-included and iPhone farm orders typically need longer lead time after model review.

**Step 5 — Payment & production**
USDT (TRC20) is manually confirmed by sales after tx hash. Bank transfer, Wise, or PayPal may be offered on invoice. Wallet details are sent in the written quote only.

No platform outcome guarantees — we supply hardware and optional remote setup support.`,
  },
  {
    slug: "what-is-included-in-written-quote",
    title: "What Is Included in a Written Quote",
    category: "Orders & Payment",
    summary: "Line items, lead time, packing, freight, and payment terms on a Phones Farm Box proforma.",
    content: `A written quote (proforma invoice) is the contract baseline before assembly and payment.

**Typically included**
- SKU line items: chassis, hub tier, PSU, cooling, cabling, optional devices
- Connection mode and voltage region confirmed for your destination
- Empty vs phone-included configuration with device list locked before assembly
- Lead time confirmed on quote — longer for phone-included, iPhone farm, or custom cabinet
- Packing list outline; packing photo or shipping size available on request
- Air or sea freight estimate (import duties excluded)
- Payment options: USDT TRC20, bank transfer, Wise, PayPal where offered
- Remote setup scope if requested
- Warranty and after-sales terms

**Not fixed on product pages**
- Slot count, wattage, fan count, and hub ports are sized from your BOM
- Prices are USD starting points until configuration is confirmed

**After you approve**
Assembly, wiring, burn-in, packing list sign-off, and shipment follow the process on your invoice. Request changes before payment — post-approval changes may affect lead time.

See the pricing page for tier overview and quote factors.`,
  },
  {
    slug: "usdt-payment-confirmation-hardware-orders",
    title: "USDT Payment Confirmation for Hardware Orders",
    category: "Orders & Payment",
    summary: "How USDT TRC20 payments work — manual sales confirmation, not automatic on-chain verification.",
    content: `Phones Farm Box accepts USDT on Tron TRC20 for sample and small hardware orders when offered on your written quote.

**How it works**
1. Receive written quote or order confirmation with USD amount and payment instructions
2. Send USDT to the wallet address provided in the quote or sales message only — not from public product pages
3. Reply with your order number and transaction hash via email, WhatsApp, or Telegram
4. Sales manually confirms receipt — automatic on-chain verification is not active

**Important**
- Minimum order rules and expiry windows are stated on your invoice
- Do not send USDT before approving the BOM on quote
- Bulk and project orders often use bank transfer, Wise, or PayPal instead

**After confirmation**
Production slot is scheduled per lead time on your quote. Packing list is confirmed before shipment; packing photos available on request.

For RFQ and non-USDT payment options, use the contact form — registration is only required for placing USDT sample orders online.`,
  },
  {
    slug: "delivery-process-phone-farm-hardware",
    title: "Delivery Process for Phone Farm Hardware Orders",
    category: "Orders & Payment",
    summary: "From quote approval through assembly, QC, packing, shipment, and optional remote setup.",
    content: `After you approve a written quote and payment is confirmed, Phones Farm Box follows a standard fulfillment path — timing varies by configuration and lead time on your proforma.

**1. Quote and BOM lock**
Configuration, connection mode, voltage region, and line items fixed on proforma.

**2. Invoice and payment**
USDT (manually confirmed by sales), bank transfer, Wise, or PayPal per invoice. Wallet details in quote or sales message only.

**3. Assembly and wiring**
Chassis prep, hub/PSU install, USB or OTG harness per slot map.

**4. Power and connection check**
Per-slot power-on and PC → hub → node path verification.

**5. Burn-in and operation test**
Duration per product class and order terms; checklist when included on invoice.

**6. Packing list confirmation**
Accessory count matched to proforma. Empty chassis clearly excludes phones unless on BOM.

**7. Packing photo and shipping size**
On request before shipment — dimensions and weight after packing plan is confirmed.

**8. Shipment**
Courier or sea freight with tracking. Import duties are buyer responsibility.

**9. Remote setup and after-sales**
Optional session for host PC and batch-control handoff. Warranty and spare parts per proforma.

No guarantees on platform account results or marketing performance — we deliver hardware and documented support scope.`,
  },
  {
    slug: "warranty-after-sales-phone-farm-hardware",
    title: "Warranty and After-Sales Support for Phone Farm Hardware",
    category: "Orders & Payment",
    summary: "12-month chassis warranty, DOA handling, spare parts, and support boundaries.",
    content: `Phones Farm Box provides after-sales support for B2B hardware buyers — exact terms are on your proforma invoice.

**Standard warranty**
- Chassis and PSU: typically 12 months against manufacturing defects
- Phones and OEM network gear: supplier pass-through where applicable
- Misuse, unauthorized modification, and normal wear excluded

**DOA and shipping damage**
- Report within 48 hours of delivery with photos of carton and product
- We coordinate inspection and replacement parts or shipment when validated

**Manufacturing defects**
- Contact within 7 days with order details and photos
- Repair, replacement parts, or case-by-case resolution after inspection — not automatic full refund for all cases

**Return shipping**
- Responsibility depends on issue type and invoice terms
- Custom or deployed hardware may require buyer-paid return freight

**Spare parts**
- Fan kits, PSU modules, cables, and harnesses quoted by chassis family
- Confirm generation before ordering replacements

**Remote setup re-sessions**
- One follow-up within stated window on service SKUs when scope unchanged — see invoice

We do not guarantee TikTok, social media, or app platform outcomes — hardware warranty is separate from buyer workflow results.`,
  },
  {
    slug: "remote-setup-support-scope",
    title: "Remote Setup Support Scope",
    category: "Remote Control & Software",
    summary: "What remote setup covers for Android and iPhone farms — and what it does not.",
    content: `Remote setup is an optional add-on or service SKU for buyers who want handoff help after hardware delivery.

**Buyer should prepare**
- Hardware powered and cabled
- Host PC with admin access and stable internet for screen share
- Target phone or board model list
- Access credentials for your own control tools and batch software

**Remote setup includes**
- Verify USB or OTG wiring and hub uplink to host PC
- Check device authorization or USB debugging visibility where applicable
- Walk through batch-control or multi-device management setup for quoted stack
- Typical use cases: app testing labs, QA environments, social media team hardware rooms, Android or iPhone farm first boot

**Remote setup does not include**
- Operating buyer accounts, platform manipulation, or traffic guarantees
- Marketing outcome, TikTok performance, or social media account result guarantees
- Operating buyer-owned accounts, proxies, or third-party bots on your behalf
- 24/7 ongoing NOC unless extended support is on invoice

Scope is tied to device count and session length on your quote. Request remote setup on your RFQ if needed before shipment scheduling.`,
  },
  {
    slug: "batch-control-software-overview",
    title: "Batch Control Software Overview for Phone Farms",
    category: "Remote Control & Software",
    summary: "How host PC software connects to real devices through USB hubs — selection criteria for Android and iPhone farms.",
    content: `Batch control software is the layer between your host PC and physical devices in a phone farm box. Hardware supplies USB paths; software supplies mirroring, group sync, and APK deployment.

**Core functions:**
- Device dashboard listing all nodes on a hub tree
- Screen mirror or headless control per slot
- Group creation for synchronized actions
- Bulk APK install and file push
- Optional script or ADB automation hooks

**Android farms:**
USB debugging authorization must remain stable. Motherboard boxes may need temporary display for re-auth if debugging is revoked.

**iPhone farms:**
Control stack depends on quoted model mix and host OS — confirm on datasheet before purchase.

**Selection criteria:**
- Supported node count vs your hub tier
- Concurrent mirror load on host CPU/RAM
- Group sync latency under your workflow
- Export/logging for QA teams

Phones Farm Box configures hardware for your chosen stack during setup or remote configuration services — we do not resell third-party software licenses unless on proforma.`,
  },
  {
    slug: "synchronized-device-operations-guide",
    title: "Synchronized Multi-Device Operations",
    category: "Device Operation Workflow",
    summary: "Operation sync across device groups — hardware and host requirements for reliable batch gestures.",
    content: `Synchronized control runs the same action across a selected device group — common in content ops and QA smoke tests.

**Hardware requirements:**
- Hub tier sized for concurrent USB traffic, not idle monitoring only
- Stable PSU without voltage sag during simultaneous wake
- Adequate cooling — thermal throttle breaks sync timing

**Host PC requirements:**
- CPU and RAM headroom for N mirrors or N headless sessions
- Wired Ethernet for host; avoid Wi‑Fi for large sync jobs
- Label groups matching physical slot IDs on chassis

**Best practices:**
- Start with small groups (3–5 nodes) before full-box sync
- Separate heavy APK pushes from live sync sessions
- Monitor USB disconnect counters in dashboard logs

**Limits:**
Sync speed and max group size depend on quoted layout — not a fixed universal number. Request capacity review when scaling past first chassis.`,
  },
  {
    slug: "team-device-sharing-setup",
    title: "Team Device Sharing on Phone Farm Hardware",
    category: "Device Operation Workflow",
    summary: "Share device clusters among operators — roles, groups, and hardware labeling for agencies.",
    content: `Team sharing maps physical device groups to operators or client projects on your batch-control platform.

**Hardware foundation:**
- One rack may serve multiple clients with separate hub groups or chassis stacks
- Label slots and uplink ports to match software groups
- Network routes per client group when isolation is required

**Workflow setup:**
1. Define group per client or campaign on host PC
2. Assign operator accounts in software (buyer-managed)
3. Document which chassis stack maps to which group
4. Restrict USB maintenance windows to avoid cross-group downtime

**Security:**
Physical access to the rack remains buyer responsibility. Use OS login and software roles; do not share admin credentials broadly.

Enterprise deployments can quote dedicated cabinet segmentation and documentation for multi-team rooms.`,
  },
  {
    slug: "device-profile-reset-workflow",
    title: "Device Environment Refresh Workflow",
    category: "Device Operation Workflow",
    summary: "Refresh app data or ROM state on physical hardware between QA cycles or campaign handoffs.",
    content: `Device environment refresh clears app data or ROM state on a physical node — the hardware equivalent of returning a slot to a clean baseline.

**When teams use it:**
- QA labs rotating test matrices on the same hardware pool
- Agencies handing devices between client projects
- ROM paths that support factory reset without full re-cabling

**Steps (typical):**
1. Export any logs or assets you need from the slot
2. Run factory reset or ROM refresh per your quoted stack
3. Re-authorize USB debugging or device trust if required
4. Re-bind network routes or proxy groups for the next workflow
5. Label the slot in batch-control software

**Hardware notes:**
Stable USB during refresh; adequate cooling if running parallel refreshes across groups.

Network IP or proxy binding is buyer-managed — refresh the device layer first, then update routes in your proxy or router plan.

**Caution:**
We document hardware workflows only — platform terms of service are buyer compliance scope.`,
  },
  {
    slug: "bulk-apk-install-guide",
    title: "Bulk APK Installation Guide",
    category: "Device Operation Workflow",
    summary: "Push apps to many real devices — USB bandwidth, hub tier, and QA validation tips.",
    content: `Bulk APK deployment installs the same application package across a device group — standard for QA labs and ops teams prepping farms.

**Prerequisites:**
- USB debugging enabled on Android nodes (or equivalent path on quoted iPhone stack)
- Hub tier with enough bandwidth for parallel transfers
- Host storage space for APK cache

**Process outline:**
1. Load APK into batch-control tool
2. Select target group matching labeled slots
3. Deploy sequentially or parallel per tool capability
4. Verify version code on sample slots before full rollout

**Performance tips:**
- Avoid simultaneous bulk APK and heavy screen mirror
- Use OTG Ethernet offload on large farms to reduce USB congestion
- Schedule large pushes during maintenance windows

See also Bulk APK Deployment feature page and USB hub sizing blog article.`,
  },
  {
    slug: "host-pc-requirements-phone-farm",
    title: "Host PC Requirements for Phone Farm Control",
    category: "Hardware Setup",
    summary: "CPU, RAM, USB controllers, and OS notes for managing dozens of real devices from one workstation.",
    content: `The host PC is the control brain of a phone farm — underspec hosts cause mirror lag, sync failures, and USB timeouts.

**Baseline planning (adjust on quote):**
- 8–16+ physical CPU cores for 20–40 mirrored Android nodes
- 32–64 GB RAM for large mirror farms
- SSD for OS and APK cache
- Dedicated USB 3.x controller cards when exceeding onboard port count

**USB topology:**
- One uplink per hub tree; avoid daisy-chaining consumer hubs
- Powered industrial hubs on quoted BOM
- Separate controllers for iPhone and Android stacks when mixed

**Network:**
- Wired LAN for host; stable upload if remote support sessions run
- Router sized for concurrent device groups

**OS:**
Windows common for batch-control tools; Linux paths for ADB-heavy QA — confirm compatibility with your software before hardware PO.

Send target node count and software name on RFQ for host sizing notes on proforma.

See also the help article "How Many Phone Farm Boxes Can One PC Control?" and the Buyer Specs page at /buyer-specs for the full procurement index.`,
  },
  {
    slug: "phone-farm-pricing-fees-explained",
    title: "Phone Farm Hardware Pricing and Fees Explained",
    category: "Orders & Payment",
    summary: "List prices, quote tiers, freight, services, and payment methods — no hidden subscription on hardware SKUs.",
    content: `Phones Farm Box uses **quote-based hardware pricing** — not per-device SaaS seats.

**Catalog list price:**
USD reference on product pages for standard SKUs. Final amount confirmed on written proforma with BOM lines.

**What affects quoted total:**
- Chassis generation and slot count
- Hub tier, PSU, fan kit, cables
- Phones or boards on quote vs empty chassis
- Services: setup, remote config, burn-in, maintenance
- Freight: air vs sea, crated vs carton
- Voltage region and plug type

**Payment methods:**
- USDT TRC20 for qualifying online orders (manual confirmation)
- Bank T/T, Wise, PayPal on bulk invoice

**No recurring platform fee:**
You own hardware after purchase. Software subscriptions are third-party unless listed on your invoice.

**Volume tiers:**
See pricing page for MOQ 1 / 3+ / 10+ / enterprise overview — exact discounts on quote.

**Import duties:**
Buyer responsibility unless DDP stated on proforma.`,
  },
  {
    slug: "network-ip-planner-guide",
    title: "Network IP Planner for Multi-Account Phone Farms",
    category: "Network Configuration",
    summary: "Plan IP ranges, proxy binding, and router sizing — checklist before locking hub and network BOM.",
    content: `Multi-account operations often require one IP or mobile route per device group. Plan network before final hub quote.

**Step 1 — Grouping model**
List how many accounts share an IP vs strict one-to-one. Social ops often want isolation; QA labs may share lab LAN.

**Step 2 — IP source**
- Residential or mobile proxy per group
- Dedicated mobile data modem per group
- Corporate VLAN segmentation for enterprise rooms

**Step 3 — Router sizing**
Concurrent connections = active device groups + headroom. Industrial router SKU confirmed on quote.

**Step 4 — OTG offload**
On Android motherboard farms, OTG Ethernet reduces USB load — note on RFQ if using hybrid topology.

**Step 5 — Failover**
Document backup route for long campaigns — hardware stays up; route swap is software/proxy layer.

**Step 6 — Compliance**
Buyer owns platform policy risk — we supply routers and cabling on BOM only.

Use the Network IP Planner tool under Planning Tools for a printable checklist, then attach results to Contact RFQ.`,
  },
  {
    slug: "application-management-phone-farm",
    title: "Application Management on Phone Farms",
    category: "Device Operation Workflow",
    summary: "Bulk install, launch, uninstall, and update apps across real device groups.",
    content: `Application management covers lifecycle of apps on physical nodes — install, open, close, uninstall, and version updates at scale.

**Capabilities (via batch-control stack):**
- Bulk install APK or enterprise builds
- Launch app on group for warmup or testing
- Uninstall to reclaim storage on headless nodes
- Version audit per slot for QA compliance

**Hardware dependencies:**
Stable USB during large APK push; adequate storage per node; cooling during parallel installs.

**iPhone note:**
App deployment paths depend on quoted control tooling — not identical to Android APK flow.

**Use cases:**
- QA regression on multiple OS versions
- Pre-loading client apps on agency devices
- Removing deprecated apps between campaigns

Combine with Bulk APK Deployment feature page and bulk APK install help guide.`,
  },
  {
    slug: "one-pc-how-many-phone-farm-boxes",
    title: "How Many Phone Farm Boxes Can One PC Control?",
    category: "Hardware Setup",
    summary:
      "Planning guide: boxes per control PC, hub uplinks, mirrored node limits, and when to add a second host — reference ranges; confirm on quote.",
    content: `Buyers often ask **“one PC, how many boxes?”** before sizing a rack. The honest answer depends on **nodes per box**, **control software** (mirror vs ADB-only), and **USB topology** — not box count alone.

**Quick reference (Android, adjust on quote):**
- **Screen mirroring / batch-control with live preview:** 1 PC per **1–3** standard Phone Farm Boxes is typical.
- **ADB-heavy / headless motherboard nodes, light mirroring:** 1 PC may handle **4–6** boxes with **PCIe USB 3.x controller cards** and strict one-uplink-per-box wiring.
- **Node budget:** plan **~20–40 mirrored Android nodes** per well-specced host (8–16+ cores, 32–64 GB RAM) before adding a second PC — even if that spans multiple boxes.

**Why “one uplink per box” matters**
Each chassis has an internal industrial hub tree. The host PC should connect **one dedicated USB3 port per box uplink**. Do not daisy-chain consumer hubs on the host side — that is the most common cause of disconnect storms when scaling from one box to three.

**What increases PC count sooner**
- Live screen mirror on every slot during production hours
- Heavy video encode, OCR, or RPA on the same host
- iPhone stacks (separate host tooling and controllers — often **1 PC per iPhone box** to start)
- Mixed Android + iPhone in one room (separate USB controllers recommended)

**What to send on RFQ**
- Number of boxes and **nodes per box**
- Phone or board model list
- Control software name (batch-control, scrcpy-style mirror, custom ADB scripts)
- Whether you need synchronized mirror vs headless automation only

We return a **host sizing note on proforma** with recommended PC spec and uplink map. See also Host PC Requirements and the USB Port Requirement Calculator under Planning Tools.

**Related buyer question:** 一台电脑控制多少盒 — same answer; box count follows node and mirror load.`,
  },
  {
    slug: "rackmount-2u-phone-farm-buyer-guide",
    title: "2U Rackmount Phone Farm Buyer Guide",
    category: "Beginner's Guide",
    summary:
      "When buyers search for 2U phone farm rack or rackmount phone farm hardware — how it maps to custom cabinets, stacked chassis, and quote fields.",
    content: `Buyers often ask for a **2U phone farm rack** or **rackmount phone farm** when planning a data-center-style or office rack room. Phones Farm Box supplies **stackable phone farm chassis** and **custom rackmount / floor-standing cabinets** — exact U height and tray layout are confirmed on engineering drawing, not one universal 2U SKU.

**What “2U rackmount phone farm” usually means**
- Rack-form factor with defined height (e.g. 2U, 4U, or full cabinet) and front/rear cable management
- Unified PDU or PSU planning for the rack
- Multiple device trays or stacked standard boxes inside a cabinet frame
- Facilities sign-off on weight, airflow, and circuit load

**How we quote rackmount projects**
1. Send rack room photo or target **node count** and **phone/board model list**
2. Choose **stacked standard Phone Farm Boxes** vs **custom cabinet** line item
3. Confirm **110V / 220V / 220–240V** region and sea vs air freight
4. Receive **BOM + layout diagram + load note** on proforma before payment

**2U vs standard chassis**
- A single catalog Phone Farm Box is a **stackable chassis**, not always marketed as “2U” — U height depends on slot count and phone height on your quote
- **Custom Cabinet** SKU covers enterprise rackmount and floor-standing enclosures with structured cable management — typical for 50+ node rooms
- **Motherboard Box** paths optimize density for headless Android QA labs where rack height per node is lower

**Included in rack quotes (typical)**
- Tray or stack layout drawing
- PDU / PSU planning range
- Fan CFM class and hub tier
- Export crated sea freight option for heavy racks

**Send on RFQ:** “rackmount” or “2U” target, facility rack standard if known, node count, and whether phones or boards are buyer-supplied. See also Rack and Cabinet Planning blog article and Custom Cabinet product page.`,
  },
  {
    slug: "mobile-device-lab-setup-phone-farm-hardware",
    title: "Mobile Device Lab Setup — Real Phone Farm Hardware",
    category: "Hardware Setup",
    summary:
      "Build a mobile device lab on real phone farm box hardware — device lab management for app compatibility testing, parallel Android/iOS nodes, and QA burn-in.",
    content: `Teams searching **device lab management**, **mobile testing**, or a **real device testing platform** on owned hardware often outgrow desk clutter. A **mobile device lab** on **phone farm box** infrastructure centralizes power, cooling, and USB hub trees for repeatable QA.

**Why real-device labs (vs emulator-only)**
- Radios, sensors, GPU, and camera paths on physical nodes
- Parallel OS/version matrix across labeled slots
- Audit-friendly burn-in before production campaigns

**Hardware stack**
- **Motherboard box** — lowest cost per slot for headless APK / ADB loops
- **Phone farm box** — SIM, camera, and full-handset features when apps require them
- **Industrial USB hub tier** — plan **10 / 16 / 20+ port** hub modules by node count (exact tier on BOM)
- **OTG Ethernet** on large Android farms to offload USB bandwidth
- **Network router/switch** when lab IT requires segmented VLANs per group

**Control multiple devices**
One host PC per hub uplink tree — batch control or test runners (Appium, UIAutomator, buyer scripts) operate across **multiple devices in parallel**. See Host PC requirements and one-PC-how-many-boxes help articles.

**Lab procurement (quote-first)**
1. Send node count, model list, and compliance needs (burn-in checklist, packing photos)
2. Receive wiring diagram + proforma BOM
3. Assembly, QC, worldwide air or sea export from Guangzhou

Related: [Mobile Device Lab blog](/blog/mobile-device-lab-compatibility-testing-hardware/), [App Development & QA solution](/solutions/app-development-qa/), [Hardware Selection 2026](/blog/phone-farm-box-hardware-selection-2026/).`,
  },
];

export function getHelpArticle(slug: string) {
  return HELP_ARTICLES.find((a) => a.slug === slug);
}
