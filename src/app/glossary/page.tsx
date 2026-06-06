import Link from "next/link";
import { GLOSSARY_TERMS } from "@/data/glossary";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Phone Farm Box Glossary",
  description: "Phone farm hardware glossary — phone farm box, motherboard box, ADB, batch control, cooling, network setup, and related terms explained.",
  path: "/glossary",
});

export default function GlossaryIndexPage() {
  const sorted = [...GLOSSARY_TERMS].sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="section">
      <div className="container-wide max-w-4xl">
        <h1 className="section-title">Phone Farm Box Glossary</h1>
        <p className="section-subtitle">
          Technical terms for phone farm box hardware, accessories, network setup, remote control, and deployment — your reference for real-device phone farm operations.
        </p>
        <div className="space-y-4">
          {sorted.map((t) => (
            <Link key={t.slug} href={`/glossary/${t.slug}`} className="card p-5 block hover:border-amber-800 transition-colors group">
              <h2 className="font-bold text-white group-hover:text-amber-400 transition-colors">{t.term}</h2>
              <p className="text-sm text-slate-400 mt-1">{t.shortDef}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
