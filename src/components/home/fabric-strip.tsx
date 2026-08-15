import Image from "next/image";
import { Marquee } from "@/components/shared/marquee";
import { SectionLabel } from "@/components/shared/section-label";
import { fabrics } from "@/content/products";

/**
 * Materials (plan §3.6). Edge-to-edge auto-scrolling row of fabric macro shots
 * with a small gold caption per swatch. Pauses on hover and on focus.
 */
export function FabricStrip() {
  return (
    <section className="overflow-hidden bg-linen pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionLabel>Materials</SectionLabel>
        <h2 className="display-md mt-5 max-w-[24ch] text-ink text-balance">
          Linen through to marine-grade, specified for the job.
        </h2>
      </div>

      <Marquee durationSeconds={70} className="mt-14" gapClassName="gap-3">
        {fabrics.map((f) => (
          <figure key={f.label} className="w-56 shrink-0 sm:w-64">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={f.image.src}
                alt={f.image.alt}
                fill
                sizes="16rem"
                quality={60}
                placeholder="blur"
                blurDataURL={f.image.blurDataURL}
                className="object-cover"
              />
            </div>
            <figcaption className="eyebrow mt-3">{f.label}</figcaption>
          </figure>
        ))}
      </Marquee>
    </section>
  );
}
