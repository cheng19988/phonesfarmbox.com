const PROD = "https://www.phonesfarmbox.com";

const sm = await (await fetch(`${PROD}/sitemap.xml`)).text();
const bad = ["/sample-order", "/login", "/register", "/admin", "localhost", "vercel.app", "https://phonesfarmbox.com/"];
console.log("sitemap url count:", (sm.match(/<loc>/g) || []).length);
for (const b of bad) {
  console.log(`sitemap exclude ${b}:`, sm.includes(`${PROD}${b}`) || (b.startsWith("http") ? sm.includes(b) : false) ? "FOUND" : "ok");
}

for (const p of ["/login", "/admin", "/sample-order", "/products/phone-farm-box", "/contact"]) {
  const html = await (await fetch(`${PROD}${p}`)).text();
  const noindex = /noindex/i.test(html);
  const can = html.match(/rel="canonical" href="([^"]+)"/)?.[1] ?? null;
  const procurement = html.includes("Export &amp; procurement") || html.includes("Export & procurement");
  const loading = html.includes("Loading form");
  console.log(p, { noindex, canonical: can, procurement, loadingForm: loading });
}
