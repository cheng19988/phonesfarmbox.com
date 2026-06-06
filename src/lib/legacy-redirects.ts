import type { Redirect } from "next/dist/lib/load-custom-routes";

/** 301 redirects for legacy Shopify / old-site URLs indexed by Google. */
export const legacyRedirects: Redirect[] = [
  { source: "/collections", destination: "/products", permanent: true },
  { source: "/collections/:path*", destination: "/products", permanent: true },

  { source: "/pages/how-to-pay", destination: "/pricing", permanent: true },
  { source: "/pages/phone-farm-software", destination: "/tools/bulk-quote-checklist", permanent: true },
  { source: "/pages/:path*", destination: "/contact", permanent: true },

  { source: "/blog/what-is-a-cell-phone-farm", destination: "/blog/what-is-box-phone-farm", permanent: true },

  { source: "/products/google-pixel-7a", destination: "/products/phone-farm-box", permanent: true },
  { source: "/products/iphone-farm", destination: "/products/iphone-phone-farm", permanent: true },
  { source: "/products/android-phone-farm-empty-box", destination: "/products/empty-box-chassis", permanent: true },
  { source: "/products/android-phone-farm-box", destination: "/products/android-phone-farm", permanent: true },
  { source: "/products/phone-farm", destination: "/products/phone-farm-box", permanent: true },
  { source: "/products/cell-phone-farm", destination: "/products/phone-farm-box", permanent: true },
];
