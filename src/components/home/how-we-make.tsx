import Image from "next/image";
import { Reveal, RevealItem } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";
import { steps } from "@/content/process";

/**
 * Process (plan §3.5). Four steps, each with a real photograph rather than an
 * icon. Horizontal scroll-snap row on desktop, vertical stack on mobile, with a
 * gold hairline connecting the step numbers.
 */
export function HowWeMake() {
  return (
    <section className="section-y bg-linen">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-2xl">
          <RevealItem>
            <SectionLabel>How we make it</SectionLabel>
          </RevealItem>
          <RevealItem>
            <h2 className="display-lg mt-6 text-ink text-balance">
              Measured, cut, sewn and installed by the same workroom.
            </h2>
          </RevealItem>
        </Reveal>
      </div>

      <div className="relative mt-16 lg:mt-24">
        <ol className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 sm:px-8 lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:px-12 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {steps.map((s) => (
            <li
              key={s.number}
              className="w-[78vw] shrink-0 snap-start sm:w-[52vw] lg:w-auto"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-ink">
                <Image
                  src={s.image.src}
                  alt={s.image.alt}
                  fill
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 52vw, 23vw"
                  placeholder="blur"
                  blurDataURL={s.image.blurDataURL}
                  className="object-cover"
                />
              </div>

              {/* The gold hairline runs from each number to the next. Drawing
                  it inside the row keeps it aligned to the circles without
                  hard-coding an offset. */}
              <div className="mt-6 flex items-center gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[var(--gold-500)] bg-linen font-display text-sm text-ink">
                  {s.number}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-[var(--gold-500)]/45"
                />
              </div>

              <h3 className="mt-5 font-display text-2xl text-ink">{s.title}</h3>
              <p className="mt-3 max-w-[38ch] text-[0.95rem] leading-relaxed text-stone-600">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
