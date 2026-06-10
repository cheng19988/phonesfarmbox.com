import type { NextConfig } from "next";
import { legacyRedirects } from "./src/lib/legacy-redirects";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90, 95],
  },
  serverExternalPackages: ["pg", "@prisma/adapter-pg"],
  async redirects() {
    return legacyRedirects;
  },
};

export default nextConfig;
