import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Continuous horizontal ribbon that pauses on hover and on keyboard focus
 * (plan §3.6, §3.9). Children are rendered twice and the track translates by
 * -50%, which makes the loop seamless regardless of content width.
 *
 * CSS-driven rather than JS-driven so it costs nothing on the main thread and
 * stops dead under prefers-reduced-motion — see .animate-marquee in globals.css.
 */
export function Marquee({
  children,
  durationSeconds = 60,
  className,
  gapClassName = "gap-2",
}: {
  children: ReactNode;
  durationSeconds?: number;
  className?: string;
  gapClassName?: string;
}) {
  return (
    <div
      className={cn(
        "marquee-host group relative overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className,
      )}
    >
      <div
        className={cn("animate-marquee flex w-max", gapClassName)}
        style={
          { "--marquee-duration": `${durationSeconds}s` } as React.CSSProperties
        }
      >
        <div className={cn("flex shrink-0", gapClassName)}>{children}</div>
        {/* Duplicate for the seamless loop. Hidden from screen readers so the
            content is not announced twice. */}
        <div className={cn("flex shrink-0", gapClassName)} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
