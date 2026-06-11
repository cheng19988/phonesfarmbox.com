import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { SOLUTION_PAGES } from "@/data/solutions-pages";
import { IMPORTED } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Phone Farm Box Solutions",
  description:
    "Solutions for social media marketing, e-commerce, app QA, cross-border marketing, and affiliate operations on real-device phone farm hardware.",
  path: "/solutions",
});

export default function SolutionsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Industry solutions"
        title="Phone farm box solutions"
        description="How marketing teams, QA labs, e-commerce operators, and enterprise clients deploy phone farm box hardware from our Guangzhou factory."
        image={IMPORTED.pageHero}
        imageAlt="Phone farm industry solutions"
        theme="light"
      />

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SOLUTION_PAGES.map((s) => (
            <Link key={s.slug} href={`/solutions/${s.slug}`} className="group block h-full">
              <article className="card overflow-hidden h-full border-slate-200 shadow-sm hover:border-orange-300 hover:shadow-md transition-all">
                {s.heroImage && (
                  <div className="relative aspect-video bg-slate-100">
                    <Image
                      src={s.heroImage}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <Surface padding="md" className="border-0 shadow-none rounded-none">
                  <span className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                    {s.category}
                  </span>
                  <h2 className="font-bold text-slate-900 mt-3 group-hover:text-orange-700 transition-colors leading-snug">
                    {s.title}
                  </h2>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed line-clamp-2">{s.subtitle}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-orange-700 mt-4 group-hover:gap-2 transition-all">
                    View solution <span aria-hidden>→</span>
                  </span>
                </Surface>
              </article>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
