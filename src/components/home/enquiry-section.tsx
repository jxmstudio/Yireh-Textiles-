import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { SectionLabel } from "@/components/shared/section-label";
import { EnquiryForm } from "./enquiry-form";
import { enquiry } from "@/content/home";
import { images } from "@/content/images";
import { areas, site } from "@/lib/site";

/**
 * Enquiry (plan §3.10). Split 6/6 on linen — form on white on the left, contact
 * card on the right with a tel: link, the inbox, the workroom location, hours
 * and a service-area line for local SEO.
 */
export function EnquirySection() {
  return (
    <section id="enquiry" className="bg-linen">
      <div className="grid lg:grid-cols-2">
        {/*
          The photograph is the layout here too (§2.1.1): a half-viewport image
          bled to the left edge rather than a text-and-form section on flat
          colour, which is the office-type pattern the client rejected.
        */}
        <div className="relative min-h-[22rem] lg:min-h-full">
          <Image
            src={images.stepInstall.src}
            alt={images.stepInstall.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={90}
            placeholder="blur"
            blurDataURL={images.stepInstall.blurDataURL}
            className="object-cover"
          />
        </div>

        <div className="section-y px-5 sm:px-8 lg:px-12 xl:px-20">
          <div>
            <SectionLabel>{enquiry.eyebrow}</SectionLabel>
            <h2 className="display-lg mt-6 text-ink text-balance">
              {enquiry.heading}
            </h2>
            <p className="body-lg mt-6 text-stone-600">{enquiry.body}</p>

            <dl className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <Phone
                  className="mt-1 size-5 shrink-0 text-[var(--gold-600)]"
                  aria-hidden
                />
                <div>
                  <dt className="sr-only">Phone</dt>
                  <dd>
                    <a
                      href={site.phone.href}
                      className="font-display text-2xl text-ink transition-colors hover:text-[var(--blue-500)]"
                    >
                      {site.phone.display}
                    </a>
                    <p className="mt-1 text-sm text-stone-600">
                      {site.hours.display}
                    </p>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail
                  className="mt-1 size-5 shrink-0 text-[var(--gold-600)]"
                  aria-hidden
                />
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-[0.95rem] text-ink transition-colors hover:text-[var(--blue-500)]"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin
                  className="mt-1 size-5 shrink-0 text-[var(--gold-600)]"
                  aria-hidden
                />
                <div>
                  <dt className="sr-only">Where we are</dt>
                  <dd className="text-[0.95rem] text-ink">
                    {site.address.suburb}, {site.address.region} — serving all of
                    Sydney
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-10 border-t border-stone-300/70 pt-6">
              <p className="text-sm leading-relaxed text-stone-600">
                <span className="text-stone-600/70">Measuring and installing across </span>
                {areas.map((a, i) => (
                  <span key={a.slug}>
                    {a.name}
                    {i < areas.length - 1 ? ", " : "."}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <EnquiryForm className="mt-12" />
        </div>
      </div>
    </section>
  );
}
