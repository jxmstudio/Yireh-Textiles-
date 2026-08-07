import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ClientStrip } from "@/components/sections/client-strip";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyUs } from "@/components/sections/why-us";
import { Process } from "@/components/sections/process";
import { AreasPreview } from "@/components/sections/areas-preview";
import { FaqSection } from "@/components/sections/faq-section";
import { EnquirySection } from "@/components/sections/enquiry-section";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/schema";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom Curtains & Soft Furnishings Sydney | Yireh Textiles",
  description:
    "Custom curtains, Roman blinds, upholstery and soft furnishings manufactured in Penrith, Western Sydney. Ten years supplying furniture brands, designers and homes Sydney-wide. Free quotes.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd id="home-faq" data={faqSchema(faqs)} />
      <Hero />
      <ClientStrip />
      <ServicesGrid />
      <WhyUs />
      <Process />
      <AreasPreview />
      <FaqSection items={faqs} />
      <EnquirySection />
      <CtaBand />
    </>
  );
}
