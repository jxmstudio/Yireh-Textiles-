import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section, SectionHeading } from "@/components/layout/section";
import { WovenYMark } from "@/components/brand/logo";
import { ClientStrip } from "@/components/sections/client-strip";
import { Process } from "@/components/sections/process";
import { EnquirySection } from "@/components/sections/enquiry-section";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { ctaGold, ctaOutlineLight } from "@/components/ui/cta";
import { breadcrumbSchema } from "@/lib/schema";
import { differentiators, services, site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Yireh Textiles has manufactured curtains, soft furnishings and garments from Penrith, Western Sydney for over ten years, supplying furniture brands, apparel labels and designers.",
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
        trail={trail}
        eyebrow="About Yireh Textiles"
        title="Ten years of manufacturing, from a workroom in Penrith"
        lead="We are a Western Sydney manufacturer, not a reseller. Everything we quote is made by our own team, on our own floor, to a standard that trade clients have kept coming back to for a decade."
        actions={
          <>
            <Link href="/contact" className={ctaGold("lg")}>
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
                  Yireh Textiles started as a workroom making curtains and soft
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
              <div className="rounded-2xl border border-border bg-sand p-7 sm:p-8">
                <WovenYMark className="size-14" />
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
                  The mark is a monogram <strong>Y</strong> woven from three
                  threads, with a gold weft passing over one arm and under the
                  other — the same over-and-under that holds every piece of
                  cloth we make together.
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

      {/* Capability summary */}
      <Section tone="sand">
        <Container>
          <SectionHeading
            eyebrow="Capability"
            title="What our floor can actually do"
            description="Five production capabilities under one roof, which means fewer handoffs, fewer suppliers to chase, and one person to call when you need an update."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-border bg-white p-6 transition-colors hover:border-gold-300"
                >
                  <h3 className="font-heading text-lg font-semibold text-navy-950 transition-colors group-hover:text-gold-600">
                    {s.name}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900">
                    Learn more
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            ))}
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
