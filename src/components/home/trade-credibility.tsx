import Image from "next/image";
import { credibility } from "@/content/home";

/**
 * Trust strip (plan §3.2). Sits immediately below the fold on linen.
 *
 * ⚠️  Logos are gated on written permission from the client — contract
 * manufacturers often cannot name the brands they produce for. With an empty
 * `logos` array this degrades to the unnamed credibility line plus a stat
 * strip, and logos can be dropped in later without a redesign.
 */
export function TradeCredibility() {
  const { line, logos, stats } = credibility;

  return (
    <section className="bg-linen py-16 lg:py-24">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <p className="mx-auto max-w-[46ch] text-center font-display text-[clamp(1.25rem,2.2vw,1.75rem)] leading-snug text-ink">
          {line}
        </p>

        {logos.length > 0 ? (
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
            {logos.map((logo) => (
              <li key={logo.name}>
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={40}
                  className="h-8 w-auto opacity-40 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                />
              </li>
            ))}
          </ul>
        ) : (
          <dl className="mt-12 flex flex-wrap items-center justify-center divide-y divide-stone-300/70 sm:divide-x sm:divide-y-0">
            {stats.map((s) => (
              <div key={s.label} className="w-full px-10 py-5 text-center sm:w-auto">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-none text-ink">
                    {s.value}
                  </span>
                  <span className="mt-2 block text-[0.7rem] tracking-[0.18em] text-stone-600 uppercase">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
