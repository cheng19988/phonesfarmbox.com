import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { BLOG_POSTS } from "@/data/blog";
import { IMPORTED } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Phone Farm Guides & Blog",
  description:
    "Practical guides on phone farm boxes, hardware selection, setup tutorials, real device vs cloud, and enterprise deployment.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides & resources"
        title="Phone farm hardware guides"
        description="Practical articles on box selection, deployment, real device vs cloud, and B2B procurement — written for hardware buyers and ops teams."
        image={IMPORTED.homeHero}
        imageAlt="Phone farm deployment guides"
        theme="light"
      />

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
              <Surface padding="md" hover className="h-full flex flex-col border-slate-200 shadow-sm hover:border-orange-300">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500">{post.date}</span>
                </div>
                <h2 className="font-bold text-slate-900 text-lg group-hover:text-orange-700 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-orange-700 mt-4 group-hover:gap-2 transition-all">
                  Read article <span aria-hidden>→</span>
                </span>
              </Surface>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
