import { notFound } from "next/navigation";
import { SERVICE_PAGES, getServicePage } from "@/data/services-pages";
import { FEATURE_PAGES } from "@/data/features-pages";
import { getHelpArticle } from "@/data/help";
import { ContentPageLayout, buildContentMetadata } from "@/components/content-page";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICE_PAGES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};
  return buildContentMetadata(page, `/services/${slug}`);
}

function relatedHref(slug: string) {
  if (getServicePage(slug)) return `/services/${slug}`;
  if (getHelpArticle(slug)) return `/help/${slug}`;
  if (FEATURE_PAGES.some((f) => f.slug === slug)) return `/features/${slug}`;
  return `/contact?service=${slug}`;
}

function relatedTitle(slug: string) {
  const svc = getServicePage(slug);
  if (svc) return svc.title;
  const help = getHelpArticle(slug);
  if (help) return help.title;
  const feat = FEATURE_PAGES.find((f) => f.slug === slug);
  if (feat) return feat.title;
  return slug.replace(/-/g, " ");
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  return (
    <ContentPageLayout
      page={page}
      basePath="/services"
      baseLabel="Services"
      variant="solution"
      contactQueryKey="service"
      getRelatedHref={relatedHref}
      getRelatedTitle={relatedTitle}
    />
  );
}
