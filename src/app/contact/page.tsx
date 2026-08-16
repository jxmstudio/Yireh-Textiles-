import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { images } from "@/content/images";
import { Container, Section } from "@/components/layout/section";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { FaqSection } from "@/components/sections/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import { ctaOnDark, ctaOutlineLight } from "@/components/ui/cta";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { areas, faqs, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Quotes",
  description: `Get a quote from Yireh Textiles. Call ${site.phone.display} between 8am and 6pm, email ${site.email}, or send the enquiry form. Penrith workroom, servicing all of Sydney.`,
  alternates: { canonical: "/contact" },
};

const trail = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

const contactCards = [
  {
    icon: Phone,
    label: "Call us",
    value: site.phone.display,
    href: site.phone.href,
    note: "Fastest response, 8am – 6pm",
  },
  {
    icon: Mail,
    label: "Email us",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "We reply within one business day",
  },
  {
    icon: MapPin,
    label: "Our workroom",
    value: `${site.address.suburb}, ${site.address.state} ${site.address.postcode}`,
    href: undefined,
    note: "Servicing all of Greater Sydney",
  },
  {
    icon: Clock,
    label: "Hours",
    value: site.hours.display,
    href: undefined,
    note: "Trade enquiries welcome any time",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd id="contact-breadcrumb" data={breadcrumbSchema(trail)} />
      <JsonLd id="contact-faq" data={faqSchema(faqs.slice(0, 5))} />

      <PageHero
        image={images.work10}
        trail={trail}
        eyebrow="Contact"
        title="Tell us what you need made"
        lead="Call us, email us, or send the form below. Either way you will get a written quote with the materials, quantities and lead time on it before anything starts."
        actions={
          <>
            <a href={site.phone.href} className={ctaOnDark("lg")}>
              <Phone aria-hidden />
              {site.phone.display}
            </a>
            <a href={`mailto:${site.email}`} className={ctaOutlineLight("lg")}>
              <Mail aria-hidden />
              Email us
            </a>
          </>
        }
      />

      {/* Contact cards */}
      <Section className="py-12 sm:py-14">
        <Container>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const inner = (
                <>
                  <span className="flex size-11 items-center justify-center rounded-lg bg-navy-950 text-gold-400">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {card.label}
                  </span>
                  <span className="mt-2 block break-words font-heading text-base font-semibold text-navy-950">
                    {card.value}
                  </span>
                  <span className="mt-1.5 block text-xs text-muted-foreground">
                    {card.note}
                  </span>
                </>
              );

              return (
                <li key={card.label}>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="block h-full rounded-2xl border border-border bg-white p-6 transition-colors hover:border-gold-300"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="h-full rounded-2xl border border-border bg-white p-6">
                      {inner}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* Form */}
      <Section tone="sand" className="py-12 sm:py-16" id="enquire">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-9">
              <div className="h-0.5 w-16 bg-gold-500" aria-hidden />
              <h2 className="mt-6 font-heading text-2xl font-semibold text-navy-950">
                Request a quote
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The more you can tell us about the job, the tighter the quote.
                Sizes, quantities, fabric and timeframe all help.
              </p>
              <div className="mt-8">
                <EnquiryForm />
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-white p-6">
                <h2 className="font-heading text-lg font-semibold text-navy-950">
                  What we can quote on
                </h2>
                <ul className="mt-4 space-y-2">
                  {services.map((s) => (
                    <li
                      key={s.slug}
                      className="flex items-start gap-2 text-sm text-navy-900/75"
                    >
                      <span
                        className="mt-2 size-1 shrink-0 rounded-full bg-gold-500"
                        aria-hidden
                      />
                      {s.name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-navy-950 p-6 text-navy-100">
                <h2 className="font-heading text-lg font-semibold text-white">
                  Trade &amp; bulk enquiries
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-navy-100/75">
                  Furniture brands, apparel labels, designers and fit-out
                  companies: mention volumes and timeframes in your message and
                  we will come back with trade pricing.
                </p>
                <a
                  href={site.phone.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300"
                >
                  <Phone className="size-4" aria-hidden />
                  {site.phone.display}
                </a>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6">
                <h2 className="font-heading text-lg font-semibold text-navy-950">
                  Areas we cover
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We measure, deliver and install across Greater Sydney.
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {areas.map((a) => (
                    <li
                      key={a.slug}
                      className="rounded-full border border-border px-3 py-1 text-xs text-navy-900/70"
                    >
                      {a.name}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <FaqSection
        items={faqs}
        eyebrow="Before you call"
        title="Answers to the usual questions"
        description="A few things worth knowing before you get in touch. Anything else, just ask."
      />
    </>
  );
}
