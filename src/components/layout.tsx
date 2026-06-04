import Link from "next/link";
import { CONTACT, FOOTER_LINKS, NAV, SITE } from "@/lib/config";
import { ContactBar } from "./shared";
import { getSession } from "@/lib/auth";

export async function Header() {
  const session = await getSession();

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
      <div className="hidden md:block bg-slate-900/80 border-b border-slate-800">
        <div className="container-wide py-2 flex justify-between items-center text-xs text-slate-400">
          <span>📍 {SITE.location} · Phone Farm Box Hardware Since {SITE.since}</span>
          <ContactBar compact />
        </div>
      </div>
      <div className="container-wide py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-xs">
            PFB
          </div>
          <div>
            <div className="font-bold text-white leading-tight">{SITE.name}</div>
            <div className="text-[10px] text-amber-400 leading-tight hidden sm:block max-w-[180px] truncate">{SITE.tagline}</div>
          </div>
        </Link>
        <nav className="hidden xl:flex items-center gap-5">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
              {item.label}
            </Link>
          ))}
          <Link href="/products" className="text-sm text-slate-300 hover:text-white">Shop</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden sm:inline-flex btn-primary text-sm py-2 px-4">
            Get Quote
          </Link>
          {session ? (
            <Link href={session.role === "admin" ? "/admin" : "/account/orders"} className="text-sm text-slate-300 hover:text-white">
              Account
            </Link>
          ) : (
            <Link href="/login" className="text-sm text-slate-300 hover:text-white">
              Login
            </Link>
          )}
        </div>
      </div>
      <nav className="xl:hidden container-wide pb-3 flex gap-4 overflow-x-auto text-sm">
        {[...NAV, { href: "/products", label: "Shop" }].map((item) => (
          <Link key={item.href} href={item.href} className="text-slate-400 hover:text-white whitespace-nowrap">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-auto">
      <div className="container-wide py-12 grid md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <div className="font-bold text-white text-lg mb-2">{SITE.name}</div>
          <p className="text-slate-400 text-sm mb-4 max-w-md">{SITE.description}</p>
          <ContactBar />
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3">Solutions</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            {FOOTER_LINKS.solutions.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3">Scenarios</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            {FOOTER_LINKS.scenarios.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            {FOOTER_LINKS.resources.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>
            ))}
            <li><Link href="/products" className="hover:text-white">Products / Shop</Link></li>
            <li><Link href="/services" className="hover:text-white">Deployment Services</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/refund" className="hover:text-white">Refund Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {SITE.name} · {SITE.location} · {CONTACT.email}
      </div>
    </footer>
  );
}
