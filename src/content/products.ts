import { images, type Img } from "./images";

/**
 * The capability index (plan §3.4) — the component that replaces the icon-card
 * grid. Four full-bleed portrait tiles, each one a photograph.
 *
 * Tile 03 is "Roman Blinds" — the one blind the workroom sews (the client
 * dropped other blinds from the offer, Aug 2026) — and points at the
 * Curtains & Roman Blinds service page alongside tile 01. Curtains and soft
 * furnishings lead, per the questionnaire.
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
    descriptor: "Custom-made, blockout, sheer, acoustic and medical",
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
    title: "Roman Blinds",
    descriptor: "Lined and interlined Roman blinds, made to measure",
    href: "/services/curtains-and-blinds",
    image: images.capRoman,
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
 * Photography for the service pages, keyed by the service slug in lib/site.ts.
 *
 * `hero` drives the full-bleed <PageHero image>, `gallery` the photo band that
 * replaces the icon block. Every service page is therefore image-led rather
 * than a heading on a flat panel (plan §4).
 */
export const serviceMedia: Record<string, { hero: Img; gallery: Img[] }> = {
  "curtains-and-blinds": {
    hero: images.svcCurtainsHero,
    // Eight tiles, not four — the client asked for the curtain page to be
    // more detailed and photo-oriented (Aug 2026). Workroom photography
    // first, then the made-product imagery.
    gallery: [
      images.svcCurtains2,
      images.svcSheers,
      images.svcRoman2,
      images.svcDrapes,
      images.svcCurtains1,
      images.svcCurtains3,
      images.svcCurtains4,
      images.svcBlockout,
    ],
  },
  "soft-furnishings-and-upholstery": {
    hero: images.svcSoftHero,
    gallery: [
      images.svcSoft1,
      images.svcSoft2,
      images.svcSoft3,
      images.svcSoft4,
    ],
  },
  "campervan-and-marine": {
    hero: images.svcMarineHero,
    gallery: [
      images.svcMarine1,
      images.svcMarine2,
      images.svcMarine3,
      images.svcMarine4,
    ],
  },
  "bulk-garment-manufacturing": {
    hero: images.svcGarmentHero,
    gallery: [
      images.svcGarment1,
      images.svcGarment2,
      images.svcGarment3,
      images.svcGarment4,
    ],
  },
  "production-systems-consulting": {
    hero: images.svcProductionHero,
    gallery: [
      images.svcProduction1,
      images.svcProduction2,
      images.svcProduction3,
      images.svcProduction4,
    ],
  },
};

/**
 * The curtain range (client request, Aug 2026): the curtains page carries a
 * photo-led breakdown of what the workroom actually sews — including the
 * technical end (blockout, acoustic for mining) the client asked to call out.
 * Rendered only on /services/curtains-and-blinds.
 */
export const curtainRange: {
  title: string;
  body: string;
  image: Img;
}[] = [
  {
    title: "Sheers & S-fold curtains",
    body: "Light-filtering sheers and soft S-fold / wave drapery, sewn to the exact drop so the fabric breaks just off the floor.",
    image: images.svcSheers,
  },
  {
    title: "Blockout & thermal curtains",
    body: "Triple-weave and coated blockout, lined or interlined, for bedrooms, media rooms, hospitality and shift-workers' homes.",
    image: images.svcBlockout,
  },
  {
    title: "Roman blinds",
    body: "The one blind we sew ourselves: lined and interlined Roman blinds, made to measure in your fabric or ours.",
    image: images.svcRoman1,
  },
  {
    title: "Acoustic curtains for mining & industry",
    body: "Dense, heavyweight acoustic curtains for mining sites, plant rooms and industrial spaces, made to spec and to site dimensions.",
    image: images.svcAcoustic,
  },
  {
    title: "Privacy & healthcare curtains",
    body: "Cubicle and privacy curtains in healthcare-suitable, fire-retardant fabrics for aged care, medical and consulting rooms.",
    image: images.capCurtains,
  },
  {
    title: "Tracks, pelmets & installation",
    body: "Track and rod supply, pelmets, valances and tiebacks — measured and installed by our own team across Sydney.",
    image: images.stepInstall,
  },
];

/**
 * A hero for each service area, chosen to match what that area's copy actually
 * claims — period windows for the Inner West, a boat for the Shire, tall
 * arched windows for the Hills — so the twelve pages do not read as one
 * template with the suburb swapped.
 */
export const areaMedia: Record<string, Img> = {
  penrith: images.areaPenrith,
  blacktown: images.areaBlacktown,
  parramatta: images.areaParramatta,
  liverpool: images.areaLiverpool,
  "the-hills-district": images.areaHills,
  hawkesbury: images.areaHawkesbury,
  campbelltown: images.areaCampbelltown,
  "sydney-cbd": images.areaSydneyCbd,
  "inner-west": images.areaInnerWest,
  "north-shore": images.areaNorthShore,
  "northern-beaches": images.areaNorthernBeaches,
  "sutherland-shire": images.areaSutherland,
};

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
