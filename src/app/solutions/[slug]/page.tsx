import { notFound } from "next/navigation";
import { SOLUTION_PAGES, getSolutionPage } from "@/data/solutions-pages";
import { getScenario } from "@/data/scenarios";
import { ContentPageLayout, buildContentMetadata } from "@/components/content-page";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SOLUTION_PAGES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getSolutionPage(slug);
  if (!page) return {};
  return buildContentMetadata(page, `/solutions/${slug}`);
}

function relatedHref(slug: string) {
  if (getScenario(slug)) return `/scenarios/${slug}`;
  if (getSolutionPage(slug)) return `/solutions/${slug}`;
  return `/features/${slug}`;
}

function relatedTitle(slug: string) {
  return getScenario(slug)?.title.split(" with")[0] ?? getSolutionPage(slug)?.title ?? slug;
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const page = getSolutionPage(slug);
  if (!page) notFound();

  return (
    <ContentPageLayout
      page={page}
      basePath="/solutions"
      baseLabel="Solutions"
      getRelatedHref={relatedHref}
      getRelatedTitle={relatedTitle}
    />
  );
}
