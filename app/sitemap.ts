import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export const dynamic = "force-static";

// Solo páginas indexables: fuera /gracias/, legales (noindex) y landings de Ads.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "/", priority: 1 },
    { path: "/servicios/", priority: 0.8 },
    ...services.map((s) => ({ path: `/${s.slug}/`, priority: s.slug === "quitar-gotele" ? 0.9 : 0.8 })),
    { path: "/nosotros/", priority: 0.5 },
    { path: "/contacto/", priority: 0.6 },
  ];
  return paths.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
