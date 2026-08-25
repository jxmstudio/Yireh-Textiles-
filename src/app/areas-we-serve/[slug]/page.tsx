import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section, SectionHeading } from "@/components/layout/section";
import { EnquirySection } from "@/components/sections/enquiry-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { ctaSolid, ctaOnDark, ctaOutlineLight } from "@/components/ui/cta";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { areaMedia, serviceMedia } from "@/content/products";
import { areas, getArea, services, site } from "@/lib/site";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/areas-we-serve/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};

  const title = `Custom Curtains & Soft Furnishings ${area.name}`;
  const description = `Made-to-measure curtains, Roman blinds, upholstery and soft furnishings for ${area.name} and surrounding ${area.region}. Manufactured in Penrith, measured and installed on site. Call ${site.phone.display}.`;

  return {
    title,
    description,
    alternates: { canonical: `/areas-we-serve/${area.slug}` },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: `${site.url}/areas-we-serve/${area.slug}`,
    },
  };
}

/** Location-specific FAQs, generated so each page answers local intent. */
function areaFaqs(name: string, nearby: string[]) {
  return [
    {
      q: `Do you make curtains for ${name}?`,
      a: `Yes. We manufacture custom curtains, sheers, privacy curtains and Roman blinds in our Penrith workroom and service ${name} along with ${nearby.slice(0, 3).join(", ")}. We measure on site, make to your exact drop, and install.`,
    },
    {
      q: `Do you charge to measure and quote in ${name}?`,
      a: `Measure and quote for ${name} jobs is free. We will come to you, take the measurements properly, and send a written quote with materials, quantities and a lead time on it before anything is made.`,
    },
    {
      q: `Can you do upholstery and cushions in ${name}, not just curtains?`,
      a: `Yes. Sofas, lounges, dining and occasional chairs, bedheads, scatter cushions and bench seating are all made on the same floor. Many ${name} customers order window furnishings and upholstery together.`,
    },
    {
      q: `Do you work with businesses in ${name}?`,
      a: `Most of our work is trade. We supply interior designers, builders, blind retailers, furniture brands and fit-out companies across ${name} and the wider ${nearby.length ? "region" : "area"}, including fire-retardant fabrics for commercial compliance.`,
    },
  ];
}

export default async function AreaPage({
  params,
}: PageProps<"/areas-we-serve/[slug]">) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const faqs = areaFaqs(area.name, area.nearby);
  const others = areas.filter((a) => a.slug !== area.slug);
  const trail = [
    { name: "Home", href: "/" },
    { name: "Areas We Serve", href: "/areas-we-serve" },
    { name: area.name, href: `/areas-we-serve/${area.slug}` },
  ];

  return (
    <>
      <JsonLd id={`area-breadcrumb-${area.slug}`} data={breadcrumbSchema(trail)} />
      <JsonLd id={`area-faq-${area.slug}`} data={faqSchema(faqs)} />

      <PageHero
        trail={trail}
        eyebrow={area.region}
        title={`Custom curtains & soft furnishings in ${area.name}`}
        lead={area.blurb}
        image={areaMedia[area.slug]}
        actions={
          <>
            <Link href="/contact" className={ctaOnDark("lg")}>
              Free Measure &amp; Quote
              <ArrowRight aria-hidden />
            </Link>
            <a href={site.phone.href} className={ctaOutlineLight("lg")}>
              <Phone aria-hidden />
              {site.phone.display}
            </a>
          </>
        }
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow={`Serving ${area.name}`}
                title={`A Sydney workroom that actually comes to ${area.name}`}
              />
              <div className="mt-8 space-y-5 text-pretty text-base leading-relaxed text-navy-900/80 sm:text-lg">
                <p>
                  Yireh Textiles & Sourcing manufactures curtains, blinds, upholstery and
                  soft furnishings from our own facility in Penrith. Nothing is
                  outsourced and nothing is bought in off a shelf, which means
                  what we quote for {area.name} is what our own team makes.
                </p>
                <p>
                  We measure on site across {area.name} and the surrounding{" "}
                  {area.region.toLowerCase()}, make to your exact drop and
                  width, then come back and install. For trade clients we
                  manufacture to your spec and you handle the fit yourself.
                </p>
                <p>
                  Ten years of production work for furniture brands, apparel
                  labels and fit-out companies sits behind every job, whether it
                  is one window or a whole building.
                </p>
              </div>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Free measure and written quote",
                  "Made to measure, not cut down",
                  "On-site installation available",
                  "Trade and residential welcome",
                  "Fire-retardant fabrics available",
                  "Fabric supplied or bring your own",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-navy-900/80"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-gold-600"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-sand p-7 sm:p-8">
              <h2 className="flex items-center gap-2 font-heading text-xl font-semibold text-navy-950">
                <MapPin className="size-5 text-gold-600" aria-hidden />
                Also covering
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {area.name} sits inside our regular {area.region} run, along
                with:
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {area.nearby.map((n) => (
                  <li
                    key={n}
                    className="rounded-full border border-navy-200 bg-white px-3.5 py-1.5 text-sm text-navy-900/80"
                  >
                    {n}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-navy-200/60 pt-6">
                <h3 className="font-heading text-base font-semibold text-navy-950">
                  Getting a quote in {area.name}
                </h3>
                <ol className="mt-4 space-y-3 text-sm text-navy-900/80">
                  <li className="flex gap-3">
                    <span className="font-heading font-semibold text-gold-700">
                      1
                    </span>
                    Call or send the form with your suburb and what you need.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-heading font-semibold text-gold-700">
                      2
                    </span>
                    We book a measure, or work from your sizes if you have them.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-heading font-semibold text-gold-700">
                      3
                    </span>
                    You get a written quote. Nothing is made until you approve
                    it.
                  </li>
                </ol>
              </div>

              <Link href="/contact" className={ctaSolid("md", "mt-8 w-full")}>
                Book a free measure
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services in this area */}
      <Section tone="sand" className="py-14 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title={`What we make for ${area.name}`}
          />
          {/* Photographic tiles, not icon cards (§2.1.2). */}
          <ul className="mt-10 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const tile = serviceMedia[s.slug]?.hero;
              return (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group relative flex aspect-[3/2] flex-col justify-end overflow-hidden bg-ink p-6"
                  >
                    {tile && (
                      <Image
                        src={tile.src}
                        alt={tile.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        placeholder="blur"
                        blurDataURL={tile.blurDataURL}
                        className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                      />
                    )}
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,23,41,0.9),rgba(12,23,41,0.25)_60%,transparent)]"
                    />
                    <span className="relative font-display text-lg text-white">
                      {s.name} in {area.name}
                    </span>
                    <span className="relative mt-2 text-sm leading-relaxed text-white/75">
                      {s.summary}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <FaqSection
        items={faqs}
        eyebrow={`${area.name} FAQs`}
        title={`Common questions from ${area.name}`}
        description="If your question is not covered, call us and ask. We would rather answer it than have you guess."
      />

      <EnquirySection
        title={`Get a quote for your ${area.name} job`}
        description={`Tell us what you need and we will come back to you with a written quote. We cover ${area.name} and the surrounding ${area.region.toLowerCase()} for measuring, delivery and installation.`}
      />

      {/* Nearby areas — internal linking */}
      <Section className="py-14 sm:py-16">
        <Container>
          <h2 className="font-heading text-2xl font-semibold text-navy-950">
            Other Sydney areas we cover
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {others.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/areas-we-serve/${a.slug}`}
                  className="inline-flex rounded-full border border-border bg-white px-4 py-2 text-sm text-navy-900/80 transition-colors hover:border-gold-300 hover:text-navy-950"
                >
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
