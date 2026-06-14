"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { toEnglishPath, toLocalePath } from "@/i18n/paths";
import { hasZhMirror } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

type Props = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: Props) {
  const pathname = usePathname() ?? "/";
  const enPath = toEnglishPath(pathname);
  const otherLocale: Locale = locale === "zh" ? "en" : "zh";
  const otherHref = hasZhMirror(enPath) ? toLocalePath(enPath, otherLocale) : otherLocale === "zh" ? "/zh" : "/";

  return (
    <div className="flex items-center gap-1 text-xs font-medium" role="navigation" aria-label="Language">
      <Link
        href={toLocalePath(enPath, "en")}
        className={`px-2 py-1 rounded-md transition-colors ${locale === "en" ? "bg-orange-100 text-orange-800" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`}
        hrefLang="en"
      >
        EN
      </Link>
      <Link
        href={otherHref}
        className={`px-2 py-1 rounded-md transition-colors ${locale === "zh" ? "bg-orange-100 text-orange-800" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`}
        hrefLang="zh-CN"
      >
        中文
      </Link>
    </div>
  );
}
