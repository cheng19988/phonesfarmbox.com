import type { NextConfig } from "next";
import { legacyRedirects } from "./src/lib/legacy-redirects";

const nextConfig: NextConfig = {
  serverExternalPackages: ["better-sqlite3", "@prisma/adapter-better-sqlite3"],
  outputFileTracingIncludes: {
    "/*": ["./prisma/data.db"],
    "/api/**": ["./prisma/data.db"],
    "/products/**": ["./prisma/data.db"],
    "/admin/**": ["./prisma/data.db"],
    "/account/**": ["./prisma/data.db"],
    "/pricing/**": ["./prisma/data.db"],
  },
  async redirects() {
    return legacyRedirects;
  },
};

export default nextConfig;
