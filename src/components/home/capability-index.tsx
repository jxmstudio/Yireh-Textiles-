import Image from "next/image";
import Link from "next/link";
import { capabilities } from "@/content/products";

/**
 * Capability index (plan §3.4) — the component that replaces the three-up icon
 * card grid, and the single biggest visual fix on the page.
 *
 * Four full-bleed 4:5 portrait tiles, 2×2 on desktop, one column on mobile,
 * 2px gutters. Every service is represented by a photograph. No icons anywhere.
 * The whole tile is the link; on hover the image scales 1.04 and the label
 * rises 8px.
 */
export function CapabilityIndex() {
  return (
    <section aria-labelledby="capabilities-heading" className="bg-linen">
      <h2 id="capabilities-heading" className="sr-only">
        What we make
      </h2>
      <div className="grid gap-0.5 sm:grid-cols-2">
        {capabilities.map((c, i) => (
          <Link
            key={c.number}
            href={c.href}
            className="group relative block aspect-[4/5] overflow-hidden bg-ink"
          >
            <Image
              src={c.image.src}
              alt={c.image.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              quality={90}
              placeholder="blur"
              blurDataURL={c.image.blurDataURL}
              className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
              loading={i < 2 ? "eager" : "lazy"}
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,23,41,0.88),rgba(12,23,41,0.25)_45%,transparent_70%)]"
            />

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9 lg:p-12">
              <div className="transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-2">
                <span className="eyebrow text-[var(--gold-200)]">
                  {c.number}
                </span>
                <h3 className="display-md mt-3 text-white">{c.title}</h3>
                <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-white/75">
                  {c.descriptor}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
