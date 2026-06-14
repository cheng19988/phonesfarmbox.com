const base = process.env.BASE || "http://localhost:3000";

const urls = [
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

const checks = [
  "Best fit for",
  "Not ideal for",
  "Buyer should confirm before quote",
  "Compare with related options",
  "Before requesting a quote, prepare",
  "Common purchase combinations",
  "Optional add-ons",
  "manually confirmed",
];

async function main() {
  console.log("=== HTTP ===");
  for (const u of urls) {
    const r = await fetch(base + u, { redirect: "manual" });
    console.log(r.status, u, r.headers.get("location") || "");
  }

  const pfb = await (await fetch(base + "/products/phone-farm-box")).text();
  console.log("\n=== P2-9 CONTENT phone-farm-box ===");
  for (const c of checks) console.log(c, ":", pfb.includes(c));

  console.log("FORBID 20-node:", pfb.includes("20-node") ? "FAIL" : "OK");
  console.log("FORBID Official Store:", pfb.includes("Official Store") ? "FAIL" : "OK");
  console.log("Phones Farm Box:", pfb.includes("Phones Farm Box"));

  const sm = await (await fetch(base + "/sitemap.xml")).text();
  console.log("sitemap collections/all:", sm.includes("collections/all") ? "FAIL" : "OK");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
