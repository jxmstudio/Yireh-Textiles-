import Link from "next/link";
import { ArrowRight, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/section";
import { ctaGold, ctaOutlineLight } from "@/components/ui/cta";
import { site } from "@/lib/site";

const proofPoints = [
  "Made to measure, not cut down",
  "Trade volume and one-offs",
  "Measured and installed Sydney-wide",
];

/**
 * The fabric-swatch stack. Built from CSS gradients rather than photography so
 * the hero holds up before the client's product photos arrive; each panel can
 * later take a background image without changing the layout.
 */
function SwatchStack() {
  return (
    <div
      className="relative mx-auto aspect-4/5 w-full max-w-md lg:max-w-none"
      aria-hidden
    >
      <div className="absolute inset-y-8 left-0 w-[42%] rotate-[-4deg] rounded-2xl bg-gradient-to-b from-navy-700 to-navy-900 shadow-2xl shadow-navy-950/40">
        <div className="drape-texture absolute inset-0 rounded-2xl" />
        <div className="absolute inset-x-4 top-4 h-px bg-gold-500/60" />
      </div>

      <div className="absolute inset-y-0 left-[26%] w-[46%] rounded-2xl bg-gradient-to-b from-sand to-sand-dark shadow-2xl shadow-navy-950/30">
        <div className="weave-texture absolute inset-0 rounded-2xl" />
        <div className="absolute inset-x-5 top-5 h-px bg-gold-500" />
        <div className="absolute inset-x-5 bottom-5 h-px bg-gold-500/50" />
      </div>

      <div className="absolute inset-y-12 right-0 w-[38%] rotate-[4deg] rounded-2xl bg-gradient-to-b from-gold-400 to-gold-600 shadow-2xl shadow-navy-950/40">
        <div className="drape-texture absolute inset-0 rounded-2xl" />
      </div>

      {/* Floating credential card */}
      <div className="absolute -bottom-6 left-1/2 w-64 -translate-x-1/2 rounded-xl border border-white/15 bg-navy-950/90 p-4 backdrop-blur">
        <div className="flex items-center gap-3">
          <ShieldCheck className="size-8 shrink-0 text-gold-400" />
          <div>
            <p className="font-heading text-lg font-semibold leading-none text-white">
              10 years
            </p>
            <p className="mt-1 text-xs leading-snug text-navy-100/70">
              manufacturing for Australian brands
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="drape-texture absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -left-40 top-0 size-[32rem] rounded-full bg-navy-800/40 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gold-500"
        aria-hidden
      />

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-navy-100/85 w-fit">
              <MapPin className="size-3.5 text-gold-400" aria-hidden />
              Penrith workroom · Servicing all of Greater Sydney
            </p>

            <h1 className="mt-6 max-w-xl text-balance font-heading text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
              Curtains and soft furnishings,{" "}
              <span className="text-gold-400">made properly</span> in Western
              Sydney.
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-navy-100/80">
              For ten years we have manufactured custom curtains, Roman blinds,
              upholstery and cushions from our own facility in Penrith — for
              furniture brands, interior designers, fit-out companies and homes
              right across Sydney.
            </p>

            <ul className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {proofPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm text-navy-100/80"
                >
                  <span
                    className="size-1.5 shrink-0 rounded-full bg-gold-400"
                    aria-hidden
                  />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className={ctaGold("lg", "w-full sm:w-auto")}
              >
                Get a Free Quote
                <ArrowRight aria-hidden />
              </Link>
              <a
                href={site.phone.href}
                className={ctaOutlineLight("lg", "w-full sm:w-auto")}
              >
                <Phone aria-hidden />
                {site.phone.display}
              </a>
            </div>

            <p className="mt-4 text-xs text-navy-100/55">
              {site.hours.note} Trade and bulk enquiries welcome.
            </p>
          </div>

          <div className="pb-8 lg:pb-0">
            <SwatchStack />
          </div>
        </div>
      </Container>
    </section>
  );
}
