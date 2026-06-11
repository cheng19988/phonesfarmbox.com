import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { FEATURE_PAGES } from "@/data/features-pages";
import { IMPORTED } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Phone Farm Box Features",
  description:
    "Device operation workflows, network setup, team device management, remote control integration, ADB automation, and bulk APK deployment for real-device phone farms.",
  path: "/features",
});

export default function FeaturesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Phone farm box features"
        description="Device workflows, network planning, team access, remote control integration, and batch automation — documented for physical phone farm hardware."
        image={IMPORTED.homeHero}
        imageAlt="Phone farm hardware features"
        theme="light"
      />

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FEATURE_PAGES.map((f) => (
            <Link key={f.slug} href={`/features/${f.slug}`} className="group block h-full">
              <article className="card overflow-hidden h-full border-slate-200 shadow-sm hover:border-orange-300 hover:shadow-md transition-all">
                {f.heroImage && (
                  <div className="relative aspect-video bg-slate-100">
                    <Image
                      src={f.heroImage}
                      alt={f.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <Surface padding="md" className="border-0 shadow-none rounded-none">
                  <span className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-sky-100 text-sky-900 border border-sky-200">
                    {f.category}
                  </span>
                  <h2 className="font-bold text-slate-900 mt-3 group-hover:text-orange-700 transition-colors leading-snug">
                    {f.title}
                  </h2>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed line-clamp-2">{f.subtitle}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-orange-700 mt-4 group-hover:gap-2 transition-all">
                    Read feature <span aria-hidden>→</span>
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
