import { CtaButtons } from "@/components/CtaButtons";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { Photo, type PhotoSrc } from "@/components/Photo";
import { Pendiente } from "@/components/Pendiente";
import { TrustSignals } from "@/components/TrustSignals";
import { CheckIcon, PinIcon } from "@/components/icons";
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
};

export function AdsLanding({ content: c }: { content: AdsLandingContent }) {
  return (
    <>
      <JsonLd data={faqSchema(c.faqs.map((f) => ({ q: f.q, text: f.a })))} />

      {/* Hero + formulario */}
      <section className="relative overflow-hidden bg-white">
        <div aria-hidden="true" className="gotele-fade absolute inset-0" />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 pb-12 pt-8 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:py-14">
          <div>
            <h1 className="text-[2rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              {c.h1}{" "}
              <span className="bg-[linear-gradient(transparent_62%,var(--color-tape)_62%)]">{c.h1Highlight}</span>
            </h1>
            <p className="mt-4 text-lg text-ink-soft sm:text-xl">{c.intro}</p>
            <TrustSignals className="mt-5" />
            <CtaButtons waMessage={c.waMessage} className="mt-7" />
            <p className="mt-4 flex items-center gap-1.5 text-ink-soft">
              <PinIcon className="size-5 text-brand" />
              Trabajamos en {site.area}
            </p>
          </div>
          <div id="presupuesto" className="scroll-mt-20 rounded-2xl border border-line bg-white p-6 shadow-md sm:p-8">
            <h2 className="text-2xl font-extrabold tracking-tight">{c.formTitle}</h2>
            <p className="mb-5 mt-1 text-ink-soft">Te llamamos para concertar la visita.</p>
            <LeadForm source={c.source} fixedJobType={c.fixedJobType} jobOptions={c.jobOptions} />
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="bg-ink py-12 text-white lg:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-extrabold tracking-tight">Así funciona</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <li key={step.title}>
                <span className="grid size-10 place-items-center rounded-full bg-brand text-lg font-extrabold">
                  {i + 1}
                </span>
                <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                <p className="mt-1 text-white/75">{step.text}</p>
              </li>
            ))}
          </ol>
          <CtaButtons waMessage={c.waMessage} className="mt-10 justify-center" />
        </div>
      </section>

      {/* Qué incluye */}
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-2 lg:items-center lg:py-16">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">{c.includesTitle}</h2>
          <ul className="mt-6 space-y-3">
            {c.includes.map((item) => (
              <li key={item} className="flex gap-2 text-lg">
                <CheckIcon className="mt-1 size-5 shrink-0 text-brand" />
                {item}
              </li>
            ))}
          </ul>
          <a href="#presupuesto" className="mt-8 inline-block font-bold text-brand underline">
            Pedir visita y presupuesto gratis
          </a>
        </div>
        {c.image ? (
          <Photo {...c.image} sizes="(min-width: 1024px) 545px, 100vw" />
        ) : (
          <div className="grid aspect-[4/3] place-items-center rounded-2xl border-2 border-dashed border-line bg-paper p-6 text-center">
            <Pendiente>{c.photo}</Pendiente>
          </div>
        )}
      </section>

      {/* FAQ breve */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-extrabold tracking-tight">Preguntas rápidas</h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {c.faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="text-2xl text-brand transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-3xl px-4 py-14 text-center lg:py-20">
        <h2 className="text-3xl font-extrabold tracking-tight">{c.finalTitle}</h2>
        <p className="mt-3 text-lg text-ink-soft">
          Llámanos o escríbenos de {site.hours.opens} a {site.hours.closes}. La visita y el presupuesto son gratis.
        </p>
        <CtaButtons waMessage={c.waMessage} className="mt-7 justify-center" />
      </section>

      <MobileCtaBar waMessage={c.waMessage} />
    </>
  );
}
