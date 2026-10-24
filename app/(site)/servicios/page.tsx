import type { Metadata } from "next";
import Link from "next/link";
import { CtaButtons, WhatsAppButton } from "@/components/CtaButtons";
import { CurveBand } from "@/components/CurveBand";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { ServiceIndex } from "@/components/ServiceIndex";
import { TrustSignals } from "@/components/TrustSignals";
import { ArrowIcon, PinIcon } from "@/components/icons";
import { servicePhotos } from "@/lib/photos";
import { breadcrumbSchema } from "@/lib/schema";
import { services, site, type ServiceSlug } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Servicios de pintura y alisado en Valencia | YordeK" },
  description:
    "Quitar gotelé, alisado, pintura de pisos y locales y reparación de paredes en Valencia. Visita y presupuesto gratis. Llama o escribe por WhatsApp.",
  alternates: { canonical: "/servicios/" },
};

const WA_MESSAGE = "Hola, quiero pedir una visita y presupuesto gratis";

// Guía rápida: de lo que ve el cliente en su pared al servicio que necesita.
const guide: { symptom: string; slug: ServiceSlug }[] = [
  { symptom: "Las paredes tienen gotelé y las quieres lisas", slug: "quitar-gotele" },
  { symptom: "Sin gotelé, pero con ondas, parches o pintura que se levanta", slug: "alisado-de-paredes" },
  { symptom: "Grietas, agujeros de tacos o desconchones sueltos", slug: "reparacion-de-paredes" },
  { symptom: "Las paredes están bien y quieres cambiar de color o refrescar la casa", slug: "pintura-de-pisos" },
  { symptom: "Es un local o una oficina", slug: "pintura-de-locales-comerciales" },
];

export default function ServiciosPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Servicios", path: "/servicios/" },
        ])}
      />

      <section className="bg-paper">
        <div className="wrap pb-12 pt-8 lg:pb-20 lg:pt-16">
          <h1 className="display -ml-[0.04em] max-w-[16ch]">Servicios de pintura y alisado en Valencia</h1>
          <p className="mt-6 max-w-[52ch] text-lead">
            Quitamos el gotelé, alisamos, reparamos y pintamos paredes y techos de pisos, locales y oficinas.
          </p>
          <TrustSignals className="mt-6" />
          <CtaButtons waMessage={WA_MESSAGE} className="mt-8" />
          <p className="mt-5 flex items-center gap-1.5 text-ink-soft">
            <PinIcon className="size-5 text-brand" />
            Trabajamos en {site.area}
          </p>
        </div>
        <CurveBand />
      </section>

      <section className="bg-ink pb-18 pt-6 text-white lg:pb-32 lg:pt-10">
        <div className="wrap">
          <ServiceIndex
            dark
            heading={<h2 className="head">Qué hacemos</h2>}
            items={services.map((s) => ({
              href: `/${s.slug}/`,
              name: s.name,
              text: s.benefit,
              image: servicePhotos[s.slug],
              note: "featured" in s && s.featured ? "El más pedido" : undefined,
            }))}
          />
        </div>
      </section>

      <section className="section bg-white">
        <div className="wrap grid gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-4">
            <h2 className="head">¿No sabes qué servicio necesitas?</h2>
            <p className="mt-6 text-lead">Mira tus paredes y busca la frase que mejor las describe.</p>
          </div>
          <div className="lg:col-span-8">
            <ul className="space-y-2">
              {guide.map((g) => {
                const service = services.find((s) => s.slug === g.slug)!;
                return (
                  <li key={g.slug}>
                    <Link
                      href={`/${g.slug}/`}
                      className="group flex flex-col gap-1 bg-paper px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6"
                    >
                      <span className="text-lead">{g.symptom}</span>
                      <span className="flex shrink-0 items-center gap-1 font-bold text-brand">
                        {service.name} <ArrowIcon className="size-4 transition group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-10">
              <p className="mb-3 text-lead font-bold">¿Sigues con dudas? Mándanos una foto y te lo decimos.</p>
              <WhatsAppButton
                message="Hola, os mando fotos de mis paredes para que me digáis qué necesitan"
                label="Enviar foto por WhatsApp"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="presupuesto" className="section">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="head">Pide tu visita gratis</h2>
            <p className="mt-6 max-w-[40ch] text-lead">
              Elige el tipo de trabajo y te llamamos para ir a verlo. Si no lo tienes claro, marca «Otro».
            </p>
            <div className="mt-8 hidden lg:block">
              <CtaButtons waMessage={WA_MESSAGE} />
            </div>
          </div>
          <div className="bg-white p-6 sm:p-10 lg:col-span-6">
            <LeadForm source="servicios" />
          </div>
        </div>
      </section>

      <MobileCtaBar waMessage={WA_MESSAGE} />
    </>
  );
}
