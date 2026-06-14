import { headers } from "next/headers";
import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { LOCALE_HTML_LANG } from "@/i18n/config";
import { Header, Footer } from "@/components/layout";

export async function getRequestLocale(): Promise<Locale> {
  const h = await headers();
  return h.get("x-locale") === "zh" ? "zh" : "en";
}

export async function SiteChrome({ children }: { children: ReactNode }) {
  const locale = await getRequestLocale();
  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
    </>
  );
}

export function htmlLang(locale: Locale): string {
  return LOCALE_HTML_LANG[locale];
}
