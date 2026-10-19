import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Qué cookies usa yordek.com, para qué sirven y cómo cambiar tu elección.",
  robots: { index: false, follow: true },
};

// Revisar esta tabla cuando estén configurados GTM, GA4 y Google Ads.
const cookies = [
  {
    name: "yordek_consent (almacenamiento local)",
    owner: site.name,
    purpose: "Guardar tu elección sobre las cookies.",
    type: "Técnica",
    duration: "12 meses",
  },
  { name: "_ga", owner: "Google Analytics", purpose: "Distinguir usuarios para estadísticas de uso.", type: "Análisis", duration: "2 años" },
  { name: "_ga_*", owner: "Google Analytics", purpose: "Mantener el estado de la sesión.", type: "Análisis", duration: "2 años" },
  { name: "_gcl_au", owner: "Google Ads", purpose: "Medir las conversiones de los anuncios.", type: "Publicidad", duration: "90 días" },
];

export default function CookiesPage() {
  return (
    <LegalPage title="Política de cookies" updated="19 de octubre de 2026">
      <h2>1. Qué son las cookies</h2>
      <p>
        Son pequeños archivos que la web guarda en tu navegador. Algunas son necesarias para que funcione y otras
        sirven para medir visitas y anuncios.
      </p>

      <h2>2. Qué cookies usamos</h2>
      <p>
        Las cookies de análisis y publicidad solo se instalan si las aceptas en el banner. Hasta entonces, Google
        recibe únicamente señales sin cookies (Modo de consentimiento v2).
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Titular</th>
              <th>Finalidad</th>
              <th>Tipo</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            {cookies.map((c, i) => (
              <tr key={i}>
                <td>{c.name}</td>
                <td>{c.owner}</td>
                <td>{c.purpose}</td>
                <td>{c.type}</td>
                <td>{c.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>3. Cómo cambiar o retirar tu consentimiento</h2>
      <p>
        Puedes cambiar tu elección cuando quieras desde el enlace «Configurar cookies» del pie de página. También
        puedes borrar las cookies desde la configuración de tu navegador.
      </p>

      <h2>4. Más información</h2>
      <p>
        Cómo usamos tus datos personales: <Link href="/politica-de-privacidad/">política de privacidad</Link>. Cómo usa
        Google los datos:{" "}
        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">
          policies.google.com
        </a>
        .
      </p>
    </LegalPage>
  );
}
