import { images } from "./images";

/**
 * All homepage copy. No strings live in the homepage components (plan §8.1).
 *
 * Positioning (plan §1): Yireh is not a curtain shop that also does trade — it
 * is a trade workroom that also serves retail. The page leads with craft and
 * capacity, not with "get a free quote on curtains".
 */

export const hero = {
  eyebrow: "Sydney · Est. 2015",
  headline: "We make what other brands put their name on.",
  sub: "Curtains, blinds, soft furnishings and upholstery — cut and sewn in our Penrith workroom, delivered across Sydney.",
  primaryCta: { label: "Request a quote", href: "/contact" },
  secondaryCta: { label: "See our work", href: "#work" },
} as const;

/**
 * Trust strip (plan §3.2).
 *
 * ⚠️  `logos` is deliberately empty. Contract manufacturers frequently cannot
 * publicly name the brands they produce for — supply agreements often forbid
 * it. Do not add Canada Goose, Joseph Ribkoff or any other client logo until
 * the client confirms in writing that he is allowed to. Until then the
 * component degrades to the unnamed credibility line plus the stat strip.
 */
export const credibility = {
  line: "Ten years making for Australian and international furniture and apparel brands.",
  logos: [] as { name: string; src: string }[],
  stats: [
    { value: "10", label: "Years" },
    { value: "6", label: "Product categories" },
    { value: "Sydney-wide", label: "Delivery & install" },
  ],
} as const;

export const intro = {
  eyebrow: "The workroom",
  heading: "Ten years of trade work, in one room in Penrith.",
  body: [
    "Most of what leaves this workroom carries somebody else's label. Furniture brands, apparel labels, designers and fit-out companies send us the work they cannot afford to get wrong, and they keep sending it — trade work is unsentimental that way.",
    "Everything is cut, sewn, finished and checked under one roof in Western Sydney. No offshore lead times you cannot control, no middleman, and the person who cuts your fabric is the person who sews it.",
  ],
  link: { label: "More about the workroom", href: "/about" },
  image: images.workroom,
} as const;

export const production = {
  eyebrow: "Manufacturing consulting",
  heading: "We also build the factories.",
  body: "Alongside our own production we design and set up facilities for other curtain and garment manufacturers — modular systems, chain systems and lean production floors. Most workrooms lose their margin to layout and flow rather than to labour cost, and fixing that is usually cheaper than hiring.",
  items: [
    { value: "Modular", label: "Cellular production systems" },
    { value: "Chain", label: "Progressive bundle systems" },
    { value: "Lean", label: "Flow, layout and line balancing" },
  ],
  cta: { label: "Talk about production", href: "/services/production-systems-consulting" },
  image: images.productionFloor,
} as const;

export const featured = {
  eyebrow: "Selected work",
  title: "A whole-home curtain and soft furnishing fit-out",
  meta: "Sheers, blockout curtains, cushions and upholstery · Sydney",
  body: "Eleven windows measured on site, made to drop in our workroom and installed in a day. The sheers were specified to hold their shape in afternoon sun without losing the light.",
  link: { label: "See the full gallery", href: "#work" },
  image: images.projectMain,
  details: [images.projectDetail1, images.projectDetail2, images.projectDetail3],
} as const;

export const enquiry = {
  eyebrow: "Start a job",
  heading: "Tell us what you need making.",
  body: "Call between 8am and 6pm, or send the form and we will come back to you with a written quote.",
} as const;
