import { notFound } from "next/navigation";
import Link from "next/link";
import { FREE_TOOLS, getFreeTool } from "@/data/tools";
import { ContactCTA } from "@/components/shared";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/shared";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return FREE_TOOLS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const tool = getFreeTool(slug);
  if (!tool) return {};
  return buildMetadata({ title: tool.title, description: tool.description, path: `/tools/${slug}` });
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getFreeTool(slug);
  if (!tool) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Free Tools", path: "/tools" },
          { name: tool.title, path: `/tools/${slug}` },
        ])}
      />
      <div className="section">
        <div className="container-wide max-w-3xl">
          <Link href="/tools" className="text-sm text-amber-400 hover:text-amber-300 mb-4 inline-block">← Free Tools</Link>
          <h1 className="section-title">{tool.title}</h1>
          <p className="text-slate-400 mb-6">{tool.description}</p>
          <div className="prose-content whitespace-pre-line">{tool.content}</div>
        </div>
      </div>
      <section className="section bg-slate-900/50">
        <div className="container-wide">
          <ContactCTA title="Ready to Deploy Your Phone Farm Box?" />
        </div>
      </section>
    </>
  );
}
