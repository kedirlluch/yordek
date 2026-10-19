import Link from "next/link";
import { BeforeAfterGallery, type BeforeAfterPair } from "@/components/BeforeAfter";
import { CallButton, CtaButtons, WhatsAppButton } from "@/components/CtaButtons";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { Pendiente } from "@/components/Pendiente";
import { TrustSignals } from "@/components/TrustSignals";
import { ArrowIcon, CheckIcon, PinIcon } from "@/components/icons";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { serviceBySlug, site, type JobType, type ServiceSlug } from "@/lib/site";

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
  heroPhoto: string;
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

function SectionCta({ children }: { children: React.ReactNode }) {
  return <div className="mt-10 flex flex-wrap items-center justify-center gap-3">{children}</div>;
}

export function ServicePage({ content: c }: { content: ServiceContent }) {
  const service = serviceBySlug(c.slug);
  const path = `/${c.slug}/`;
  const schemaFaqs = c.faqs.flatMap((f) => {
    const text = typeof f.a === "string" ? f.a : f.text;
    return text ? [{ q: f.q, text }] : [];
  });

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

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div aria-hidden="true" className="gotele-fade absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-5 lg:pb-16">
          <nav aria-label="Migas de pan" className="text-sm text-ink-soft">
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
          <div className="mt-6 grid gap-8 lg:mt-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <h1 className="text-[2rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
                {c.h1}
                {c.h1Highlight && (
                  <>
                    {" "}
                    <span className="bg-[linear-gradient(transparent_62%,var(--color-tape)_62%)]">{c.h1Highlight}</span>
                  </>
                )}
              </h1>
              <p className="mt-4 text-lg text-ink-soft sm:text-xl">{c.intro}</p>
              <TrustSignals className="mt-5" />
              <CtaButtons waMessage={c.waMessage} className="mt-7" />
              <p className="mt-4 flex items-center gap-1.5 text-ink-soft">
                <PinIcon className="size-5 text-brand" />
                Trabajamos en {site.area}
              </p>
            </div>
            {/* Foto real del hero (LCP): sustituir por <Image priority> cuando llegue */}
            <div className="grid aspect-[4/3] place-items-center rounded-2xl border-2 border-dashed border-line bg-paper p-6 text-center">
              <Pendiente>{c.heroPhoto}</Pendiente>
            </div>
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
        <p className="tape">Qué incluye</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight">{c.includesTitle}</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.includes.map((item) => (
            <li key={item.title} className="rounded-2xl border border-line bg-white p-6">
              <h3 className="flex items-start gap-2 text-xl font-bold">
                <CheckIcon className="mt-1 size-5 shrink-0 text-brand" />
                {item.title}
              </h3>
              <p className="mt-2 text-ink-soft">{item.text}</p>
            </li>
          ))}
        </ul>
        <SectionCta>
          <CallButton label={c.includesCta} />
        </SectionCta>
      </section>

      {/* Proceso */}
      <section className="bg-ink py-14 text-white lg:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="tape">Proceso</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">{c.processTitle}</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.steps.map((step, i) => (
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
            <WhatsAppButton
              message={`${c.waMessage}. Os mando fotos de las paredes.`}
              label="Mándanos fotos por WhatsApp"
            />
          </SectionCta>
        </div>
      </section>

      {/* Antes y después (solo con fotos reales) */}
      {c.beforeAfter && c.beforeAfter.length > 0 && (
        <section className="bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <p className="tape">Trabajos reales</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Antes y después</h2>
            <BeforeAfterGallery pairs={c.beforeAfter} />
            <SectionCta>
              <CallButton label="Quiero mis paredes así" />
            </SectionCta>
          </div>
        </section>
      )}

      {/* Precio, sin cifras */}
      <section id="precio" className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
        <div className="rounded-3xl bg-brand-soft p-6 sm:p-10">
          <h2 className="text-3xl font-extrabold tracking-tight">{c.priceTitle}</h2>
          <p className="mt-3 text-lg text-ink-soft">{c.priceIntro}</p>
          <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {c.priceFactors.map((f) => (
              <div key={f.title}>
                <dt className="flex gap-2 text-lg font-bold">
                  <span aria-hidden="true" className="text-brand">●</span>
                  {f.title}
                </dt>
                <dd className="mt-1 pl-5 text-ink-soft">{f.text}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-lg font-semibold">
            En la visita lo vemos todo y te damos un presupuesto cerrado. Ese es el precio que pagas.
          </p>
          <div className="mt-4">
            <CallButton label="Pedir visita gratis" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <p className="tape">Dudas</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">{c.faqTitle}</h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {c.faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="text-2xl text-brand transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
          <SectionCta>
            <p className="w-full text-center text-lg font-semibold">¿Tienes otra duda? Pregúntanos.</p>
            <CtaButtons waMessage={c.waMessage} />
          </SectionCta>
        </div>
      </section>

      {/* Otros servicios */}
      <section className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
        <h2 className="text-3xl font-extrabold tracking-tight">Otros trabajos que te pueden hacer falta</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {Object.entries(c.related).map(([slug, reason]) => (
            <li key={slug}>
              <Link
                href={`/${slug}/`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="text-xl font-bold">{serviceBySlug(slug as ServiceSlug).name}</span>
                <span className="mt-1 text-ink-soft">{reason}</span>
                <span className="mt-auto flex items-center gap-1 pt-3 font-bold text-brand">
                  Ver servicio <ArrowIcon className="size-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <SectionCta>
          <a href="#presupuesto" className="font-bold text-brand underline">
            Pedir visita y presupuesto gratis
          </a>
        </SectionCta>
      </section>

      {/* Formulario */}
      <section id="presupuesto" className="bg-white py-14 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{c.formTitle}</h2>
            <p className="mt-3 text-lg text-ink-soft">{c.formText}</p>
            <CtaButtons waMessage={c.waMessage} className="mt-6 hidden lg:flex" />
            <p className="mt-6 text-ink-soft">
              Horario: {site.hours.opens} – {site.hours.closes}
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm sm:p-8">
            <LeadForm source={c.slug} defaultJobType={c.jobType} />
          </div>
        </div>
      </section>

      <MobileCtaBar waMessage={c.waMessage} />
    </>
  );
}
