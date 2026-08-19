import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section, SectionHeading } from "@/components/layout/section";
import {
  DrapeYMark,
  Logo,
  NeedleArchMark,
  ThreadLinesMark,
  WovenYMark,
} from "@/components/brand/logo";

export const metadata: Metadata = {
  title: "Logo Concepts",
  description: "Logo and brand direction options for Yireh Textiles.",
  robots: { index: false, follow: false },
};

const concepts = [
  {
    id: "A",
    name: "Three Threads",
    status: "Currently live on the site",
    Mark: ThreadLinesMark,
    idea: "Three bold thread lines in rose gold, each stepped in from the last — set heavy and tight, to your sketch.",
    why: "Three threads for the three sides of the workroom — curtains, soft furnishings and upholstery — and every one of them starts as a single line of thread. The heavy weights keep it legible from favicon size up to signage.",
  },
  {
    id: "B",
    name: "Woven Y",
    status: "Previous mark",
    Mark: WovenYMark,
    idea: "A monogram Y built from three threads, with a gold weft passing over one arm and under the other.",
    why: "The over-and-under is a literal weave, so the mark reads as textile at any size without needing a picture of fabric.",
  },
  {
    id: "C",
    name: "Needle & Arch",
    status: "Archived",
    Mark: NeedleArchMark,
    idea: "An arch drawn as a single stroke, with the eye of a needle at the apex and a gold thread running through it.",
    why: "Closest to the meaning of the name — Genesis 22:14, \"on the mountain of the Lord it will be provided.\" The needle's eye ties the reference to the trade without being literal about it.",
  },
  {
    id: "D",
    name: "Drape Y",
    status: "Archived",
    Mark: DrapeYMark,
    idea: "Two curtain drapes sweeping in to form a Y, hung beneath a gold pelmet line.",
    why: "The most immediately readable as curtains specifically. Best choice if window furnishings are the only thing the brand should signal.",
  },
];

const palette = [
  { name: "Navy 950", hex: "#08182c", role: "Headers, footer, hero panels" },
  { name: "Navy 900", hex: "#0f2440", role: "Primary buttons, headings" },
  { name: "Rose Gold 400", hex: "#d47f8b", role: "The mark and lockup tagline" },
  { name: "Rose Gold 500", hex: "#c06471", role: "The mark, deeper metal tone" },
  { name: "Gold 500", hex: "#c9a227", role: "Accent rules, primary CTA" },
  { name: "Gold 300", hex: "#e8d08a", role: "Accents on dark backgrounds" },
  { name: "Sand", hex: "#f8f5ef", role: "Alternate section background" },
  { name: "White", hex: "#ffffff", role: "Cards, base background" },
];

export default function BrandPage() {
  return (
    <>
      <PageHero
        trail={[
          { name: "Home", href: "/" },
          { name: "Logo Concepts", href: "/brand" },
        ]}
        eyebrow="For review"
        title="Logo concepts for Yireh Textiles"
        lead="The live mark is the three rose-gold thread lines you asked for. The earlier concepts stay here for reference — say the word and we can adjust the weight, spacing or shade of the lines."
      />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Concepts"
            title="Pick a direction"
            description="Each mark is drawn as vector artwork, so it scales from a favicon to a shopfront sign with no loss of quality. Whichever you choose, you get the full file set at handover."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {concepts.map(({ id, name, status, Mark, idea, why }) => (
              <div
                key={id}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white"
              >
                {/* On light */}
                <div className="flex h-44 items-center justify-center border-b border-border bg-sand">
                  <Mark className="size-20" />
                </div>
                {/* On dark */}
                <div className="flex h-28 items-center justify-center bg-navy-950">
                  <Mark className="size-12" tone="onDark" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-sm font-semibold text-gold-600">
                      Option {id}
                    </span>
                    <span className="rounded-full bg-sand px-2.5 py-0.5 text-[0.7rem] text-navy-900/70">
                      {status}
                    </span>
                  </div>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-navy-950">
                    {name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-900/80">
                    {idea}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {why}
                  </p>

                  {/* Small-size legibility test */}
                  <div className="mt-5 flex items-center gap-3 border-t border-border pt-5">
                    <Mark className="size-8" />
                    <Mark className="size-6" />
                    <Mark className="size-4" />
                    <span className="text-xs text-muted-foreground">
                      Small-size test
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Lockups */}
      <Section tone="sand">
        <Container>
          <SectionHeading
            eyebrow="Lockup"
            title="How the chosen mark sits with the name"
            description="The current lockup pairs the mark with YIREH set in Fraunces and TEXTILES letterspaced beneath it."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="flex h-48 items-center justify-center rounded-2xl border border-border bg-white">
              <Logo markClassName="h-14 w-14" className="scale-125" />
            </div>
            <div className="flex h-48 items-center justify-center rounded-2xl border border-navy-900 bg-navy-950">
              <Logo
                tone="onDark"
                markClassName="h-14 w-14"
                className="scale-125"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Palette */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Palette"
            title="Blue, white and gold lining"
            description="The scheme you asked for: deep navy as the base, white for clarity, and a thin gold rule used as a lining detail through headers, cards and section dividers rather than as a fill."
          />

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {palette.map((c) => (
              <li
                key={c.name}
                className="overflow-hidden rounded-xl border border-border bg-white"
              >
                <div className="h-24" style={{ background: c.hex }} />
                <div className="p-4">
                  <p className="font-heading text-sm font-semibold text-navy-950">
                    {c.name}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase text-muted-foreground">
                    {c.hex}
                  </p>
                  <p className="mt-2 text-xs leading-snug text-muted-foreground">
                    {c.role}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-gold-300 bg-gold-100/40 p-6">
            <h3 className="font-heading text-base font-semibold text-navy-950">
              A note on the Aboriginal art theme
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-navy-900/80">
              You asked about an Australian Aboriginal art theme. Aboriginal
              designs, symbols and painting styles are protected cultural
              property, and using them without an artist&apos;s involvement
              carries real legal and reputational risk for the business — it is
              treated seriously in Australia, particularly for a company selling
              textiles.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-navy-900/80">
              What we have built instead is an Australian sense of place through
              the palette and an abstract woven texture — warm sand tones, ochre
              in reserve, and warp-and-weft line work drawn from weaving itself.
              If you want genuine Aboriginal artwork on the site, the right path
              is to commission or licence it from an Aboriginal artist, which we
              are happy to help arrange. It would then be a real point of
              difference rather than a risk.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
