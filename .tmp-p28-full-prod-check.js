const base = "https://www.phonesfarmbox.com";

const httpUrls = [
  "/",
  "/pricing",
  "/contact",
  "/products/phone-farm-box",
  "/products/iphone-phone-farm",
  "/faq",
  "/help",
  "/terms",
  "/refund",
  "/admin",
  "/login",
  "/sitemap.xml",
  "/robots.txt",
  "/collections/all",
  "/help/delivery-process-phone-farm-hardware",
  "/help/warranty-after-sales-phone-farm-hardware",
  "/help/remote-setup-support-scope",
];

const deliverySteps = [
  "Quote confirmation",
  "BOM and invoice confirmation",
  "Assembly and wiring",
  "Power and connection check",
  "Burn-in and basic operation test",
  "Packing list confirmation",
  "Packing photo and shipping size",
  "Shipment and tracking",
  "Remote setup and after-sales",
];

const contentChecks = [
  {
    url: "/pricing",
    tests: [
      "Delivery and fulfillment process",
      "delivery-process",
      "Packing list, photos, and shipping size",
      "Warranty and after-sales",
      "Remote setup scope",
      "Does not include",
      "manually confirmed",
      ...deliverySteps,
    ],
    forbidden: ["20-node", "200W", "20-port", "Official Store"],
  },
  {
    url: "/contact",
    tests: [
      "After payment — delivery at a glance",
      "Packing photo, list, and shipping size",
      "After payment is confirmed",
      "manually confirmed",
    ],
  },
  {
    url: "/",
    tests: ["From payment to delivery", "Assembly, Test"],
  },
  {
    url: "/terms",
    tests: [
      "DOA",
      "48 hours",
      "Remote Setup Support",
      "manually confirmed",
      "account farming",
    ],
  },
  {
    url: "/refund",
    tests: ["Return Shipping", "48 hours", "DOA", "Spare Parts"],
  },
  {
    url: "/products/phone-farm-box",
    tests: ["Delivery after payment", "packing photos before shipment"],
  },
  {
    url: "/faq",
    tests: [
      "Can I request packing photos before shipment",
      "What happens if hardware arrives damaged",
      "What does remote setup support include",
      "Who pays return shipping for warranty cases",
    ],
  },
];

async function main() {
  console.log("=== HTTP ===");
  for (const u of httpUrls) {
    try {
      const r = await fetch(base + u, { redirect: "manual" });
      const loc = r.headers.get("location");
      console.log(r.status, u, loc ? `-> ${loc}` : "");
    } catch (e) {
      console.log("ERR", u, e.message);
    }
  }

  console.log("\n=== P2-8 CONTENT ===");
  for (const c of contentChecks) {
    const h = await (await fetch(base + c.url)).text();
    console.log("\n", c.url);
    for (const t of c.tests) console.log(" ", t, ":", h.includes(t));
    if (c.forbidden) {
      for (const f of c.forbidden) {
        console.log(" ", "FORBID", f, ":", h.includes(f) ? "FAIL" : "OK");
      }
    }
    if (c.url === "/pricing") {
      const autoBad =
        h.includes("automatic on-chain verification") &&
        !h.includes("not automatic on-chain");
      console.log(" ", "FORBID auto-onchain-only:", autoBad ? "FAIL" : "OK");
      console.log(
        " ",
        "Phones Farm Box:",
        h.includes("Phones Farm Box") && !h.match(/Phone Farm Box(?!s)/)
      );
    }
  }

  const sm = await (await fetch(base + "/sitemap.xml")).text();
  console.log("\n=== SITEMAP ===");
  for (const slug of [
    "help/delivery-process-phone-farm-hardware",
    "help/warranty-after-sales-phone-farm-hardware",
    "help/remote-setup-support-scope",
  ]) {
    console.log(slug, ":", sm.includes(slug));
  }
  console.log("collections/all:", sm.includes("collections/all"));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
