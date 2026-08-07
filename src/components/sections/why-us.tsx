import { Container, Section, SectionHeading } from "@/components/layout/section";
import { differentiators, stats } from "@/lib/site";

export function WhyUs() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Why Yireh"
              title="A workroom that businesses keep coming back to"
              description="Trade clients do not stay out of loyalty. They stay because the work is right, the run is on time, and nothing has to be sent back."
            />

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-gold-500 pl-4">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-heading text-3xl font-semibold leading-none text-navy-950">
                      {stat.value}
                    </span>
                    <span className="mt-2 block text-sm leading-snug text-muted-foreground">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {differentiators.map((item, i) => (
              <li
                key={item.title}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <span className="font-heading text-sm font-semibold text-gold-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-navy-950">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
