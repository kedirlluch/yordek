import type { BeforeAfterPair } from "@/components/BeforeAfter";
import type { PhotoSrc } from "@/components/Photo";
import type { ServiceSlug } from "@/lib/site";

// Fotos de la web en un solo sitio. Las de /img/prueba/ son provisionales (salen con la etiqueta
// "Foto de prueba"): al tener las reales, se generan con scripts/fotos.py y se cambia aquí la ruta.
// Formatos y qué debe salir en cada una: FOTOS.md.

export const photos = {
  // Las de /img/generadas/ son de IA (ambiente, ver FOTOS.md): no son trabajos nuestros, nunca en antes/después.
  homeHero: { src: "/img/generadas/home-hero.webp", alt: "Pared lisa recién pintada de blanco, con una silla y suelo de terrazo" },
  quitarGotele: { src: "/img/prueba/quitar-gotele-hero.webp", alt: "Pared con gotelé y la parte ya alisada" },
  alisado: { src: "/img/generadas/alisado.webp", alt: "Pared y techo alisados y pintados, vistos con luz lateral" },
  pinturaPisos: { src: "/img/generadas/salon-pintado.webp", alt: "Salón con las paredes recién pintadas en un tono claro" },
  pinturaLocales: { src: "/img/generadas/local-pintado.webp", alt: "Local vacío recién pintado de blanco, con una pared en azul" },
  reparacion: { src: "/img/generadas/reparacion.webp", alt: "Pared con las grietas y agujeros plastecidos y lijados, lista para pintar" },
  landingPintura: { src: "/img/generadas/salon-pintado.webp", alt: "Salón con las paredes recién pintadas en un tono claro" },
  trabajandoCuadrada: { src: "/img/generadas/trabajando-cuadrada.webp", alt: "Pintor pasando el rodillo por una pared, con el suelo protegido con plástico" },
  trabajandoVertical: { src: "/img/generadas/trabajando-vertical.webp", alt: "Pintor pasando el rodillo por una pared, con el suelo protegido con plástico" },
  // Ambiente: interiores de banco elegidos por la skill de diseño (ver FOTOS.md). Nunca fachadas ni exteriores.
  paredLisa: { src: "/img/generadas/pared-lisa.webp", alt: "Pared blanca y lisa con una hornacina, con luz de tarde" },
  localCuadros: { src: "/img/prueba/local-cuadros.webp", alt: "Local con las paredes claras y cuadros colgados" },
  comedor: { src: "/img/generadas/comedor.webp", alt: "Comedor luminoso con las paredes recién pintadas y suelo de terrazo" },
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
