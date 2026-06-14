import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FloatingContact } from "@/components/floating-contact";
import { JsonLd } from "@/components/shared";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { SiteChrome, getRequestLocale, htmlLang } from "@/lib/locale-request";
import { SITE } from "@/lib/config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.productionUrl),
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", type: "image/png" }],
  },
  alternates: {
    canonical: SITE.productionUrl,
    types: {
      "text/plain": [
        { url: "/llms.txt", title: "LLMs.txt" },
        { url: "/llms-full.txt", title: "LLMs-full.txt" },
      ],
    },
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getRequestLocale();
  return (
    <html lang={htmlLang(locale)} className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd(locale)} />
        <SiteChrome>{children}</SiteChrome>
        <FloatingContact />
      </body>
    </html>
  );
}
