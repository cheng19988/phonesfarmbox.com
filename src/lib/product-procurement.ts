import type { ProductB2B } from "@/data/product-b2b";

export type ProductProcurement = {
  moq: string;
  leadTime: string;
  packingSize: string;
  grossWeight: string;
  voltage: string;
  warranty: string;
  shippingMethod: string;
  paymentProcess: string;
};

const DEFAULT_PAYMENT =
  "Written BOM on proforma → USDT TRC20 (qualifying sample orders), bank T/T, Wise, or PayPal → assembly after sales confirmation";

const DEFAULT_SHIPPING =
  "DHL/FedEx express or sea freight per buyer instruction; commercial invoice + packing list on dispatch";

const DEFAULT_VOLTAGE =
  "110V / 220V / 220–240V regional PSU and plug standard — matched to destination country on proforma";

const DEFAULT_PACKING =
  "Foam-lined export carton; carton L×W×H on packing list after configuration is locked";

const DEFAULT_WEIGHT =
  "Gross weight on commercial invoice after packing — varies by slot count and empty vs phone-included BOM";

const SKU_OVERRIDES: Partial<
  Record<string, Partial<Pick<ProductProcurement, "packingSize" | "grossWeight" | "voltage" | "shippingMethod" | "paymentProcess">>>
> = {
  "phone-farm-box": {
    packingSize: "Single standard chassis: foam carton; stacked rack shipments use pallet/crate plan on quote",
    grossWeight: "Typical single-unit export parcel often 12–25 kg after packing — exact weight on invoice",
  },
  "motherboard-box": {
    grossWeight: "Headless node chassis typically lighter than full phone box — invoice weight after packing",
  },
  "empty-box-chassis": {
    grossWeight: "Empty metal chassis only — lighter export parcel; weight on invoice before phone/board install",
    packingSize: "Compact foam carton for frame + fan mounts; dimensions on packing list",
  },
  "custom-cabinet": {
    packingSize: "Crated sea freight typical; floor-standing dimensions on engineering drawing + packing list",
    grossWeight: "Heavy freight — crated gross weight on proforma for forwarder quotes",
    shippingMethod: "Sea freight crated default; air partial ship available on project plan",
  },
  "remote-control-setup": {
    packingSize: "N/A — remote service SKU (no physical ship for service line alone)",
    grossWeight: "N/A — service SKU",
    shippingMethod: "Remote session post-delivery; optional pre-ship validation in Guangzhou when hardware on same PO",
    paymentProcess: "Service line on proforma with hardware PO or standalone setup invoice → pay per invoice terms",
  },
  "usb-hub": {
    packingSize: "Accessory carton; hub tier count on packing list",
    grossWeight: "Small parcel — typically under 5 kg unless bundled with chassis on same shipment",
  },
  "power-supply-solution": {
    grossWeight: "PSU module weight on invoice — wattage class confirmed on BOM",
  },
  "cooling-solution": {
    grossWeight: "Fan kit weight on invoice — fan count per quote",
  },
  "network-equipment": {
    shippingMethod: "Ships with farm hardware or standalone accessory parcel — router/switch model on BOM",
  },
};

export function getProductProcurement(slug: string, b2b: ProductB2B | undefined): ProductProcurement | null {
  if (!b2b) return null;
  const o = SKU_OVERRIDES[slug];
  return {
    moq: b2b.moq,
    leadTime: b2b.leadTime,
    warranty: b2b.warranty,
    packingSize: o?.packingSize ?? DEFAULT_PACKING,
    grossWeight: o?.grossWeight ?? DEFAULT_WEIGHT,
    voltage: o?.voltage ?? DEFAULT_VOLTAGE,
    shippingMethod: o?.shippingMethod ?? DEFAULT_SHIPPING,
    paymentProcess: o?.paymentProcess ?? DEFAULT_PAYMENT,
  };
}
