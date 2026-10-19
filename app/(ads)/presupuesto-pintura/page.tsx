import type { Metadata } from "next";
import { AdsLanding, type AdsLandingContent } from "@/components/AdsLanding";

export const metadata: Metadata = {
  title: { absolute: "Pintores en Valencia · Presupuesto gratis | YordeK" },
  description: "Pintamos pisos, casas, locales y oficinas. Visita y presupuesto cerrado gratis en Valencia.",
  robots: { index: false, follow: false },
};

const content: AdsLandingContent = {
  source: "ads-pintura",
  waMessage: "Hola, quiero un presupuesto de pintura",
  h1: "Pintores en Valencia:",
  h1Highlight: "visita y presupuesto gratis",
  intro:
    "Pintamos pisos, casas, locales y oficinas. Cubrimos suelos y muebles antes de empezar y te damos un precio cerrado antes de tocar una pared.",
  formTitle: "Pide tu visita gratis",
  jobOptions: ["Pintura de vivienda", "Pintura de local u oficina", "Otro"],
  includesTitle: "Qué incluye pintar con nosotros",
  includes: [
    "Paredes y techos de pisos, casas, locales y oficinas",
    "Cambio de color o pintura para alquilar o vender",
    "Tapado de agujeros, golpes y fisuras antes de pintar",
    "Suelos y muebles protegidos",
    "Casa o local limpio al terminar",
  ],
  photo: "foto real de una habitación o local recién pintado",
  faqs: [
    {
      q: "¿Cuánto cuesta pintar un piso?",
      a: "Depende de los metros, de las habitaciones, de los techos y del cambio de color. Te visitamos gratis y te damos un precio cerrado: el que te damos es el que pagas.",
    },
    {
      q: "¿Cuándo me dais el presupuesto?",
      a: "Te visitamos y te damos el presupuesto en menos de una semana.",
    },
    {
      q: "¿Qué hacéis con los muebles?",
      a: "Los cubrimos junto con el suelo antes de empezar, y al terminar retiramos las protecciones y limpiamos.",
    },
    {
      q: "¿Pintáis locales y oficinas?",
      a: "Sí. Pintamos locales comerciales y oficinas para abrir o renovar el negocio.",
    },
  ],
  finalTitle: "¿Hablamos de tu piso o tu local?",
};

export default function PresupuestoPinturaPage() {
  return <AdsLanding content={content} />;
}
