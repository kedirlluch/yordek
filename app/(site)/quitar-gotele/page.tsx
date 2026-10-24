import type { Metadata } from "next";
import Link from "next/link";
import { Pendiente } from "@/components/Pendiente";
import { ServicePage, type ServiceContent } from "@/components/ServicePage";
import { beforeAfterPairs, photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: { absolute: "Quitar gotelé en Valencia · Presupuesto gratis | YordeK" },
  description:
    "Quitamos el gotelé y dejamos las paredes lisas, listas para pintar. Valencia y alrededores. Visita y presupuesto cerrado gratis. Llama o escribe.",
  alternates: { canonical: "/quitar-gotele/" },
};

const content: ServiceContent = {
  slug: "quitar-gotele",
  jobType: "Quitar gotelé",
  waMessage: "Hola, quiero un presupuesto para quitar gotelé",
  description:
    "Quitar gotelé en pisos y casas de Valencia: protección de suelos y muebles, alisado, lijado, imprimación y limpieza final.",
  h1: "Quitar gotelé en Valencia:",
  h1Highlight: "paredes lisas, listas para pintar",
  intro:
    "¿Has comprado o heredado un piso con gotelé? Vamos a verlo gratis, te damos un precio cerrado y te devolvemos la casa con las paredes lisas y limpia.",
  heroPhoto: "foto real de una pared a medio quitar el gotelé: mitad con gotelé, mitad lisa",
  heroImage: photos.quitarGotele,
  beforeAfter: beforeAfterPairs.slice(0, 1),

  includesTitle: "Todo lo que hacemos para quitar el gotelé",
  includes: [
    {
      title: "Protección antes de empezar",
      text: "Cubrimos suelos y muebles y tapamos todo lo que no se toca. Quitar gotelé es el trabajo que más polvo levanta de los que hacemos.",
    },
    {
      title: "Quitar el gotelé",
      text: "En la visita vemos qué gotelé tienes y te explicamos cómo lo vamos a quitar en tu casa.",
    },
    {
      title: "Plastecido",
      text: "Debajo del gotelé suelen aparecer agujeros, grietas o parches antiguos. Los rellenamos antes de alisar.",
    },
    {
      title: "Lijado",
      text: "Lijamos hasta dejar la pared plana y suave al tacto.",
    },
    {
      title: "Imprimación",
      text: "Sellamos la pared para que la pintura agarre igual en toda la superficie.",
    },
    {
      title: "Pintura, si la quieres",
      text: "Puedes pintar tú o encargarnos la pintura en el mismo presupuesto, del color que elijas.",
    },
  ],
  includesCta: "Quiero quitar mi gotelé",

  processTitle: "Así quitamos el gotelé de tu casa",
  steps: [
    {
      title: "Visita y medición",
      text: "Vemos el tipo de gotelé, medimos las paredes y te damos el presupuesto cerrado.",
    },
    {
      title: "Protegemos la casa",
      text: "Suelos, muebles y todo lo que no se pinta quedan cubiertos antes de tocar una pared.",
    },
    {
      title: "Quitamos el gotelé",
      text: <Pendiente>método: rascado, tendido de pasta encima o según el caso</Pendiente>,
    },
    {
      title: "Alisamos y lijamos",
      text: "Plastecemos los fallos que quedan a la vista y lijamos hasta que la pared queda plana.",
    },
    {
      title: "Imprimación y pintura",
      text: "Sellamos la pared y, si lo has pedido, la pintamos.",
    },
    {
      title: "Limpieza y entrega",
      text: "Retiramos las protecciones, recogemos y te entregamos la casa limpia.",
    },
  ],

  priceTitle: "¿De qué depende el precio de quitar el gotelé?",
  priceIntro:
    "No hay un precio por m² que sirva para todas las casas. Estos son los factores que lo cambian:",
  priceFactors: [
    {
      title: "Metros de pared, no de suelo",
      text: "Se mide la superficie de pared que hay que alisar. Un piso de 80 m² de suelo tiene bastantes más metros de pared.",
    },
    {
      title: "El tipo de gotelé",
      text: "Hay gotelé fino y gotelé grueso, y puede estar pintado al temple o con pintura plástica. Cada caso lleva un trabajo distinto.",
    },
    {
      title: "Lo que hay debajo",
      text: "Grietas, parches de reparaciones antiguas o yeso en mal estado aparecen al quitar el gotelé y hay que arreglarlos.",
    },
    {
      title: "Techos",
      text: "Si el techo también tiene gotelé y lo quieres liso.",
    },
    {
      title: "Casa vacía o amueblada",
      text: "Con muebles dentro hay más que proteger y mover.",
    },
    {
      title: "Si pintamos después",
      text: "Dejarla lista para pintar o entregarla pintada cambia el presupuesto.",
    },
  ],

  faqTitle: "Preguntas sobre quitar el gotelé",
  faqs: [
    {
      q: "¿Cuánto cuesta quitar el gotelé por m²?",
      a: "Depende del tipo de gotelé, del estado de la pared y de si hay techos. Sin verlo, un precio por m² sería una suposición. Te visitamos gratis y te damos un precio cerrado para todo el trabajo.",
    },
    {
      q: "¿Rascáis el gotelé o lo tapáis con pasta?",
      a: <Pendiente>método para quitar el gotelé y cuándo se usa cada uno</Pendiente>,
    },
    {
      q: "¿Puedo seguir viviendo en casa mientras quitáis el gotelé?",
      a: <Pendiente>si se trabaja con la casa habitada y amueblada</Pendiente>,
    },
    {
      q: "¿Cuánto se tarda en quitar el gotelé de un piso?",
      a: (
        <>
          Depende de los metros de pared y de lo que aparezca debajo del gotelé. En la visita te decimos los días
          exactos. <Pendiente>plazo típico, p. ej. piso de 80 m²</Pendiente>
        </>
      ),
    },
    {
      q: "¿Quitáis también el gotelé del techo?",
      a: <Pendiente>si se quita el gotelé de los techos</Pendiente>,
    },
    {
      q: "Quitar el gotelé, ¿ensucia mucho?",
      a: "Es el trabajo que más polvo levanta. Por eso cubrimos suelos y muebles antes de empezar, y al terminar retiramos las protecciones y limpiamos.",
    },
    {
      q: "¿Las paredes quedan listas para pintar?",
      a: (
        <>
          Sí. Después de quitar el gotelé plastecemos, lijamos y damos imprimación. Puedes pintarlas tú o
          encargarnos también la{" "}
          <Link href="/pintura-de-pisos/" className="font-semibold text-brand underline">pintura del piso</Link>.
        </>
      ),
      text: "Sí. Después de quitar el gotelé plastecemos, lijamos y damos imprimación. Puedes pintarlas tú o encargarnos también la pintura del piso.",
    },
  ],

  related: {
    "pintura-de-pisos": "Para entregar el piso pintado del color que quieras después de quitar el gotelé.",
    "alisado-de-paredes": "Si tus paredes no tienen gotelé pero están onduladas o llenas de parches.",
    "reparacion-de-paredes": "Si solo tienes grietas o desconchones en zonas concretas.",
    "pintura-de-locales-comerciales": "Si el gotelé está en un local u oficina que vas a abrir o renovar.",
  },

  formTitle: "Pide tu visita gratis para quitar el gotelé",
  formText:
    "Dinos dónde está el piso y cuántas habitaciones tienen gotelé. Te llamamos para concertar la visita.",
};

export default function QuitarGotelePage() {
  return <ServicePage content={content} />;
}
