"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { ChevronDown, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLockup } from "@/components/brand/wordmark";
import { cn } from "@/lib/utils";
import { nav, services, site } from "@/lib/site";

/**
 * Nav (plan §2.6): transparent over the hero, then solid linen with a 1px gold
 * bottom rule after 80px of scroll. The lockup is ≥40px tall throughout.
 *
 * Only the homepage has a full-bleed hero for the nav to sit over, so every
 * other route starts solid.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const servicesRef = React.useRef<HTMLDivElement>(null);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const overlayCapable = pathname === "/";

  // The Services menu closes when the route changes, when focus/pointer leave
  // it, on Escape, and on any click outside. Route changes are handled with
  // the render-time state adjustment React recommends over an effect.
  const [menuPathname, setMenuPathname] = React.useState(pathname);
  if (menuPathname !== pathname) {
    setMenuPathname(pathname);
    setServicesOpen(false);
  }

  React.useEffect(() => {
    if (!servicesOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  const holdServicesOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const releaseServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 160);
  };

  React.useEffect(() => {
    if (!overlayCapable) return;
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlayCapable]);

  const transparent = overlayCapable && !scrolled;
  const tone = transparent ? "onDark" : "onLight";

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "inset-x-0 top-0 z-50 transition-colors duration-500",
        // Only the homepage hero is full-bleed behind the nav. Everywhere else
        // the header stays in normal flow so page content is not clipped.
        overlayCapable ? "fixed" : "sticky",
        transparent
          ? "bg-transparent"
          : "border-b border-dashed border-[var(--gold-500)]/70 bg-linen/95 backdrop-blur supports-[backdrop-filter]:bg-linen/85",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label={`${site.name} home`} className="py-2">
          <NavLockup tone={tone} />
        </Link>

        {/*
          Nav as an atelier would set it: small caps, wide tracking, and a
          running-stitch underline (dashed gold) that sews itself in on hover
          and stays put on the active page. No icons anywhere in this row.
        */}
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav
            .filter((item) => item.href !== "/")
            .map((item) =>
              item.href === "/services" ? (
                /*
                  Services opens a menu rather than navigating, so every
                  service is one click away instead of a scroll down the
                  listing page. The listing stays reachable from the last row.
                */
                <div
                  key={item.href}
                  ref={servicesRef}
                  className="relative"
                  onMouseEnter={holdServicesOpen}
                  onMouseLeave={releaseServices}
                >
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    onClick={() => setServicesOpen((v) => !v)}
                    className={cn(
                      "group relative flex items-center gap-1 pb-1 text-[0.72rem] font-medium tracking-[0.18em] uppercase transition-colors",
                      transparent
                        ? "text-white/80 hover:text-white"
                        : "text-stone-600 hover:text-ink",
                      (servicesOpen || isActive(item.href)) &&
                        (transparent ? "text-white" : "text-ink"),
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden
                      className={cn(
                        "size-3.5 transition-transform duration-300",
                        servicesOpen && "rotate-180",
                      )}
                    />
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-x-0 bottom-0 origin-left scale-x-0 border-b border-dashed transition-transform duration-300 group-hover:scale-x-100",
                        transparent
                          ? "border-[var(--gold-200)]"
                          : "border-[var(--gold-600)]",
                        (servicesOpen || isActive(item.href)) && "scale-x-100",
                      )}
                    />
                  </button>

                  {servicesOpen && (
                    <div className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4">
                      <div className="relative border border-dashed border-[var(--gold-500)]/70 bg-linen/98 shadow-[0_18px_50px_-18px_rgba(12,23,41,0.35)] backdrop-blur">
                        <ul className="py-2">
                          {services.map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={`/services/${s.slug}`}
                                onClick={() => setServicesOpen(false)}
                                className={cn(
                                  "block px-5 py-2.5 text-sm text-stone-600 transition-colors hover:bg-white hover:text-ink",
                                  pathname === `/services/${s.slug}` &&
                                    "text-ink",
                                )}
                              >
                                {s.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/services"
                          onClick={() => setServicesOpen(false)}
                          className="block border-t border-dashed border-[var(--gold-500)]/50 px-5 py-3 text-[0.68rem] font-medium tracking-[0.18em] uppercase text-[var(--gold-600)] transition-colors hover:text-ink"
                        >
                          All services
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
                    "group relative pb-1 text-[0.72rem] font-medium tracking-[0.18em] uppercase transition-colors",
                    transparent
                      ? "text-white/80 hover:text-white"
                      : "text-stone-600 hover:text-ink",
                    isActive(item.href) &&
                      (transparent ? "text-white" : "text-ink"),
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-0 bottom-0 origin-left scale-x-0 border-b border-dashed transition-transform duration-300 group-hover:scale-x-100",
                      transparent
                        ? "border-[var(--gold-200)]"
                        : "border-[var(--gold-600)]",
                      isActive(item.href) && "scale-x-100",
                    )}
                  />
                </Link>
              ),
            )}
        </nav>

        <div className="flex items-center gap-5">
          {/* The phone set as type, not an icon — labelled like a workroom card. */}
          <a
            href={site.phone.href}
            className="group hidden text-right leading-none md:block"
          >
            <span
              className={cn(
                "block text-[0.55rem] font-medium tracking-[0.3em] uppercase",
                transparent
                  ? "text-[var(--gold-200)]"
                  : "text-[var(--gold-600)]",
              )}
            >
              Sydney workroom
            </span>
            <span
              className={cn(
                "mt-1.5 block font-display text-[1.05rem] tracking-[0.02em] transition-colors",
                transparent
                  ? "text-white/90 group-hover:text-white"
                  : "text-ink/85 group-hover:text-ink",
              )}
            >
              {site.phone.display}
            </span>
          </a>

          {/*
            Ink fill, never gold — gold is a line, not a fill (§2.1.4).
            The line here is a dashed inner seam, so the button reads as a
            stitched garment label rather than a software button.
          */}
          <Link
            href="/contact"
            className={cn(
              "relative hidden h-11 items-center px-6 text-[0.7rem] font-medium tracking-[0.18em] uppercase transition-colors sm:inline-flex",
              transparent
                ? "bg-linen text-ink hover:bg-white"
                : "bg-ink text-linen hover:bg-[var(--indigo-700)]",
            )}
          >
            <span
              aria-hidden
              className={cn(
                "pointer-events-none absolute inset-1 border border-dashed",
                transparent
                  ? "border-ink/35"
                  : "border-[var(--gold-400)]/70",
              )}
            />
            Request a quote
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className={cn(
                "inline-flex size-11 items-center justify-center border transition-colors lg:hidden",
                transparent
                  ? "border-white/40 text-white hover:bg-white/10"
                  : "border-stone-300 text-ink hover:bg-white",
              )}
            >
              <Menu className="size-5" aria-hidden />
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-linen p-0">
              <SheetHeader className="border-b border-stone-300/60 px-6 py-5">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <NavLockup />
              </SheetHeader>
              <div className="flex flex-col overflow-y-auto px-6 py-6">
                <nav aria-label="Mobile" className="flex flex-col">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="border-b border-dashed border-stone-400/50 py-4 font-display text-2xl text-ink"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <p className="eyebrow mt-8">Services</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        onClick={() => setOpen(false)}
                        className="block py-1.5 text-sm text-stone-600 transition-colors hover:text-ink"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="relative inline-flex h-12 items-center justify-center bg-ink px-6 text-[0.7rem] font-medium tracking-[0.18em] uppercase text-linen"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-1 border border-dashed border-[var(--gold-400)]/70"
                    />
                    Request a quote
                  </Link>
                  <a
                    href={site.phone.href}
                    className="inline-flex h-12 items-center justify-center border border-dashed border-[var(--gold-500)] px-6 font-display text-base text-ink"
                  >
                    {site.phone.display}
                  </a>
                  <p className="mt-1 text-center text-xs text-stone-600">
                    {site.hours.display}
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
