import Link from "next/link";
import { BeforeAfterNote, BeforeAfterPairStatic, BeforeAfterSlider, type BeforeAfterPair } from "@/components/BeforeAfter";
import { CallButton, CtaButtons, WhatsAppButton } from "@/components/CtaButtons";
import { CurveBand } from "@/components/CurveBand";
import { FaqList } from "@/components/FaqList";
import { HeroTitle } from "@/components/HeroTitle";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { Photo, type PhotoSrc } from "@/components/Photo";
import { Pendiente } from "@/components/Pendiente";
import { ProcessStrip } from "@/components/ProcessStrip";
import { ServiceIndex } from "@/components/ServiceIndex";
import { TrustSignals } from "@/components/TrustSignals";
import { CurveMark, PinIcon } from "@/components/icons";
import { photos, servicePhotos } from "@/lib/photos";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { hoursText, serviceBySlug, site, type JobType, type ServiceSlug } from "@/lib/site";

// Plantilla común de las páginas de servicio. El texto vive en cada page.tsx
// para que cada página tenga contenido propio.

export type Faq = {
  q: string;
  a: React.ReactNode;
  /** Versión en texto plano para el schema. Si falta y `a` no es texto, la pregunta no entra en FAQPage. */
  text?: string;
};

export type ServiceContent = {
  slug: ServiceSlug;
  jobType: JobType;
  waMessage: string;
  /** Descripción corta para el schema Service. */
  description: string;
  h1: string;
  h1Highlight?: string;
  intro: string;
  /** Qué debe salir en la foto del hero mientras no la hay. */
  heroPhoto: string;
  heroImage?: PhotoSrc;
  /** Foto de la sección "Qué incluye". Por defecto, una pared lisa. */
  includesImage?: PhotoSrc;
  includes: { title: string; text: React.ReactNode }[];
  includesTitle: string;
  includesCta: string;
  processTitle: string;
  steps: { title: string; text: React.ReactNode }[];
  priceTitle: string;
  priceIntro: string;
  priceFactors: { title: string; text: string }[];
  faqTitle: string;
  faqs: Faq[];
  /** Por qué te puede hacer falta cada uno de los otros servicios, visto desde esta página. */
  related: Partial<Record<ServiceSlug, string>>;
  formTitle: string;
  formText: string;
  beforeAfter?: BeforeAfterPair[];
};

export function ServicePage({ content: c }: { content: ServiceContent }) {
  const service = serviceBySlug(c.slug);
  const path = `/${c.slug}/`;
  const schemaFaqs = c.faqs.flatMap((f) => {
    const text = typeof f.a === "string" ? f.a : f.text;
    return text ? [{ q: f.q, text }] : [];
  });
  const [firstPair, ...otherPairs] = c.beforeAfter ?? [];

  return (
    <>
      <JsonLd data={serviceSchema({ name: service.name, description: c.description, path })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Servicios", path: "/servicios/" },
          { name: service.name, path },
        ])}
      />
      {schemaFaqs.length > 0 && <JsonLd data={faqSchema(schemaFaqs)} />}

      {/* Hero: termina en la curva del logo */}
      <section className="bg-paper">
        <div className="wrap pb-12 pt-5 lg:pb-20">
          <nav aria-label="Migas de pan" className="text-small text-ink-soft">
            <ol className="flex flex-wrap gap-1.5">
              <li>
                <Link href="/" className="hover:text-brand">Inicio</Link> <span aria-hidden="true">›</span>
              </li>
              <li>
                <Link href="/servicios/" className="hover:text-brand">Servicios</Link> <span aria-hidden="true">›</span>
              </li>
              <li aria-current="page" className="font-semibold text-ink">{service.name}</li>
            </ol>
          </nav>
          <div className="mt-6 grid gap-y-7 lg:mt-10 lg:grid-cols-12 lg:gap-x-10">
            <div className="lg:col-span-7">
              <HeroTitle main={c.h1} sub={c.h1Highlight} />
            </div>
            {c.heroImage ? (
              <Photo
                {...c.heroImage}
                sizes="(min-width: 1024px) 40vw, 100vw"
                preload
                className="lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:self-center"
              />
            ) : (
              <div className="grid aspect-[4/3] place-items-center bg-paper-2 p-6 text-center lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:self-center">
                <Pendiente>{c.heroPhoto}</Pendiente>
              </div>
            )}
            <div className="lg:col-span-7 lg:row-start-2">
              <p className="max-w-[52ch]">{c.intro}</p>
              <TrustSignals className="mt-6" />
              <CtaButtons waMessage={c.waMessage} className="mt-8" />
              <p className="mt-5 flex items-center gap-1.5 text-ink-soft">
                <PinIcon className="size-5 text-brand" />
                Trabajamos en {site.area}
              </p>
            </div>
          </div>
        </div>
        <CurveBand />
      </section>

      {/* Qué incluye: campo marino */}
      <section className="bg-ink pb-18 pt-6 text-white lg:pb-32 lg:pt-10">
        <div className="wrap grid gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h2 className="head">{c.includesTitle}</h2>
              <Photo
                {...(c.includesImage ?? photos.paredLisa)}
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="mt-10 hidden lg:block"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="reveal space-y-9">
              {c.includes.map((item) => (
                <li key={item.title}>
                  <h3 className="flex items-center gap-3 text-lead font-extrabold">
                    <CurveMark className="size-6 shrink-0" />
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[52ch] pl-9 text-white/90">{item.text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-12 pl-9">
              <CallButton label={c.includesCta} />
            </div>
          </div>
        </div>
      </section>

      {/* Proceso: del marino a la pared lisa */}
      <section className="section">
        <div className="wrap">
          <h2 className="head max-w-[20ch]">{c.processTitle}</h2>
          <div className="mt-10 lg:mt-14">
            <ProcessStrip steps={c.steps} />
          </div>
          <div className="mt-10">
            <WhatsAppButton
              message={`${c.waMessage}. Os mando fotos de las paredes.`}
              label="Mándanos fotos por WhatsApp"
            />
          </div>
        </div>
      </section>

      {/* Antes y después: comparador que se arrastra (solo con fotos reales) */}
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

      {/* Precio, sin cifras: campo marino */}
      <section id="precio" className="section bg-ink text-white">
        <div className="wrap grid gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-28">
              <h2 className="head">{c.priceTitle}</h2>
              <p className="mt-6 max-w-[40ch] text-lead text-white/90">{c.priceIntro}</p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <dl className="reveal grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {c.priceFactors.map((f) => (
                <div key={f.title}>
                  <dt className="flex items-center gap-3 text-lead font-extrabold">
                    <CurveMark className="size-6 shrink-0" />
                    {f.title}
                  </dt>
                  <dd className="mt-2 pl-9 text-white/90">{f.text}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-12 text-lead font-bold">
              En la visita lo vemos todo y te damos un presupuesto cerrado. Ese es el precio que pagas.
            </p>
            <div className="mt-5">
              <CallButton label="Pedir visita gratis" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap grid gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="head">{c.faqTitle}</h2>
              <div className="mt-10 hidden lg:block">
                <p className="text-lead font-bold">¿Tienes otra duda? Pregúntanos.</p>
                <CtaButtons waMessage={c.waMessage} className="mt-4" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={c.faqs} />
          </div>
          <div className="lg:hidden">
            <p className="text-lead font-bold">¿Tienes otra duda? Pregúntanos.</p>
            <CtaButtons waMessage={c.waMessage} className="mt-4" />
          </div>
        </div>
      </section>

      {/* Otros servicios */}
      <section className="section bg-white">
        <div className="wrap">
          <ServiceIndex
            heading={<h2 className="head">Otros trabajos que te pueden hacer falta</h2>}
            items={Object.entries(c.related).map(([slug, reason]) => ({
              href: `/${slug}/`,
              name: serviceBySlug(slug as ServiceSlug).name,
              text: reason,
              image: servicePhotos[slug as ServiceSlug],
            }))}
            footer={
              <a href="#presupuesto" className="inline-flex min-h-11 items-center text-lead font-bold text-brand underline">
                Pedir visita y presupuesto gratis
              </a>
            }
          />
        </div>
      </section>

      {/* Formulario */}
      <section id="presupuesto" className="section">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="head">{c.formTitle}</h2>
            <p className="mt-6 max-w-[40ch] text-lead">{c.formText}</p>
            <div className="mt-8 hidden lg:block">
              <CtaButtons waMessage={c.waMessage} />
            </div>
            <p className="mt-8 text-ink-soft">
              {hoursText}.
              <br />
              {site.hours.flexible}.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-10 lg:col-span-6">
            <LeadForm source={c.slug} defaultJobType={c.jobType} />
          </div>
        </div>
      </section>

      <MobileCtaBar waMessage={c.waMessage} />
    </>
  );
}
