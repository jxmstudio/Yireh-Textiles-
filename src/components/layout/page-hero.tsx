import Link from "next/link";
import * as React from "react";
import { ChevronRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/layout/section";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({
  trail,
  tone = "onDark",
}: {
  trail: Crumb[];
  tone?: "onDark" | "default";
}) {
  const color =
    tone === "onDark"
      ? "text-navy-100/60 hover:text-gold-300"
      : "text-muted-foreground hover:text-navy-900";
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-xs">
        {trail.map((c, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1">
              {last ? (
                <span
                  aria-current="page"
                  className={
                    tone === "onDark" ? "text-gold-300" : "text-navy-900"
                  }
                >
                  {c.name}
                </span>
              ) : (
                <>
                  <Link href={c.href} className={`transition-colors ${color}`}>
                    {c.name}
                  </Link>
                  <ChevronRight
                    className={
                      tone === "onDark"
                        ? "size-3 text-navy-100/40"
                        : "size-3 text-muted-foreground/50"
                    }
                    aria-hidden
                  />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Standard inner-page hero: navy panel with a gold rule, breadcrumbs, H1 and
 * an optional lead paragraph plus actions.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  trail,
  actions,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  trail?: Crumb[];
  actions?: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden bg-navy-950">
      <div className="drape-texture absolute inset-0" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gold-500"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-navy-800/50 blur-3xl"
        aria-hidden
      />
      <Container className="relative py-12 sm:py-16 lg:py-20">
        {trail && <Breadcrumbs trail={trail} />}
        {eyebrow && (
          <Eyebrow tone="onDark" className="mt-6">
            {eyebrow}
          </Eyebrow>
        )}
        <h1 className="mt-4 max-w-4xl text-balance font-heading text-3xl font-semibold leading-[1.12] text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {lead && (
          <div className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-navy-100/80 sm:text-lg">
            {lead}
          </div>
        )}
        {actions && (
          <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>
        )}
      </Container>
    </div>
  );
}
