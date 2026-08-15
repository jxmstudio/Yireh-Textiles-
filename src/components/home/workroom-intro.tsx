import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealItem } from "@/components/shared/reveal";
import { ScaleOnScroll } from "@/components/shared/scale-on-scroll";
import { SectionLabel } from "@/components/shared/section-label";
import { intro } from "@/content/home";

/**
 * Editorial intro (plan §3.3). Asymmetric 7/5 split, a single tall photograph
 * on the left with scale-on-scroll, text generously indented on the right.
 * Never centred.
 */
export function WorkroomIntro() {
  return (
    <section className="section-y bg-linen">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <ScaleOnScroll className="relative aspect-[4/5] overflow-hidden lg:col-span-7 lg:aspect-[3/4]">
            <Image
              src={intro.image.src}
              alt={intro.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              placeholder="blur"
              blurDataURL={intro.image.blurDataURL}
              className="object-cover"
            />
          </ScaleOnScroll>

          <Reveal className="lg:col-span-5 lg:pl-8">
            <RevealItem>
              <SectionLabel>{intro.eyebrow}</SectionLabel>
            </RevealItem>
            <RevealItem>
              <h2 className="display-lg mt-6 text-ink text-balance">
                {intro.heading}
              </h2>
            </RevealItem>
            {intro.body.map((p) => (
              <RevealItem key={p}>
                <p className="body-lg mt-6 text-stone-600">{p}</p>
              </RevealItem>
            ))}
            <RevealItem>
              <Link
                href={intro.link.href}
                className="link-gold mt-10 inline-block text-sm font-medium tracking-wide text-ink"
              >
                {intro.link.label}
              </Link>
            </RevealItem>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
