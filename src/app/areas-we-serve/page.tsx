import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section, SectionHeading } from "@/components/layout/section";
import { EnquirySection } from "@/components/sections/enquiry-section";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { ctaGold, ctaOutlineLight } from "@/components/ui/cta";
import { breadcrumbSchema } from "@/lib/schema";
import { areas, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Areas We Serve Across Sydney",
  description:
    "Yireh Textiles manufactures in Penrith and services all of Greater Sydney — Western Sydney, the Hills, Hawkesbury, Macarthur, the CBD, Inner West, North Shore, Northern Beaches and the Sutherland Shire.",
  alternates: { canonical: "/areas-we-serve" },
};

const trail = [
  { name: "Home", href: "/" },
  { name: "Areas We Serve", href: "/areas-we-serve" },
];

/** Group areas by region for a scannable index. */
function groupByRegion() {
  const map = new Map<string, typeof areas>();
  for (const area of areas) {
    map.set(area.region, [...(map.get(area.region) ?? []), area]);
  }
  return [...map.entries()];
}

export default function AreasPage() {
  const grouped = groupByRegion();

  return (
    <>
      <JsonLd id="areas-breadcrumb" data={breadcrumbSchema(trail)} />

      <PageHero
        trail={trail}
        eyebrow="Service area"
        title="Made in Penrith, delivered across Sydney"
        lead="Our workroom is in Western Sydney and our vans cover the rest of it. We measure on site, deliver, and install curtains, tracks and blinds from the Hawkesbury to the Shire."
        actions={
          <>
            <Link href="/contact" className={ctaGold("lg")}>
              Check Your Suburb
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
          <SectionHeading
            eyebrow="Sydney coverage"
            title="Find your area"
            description="Not listed? We almost certainly still cover you. Sydney-wide means Sydney-wide — call and ask."
          />

          <div className="mt-12 space-y-12">
            {grouped.map(([region, list]) => (
              <div key={region}>
                <h2 className="flex items-center gap-3 font-heading text-lg font-semibold text-navy-950">
                  <span className="h-px w-8 bg-gold-500" aria-hidden />
                  {region}
                </h2>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/areas-we-serve/${area.slug}`}
                        className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-md hover:shadow-navy-950/5"
                      >
                        <span className="flex items-center gap-2">
                          <MapPin
                            className="size-4 shrink-0 text-gold-500"
                            aria-hidden
                          />
                          <span className="font-heading text-lg font-semibold text-navy-950 transition-colors group-hover:text-gold-600">
                            {area.name}
                          </span>
                        </span>
                        <span className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {area.blurb}
                        </span>
                        <span className="mt-4 text-xs text-navy-900/55">
                          Also covering {area.nearby.slice(0, 3).join(", ")}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="sand" className="py-14 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="What we bring"
            title="The same five capabilities, wherever you are"
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="flex h-full flex-col rounded-xl border border-border bg-white p-5 transition-colors hover:border-gold-300"
                >
                  <span className="font-heading text-base font-semibold text-navy-950">
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

      <EnquirySection />
      <CtaBand />
    </>
  );
}
