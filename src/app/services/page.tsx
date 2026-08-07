import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section, SectionHeading } from "@/components/layout/section";
import { ServiceCard } from "@/components/sections/services-grid";
import { Process } from "@/components/sections/process";
import { EnquirySection } from "@/components/sections/enquiry-section";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { ctaGold, ctaOutlineLight } from "@/components/ui/cta";
import { breadcrumbSchema } from "@/lib/schema";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Curtains and blinds, soft furnishings and upholstery, campervan and marine interiors, bulk garment manufacturing, and production systems consulting — all made in Penrith, Sydney.",
  alternates: { canonical: "/services" },
};

const trail = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd id="services-breadcrumb" data={breadcrumbSchema(trail)} />

      <PageHero
        trail={trail}
        eyebrow="What we make"
        title="Everything we manufacture, in one place"
        lead="Five capabilities, one production floor in Penrith. Most of our clients start with one and end up using two or three."
        actions={
          <>
            <Link href="/contact" className={ctaGold("lg")}>
              Get a Free Quote
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
            eyebrow="Capabilities"
            title="Curtains and soft furnishings first, but far from all we do"
            description="Our two main lines are window furnishings and soft furnishings. Alongside them we run vehicle and marine upholstery, bulk garment production, and a consulting arm that designs production floors for other manufacturers."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
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
