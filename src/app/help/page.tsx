import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { HELP_ARTICLES, HELP_CATEGORIES } from "@/data/help";
import { IMPORTED } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Help Center — Phone Farm Box Hardware",
  description:
    "Phone farm hardware help center. Setup guides, network configuration, remote control software, device workflows, troubleshooting, and payment guides.",
  path: "/help",
});

export default function HelpIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Documentation"
        title="Help Center"
        description="Setup guides, networking, remote control software, device workflows, troubleshooting, and USDT payment — for real-device phone farm hardware."
        image={IMPORTED.pageHero}
        imageAlt="Phone farm hardware help"
        theme="light"
      />

      {HELP_CATEGORIES.map((cat, i) => {
        const articles = HELP_ARTICLES.filter((a) => a.category === cat);
        if (articles.length === 0) return null;
        return (
          <Section key={cat} variant={i % 2 === 1 ? "muted" : "default"}>
            <SectionHeader eyebrow={`${articles.length} articles`} title={cat} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {articles.map((a) => (
                <Link key={a.slug} href={`/help/${a.slug}`} className="group block h-full">
                  <Surface padding="md" hover className="h-full border-slate-200 shadow-sm hover:border-orange-300">
                    <h2 className="font-bold text-slate-900 group-hover:text-orange-700 transition-colors leading-snug">
                      {a.title}
                    </h2>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed line-clamp-3">{a.summary}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-orange-700 mt-4 group-hover:gap-2 transition-all">
                      Read guide <span aria-hidden>→</span>
                    </span>
                  </Surface>
                </Link>
              ))}
            </div>
          </Section>
        );
      })}
    </>
  );
}
