import Image from "next/image";
import Link from "next/link";
import { PRODUCT_MODEL_CATALOG } from "@/data/product-model-catalog";

/** Compact model row for shop / catalog pages — real product photos on white. */
export function ProductModelStrip() {
  const models = PRODUCT_MODEL_CATALOG.filter((m) => m.images.main || m.images.gallery[0]).slice(0, 12);

  return (
    <div className="mb-14">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
        <div>
          <p className="eyebrow mb-2">Real product library</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Phone farm box by model</h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl">
            Samsung, OnePlus, Pixel, Z Flip, and more — ROM variant, RAM/storage, and USB·LAN·OTG from our supplier asset library.
          </p>
        </div>
        <Link href="/products/phone-farm-box" className="text-sm font-semibold text-orange-700 hover:text-orange-600">
          All models &amp; spec slides →
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
        {models.map((model) => {
          const img = model.images.main ?? model.images.gallery[0];
          if (!img) return null;
          const spec = [model.ram && model.storage ? `${model.ram}/${model.storage}` : null, model.connection].filter(Boolean).join(" · ");
          return (
            <Link
              key={model.id}
              href={`/products/phone-farm-box#model-${model.id}`}
              className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:border-orange-300 hover:shadow-md transition-all"
            >
              <div className="relative aspect-square bg-slate-50">
                <Image src={img} alt={model.modelName} fill className="object-contain p-2 group-hover:scale-[1.03] transition-transform" sizes="160px" />
              </div>
              <div className="p-2.5 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-900 leading-snug line-clamp-2">{model.modelName}</p>
                {spec && <p className="text-[10px] text-slate-500 mt-1 line-clamp-2">{spec}</p>}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
