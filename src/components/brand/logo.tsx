import { cn } from "@/lib/utils";

/**
 * Yireh Textiles identity.
 *
 * "Yireh" (Genesis 22:14, Jehovah-Jireh) means "the Lord provides".
 *
 * Primary mark (client-directed, Aug 2026): three bold rose-gold thread lines,
 * each stepped in from the last — three threads laid down, one for each side
 * of the workroom. Heavy weights and tight spacing per the client's sketch.
 * The earlier monogram concepts are kept below for the /brand archive.
 */

type MarkProps = {
  className?: string;
  /** "onLight" draws navy threads; "onDark" draws white threads. */
  tone?: "onLight" | "onDark";
  title?: string;
};

/* -------------------------------------------------------------------------- */
/*  Primary mark — Three Threads (rose gold)                                   */
/* -------------------------------------------------------------------------- */

export function ThreadLinesMark({
  className,
  tone = "onLight",
  title = "Yireh Textiles",
}: MarkProps) {
  // A touch brighter on dark grounds so the metal still reads as metal.
  const stops =
    tone === "onDark"
      ? ["#f0b9c0", "#d47f8b", "#b05a67"]
      : ["#e39aa4", "#c06471", "#8e414d"];
  // Static gradient id: instances collide, but the defs are identical so the
  // first one painted is the one they all want anyway.
  const id = `rose-metal-${tone === "onDark" ? "d" : "l"}`;
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      className={cn("h-9 w-9", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={stops[0]} />
          <stop offset="0.55" stopColor={stops[1]} />
          <stop offset="1" stopColor={stops[2]} />
        </linearGradient>
      </defs>
      {/* three fat thread lines, tight 4px gaps, each stepped in */}
      <rect x="5" y="13" width="45" height="10" rx="2" fill={`url(#${id})`} />
      <rect x="14" y="27" width="38" height="10" rx="2" fill={`url(#${id})`} />
      <rect x="23" y="41" width="32" height="10" rx="2" fill={`url(#${id})`} />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Archived concept — Woven Y                                                 */
/* -------------------------------------------------------------------------- */

export function WovenYMark({
  className,
  tone = "onLight",
  title = "Yireh Textiles",
}: MarkProps) {
  const thread = tone === "onDark" ? "#ffffff" : "var(--navy-900)";
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      className={cn("h-9 w-9", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* left warp thread — sits under the gold weft */}
      <path
        d="M16 14 L32 34"
        stroke={thread}
        strokeWidth="7.5"
        strokeLinecap="round"
      />
      {/* gold weft thread — passes over the left arm, under the right */}
      <path
        d="M9 22 L55 22"
        stroke="var(--gold-500)"
        strokeWidth="6.5"
        strokeLinecap="round"
      />
      {/* right warp thread — sits over the gold weft */}
      <path
        d="M48 14 L32 34"
        stroke={thread}
        strokeWidth="7.5"
        strokeLinecap="round"
      />
      {/* stem */}
      <path
        d="M32 33 L32 51"
        stroke={thread}
        strokeWidth="7.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Alternate A — Needle & Arch                                                */
/*  "On the mountain of the Lord it will be provided." An arch drawn as a      */
/*  single needle-and-thread stroke, the eye of the needle at the apex.        */
/* -------------------------------------------------------------------------- */

export function NeedleArchMark({
  className,
  tone = "onLight",
  title = "Yireh Textiles",
}: MarkProps) {
  const thread = tone === "onDark" ? "#ffffff" : "var(--navy-900)";
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      className={cn("h-9 w-9", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* the arch / mountain of provision */}
      <path
        d="M8 52 V32 a24 24 0 0 1 48 0 V52"
        stroke={thread}
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* eye of the needle at the apex */}
      <ellipse
        cx="32"
        cy="20"
        rx="4.5"
        ry="7"
        stroke="var(--gold-500)"
        strokeWidth="3.5"
      />
      {/* thread running through */}
      <path
        d="M20 52 C20 40 44 40 44 52"
        stroke="var(--gold-500)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Alternate B — Drape Y                                                      */
/*  A Y formed from two curtain drapes meeting, under a gold pelmet line.      */
/* -------------------------------------------------------------------------- */

export function DrapeYMark({
  className,
  tone = "onLight",
  title = "Yireh Textiles",
}: MarkProps) {
  const thread = tone === "onDark" ? "#ffffff" : "var(--navy-900)";
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      className={cn("h-9 w-9", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* gold pelmet */}
      <path
        d="M8 14 H56"
        stroke="var(--gold-500)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* left drape sweeping in */}
      <path
        d="M15 20 C15 38 32 34 32 46"
        stroke={thread}
        strokeWidth="6.5"
        strokeLinecap="round"
      />
      {/* right drape sweeping in */}
      <path
        d="M49 20 C49 38 32 34 32 46"
        stroke={thread}
        strokeWidth="6.5"
        strokeLinecap="round"
      />
      {/* tail */}
      <path
        d="M32 45 V52"
        stroke={thread}
        strokeWidth="6.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Lockup — mark + wordmark                                                   */
/* -------------------------------------------------------------------------- */

export function Logo({
  className,
  tone = "onLight",
  showTagline = true,
  markClassName,
}: {
  className?: string;
  tone?: "onLight" | "onDark";
  showTagline?: boolean;
  markClassName?: string;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <ThreadLinesMark
        tone={tone}
        className={cn("h-9 w-9 shrink-0", markClassName)}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-[1.35rem] font-semibold tracking-[0.14em]",
            tone === "onDark" ? "text-white" : "text-navy-900",
          )}
        >
          YIREH
        </span>
        {showTagline && (
          <span
            className={cn(
              "mt-1 text-[0.6rem] font-medium tracking-[0.32em]",
              tone === "onDark" ? "text-rose-300" : "text-rose-600",
            )}
          >
            TEXTILES
          </span>
        )}
      </span>
    </span>
  );
}
