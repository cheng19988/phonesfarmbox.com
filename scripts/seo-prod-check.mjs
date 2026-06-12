/** Production SEO smoke test — run after deploy */
const PROD = "https://www.phonesfarmbox.com";
const APEX = "https://phonesfarmbox.com";

const KEY_PATHS = [
  "/",
  "/products",
  "/products/phone-farm-box",
  "/services",
  "/services/overseas-delivery",
  "/blog",
  "/contact",
  "/sitemap.xml",
  "/robots.txt",
];

function hasNoindex(html) {
  return /noindex/i.test(html);
}

function canonical(html) {
  const m = html.match(/rel="canonical"\s+href="([^"]+)"/i) || html.match(/href="([^"]+)"\s+rel="canonical"/i);
  return m?.[1] ?? null;
}

async function checkUrl(url, { follow = true } = {}) {
  const res = await fetch(url, { redirect: follow ? "follow" : "manual" });
  const text = res.headers.get("content-type")?.includes("text/html") ? await res.text() : "";
  return { status: res.status, url: res.url, text, headers: res.headers };
}

async function main() {
  const results = { redirects: [], pages: [], sitemap: {}, robots: {}, errors: [] };

  // Apex redirect
  for (const path of ["/", "/contact", "/sitemap.xml"]) {
    const r = await checkUrl(`${APEX}${path}`, { follow: false });
    const loc = r.headers.get("location");
    results.redirects.push({
      from: `${APEX}${path}`,
      status: r.status,
      location: loc,
      ok: r.status === 301 || r.status === 308 ? loc?.startsWith(PROD) : false,
    });
  }

  // Key pages
  for (const path of KEY_PATHS) {
    try {
      const r = await checkUrl(`${PROD}${path}`);
      const isHtml = path !== "/sitemap.xml" && path !== "/robots.txt";
      results.pages.push({
        path,
        status: r.status,
        finalUrl: r.url,
        noindex: isHtml ? hasNoindex(r.text) : false,
        canonical: isHtml ? canonical(r.text) : null,
        ok: r.status === 200,
      });
      if (r.status >= 500) results.errors.push({ path, status: r.status });
    } catch (e) {
      results.errors.push({ path, error: String(e) });
    }
  }

  // Sitemap audit
  const sm = await checkUrl(`${PROD}/sitemap.xml`);
  results.sitemap.status = sm.status;
  const bad = [];
  if (sm.text) {
    for (const badHost of ["localhost", "vercel.app", "phonesfarmbox.com/"]) {
      if (sm.text.includes(badHost)) bad.push(badHost);
    }
    for (const badPath of ["/admin", "/api/", "/login", "/register", "/sample-order", "/orders/"]) {
      if (sm.text.includes(`${PROD}${badPath}`)) bad.push(badPath);
    }
  }
  results.sitemap.badPatterns = bad;
  results.sitemap.urlCount = (sm.text.match(/<loc>/g) || []).length;

  // Robots
  const rb = await checkUrl(`${PROD}/robots.txt`);
  results.robots.status = rb.status;
  results.robots.sitemapLine = rb.text.match(/Sitemap:.+/m)?.[0] ?? null;
  results.robots.disallowLogin = /Disallow: \/login/.test(rb.text);

  console.log(JSON.stringify(results, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
