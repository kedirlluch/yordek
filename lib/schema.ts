// Datos estructurados (JSON-LD). Sin priceRange de momento (ver CLAUDE.md).
import { services, site } from "@/lib/site";

const businessId = `${site.url}/#negocio`;

// Negocio de zona de servicio: dirección solo con localidad (sin calle) y zona en areaServed.
const areaServed = [
  { "@type": "City", name: "Valencia" },
  ...site.municipalities.map((name) => ({ "@type": "City", name })),
];

// Referencia al HousePainter completo de la Home (mismo @id), con lo mínimo para entenderse sola.
const provider = {
  "@type": "HousePainter",
  "@id": businessId,
  name: site.name,
  url: site.url,
  telephone: site.phone.e164,
};

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    "@id": businessId,
    name: site.name,
    url: site.url,
    telephone: site.phone.e164,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Valencia",
      addressRegion: "Valencia",
      addressCountry: "ES",
    },
    areaServed,
    // openingHoursSpecification: pendiente de saber los días (PENDIENTES.md).
    logo: `${site.url}/img/yordek-google-logo.png`,
    // image (foto real de un trabajo) y sameAs (Google Business Profile): pendientes.
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de alisado y pintura",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: `${site.url}/${s.slug}/` },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#web`,
    name: site.name,
    url: site.url,
    inLanguage: "es-ES",
    publisher: { "@id": businessId },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function serviceSchema({ name, description, path }: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.url}${path}`,
    serviceType: name,
    provider,
    areaServed,
  };
}

// Solo preguntas con respuesta real: las que siguen [PENDIENTE] no entran.
export function faqSchema(faqs: { q: string; text: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.text },
    })),
  };
}
