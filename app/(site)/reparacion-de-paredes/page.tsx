import type { Metadata } from "next";
import { Pendiente } from "@/components/Pendiente";
import { ServicePage, type ServiceContent } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: { absolute: "Reparación de grietas y paredes en Valencia | YordeK" },
  description:
    "Reparamos grietas, fisuras, desconchones y agujeros y dejamos la pared lista para pintar. Valencia y alrededores. Visita y presupuesto gratis.",
  alternates: { canonical: "/reparacion-de-paredes/" },
};

const content: ServiceContent = {
  slug: "reparacion-de-paredes",
  jobType: "Reparación de paredes",
  waMessage: "Hola, quiero un presupuesto para reparar paredes",
  description:
    "Reparación de paredes en Valencia: grietas, fisuras, desconchones, agujeros y golpes, reparados y listos para pintar.",
  h1: "Reparación de paredes en Valencia:",
  h1Highlight: "grietas, agujeros y desconchones",
  intro:
    "Fisuras en las esquinas, agujeros de tacos, golpes de muebles o pintura que se cae a trozos. Lo reparamos y dejamos la pared lista para pintar, para que el arreglo no se note.",
  heroPhoto: "foto real de una grieta antes y después de repararla",

  includesTitle: "Qué reparamos",
  includes: [
    {
      title: "Grietas y fisuras",
      text: "Las abrimos, las limpiamos, las rellenamos y las igualamos con el resto de la pared.",
    },
    {
      title: "Desconchones",
      text: "Rascamos la pintura suelta hasta llegar a la parte firme y plastecemos.",
    },
    {
      title: "Agujeros",
      text: "De tacos, cuadros, estanterías, televisores o instalaciones antiguas.",
    },
    {
      title: "Golpes y esquinas rotas",
      text: "Rehacemos las esquinas y zonas golpeadas por muebles o en una mudanza.",
    },
    {
      title: "Igualar el color",
      text: "Pintamos la zona reparada o la pared entera para que no quede una mancha de otro tono.",
    },
    {
      title: "Paredes y techos",
      text: "Reparamos tanto paredes como techos.",
    },
  ],
  includesCta: "Quiero reparar mis paredes",

  processTitle: "Cómo reparamos una pared",
  steps: [
    {
      title: "Ver los daños",
      text: "En la visita vemos cada grieta y desconchón y te decimos qué hay que hacer.",
    },
    {
      title: "Proteger la zona",
      text: "Cubrimos el suelo y los muebles de alrededor.",
    },
    {
      title: "Abrir y sanear",
      text: "Quitamos lo que está suelto y abrimos las grietas para que el relleno agarre.",
    },
    {
      title: "Rellenar y lijar",
      text: "Plastecemos y lijamos hasta dejar la reparación al mismo nivel que la pared.",
    },
    {
      title: "Imprimar y pintar",
      text: "Sellamos la reparación y pintamos para igualar el color.",
    },
    {
      title: "Recoger",
      text: "Dejamos la zona limpia.",
    },
  ],

  priceTitle: "¿De qué depende el precio de reparar una pared?",
  priceIntro: "Una reparación se presupuesta por el trabajo que lleva. Esto es lo que lo cambia:",
  priceFactors: [
    {
      title: "Cuántos daños hay",
      text: "No es lo mismo una grieta que diez agujeros repartidos por la casa.",
    },
    {
      title: "Tamaño y profundidad",
      text: "Una fisura fina en la pintura se arregla antes que una grieta abierta o un desconchón grande.",
    },
    {
      title: "Pintar la zona o la pared entera",
      text: "Para que no se note el arreglo, a menudo hay que pintar el paño completo.",
    },
    {
      title: "Paredes o techos",
      text: "Las reparaciones en el techo llevan más tiempo.",
    },
    {
      title: "Muebles alrededor",
      text: "Si hay que mover y proteger muebles para llegar a la pared.",
    },
  ],

  faqTitle: "Preguntas sobre reparar paredes",
  faqs: [
    {
      q: "¿Se nota el arreglo después de pintar?",
      a: "Si solo se pinta la zona reparada, puede quedar una diferencia de tono con el resto. Por eso solemos recomendar pintar la pared entera. En el presupuesto te lo indicamos.",
    },
    {
      q: "¿Las grietas vuelven a salir?",
      a: "Una fisura de la pintura o del yeso, bien reparada, no tiene por qué volver. Si vemos que una grieta puede venir de un problema del edificio, te lo diremos antes de taparla.",
    },
    {
      q: "Dejo un piso de alquiler. ¿Podéis tapar los agujeros y repintar?",
      a: "Sí. Tapamos los agujeros de cuadros y estanterías y pintamos para que puedas devolver el piso con las paredes bien.",
    },
    {
      q: "¿Arregláis paredes con humedad?",
      a: <Pendiente>si se reparan humedades y en qué casos</Pendiente>,
    },
    {
      q: "¿Venís para una reparación pequeña?",
      a: <Pendiente>si hay trabajo mínimo</Pendiente>,
    },
  ],

  related: {
    "pintura-de-pisos": "Si quieres aprovechar la reparación para pintar toda la casa.",
    "alisado-de-paredes": "Si hay tantos parches que conviene alisar la pared entera.",
    "quitar-gotele": "Si la pared con grietas también tiene gotelé.",
    "pintura-de-locales-comerciales": "Si las paredes a reparar son las de un local u oficina.",
  },

  formTitle: "Pide tu visita gratis para reparar paredes",
  formText:
    "Cuéntanos qué hay que reparar. Si nos mandas una foto por WhatsApp, llegamos a la visita sabiendo lo que hay.",
};

export default function ReparacionParedesPage() {
  return <ServicePage content={content} />;
}
