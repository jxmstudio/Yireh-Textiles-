import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealItem } from "@/components/shared/reveal";
import { ScaleOnScroll } from "@/components/shared/scale-on-scroll";
import { SectionLabel } from "@/components/shared/section-label";
import { featured } from "@/content/home";

/**
 * Featured work (plan §3.8). One project, full-bleed, with three detail shots
 * in an offset grid. One done well beats six thin.
 *
 * This is the second and last section using scale-on-scroll — the plan caps
 * parallax-style effects at two sections.
 */
export function FeaturedProject() {
  return (
    <section className="section-y bg-linen">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-2xl">
          <RevealItem>
            <SectionLabel>{featured.eyebrow}</SectionLabel>
          </RevealItem>
          <RevealItem>
            <h2 className="display-lg mt-6 text-ink text-balance">
              {featured.title}
            </h2>
          </RevealItem>
        </Reveal>
      </div>

      <ScaleOnScroll className="relative mt-14 aspect-[16/10] w-full overflow-hidden bg-ink lg:mt-20 lg:aspect-[21/9]">
        <Image
          src={featured.image.src}
          alt={featured.image.alt}
          fill
          sizes="100vw"
          quality={90}
          placeholder="blur"
          blurDataURL={featured.image.blurDataURL}
          className="object-cover"
        />
      </ScaleOnScroll>

      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">{featured.meta}</p>
            <p className="body-lg mt-6 text-stone-600">{featured.body}</p>
            <Link
              href={featured.link.href}
              className="link-gold mt-8 inline-block text-sm font-medium tracking-wide text-ink"
            >
              {featured.link.label}
            </Link>
          </div>

          {/* Offset detail grid — the middle tile drops to break the baseline */}
          <Reveal className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:col-span-8">
            {featured.details.map((d, i) => (
              <RevealItem
                key={d.src}
                className={i === 1 ? "sm:translate-y-10" : undefined}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-ink">
                  <Image
                    src={d.src}
                    alt={d.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw"
                    placeholder="blur"
                    blurDataURL={d.blurDataURL}
                    className="object-cover"
                  />
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
