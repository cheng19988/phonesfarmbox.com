import Image from "next/image";
import Link from "next/link";
import type { ProductModelEntry, SpecSlide } from "@/data/product-model-catalog";
import { SectionHeader } from "@/components/ui/section";

type Props = {
  models: ProductModelEntry[];
  specSlides?: SpecSlide[];
  title?: string;
  description?: string;
};

function ModelCard({ model }: { model: ProductModelEntry }) {
  const img = model.images.main || model.images.gallery[0];
  if (!img) return null;

  const specs = [
    model.ram && model.storage ? `${model.ram} RAM · ${model.storage} storage` : model.ram || model.storage,
    model.connection,
    model.variant,
    model.board,
  ].filter(Boolean);

  return (
    <div className="h-full flex flex-col overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-card)] transition-colors hover:border-[var(--border-accent)]">
      <div className="relative aspect-[4/3] bg-[var(--surface-elevated)]">
        <Image src={img} alt={model.modelName} fill className="object-contain p-2" sizes="(max-width:768px) 50vw, 25vw" />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-white text-sm leading-snug mb-2">{model.modelName}</h3>
        <ul className="space-y-1 text-xs text-[var(--text-secondary)] flex-1">
          {specs.map((s) => (
            <li key={s} className="flex gap-1.5">
              <span className="text-[var(--accent)] shrink-0">•</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
        <Link
          href={`/contact?product=phone-farm-box&interest=${model.id}`}
          className="mt-3 text-xs text-amber-400 hover:text-amber-300 font-medium"
        >
          Quote this model →
        </Link>
      </div>
    </div>
  );
}

export function ProductModelGallery({ models, specSlides = [], title, description }: Props) {
  if (models.length === 0) return null;

  return (
    <section className="mb-16">
      <SectionHeader
        eyebrow="Reference catalog"
        title={title ?? "Box configurations by phone model"}
        description={
          description ??
          "Real product detail images from our asset library — model, ROM variant, and connection mode labeled per configuration. Slot count and final BOM confirmed on written quote."
        }
        className="mb-10"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {models.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>

      {specSlides.length > 0 && (
        <div className="mt-16">
          <SectionHeader
            eyebrow="Parameters"
            title="Specification reference slides"
            description="Detailed parameter sheets from our product library — exact counts for your order confirmed on proforma invoice."
            className="mb-8"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {specSlides.map((slide) => (
              <div
                key={slide.src}
                className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface-elevated)]"
              >
                <Image src={slide.src} alt={slide.label} fill className="object-contain p-1" sizes="20vw" />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export function MotherboardModelGallery({ images }: { images: string[] }) {
  if (images.length === 0) return null;

  return (
    <section className="mb-16">
      <SectionHeader
        eyebrow="Reference catalog"
        title="Motherboard rack configurations"
        description="White-background chassis references — board footprint and slot layout confirmed before quote."
        className="mb-8"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src) => (
          <div key={src} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[var(--border-subtle)]">
            <Image src={src} alt="Motherboard box reference" fill className="object-cover" sizes="25vw" />
          </div>
        ))}
      </div>
    </section>
  );
}
