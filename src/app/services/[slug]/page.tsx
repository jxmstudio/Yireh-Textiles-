import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Phone, Users } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section, SectionHeading } from "@/components/layout/section";
import { ServiceIcon } from "@/components/brand/service-icon";
import { EnquirySection } from "@/components/sections/enquiry-section";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { ctaGold, ctaOutlineLight } from "@/components/ui/cta";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { areas, getService, services, site } from "@/lib/site";

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
        actions={
          <>
            <Link href="/contact" className={ctaGold("lg")}>
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
              <span className="flex size-14 items-center justify-center rounded-xl bg-navy-950 text-gold-400">
                <ServiceIcon icon={service.icon} className="size-7" />
              </span>
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
                className={ctaGold("md", "mt-8 w-full")}
              >
                Enquire about {service.name.toLowerCase()}
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Areas */}
      <Section tone="sand" className="py-14 sm:py-16">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Service area"
              title={`${service.name} across Greater Sydney`}
              description={`We manufacture in Penrith and cover the whole of Sydney for measuring, delivery and installation.`}
            />
            <Link
              href="/areas-we-serve"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-600"
            >
              All areas
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {areas.map((a) => (
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

      {/* Other services */}
      <Section className="py-14 sm:py-16">
        <Container>
          <h2 className="font-heading text-2xl font-semibold text-navy-950">
            Other things we manufacture
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-border bg-white p-5 transition-colors hover:border-gold-300"
                >
                  <span className="flex size-10 items-center justify-center rounded-lg bg-navy-950 text-gold-400">
                    <ServiceIcon icon={s.icon} className="size-5" />
                  </span>
                  <span className="mt-4 font-heading text-base font-semibold text-navy-950 transition-colors group-hover:text-gold-600">
                    {s.name}
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.summary}
                  </span>
                </Link>
              </li>
            ))}
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
