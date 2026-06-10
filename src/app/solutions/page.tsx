import Link from "next/link";
import Image from "next/image";
import { SOLUTION_PAGES } from "@/data/solutions-pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Phone Farm Box Solutions",
  description: "Solutions for social media marketing, e-commerce, app QA, cross-border marketing, and affiliate operations on real-device phone farm hardware.",
  path: "/solutions",
});

export default function SolutionsIndexPage() {
  return (
    <div className="section">
      <div className="container-wide">
        <h1 className="section-title">Phone Farm Box Solutions</h1>
        <p className="section-subtitle">
          How marketing teams, QA labs, e-commerce operators, and enterprise clients deploy phone farm box hardware from our Guangzhou factory.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTION_PAGES.map((s) => (
            <Link key={s.slug} href={`/solutions/${s.slug}`} className="card overflow-hidden hover:border-amber-800 transition-colors group">
              {s.heroImage && (
                <div className="relative aspect-video">
                  <Image src={s.heroImage} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
              )}
              <div className="p-6">
                <span className="text-xs text-amber-400">{s.category}</span>
                <h2 className="font-bold text-slate-900 mt-1 group-hover:text-orange-700 transition-colors">{s.title}</h2>
                <p className="text-sm text-slate-400 mt-2 line-clamp-2">{s.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
