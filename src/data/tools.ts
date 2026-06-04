export type FreeTool = {
  slug: string;
  title: string;
  description: string;
  content: string;
};

export const FREE_TOOLS: FreeTool[] = [
  {
    slug: "phone-farm-sizing-calculator",
    title: "Phone Farm Sizing Calculator Guide",
    description: "Estimate how many phone farm boxes you need based on device count and workload.",
    content: `Use this guide to size your phone farm deployment:

**Standard capacity:** 20 devices per 2U phone farm box

**Calculation:**
- Accounts needed ÷ 20 = boxes required (round up)
- Example: 85 accounts → 5 boxes (100 device capacity)

**Workload factors:**
- Heavy apps (TikTok, games): allow 15–20% headroom for thermal margin
- Light apps (messaging, surveys): full 20 nodes per box
- Mixed iPhone + Android: separate boxes recommended

**Expansion path:**
Start with 1–2 boxes for evaluation, then add stackable units. Enterprise: custom 42U cabinet for 100+ devices.

Contact us for a custom sizing consultation: qiuxui646@gmail.com`,
  },
  {
    slug: "network-ip-planner",
    title: "Network IP Planning Guide",
    description: "Plan IP allocation and router configuration for multi-device phone farms.",
    content: `**IP planning template:**

| Device Group | Platform | Region | IP Type | Device Count |
|-------------|----------|--------|---------|-------------|
| Group A | TikTok | US | Residential proxy | 20 |
| Group B | Instagram | EU | Mobile data | 20 |

**Rules of thumb:**
- 1 IP per account for sensitive platforms
- 1 IP per 3–5 accounts for lower-risk operations
- Never share IP across unrelated account groups

**Hardware needed:**
- 1 router per 20–50 devices
- Network switch for large deployments
- See our Network Equipment products`,
  },
  {
    slug: "box-vs-cloud-comparison",
    title: "Box vs Cloud vs Emulator Comparison Tool",
    description: "Side-by-side comparison to choose the right phone farm approach.",
    content: `| Factor | Phone Farm Box | Cloud Phone | Emulator |
|--------|---------------|-------------|----------|
| Hardware | Real physical devices | Virtual on cloud servers | Software on PC |
| Platform trust | High | Medium | Low |
| Initial cost | Hardware purchase | Subscription | Free/low |
| Scalability | Stack boxes | Unlimited virtual | PC-limited |
| Sensor accuracy | Genuine | Simulated | Simulated |
| 24/7 operation | Yes (with cooling) | Yes | Limited |
| Customization | Full hardware control | Platform-dependent | Limited |
| Best for | Multi-account ops, QA | Light testing | Dev debugging |

**Recommendation:** Phone farm box for any operation where account trust and long-term stability matter.`,
  },
  {
    slug: "power-requirements-estimator",
    title: "Power Requirements Estimator",
    description: "Calculate power needs for phone farm box deployments.",
    content: `**Per box power consumption:**
- 20-node phone farm box: ~100–150W continuous
- 20-node motherboard box: ~80–120W continuous
- Cooling fans: ~20–40W additional

**Room power planning:**
- 5 boxes: dedicated 15A circuit recommended
- 10+ boxes: consult electrician for 220V dedicated circuit
- Enterprise rack (42U): 5–10kW capacity planning

**PSU specifications:**
Our boxes include 450–550W industrial PSU per unit — sufficient for 20 nodes with cooling.`,
  },
  {
    slug: "glossary-quick-reference",
    title: "Phone Farm Glossary Quick Reference",
    description: "Quick lookup for common phone farm hardware and software terms.",
    content: `Browse our full glossary at /glossary for detailed definitions.

**Quick terms:**
- **Phone Farm Box** — Industrial chassis with 20 real devices
- **Motherboard Box** — Screenless nodes, lower cost
- **Batch Control** — Software managing all devices from one PC
- **ADB** — Android Debug Bridge for device automation
- **OTG Ethernet** — LAN connection for device data
- **Stackable** — Boxes that connect vertically for expansion

Visit /glossary for 20+ detailed term definitions.`,
  },
  {
    slug: "buying-guide-checklist",
    title: "Phone Farm Buying Guide Checklist",
    description: "Checklist before purchasing phone farm box hardware.",
    content: `**Before you buy:**

☐ Define device count and platform (Android/iPhone/mixed)
☐ Choose phone box vs motherboard box
☐ Plan network/IP requirements
☐ Confirm power availability at deployment site
☐ Identify control PC specs (Windows/macOS)
☐ Decide sample vs bulk order
☐ Review cooling requirements for your climate
☐ Confirm shipping destination and customs needs

**Recommended first order:**
1 sample phone farm box → evaluate 2 weeks → bulk order

**Contact for quote:**
WhatsApp +852 6215 5642 | Telegram @huicheng1998 | Phone 13059502618`,
  },
];

export function getFreeTool(slug: string) {
  return FREE_TOOLS.find((t) => t.slug === slug);
}
