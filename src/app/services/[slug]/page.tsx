import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Phone, Users } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section, SectionHeading } from "@/components/layout/section";
import { EnquirySection } from "@/components/sections/enquiry-section";
import { CtaBand } from "@/components/sections/cta-band";
import { PhotoBand } from "@/components/shared/photo-band";
import { JsonLd } from "@/components/seo/json-ld";
import { ctaSolid, ctaOnDark, ctaOutlineLight } from "@/components/ui/cta";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { curtainRange, serviceMedia } from "@/content/products";
import { getService, services, site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${site.url}/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const media = serviceMedia[service.slug];
  const others = services.filter((s) => s.slug !== service.slug);
  const trail = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.name, href: `/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd id={`service-${service.slug}`} data={serviceSchema(service)} />
      <JsonLd
        id={`breadcrumb-${service.slug}`}
        data={breadcrumbSchema(trail)}
      />

      <PageHero
        trail={trail}
        eyebrow={service.name}
        title={service.title}
        lead={service.summary}
        image={media?.hero}
        actions={
          <>
            <Link href="/contact" className={ctaOnDark("lg")}>
              Get a Quote
              <ArrowRight aria-hidden />
            </Link>
            <a href={site.phone.href} className={ctaOutlineLight("lg")}>
              <Phone aria-hidden />
              {site.phone.display}
            </a>
          </>
        }
      />

      {/* Overview + product list */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              {/* A photograph, not an icon (§2.1.2). */}
              {media && (
                <div className="relative mb-8 aspect-[3/2] overflow-hidden">
                  <Image
                    src={media.gallery[0].src}
                    alt={media.gallery[0].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    quality={90}
                    placeholder="blur"
                    blurDataURL={media.gallery[0].blurDataURL}
                    className="object-cover"
                  />
                </div>
              )}
              <div className="mt-6 space-y-5">
                {service.intro.map((para) => (
                  <p
                    key={para.slice(0, 40)}
                    className="text-pretty text-base leading-relaxed text-navy-900/80 sm:text-lg"
                  >
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {service.highlights.map((h) => (
                  <div
                    key={h.title}
                    className="rounded-xl border border-border bg-white p-5"
                  >
                    <div className="h-0.5 w-8 bg-gold-500" aria-hidden />
                    <h3 className="mt-4 font-heading text-base font-semibold text-navy-950">
                      {h.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {h.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-sand p-7 sm:p-8">
              <h2 className="font-heading text-xl font-semibold text-navy-950">
                What we make
              </h2>
              <ul className="mt-6 space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-gold-600"
                      aria-hidden
                    />
                    <span className="text-navy-900/85">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-navy-200/60 pt-6">
                <h3 className="flex items-center gap-2 font-heading text-base font-semibold text-navy-950">
                  <Users className="size-4 text-gold-600" aria-hidden />
                  Who we make it for
                </h3>
                <ul className="mt-4 space-y-2">
                  {service.audience.map((a) => (
                    <li
                      key={a}
                      className="flex items-start gap-2 text-sm text-navy-900/75"
                    >
                      <span
                        className="mt-2 size-1 shrink-0 rounded-full bg-gold-500"
                        aria-hidden
                      />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className={ctaSolid("md", "mt-8 w-full")}
              >
                Enquire about {service.name.toLowerCase()}
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/*
        The curtain range — a photo-led breakdown, only on the curtains page
        (client request, Aug 2026: "more detailed and photo-oriented").
      */}
      {service.slug === "curtains-and-blinds" && (
        <Section tone="sand">
          <Container>
            <SectionHeading
              eyebrow="The range"
              title="Every curtain we sew"
              description="From sheers to dense acoustic curtains for mining sites — each one cut and sewn to measure in our own workroom."
            />
            <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {curtainRange.map((item) => (
                <li key={item.title}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL={item.image.blurDataURL}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-navy-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-900/75">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      {/* Service area — one line, no suburb chips (client request, Aug 2026) */}
      <Section tone="sand" className="py-14 sm:py-16">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Service area"
              title={`${service.name} across all of Sydney`}
              description="We manufacture in our own Sydney workroom and cover the whole of Sydney for measuring, delivery and installation."
            />
            <Link
              href="/areas-we-serve"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-600"
            >
              All areas
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </Section>

      {media && (
        <PhotoBand
          eyebrow="Recent work"
          heading={`${service.name} out of our workroom.`}
          images={media.gallery}
        />
      )}

      {/* Other services */}
      <Section className="py-14 sm:py-16">
        <Container>
          <h2 className="font-heading text-2xl font-semibold text-navy-950">
            Other things we manufacture
          </h2>
          {/* Photographic tiles, not icon cards (§2.1.2). */}
          <ul className="mt-8 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => {
              const tile = serviceMedia[s.slug]?.hero;
              return (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden bg-ink p-6"
                  >
                    {tile && (
                      <Image
                        src={tile.src}
                        alt={tile.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        placeholder="blur"
                        blurDataURL={tile.blurDataURL}
                        className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                      />
                    )}
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,23,41,0.88),rgba(12,23,41,0.2)_55%,transparent)]"
                    />
                    <span className="relative font-display text-xl text-white">
                      {s.name}
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

      <EnquirySection
        defaultTopic={service.name}
        title={`Get a quote for ${service.name.toLowerCase()}`}
      />
      <CtaBand />
    </>
  );
}
