import type { NextConfig } from "next";
import { legacyRedirects } from "./src/lib/legacy-redirects";
import { SITE } from "./src/lib/config";

const WWW = new URL(SITE.url).host;

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90, 95],
  },
  serverExternalPackages: ["pg", "@prisma/adapter-pg"],
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: SITE.domain }],
        destination: `https://${WWW}/:path*`,
        statusCode: 301,
      },
      ...legacyRedirects,
    ];
  },
};

export default nextConfig;
