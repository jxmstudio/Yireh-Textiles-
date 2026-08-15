import { cn } from "@/lib/utils";
import { WovenYMark } from "./logo";

/**
 * The wordmark, sized for prominence.
 *
 * The client's single most concrete note on the last demo was that the name and
 * logo were too small — they had been sized as a nav utility. The fix is not a
 * new mark, it is scale (plan §2.5, §3.1):
 *
 *   nav     lockup ≥ 40px tall
 *   hero    96px on mobile, up to 200px on desktop
 *   footer  oversized, used as a graphic element rather than a logo
 *
 * The mark itself is the Woven Y from ./logo. Which of the three concepts wins
 * is the client's call — /brand presents them.
 */

type Tone = "onLight" | "onDark";

export function NavLockup({
  className,
  tone = "onLight",
}: {
  className?: string;
  tone?: Tone;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      {/* 40px mark — the floor the client asked for */}
      <WovenYMark tone={tone} className="h-10 w-10 shrink-0 md:h-11 md:w-11" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.6rem] leading-none font-semibold tracking-[0.12em] md:text-[1.8rem]",
            tone === "onDark" ? "text-white" : "text-ink",
          )}
        >
          YIREH
        </span>
        <span
          className={cn(
            "mt-1.5 text-[0.6rem] font-medium tracking-[0.34em]",
            tone === "onDark" ? "text-[var(--gold-200)]" : "text-[var(--gold-600)]",
          )}
        >
          TEXTILES
        </span>
      </span>
    </span>
  );
}

/**
 * Hero wordmark — the page's largest single element after the video.
 * clamp floors at 96px and tops out at 200px on a desktop viewport.
 */
export function HeroWordmark({ className }: { className?: string }) {
  return (
    <span className={cn("block leading-[0.85]", className)}>
      <span
        className="block font-display font-semibold tracking-[0.02em] text-white"
        style={{ fontSize: "clamp(6rem, 14vw, 12.5rem)" }}
      >
        Yireh
      </span>
      <span
        className="mt-3 block font-medium text-[var(--gold-200)]"
        style={{
          fontSize: "clamp(0.75rem, 1.6vw, 1.25rem)",
          letterSpacing: "0.42em",
        }}
      >
        TEXTILES
      </span>
    </span>
  );
}

/**
 * Footer wordmark — oversized, clipped to the container, used as texture.
 * This is where prominence pays off cheaply (plan §3.11).
 */
export function FooterWordmark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none block font-display font-semibold leading-[0.8] tracking-[0.02em] text-white/[0.07] select-none",
        className,
      )}
      style={{ fontSize: "clamp(4.5rem, 19vw, 18rem)" }}
    >
      Yireh Textiles
    </span>
  );
}
