import type { Metadata } from "next";
import Link from "next/link";
import { CallButton, CtaButtons, WhatsAppButton } from "@/components/CtaButtons";
import { JsonLd } from "@/components/JsonLd";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { Pendiente } from "@/components/Pendiente";
import { TrustSignals } from "@/components/TrustSignals";
import { CheckIcon, PinIcon } from "@/components/icons";
import { breadcrumbSchema } from "@/lib/schema";
import { processSteps, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Quiénes somos · Pintores en Valencia | YordeK" },
  description:
    "Conoce a quien va a pintar tu casa: más de 6 años quitando gotelé y pintando en Valencia. Visita y presupuesto cerrado gratis. Llama o escribe.",
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

      {/* Quién soy */}
      <section className="relative overflow-hidden bg-white">
        <div aria-hidden="true" className="gotele-fade absolute inset-0" />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 pb-12 pt-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-16">
          <div>
            <p className="tape mb-4">Nosotros</p>
            <h1 className="text-[2rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              Quién va a pintar tu casa en Valencia
            </h1>
            <p className="mt-4 text-lg text-ink-soft sm:text-xl">
              Soy <Pendiente>nombre</Pendiente>, responsable de {site.name}. Llevo más de {site.yearsExperience} años
              quitando gotelé, alisando y pintando pisos y locales en Valencia.
            </p>
            <TrustSignals className="mt-5" />
            <CtaButtons waMessage={WA_MESSAGE} callLabel="Llámame" className="mt-7" />
          </div>
          <div className="grid aspect-[4/5] w-full max-w-md place-items-center rounded-2xl border-2 border-dashed border-line bg-paper p-6 text-center lg:justify-self-end">
            <Pendiente>foto real del responsable, a ser posible trabajando</Pendiente>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="mx-auto max-w-3xl px-4 py-14 lg:py-20">
        <p className="tape">Historia</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Cómo empezó {site.name}</h2>
        <div className="mt-6 space-y-4 text-lg">
          <p>
            <Pendiente>3 o 4 frases: cómo empezaste en el oficio, cuándo te estableciste por tu cuenta y por qué
            te especializaste en quitar gotelé y pintar</Pendiente>
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <WhatsAppButton message={WA_MESSAGE} label="Escríbeme por WhatsApp" />
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="bg-ink py-14 text-white lg:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="tape">Cómo trabajamos</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Lo que puedes esperar de nosotros</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {commitments.map((c) => (
              <li key={c.title} className="rounded-2xl bg-white/5 p-6">
                <h3 className="flex items-start gap-2 text-xl font-bold">
                  <CheckIcon className="mt-1 size-5 shrink-0 text-tape" />
                  {c.title}
                </h3>
                <p className="mt-2 text-white/75">{c.text}</p>
              </li>
            ))}
          </ul>

          <h3 className="mt-12 text-2xl font-bold">Los 4 pasos, de la llamada a la entrega</h3>
          <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <li key={step.title}>
                <span className="grid size-10 place-items-center rounded-full bg-brand text-lg font-extrabold">
                  {i + 1}
                </span>
                <p className="mt-3 text-lg font-bold">{step.title}</p>
                <p className="mt-1 text-white/75">{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex justify-center">
            <CallButton label="Pedir mi visita gratis" />
          </div>
        </div>
      </section>

      {/* Qué hacemos */}
      <section className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
        <h2 className="text-3xl font-extrabold tracking-tight">En qué trabajamos</h2>
        <p className="mt-3 text-lg text-ink-soft">
          Paredes y techos interiores de pisos, casas, locales y oficinas.
        </p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/${s.slug}/`}
                className="inline-block rounded-full border border-line bg-white px-4 py-2 font-semibold hover:border-brand hover:text-brand"
              >
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Zona de trabajo */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="tape">Zona de trabajo</p>
          <h2 className="mt-3 flex items-center gap-2 text-3xl font-extrabold tracking-tight">
            <PinIcon className="size-7 shrink-0 text-brand" />
            Trabajamos en {site.area}
          </h2>
          {site.municipalities.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-2">
              {site.municipalities.map((m) => (
                <li key={m} className="rounded-full bg-paper px-3 py-1">{m}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 text-lg">
              <Pendiente>lista de municipios</Pendiente>
            </p>
          )}
          <p className="mt-6 text-lg text-ink-soft">
            ¿No ves tu municipio? Pregúntanos por WhatsApp y te decimos si llegamos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButtons waMessage="Hola, ¿trabajáis en mi zona? Estoy en " />
          </div>
        </div>
      </section>

      <MobileCtaBar waMessage={WA_MESSAGE} />
    </>
  );
}
