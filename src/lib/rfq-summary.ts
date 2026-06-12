/** Parse RFQ appendix from ContactSubmission message — safe fallbacks, no schema changes. */

const RFQ_MARKER = "--- RFQ details ---";

export type RfqParsedFields = {
  platform?: string;
  connectionMode?: string;
  voltageRegion?: string;
  chassisConfig?: string;
  targetModels?: string;
  paymentPreference?: string;
  documentationRequested: string[];
};

export type RfqBadge = {
  key: string;
  label: string;
  present: boolean;
};

export type LeadQualityHint =
  | "Complete RFQ"
  | "Needs follow-up"
  | "Missing destination"
  | "Missing connection mode"
  | "Missing platform"
  | "Missing quantity";

export type RfqLeadAnalysis = {
  parsed: RfqParsedFields;
  badges: RfqBadge[];
  quality: LeadQualityHint;
};

function parseRfqAppendix(message: string | null | undefined): RfqParsedFields {
  const result: RfqParsedFields = { documentationRequested: [] };
  if (!message?.includes(RFQ_MARKER)) return result;

  const appendix = message.split(RFQ_MARKER)[1] ?? "";
  const lines = appendix.split("\n").map((l) => l.trim()).filter(Boolean);

  for (const line of lines) {
    if (line.startsWith("Platform:")) result.platform = line.slice("Platform:".length).trim();
    else if (line.startsWith("Connection mode:")) result.connectionMode = line.slice("Connection mode:".length).trim();
    else if (line.startsWith("Voltage region:")) result.voltageRegion = line.slice("Voltage region:".length).trim();
    else if (line.startsWith("Chassis config:")) result.chassisConfig = line.slice("Chassis config:".length).trim();
    else if (line.startsWith("Target models:")) result.targetModels = line.slice("Target models:".length).trim();
    else if (line.startsWith("Payment preference:")) result.paymentPreference = line.slice("Payment preference:".length).trim();
    else if (line.startsWith("Documentation requested:")) {
      const docs = line.slice("Documentation requested:".length).trim();
      result.documentationRequested = docs ? docs.split(",").map((d) => d.trim()) : [];
    }
  }

  return result;
}

function hasText(value: string | null | undefined): boolean {
  return Boolean(value?.trim());
}

export function analyzeContactSubmission(input: {
  country?: string | null;
  deviceQuantity?: string | null;
  productInterest?: string | null;
  message?: string | null;
}): RfqLeadAnalysis {
  try {
    const parsed = parseRfqAppendix(input.message);

    const badges: RfqBadge[] = [
      { key: "qty", label: "Quantity", present: hasText(input.deviceQuantity) },
      { key: "dest", label: "Destination", present: hasText(input.country) },
      { key: "product", label: "Product", present: hasText(input.productInterest) },
      { key: "platform", label: "Platform", present: hasText(parsed.platform) },
      { key: "conn", label: "Connection", present: hasText(parsed.connectionMode) },
      { key: "volt", label: "Voltage", present: hasText(parsed.voltageRegion) },
      { key: "pay", label: "Payment pref.", present: hasText(parsed.paymentPreference) },
      { key: "docs", label: "Docs requested", present: parsed.documentationRequested.length > 0 },
    ];

    let quality: LeadQualityHint = "Complete RFQ";

    if (!hasText(input.country)) quality = "Missing destination";
    else if (!hasText(input.deviceQuantity)) quality = "Missing quantity";
    else if (!hasText(parsed.connectionMode)) quality = "Missing connection mode";
    else if (!hasText(parsed.platform)) quality = "Missing platform";
    else if (
      !hasText(parsed.voltageRegion) ||
      !hasText(parsed.chassisConfig) ||
      !hasText(input.productInterest)
    ) {
      quality = "Needs follow-up";
    }

    return { parsed, badges, quality };
  } catch {
    return {
      parsed: { documentationRequested: [] },
      badges: [],
      quality: "Needs follow-up",
    };
  }
}
