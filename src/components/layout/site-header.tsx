"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { ChevronDown, Mail, Menu, Phone, MapPin } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/brand/logo";
import { ctaGold, ctaOutline } from "@/components/ui/cta";
import { cn } from "@/lib/utils";
import { nav, services, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);

  // Close any open menu once a navigation has been requested. Doing this in the
  // click handler rather than a pathname effect avoids a cascading render.
  const closeMenus = React.useCallback(() => {
    setOpen(false);
    setServicesOpen(false);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-navy-950 text-navy-100">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-4 text-xs sm:px-6 lg:px-8">
          <p className="hidden items-center gap-1.5 sm:flex">
            <MapPin className="size-3.5 text-gold-400" aria-hidden />
            Manufactured in Penrith · Serving all of Sydney
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="hidden items-center gap-1.5 transition-colors hover:text-gold-300 md:flex"
            >
              <Mail className="size-3.5 text-gold-400" aria-hidden />
              {site.email}
            </a>
            <span className="hidden text-navy-100/40 md:inline" aria-hidden>
              |
            </span>
            <a
              href={site.phone.href}
              className="flex items-center gap-1.5 font-semibold transition-colors hover:text-gold-300"
            >
              <Phone className="size-3.5 text-gold-400" aria-hidden />
              {site.phone.display}
            </a>
          </div>
        </div>
      </div>

      {/* Gold lining */}
      <div className="h-px bg-gold-500" aria-hidden />

      {/* Main bar */}
      <div className="border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label={`${site.name} home`} className="py-3">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Main"
            className="hidden items-center gap-1 lg:flex"
            onMouseLeave={() => setServicesOpen(false)}
          >
            {nav.map((item) =>
              item.href === "/services" ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                >
                  <Link
                    href={item.href}
                    aria-expanded={servicesOpen}
                    onFocus={() => setServicesOpen(true)}
                    className={cn(
                      "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "text-navy-900"
                        : "text-navy-900/70 hover:text-navy-900",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform",
                        servicesOpen && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </Link>
                  {servicesOpen && (
                    <div className="absolute left-1/2 top-full w-[26rem] -translate-x-1/2 pt-3">
                      <div className="overflow-hidden rounded-xl border border-border bg-white shadow-lg shadow-navy-950/10">
                        <div className="h-0.5 bg-gold-500" aria-hidden />
                        <ul className="p-2">
                          {services.map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={`/services/${s.slug}`}
                                onClick={closeMenus}
                                className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-sand"
                              >
                                <span className="block text-sm font-semibold text-navy-900">
                                  {s.name}
                                </span>
                                <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                                  {s.summary}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/services"
                          onClick={closeMenus}
                          className="block border-t border-border bg-sand px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-navy-900 transition-colors hover:text-gold-600"
                        >
                          View all services →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-navy-900"
                      : "text-navy-900/70 hover:text-navy-900",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2 lg:flex">
            <a href={site.phone.href} className={ctaOutline()}>
              <Phone aria-hidden />
              {site.phone.display}
            </a>
            <Link href="/contact" className={ctaGold()}>
              Get a Quote
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={site.phone.href}
              className={ctaGold("md", "px-4")}
              aria-label={`Call ${site.name} on ${site.phone.display}`}
            >
              <Phone aria-hidden />
              <span className="hidden sm:inline">Call</span>
            </a>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                aria-label="Open menu"
                className="inline-flex size-11 items-center justify-center rounded-lg border border-navy-200 text-navy-900 transition-colors hover:bg-navy-50"
              >
                <Menu className="size-5" aria-hidden />
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm p-0">
                <SheetHeader className="border-b border-border px-6 py-5">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <Logo />
                </SheetHeader>
                <div className="flex flex-col overflow-y-auto px-6 py-6">
                  <nav aria-label="Mobile" className="flex flex-col gap-1">
                    {nav.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenus}
                        className={cn(
                          "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                          isActive(item.href)
                            ? "bg-sand text-navy-900"
                            : "text-navy-900/80 hover:bg-sand",
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  <p className="mt-6 px-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
                    Our Services
                  </p>
                  <ul className="mt-2 flex flex-col gap-1">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          onClick={closeMenus}
                          className="block rounded-lg px-3 py-2.5 text-sm text-navy-900/75 transition-colors hover:bg-sand"
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-col gap-2">
                    <Link
                      href="/contact"
                      onClick={closeMenus}
                      className={ctaGold("lg", "w-full")}
                    >
                      Get a Free Quote
                    </Link>
                    <a
                      href={site.phone.href}
                      className={ctaOutline("lg", "w-full")}
                    >
                      <Phone aria-hidden />
                      {site.phone.display}
                    </a>
                    <p className="mt-2 text-center text-xs text-muted-foreground">
                      {site.hours.display}
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
