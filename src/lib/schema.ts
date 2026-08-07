import { areas, clients, services, site, type Service } from "./site";

const ORG_ID = `${site.url}/#organization`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phone.display,
    description:
      "Manufacturer of custom curtains, Roman blinds, soft furnishings and upholstery, based in Penrith, Western Sydney and serving all of Greater Sydney.",
    foundingDate: String(site.foundedYear),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.suburb,
      addressRegion: site.address.state,
      postalCode: site.address.postcode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: areas.map((a) => ({
      "@type": "City",
      name: `${a.name}, NSW`,
    })),
    openingHoursSpecification: site.hours.schema,
    knowsAbout: services.map((s) => s.name),
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        url: `${site.url}/services/${s.slug}`,
      },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Manufacturing services",
      itemListElement: services.map((s) => ({
        "@type": "OfferCatalog",
        name: s.name,
        itemListElement: s.items.map((item) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: item },
        })),
      })),
    },
    // Named business relationships, not endorsements.
    memberOf: undefined,
    slogan: site.tagline,
    keywords: clients.join(", "),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: "en-AU",
    publisher: { "@id": ORG_ID },
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/services/${service.slug}/#service`,
    name: service.title,
    description: service.metaDescription,
    serviceType: service.name,
    provider: { "@id": ORG_ID },
    areaServed: areas.map((a) => ({ "@type": "City", name: `${a.name}, NSW` })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.name,
      itemListElement: service.items.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item },
      })),
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };
}
