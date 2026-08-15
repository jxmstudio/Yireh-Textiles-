"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useReducedMotion } from "motion/react";
import { HeroWordmark } from "@/components/brand/wordmark";
import { hero } from "@/content/home";
import { heroVideo } from "@/content/images";

/**
 * Hero (plan §3.1). Full viewport height, full-bleed video loop, content
 * left-aligned in the bottom third. Not a centred card, not a boxed container —
 * the video is the page.
 *
 * The poster renders through next/image as the LCP element and the video fades
 * in over it once it can play, so the largest paint never waits on the MP4.
 * Under prefers-reduced-motion the video is never mounted at all.
 */
export function WorkroomHero() {
  const reduced = useReducedMotion();
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="relative h-[100svh] min-h-[38rem] w-full overflow-hidden bg-ink">
      <Image
        src={heroVideo.poster.src}
        alt={heroVideo.poster.alt}
        fill
        sizes="100vw"
        quality={90}
        loading="eager"
        fetchPriority="high"
        placeholder="blur"
        blurDataURL={heroVideo.poster.blurDataURL}
        className="object-cover"
      />

      {!reduced && (
        <video
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          src={heroVideo.src}
          poster={heroVideo.poster.src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={() => setVideoReady(true)}
        />
      )}

      {/*
        §3.1 overlay. Two scrims, not one: the vertical gradient anchors the
        bottom third, and the horizontal one keeps the text column dark enough
        for AA contrast even when the clip cuts to a bright white fabric frame.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: [
            "linear-gradient(to top, rgba(12,23,41,0.86), rgba(12,23,41,0.32) 52%, rgba(12,23,41,0.10))",
            "linear-gradient(to right, rgba(12,23,41,0.82), rgba(12,23,41,0.42) 42%, rgba(12,23,41,0) 72%)",
          ].join(", "),
        }}
      />

      <div className="relative flex h-full flex-col justify-end">
        <div className="mx-auto w-full max-w-[1600px] px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
          <p className="eyebrow text-[var(--gold-200)]">{hero.eyebrow}</p>

          <h1 className="mt-6">
            <HeroWordmark />
            <span className="mt-8 block max-w-[22ch] font-display text-[clamp(1.5rem,3.4vw,3rem)] leading-[1.1] font-normal text-white">
              {hero.headline}
            </span>
          </h1>

          <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-relaxed text-white/80 md:text-lg">
            {hero.sub}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex h-14 items-center justify-center bg-linen px-9 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-white"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex h-14 items-center justify-center border border-[var(--gold-500)] px-9 text-sm font-medium tracking-wide text-white transition-colors hover:bg-white/10"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Thin scroll cue, bottom right */}
      <div
        aria-hidden="true"
        className="absolute right-5 bottom-8 hidden items-center gap-3 sm:right-8 lg:right-12 lg:flex"
      >
        <span className="text-[0.65rem] tracking-[0.28em] text-white/60 uppercase">
          {hero.scrollCue}
        </span>
        <span className="h-12 w-px bg-gradient-to-b from-[var(--gold-500)] to-transparent" />
      </div>
    </section>
  );
}
