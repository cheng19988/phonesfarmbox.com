export type PlanningTool = {
  slug: string;
  title: string;
  description: string;
  content?: string;
  interactive?: "capacity" | "power" | "usb" | "checklist";
};

export const PLANNING_TOOLS: PlanningTool[] = [
  {
    slug: "phone-farm-capacity-estimator",
    title: "Phone Farm Capacity Estimator",
    description: "Estimate how many chassis units you need for a target device count — slots per box confirmed at quote.",
    interactive: "capacity",
  },
  {
    slug: "power-consumption-estimator",
    title: "Power Consumption Estimator",
    description: "Rough PSU sizing from node count and watts per device.",
    interactive: "power",
  },
  {
    slug: "usb-port-requirement-calculator",
    title: "USB Port Requirement Calculator",
    description: "Plan industrial hub tiers for your device count and control PCs.",
    interactive: "usb",
  },
  {
    slug: "bulk-quote-checklist",
    title: "Bulk Quote Checklist",
    description: "Checklist to copy into the sales inquiry form.",
    interactive: "checklist",
  },
  {
    slug: "box-vs-cloud-comparison",
    title: "Hardware vs Cloud — Planning Notes",
    description: "When to buy boxes vs rent virtual devices (procurement notes).",
    content: `**Choose hardware when:**
- You run the same devices daily for months
- Platform trust and physical sensors matter
- You already pay for host PCs and space

**Consider cloud for:**
- Short experiments under 30 days
- Sandbox apps with no account value

**Cost note:** Hardware is cap-ex + power; cloud is opex per seat. Request a TCO line on our pricing page for your device count.`,
  },
  {
    slug: "buying-guide-checklist",
    title: "First Purchase Checklist",
    description: "Questions we ask before sending a proforma invoice.",
    content: `1. Android, iPhone, or mixed?
2. Target device count in 6 months
3. Need SIM, camera, or headless?
4. Destination country and port
5. Air vs sea preference
6. Existing control software?
7. Sample first or bulk only?

Send answers via the contact form for a written quote.`,
  },
];

/** @deprecated use PLANNING_TOOLS */
export const FREE_TOOLS = PLANNING_TOOLS;

export function getPlanningTool(slug: string) {
  return PLANNING_TOOLS.find((t) => t.slug === slug);
}

export function getFreeTool(slug: string) {
  return getPlanningTool(slug);
}
