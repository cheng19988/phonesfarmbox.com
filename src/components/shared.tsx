import { CONTACT } from "@/lib/config";
import Link from "next/link";
import { QuoteProcessSection } from "@/components/quote-process-section";
import { DeliveryProcessSection } from "@/components/delivery-process-section";

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
    <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 md:p-12">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">{title}</h2>
      <p className="text-slate-400 mb-6 max-w-2xl mx-auto text-center">
        Send device count, models, connection mode, voltage region, and shipping country. Written quote before assembly — lead time confirmed on quote.
      </p>
      <div className="max-w-2xl mx-auto mb-6">
        <QuoteProcessSection variant="compact" title="Quote process at a glance" />
      </div>
      <div className="max-w-2xl mx-auto mb-6">
        <DeliveryProcessSection variant="compact" title="Delivery after payment" />
      </div>
      <div className="text-center">
        <ContactBar />
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn-primary">Contact Sales</Link>
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            WhatsApp Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}

export function MobileContactBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-slate-950/95 border-t border-slate-800 backdrop-blur-sm">
      <div className="grid grid-cols-4 divide-x divide-slate-800">
        <a href={`tel:${CONTACT.phone}`} className="flex flex-col items-center py-3 text-xs text-slate-300 hover:text-white">
          <span className="text-base mb-0.5">📞</span> Call
        </a>
        <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center py-3 text-xs text-slate-300 hover:text-green-400">
          <span className="text-base mb-0.5">💬</span> WhatsApp
        </a>
        <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center py-3 text-xs text-slate-300 hover:text-blue-400">
          <span className="text-base mb-0.5">✈️</span> Telegram
        </a>
        <a href="/contact" className="flex flex-col items-center py-3 text-xs text-amber-400 hover:text-amber-300">
          <span className="text-base mb-0.5">📋</span> Quote
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
