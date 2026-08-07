import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/layout/section";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { site } from "@/lib/site";

export function EnquirySection({
  defaultTopic,
  title = "Get a quote for your job",
  description = "Tell us your suburb and what you need made. We will come back to you with a written quote — materials, quantities and lead time included.",
  eyebrow = "Enquire",
}: {
  defaultTopic?: string;
  title?: string;
  description?: string;
  eyebrow?: string;
}) {
  return (
    <Section tone="sand" id="enquire">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
            />

            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-3.5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy-950 text-gold-400">
                  <Phone className="size-4.5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Call us
                  </span>
                  <a
                    href={site.phone.href}
                    className="mt-1 block font-heading text-lg font-semibold text-navy-950 hover:text-gold-600"
                  >
                    {site.phone.display}
                  </a>
                </span>
              </li>

              <li className="flex items-start gap-3.5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy-950 text-gold-400">
                  <Mail className="size-4.5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Email
                  </span>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 block break-all text-sm font-medium text-navy-950 hover:text-gold-600"
                  >
                    {site.email}
                  </a>
                </span>
              </li>

              <li className="flex items-start gap-3.5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy-950 text-gold-400">
                  <Clock className="size-4.5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Hours
                  </span>
                  <span className="mt-1 block text-sm font-medium text-navy-950">
                    {site.hours.display}
                  </span>
                </span>
              </li>

              <li className="flex items-start gap-3.5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy-950 text-gold-400">
                  <MapPin className="size-4.5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Workroom
                  </span>
                  <span className="mt-1 block text-sm font-medium text-navy-950">
                    {site.address.suburb}, {site.address.region} {site.address.state}
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 h-0.5 w-16 bg-gold-500" aria-hidden />
            <EnquiryForm defaultTopic={defaultTopic} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
