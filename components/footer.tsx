"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Logo } from "@/components/logo"
import { siteConfig } from "@/lib/site-config"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo inverted />
            </Link>
            <p className="text-sm leading-relaxed text-white/70">
              {t.footer.description}
            </p>
            <div className="inline-flex w-fit rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
              {t.ui.tradeHub}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              {t.footer.quickLinks}
            </h3>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: t.nav.home },
                { href: "/products", label: t.nav.products },
                { href: "/store", label: t.nav.store },
                { href: "/request", label: t.nav.request },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Button
              asChild
              size="sm"
              className="mt-2 w-fit rounded-full bg-gold px-4 text-xs font-semibold text-navy hover:bg-gold/90"
            >
              <Link href="/request">{t.footer.sellers}</Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              {t.footer.contactInfo}
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div className="text-sm text-white/70">
                  <p>{t.footer.address}</p>
                  <p>{t.footer.city}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <span className="text-sm text-white/70">{t.footer.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <span className="text-sm text-white/70">{t.footer.email}</span>
              </div>
            </div>
          </div>

          {/* Sellers CTA */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              {t.footer.sellersInfoTitle}
            </h3>
            <p className="text-sm text-white/70">{t.footer.sellersInfoDesc}</p>
            <div className="rounded-2xl border border-gold/30 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gold/90">{t.footer.sellers}</p>
              <p className="mt-2 text-sm text-white/75">{t.footer.sellersCardText}</p>
              <Button
                asChild
                className="mt-4 w-full rounded-xl bg-gold text-sm font-semibold text-navy shadow-lg shadow-gold/20 hover:bg-gold/90"
              >
                <Link href="/request">
                  {t.footer.sellersButton}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-center gap-2 border-t border-white/10 pt-8 text-center">
          <div className="text-center">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
            </p>
            <a
              href="https://www.codifikai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-sm text-white/60 transition-colors hover:text-gold"
            >
              {t.footer.developedBy} codifikai.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
