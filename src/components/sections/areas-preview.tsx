import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/layout/section";
import { areas } from "@/lib/site";

export function AreasPreview() {
  return (
    <Section tone="sand">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Where we work"
            title="Based in Penrith, working across all of Sydney"
            description="Our workroom is in Western Sydney, but our jobs are not. We measure, deliver and install from the Hawkesbury through to the CBD, the Northern Beaches and the Sutherland Shire."
          />
          <Link
            href="/areas-we-serve"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-600"
          >
            All areas
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <li key={area.slug}>
              <Link
                href={`/areas-we-serve/${area.slug}`}
                className="group flex h-full items-start gap-3 rounded-xl border border-border bg-white px-4 py-4 transition-colors hover:border-gold-300"
              >
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-gold-500"
                  aria-hidden
                />
                <span>
                  <span className="block text-sm font-semibold text-navy-950 transition-colors group-hover:text-gold-600">
                    {area.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    {area.region}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
