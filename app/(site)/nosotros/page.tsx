import type { Metadata } from "next";
import { CallButton, CtaButtons, WhatsAppButton } from "@/components/CtaButtons";
import { CurveBand } from "@/components/CurveBand";
import { HeroTitle } from "@/components/HeroTitle";
import { JsonLd } from "@/components/JsonLd";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { Photo } from "@/components/Photo";
import { ProcessStrip } from "@/components/ProcessStrip";
import { ServiceIndex } from "@/components/ServiceIndex";
import { TrustSignals } from "@/components/TrustSignals";
import { CurveMark, PinIcon } from "@/components/icons";
import { photos, servicePhotos } from "@/lib/photos";
import { breadcrumbSchema } from "@/lib/schema";
import { processSteps, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Quiénes somos · Pintores en Valencia | YordeK" },
  description:
    "Conoce YordeK: más de 6 años quitando gotelé, alisando y pintando en Valencia. Visita y presupuesto cerrado gratis. Llama o escribe.",
  alternates: { canonical: "/nosotros/" },
};

const WA_MESSAGE = "Hola, he visto vuestra web y quiero pedir una visita";

const commitments = [
  {
    title: "Visita y presupuesto gratis",
    text: "Vamos a tu casa, medimos y te damos el presupuesto sin compromiso.",
  },
  {
    title: "Presupuesto cerrado",
    text: "El precio que te damos después de la visita es el que pagas al terminar.",
  },
  {
    title: "Casa protegida y limpia",
    text: "Cubrimos suelos y muebles antes de empezar y recogemos todo al acabar.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: `${site.url}/nosotros/`,
          about: { "@id": `${site.url}/#negocio` },
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Nosotros", path: "/nosotros/" },
        ])}
      />

      {/* Quiénes somos */}
      <section className="bg-paper">
        <div className="wrap grid gap-y-7 pb-12 pt-8 lg:grid-cols-12 lg:gap-x-10 lg:pb-20 lg:pt-16">
          <div className="lg:col-span-8 lg:self-end">
            <HeroTitle main={`Somos ${site.name}, pintores en Valencia`} long />
          </div>
          <Photo
            {...photos.trabajandoVertical}
            aspect="aspect-[4/5]"
            sizes="(min-width: 1024px) 34vw, 100vw"
            preload
            className="lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1"
          />
          <div className="lg:col-span-7 lg:row-start-2">
            <p className="max-w-[52ch] text-lead">
              Llevamos más de {site.yearsExperience} años quitando gotelé, alisando y pintando pisos y locales en
              Valencia. Trabajamos siempre igual: visita gratis, precio cerrado y la casa limpia al terminar.
            </p>
            <TrustSignals className="mt-6" />
            <CtaButtons waMessage={WA_MESSAGE} callLabel="Llámanos" className="mt-8" />
          </div>
        </div>
        <CurveBand />
      </section>

      {/* Por qué preparamos la pared: campo marino */}
      <section className="bg-ink pb-18 pt-6 text-white lg:pb-32 lg:pt-10">
        <div className="wrap grid items-center gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          <div className="reveal lg:col-span-6">
            <h2 className="head">Una buena pintura empieza por la pared</h2>
            <p className="mt-6 text-lead">
              No nos quedamos en pintar: hacemos todo lo necesario para que la pintura quede perfecta. Si hace falta,
              quitamos el gotelé, alisamos y tapamos grietas y desconchones, y solo entonces damos el color.
            </p>
            <div className="mt-10">
              <WhatsAppButton message={WA_MESSAGE} label="Escríbenos por WhatsApp" />
            </div>
          </div>
          <Photo {...photos.paredLisa} sizes="(min-width: 1024px) 45vw, 100vw" drift className="lg:col-span-6" />
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="section">
        <div className="wrap">
          <h2 className="head max-w-[20ch]">Lo que puedes esperar de nosotros</h2>
          <ul className="reveal mt-10 grid gap-x-10 gap-y-8 md:grid-cols-3 lg:mt-14">
            {commitments.map((c) => (
              <li key={c.title}>
                <h3 className="flex items-center gap-3 text-lead font-extrabold">
                  <CurveMark className="size-6 shrink-0" />
                  {c.title}
                </h3>
                <p className="mt-2 pl-9">{c.text}</p>
              </li>
            ))}
          </ul>

          <h3 className="mt-16 text-lead font-extrabold lg:mt-24">Los 4 pasos, de la llamada a la entrega</h3>
          <div className="mt-6">
            <ProcessStrip steps={processSteps} />
          </div>

          <div className="mt-10">
            <CallButton label="Pedir mi visita gratis" />
          </div>
        </div>
      </section>

      {/* Qué hacemos */}
      <section className="section bg-white">
        <div className="wrap">
          <ServiceIndex
            heading={
              <>
                <h2 className="head">En qué trabajamos</h2>
                <p className="mt-6 max-w-[40ch] text-lead">
                  Paredes y techos interiores de pisos, casas, locales y oficinas.
                </p>
              </>
            }
            items={services.map((s) => ({
              href: `/${s.slug}/`,
              name: s.name,
              text: s.benefit,
              image: servicePhotos[s.slug],
            }))}
          />
        </div>
      </section>

      {/* Zona de trabajo */}
      <section className="section">
        <div className="wrap grid gap-y-8 lg:grid-cols-12 lg:gap-x-10">
          <h2 className="head flex items-start gap-3 lg:col-span-6">
            <PinIcon className="mt-[0.15em] size-[0.8em] shrink-0 text-brand" />
            Trabajamos en {site.area}
          </h2>
          <div className="lg:col-span-5 lg:col-start-8">
            {site.municipalities.length > 0 ? (
              <ul className="flex flex-wrap gap-2">
                {site.municipalities.map((m) => (
                  <li key={m} className="bg-white px-3 py-1">{m}</li>
                ))}
              </ul>
            ) : (
              <p className="text-lead">{site.coverage}.</p>
            )}
            <p className="mt-6 text-lead">
              ¿No ves tu municipio? Pregúntanos por WhatsApp y te decimos si llegamos.
            </p>
            <CtaButtons waMessage="Hola, ¿trabajáis en mi zona? Estoy en " className="mt-8" />
          </div>
        </div>
      </section>

      <MobileCtaBar waMessage={WA_MESSAGE} />
    </>
  );
}
