"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Menu, Phone } from "lucide-react";
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

  const overlayCapable = pathname === "/";

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
          : "border-b border-[var(--gold-500)]/60 bg-linen/95 backdrop-blur supports-[backdrop-filter]:bg-linen/85",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label={`${site.name} home`} className="py-2">
          <NavLockup tone={tone} />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {nav
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "text-sm font-medium transition-colors",
                  transparent
                    ? "text-white/85 hover:text-white"
                    : "text-stone-600 hover:text-ink",
                  isActive(item.href) &&
                    (transparent ? "text-white" : "text-ink"),
                )}
              >
                {item.label}
              </Link>
            ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phone.href}
            className={cn(
              "hidden items-center gap-2 text-sm font-medium transition-colors md:flex",
              transparent
                ? "text-white/85 hover:text-white"
                : "text-stone-600 hover:text-ink",
            )}
          >
            <Phone className="size-4" aria-hidden />
            {site.phone.display}
          </a>

          {/* Ink fill, never gold — gold is a line, not a fill (§2.1.4) */}
          <Link
            href="/contact"
            className={cn(
              "hidden h-11 items-center px-6 text-sm font-medium tracking-wide transition-colors sm:inline-flex",
              transparent
                ? "bg-linen text-ink hover:bg-white"
                : "bg-ink text-linen hover:bg-[var(--indigo-700)]",
            )}
          >
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
                      className="border-b border-stone-300/50 py-4 font-display text-2xl text-ink"
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
                    className="inline-flex h-12 items-center justify-center bg-ink px-6 text-sm font-medium text-linen"
                  >
                    Request a quote
                  </Link>
                  <a
                    href={site.phone.href}
                    className="inline-flex h-12 items-center justify-center border border-[var(--gold-500)] px-6 text-sm font-medium text-ink"
                  >
                    <Phone className="mr-2 size-4" aria-hidden />
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
