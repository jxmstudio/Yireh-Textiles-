import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { areas, services, site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-950 text-navy-100">
      <div className="h-px bg-gold-500" aria-hidden />
      <div className="weave-texture-light absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + contact */}
          <div className="lg:col-span-1">
            <Logo tone="onDark" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-100/75">
              Curtains, blinds, upholstery and soft furnishings, manufactured in
              our own Penrith workroom and delivered across Sydney for more than
              ten years.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href={site.phone.href}
                  className="flex items-start gap-2.5 transition-colors hover:text-gold-300"
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
                  <span className="font-semibold">{site.phone.display}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-2.5 break-all transition-colors hover:text-gold-300"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-navy-100/75">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
                <span>
                  {site.address.suburb}, {site.address.region}
                  <br />
                  {site.address.state} {site.address.postcode}
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-navy-100/75">
                <Clock className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
                <span>{site.hours.display}</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <nav aria-labelledby="footer-services">
            <h2
              id="footer-services"
              className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold-400"
            >
              Services
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-navy-100/75 transition-colors hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Areas */}
          <nav aria-labelledby="footer-areas">
            <h2
              id="footer-areas"
              className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold-400"
            >
              Areas We Serve
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm lg:grid-cols-1">
              {areas.slice(0, 8).map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas-we-serve/${a.slug}`}
                    className="text-navy-100/75 transition-colors hover:text-white"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas-we-serve"
                  className="font-semibold text-gold-300 transition-colors hover:text-gold-200"
                >
                  All Sydney areas →
                </Link>
              </li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-labelledby="footer-company">
            <h2
              id="footer-company"
              className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold-400"
            >
              Company
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-navy-100/75 transition-colors hover:text-white"
                >
                  About Yireh Textiles
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-navy-100/75 transition-colors hover:text-white"
                >
                  What We Make
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-navy-100/75 transition-colors hover:text-white"
                >
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-navy-100/75 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>

            <div className="mt-7 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-400">
                Trade enquiries
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy-100/75">
                Need workroom capacity or a production partner? Call us and ask
                for a trade quote.
              </p>
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-navy-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>
            Custom curtains, blinds, upholstery and soft furnishings ·{" "}
            {site.address.suburb}, {site.address.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
