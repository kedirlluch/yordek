import type { Metadata } from "next";
import { ServicePage, type ServiceContent } from "@/components/ServicePage";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: { absolute: "Pintores de pisos en Valencia · Presupuesto gratis | YordeK" },
  description:
    "Pintamos pisos, casas y apartamentos en Valencia: paredes, techos y cambio de color. Suelos y muebles protegidos. Visita y presupuesto gratis.",
  alternates: { canonical: "/pintura-de-pisos/" },
};

const content: ServiceContent = {
  slug: "pintura-de-pisos",
  jobType: "Pintura de vivienda",
  waMessage: "Hola, quiero un presupuesto para pintar mi piso",
  description:
    "Pintura de pisos, casas y apartamentos en Valencia: paredes, techos, cambio de color y pintura para alquilar o vender.",
  h1: "Pintores de pisos en Valencia,",
  h1Highlight: "para vivir, alquilar o vender",
  intro:
    "Pintamos paredes y techos de pisos, casas y apartamentos. Cubrimos suelos y muebles antes de abrir la primera lata y te dejamos la casa limpia al terminar.",
  heroPhoto: "foto real de un salón recién pintado",
  heroImage: photos.pinturaPisos,

  includesTitle: "Qué incluye pintar tu piso con nosotros",
  includes: [
    {
      title: "Paredes y techos",
      text: "Pintamos habitación por habitación o el piso entero.",
    },
    {
      title: "Cambio de color",
      text: "Pasar de un color oscuro a uno claro necesita más manos. Lo tenemos en cuenta desde el presupuesto.",
    },
    {
      title: "Pequeñas reparaciones",
      text: "Tapamos agujeros de tacos y cuadros, golpes y fisuras antes de pintar.",
    },
    {
      title: "Piso para alquilar o vender",
      text: "Un color neutro y uniforme en toda la casa para que el piso salga bien en las fotos y en las visitas.",
    },
    {
      title: "Protección de suelos y muebles",
      text: "Movemos y cubrimos los muebles y forramos el suelo.",
    },
    {
      title: "Limpieza al terminar",
      text: "Quitamos cintas y plásticos y recogemos. Vuelves a una casa pintada y limpia.",
    },
  ],
  includesCta: "Quiero pintar mi piso",

  processTitle: "Cómo pintamos un piso",
  steps: [
    {
      title: "Visita",
      text: "Recorremos el piso contigo, vemos el estado de las paredes y hablamos de colores.",
    },
    {
      title: "Proteger",
      text: "Suelos forrados, muebles cubiertos y cinta en todo lo que no se pinta.",
    },
    {
      title: "Reparar",
      text: "Agujeros, golpes y fisuras, plastecidos y lijados.",
    },
    {
      title: "Imprimación donde haga falta",
      text: "En las zonas reparadas, para que no se noten a través de la pintura.",
    },
    {
      title: "Pintar",
      text: "Techos y paredes, con las manos necesarias para que el color quede uniforme.",
    },
    {
      title: "Recoger y limpiar",
      text: "Retiramos las protecciones y te entregamos la casa lista para usar.",
    },
  ],

  priceTitle: "¿De qué depende el precio de pintar un piso?",
  priceIntro: "Los metros del piso son solo una parte. Esto también cuenta:",
  priceFactors: [
    {
      title: "Habitaciones y techos",
      text: "Cuántas estancias se pintan y si se incluyen los techos.",
    },
    {
      title: "El color de antes y el de después",
      text: "Tapar un color oscuro o muy intenso necesita más manos de pintura.",
    },
    {
      title: "Estado de las paredes",
      text: "Agujeros, grietas o manchas que haya que reparar antes de pintar.",
    },
    {
      title: "Piso vacío o amueblado",
      text: "Un piso vacío se protege y se pinta antes.",
    },
    {
      title: "Tipo de pintura",
      text: "Plástica, lavable o específica para cocinas y baños.",
    },
    {
      title: "Si hay gotelé",
      text: "Si quieres quitarlo antes de pintar, se suma ese trabajo.",
    },
  ],

  faqTitle: "Preguntas sobre pintar un piso",
  faqs: [
    {
      q: "Voy a alquilar o vender el piso. ¿Qué color me recomendáis?",
      a: "Un color claro y neutro en toda la casa. Hace las habitaciones más luminosas en las fotos y gusta a más gente en las visitas.",
    },
    {
      q: "¿Hay que sacar los muebles para pintar?",
      a: "Para pintar, no. Cubrimos los muebles y el suelo y puedes seguir viviendo en casa. Solo si antes hay que lijar mucho (por gotelé o pasta) conviene sacarlos de la habitación por el polvo. Te lo decimos en la visita.",
    },
    {
      q: "¿Cuántos días se tarda en pintar un piso?",
      a: "Depende de las habitaciones, de los techos y de cuánto haya que reparar. En la visita te damos una estimación aproximada de los días; hay detalles que solo aparecen al empezar el trabajo.",
    },
    {
      q: "¿Pintáis también los techos?",
      a: "Sí. Pintamos paredes y techos.",
    },
    {
      q: "¿Puedo pintar cada habitación de un color?",
      a: "Sí. Dinos los colores de cada estancia en la visita y los tenemos en cuenta en el presupuesto.",
    },
  ],

  related: {
    "quitar-gotele": "Si el piso tiene gotelé y lo quieres liso antes de pintar.",
    "reparacion-de-paredes": "Si hay grietas o desconchones grandes que conviene arreglar primero.",
    "alisado-de-paredes": "Si las paredes tienen ondas o parches que se verían con la pintura nueva.",
    "pintura-de-locales-comerciales": "Si además tienes un local u oficina que pintar.",
  },

  formTitle: "Pide tu visita gratis para pintar el piso",
  formText:
    "Dinos dónde está el piso y qué habitaciones quieres pintar. Te llamamos para concertar la visita.",
};

export default function PinturaPisosPage() {
  return <ServicePage content={content} />;
}
