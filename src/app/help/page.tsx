import Link from "next/link";
import { HELP_ARTICLES, HELP_CATEGORIES } from "@/data/help";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Help Center — Phone Farm Box Hardware",
  description: "Phone farm hardware help center. Setup guides, network configuration, remote control software, device workflows, troubleshooting, and payment guides.",
  path: "/help",
});

export default function HelpIndexPage() {
  return (
    <div className="section">
      <div className="container-wide">
        <h1 className="section-title">Help Center</h1>
        <p className="section-subtitle">
          Documentation for setup, networking, remote control software, device workflows, and troubleshooting.
        </p>
        {HELP_CATEGORIES.map((cat) => {
          const articles = HELP_ARTICLES.filter((a) => a.category === cat);
          if (articles.length === 0) return null;
          return (
            <div key={cat} className="mb-12">
              <h2 className="text-xl font-bold text-slate-900 mb-4">{cat}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {articles.map((a) => (
                  <Link key={a.slug} href={`/help/${a.slug}`} className="card p-5 hover:border-amber-800 transition-colors group">
                    <h3 className="font-semibold text-slate-900 group-hover:text-orange-700 transition-colors">{a.title}</h3>
                    <p className="text-sm text-slate-400 mt-2">{a.summary}</p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
