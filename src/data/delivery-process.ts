/** Delivery, fulfillment, warranty, and remote-setup copy — shared across pricing, contact, FAQ, Help. */

export const DELIVERY_FULFILLMENT_STEPS = [
  {
    step: "1",
    title: "Quote confirmation",
    detail: "You approve the written BOM, connection mode, voltage region, and lead time on proforma before any assembly slot is reserved.",
  },
  {
    step: "2",
    title: "BOM and invoice confirmation",
    detail: "Final line items, payment method, and shipping destination are locked. USDT payments are manually confirmed by sales after tx hash — not automatic on-chain verification.",
  },
  {
    step: "3",
    title: "Assembly and wiring",
    detail: "Chassis prep, hub/PSU install, and USB or OTG harness routing per your quoted configuration — slot map fixed before wiring starts.",
  },
  {
    step: "4",
    title: "Power and connection check",
    detail: "Slot-by-slot power-on and PC → hub → node data path verification before burn-in.",
  },
  {
    step: "5",
    title: "Burn-in and basic operation test",
    detail: "Loaded run duration depends on product class and order terms — checklist signed before packing when included on invoice.",
  },
  {
    step: "6",
    title: "Packing list confirmation",
    detail: "Accessory count matched to proforma. Empty-chassis orders clearly list no phones/devices unless quoted on BOM.",
  },
  {
    step: "7",
    title: "Packing photo and shipping size",
    detail: "Available on request before shipment when noted on RFQ — carton dimensions and gross weight provided after packing plan is confirmed.",
  },
  {
    step: "8",
    title: "Shipment and tracking",
    detail: "Air (courier) or sea freight per invoice. Commercial invoice weights and export docs included. Import duties are buyer responsibility.",
  },
  {
    step: "9",
    title: "Remote setup and after-sales",
    detail: "Optional remote session for host PC, wiring, and batch-control verification — scope on invoice. Hardware warranty and spare-parts support per proforma terms.",
  },
] as const;

export const PACKING_DOCUMENTATION_POINTS = [
  "Request packing photos before shipment on your RFQ or quote reply — carton exterior and foam layout when available for your build",
  "Packing list is confirmed against proforma before export packing closes",
  "Shipping size and weight provided after packing plan is confirmed — useful for freight booking",
  "Empty chassis shipments list frame, mounts, and accessories only — phones/devices not included unless on BOM",
  "Phone-included orders may note model list on packing list; IMEI or serial details only when available and agreed on quote",
  "Compare received accessories to packing list within 48 hours and report shipping damage with photos promptly",
] as const;

export const REMOTE_SETUP_INCLUDES = [
  "Verify host PC connectivity and admin access for screen-share session",
  "Check USB or OTG wiring paths and hub uplink to control PC",
  "Help with device authorization or USB debugging visibility where applicable",
  "Walk through batch-control or multi-device management workflow setup for your quoted stack",
  "Use cases: app testing labs, QA environments, social media team hardware rooms, Android or iPhone farm handoff",
] as const;

export const REMOTE_SETUP_EXCLUDES = [
  "Account farming, platform manipulation, or traffic guarantees",
  "Marketing outcome, TikTok performance, or social media account result guarantees",
  "Operating buyer-owned accounts, proxies, or third-party automation tools on your behalf",
  "Ongoing 24/7 NOC — scope is a quoted setup block unless extended support is on invoice",
] as const;

export const WARRANTY_AFTER_SALES_POINTS = [
  "Standard chassis and PSU: 12-month warranty against manufacturing defects unless otherwise stated on proforma",
  "DOA or shipping damage: report within 48 hours of delivery with photos of packaging and product",
  "Manufacturing defect claims: contact within 7 days with order details — repair, replacement parts, or case-by-case resolution after inspection",
  "Return shipping responsibility depends on issue type and terms on your invoice — not unconditional refund for all cases",
  "Spare parts, fan kits, PSU modules, and cables available by quote — match chassis family before ordering",
  "Phones and OEM network gear follow supplier pass-through warranty where applicable",
  "Remote setup covers wiring and control verification — not platform or account performance guarantees",
] as const;

export const POST_PAYMENT_EXPECTATIONS = [
  "After payment is confirmed, your order enters the assembly queue per lead time on proforma.",
  "We confirm packing list before shipment; request packing photo or shipping size on RFQ if your team needs them pre-ship.",
  "Tracking shared when courier or freight forwarder picks up — sea freight may have longer handoff windows.",
  "Remote setup can be scheduled after delivery notice when included or purchased as add-on.",
  "Report shipping damage within 48 hours; warranty and spare-parts cases handled per invoice terms.",
] as const;

/** Sales follow-up hints for Admin — display only, does not modify message. */
export const ADMIN_SALES_FOLLOW_UP = [
  { key: "destination", label: "Confirm destination country", field: "country" as const },
  { key: "voltage", label: "Confirm voltage region (110V / 220V / 220–240V)", field: "voltageRegion" as const },
  { key: "connection", label: "Confirm USB / OTG / hybrid", field: "connectionMode" as const },
  { key: "chassis", label: "Confirm empty chassis vs phone-included", field: "chassisConfig" as const },
  { key: "docs", label: "Ask if datasheet / packing photo / shipping size required", field: "documentationRequested" as const },
  { key: "payment", label: "Confirm payment preference", field: "paymentPreference" as const },
  { key: "remote", label: "Confirm whether remote setup is required", field: "remoteSetup" as const },
] as const;
