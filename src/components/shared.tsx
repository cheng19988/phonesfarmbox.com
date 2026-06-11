import { CONTACT } from "@/lib/config";
import Link from "next/link";

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ContactBar({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${compact ? "text-xs" : "text-sm"} text-slate-600`}>
      <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-sky-700 transition-colors">
        Telegram {CONTACT.telegram}
      </a>
      <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">
        WhatsApp {CONTACT.whatsapp}
      </a>
      <a href={`mailto:${CONTACT.email}`} className="hover:text-orange-700 transition-colors">
        {CONTACT.email}
      </a>
    </div>
  );
}

export function ContactCTA({ title = "Request a Hardware Quote" }: { title?: string }) {
  return (
    <section className="rounded-2xl border-2 border-orange-200 bg-gradient-to-b from-white to-orange-50/40 p-8 md:p-12 shadow-sm">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 text-center tracking-tight">{title}</h2>
      <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-center leading-relaxed">
        Send device count, models, connection mode, voltage region, and shipping country. Written quote before assembly — lead time confirmed on quote.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/contact" className="btn-primary px-8">
          Contact Sales
        </Link>
        <Link href="/pricing" className="btn-secondary px-8">
          Quote &amp; delivery process
        </Link>
        <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="btn-outline px-8">
          Telegram
        </a>
      </div>
    </section>
  );
}

export function StockBadge({ stock }: { stock: number }) {
  if (stock <= 0) return <span className="badge-red">Out of Stock</span>;
  if (stock <= 5) return <span className="badge-yellow">Low Stock ({stock})</span>;
  return <span className="badge-green">In Stock ({stock})</span>;
}
