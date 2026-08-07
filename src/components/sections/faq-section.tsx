import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container, Section, SectionHeading } from "@/components/layout/section";

export function FaqSection({
  items,
  title = "Questions we get asked",
  description = "If yours is not here, call us and ask. We would rather answer it up front than have you guess.",
  eyebrow = "FAQs",
}: {
  items: { q: string; a: string }[];
  title?: string;
  description?: string;
  eyebrow?: string;
}) {
  return (
    <Section id="faqs">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />

          <Accordion className="w-full">
            {items.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="text-left font-heading text-base font-semibold text-navy-950">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}
