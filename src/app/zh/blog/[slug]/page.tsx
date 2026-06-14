import Link from "next/link";
import { notFound } from "next/navigation";
import { getZhBlogPost, ZH_BLOG_SLUGS } from "@/i18n/zh/blog-posts";
import { ContactCTA, JsonLd } from "@/components/shared";
import { buildMetadata, breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ZH_BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getZhBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/zh/blog/${slug}`,
    locale: "zh",
  });
}

export default async function ZhBlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getZhBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "首页", path: "/zh" },
            { name: "指南", path: "/zh/blog" },
            { name: post.title, path: `/zh/blog/${slug}` },
          ]),
          articleJsonLd({
            title: post.title,
            description: post.excerpt,
            path: `/zh/blog/${slug}`,
            datePublished: post.date,
          }),
        ]}
      />
      <article className="section">
        <div className="container-wide max-w-3xl">
          <Link href="/zh/blog" className="text-orange-700 text-sm font-medium hover:underline">
            ← 返回指南列表
          </Link>
          <span className="block text-xs text-slate-500 mt-4">
            {post.category} · {post.date}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-8">{post.title}</h1>
          <div className="prose-content whitespace-pre-line">{post.content}</div>
          <p className="mt-8 text-sm text-[var(--text-muted)]">
            英文版：
            <Link href={`/blog/${slug}`} hrefLang="en" className="text-orange-700 hover:underline ml-1">
              Read in English
            </Link>
          </p>
          <div className="mt-8">
            <ContactCTA title="索取手机农场硬件报价" />
          </div>
        </div>
      </article>
    </>
  );
}
