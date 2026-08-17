import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/layout/section";
import { serviceMedia } from "@/content/products";
import { services, type Service } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  featured = false,
}: {
  service: Service;
  featured?: boolean;
}) {
  const photo = serviceMedia[service.slug]?.hero;

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-lg hover:shadow-navy-950/5",
        featured && "sm:pb-1",
      )}
    >
      <span
        className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-gold-500 transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden
      />

      {/* A photograph, not an icon (§2.1.2). */}
      {photo && (
        <div className="relative aspect-[3/2] overflow-hidden bg-ink">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={photo.blurDataURL}
            className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-heading text-xl font-semibold text-navy-950">
          {service.name}
        </h3>
        <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
          {service.summary}
        </p>

        <ul className="mt-5 space-y-1.5">
          {service.items.slice(0, 3).map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-navy-900/70"
            >
              <span
                className="mt-2 size-1 shrink-0 rounded-full bg-gold-500"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors group-hover:text-gold-600">
          Explore {service.name.toLowerCase()}
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}

export function ServicesGrid() {
  return (
    <Section tone="sand" id="services">
      <Container>
        <SectionHeading
          eyebrow="What we make"
          title="Five things we manufacture, all under one roof in Penrith"
          description="Curtains and soft furnishings are the bulk of our work. The rest of the floor handles vehicle and marine interiors, bulk garment runs, and the production systems that let other manufacturers do the same."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              featured={service.featured}
            />
          ))}

          <div className="flex flex-col justify-between rounded-2xl border border-navy-900 bg-navy-950 p-7 text-navy-100 sm:p-8">
            <div>
              <h3 className="font-heading text-xl font-semibold text-white">
                Not sure which one you need?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-100/75">
                Most jobs cross over. Tell us what you are trying to make and we
                will tell you straight whether we are the right workroom for it.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
            >
              Talk to us about your job
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
