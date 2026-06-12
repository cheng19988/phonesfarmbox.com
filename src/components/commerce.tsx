"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/config";
import { AvailabilityBadge } from "./shared";

type ProductCardProps = {
  slug: string;
  name: string;
  shortDesc: string;
  priceUsd: number;
  stock: number;
  imageCard: string;
  category: string;
};

const CARD_FALLBACK = "/images/products/models/s21-fe-main-product-box-phone-farm-s21-fe-6-128gb-usb-lan-ot.webp";

export function ProductCard({ slug, name, shortDesc, priceUsd, stock, imageCard, category }: ProductCardProps) {
  const waText = encodeURIComponent(`Hi, I'd like a quote for ${name} (${slug}). Device count: `);
  const imgSrc = imageCard?.trim() || CARD_FALLBACK;
  return (
    <article className="card group flex flex-col h-full">
      <Link href={`/products/${slug}`} className="block relative aspect-[4/5] overflow-hidden bg-white">
        <Image
          src={imgSrc}
          alt={name}
          fill
          className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-500"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider bg-white/95 text-orange-800 px-2.5 py-1 rounded-md border border-orange-200 shadow-sm">
          {category}
        </span>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white/95 to-transparent">
          <h3 className="font-semibold text-slate-900 text-lg group-hover:text-orange-700 transition-colors">{name}</h3>
          <p className="text-lg font-bold text-slate-900 mt-0.5">
            From ${priceUsd.toLocaleString()}
            <span className="text-xs font-normal text-slate-500 ml-1">· confirm on quote</span>
          </p>
        </div>
      </Link>
      <div className="p-5 flex flex-col flex-1 border-t border-slate-100">
        <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2 flex-1 leading-relaxed">{shortDesc}</p>
        <div className="flex items-center justify-between mb-4">
          <AvailabilityBadge stock={stock} />
          <Link href={`/products/${slug}`} className="text-xs text-orange-700 hover:text-orange-600 font-medium">
            Specs →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Link href={`/contact?product=${slug}`} className="btn-primary text-center text-sm py-2.5">
            Get Quote
          </Link>
          <a
            href={`${CONTACT.whatsappUrl}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-center text-sm py-2.5"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

export function FAQAccordion({ items }: { items: { question: string; answer: ReactNode }[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.question} className="card p-5 group open:border-[var(--border-accent)]">
          <summary className="font-medium text-slate-900 cursor-pointer list-none flex justify-between items-center gap-4">
            {item.question}
            <span className="text-orange-600 group-open:rotate-45 transition-transform text-xl shrink-0">+</span>
          </summary>
          <div className="mt-4 text-[var(--text-secondary)] text-sm leading-relaxed border-t border-slate-100 pt-4">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}

export function BuyButtons({ slug, name, stock }: { slug: string; name: string; stock: number }) {
  const disabled = stock <= 0;
  const waText = encodeURIComponent(`Hi, I'd like a hardware quote for ${name}. Qty / device count: `);
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <Link href={`/contact?product=${slug}`} className="btn-primary">
          Get Written Quote
        </Link>
        <a href={`${CONTACT.whatsappUrl}?text=${waText}`} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          WhatsApp
        </a>
        <Link href={`/contact?product=${slug}&type=bulk`} className="btn-outline">
          Bulk / Project RFQ
        </Link>
      </div>
      <details className="rounded-lg border border-slate-200 bg-slate-50/80 text-sm">
        <summary className="cursor-pointer px-4 py-3 font-medium text-slate-700 select-none">
          Sample order (USDT) — optional catalog checkout
        </summary>
        <div className="px-4 pb-4 pt-1 space-y-3 border-t border-slate-200">
          <p className="text-[var(--text-secondary)] text-xs leading-relaxed">
            For MOQ-1 when you already know the SKU. Payment manually confirmed after you send tx hash.{" "}
            <Link href="/sample-order" className="link-accent">Full steps →</Link>
          </p>
          <form action="/api/orders" method="POST" className="inline">
            <input type="hidden" name="productSlug" value={slug} />
            <input type="hidden" name="action" value="buy" />
            <button type="submit" disabled={disabled} className="btn-outline text-sm py-2 disabled:opacity-40">
              Checkout with USDT
            </button>
          </form>
        </div>
      </details>
    </div>
  );
}
