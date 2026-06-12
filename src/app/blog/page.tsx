import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { BLOG_CATEGORIES, getBlogPostsByCategory, getSortedBlogPosts } from "@/data/blog";
import { IMPORTED } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Phone Farm Guides & Blog",
  description:
    "Phone farm box manufacturer guides — hardware selection 2026, S8/S9 clusters, mobile device lab setup, USB hub sizing, RFQ, shipping, and B2B procurement from Guangzhou.",
  path: "/blog",
});

export default function BlogPage() {
  const sorted = getSortedBlogPosts();

  return (
    <>
      <PageHero
        eyebrow="Guides & resources"
        title="Phone farm hardware guides"
        description={`${sorted.length} articles on box selection, deployment, procurement, shipping, and B2B quoting — written for hardware buyers and ops teams.`}
        image={IMPORTED.homeHero}
        imageAlt="Phone farm deployment guides"
        theme="light"
      />

      <Section variant="muted">
        <SectionHeader
          eyebrow="Latest"
          title="Recently published"
          description="Newest guides first — RFQ checklists, hub sizing, export shipping, and platform-specific hardware planning."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sorted.slice(0, 6).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>

      {BLOG_CATEGORIES.map((cat, i) => {
        const posts = getBlogPostsByCategory(cat).sort((a, b) => b.date.localeCompare(a.date));
        if (posts.length === 0) return null;
        return (
          <Section key={cat} variant={i % 2 === 1 ? "muted" : "default"}>
            <SectionHeader eyebrow={`${posts.length} articles`} title={cat} align="left" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </Section>
        );
      })}

      <Section>
        <div className="text-center max-w-xl mx-auto">
          <p className="text-[var(--text-secondary)] mb-6">
            Need a written BOM and lead time for your project? Send an RFQ — we reply on business days.
          </p>
          <Link href="/contact" className="btn-primary px-8">
            Request hardware quote
          </Link>
        </div>
      </Section>
    </>
  );
}

function BlogCard({
  post,
}: {
  post: {
    slug: string;
    category: string;
    date: string;
    title: string;
    excerpt: string;
  };
}) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
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
  );
}
