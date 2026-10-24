import type { BeforeAfterPair } from "@/components/BeforeAfter";
import type { PhotoSrc } from "@/components/Photo";

// Fotos de la web en un solo sitio. Las de /img/prueba/ son provisionales (salen con la etiqueta
// "Foto de prueba"): al tener las reales, se generan con scripts/fotos.py y se cambia aquí la ruta.
// Formatos y qué debe salir en cada una: FOTOS.md.

export const photos = {
  homeHero: { src: "/img/prueba/home-hero.webp", alt: "Salón con las paredes recién pintadas y el suelo protegido con papel" },
  quitarGotele: { src: "/img/prueba/quitar-gotele-hero.webp", alt: "Pared con gotelé y la parte ya alisada" },
  alisado: { src: "/img/prueba/alisado-hero.webp", alt: "Pared alisada con llana, vista con luz lateral" },
  pinturaPisos: { src: "/img/prueba/pintura-pisos-hero.webp", alt: "Dormitorio recién pintado" },
  pinturaLocales: { src: "/img/prueba/pintura-locales-hero.webp", alt: "Oficina con las paredes recién pintadas" },
  reparacion: { src: "/img/prueba/reparacion-hero.webp", alt: "Habitación con las grietas y agujeros reparados, lista para pintar" },
  landingPintura: { src: "/img/prueba/landing-pintura.webp", alt: "Habitación recién pintada" },
  trabajandoCuadrada: { src: "/img/prueba/trabajando-cuadrada.webp", alt: "Pintor de YordeK pintando una pared con rodillo" },
  trabajandoVertical: { src: "/img/prueba/trabajando-vertical.webp", alt: "Pintor de YordeK pintando una pared con rodillo" },
} satisfies Record<string, PhotoSrc>;

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
