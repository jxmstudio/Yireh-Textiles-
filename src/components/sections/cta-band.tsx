import Link from "next/link";
import { Phone } from "lucide-react";
import { Container } from "@/components/layout/section";
import { ctaGold, ctaOutlineLight } from "@/components/ui/cta";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Tell us what you need made.",
  body = "Send through your suburb and what you are after, or call us during business hours. You will get a written quote with materials, quantities and a lead time on it.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="weave-texture-light absolute inset-0" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gold-500" aria-hidden />
      <Container className="relative py-14 sm:py-16">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-balance font-heading text-2xl font-semibold text-white sm:text-3xl">
              {title}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-navy-100/80">
              {body}
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link href="/contact" className={ctaGold("lg", "w-full sm:w-auto")}>
              Request a Quote
            </Link>
            <a
              href={site.phone.href}
              className={ctaOutlineLight("lg", "w-full sm:w-auto")}
            >
              <Phone aria-hidden />
              {site.phone.display}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
