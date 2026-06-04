import type { NextConfig } from "next";

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
};

export default nextConfig;
