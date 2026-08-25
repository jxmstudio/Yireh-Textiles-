import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { images } from "@/content/images";
import { Container, Section, SectionHeading } from "@/components/layout/section";
import { ThreadLinesMark } from "@/components/brand/logo";
import { ClientStrip } from "@/components/sections/client-strip";
import { Process } from "@/components/sections/process";
import { EnquirySection } from "@/components/sections/enquiry-section";
import { CtaBand } from "@/components/sections/cta-band";
import { PhotoBand } from "@/components/shared/photo-band";
import { JsonLd } from "@/components/seo/json-ld";
import { ctaOnDark, ctaOutlineLight } from "@/components/ui/cta";
import { breadcrumbSchema } from "@/lib/schema";
import { serviceMedia } from "@/content/products";
import { differentiators, services, site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Yireh Textiles & Sourcing has manufactured curtains, soft furnishings and garments in Sydney for over ten years, working all over Sydney for furniture brands, apparel labels and designers.",
  alternates: { canonical: "/about" },
};

const trail = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const values = [
  {
    title: "Say what the job actually is",
    body: "If a fabric will not hang the way you are picturing, or a lead time is not realistic, we will tell you before you order rather than after.",
  },
  {
    title: "One point of contact",
    body: "You deal with the people who make the work. Nothing gets relayed through a salesperson who has never been on the floor.",
  },
  {
    title: "Quoted before it is made",
    body: "You get a written quote with materials, quantities and lead time. Nothing gets manufactured, and nothing gets invoiced, before you approve it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd id="about-breadcrumb" data={breadcrumbSchema(trail)} />

      <PageHero
        image={images.heroPoster}
        trail={trail}
        eyebrow="About Yireh Textiles & Sourcing"
        title="Ten years of manufacturing, one Sydney workroom"
        lead="We are a manufacturer, not a reseller, and we work all over Sydney. Everything we quote is made by our own team, on our own floor, to a standard that trade clients have kept coming back to for a decade."
        actions={
          <>
            <Link href="/contact" className={ctaOnDark("lg")}>
              Work With Us
              <ArrowRight aria-hidden />
            </Link>
            <a href={site.phone.href} className={ctaOutlineLight("lg")}>
              <Phone aria-hidden />
              {site.phone.display}
            </a>
          </>
        }
      />

      {/* Story */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Our story"
                title="Built on trade work, where the standard is not negotiable"
              />
              <div className="mt-8 space-y-5 text-pretty text-base leading-relaxed text-navy-900/80 sm:text-lg">
                <p>
                  Yireh Textiles & Sourcing started as a workroom making curtains and soft
                  furnishings for Sydney businesses. Ten years on, that is still
                  the core of what we do — but the floor now also runs
                  upholstery, vehicle and marine interiors, and bulk garment
                  production.
                </p>
                <p>
                  Most of our work comes from other businesses: furniture
                  manufacturers, apparel labels, interior designers, blind
                  retailers and fit-out companies. Trade clients are the hardest
                  ones to keep. They are ordering again next month or they are
                  not, and nobody gives you a second chance on a run that came
                  back wrong.
                </p>
                <p>
                  That pressure shaped how we operate. Our production floor is
                  organised around modular and lean systems rather than a room
                  full of machines, which is why we can take on a four-hundred
                  unit run and a single pair of made-to-measure curtains in the
                  same week without either one slipping.
                </p>
                <p>
                  It also became a service in its own right. We now design
                  production facilities for other curtain and garment
                  manufacturers — floor layout, workflow, line balancing and
                  operator training — because the systems that make our own
                  workroom efficient work just as well in someone else&apos;s.
                </p>
              </div>
            </div>

            {/* Name meaning */}
            <div>
              {/* A photograph, not a card stack (§2.1.2). */}
              <div className="relative mb-6 aspect-[3/2] overflow-hidden rounded-2xl bg-ink">
                <Image
                  src={images.workroom.src}
                  alt={images.workroom.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  placeholder="blur"
                  blurDataURL={images.workroom.blurDataURL}
                  className="object-cover"
                />
              </div>

              <div className="rounded-2xl border border-border bg-sand p-7 sm:p-8">
                <ThreadLinesMark className="size-14" />
                <h2 className="mt-6 font-heading text-xl font-semibold text-navy-950">
                  The name
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-navy-900/80">
                  <em>Yireh</em> is a biblical word meaning{" "}
                  <strong>&ldquo;the Lord provides&rdquo;</strong>. It is where
                  the business gets both its name and the way it approaches
                  work: provide properly, and the rest follows.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-navy-900/80">
                  The mark is <strong>three threads</strong> laid down in
                  gold — one each for the curtains, soft furnishings and
                  upholstery that leave the workroom, every one of them starting
                  from a single line of thread.
                </p>
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border bg-white p-5"
                  >
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block font-heading text-2xl font-semibold leading-none text-navy-950">
                        {stat.value}
                      </span>
                      <span className="mt-2 block text-xs leading-snug text-muted-foreground">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      <ClientStrip />

      {/* The floor itself, photographed — not described. */}
      <PhotoBand
        eyebrow="The workroom"
        heading="Ten years of making, in one room."
        images={[
          images.stepMeasure,
          images.stepCut,
          images.stepFinish,
          images.productionFloor,
        ]}
      />

      {/* Capability summary — photographic tiles, not icon cards (§2.1.2). */}
      <Section tone="sand">
        <Container>
          <SectionHeading
            eyebrow="Capability"
            title="What our floor can actually do"
            description="Five production capabilities under one roof, which means fewer handoffs, fewer suppliers to chase, and one person to call when you need an update."
          />
          <ul className="mt-10 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((s) => {
              const tile = serviceMedia[s.slug]?.hero;
              return (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden bg-ink p-5"
                  >
                    {tile && (
                      <Image
                        src={tile.src}
                        alt={tile.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                        placeholder="blur"
                        blurDataURL={tile.blurDataURL}
                        className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                      />
                    )}
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,23,41,0.88),rgba(12,23,41,0.2)_55%,transparent)]"
                    />
                    <span className="relative font-display text-lg leading-snug text-white">
                      {s.name}
                    </span>
                    <span className="relative mt-1.5 inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-white/70 transition-colors group-hover:text-white">
                      Learn more
                      <ArrowRight
                        className="size-3.5 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* Values */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <SectionHeading
              eyebrow="How we work"
              title="Three things you can hold us to"
              description="None of this is remarkable. It is just what a manufacturer should do, and it is the reason our trade clients stopped shopping around."
            />
            <ul className="space-y-4">
              {values.map((v, i) => (
                <li
                  key={v.title}
                  className="flex gap-5 rounded-2xl border border-border bg-white p-6"
                >
                  <span className="font-heading text-2xl font-semibold leading-none text-gold-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-navy-950">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {v.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="rounded-xl border border-border bg-sand p-6"
              >
                <div className="h-0.5 w-8 bg-gold-500" aria-hidden />
                <h3 className="mt-4 font-heading text-base font-semibold text-navy-950">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Process />
      <EnquirySection />
      <CtaBand />
    </>
  );
}
