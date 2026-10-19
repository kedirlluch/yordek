import type { Metadata } from "next";
import { Pendiente } from "@/components/Pendiente";
import { ServicePage, type ServiceContent } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: { absolute: "Pintura de locales y oficinas en Valencia | YordeK" },
  description:
    "Pintamos locales comerciales y oficinas en Valencia para abrir o renovar tu negocio. Presupuesto cerrado tras una visita gratis. Llama o escribe.",
  alternates: { canonical: "/pintura-de-locales-comerciales/" },
};

const content: ServiceContent = {
  slug: "pintura-de-locales-comerciales",
  jobType: "Pintura de local u oficina",
  waMessage: "Hola, quiero un presupuesto para pintar un local",
  description:
    "Pintura de locales comerciales y oficinas en Valencia: paredes, techos, colores de marca y reparación antes de abrir.",
  h1: "Pintura de locales comerciales y oficinas en Valencia",
  intro:
    "Vas a abrir un negocio o a renovar el que tienes. Vemos el local gratis, te damos un precio cerrado y te decimos cuántos días necesitamos para que puedas organizar el resto.",
  heroPhoto: "foto real de un local u oficina recién pintado",

  includesTitle: "Qué pintamos en tu local u oficina",
  includes: [
    {
      title: "Paredes y techos",
      text: "Tiendas, bares, despachos y salas de reuniones.",
    },
    {
      title: "Los colores de tu marca",
      text: "Dinos el código de color o tráenos una muestra y lo pintamos igual.",
    },
    {
      title: "Reparar lo que dejó el anterior negocio",
      text: "Agujeros de estanterías y rótulos, golpes y grietas, tapados antes de pintar.",
    },
    {
      title: "Gotelé y paredes irregulares",
      text: "Si el local tiene gotelé o paredes con ondas, las alisamos antes de pintar.",
    },
    {
      title: "Protección del local",
      text: "Cubrimos suelo, mostradores y mobiliario que no se pueda sacar.",
    },
    {
      title: "Local limpio para montar",
      text: "Lo dejamos recogido para que puedas meter el mobiliario y la mercancía.",
    },
  ],
  includesCta: "Quiero pintar mi local",

  processTitle: "Cómo pintamos un local",
  steps: [
    {
      title: "Visita al local",
      text: "Medimos, vemos el estado de paredes y techos y apuntamos los colores.",
    },
    {
      title: "Fechas de trabajo",
      text: (
        <>
          Te decimos cuántos días necesitamos para que encajes la apertura y los demás oficios.{" "}
          <Pendiente>si se puede trabajar fuera del horario de apertura o en fin de semana</Pendiente>
        </>
      ),
    },
    {
      title: "Protección",
      text: "Suelo, mostradores y mobiliario cubiertos.",
    },
    {
      title: "Preparación",
      text: "Reparamos agujeros y golpes y alisamos donde haga falta.",
    },
    {
      title: "Pintura",
      text: "Techos, paredes y los colores de tu marca.",
    },
    {
      title: "Limpieza",
      text: "Retiramos las protecciones y te entregamos el local recogido.",
    },
  ],

  priceTitle: "¿De qué depende el precio de pintar un local?",
  priceIntro: "Cada local es distinto. Estos son los factores que mueven el presupuesto:",
  priceFactors: [
    {
      title: "Metros de paredes y techos",
      text: "La superficie total a pintar, no solo los metros del local.",
    },
    {
      title: "Colores",
      text: "Los colores intensos o de marca suelen necesitar más manos para quedar uniformes.",
    },
    {
      title: "Estado de las paredes",
      text: "Agujeros de rótulos, estanterías o instalaciones antiguas que haya que reparar.",
    },
    {
      title: "Local vacío o en funcionamiento",
      text: "Con mobiliario y mercancía dentro hay más que proteger.",
    },
    {
      title: "Gotelé o paredes irregulares",
      text: "Si hay que alisar antes de pintar.",
    },
    {
      title: "Tipo de pintura",
      text: "Para zonas de mucho paso puede convenir una pintura más resistente y lavable.",
    },
  ],

  faqTitle: "Preguntas sobre pintar un local u oficina",
  faqs: [
    {
      q: "¿Podéis pintar fuera del horario de apertura?",
      a: <Pendiente>si se trabaja por la tarde, de noche o en fin de semana</Pendiente>,
    },
    {
      q: "Voy a abrir un negocio. ¿Cuándo os llamo?",
      a: "En cuanto tengas acceso al local. Con la visita hecha y el presupuesto cerrado, puedes cuadrar la pintura con el resto de trabajos y con la fecha de apertura.",
    },
    {
      q: "¿Pintáis oficinas?",
      a: "Sí. Despachos, salas de reuniones y zonas comunes.",
    },
    {
      q: "¿Podéis pintar con los colores de mi marca?",
      a: "Sí. Pásanos el código de color o una muestra y lo pintamos igual.",
    },
    {
      q: "¿Hacéis el trabajo con el negocio abierto?",
      a: <Pendiente>si se puede pintar por zonas con el negocio funcionando</Pendiente>,
    },
  ],

  related: {
    "quitar-gotele": "Si el local tiene gotelé en las paredes.",
    "alisado-de-paredes": "Si las paredes tienen parches o marcas que se notarían con la luz del escaparate.",
    "reparacion-de-paredes": "Para tapar los agujeros que dejó el negocio anterior.",
    "pintura-de-pisos": "Si también quieres pintar tu casa.",
  },

  formTitle: "Pide tu visita gratis para pintar el local",
  formText:
    "Dinos dónde está el local y cuándo quieres abrir. Te llamamos para ir a verlo.",
};

export default function PinturaLocalesPage() {
  return <ServicePage content={content} />;
}
