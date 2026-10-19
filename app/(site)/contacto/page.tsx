import type { Metadata } from "next";
import { CtaButtons } from "@/components/CtaButtons";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { Pendiente } from "@/components/Pendiente";
import { PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/icons";
import { breadcrumbSchema } from "@/lib/schema";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Contacto · Presupuesto gratis en Valencia | YordeK" },
  description:
    "Llama al 699 64 52 65, escríbenos por WhatsApp o déjanos tus datos. Te visitamos y te damos presupuesto cerrado gratis en Valencia.",
  alternates: { canonical: "/contacto/" },
};

const WA_MESSAGE = "Hola, quiero pedir una visita y presupuesto gratis";

const nextSteps = [
  "Te llamamos para acordar el día de la visita.",
  "Vamos a verlo, medimos y resolvemos tus dudas.",
  "Te damos el presupuesto cerrado en menos de una semana.",
];

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-line py-4 last:border-b-0">
      <dt className="text-sm font-semibold uppercase tracking-wide text-ink-soft">{label}</dt>
      <dd className="mt-1 text-lg">{children}</dd>
    </div>
  );
}

export default function ContactoPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: `${site.url}/contacto/`,
          about: { "@id": `${site.url}/#negocio` },
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Contacto", path: "/contacto/" },
        ])}
      />

      <section className="relative overflow-hidden bg-white">
        <div aria-hidden="true" className="gotele-fade absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-8 lg:py-14">
          <p className="tape mb-4">Contacto</p>
          <h1 className="max-w-3xl text-[2rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            Pide tu visita y presupuesto gratis en Valencia
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft sm:text-xl">
            Llámanos, escríbenos por WhatsApp o déjanos tus datos. Te visitamos y te damos presupuesto en menos de
            una semana.
          </p>
          <CtaButtons waMessage={WA_MESSAGE} className="mt-7" />
        </div>
      </section>

      <section id="presupuesto" className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* En móvil el formulario va primero: quien llega aquí ya quiere contactar */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-extrabold tracking-tight">Datos de contacto</h2>
            <dl className="mt-4 rounded-2xl border border-line bg-white px-6">
              <InfoRow label="Teléfono">
                <a href={site.phone.href} data-track="click_llamar" className="flex items-center gap-2 font-bold hover:text-brand">
                  <PhoneIcon className="size-5 text-brand" />
                  {site.phone.display}
                </a>
                <a href={site.phoneSecondary.href} data-track="click_llamar" className="mt-1 block text-base text-ink-soft hover:text-brand">
                  También: {site.phoneSecondary.display}
                </a>
              </InfoRow>
              <InfoRow label="WhatsApp">
                <a
                  href={whatsappHref(WA_MESSAGE)}
                  target="_blank"
                  rel="noopener"
                  data-track="click_whatsapp"
                  className="flex items-center gap-2 font-bold text-wa hover:underline"
                >
                  <WhatsAppIcon className="size-5" />
                  {site.phone.display}
                </a>
                <span className="mt-1 block text-base text-ink-soft">Puedes mandarnos fotos de las paredes.</span>
              </InfoRow>
              <InfoRow label="Email">
                <a href={`mailto:${site.email}`} className="break-all hover:text-brand">{site.email}</a>
              </InfoRow>
              <InfoRow label="Horario">
                {site.hours.opens} – {site.hours.closes}
                {site.hours.days.startsWith("[") ? (
                  <>
                    {" "}
                    <Pendiente>días de la semana</Pendiente>
                  </>
                ) : (
                  `, ${site.hours.days}`
                )}
              </InfoRow>
              <InfoRow label="Zona">
                <span className="flex items-center gap-2">
                  <PinIcon className="size-5 text-brand" />
                  {site.area}
                </span>
                {site.municipalities.length === 0 && (
                  <span className="mt-1 block">
                    <Pendiente>lista de municipios</Pendiente>
                  </span>
                )}
              </InfoRow>
            </dl>

            <h2 className="mt-10 text-2xl font-extrabold tracking-tight">Qué pasa después</h2>
            <ol className="mt-4 space-y-3">
              {nextSteps.map((step, i) => (
                <li key={step} className="flex gap-3 text-lg">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand font-bold text-white">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-extrabold tracking-tight">Déjanos tus datos y te llamamos</h2>
              <p className="mt-1 mb-6 text-ink-soft">Un minuto. Solo nombre, teléfono, trabajo y zona.</p>
              <LeadForm source="contacto" />
            </div>
          </div>
        </div>
      </section>

      <MobileCtaBar waMessage={WA_MESSAGE} />
    </>
  );
}
