import Link from "next/link";
import { CONTACT, FOOTER_LINKS, NAV, SITE } from "@/lib/config";
import { getSession } from "@/lib/auth";

export async function Header() {
  const session = await getSession();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="container-wide flex items-center justify-between gap-6 h-[72px]">
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-700 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-amber-950/30">
            PFB
          </div>
          <div>
            <div className="font-bold text-slate-900 leading-tight tracking-tight group-hover:text-orange-700 transition-colors">
              {SITE.name}
            </div>
            <div className="text-[11px] text-[var(--text-muted)] leading-tight hidden sm:block">
              B2B phone farm hardware
            </div>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 rounded-lg text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
            Get Quote
          </Link>
          {session && (
            <Link
              href={session.role === "admin" ? "/admin" : "/account/orders"}
              className="hidden lg:inline text-xs text-slate-500 hover:text-slate-900 px-2"
            >
              Account
            </Link>
          )}
        </div>
      </div>

      <nav className="xl:hidden border-t border-[var(--border-subtle)] container-wide py-2.5 flex gap-2 overflow-x-auto text-sm">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap px-3 py-1.5 rounded-full text-slate-600 hover:text-slate-900 bg-slate-100"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--surface-muted)] mt-auto">
      <div className="container-wide py-16 grid md:grid-cols-2 lg:grid-cols-6 gap-10">
        <div className="lg:col-span-2">
          <div className="font-bold text-slate-900 text-xl mb-3 tracking-tight">{SITE.name}</div>
          <p className="text-[var(--text-secondary)] text-sm mb-6 max-w-md leading-relaxed">{SITE.description}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--text-secondary)]">
            <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-orange-700 transition-colors">
              Telegram {CONTACT.telegram}
            </a>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-orange-700 transition-colors">
              WhatsApp {CONTACT.whatsapp}
            </a>
            <a
              href={CONTACT.emailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-700 transition-colors"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">Solutions</h3>
          <ul className="space-y-2.5 text-sm text-[var(--text-secondary)]">
            {FOOTER_LINKS.solutions.slice(0, 6).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-slate-900 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">Scenarios</h3>
          <ul className="space-y-2.5 text-sm text-[var(--text-secondary)]">
            {FOOTER_LINKS.scenarios.slice(0, 6).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-slate-900 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">Resources</h3>
          <ul className="space-y-2.5 text-sm text-[var(--text-secondary)]">
            {FOOTER_LINKS.resources.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-slate-900 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/products" className="hover:text-slate-900 transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-slate-900 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-[var(--text-muted)]">
                Order login
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">Legal</h3>
          <ul className="space-y-2.5 text-sm text-[var(--text-secondary)]">
            <li>
              <Link href="/privacy" className="hover:text-slate-900">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-slate-900">
                Cookies
              </Link>
            </li>
            <li>
              <Link href="/refund" className="hover:text-slate-900">
                Refund
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-slate-900">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--border-subtle)] py-5 text-center text-xs text-[var(--text-muted)]">
        © {new Date().getFullYear()} {SITE.name} · {SITE.location}
      </div>
    </footer>
  );
}
