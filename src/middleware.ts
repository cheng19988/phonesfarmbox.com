import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SITE } from "@/lib/config";

const WWW_HOST = new URL(SITE.url).host;
const APEX_HOST = SITE.domain;

/** Force apex → www so canonical URLs, cookies, and SEO stay on www.phonesfarmbox.com */
export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").split(":")[0].toLowerCase();

  if (host === APEX_HOST) {
    const dest = request.nextUrl.clone();
    dest.protocol = "https:";
    dest.host = WWW_HOST;
    return NextResponse.redirect(dest, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Include llms.txt / robots.txt / sitemap.xml — SEO assets must also canonicalize to www
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
