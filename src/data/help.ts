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
- Account farming, platform manipulation, or traffic guarantees
- Marketing outcome, TikTok performance, or social media account result guarantees
- Operating buyer-owned accounts, proxies, or third-party bots on your behalf
- 24/7 ongoing NOC unless extended support is on invoice

Scope is tied to device count and session length on your quote. Request remote setup on your RFQ if needed before shipment scheduling.`,
  },
];

export function getHelpArticle(slug: string) {
  return HELP_ARTICLES.find((a) => a.slug === slug);
}
