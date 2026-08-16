import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { ChevronRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/layout/section";
import type { Img } from "@/content/images";
import { cn } from "@/lib/utils";

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
 * Inner-page hero.
 *
 * Pass an `image` to get the photographic variant the plan calls for (§4):
 * full-bleed, ~60vh, eyebrow + display heading over a scrim. "Never a bare
 * <h1> on a flat background — that's the office-type pattern at page level."
 *
 * Without an image it falls back to the original navy panel, which is still
 * correct for pages that have nothing to photograph (privacy, brand).
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  trail,
  actions,
  image,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  trail?: Crumb[];
  actions?: React.ReactNode;
  image?: Img;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-navy-950",
        image && "flex min-h-[60vh] items-end",
      )}
    >
      {image ? (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            quality={90}
            loading="eager"
            fetchPriority="high"
            placeholder="blur"
            blurDataURL={image.blurDataURL}
            className="object-cover"
          />
          {/* Two scrims, as on the homepage hero: one anchors the bottom, one
              keeps the text column readable over a bright frame. */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage: [
                "linear-gradient(to top, rgba(12,23,41,0.88), rgba(12,23,41,0.35) 55%, rgba(12,23,41,0.15))",
                "linear-gradient(to right, rgba(12,23,41,0.80), rgba(12,23,41,0.40) 45%, rgba(12,23,41,0) 75%)",
              ].join(", "),
            }}
          />
        </>
      ) : (
        <>
          <div className="drape-texture absolute inset-0" aria-hidden />
          <div
            className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-navy-800/50 blur-3xl"
            aria-hidden
          />
        </>
      )}
      <div
        className="absolute inset-x-0 bottom-0 z-10 h-px bg-gold-500"
        aria-hidden
      />
      <Container
        className={cn(
          "relative py-12 sm:py-16 lg:py-20",
          image && "w-full pt-28 sm:pt-32 lg:pt-40",
        )}
      >
        {trail && <Breadcrumbs trail={trail} />}
        {eyebrow && (
          <Eyebrow tone="onDark" className="mt-6">
            {eyebrow}
          </Eyebrow>
        )}
        <h1
          className={cn(
            "mt-4 max-w-4xl text-balance font-heading font-semibold text-white",
            // The photographic variant gets the display scale used site-wide;
            // the flat variant keeps its original, tighter sizing.
            image
              ? "display-lg"
              : "text-3xl leading-[1.12] sm:text-4xl lg:text-5xl",
          )}
        >
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
