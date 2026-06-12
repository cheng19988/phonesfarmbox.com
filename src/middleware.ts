import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SITE } from "@/lib/config";

const WWW_HOST = new URL(SITE.productionUrl).host;
const APEX_HOST = SITE.domain;

function withRobotsTag(response: NextResponse, host: string): NextResponse {
  if (host.endsWith(".vercel.app") || host === "localhost" || host === "127.0.0.1") {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

function canonicalRedirect(request: NextRequest, host: string): NextResponse | null {
  const proto = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const needsHttps = proto === "http";
  const needsWww = host === APEX_HOST;

  if (!needsHttps && !needsWww) return null;

  const dest = request.nextUrl.clone();
  dest.protocol = "https:";
  dest.host = needsWww ? WWW_HOST : host;
  return NextResponse.redirect(dest, 301);
}

/** Force apex → www and http → https so canonical URLs stay on https://www.phonesfarmbox.com */
export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").split(":")[0].toLowerCase();

  const redirect = canonicalRedirect(request, host);
  if (redirect) return redirect;

  return withRobotsTag(NextResponse.next(), host);
}

export const config = {
  // Include llms.txt / robots.txt / sitemap.xml — SEO assets must also canonicalize to www
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
