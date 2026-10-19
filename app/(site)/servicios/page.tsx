import type { Metadata } from "next";
import Link from "next/link";
import { CtaButtons, WhatsAppButton } from "@/components/CtaButtons";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { TrustSignals } from "@/components/TrustSignals";
import { ArrowIcon, PinIcon } from "@/components/icons";
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

      <section className="relative overflow-hidden bg-white">
        <div aria-hidden="true" className="gotele-fade absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-8 lg:py-16">
          <p className="tape mb-4">Servicios · Valencia</p>
          <h1 className="max-w-3xl text-[2rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            Servicios de pintura y alisado en Valencia
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft sm:text-xl">
            Quitamos el gotelé, alisamos, reparamos y pintamos paredes y techos de pisos, locales y oficinas.
          </p>
          <TrustSignals className="mt-5" />
          <CtaButtons waMessage={WA_MESSAGE} className="mt-7" />
          <p className="mt-4 flex items-center gap-1.5 text-ink-soft">
            <PinIcon className="size-5 text-brand" />
            Trabajamos en {site.area}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const featured = "featured" in s && s.featured;
            return (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}/`}
                  className={`group flex h-full flex-col rounded-2xl border p-6 transition hover:-translate-y-0.5 hover:shadow-md ${
                    featured ? "border-brand bg-brand text-white" : "border-line bg-white"
                  }`}
                >
                  {featured && (
                    <span className="mb-3 w-fit rounded-full bg-brand-dark px-3 py-1 text-sm font-semibold">
                      El más pedido
                    </span>
                  )}
                  <h2 className="text-2xl font-extrabold">{s.name}</h2>
                  <p className={`mt-2 ${featured ? "text-white/90" : "text-ink-soft"}`}>{s.benefit}</p>
                  <span className={`mt-auto flex items-center gap-1 pt-4 font-bold ${featured ? "" : "text-brand"}`}>
                    Ver servicio <ArrowIcon className="size-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <p className="tape">Guía rápida</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">¿No sabes qué servicio necesitas?</h2>
          <p className="mt-3 text-lg text-ink-soft">Mira tus paredes y busca la frase que mejor las describe.</p>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {guide.map((g) => {
              const service = services.find((s) => s.slug === g.slug)!;
              return (
                <li key={g.slug}>
                  <Link
                    href={`/${g.slug}/`}
                    className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                  >
                    <span className="text-lg">{g.symptom}</span>
                    <span className="flex shrink-0 items-center gap-1 font-bold text-brand">
                      {service.name} <ArrowIcon className="size-4 transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-10 text-center">
            <p className="mb-3 text-lg font-semibold">¿Sigues con dudas? Mándanos una foto y te lo decimos.</p>
            <WhatsAppButton
              message="Hola, os mando fotos de mis paredes para que me digáis qué necesitan"
              label="Enviar foto por WhatsApp"
            />
          </div>
        </div>
      </section>

      <section id="presupuesto" className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Pide tu visita gratis</h2>
            <p className="mt-3 text-lg text-ink-soft">
              Elige el tipo de trabajo y te llamamos para ir a verlo. Si no lo tienes claro, marca «Otro».
            </p>
            <CtaButtons waMessage={WA_MESSAGE} className="mt-6 hidden lg:flex" />
          </div>
          <div className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
            <LeadForm source="servicios" />
          </div>
        </div>
      </section>

      <MobileCtaBar waMessage={WA_MESSAGE} />
    </>
  );
}
