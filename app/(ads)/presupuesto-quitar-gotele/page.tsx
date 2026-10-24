import type { Metadata } from "next";
import { AdsLanding, type AdsLandingContent } from "@/components/AdsLanding";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: { absolute: "Quitar gotelé en Valencia · Presupuesto gratis | YordeK" },
  description: "Quitamos el gotelé y dejamos las paredes lisas. Visita y presupuesto cerrado gratis en Valencia.",
  robots: { index: false, follow: false },
};

const content: AdsLandingContent = {
  source: "ads-gotele",
  waMessage: "Hola, quiero un presupuesto para quitar gotelé",
  h1: "Quitar gotelé en Valencia:",
  h1Highlight: "visita y presupuesto gratis",
  intro:
    "Vamos a tu casa, vemos el gotelé y te damos un precio cerrado. Te entregamos las paredes lisas, listas para pintar, y la casa limpia.",
  formTitle: "Pide tu visita gratis",
  fixedJobType: "Quitar gotelé",
  includesTitle: "Qué incluye quitar el gotelé",
  includes: [
    "Suelos y muebles cubiertos antes de empezar",
    "Quitar el gotelé de las paredes",
    "Plastecido y lijado hasta dejar la pared plana",
    "Imprimación, para que la pintura agarre igual",
    "Pintura del color que elijas, si la quieres",
    "Limpieza al terminar",
  ],
  photo: "foto real de una pared a medio quitar el gotelé",
  image: photos.quitarGotele,
  faqs: [
    {
      q: "¿Cuánto cuesta quitar el gotelé?",
      a: "Depende de los metros de pared, del tipo de gotelé y de lo que aparezca debajo. Te visitamos gratis y te damos un precio cerrado: el que te damos es el que pagas.",
    },
    {
      q: "¿Cuándo me dais el presupuesto?",
      a: "Te visitamos y te damos el presupuesto en menos de una semana.",
    },
    {
      q: "¿Se llena la casa de polvo?",
      a: "Quitar gotelé levanta polvo. Por eso cubrimos suelos y muebles antes de empezar, y al terminar retiramos las protecciones y limpiamos.",
    },
    {
      q: "¿Las paredes quedan listas para pintar?",
      a: "Sí. Plastecemos, lijamos y damos imprimación. Puedes pintarlas tú o encargarnos también la pintura.",
    },
  ],
  finalTitle: "¿Quieres las paredes lisas? Empieza por la visita gratis",
};

export default function PresupuestoGotelePage() {
  return <AdsLanding content={content} />;
}
