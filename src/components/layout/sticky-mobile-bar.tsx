import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Mobile-only sticky bottom bar: Call | Get a quote (plan §3.11).
 * Hidden from large viewports where the header CTAs are always visible.
 */
export function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-[var(--gold-500)]/50 sm:hidden">
      <a
        href={site.phone.href}
        className="flex h-14 items-center justify-center gap-2 bg-linen text-sm font-medium text-ink"
      >
        <Phone className="size-4" aria-hidden />
        Call
      </a>
      <Link
        href="/contact"
        className="flex h-14 items-center justify-center bg-ink text-sm font-medium text-linen"
      >
        Get a quote
      </Link>
    </div>
  );
}
