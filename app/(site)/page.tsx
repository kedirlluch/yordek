import type { Metadata } from "next";
import Link from "next/link";
import { buttonClass } from "@/components/Button";
import { CallButton, CtaButtons, WhatsAppButton } from "@/components/CtaButtons";
import { LeadForm } from "@/components/LeadForm";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { JsonLd } from "@/components/JsonLd";
import { Pendiente } from "@/components/Pendiente";
import { TrustSignals } from "@/components/TrustSignals";
import { ArrowIcon, PinIcon } from "@/components/icons";
import { businessSchema, faqSchema, websiteSchema } from "@/lib/schema";
import { processSteps, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Pintores en Valencia · Quitar gotelé y pintura | YordeK" },
  description:
    "Quitamos el gotelé, alisamos y pintamos pisos y locales en Valencia. Visita y presupuesto gratis, precio cerrado. Llama o escribe por WhatsApp.",
  alternates: { canonical: "/" },
};

const WA_MESSAGE = "Hola, quiero pedir una visita y presupuesto gratis";

// Fotos reales de antes/después. Mientras esté vacío, la sección no se muestra.
const beforeAfter: { before: string; after: string; caption: string }[] = [];

const worries = [
  {
    title: "Polvo y suciedad",
    text: "Protegemos suelos y muebles antes de empezar y dejamos todo limpio al terminar.",
  },
  {
    title: "Precio",
    text: "El precio que te damos después de la visita es el que pagas al terminar.",
  },
  {
    title: "Plazo",
    text: <Pendiente>confirmar el compromiso de plazo, p. ej. «te decimos la fecha de inicio y los días de trabajo antes de empezar»</Pendiente>,
  },
  {
    title: "Acabado",
    text: "Rascamos, plastecemos, lijamos y damos imprimación antes de pintar. Así la pintura no deja ver los defectos de debajo.",
  },
];

const priceFactors = [
  "Metros cuadrados de paredes y techos",
  "Estado de las paredes: grietas, desconchones, humedad",
  "Si también hay que hacer los techos",
  "Si la vivienda está vacía o amueblada",
  "Número de manos de pintura y el color",
];

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "¿El presupuesto cuesta algo?",
    a: "No. La visita y el presupuesto son gratis y sin compromiso. Te visitamos y te damos el presupuesto en menos de una semana.",
  },
  {
    q: "¿Se llena todo de polvo?",
    a: "Antes de empezar cubrimos suelos y muebles y protegemos lo que no se pinta. Al terminar, recogemos y dejamos la casa limpia.",
  },
  {
    q: "¿Hay que vaciar la casa?",
    a: <Pendiente>cómo trabajáis con la casa amueblada</Pendiente>,
  },
  {
    q: "¿Cuánto se tarda?",
    a: (
      <>
        Depende de los metros y del estado de las paredes. En la visita te decimos cuántos días hacen falta.{" "}
        <Pendiente>plazo típico, p. ej. quitar gotelé de un piso de 80 m²</Pendiente>
      </>
    ),
  },
  {
    q: "¿Tengo que comprar yo la pintura?",
    a: <Pendiente>si el presupuesto incluye materiales y pintura</Pendiente>,
  },
  {
    q: "¿En qué zonas trabajáis?",
    a: (
      <>
        En {site.area}. <Pendiente>lista de municipios</Pendiente>
      </>
    ),
  },
  {
    q: "¿Pintáis locales y oficinas?",
    a: "Sí. Pintamos locales comerciales y oficinas para abrir o renovar el negocio.",
  },
];

function SectionCta({ children }: { children: React.ReactNode }) {
  return <div className="mt-10 flex justify-center">{children}</div>;
}

export default function HomePage() {
  // Solo preguntas con respuesta real: las que siguen [PENDIENTE] no entran en el schema.
  const schemaFaqs = faqs.flatMap((f) => (typeof f.a === "string" ? [{ q: f.q, text: f.a }] : []));

  return (
    <>
      <JsonLd data={businessSchema()} />
      <JsonLd data={websiteSchema()} />
      <JsonLd data={faqSchema(schemaFaqs)} />

      {/* S1 · Hero */}
      <section className="relative overflow-hidden bg-white">
        <div aria-hidden="true" className="gotele-fade absolute inset-0" />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 pb-12 pt-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-16">
          <div>
            <p className="tape mb-4">Alisado y pintura · Valencia</p>
            <h1 className="text-[2rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              Pintores en Valencia: quitamos el gotelé y pintamos tu casa{" "}
              <span className="whitespace-nowrap bg-[linear-gradient(transparent_62%,var(--color-tape)_62%)]">a precio cerrado</span>
            </h1>
            <p className="mt-4 text-lg text-ink-soft sm:text-xl">
              Antes de tocar una pared cubrimos suelos y muebles. Cuando nos vamos, las paredes están lisas y la casa, limpia.
            </p>
            <TrustSignals className="mt-5" />
            <CtaButtons waMessage={WA_MESSAGE} className="mt-7" />
            <p className="mt-4 flex items-center gap-1.5 text-ink-soft">
              <PinIcon className="size-5 text-brand" />
              Trabajamos en {site.area}
            </p>
          </div>
          {/* Foto real del hero (LCP): sustituir por <Image priority> cuando llegue */}
          <div className="grid aspect-[4/3] place-items-center rounded-2xl border-2 border-dashed border-line bg-paper p-6 text-center">
            <Pendiente>foto real de una pared lisa recién terminada</Pendiente>
          </div>
        </div>
      </section>

      {/* S2 · Servicios */}
      <section className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
        <p className="tape">Servicios</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight">¿Qué necesitas?</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const featured = "featured" in s && s.featured;
            return (
              <li key={s.slug} className={featured ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}>
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
                  <h3 className={`font-extrabold ${featured ? "text-3xl" : "text-xl"}`}>{s.name}</h3>
                  <p className={`mt-2 ${featured ? "text-lg text-white/90" : "text-ink-soft"}`}>{s.benefit}</p>
                  <span className={`mt-auto flex items-center gap-1 pt-4 font-bold ${featured ? "" : "text-brand"}`}>
                    Ver servicio <ArrowIcon className="size-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <SectionCta>
          <div className="text-center">
            <p className="mb-3 text-lg font-semibold">¿No sabes qué necesitas?</p>
            <WhatsAppButton
              message="Hola, os mando fotos de mis paredes para que me digáis qué necesitan"
              label="Envíanos una foto"
            />
          </div>
        </SectionCta>
      </section>

      {/* S3 · Antes y después (solo con fotos reales) */}
      {beforeAfter.length > 0 && (
        <section className="bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-extrabold tracking-tight">Antes y después</h2>
            {/* Galería: pendiente de recibir fotos */}
            <SectionCta>
              <CallButton label="Quiero mis paredes así" />
            </SectionCta>
          </div>
        </section>
      )}

      {/* S4 · Proceso */}
      <section className="bg-ink py-14 text-white lg:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="tape">Proceso</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Cómo trabajamos, en 4 pasos</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <li key={step.title} className="rounded-2xl bg-white/5 p-6">
                <span className="grid size-10 place-items-center rounded-full bg-brand text-lg font-extrabold">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-1 text-white/75">{step.text}</p>
              </li>
            ))}
          </ol>
          <SectionCta>
            <CallButton label="Empieza por el paso 1: llámanos" />
          </SectionCta>
        </div>
      </section>

      {/* S5 · Objeciones */}
      <section className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
        <p className="tape">Sin sorpresas</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Lo que más preocupa antes de llamar a un pintor</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {worries.map((w) => (
            <li key={w.title} className="rounded-2xl border border-line bg-white p-6">
              <h3 className="text-xl font-bold">{w.title}</h3>
              <p className="mt-2 text-ink-soft">{w.text}</p>
            </li>
          ))}
        </ul>
        <SectionCta>
          <a href="#presupuesto" className={buttonClass()}>
            Pedir visita y presupuesto gratis
          </a>
        </SectionCta>
      </section>

      {/* S6 · Responsable */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-[280px_1fr]">
          <div className="grid aspect-square w-full max-w-60 place-items-center rounded-2xl border-2 border-dashed border-line bg-paper p-4 text-center md:max-w-none">
            <Pendiente>foto del responsable</Pendiente>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Quién va a tu casa</h2>
            <p className="mt-4 text-lg">
              Soy <Pendiente>nombre</Pendiente>, responsable de {site.name}. Llevo más de {site.yearsExperience} años
              quitando gotelé y pintando casas y locales en Valencia.
            </p>
            <p className="mt-3 text-lg text-ink-soft">
              <Pendiente>2 o 3 frases suyas sobre cómo trabaja</Pendiente>
            </p>
            <div className="mt-6">
              <CallButton label={`Llámame: ${site.phone.display}`} />
            </div>
          </div>
        </div>
      </section>

      {/* S7 · Precio */}
      <section className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
        <div className="rounded-3xl bg-brand-soft p-6 sm:p-10">
          <h2 className="text-3xl font-extrabold tracking-tight">¿Cuánto cuesta? De qué depende el precio</h2>
          <p className="mt-3 text-lg text-ink-soft">
            Cada casa es distinta. Estos son los factores que cambian el precio:
          </p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {priceFactors.map((f) => (
              <li key={f} className="flex gap-2 text-lg">
                <span aria-hidden="true" className="text-brand">●</span>
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-5">
            <Link href="/quitar-gotele/#precio" className="font-bold text-brand-dark underline">
              Ver qué influye en el precio de quitar gotelé
            </Link>
          </p>
          <p className="mt-8 text-lg font-semibold">Te damos el precio exacto tras una visita gratis.</p>
          <div className="mt-4">
            <CallButton label="Pedir visita gratis" />
          </div>
        </div>
      </section>

      {/* S8 · FAQ */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <p className="tape">Dudas</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Preguntas frecuentes</h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="text-2xl text-brand transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* S9 · Formulario */}
      <section id="presupuesto" className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Pide tu visita gratis</h2>
            <p className="mt-3 text-lg text-ink-soft">
              Déjanos tus datos y te llamamos. Si lo prefieres, llama o escríbenos ahora.
            </p>
            <CtaButtons waMessage={WA_MESSAGE} className="mt-6 hidden lg:flex" />
            <p className="mt-6 text-ink-soft">
              Horario: {site.hours.opens} – {site.hours.closes}
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
            <LeadForm source="home" />
          </div>
        </div>
      </section>

      <MobileCtaBar waMessage={WA_MESSAGE} />
    </>
  );
}
