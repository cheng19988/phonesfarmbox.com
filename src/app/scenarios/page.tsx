import Link from "next/link";
import { SCENARIOS } from "@/data/scenarios";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/config";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

export const metadata = buildMetadata({
  title: "Platform Scenarios — TikTok, YouTube, Facebook & More",
  description: "Real-device phone farm scenarios for TikTok, YouTube, Facebook, Instagram, Telegram, and WhatsApp multi-device management.",
  path: "/scenarios",
});

export default function ScenariosIndexPage() {
  return (
    <div className="section">
      <div className="container-wide">
        <h1 className="section-title">Platform Scenarios</h1>
        <p className="section-subtitle">
          Real-device phone farm box solutions for major social, video, and messaging platforms — converted from multi-account cloud phone scenarios to physical hardware deployment.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCENARIOS.map((s) => (
            <Link key={s.slug} href={`/scenarios/${s.slug}`} className="card overflow-hidden hover:border-amber-800 transition-colors group">
              {s.heroImage && (
                <div className="relative aspect-video">
                  <Image src={s.heroImage} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
              )}
              <div className="p-6">
                <span className="text-xs text-amber-400">{s.category}</span>
                <h2 className="font-bold text-white mt-1 group-hover:text-amber-400 transition-colors">{s.title}</h2>
                <p className="text-sm text-slate-400 mt-2 line-clamp-2">{s.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
