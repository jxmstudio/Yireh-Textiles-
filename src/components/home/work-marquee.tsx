import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/shared/marquee";
import { SectionLabel } from "@/components/shared/section-label";
import { workRibbon } from "@/content/projects";

/**
 * Gallery ribbon (plan §3.9). Continuous horizontal image ribbon with mixed
 * aspect ratios, sitting directly above the enquiry form so the last thing the
 * visitor sees before the form is the work.
 */

/** Mixed ratios so the ribbon does not read as a uniform filmstrip. */
const ratios = [
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[4/3]",
];

export function WorkMarquee() {
  return (
    <section id="work" className="overflow-hidden bg-linen pb-24 lg:pb-32">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-end justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <div>
          <SectionLabel>Recent work</SectionLabel>
          <h2 className="display-md mt-5 max-w-[20ch] text-ink text-balance">
            Ten years of it, across Sydney.
          </h2>
        </div>
        <Link
          href="/services"
          className="link-gold text-sm font-medium tracking-wide text-ink"
        >
          Browse everything we make
        </Link>
      </div>

      <Marquee durationSeconds={90} className="mt-14" gapClassName="gap-3">
        {workRibbon.map((img, i) => (
          <div
            key={img.src}
            className={`relative h-[22rem] shrink-0 overflow-hidden bg-ink sm:h-[26rem] ${ratios[i % ratios.length]}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 60vw, 26rem"
              quality={60}
              placeholder="blur"
              blurDataURL={img.blurDataURL}
              className="object-cover"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
