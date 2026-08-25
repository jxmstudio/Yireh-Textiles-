import type { Metadata } from "next";
import { WorkroomHero } from "@/components/home/workroom-hero";
import { TradeCredibility } from "@/components/home/trade-credibility";
import { WorkroomIntro } from "@/components/home/workroom-intro";
import { CapabilityIndex } from "@/components/home/capability-index";
import { HowWeMake } from "@/components/home/how-we-make";
import { FabricStrip } from "@/components/home/fabric-strip";
import { ProductionSystems } from "@/components/home/production-systems";
import { FeaturedProject } from "@/components/home/featured-project";
import { WorkMarquee } from "@/components/home/work-marquee";
import { EnquirySection } from "@/components/home/enquiry-section";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/schema";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom Curtains & Soft Furnishings Sydney | Yireh Textiles & Sourcing",
  description:
    "A Sydney soft furnishing workroom. Ten years making curtains, blinds, upholstery and soft furnishings in Penrith for furniture brands, designers and homes Sydney-wide.",
  alternates: { canonical: "/" },
};

/**
 * Homepage, built in the order set out in the plan §3.1 → §3.11.
 *
 * The structural rule the whole page follows: the photograph is the layout.
 * Every section is anchored by an image at ≥50% viewport width, there is not a
 * single icon card anywhere, and the only flat-colour section is the footer.
 */
export default function HomePage() {
  return (
    <>
      <JsonLd id="home-faq" data={faqSchema(faqs)} />
      <WorkroomHero />
      <TradeCredibility />
      <WorkroomIntro />
      <CapabilityIndex />
      <HowWeMake />
      <FabricStrip />
      <ProductionSystems />
      <FeaturedProject />
      <WorkMarquee />
      <EnquirySection />
    </>
  );
}
