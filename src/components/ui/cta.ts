import { cn } from "@/lib/utils";

/**
 * Marketing-scale call-to-action styles. The shadcn Button defaults are sized
 * for application UI (32–36px tall); these are the larger, touch-friendly
 * variants used across the marketing pages.
 */
const base =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-lg text-sm font-semibold tracking-wide transition-colors outline-none focus-visible:ring-3 focus-visible:ring-gold-500/50 disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0";

const sizes = {
  md: "h-11 px-5",
  lg: "h-12 px-7 text-[0.95rem]",
} as const;

type Size = keyof typeof sizes;

export const ctaPrimary = (size: Size = "md", className?: string) =>
  cn(base, sizes[size], "bg-navy-900 text-white hover:bg-navy-800", className);

/**
 * Primary solid CTA on a light ground.
 *
 * This used to be a gold fill. Gold is a line, not a fill (plan §2.1.4) — a
 * gold button was the single biggest carry-over of the look the client
 * rejected — so it is now ink, matching the homepage. Gold survives here only
 * as the focus ring and as hairline borders elsewhere.
 */
export const ctaSolid = (size: Size = "md", className?: string) =>
  cn(base, sizes[size], "bg-ink text-linen hover:bg-indigo-700", className);

/** Primary CTA over a dark panel or photograph — linen fill, ink label. */
export const ctaOnDark = (size: Size = "md", className?: string) =>
  cn(base, sizes[size], "bg-linen text-ink hover:bg-white", className);

/** Secondary CTA over a dark panel: 1px gold hairline, never a fill. */
export const ctaGhostGold = (size: Size = "md", className?: string) =>
  cn(
    base,
    sizes[size],
    "border border-gold-500 text-white hover:bg-white/10",
    className,
  );

export const ctaOutline = (size: Size = "md", className?: string) =>
  cn(
    base,
    sizes[size],
    "border border-navy-200 bg-white text-navy-900 hover:border-navy-300 hover:bg-navy-50",
    className,
  );

export const ctaOutlineLight = (size: Size = "md", className?: string) =>
  cn(
    base,
    sizes[size],
    "border border-white/35 text-white hover:border-white/60 hover:bg-white/10",
    className,
  );
