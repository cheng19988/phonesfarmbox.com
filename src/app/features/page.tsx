import Link from "next/link";
import Image from "next/image";
import { FEATURE_PAGES } from "@/data/features-pages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Phone Farm Box Features",
  description: "Device operation workflows, network setup, team device management, remote control integration, ADB automation, and bulk APK deployment for real-device phone farms.",
  path: "/features",
});

export default function FeaturesIndexPage() {
  return (
    <div className="section">
      <div className="container-wide">
        <h1 className="section-title">Phone Farm Box Features</h1>
        <p className="section-subtitle">
          Device workflows, network planning, team access, remote control integration, and batch automation — documented for physical phone farm hardware.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURE_PAGES.map((f) => (
            <Link key={f.slug} href={`/features/${f.slug}`} className="card overflow-hidden hover:border-amber-800 transition-colors group">
              {f.heroImage && (
                <div className="relative aspect-video">
                  <Image src={f.heroImage} alt={f.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
              )}
              <div className="p-6">
                <span className="text-xs text-amber-400">{f.category}</span>
                <h2 className="font-bold text-white mt-1 group-hover:text-amber-400 transition-colors">{f.title}</h2>
                <p className="text-sm text-slate-400 mt-2 line-clamp-2">{f.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
