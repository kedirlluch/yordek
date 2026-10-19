import type { Metadata } from "next";
import Link from "next/link";
import { Pendiente } from "@/components/Pendiente";
import { ServicePage, type ServiceContent } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: { absolute: "Alisado de paredes y techos en Valencia | YordeK" },
  description:
    "Alisamos paredes y techos con ondas, parches o pintura vieja y los dejamos planos para pintar. Valencia y alrededores. Visita y presupuesto gratis.",
  alternates: { canonical: "/alisado-de-paredes/" },
};

const content: ServiceContent = {
  slug: "alisado-de-paredes",
  jobType: "Alisado",
  waMessage: "Hola, quiero un presupuesto para alisar paredes",
  description:
    "Alisado de paredes y techos en Valencia: rascado, plastecido, lijado e imprimación para dejar la superficie plana y lista para pintar.",
  h1: "Alisado de paredes y techos en Valencia",
  intro:
    "Ondas que se ven al encender la luz, parches de reparaciones antiguas, capas de pintura que se levantan. Dejamos paredes y techos planos y uniformes, listos para pintar.",
  heroPhoto: "foto real de un techo o pared alisada con luz lateral",

  includesTitle: "Qué hacemos para alisar tus paredes",
  includes: [
    {
      title: "Rascado",
      text: "Quitamos la pintura que se despega y todo lo que esté mal pegado a la pared.",
    },
    {
      title: "Plastecido",
      text: "Tendemos pasta en las zonas irregulares o en toda la pared, según lo que necesite.",
    },
    {
      title: "Lijado",
      text: "Repasamos la pasta seca con lija hasta que la superficie queda plana.",
    },
    {
      title: "Techos",
      text: "Alisamos también techos, donde los defectos se notan más con la luz de la ventana.",
    },
    {
      title: "Imprimación",
      text: "La pared alisada absorbe la pintura de forma desigual. La imprimación lo iguala.",
    },
    {
      title: "Suelos y muebles protegidos",
      text: "Lo cubrimos todo antes de rascar y lo dejamos limpio al terminar.",
    },
  ],
  includesCta: "Quiero las paredes lisas",

  processTitle: "Cómo alisamos una pared, paso a paso",
  steps: [
    {
      title: "Visita",
      text: "Vemos paredes y techos, medimos y te decimos si basta con repasar zonas o hay que tender la pared entera.",
    },
    {
      title: "Protección",
      text: "Cubrimos suelos y muebles antes de empezar a rascar.",
    },
    {
      title: "Rascado y reparación",
      text: "Quitamos lo que está suelto y rellenamos agujeros y grietas.",
    },
    {
      title: "Tendido de pasta",
      text: "Aplicamos la pasta de alisar y la dejamos secar.",
    },
    {
      title: "Lijado e imprimación",
      text: "Lijamos, limpiamos el polvo de la pared y damos la imprimación.",
    },
    {
      title: "Limpieza",
      text: "Retiramos plásticos y cintas y dejamos la casa recogida.",
    },
  ],

  priceTitle: "¿De qué depende el precio de alisar paredes?",
  priceIntro: "Dos paredes con los mismos metros pueden necesitar trabajos muy distintos. Esto es lo que cuenta:",
  priceFactors: [
    {
      title: "Repasar zonas o tender toda la pared",
      text: "Unas ondas sueltas se arreglan por zonas. Una pared llena de parches suele necesitar una capa completa.",
    },
    {
      title: "Paredes o también techos",
      text: "El techo es más lento de alisar que la pared.",
    },
    {
      title: "Estado de la pintura vieja",
      text: "Si se despega, hay que rascarla entera antes de alisar.",
    },
    {
      title: "Metros cuadrados",
      text: "La superficie total de paredes y techos que hay que alisar.",
    },
    {
      title: "Casa vacía o amueblada",
      text: "Cuantos más muebles, más protección y más tiempo de preparación.",
    },
    {
      title: "Pintura incluida o no",
      text: "Podemos entregarla lista para pintar o ya pintada.",
    },
  ],

  faqTitle: "Preguntas sobre el alisado de paredes",
  faqs: [
    {
      q: "¿Qué diferencia hay entre alisar paredes y quitar el gotelé?",
      a: (
        <>
          Quitar el gotelé es un tipo de alisado. Esta página es para paredes sin gotelé que no están planas: ondas,
          parches o marcas. Si tus paredes tienen gotelé, mira{" "}
          <Link href="/quitar-gotele/" className="font-semibold text-brand underline">quitar gotelé</Link>.
        </>
      ),
      text: "Quitar el gotelé es un tipo de alisado. El alisado de paredes es para paredes sin gotelé que no están planas: ondas, parches o marcas.",
    },
    {
      q: "¿Por qué se notan los parches en mi pared aunque esté pintada?",
      a: "Porque la zona reparada y el resto de la pared quedan a distinto nivel o absorben la pintura de forma distinta. Con la luz de lado se ve el borde. Alisando la pared entera desaparecen.",
    },
    {
      q: "¿Alisáis también los techos?",
      a: "Sí. Alisamos paredes y techos.",
    },
    {
      q: "¿Hay que pintar después de alisar?",
      a: "Sí. La pared alisada necesita pintura para quedar terminada. Podemos incluirla en el mismo presupuesto.",
    },
    {
      q: "¿Podéis alisar solo una pared o una habitación?",
      a: <Pendiente>si hay trabajo mínimo</Pendiente>,
    },
  ],

  related: {
    "quitar-gotele": "Si la pared que quieres lisa tiene gotelé.",
    "reparacion-de-paredes": "Si solo hay una grieta o un desconchón y el resto de la pared está bien.",
    "pintura-de-pisos": "Para pintar toda la casa una vez alisadas las paredes.",
    "pintura-de-locales-comerciales": "Si las paredes a alisar son las de un local u oficina.",
  },

  formTitle: "Pide tu visita gratis para alisar paredes",
  formText:
    "Cuéntanos qué paredes o techos quieres alisar. Te llamamos para ir a verlas.",
};

export default function AlisadoPage() {
  return <ServicePage content={content} />;
}
