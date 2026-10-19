"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { buttonClass } from "@/components/Button";
import {
  CONSENT_KEY,
  CONSENT_MAX_AGE_MS,
  OPEN_CONSENT_EVENT,
  consentState,
  type ConsentChoice,
} from "@/lib/tracking";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CHANGE_EVENT = "yordek:consent-changed";
// Respaldo si localStorage no está disponible: la elección vale mientras no se recargue.
let memoryChoice = "";

// Devuelve la elección guardada (JSON) o "" si no hay o ha caducado.
function getSnapshot(): string {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return "";
    const c = JSON.parse(raw) as ConsentChoice;
    return Date.now() - c.ts < CONSENT_MAX_AGE_MS ? raw : "";
  } catch {
    return memoryChoice;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

// Banner de cookies (AEPD): "Rechazar" con el mismo peso que "Aceptar" y opción de configurar.
// La elección actualiza Consent Mode v2; GTM decide qué etiquetas pueden usar cookies.
export function CookieBanner() {
  // En el HTML estático ("server") no se pinta: así no hay saltos de hidratación.
  const saved = useSyncExternalStore(subscribe, getSnapshot, () => "server");
  const [reopened, setReopened] = useState(false);
  const [details, setDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [ads, setAds] = useState(false);

  useEffect(() => {
    const reopen = () => {
      const c = JSON.parse(getSnapshot() || "null") as ConsentChoice | null;
      setAnalytics(c?.analytics ?? false);
      setAds(c?.ads ?? false);
      setDetails(true);
      setReopened(true);
    };
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  const open = saved === "" || reopened;

  function save(choice: { analytics: boolean; ads: boolean }) {
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({ ...choice, ts: Date.now() }));
    } catch {
      memoryChoice = JSON.stringify({ ...choice, ts: Date.now() });
    }
    window.dataLayer = window.dataLayer || [];
    // gtag() lo define el script del <head>; GTM necesita el objeto `arguments`, no un array.
    window.gtag =
      window.gtag ||
      function () {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer!.push(arguments as unknown as Record<string, unknown>);
      };
    window.gtag("consent", "update", consentState(choice));
    window.dataLayer.push({ event: "consent_update", consent_analytics: choice.analytics, consent_ads: choice.ads });
    setReopened(false);
    setDetails(false);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookies-titulo"
      className="fixed inset-x-2 bottom-[5.25rem] z-[60] mx-auto max-w-xl rounded-2xl border border-line bg-white p-4 shadow-2xl sm:p-5 lg:bottom-4"
    >
      <h2 id="cookies-titulo" className="text-lg font-bold">Cookies</h2>
      <p className="mt-1 text-sm text-ink-soft">
        Usamos cookies para medir las visitas y saber qué anuncios funcionan. Solo se activan si las aceptas.{" "}
        <Link href="/politica-de-cookies/" className="font-semibold underline">Ver la política de cookies</Link>
      </p>

      {details && (
        <fieldset className="mt-4 space-y-3 text-sm">
          <legend className="sr-only">Tipos de cookies</legend>
          <label className="flex items-start gap-3">
            <input type="checkbox" checked disabled className="mt-0.5 size-5 accent-[var(--color-brand)]" />
            <span><strong>Técnicas</strong>: guardan esta elección. Siempre activas.</span>
          </label>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
              className="mt-0.5 size-5 accent-[var(--color-brand)]"
            />
            <span><strong>Análisis</strong> (Google Analytics): cuántas visitas hay y qué páginas se ven.</span>
          </label>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={ads}
              onChange={(e) => setAds(e.target.checked)}
              className="mt-0.5 size-5 accent-[var(--color-brand)]"
            />
            <span><strong>Publicidad</strong> (Google Ads): saber qué anuncios traen clientes.</span>
          </label>
        </fieldset>
      )}

      <div className="mt-4 grid grid-cols-2 gap-2">
        <button type="button" onClick={() => save({ analytics: false, ads: false })} className={buttonClass("outline", "md")}>
          Rechazar
        </button>
        <button type="button" onClick={() => save({ analytics: true, ads: true })} className={buttonClass("dark", "md")}>
          Aceptar
        </button>
        {details ? (
          <button
            type="button"
            onClick={() => save({ analytics, ads })}
            className="col-span-2 min-h-11 font-semibold underline"
          >
            Guardar mi selección
          </button>
        ) : (
          <button type="button" onClick={() => setDetails(true)} className="col-span-2 min-h-11 font-semibold underline">
            Configurar
          </button>
        )}
      </div>
    </div>
  );
}

/** Enlace para volver a abrir el banner (pie de página). */
export function CookieSettingsButton({ className = "" }: { className?: string }) {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))} className={className}>
      Configurar cookies
    </button>
  );
}
