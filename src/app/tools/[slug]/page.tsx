import { notFound } from "next/navigation";
import Link from "next/link";
import { PLANNING_TOOLS, getPlanningTool } from "@/data/tools";
import { ContactCTA } from "@/components/shared";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/shared";
import {
  BulkQuoteChecklist,
  CapacityEstimator,
  PowerEstimator,
  UsbPortCalculator,
} from "@/components/planning-tools";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PLANNING_TOOLS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const tool = getPlanningTool(slug);
  if (!tool) return {};
  return buildMetadata({ title: tool.title, description: tool.description, path: `/tools/${slug}` });
}

function InteractiveTool({ type }: { type: NonNullable<ReturnType<typeof getPlanningTool>>["interactive"] }) {
  switch (type) {
    case "capacity":
      return <CapacityEstimator />;
    case "power":
      return <PowerEstimator />;
    case "usb":
      return <UsbPortCalculator />;
    case "checklist":
      return <BulkQuoteChecklist />;
    default:
      return null;
  }
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getPlanningTool(slug);
  if (!tool) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Planning Tools", path: "/tools" },
          { name: tool.title, path: `/tools/${slug}` },
        ])}
      />
      <div className="section">
        <div className="container-wide max-w-3xl">
          <Link href="/tools" className="text-sm text-amber-400 hover:text-amber-300 mb-4 inline-block">← Planning Tools</Link>
          <h1 className="section-title">{tool.title}</h1>
          <p className="text-slate-400 mb-8">{tool.description}</p>
          {tool.interactive ? (
            <InteractiveTool type={tool.interactive} />
          ) : (
            <div className="prose-content whitespace-pre-line text-slate-300">{tool.content}</div>
          )}
        </div>
      </div>
      <section className="section bg-slate-900/30">
        <div className="container-wide">
          <ContactCTA title="Send your plan for a hardware quote" />
        </div>
      </section>
    </>
  );
}
