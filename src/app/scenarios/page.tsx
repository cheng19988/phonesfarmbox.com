import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { SCENARIOS } from "@/data/scenarios";
import { IMPORTED } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Platform Scenarios — TikTok, YouTube, Facebook & More",
  description:
    "Real-device phone farm scenarios for TikTok, YouTube, Facebook, Instagram, Telegram, and WhatsApp multi-device management.",
  path: "/scenarios",
});

export default function ScenariosIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="By platform"
        title="Platform scenarios"
        description="Deployment notes for teams running multiple accounts on TikTok, YouTube, Facebook, Instagram, Telegram, WhatsApp, and e-commerce platforms."
        image={IMPORTED.pageHero}
        imageAlt="Phone farm platform scenarios"
        theme="light"
      />

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SCENARIOS.map((s) => (
            <Link key={s.slug} href={`/scenarios/${s.slug}`} className="group block h-full">
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
                  <span className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-violet-100 text-violet-900 border border-violet-200">
                    {s.category}
                  </span>
                  <h2 className="font-bold text-slate-900 mt-3 group-hover:text-orange-700 transition-colors leading-snug">
                    {s.title}
                  </h2>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed line-clamp-2">{s.subtitle}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-orange-700 mt-4 group-hover:gap-2 transition-all">
                    View scenario <span aria-hidden>→</span>
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
