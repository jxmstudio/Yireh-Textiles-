import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealItem } from "@/components/shared/reveal";
import { SectionLabel } from "@/components/shared/section-label";
import { production } from "@/content/home";

/**
 * Manufacturing consulting (plan §3.7). The one dark band on the page — which
 * is exactly what makes it land — carrying the B2B differentiator nobody else
 * in the Sydney curtain-maker set offers.
 *
 * Reversed colours: linen text, gold rules. Stats are inline items, not cards.
 */
export function ProductionSystems() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-linen">
      <Image
        src={production.image.src}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        quality={60}
        placeholder="blur"
        blurDataURL={production.image.blurDataURL}
        className="object-cover opacity-20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(12,23,41,0.96),rgba(12,23,41,0.72))]"
      />

      <div className="section-y relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-3xl">
          <RevealItem>
            <SectionLabel className="eyebrow-on-dark">{production.eyebrow}</SectionLabel>
          </RevealItem>
          <RevealItem>
            <h2 className="display-lg mt-6 text-linen text-balance">
              {production.heading}
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="body-lg mt-8 text-linen/75">{production.body}</p>
          </RevealItem>
        </Reveal>

        <Reveal className="mt-16 grid gap-px border-t border-linen/20 sm:grid-cols-3">
          {production.items.map((item) => (
            <RevealItem key={item.value} className="pt-8">
              <p className="font-display text-[clamp(1.5rem,2.6vw,2.25rem)] leading-none text-linen">
                {item.value}
              </p>
              <p className="mt-3 max-w-[24ch] text-sm text-linen/60">
                {item.label}
              </p>
            </RevealItem>
          ))}
        </Reveal>

        <Link
          href={production.cta.href}
          className="mt-14 inline-flex h-14 items-center border border-[var(--gold-500)] px-9 text-sm font-medium tracking-wide text-linen transition-colors hover:bg-linen/10"
        >
          {production.cta.label}
        </Link>
      </div>
    </section>
  );
}
