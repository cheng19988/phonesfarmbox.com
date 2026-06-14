const base = "https://www.phonesfarmbox.com";

const httpUrls = [
  "/products",
  "/products/phone-farm-box",
  "/products/motherboard-box",
  "/products/empty-box-chassis",
  "/products/iphone-phone-farm",
  "/products/usb-hub",
  "/products/remote-control-setup",
  "/contact",
  "/pricing",
  "/admin",
  "/sitemap.xml",
  "/robots.txt",
];

const p29Markers = [
  "Best fit for",
  "Not ideal for",
  "Buyer should confirm before quote",
  "Compare with related options",
  "Before requesting a quote, prepare",
  "Common purchase combinations",
  "Optional add-ons",
];

const quoteChecklist = [
  "Destination country",
  "Expected quantity",
  "phone or board model list",
  "Empty chassis vs phone-included",
  "USB / OTG / hybrid",
  "Voltage region",
  "packing photo",
  "Remote setup required",
];

const compareChecks = [
  { url: "/products/phone-farm-box", text: "Motherboard Box", alt: "motherboard-box" },
  { url: "/products/empty-box-chassis", text: "Turnkey Android Cluster", alt: "android-phone-farm" },
  { url: "/products/android-phone-farm", text: "iPhone Phone Farm", alt: "iphone-phone-farm" },
  { url: "/products/usb-hub", text: "Phone Farm Box", alt: "phone-farm-box" },
  { url: "/products/network-equipment", text: "Remote Control Setup", alt: "remote-control-setup" },
];

const combinationChecks = [
  { url: "/products/phone-farm-box", text: "USB hub tier + power supply" },
  { url: "/products/motherboard-box", text: "custom cabinet" },
  { url: "/products/iphone-phone-farm", text: "remote control setup" },
  { url: "/products/empty-box-chassis", text: "buyer-provided" },
  { url: "/products/network-equipment", text: "remote-control-setup" },
];

const faqChecks = [
  {
    url: "/products/phone-farm-box",
    qs: ["Does this include phones?", "Can I choose USB or OTG", "110V / 220V", "prepare before quote", "packing photos", "account operation"],
  },
  {
    url: "/products/motherboard-box",
    qs: ["Does this include phones?", "Can I choose USB or OTG", "110V / 220V", "prepare before quote"],
  },
  {
    url: "/products/empty-box-chassis",
    qs: ["Does this include phones?", "Can I choose USB or OTG", "110V / 220V", "packing photos"],
  },
  {
    url: "/products/iphone-phone-farm",
    qs: ["Does this include phones?", "110V / 220V", "account operation", "platform results"],
  },
  {
    url: "/products/usb-hub",
    qs: ["Does this include phones?", "prepare before quote"],
  },
  {
    url: "/products/remote-control-setup",
    qs: ["account operation", "prepare before quote"],
  },
];

const allSkus = [
  "phone-farm-box",
  "motherboard-box",
  "android-phone-farm",
  "iphone-phone-farm",
  "real-device-phone-farm",
  "empty-box-chassis",
  "usb-hub",
  "power-supply-solution",
  "cooling-solution",
  "network-equipment",
  "custom-cabinet",
  "remote-control-setup",
];

async function fetchText(path) {
  return (await fetch(base + path)).text();
}

async function main() {
  console.log("=== HTTP ===");
  for (const u of httpUrls) {
    const r = await fetch(base + u, { redirect: "manual" });
    console.log(r.status, u, r.headers.get("location") || "");
  }

  console.log("\n=== P2-9 DEPLOYED? (phone-farm-box) ===");
  const pfb = await fetchText("/products/phone-farm-box");
  for (const m of p29Markers) console.log(m, ":", pfb.includes(m));
  const deployed = pfb.includes("Compare with related options");
  console.log("P2-9_LIVE:", deployed);

  if (!deployed) {
    console.log("\nP2-9 not yet on production — waiting 30s and retrying...");
    await new Promise((r) => setTimeout(r, 30000));
    const retry = await fetchText("/products/phone-farm-box");
    console.log("RETRY Compare with related options:", retry.includes("Compare with related options"));
    if (!retry.includes("Compare with related options")) {
      console.log("STILL_NOT_DEPLOYED");
      return;
    }
    Object.assign(pfb, retry); // won't work - pfb is const string. Use retry for rest
  }

  const live = deployed ? pfb : await fetchText("/products/phone-farm-box");

  console.log("\n=== 12 SKU Best fit / Not ideal ===");
  for (const slug of allSkus) {
    const h = await fetchText(`/products/${slug}`);
    console.log(
      slug,
      "best:",
      h.includes("Best fit for"),
      "not:",
      h.includes("Not ideal for"),
      "confirm:",
      h.includes("Buyer should confirm before quote")
    );
  }

  console.log("\n=== Quote prepare checklist ===");
  for (const c of quoteChecklist) console.log(c, ":", live.includes(c) || live.toLowerCase().includes(c.toLowerCase()));

  console.log("\n=== Compare sections ===");
  for (const c of compareChecks) {
    const h = await fetchText(c.url);
    console.log(c.url, c.text, ":", h.includes(c.text));
  }

  console.log("\n=== Common combinations ===");
  for (const c of combinationChecks) {
    const h = await fetchText(c.url);
    console.log(c.url, c.text.slice(0, 40), ":", h.includes("Common purchase combinations") && h.toLowerCase().includes(c.text.toLowerCase().slice(0, 15)));
  }

  console.log("\n=== FAQ core SKUs ===");
  for (const f of faqChecks) {
    const h = await fetchText(f.url);
    console.log(f.url, f.qs.map((q) => (h.toLowerCase().includes(q.toLowerCase()) ? "OK" : "MISS")).join(" "));
  }

  console.log("\n=== REGRESSION ===");
  const pricing = await fetchText("/pricing");
  const home = await fetchText("/");
  const sm = await fetchText("/sitemap.xml");
  console.log("usdt_manual:", pricing.includes("manually confirmed"));
  console.log("canonical:", (home.match(/rel="canonical" href="([^"]+)"/) || [])[1]);
  console.log("phones_farm_box:", home.includes("Phones Farm Box"));
  console.log("forbid_20node:", pricing.includes("20-node") ? "FAIL" : "OK");
  console.log("forbid_3fan:", pricing.includes("3-fan") ? "FAIL" : "OK");
  console.log("forbid_official:", home.includes("Official Store") ? "FAIL" : "OK");
  console.log("sitemap_collections:", sm.includes("collections/all") ? "FAIL" : "OK");
  console.log("header_no_register:", !home.includes('href="/register"'));

  const contact = await fetch(base + "/api/contact", { method: "OPTIONS" });
  console.log("contact_api:", contact.status);
  const orders = await fetch(base + "/api/orders", { redirect: "manual" });
  console.log("orders_api:", orders.status);
  const payment = await fetch(base + "/api/payment/verify");
  console.log("payment_api:", payment.status);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
