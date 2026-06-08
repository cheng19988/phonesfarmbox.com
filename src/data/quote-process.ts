/** Shared quote-first B2B conversion copy — used on pricing, contact, home, and product CTAs. */

export const QUOTE_PROCESS_STEPS = [
  {
    step: "1",
    title: "Submit your RFQ",
    detail:
      "Share target product or SKU, device quantity, shipping destination, connection mode (USB / OTG / hybrid), voltage region, and use case via the contact form or WhatsApp.",
  },
  {
    step: "2",
    title: "We confirm configuration",
    detail:
      "Sales reviews phone or board models, chassis layout, hub/PSU tier, and USB or OTG workflow. Missing details may trigger a follow-up before quoting.",
  },
  {
    step: "3",
    title: "Written quote on proforma",
    detail:
      "You receive a BOM with line items, lead time confirmed on quote, packing list outline, freight method, and accepted payment options — assembly starts only after you approve.",
  },
  {
    step: "4",
    title: "Confirm payment & invoice",
    detail:
      "Choose USDT TRC20 (manually confirmed by sales), bank transfer, Wise, or PayPal where offered on your invoice. Wallet address and payment instructions are provided in the written quote or sales confirmation only.",
  },
  {
    step: "5",
    title: "Assembly, test & packing photos",
    detail:
      "Chassis wiring, burn-in, and QC run per product class. Packing list sign-off; packing photos or datasheet available on request before shipment when noted on your RFQ.",
  },
  {
    step: "6",
    title: "Shipment & after-sales support",
    detail:
      "Air or sea export with tracking. Remote setup for batch control or multi-device management available as add-on — scope tied to quoted node count. Warranty terms on proforma.",
  },
] as const;

/** @deprecated alias — homepage imports this name */
export const QUOTE_PROCESS = QUOTE_PROCESS_STEPS;

export const WRITTEN_QUOTE_INCLUDES = [
  "SKU line items: chassis, hub tier, PSU, cooling, cabling, and optional devices",
  "Connection mode (USB / OTG / hybrid) and voltage region (110V / 220V / 220–240V)",
  "Empty chassis vs phone-included or BYO mount — device list locked before assembly",
  "Lead time confirmed on quote (longer for phone-included, iPhone farm, or custom cabinet)",
  "Packing list outline and optional packing photo / shipping size on request",
  "Freight method estimate (air / sea) — import duties excluded",
  "Payment options accepted for your order tier",
  "Remote setup scope if requested",
  "Warranty and after-sales terms",
] as const;

export const QUOTE_FACTORS = [
  { factor: "Product type", note: "Phone box, motherboard rack, empty chassis, iPhone farm, or custom cabinet" },
  { factor: "Empty vs phone-included", note: "Chassis-only ships faster; sourced devices need model confirmation and burn-in" },
  { factor: "Connection mode", note: "USB, OTG, or hybrid — wiring and hub tier confirmed during quotation" },
  { factor: "Voltage region", note: "110V, 220V, or 220–240V — PSU and plug standard matched to destination" },
  { factor: "Destination country", note: "Affects freight, plug type, and export documentation" },
  { factor: "Quantity & box count", note: "Volume tiers from 3+ boxes; rack projects priced separately" },
  { factor: "Documentation requests", note: "Datasheet, packing photo, compatible model list, shipping dimensions" },
  { factor: "Remote setup", note: "Batch-control onboarding quoted separately when needed" },
  { factor: "Phone / board models", note: "Mount, power draw, and ROM path — locked before assembly" },
  { factor: "USB hub & cooling tier", note: "Port count and fan kit sized to load — not fixed on product pages" },
] as const;

export const PAYMENT_OPTIONS = [
  {
    method: "USDT (Tron TRC20)",
    detail:
      "Available for sample and small orders. Payment is manually confirmed by sales after you send order number and transaction hash — not automatic on-chain verification.",
  },
  {
    method: "Bank transfer (T/T)",
    detail: "Standard for bulk and project invoices. Bank details provided on written proforma only.",
  },
  {
    method: "Wise",
    detail: "Available on quote for eligible destinations. Transfer instructions sent with invoice.",
  },
  {
    method: "PayPal",
    detail: "May be offered on select orders by sales confirmation — not guaranteed for all SKUs.",
  },
] as const;

export const POST_RFQ_EXPECTATIONS = [
  "We review RFQ details before issuing a written quote — no assembly until you approve the BOM.",
  "Typical reply within one business day when quantity, destination, connection mode, and voltage region are complete.",
  "Missing model list, voltage, or connection details may require a follow-up message.",
  "Phone-included, iPhone farm, and custom cabinet orders need longer lead time — confirmed after model and power plan review.",
  "You can request datasheet, packing photo, shipping size/weight, and payment options on the same inquiry.",
] as const;
