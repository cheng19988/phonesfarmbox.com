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
    <div className={`flex flex-wrap items-center gap-3 ${compact ? "text-xs" : "text-sm"}`}>
      <a href={`tel:${CONTACT.phone}`} className="hover:text-amber-400 transition-colors">
        📞 {CONTACT.phone}
      </a>
      <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
        WhatsApp
      </a>
      <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
        Telegram
      </a>
      <a href={`mailto:${CONTACT.email}`} className="hover:text-amber-400 transition-colors">
        {CONTACT.email}
      </a>
    </div>
  );
}

export function ContactCTA({ title = "Request a Hardware Quote" }: { title?: string }) {
  return (
    <section className="rounded-2xl border border-[var(--border-accent)] bg-gradient-to-b from-[var(--surface-elevated)] to-[var(--surface-card)] p-8 md:p-12">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center tracking-tight">{title}</h2>
      <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto text-center leading-relaxed">
        Send device count, models, connection mode, voltage region, and shipping country. Written quote before assembly — lead time confirmed on quote.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/contact" className="btn-primary px-8">
          Contact Sales
        </Link>
        <Link href="/pricing" className="btn-secondary px-8">
          Quote &amp; delivery process
        </Link>
        <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-outline px-8">
          WhatsApp
        </a>
      </div>
    </section>
  );
}

export function MobileContactBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-[#060a12]/95 border-t border-[var(--border-subtle)] backdrop-blur-xl">
      <div className="grid grid-cols-4 divide-x divide-[var(--border-subtle)]">
        <a href={`tel:${CONTACT.phone}`} className="flex flex-col items-center py-3.5 text-[11px] font-medium text-[var(--text-secondary)] hover:text-white">
          Call
        </a>
        <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center py-3.5 text-[11px] font-medium text-[var(--text-secondary)] hover:text-amber-400">
          WhatsApp
        </a>
        <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center py-3.5 text-[11px] font-medium text-[var(--text-secondary)] hover:text-amber-400">
          Telegram
        </a>
        <a href="/contact" className="flex flex-col items-center py-3.5 text-[11px] font-semibold text-amber-400">
          Quote
        </a>
      </div>
    </div>
  );
}

export function StockBadge({ stock }: { stock: number }) {
  if (stock <= 0) return <span className="badge-red">Out of Stock</span>;
  if (stock <= 5) return <span className="badge-yellow">Low Stock ({stock})</span>;
  return <span className="badge-green">In Stock ({stock})</span>;
}
