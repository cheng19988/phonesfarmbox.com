import { notFound } from "next/navigation";
import { SCENARIOS, getScenario } from "@/data/scenarios";
import { SOLUTION_PAGES } from "@/data/solutions-pages";
import { ContentPageLayout, buildContentMetadata } from "@/components/content-page";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SCENARIOS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getScenario(slug);
  if (!page) return {};
  return buildContentMetadata(page, `/scenarios/${slug}`);
}

function relatedTitle(slug: string) {
  const scenario = getScenario(slug);
  if (scenario) return scenario.title.split(" with")[0];
  const solution = SOLUTION_PAGES.find((s) => s.slug === slug);
  return solution?.title ?? slug;
}

function relatedHref(slug: string) {
  if (getScenario(slug)) return `/scenarios/${slug}`;
  return `/solutions/${slug}`;
}

export default async function ScenarioPage({ params }: Props) {
  const { slug } = await params;
  const page = getScenario(slug);
  if (!page) notFound();

  return (
    <ContentPageLayout
      page={page}
      basePath="/scenarios"
      baseLabel="Scenarios"
      variant="scenario"
      getRelatedHref={relatedHref}
      getRelatedTitle={relatedTitle}
    />
  );
}
