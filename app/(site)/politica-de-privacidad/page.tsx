import type { Metadata } from "next";
import Link from "next/link";
import { LegalRow, LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Qué datos tratamos cuando pides presupuesto, para qué los usamos y cómo ejercer tus derechos.",
  robots: { index: false, follow: true },
};

export default function PrivacidadPage() {
  const { legal } = site;
  return (
    <LegalPage title="Política de privacidad" updated="19 de octubre de 2026">
      <p>
        Aquí te explicamos qué datos recogemos, para qué los usamos y qué derechos tienes, según el Reglamento (UE)
        2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <LegalRow name="Titular" value={legal.holder} label="nombre y apellidos o razón social" />
        <LegalRow name="NIF/CIF" value={legal.taxId} label="NIF o CIF" />
        <LegalRow name="Domicilio" value={legal.address} label="domicilio fiscal" />
        <li>Email de contacto: <a href={`mailto:${site.email}`}>{site.email}</a></li>
      </ul>

      <h2>2. Qué datos tratamos</h2>
      <ul>
        <li>
          <strong>Formulario de presupuesto:</strong> nombre, teléfono, tipo de trabajo, zona o código postal y el
          mensaje que escribas.
        </li>
        <li>
          <strong>Llamadas, WhatsApp y email:</strong> tu número o dirección y lo que nos cuentes, incluidas las
          fotos que nos mandes.
        </li>
        <li>
          <strong>Navegación:</strong> datos de uso de la web a través de cookies, solo si las aceptas. Ver la{" "}
          <Link href="/politica-de-cookies/">política de cookies</Link>.
        </li>
      </ul>

      <h2>3. Para qué los usamos y con qué base legal</h2>
      <ul>
        <li>
          Contactarte, concertar la visita y preparar el presupuesto que nos pides. Base legal: aplicación de
          medidas precontractuales a petición tuya (art. 6.1.b RGPD).
        </li>
        <li>
          Si contratas el trabajo, gestionarlo y facturarlo. Base legal: ejecución del contrato y cumplimiento de
          obligaciones legales (art. 6.1.b y 6.1.c RGPD).
        </li>
        <li>
          Medir el uso de la web y la eficacia de nuestros anuncios. Base legal: tu consentimiento (art. 6.1.a
          RGPD), que puedes retirar cuando quieras.
        </li>
      </ul>
      <p>No usamos tus datos para enviarte publicidad ni tomamos decisiones automatizadas sobre ti.</p>

      <h2>4. Cuánto tiempo los guardamos</h2>
      <p>
        Si no llegas a contratar, guardamos tus datos el tiempo necesario para atender tu solicitud y un máximo de 12
        meses. Si contratas, los conservamos durante los plazos que exige la
        ley, como los fiscales y mercantiles.
      </p>

      <h2>5. Con quién los compartimos</h2>
      <p>No vendemos ni cedemos tus datos. Los tratan, por cuenta nuestra, estos proveedores:</p>
      <ul>
        <li>
          <strong>Web3Forms</strong>, que recibe el formulario y nos lo envía por email. Sus servidores están en
          Estados Unidos.
        </li>
        <li>
          <strong>Google</strong> (Google Ads), para medir qué anuncios traen contactos. Solo guarda cookies si
          aceptas las de publicidad. Google LLC está adherida al Marco de Privacidad de Datos UE-EE. UU.
        </li>
        <li>
          <strong>WhatsApp</strong> (Meta), si decides escribirnos por ahí. Se aplica también su propia política de
          privacidad.
        </li>
        <li>
          <strong>Proveedor de email</strong> (Apple iCloud), donde recibimos las solicitudes.
        </li>
        <li>
          <strong>Hosting de la web</strong>: Vercel Inc. (EE. UU.), que recibe la IP y los datos técnicos de la visita para servir la página.
        </li>
      </ul>

      <h2>6. Tus derechos</h2>
      <p>
        Puedes pedir acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de tus
        datos escribiendo a <a href={`mailto:${site.email}`}>{site.email}</a>. Indica qué derecho quieres ejercer.
      </p>
      <p>
        Si crees que no hemos tratado bien tus datos, puedes reclamar ante la Agencia Española de Protección de
        Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).
      </p>
    </LegalPage>
  );
}
