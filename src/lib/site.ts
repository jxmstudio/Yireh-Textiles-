/**
 * Single source of truth for business details, services, areas and copy.
 * Change a value here and it updates across the site, the schema markup,
 * the sitemap and the enquiry form.
 */

export const site = {
  name: "Yireh Textiles",
  legalName: "Yireh Textiles",
  tagline: "Soft furnishings and curtains, made in Sydney",
  domain: "yirehstitchtech.com",
  url: "https://www.yirehstitchtech.com",
  email: "info@yirehstitchtech.com",
  phone: {
    display: "0410 288 829",
    href: "tel:+61410288829",
  },
  hours: {
    display: "Mon – Sat, 8:00am – 6:00pm",
    note: "For the quickest response, call between 8am and 6pm.",
    schema: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  },
  address: {
    suburb: "Penrith",
    region: "Western Sydney",
    state: "NSW",
    postcode: "2750",
    country: "AU",
  },
  geo: { lat: -33.7507, lng: 150.6942 },
  yearsTrading: 10,
  foundedYear: new Date().getFullYear() - 10,
  serviceArea: "Greater Sydney",
} as const;

/* -------------------------------------------------------------------------- */
/*  Services                                                                   */
/* -------------------------------------------------------------------------- */

export type Service = {
  slug: string;
  /** Short label used in navigation and form dropdowns */
  name: string;
  /** Full H1 / page title */
  title: string;
  /** Search-friendly page title */
  metaTitle: string;
  metaDescription: string;
  /** One line used on cards */
  summary: string;
  /** Opening paragraphs on the service page */
  intro: string[];
  /** Bulleted product list */
  items: string[];
  /** Who this service is for */
  audience: string[];
  /** Differentiators specific to this service */
  highlights: { title: string; body: string }[];
  /** Featured on the home page grid */
  featured: boolean;
  icon: "curtains" | "sofa" | "van" | "garment" | "factory";
};

export const services: Service[] = [
  {
    slug: "curtains-and-blinds",
    name: "Curtains & Blinds",
    title: "Custom Curtains, Blinds & Window Furnishings",
    metaTitle: "Custom Curtains & Roman Blinds Sydney | Made in Penrith",
    metaDescription:
      "Custom-made curtains, privacy curtains, sheers and Roman blinds manufactured in Penrith and installed across Sydney. Ten years of trade and commercial work.",
    summary:
      "Made-to-measure curtains, sheers, privacy curtains and Roman blinds, sewn in our own Sydney workroom.",
    intro: [
      "Curtains are where we started, and they are still the bulk of what leaves our workroom each week. Every pair is cut and sewn to the exact drop of your window rather than trimmed down from a standard size, which is the difference between a curtain that hangs properly and one that never quite sits right.",
      "We work directly with interior designers, builders, blind retailers and furniture companies who need a workroom they can hand a job to and not think about again. We also take on direct residential and commercial jobs across Sydney.",
    ],
    items: [
      "Custom-made curtains to any drop and width",
      "Sheer and translucent curtains",
      "Privacy curtains for healthcare, aged care and consulting rooms",
      "Roman blinds, lined and interlined",
      "Blockout and thermal-lined curtains",
      "Pinch pleat, S-fold / wave, eyelet and pencil pleat headings",
      "Pelmets, valances and tiebacks",
      "Track and rod supply, plus installation across Sydney",
    ],
    audience: [
      "Interior designers and decorators",
      "Blind and curtain retailers needing workroom capacity",
      "Builders and fit-out contractors",
      "Aged care, medical and hospitality operators",
      "Homeowners across Sydney",
    ],
    highlights: [
      {
        title: "Made to the millimetre",
        body: "We measure, cut and sew to your drop. No off-the-shelf sizing, no compromise on how the fabric falls.",
      },
      {
        title: "Trade volume, trade turnaround",
        body: "Our workroom is set up for repeat volume, so a fifty-window job runs on the same schedule as a five-window one.",
      },
      {
        title: "Commercial-grade compliance",
        body: "Fire-retardant and healthcare-suitable fabrics available for aged care, hospitality and fit-out work.",
      },
    ],
    featured: true,
    icon: "curtains",
  },
  {
    slug: "soft-furnishings-and-upholstery",
    name: "Soft Furnishings & Upholstery",
    title: "Soft Furnishings, Upholstery & Cushions",
    metaTitle: "Soft Furnishings & Upholstery Sydney | Sofas, Lounges, Cushions",
    metaDescription:
      "Soft furnishing manufacturing and upholstery for sofas, lounges, chairs and cushions. Trade partner to Sydney furniture brands for over ten years.",
    summary:
      "Sofas, lounges, chairs, cushions and bespoke soft furnishings, manufactured for furniture brands and designers.",
    intro: [
      "Soft furnishings are the other half of our business, and for many of our trade clients they are the reason they came to us in the first place. We manufacture for furniture companies who need consistent, repeatable quality across a production run, not one-off craft pieces that vary batch to batch.",
      "That covers full lounge and sofa upholstery, dining and occasional chairs, headboards, cushions, bolsters and made-to-spec covers. If you have a prototype or a spec sheet, we can produce to it.",
    ],
    items: [
      "Sofa and lounge upholstery",
      "Dining, occasional and commercial chair upholstery",
      "Scatter cushions, bolsters and floor cushions",
      "Bench seating and banquette upholstery",
      "Bedheads and upholstered headboards",
      "Removable and washable covers",
      "Foam cutting and cushion inserts",
      "Reupholstery and recovering of existing frames",
    ],
    audience: [
      "Furniture manufacturers and brands",
      "Interior designers and stylists",
      "Hospitality and commercial fit-out companies",
      "Retailers needing white-label production",
    ],
    highlights: [
      {
        title: "Built for production runs",
        body: "We are set up for repeat volume with consistent tolerances, so unit forty looks exactly like unit one.",
      },
      {
        title: "We work to your spec",
        body: "Hand us a prototype, a tech pack or a sample and we will produce to it, including your own labelling.",
      },
      {
        title: "Trusted by established brands",
        body: "Ten years of production work for furniture and apparel companies operating in the Australian market.",
      },
    ],
    featured: true,
    icon: "sofa",
  },
  {
    slug: "campervan-and-marine",
    name: "Campervan & Marine",
    title: "Campervan & Marine Upholstery",
    metaTitle: "Campervan & Boat Upholstery Sydney | Cushions, Squabs, Curtains",
    metaDescription:
      "Campervan and yacht upholstery in Sydney: seat cushions, squabs, bunk mattresses, blockout curtains and blinds, made to template in our Penrith workroom.",
    summary:
      "Seat cushions, squabs, bunk mattresses and blockout curtains for campervans, caravans and yachts.",
    intro: [
      "Vehicle and marine interiors are unforgiving work. Nothing is square, everything has to survive damp, sun and constant movement, and a template that is out by five millimetres shows up immediately. We have been doing it long enough to get it right the first time.",
      "We work with campervan fit-out builders and boat owners across Sydney on seating, bedding and window coverings, using marine-grade and UV-stable materials throughout.",
    ],
    items: [
      "Campervan and caravan seat cushions and squabs",
      "Bed and bunk mattresses cut to shape",
      "Yacht and boat cockpit cushions",
      "Marine-grade vinyl and outdoor fabric upholstery",
      "Blockout and thermal campervan curtains",
      "Privacy and insulated window covers",
      "Backrests, bolsters and headliner panels",
      "Template-based manufacture from your measurements",
    ],
    audience: [
      "Campervan and caravan fit-out builders",
      "Boat and yacht owners",
      "Marine service and refit businesses",
      "Van-life conversions and DIY builds",
    ],
    highlights: [
      {
        title: "Template-accurate",
        body: "Send a template or we will make one. Curved, tapered and irregular shapes are routine for us.",
      },
      {
        title: "Materials that last outdoors",
        body: "Marine-grade vinyls, UV-stable threads and quick-dry foams specified for sun, salt and damp.",
      },
      {
        title: "Fit-out partner ready",
        body: "We already supply campervan fit-out businesses, so we understand build schedules and staging.",
      },
    ],
    featured: true,
    icon: "van",
  },
  {
    slug: "bulk-garment-manufacturing",
    name: "Bulk Garment Manufacturing",
    title: "Bulk Garment Manufacturing",
    metaTitle: "Bulk Garment Manufacturing Sydney | Production Sewing",
    metaDescription:
      "Bulk garment manufacturing and production sewing in Sydney. Sample-to-production runs for apparel brands, with experience supplying established labels.",
    summary:
      "Production sewing and bulk garment runs for apparel brands, from sample through to delivery.",
    intro: [
      "Alongside our furnishing work we run bulk garment manufacturing for apparel brands. Our team has produced for labels operating at national and international scale, which means we understand what a real production standard looks like and what happens when it slips.",
      "We take a sample or tech pack, sew a first-off for approval, and then run the order. Cutting, sewing, finishing, pressing and packing are all handled in-house.",
    ],
    items: [
      "Sample making and first-off approval",
      "Bulk production sewing runs",
      "Pattern-based cutting and bundling",
      "Finishing, pressing and quality checking",
      "Labelling, tagging and pack-out",
      "Cut-make-trim (CMT) production",
      "Repeat and seasonal order runs",
    ],
    audience: [
      "Apparel and fashion labels",
      "Uniform and workwear suppliers",
      "Brands moving production onshore",
      "Wholesalers needing local capacity",
    ],
    highlights: [
      {
        title: "Experience with serious labels",
        body: "Our team's production background includes work associated with established Australian and international brands.",
      },
      {
        title: "Sample first, always",
        body: "Nothing goes to bulk until you have signed off a first-off garment, so surprises happen on one unit, not four hundred.",
      },
      {
        title: "One factory, whole process",
        body: "Cut, sew, finish and pack under one roof means fewer handoffs and fewer things lost between them.",
      },
    ],
    featured: false,
    icon: "garment",
  },
  {
    slug: "production-systems-consulting",
    name: "Production Systems Consulting",
    title: "Production Facility Design & Systems Consulting",
    metaTitle: "Sewing Factory Setup & Lean Production Consulting | Australia",
    metaDescription:
      "We design and set up curtain and garment production facilities: modular systems, chain systems and lean manufacturing layouts that lift output per operator.",
    summary:
      "We design and set up curtain and garment production floors: modular, chain and lean systems that lift output.",
    intro: [
      "This is the part of the business most workrooms cannot offer. As well as manufacturing, we design production facilities for curtain and garment makers, and set up the systems that actually move the numbers.",
      "Most workrooms lose their margin to layout and flow rather than to labour cost. Work sits in piles between stations, operators handle the same piece five times, and nobody can tell you where a job actually is. Fixing that is usually cheaper than hiring.",
    ],
    items: [
      "Modular production system design",
      "Chain (progressive bundle) system setup",
      "Lean manufacturing implementation",
      "Factory floor layout and workflow mapping",
      "Workstation and machine configuration",
      "Line balancing and bottleneck analysis",
      "Operator training and standard work",
      "Output, quality and WIP tracking setup",
    ],
    audience: [
      "Curtain and blind workrooms",
      "Garment manufacturers",
      "Businesses setting up a new production facility",
      "Operations managers scaling an existing floor",
    ],
    highlights: [
      {
        title: "Designed by people who run a floor",
        body: "We are not consultants who read about it. We run our own production facility to the same systems we install.",
      },
      {
        title: "Measured in output, not slides",
        body: "The point is more units per operator per day. We set the baseline before we start so the change is provable.",
      },
      {
        title: "Modular, chain or lean",
        body: "The right system depends on your product mix and run lengths. We will tell you which one fits, including when it is none of them.",
      },
    ],
    featured: false,
    icon: "factory",
  },
];

export const featuredServices = services.filter((s) => s.featured);

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

/* -------------------------------------------------------------------------- */
/*  Clients                                                                    */
/* -------------------------------------------------------------------------- */

export const clients = [
  "Canada Goose",
  "Joseph Ribkoff",
  "Advanta Furniture",
  "Mint Furniture",
  "Urban Interiors",
  "Samuel Sean",
  "Vanable",
] as const;

/* -------------------------------------------------------------------------- */
/*  Why us                                                                     */
/* -------------------------------------------------------------------------- */

export const differentiators = [
  {
    title: "We manufacture, we don't resell",
    body: "Everything is made in our own Sydney facility. No middleman, no offshore lead times you cannot control, and one point of contact from quote to delivery.",
  },
  {
    title: "Ten years of trade production",
    body: "Furniture brands, apparel labels and fit-out companies have relied on us for a decade. Trade work is unsentimental: you get repeat orders or you do not.",
  },
  {
    title: "Built for volume and one-offs alike",
    body: "Our floor runs modular and lean systems, so a single pair of curtains and a four-hundred-unit production run both get made properly.",
  },
  {
    title: "We know the whole process",
    body: "We design production facilities for other manufacturers. That depth shows up in how cleanly your job runs through ours.",
  },
];

export const stats = [
  { value: "10+", label: "Years manufacturing in Sydney" },
  { value: "7+", label: "Established brands supplied" },
  { value: "5", label: "In-house production capabilities" },
  { value: "Sydney-wide", label: "Delivery and installation" },
];

/* -------------------------------------------------------------------------- */
/*  Process                                                                    */
/* -------------------------------------------------------------------------- */

export const processSteps = [
  {
    step: "01",
    title: "Tell us what you need",
    body: "Call us or send the enquiry form with your suburb and what you are after. For trade work, send drawings, a tech pack or a sample.",
  },
  {
    step: "02",
    title: "Measure, template or spec",
    body: "We measure on site across Sydney, work from your templates, or produce a first-off sample for approval before anything goes to bulk.",
  },
  {
    step: "03",
    title: "Quote and confirm",
    body: "You get a written quote with the materials, quantities and lead time on it. Nothing starts until you approve it.",
  },
  {
    step: "04",
    title: "Manufactured in our workroom",
    body: "Your job runs through our own workroom, checked at each stage rather than only at the end.",
  },
  {
    step: "05",
    title: "Delivered or installed",
    body: "We deliver across Sydney and install curtains, blinds and tracks where you need us to.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Areas served                                                               */
/* -------------------------------------------------------------------------- */

export type Area = {
  slug: string;
  name: string;
  region: string;
  /** Nearby suburbs, used for on-page copy and internal linking */
  nearby: string[];
  blurb: string;
};

export const areas: Area[] = [
  {
    slug: "penrith",
    name: "Penrith",
    region: "Western Sydney",
    nearby: ["Kingswood", "Emu Plains", "St Marys", "Glenmore Park"],
    blurb:
      "Penrith is home. Our workroom is here, which means local jobs get measured, made and installed without anything leaving the area.",
  },
  {
    slug: "blacktown",
    name: "Blacktown",
    region: "Western Sydney",
    nearby: ["Seven Hills", "Doonside", "Marayong", "Prospect"],
    blurb:
      "A twenty-five minute run from our Penrith workroom, so Blacktown measures and installs slot in easily around production.",
  },
  {
    slug: "parramatta",
    name: "Parramatta",
    region: "Greater Western Sydney",
    nearby: ["Harris Park", "Westmead", "Rosehill", "North Parramatta"],
    blurb:
      "We do a steady stream of commercial and apartment work through Parramatta, from single units to whole-floor fit-outs.",
  },
  {
    slug: "liverpool",
    name: "Liverpool",
    region: "South Western Sydney",
    nearby: ["Casula", "Moorebank", "Prestons", "Green Valley"],
    blurb:
      "Residential curtains and commercial soft furnishings throughout Liverpool and the surrounding south-west corridor.",
  },
  {
    slug: "the-hills-district",
    name: "The Hills District",
    region: "North Western Sydney",
    nearby: ["Castle Hill", "Baulkham Hills", "Bella Vista", "Kellyville"],
    blurb:
      "Larger homes in the Hills usually mean longer drops and wider spans. Made-to-measure is the only way that hangs properly.",
  },
  {
    slug: "hawkesbury",
    name: "Hawkesbury",
    region: "North Western Sydney",
    nearby: ["Windsor", "Richmond", "McGraths Hill", "Pitt Town"],
    blurb:
      "Windsor, Richmond and the wider Hawkesbury are a short drive from Penrith and well inside our regular service run.",
  },
  {
    slug: "campbelltown",
    name: "Campbelltown",
    region: "Macarthur",
    nearby: ["Camden", "Narellan", "Ingleburn", "Minto"],
    blurb:
      "We cover the Macarthur region for curtains, blinds and upholstery, including new-build and display-home work.",
  },
  {
    slug: "sydney-cbd",
    name: "Sydney CBD",
    region: "Inner Sydney",
    nearby: ["Surry Hills", "Pyrmont", "Ultimo", "Darlinghurst"],
    blurb:
      "Commercial and hospitality soft furnishings through the CBD, including fire-retardant fabrics for fit-out compliance.",
  },
  {
    slug: "inner-west",
    name: "Inner West",
    region: "Inner Sydney",
    nearby: ["Newtown", "Leichhardt", "Marrickville", "Balmain"],
    blurb:
      "Period homes in the Inner West rarely have a square window. Made-to-measure and on-site measuring handle that.",
  },
  {
    slug: "north-shore",
    name: "North Shore",
    region: "Northern Sydney",
    nearby: ["Chatswood", "Lane Cove", "Willoughby", "Gordon"],
    blurb:
      "Sheers, S-fold curtains and reupholstery across the North Shore, measured on site and installed by our own team.",
  },
  {
    slug: "northern-beaches",
    name: "Northern Beaches",
    region: "Northern Sydney",
    nearby: ["Manly", "Dee Why", "Mona Vale", "Avalon"],
    blurb:
      "Coastal exposure is hard on fabric. We specify UV-stable and marine-grade materials for Northern Beaches jobs.",
  },
  {
    slug: "sutherland-shire",
    name: "Sutherland Shire",
    region: "Southern Sydney",
    nearby: ["Cronulla", "Miranda", "Caringbah", "Sylvania"],
    blurb:
      "Boat and home work often come together in the Shire, and we handle both marine upholstery and household curtains.",
  },
];

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}

/* -------------------------------------------------------------------------- */
/*  FAQs                                                                       */
/* -------------------------------------------------------------------------- */

export const faqs = [
  {
    q: "Do you work with trade and businesses, or only homeowners?",
    a: "Both, though most of our work is trade. We manufacture for furniture brands, apparel labels, interior designers, blind retailers and fit-out companies, and we also take direct residential jobs across Sydney.",
  },
  {
    q: "Where are you based and how far do you travel?",
    a: "Our workroom is in Penrith in Western Sydney. We service the whole of Greater Sydney for measuring, delivery and installation, from the Hawkesbury through to the CBD, the Northern Beaches and the Sutherland Shire.",
  },
  {
    q: "Do you measure and install, or only manufacture?",
    a: "We do both. We can measure on site anywhere in Sydney, manufacture in our own facility, and install curtains, tracks, rods and blinds. Trade clients often use us for manufacture only and handle their own install.",
  },
  {
    q: "Can you produce to my own spec or sample?",
    a: "Yes. Send a tech pack, drawing, template or a physical sample. For bulk work we produce a first-off for your approval before the run starts.",
  },
  {
    q: "What is a typical lead time?",
    a: "It depends on the job and the fabric, and we will put a firm lead time on your written quote before you commit. Small residential curtain jobs are usually the quickest; bulk production is scheduled with you.",
  },
  {
    q: "Do you supply fabric or can I supply my own?",
    a: "Either. We can source and supply fabric, including fire-retardant and marine-grade options, or make up fabric you supply.",
  },
  {
    q: "Can you handle fire-retardant or healthcare-compliant work?",
    a: "Yes. We regularly make privacy curtains and commercial furnishings using fabrics suited to healthcare, aged care and hospitality compliance requirements.",
  },
  {
    q: "How do I get a quote?",
    a: `Call ${site.phone.display} between 8am and 6pm, email ${site.email}, or send the enquiry form on this site with your suburb and what you need. We will come back to you with a written quote.`,
  },
];

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * "Areas We Serve" is deliberately absent: the client asked for suburbs to be
 * kept off the site chrome (Aug 2026). The area pages stay live for search and
 * remain linked from the footer's Company column while that's decided.
 */
export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
