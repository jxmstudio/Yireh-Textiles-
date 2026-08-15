import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FooterWordmark } from "@/components/brand/wordmark";
import { areas, services, site } from "@/lib/site";

/**
 * Footer (plan §3.11). Oversized wordmark as a graphic element, four columns,
 * suburb list for local SEO, gold 1px top rule.
 */

const company = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/areas-we-serve", label: "Areas we serve" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--gold-500)] bg-ink text-linen">
      <div className="mx-auto max-w-[1600px] px-5 pt-24 sm:px-8 lg:px-12 lg:pt-32">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <h2 className="eyebrow eyebrow-on-dark">Products</h2>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-linen/70 transition-colors hover:text-linen"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow eyebrow-on-dark">Company</h2>
            <ul className="mt-5 space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-linen/70 transition-colors hover:text-linen"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow eyebrow-on-dark">Contact</h2>
            <ul className="mt-5 space-y-4 text-sm text-linen/70">
              <li>
                <a
                  href={site.phone.href}
                  className="flex items-center gap-2.5 transition-colors hover:text-linen"
                >
                  <Phone className="size-4 text-[var(--gold-500)]" aria-hidden />
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-linen"
                >
                  <Mail className="size-4 text-[var(--gold-500)]" aria-hidden />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-[var(--gold-500)]"
                  aria-hidden
                />
                <span>
                  {site.address.suburb}, {site.address.region}
                  <br />
                  Serving all of Sydney
                </span>
              </li>
              <li className="pt-1">{site.hours.display}</li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow eyebrow-on-dark">Areas we serve</h2>
            <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas-we-serve/${a.slug}`}
                    className="text-sm text-linen/60 transition-colors hover:text-linen"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-linen/15 pt-8 text-xs text-linen/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>Custom curtains, blinds and soft furnishings · Penrith, NSW</p>
        </div>
      </div>

      {/*
        Oversized wordmark as a graphic element (plan §3.11). It sits in normal
        flow rather than absolutely positioned, so it can never be clipped by
        the footer edge or collide with the copyright row. Extra bottom padding
        below the `sm` breakpoint keeps it clear of the sticky mobile call bar.
      */}
      <div className="mx-auto max-w-[1600px] px-5 pt-14 pb-24 sm:px-8 sm:pb-8 lg:px-12">
        <FooterWordmark />
      </div>
    </footer>
  );
}
