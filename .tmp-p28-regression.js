const base = "https://www.phonesfarmbox.com";

async function main() {
  for (const p of ["/", "/pricing", "/contact"]) {
    const h = await (await fetch(base + p)).text();
    const c = h.match(/rel="canonical" href="([^"]+)"/);
    console.log("canonical", p, c ? c[1] : "NO");
  }
  const sm = await (await fetch(base + "/sitemap.xml")).text();
  console.log("sitemap_www", sm.includes("https://www.phonesfarmbox.com"));
  console.log("forbid_collections_all", sm.includes("collections/all") ? "FAIL" : "OK");
  for (const p of ["/orders", "/payment"]) {
    const r = await fetch(base + p, { redirect: "manual" });
    console.log("http", p, r.status);
  }
  const pricing = await (await fetch(base + "/pricing")).text();
  console.log("usdt_manual", pricing.includes("manually confirmed"));
  console.log("phones_farm_box", pricing.includes("Phones Farm Box"));
}

main().catch((e) => { console.error(e); process.exit(1); });
