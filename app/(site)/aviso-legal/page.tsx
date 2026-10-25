import type { Metadata } from "next";
import Link from "next/link";
import { LegalRow, LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Datos identificativos del titular de yordek.com y condiciones de uso de la web.",
  robots: { index: false, follow: true },
};

export default function AvisoLegalPage() {
  const { legal } = site;
  return (
    <LegalPage title="Aviso legal" updated="19 de octubre de 2026">
      <h2>1. Datos identificativos</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de
        Comercio Electrónico (LSSI-CE), estos son los datos del titular de {site.url.replace("https://", "")}:
      </p>
      <ul>
        <LegalRow name="Titular" value={legal.holder} label="nombre y apellidos o razón social" />
        <LegalRow name="NIF/CIF" value={legal.taxId} label="NIF o CIF" />
        <LegalRow name="Domicilio" value={legal.address} label="domicilio fiscal" />
        {legal.registry !== null && <li>Datos registrales: {legal.registry}</li>}
        <li>Nombre comercial: {site.name}</li>
        <li>Teléfono: <a href={site.phone.href} data-track="click_llamar">{site.phone.display}</a></li>
        <li>Email: <a href={`mailto:${site.email}`}>{site.email}</a></li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        Este sitio web informa sobre los servicios de alisado y pintura que {site.name} ofrece en {site.area}, y
        permite pedir una visita y presupuesto.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        Al usar esta web te comprometes a hacerlo de forma lícita y a no enviar datos falsos ni de terceros a través
        del formulario. La información de la web es orientativa: las condiciones de cada trabajo son las que figuran
        en el presupuesto que se entrega tras la visita.
      </p>

      <h2>4. Propiedad intelectual</h2>
      <p>
        Los textos, fotografías, logotipo y diseño de esta web pertenecen a {site.name} o se usan con permiso de sus
        autores. No se pueden copiar ni reutilizar sin autorización. Las tipografías se usan bajo licencia SIL Open
        Font License.
      </p>

      <h2>5. Enlaces</h2>
      <p>
        La web contiene enlaces a servicios de terceros, como WhatsApp. {site.name} no es responsable del contenido
        ni de las políticas de esos servicios.
      </p>

      <h2>6. Protección de datos y cookies</h2>
      <p>
        El tratamiento de tus datos se explica en la <Link href="/politica-de-privacidad/">política de privacidad</Link>{" "}
        y el uso de cookies en la <Link href="/politica-de-cookies/">política de cookies</Link>.
      </p>

      <h2>7. Legislación aplicable</h2>
      <p>
        Este aviso se rige por la legislación española. Para cualquier conflicto serán competentes los juzgados y
        tribunales que correspondan según la normativa de consumidores y usuarios.
      </p>
    </LegalPage>
  );
}
