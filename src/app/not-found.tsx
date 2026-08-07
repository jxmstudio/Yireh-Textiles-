import Link from "next/link";
import { Phone } from "lucide-react";
import { Container, Section } from "@/components/layout/section";
import { WovenYMark } from "@/components/brand/logo";
import { ctaGold, ctaOutline } from "@/components/ui/cta";
import { services, site } from "@/lib/site";

export default function NotFound() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <WovenYMark className="mx-auto size-14" />
          <p className="mt-8 font-heading text-sm font-semibold uppercase tracking-[0.22em] text-gold-600">
            404
          </p>
          <h1 className="mt-4 font-heading text-3xl font-semibold text-navy-950 sm:text-4xl">
            We couldn&apos;t find that page
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The link may be out of date. Try one of our service pages, or just
            call us and tell us what you need made.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className={ctaGold("lg")}>
              Back to home
            </Link>
            <a href={site.phone.href} className={ctaOutline("lg")}>
              <Phone aria-hidden />
              {site.phone.display}
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-flex rounded-full border border-border bg-white px-4 py-2 text-sm text-navy-900/80 transition-colors hover:border-gold-300"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
