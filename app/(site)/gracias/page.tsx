import type { Metadata } from "next";
import Link from "next/link";
import { CallButton, WhatsAppButton } from "@/components/CtaButtons";
import { ConversionEvent } from "@/components/ConversionEvent";
import { CheckIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solicitud recibida",
  description: "Hemos recibido tu solicitud. Te llamamos para concertar la visita gratis.",
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return (
    <section className="wrap max-w-3xl py-16 text-center lg:py-28">
      <ConversionEvent event="envio_formulario" />

      <span className="mx-auto grid size-16 place-items-center rounded-full bg-wa/10 text-wa">
        <CheckIcon className="size-9" />
      </span>
      <h1 className="head mt-6">Recibido. Te llamamos para concertar la visita</h1>
      <p className="mt-6 text-lead">
        Te llamamos {site.hours.days}, de {site.hours.opens.replace(/^0/, "")} a {site.hours.closes}. Si ves una llamada del{" "}
        {site.phone.display} o del {site.phoneSecondary.display}, somos nosotros.
      </p>

      <div className="mt-12 bg-white p-6 sm:p-10">
        <p className="text-lead font-bold">¿Es urgente?</p>
        <p className="mt-1">
          Escríbenos por WhatsApp. Si nos mandas fotos de las paredes, llegamos a la visita sabiendo lo que hay.
        </p>
        <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
          <WhatsAppButton message="Hola, acabo de pedir presupuesto en la web y es urgente" label="Escribir por WhatsApp" />
          <CallButton label="Llamar ahora" />
        </div>
      </div>

      <p className="mt-10">
        <Link href="/" className="font-semibold text-brand underline">Volver al inicio</Link>
      </p>
    </section>
  );
}
