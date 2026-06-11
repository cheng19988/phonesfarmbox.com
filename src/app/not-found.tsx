import Link from "next/link";
import { CONTACT, SITE } from "@/lib/config";

export default function NotFound() {
  return (
    <div className="section flex-1 flex items-center">
      <div className="container-wide max-w-xl text-center mx-auto">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-700 mb-3">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">Page not found</h1>
        <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
          This URL is not on {SITE.name}. Try the product catalog, help center, or send us an RFQ — we reply on business days.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
          <Link href="/products" className="btn-primary px-7">
            Browse products
          </Link>
          <Link href="/contact" className="btn-secondary px-7">
            Request quote
          </Link>
          <Link href="/" className="btn-outline px-7">
            Back to home
          </Link>
        </div>
        <p className="text-sm text-[var(--text-muted)] mt-10">
          Need help?{" "}
          <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-orange-700 hover:underline">
            Telegram
          </a>
          {" · "}
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-orange-700 hover:underline">
            WhatsApp
          </a>
        </p>
      </div>
    </div>
  );
}
