import type { Metadata } from "next";
import Link from "next/link";
import { BeforeAfterNote, BeforeAfterPairStatic, BeforeAfterSlider } from "@/components/BeforeAfter";
import { buttonClass } from "@/components/Button";
import { CallButton, CtaButtons, WhatsAppButton } from "@/components/CtaButtons";
import { CurveBand } from "@/components/CurveBand";
import { FaqList } from "@/components/FaqList";
import { HeroTitle } from "@/components/HeroTitle";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { Photo } from "@/components/Photo";
import { ProcessStrip } from "@/components/ProcessStrip";
import { ServiceIndex } from "@/components/ServiceIndex";
import { TrustSignals } from "@/components/TrustSignals";
import { CurveMark, PinIcon } from "@/components/icons";
import { beforeAfterPairs, photos, servicePhotos } from "@/lib/photos";
import { businessSchema, faqSchema, websiteSchema } from "@/lib/schema";
import { hoursText, processSteps, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Pintores en Valencia · Quitar gotelé y pintura | YordeK" },
  description:
    "Quitamos el gotelé, alisamos y pintamos pisos y locales en Valencia. Visita y presupuesto gratis, precio cerrado. Llama o escribe por WhatsApp.",
  alternates: { canonical: "/" },
};

const WA_MESSAGE = "Hola, quiero pedir una visita y presupuesto gratis";

// Fotos reales de antes/después. Mientras esté vacío, la sección no se muestra.
const beforeAfter = beforeAfterPairs;

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
    text: "Antes de empezar te damos la fecha de inicio y una estimación de los días. Si aparece algo que cambie el plazo, te lo decimos en el momento.",
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
    a: "Para pintar y sanear paredes, no: cubrimos los muebles y puedes seguir viviendo en casa. Si hay que lijar mucho (un gotelé grueso o paredes enteras de pasta), conviene sacar los muebles de esa habitación, porque aunque lijamos con máquina y aspirador se levanta polvo. Te lo decimos en la visita.",
  },
  {
    q: "¿Cuánto se tarda?",
    a: "Depende de los metros y del estado de las paredes. En la visita te damos una estimación aproximada de los días; hay detalles que solo aparecen al empezar el trabajo.",
  },
  {
    q: "¿Tengo que comprar yo la pintura?",
    a: "No. El presupuesto incluye los materiales y la pintura; tú solo eliges el color. Si prefieres una pintura concreta, puedes comprarla tú y la quitamos del presupuesto.",
  },
  {
    q: "¿En qué zonas trabajáis?",
    a: `En ${site.coverage}. Si no sabes si llegamos a tu municipio, pregúntanos por WhatsApp.`,
  },
  {
    q: "¿Pintáis locales y oficinas?",
    a: "Sí. Pintamos locales comerciales y oficinas para abrir o renovar el negocio.",
  },
];

export default function HomePage() {
  // Solo preguntas con respuesta real: las que siguen [PENDIENTE] no entran en el schema.
  const schemaFaqs = faqs.flatMap((f) => (typeof f.a === "string" ? [{ q: f.q, text: f.a }] : []));
  const [firstPair, ...otherPairs] = beforeAfter;

  return (
    <>
      <JsonLd data={businessSchema()} />
      <JsonLd data={websiteSchema()} />
      <JsonLd data={faqSchema(schemaFaqs)} />

      {/* S1 · Hero: termina en la curva del logo, que lleva al marino de los servicios */}
      <section className="bg-paper">
        <div className="wrap grid gap-y-7 pb-12 pt-8 lg:grid-cols-12 lg:gap-x-10 lg:pb-20 lg:pt-16">
          <div className="lg:col-span-7">
            <HeroTitle main="Pintores en Valencia:" sub="quitamos el gotelé y pintamos tu casa a precio cerrado" />
          </div>
          <Photo
            {...photos.homeHero}
            sizes="(min-width: 1024px) 40vw, 100vw"
            preload
            className="lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:self-center"
          />
          <div className="lg:col-span-7 lg:row-start-2">
            <p className="max-w-[52ch]">
              Antes de tocar una pared cubrimos suelos y muebles. Cuando nos vamos, las paredes están lisas y la casa, limpia.
            </p>
            <TrustSignals className="mt-6" />
            <CtaButtons waMessage={WA_MESSAGE} className="mt-8" />
            <p className="mt-5 flex items-center gap-1.5 text-ink-soft">
              <PinIcon className="size-5 text-brand" />
              Trabajamos en {site.area}
            </p>
          </div>
        </div>
        <CurveBand />
      </section>

      {/* S2 · Servicios: índice con vista previa */}
      <section className="bg-ink pb-18 pt-6 text-white lg:pb-32 lg:pt-10">
        <div className="wrap">
          <ServiceIndex
            dark
            heading={<h2 className="head">¿Qué necesitas?</h2>}
            items={services.map((s) => ({
              href: `/${s.slug}/`,
              name: s.name,
              text: s.benefit,
              image: servicePhotos[s.slug],
              note: "featured" in s && s.featured ? "El más pedido" : undefined,
            }))}
            footer={
              <div>
                <p className="mb-3 text-lead font-bold">¿No sabes qué necesitas?</p>
                <WhatsAppButton
                  message="Hola, os mando fotos de mis paredes para que me digáis qué necesitan"
                  label="Envíanos una foto"
                />
              </div>
            }
          />
        </div>
      </section>

      {/* S3 · Antes y después: comparador que se arrastra (solo con fotos reales) */}
      {firstPair && (
        <section className="section bg-white">
          <div className="wrap grid gap-y-8 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-10">
            <h2 className="head lg:col-span-4 lg:col-start-9 lg:row-start-1">Antes y después</h2>
            <div className="lg:col-span-7 lg:row-span-2 lg:row-start-1">
              <BeforeAfterSlider pair={firstPair} sizes="(min-width: 1024px) 55vw, 100vw" caption={otherPairs.length > 0} />
            </div>
            <div className="lg:col-span-4 lg:col-start-9 lg:row-start-2">
              <BeforeAfterNote pair={otherPairs.length ? undefined : firstPair} />
              {otherPairs.map((p) => (
                <div key={p.after} className="mt-8">
                  <BeforeAfterPairStatic pair={p} sizes="(min-width: 1024px) 15vw, 45vw" />
                </div>
              ))}
              <div className="mt-8">
                <CallButton label="Quiero mis paredes así" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* S4 · Proceso: del marino a la pared lisa */}
      <section className="section">
        <div className="wrap">
          <h2 className="head max-w-[18ch]">Cómo trabajamos, en 4 pasos</h2>
          <div className="mt-10 lg:mt-14">
            <ProcessStrip steps={processSteps} />
          </div>
          <div className="mt-10">
            <CallButton label="Empieza por el paso 1: llámanos" />
          </div>
        </div>
      </section>

      {/* S5 · Objeciones */}
      <section className="section bg-white">
        <div className="wrap grid gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-6">
            <h2 className="head">Lo que más preocupa antes de llamar a un pintor</h2>
            <div className="mt-10 hidden lg:block">
              <a href="#presupuesto" className={buttonClass()}>
                Pedir visita y presupuesto gratis
              </a>
            </div>
          </div>
          <dl className="reveal grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-6">
            {worries.map((w) => (
              <div key={w.title}>
                <dt className="flex items-center gap-2.5 text-lead font-extrabold">
                  <CurveMark className="size-6 shrink-0" />
                  {w.title}
                </dt>
                <dd className="mt-3">{w.text}</dd>
              </div>
            ))}
          </dl>
          <div className="lg:hidden">
            <a href="#presupuesto" className={buttonClass()}>
              Pedir visita y presupuesto gratis
            </a>
          </div>
        </div>
      </section>

      {/* S6 · Quiénes somos */}
      <section className="section">
        <div className="wrap grid items-center gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          <div className="reveal lg:col-span-6">
            <h2 className="head">Quiénes somos</h2>
            <p className="mt-6 max-w-[40ch] text-lead">
              En {site.name} llevamos más de {site.yearsExperience} años pintando pisos, casas y locales en Valencia, y
              preparando las paredes para que el resultado dure: quitamos el gotelé, alisamos y reparamos.
            </p>
            <p className="mt-4">
              Tú solo eliges el color. Vamos a verlo antes de darte presupuesto, protegemos suelos y muebles y lo dejamos
              todo limpio al terminar.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <CallButton label={`Llámanos: ${site.phone.display}`} />
              <Link href="/nosotros/" className="font-bold text-brand underline">
                Conoce YordeK
              </Link>
            </div>
          </div>
          <Photo
            {...photos.trabajandoCuadrada}
            aspect="aspect-square"
            sizes="(min-width: 1024px) 50vw, 100vw"
            drift
            className="lg:col-span-6"
          />
        </div>
      </section>

      {/* S7 · Precio, sin cifras: campo marino */}
      <section className="section bg-ink text-white">
        <div className="wrap grid gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-28">
              <h2 className="head">¿Cuánto cuesta? De qué depende el precio</h2>
              <p className="mt-6 max-w-[40ch] text-lead text-white/90">
                Cada casa es distinta. Estos son los factores que cambian el precio:
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <ul className="reveal space-y-5">
              {priceFactors.map((f) => (
                <li key={f} className="flex gap-3 text-lead font-semibold">
                  <CurveMark className="mt-1 size-6 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-8">
              <Link href="/quitar-gotele/#precio" className="font-bold text-[#e8875f] underline">
                Ver qué influye en el precio de quitar gotelé
              </Link>
            </p>
            <p className="mt-10 text-lead font-bold">Te damos el precio exacto tras una visita gratis.</p>
            <div className="mt-5">
              <CallButton label="Pedir visita gratis" />
            </div>
          </div>
        </div>
      </section>

      {/* S8 · FAQ */}
      <section className="section bg-white">
        <div className="wrap grid gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-4">
            <h2 className="head lg:sticky lg:top-28">Preguntas frecuentes</h2>
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={faqs} onWhite />
          </div>
        </div>
      </section>

      {/* S9 · Formulario */}
      <section id="presupuesto" className="section">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="head">Pide tu visita gratis</h2>
            <p className="mt-6 max-w-[40ch] text-lead">
              Déjanos tus datos y te llamamos. Si lo prefieres, llama o escríbenos ahora.
            </p>
            <div className="mt-8 hidden lg:block">
              <CtaButtons waMessage={WA_MESSAGE} />
            </div>
            <p className="mt-8 text-ink-soft">
              {hoursText}.
              <br />
              {site.hours.flexible}.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-10 lg:col-span-6">
            <LeadForm source="home" />
          </div>
        </div>
      </section>

      <MobileCtaBar waMessage={WA_MESSAGE} />
    </>
  );
}
