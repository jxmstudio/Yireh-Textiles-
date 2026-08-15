import { images, type Img } from "./images";

/**
 * The capability index (plan §3.4) — the component that replaces the icon-card
 * grid. Four full-bleed portrait tiles, each one a photograph.
 *
 * The plan's tile list named "Blinds & Romans" as its own tile pointing at
 * /blinds. That route does not exist and Roman blinds are already covered by
 * the Curtains & Blinds service page, so tile 02 is Soft Furnishings instead.
 * Every tile now has a distinct, real destination rather than two tiles landing
 * on the same page. Curtains and soft furnishings lead, per the questionnaire.
 */
export type Capability = {
  number: string;
  title: string;
  descriptor: string;
  href: string;
  image: Img;
};

export const capabilities: Capability[] = [
  {
    number: "01",
    title: "Curtains & Sheers",
    descriptor: "Custom-made, blockout, sheer, privacy and medical",
    href: "/services/curtains-and-blinds",
    image: images.capCurtains,
  },
  {
    number: "02",
    title: "Soft Furnishings",
    descriptor: "Sofas, lounges, chairs, cushions and upholstery",
    href: "/services/soft-furnishings-and-upholstery",
    image: images.capSoft,
  },
  {
    number: "03",
    title: "Blinds & Romans",
    descriptor: "Roman blinds and custom window treatments",
    href: "/services/curtains-and-blinds",
    image: images.capBlinds,
  },
  {
    number: "04",
    title: "Marine & Campervan",
    descriptor: "Yacht seating, campervan cushions and curtains",
    href: "/services/campervan-and-marine",
    image: images.capMarine,
  },
];

/**
 * The materials strip (plan §3.6). Cheap to reshoot on a phone, and it does a
 * lot of work for the "premium and tactile" note.
 */
export const fabrics: { label: string; image: Img }[] = [
  { label: "Linen", image: images.fabLinen },
  { label: "Velvet", image: images.fabVelvet },
  { label: "Blockout", image: images.fabBlockout },
  { label: "Sheer", image: images.fabSheer },
  { label: "Canvas", image: images.fabCanvas },
  { label: "Outdoor", image: images.fabOutdoor },
  { label: "Wool blend", image: images.fabWool },
  { label: "Indigo velvet", image: images.fabIndigo },
];
