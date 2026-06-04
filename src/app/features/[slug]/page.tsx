import { notFound } from "next/navigation";
import { FEATURE_PAGES, getFeaturePage } from "@/data/features-pages";
import { ContentPageLayout, buildContentMetadata } from "@/components/content-page";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return FEATURE_PAGES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getFeaturePage(slug);
  if (!page) return {};
  return buildContentMetadata(page, `/features/${slug}`);
}

export default async function FeaturePage({ params }: Props) {
  const { slug } = await params;
  const page = getFeaturePage(slug);
  if (!page) notFound();

  return (
    <ContentPageLayout
      page={page}
      basePath="/features"
      baseLabel="Features"
      getRelatedHref={(s) => `/features/${s}`}
      getRelatedTitle={(s) => getFeaturePage(s)?.title ?? s}
    />
  );
}
