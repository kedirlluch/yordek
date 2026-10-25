import type { BeforeAfterPair } from "@/components/BeforeAfter";
import type { PhotoSrc } from "@/components/Photo";
import type { ServiceSlug } from "@/lib/site";

// Fotos de la web en un solo sitio. Las de /img/prueba/ son provisionales (salen con la etiqueta
// "Foto de prueba"): al tener las reales, se generan con scripts/fotos.py y se cambia aquí la ruta.
// Formatos y qué debe salir en cada una: FOTOS.md.

export const photos = {
  homeHero: { src: "/img/prueba/home-hero.webp", alt: "Salón con las paredes recién pintadas y el suelo protegido con papel" },
  quitarGotele: { src: "/img/prueba/quitar-gotele-hero.webp", alt: "Pared con gotelé y la parte ya alisada" },
  alisado: { src: "/img/prueba/alisado-hero.webp", alt: "Pared alisada con llana, vista con luz lateral" },
  // Generada con IA (ambiente, ver FOTOS.md): no es un trabajo nuestro, por eso no se usa en antes/después.
  pinturaPisos: { src: "/img/generadas/salon-pintado.webp", alt: "Salón con las paredes recién pintadas en un tono claro" },
  pinturaLocales: { src: "/img/prueba/pintura-locales-hero.webp", alt: "Oficina con las paredes recién pintadas" },
  reparacion: { src: "/img/prueba/reparacion-hero.webp", alt: "Habitación con las grietas y agujeros reparados, lista para pintar" },
  landingPintura: { src: "/img/generadas/salon-pintado.webp", alt: "Salón con las paredes recién pintadas en un tono claro" },
  trabajandoCuadrada: { src: "/img/prueba/trabajando-cuadrada.webp", alt: "Pintor de YordeK pintando una pared con rodillo" },
  trabajandoVertical: { src: "/img/prueba/trabajando-vertical.webp", alt: "Pintor de YordeK pintando una pared con rodillo" },
  // Ambiente: interiores de banco elegidos por la skill de diseño (ver FOTOS.md). Nunca fachadas ni exteriores.
  paredLisa: { src: "/img/prueba/pared-lisa-hueco.webp", alt: "Pared blanca y lisa con un hueco que deja ver una escalera" },
  localCuadros: { src: "/img/prueba/local-cuadros.webp", alt: "Local con las paredes claras y cuadros colgados" },
  comedor: { src: "/img/prueba/comedor-luz.webp", alt: "Comedor luminoso con las paredes blancas" },
  paredAzul: { src: "/img/prueba/pared-azul.webp", alt: "Pared pintada de azul detrás de una mesa blanca" },
  dormitorio: { src: "/img/prueba/dormitorio-taza.webp", alt: "Dormitorio con paredes blancas y luz natural" },
} satisfies Record<string, PhotoSrc>;

// Foto de cada servicio, para los índices de servicios con vista previa.
export const servicePhotos = {
  "quitar-gotele": photos.quitarGotele,
  "alisado-de-paredes": photos.alisado,
  "pintura-de-pisos": photos.pinturaPisos,
  "pintura-de-locales-comerciales": photos.pinturaLocales,
  "reparacion-de-paredes": photos.reparacion,
} satisfies Record<ServiceSlug, PhotoSrc>;

export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    before: "/img/prueba/antes-gotele.webp",
    after: "/img/prueba/despues-gotele.webp",
    place: "pared con gotelé alisada",
    caption: "Quitar gotelé: de pared con relieve a pared lisa.",
  },
  {
    before: "/img/prueba/antes-grieta.webp",
    after: "/img/prueba/despues-grieta.webp",
    place: "pared con grietas reparada y pintada",
    caption: "Reparación: grietas y desconchones tapados y pared pintada.",
  },
];
