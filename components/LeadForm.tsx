"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { buttonClass } from "@/components/Button";
import { LEAD_PENDING_KEY } from "@/components/ConversionEvent";
import { form, jobTypes, site, whatsappHref } from "@/lib/site";

type Props = {
  /** Valor preseleccionado del desplegable (p. ej. en /quitar-gotele/). */
  defaultJobType?: (typeof jobTypes)[number];
  /** Oculta el desplegable y envía este valor (landings de Ads). */
  fixedJobType?: (typeof jobTypes)[number];
  /** Limita las opciones del desplegable (p. ej. landing de pintura). */
  jobOptions?: readonly (typeof jobTypes)[number][];
  source: string;
};

const inputClass =
  "mt-1 block w-full rounded-lg border border-line bg-white px-3.5 py-3 text-base text-ink placeholder:text-ink-soft/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25";

export function LeadForm({ defaultJobType, fixedJobType, jobOptions = jobTypes, source }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(form.endpoint, { method: "POST", body: data });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      // /gracias/ lo lee para enviar envio_formulario una sola vez (sin datos personales).
      try {
        sessionStorage.setItem(
          LEAD_PENDING_KEY,
          JSON.stringify({ form_source: source, job_type: data.get("tipo_de_trabajo") }),
        );
      } catch {}
      router.push("/gracias/");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input type="hidden" name="access_key" value={form.accessKey} />
      <input type="hidden" name="subject" value={`Nueva solicitud web ${site.name} (${source})`} />
      <input type="hidden" name="from_name" value={`Web ${site.name}`} />
      <input type="hidden" name="pagina" value={source} />
      {/* Honeypot anti-spam de Web3Forms */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <label htmlFor={`${source}-nombre`} className="font-semibold">Nombre</label>
        <input id={`${source}-nombre`} name="nombre" required autoComplete="given-name" className={inputClass} />
      </div>

      <div>
        <label htmlFor={`${source}-telefono`} className="font-semibold">Teléfono</label>
        <input
          id={`${source}-telefono`}
          name="telefono"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          pattern="[0-9 +]{9,15}"
          placeholder="6XX XX XX XX"
          className={inputClass}
        />
      </div>

      {fixedJobType ? (
        <input type="hidden" name="tipo_de_trabajo" value={fixedJobType} />
      ) : (
        <div>
          <label htmlFor={`${source}-tipo`} className="font-semibold">Tipo de trabajo</label>
          <select
            id={`${source}-tipo`}
            name="tipo_de_trabajo"
            required
            defaultValue={defaultJobType ?? ""}
            className={inputClass}
          >
            <option value="" disabled>Elige una opción</option>
            {jobOptions.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label htmlFor={`${source}-zona`} className="font-semibold">Zona o código postal</label>
        <input
          id={`${source}-zona`}
          name="zona"
          required
          autoComplete="postal-code"
          placeholder="Ej.: 46015 o Benimaclet"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor={`${source}-mensaje`} className="font-semibold">
          Mensaje <span className="font-normal text-ink-soft">(opcional)</span>
        </label>
        <textarea
          id={`${source}-mensaje`}
          name="mensaje"
          rows={3}
          placeholder="Ej.: piso de 3 habitaciones con gotelé en paredes y techos"
          className={inputClass}
        />
      </div>

      {form.acceptsPhoto && (
        <div>
          <label htmlFor={`${source}-foto`} className="font-semibold">
            Foto <span className="font-normal text-ink-soft">(opcional)</span>
          </label>
          <input id={`${source}-foto`} name="foto" type="file" accept="image/*" className="mt-1 block w-full text-sm" />
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className={buttonClass("primary", "lg", "w-full")}
      >
        {status === "sending" ? "Enviando…" : "Pedir visita gratis"}
      </button>

      <p className="text-center font-semibold">Te contactamos para concertar la visita. Sin compromiso.</p>

      {!form.acceptsPhoto && (
        <p className="text-center text-sm text-ink-soft">
          ¿Tienes fotos de las paredes?{" "}
          <a
            href={whatsappHref("Hola, os mando fotos para pedir presupuesto")}
            target="_blank"
            rel="noopener"
            data-track="click_whatsapp"
            className="font-semibold text-wa-dark underline"
          >
            Envíalas por WhatsApp
          </a>
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="rounded-lg bg-red-50 p-3 text-center text-red-800">
          No se ha podido enviar. Llámanos al{" "}
          <a href={site.phone.href} className="font-bold underline">{site.phone.display}</a>{" "}
          o escríbenos por WhatsApp.
        </p>
      )}

      <p className="text-xs leading-relaxed text-ink-soft">
        Responsable: {site.name}. Usamos tus datos solo para responder a tu solicitud de presupuesto. Más
        información en la{" "}
        <Link href="/politica-de-privacidad/" className="underline">política de privacidad</Link>.
      </p>
    </form>
  );
}
