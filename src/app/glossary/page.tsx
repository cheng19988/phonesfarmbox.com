import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { GLOSSARY_TERMS } from "@/data/glossary";
import { IMPORTED } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Phone Farm Box Glossary",
  description:
    "Phone farm hardware glossary — phone farm box, motherboard box, ADB, batch control, cooling, network setup, and related terms explained.",
  path: "/glossary",
});

export default function GlossaryIndexPage() {
  const sorted = [...GLOSSARY_TERMS].sort((a, b) => a.term.localeCompare(b.term));

  return (
    <>
      <PageHero
        eyebrow="Reference"
        title="Phone Farm Box Glossary"
        description="Technical terms for phone farm hardware, accessories, network setup, remote control, and deployment — your A–Z reference for real-device operations."
        image={IMPORTED.pageHero}
        imageAlt="Phone farm glossary"
        theme="light"
      />

      <Section>
        <div className="max-w-4xl mx-auto space-y-3">
          {sorted.map((t) => (
            <Link key={t.slug} href={`/glossary/${t.slug}`} className="group block">
              <Surface padding="md" hover className="border-slate-200 shadow-sm hover:border-orange-300">
                <h2 className="font-bold text-slate-900 group-hover:text-orange-700 transition-colors">{t.term}</h2>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">{t.shortDef}</p>
              </Surface>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
