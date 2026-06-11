import { notFound } from "next/navigation";
import Link from "next/link";
import { HELP_ARTICLES, getHelpArticle } from "@/data/help";
import { ContactCTA } from "@/components/shared";
import { buildMetadata, breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/shared";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return HELP_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getHelpArticle(slug);
  if (!article) return {};
  return buildMetadata({ title: article.title, description: article.summary, path: `/help/${slug}` });
}

export default async function HelpArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getHelpArticle(slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Help Center", path: "/help" },
            { name: article.title, path: `/help/${slug}` },
          ]),
          articleJsonLd({
            title: article.title,
            description: article.summary,
            path: `/help/${slug}`,
          }),
        ]}
      />
      <div className="section">
        <div className="container-wide max-w-3xl">
          <Link href="/help" className="text-sm text-orange-700 font-medium hover:underline mb-4 inline-block">
            ← Help Center
          </Link>
          <span className="block text-xs text-slate-500 mb-2">{article.category}</span>
          <h1 className="section-title">{article.title}</h1>
          <div className="prose-content whitespace-pre-line">{article.content}</div>
        </div>
      </div>
      <section className="section bg-slate-50 border-t border-slate-200">
        <div className="container-wide">
          <ContactCTA title="Need More Help?" />
        </div>
      </section>
    </>
  );
}
