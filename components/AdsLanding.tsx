import { BeforeAfterNote, BeforeAfterSlider, type BeforeAfterPair } from "@/components/BeforeAfter";
import { CallButton, CtaButtons } from "@/components/CtaButtons";
import { CurveBand } from "@/components/CurveBand";
import { FaqList } from "@/components/FaqList";
import { HeroTitle } from "@/components/HeroTitle";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { Photo, type PhotoSrc } from "@/components/Photo";
import { Pendiente } from "@/components/Pendiente";
import { ProcessStrip } from "@/components/ProcessStrip";
import { TrustSignals } from "@/components/TrustSignals";
import { CurveMark, PinIcon } from "@/components/icons";
import { faqSchema } from "@/lib/schema";
import { processSteps, site, type JobType } from "@/lib/site";

// Plantilla de landing de Google Ads: una sola acción (llamar, WhatsApp o formulario).
// Las FAQ solo llevan respuestas reales: nada de [PENDIENTE] delante del tráfico de pago.

export type AdsLandingContent = {
  source: string;
  waMessage: string;
  h1: string;
  h1Highlight: string;
  intro: string;
  formTitle: string;
  fixedJobType?: JobType;
  jobOptions?: readonly JobType[];
  includesTitle: string;
  includes: string[];
  /** Qué debe salir en la foto mientras no la hay. */
  photo: string;
  image?: PhotoSrc;
  faqs: { q: string; a: string }[];
  finalTitle: string;
  /** Pareja antes/después (solo fotos reales; mientras sean de prueba llevan la etiqueta). */
  beforeAfter?: BeforeAfterPair;
  /** Foto junto al CTA final. */
  finalImage?: PhotoSrc;
};

export function AdsLanding({ content: c }: { content: AdsLandingContent }) {
  return (
    <>
      <JsonLd data={faqSchema(c.faqs.map((f) => ({ q: f.q, text: f.a })))} />

      {/* Hero + formulario: termina en la curva del logo */}
      <section className="bg-paper">
        <div className="wrap grid gap-y-10 pb-12 pt-8 lg:grid-cols-12 lg:gap-x-10 lg:pb-20 lg:pt-14">
          <div className="lg:col-span-7">
            <HeroTitle main={c.h1} sub={c.h1Highlight} />
            <p className="mt-6 max-w-[52ch]">{c.intro}</p>
            <TrustSignals className="mt-6" />
            <CtaButtons waMessage={c.waMessage} className="mt-8" />
            <p className="mt-5 flex items-center gap-1.5 text-ink-soft">
              <PinIcon className="size-5 text-brand" />
              Trabajamos en {site.area}
            </p>
          </div>
          <div id="presupuesto" className="scroll-mt-20 bg-white p-6 sm:p-8 lg:col-span-5 lg:self-start">
            <h2 className="text-lead font-extrabold">{c.formTitle}</h2>
            <p className="mb-5 mt-1 text-ink-soft">Te llamamos para concertar la visita.</p>
            <LeadForm source={c.source} fixedJobType={c.fixedJobType} jobOptions={c.jobOptions} />
          </div>
        </div>
        <CurveBand />
      </section>

      {/* Proceso: campo marino */}
      <section className="bg-ink pb-18 pt-6 text-white lg:pb-28 lg:pt-10">
        <div className="wrap">
          <h2 className="head">Así funciona</h2>
          <div className="mt-10">
            <ProcessStrip steps={processSteps} onDark />
          </div>
          <CtaButtons waMessage={c.waMessage} className="mt-10" />
        </div>
      </section>

      {/* Antes y después: comparador que se arrastra */}
      {c.beforeAfter && (
        <section className="section bg-white">
          <div className="wrap grid gap-y-8 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-10">
            <h2 className="head lg:col-span-4 lg:col-start-9 lg:row-start-1">Antes y después</h2>
            <div className="lg:col-span-7 lg:row-span-2 lg:row-start-1">
              <BeforeAfterSlider pair={c.beforeAfter} sizes="(min-width: 1024px) 55vw, 100vw" caption={false} />
            </div>
            <div className="lg:col-span-4 lg:col-start-9 lg:row-start-2">
              <BeforeAfterNote pair={c.beforeAfter} />
              <div className="mt-8">
                <CallButton label="Quiero mis paredes así" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Qué incluye */}
      <section className="section">
        <div className="wrap grid items-center gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-6">
            <h2 className="head">{c.includesTitle}</h2>
            <ul className="reveal mt-8 space-y-4">
              {c.includes.map((item) => (
                <li key={item} className="flex gap-3 text-lead font-semibold">
                  <CurveMark className="mt-1 size-6 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#presupuesto" className="mt-10 inline-block text-lead font-bold text-brand underline">
              Pedir visita y presupuesto gratis
            </a>
          </div>
          {c.image ? (
            <Photo {...c.image} sizes="(min-width: 1024px) 45vw, 100vw" drift className="lg:col-span-6" />
          ) : (
            <div className="grid aspect-[4/3] place-items-center bg-paper-2 p-6 text-center lg:col-span-6">
              <Pendiente>{c.photo}</Pendiente>
            </div>
          )}
        </div>
      </section>

      {/* FAQ breve */}
      <section className="section bg-white">
        <div className="wrap grid gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          <h2 className="head lg:col-span-4">Preguntas rápidas</h2>
          <div className="lg:col-span-8">
            <FaqList faqs={c.faqs} onWhite />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section">
        <div className="wrap grid items-center gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          <div className="reveal lg:col-span-6">
            <h2 className="head">{c.finalTitle}</h2>
            <p className="mt-6 max-w-[44ch] text-lead">
              Llámanos o escríbenos {site.hours.days}, de {site.hours.opens.replace(/^0/, "")} a {site.hours.closes}; el fin de semana, con cita por WhatsApp. La visita y el presupuesto son gratis.
            </p>
            <CtaButtons waMessage={c.waMessage} className="mt-8" />
          </div>
          {c.finalImage && (
            <Photo {...c.finalImage} sizes="(min-width: 1024px) 45vw, 100vw" drift className="lg:col-span-6" />
          )}
        </div>
      </section>

      <MobileCtaBar waMessage={c.waMessage} />
    </>
  );
}
