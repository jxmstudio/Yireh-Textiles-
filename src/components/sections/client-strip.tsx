import { Container } from "@/components/layout/section";
import { clients } from "@/lib/site";

/**
 * Wordmark strip. The client has no logo files for these businesses, so we set
 * the names typographically — which is also safer than reproducing third-party
 * logos without permission.
 */
export function ClientStrip() {
  return (
    <section className="border-b border-border bg-white py-10">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Manufacturing for businesses including
        </p>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
          {clients.map((name) => (
            <li
              key={name}
              className="font-heading text-base font-medium tracking-wide text-navy-900/55 transition-colors hover:text-navy-900 sm:text-lg"
            >
              {name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
