import { Container, Section, SectionHeading } from "@/components/layout/section";
import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <Section tone="navy" className="relative overflow-hidden">
      <div className="weave-texture-light absolute inset-0" aria-hidden />
      <Container className="relative">
        <SectionHeading
          tone="onDark"
          eyebrow="How it works"
          title="From first phone call to installed"
          description="No mystery, no chasing. You know what happens next at every stage, and nothing is manufactured until you have approved a written quote."
        />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.step} className="bg-navy-950 p-6">
              <span className="font-heading text-2xl font-semibold text-gold-400">
                {step.step}
              </span>
              <h3 className="mt-3 font-heading text-base font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-navy-100/70">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
