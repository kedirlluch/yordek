// Medición: Google Tag Manager + Consent Mode v2. Pasos en GTM, GA4 y Ads: ver TRACKING.md.

export const tracking = {
  gtmId: "[GTM-ID]", // p. ej. "GTM-ABC1234"
} as const;

/** GTM solo se carga con un ID real (no con el marcador). */
export const gtmEnabled = /^GTM-[A-Z0-9]+$/.test(tracking.gtmId);

// Elección del usuario en localStorage. Se vuelve a pedir pasados 12 meses.
export const CONSENT_KEY = "yordek_consent";
export const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;
export const OPEN_CONSENT_EVENT = "yordek:open-cookie-settings";

export type ConsentChoice = { analytics: boolean; ads: boolean; ts: number };

export function consentState(c: Pick<ConsentChoice, "analytics" | "ads">) {
  const g = (on: boolean) => (on ? "granted" : "denied");
  return {
    analytics_storage: g(c.analytics),
    ad_storage: g(c.ads),
    ad_user_data: g(c.ads),
    ad_personalization: g(c.ads),
  };
}

/**
 * Script inline del <head>: estado por defecto "denied" (Consent Mode v2 avanzado),
 * recupera la elección guardada y, si hay ID, carga GTM. Tiene que ir antes que GTM.
 */
export function headScript() {
  const consentDefault = `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});
gtag('set','ads_data_redaction',true);
gtag('set','url_passthrough',true);
try{var c=JSON.parse(localStorage.getItem('${CONSENT_KEY}'));if(c&&Date.now()-c.ts<${CONSENT_MAX_AGE_MS}){var g=function(b){return b?'granted':'denied'};gtag('consent','update',{analytics_storage:g(c.analytics),ad_storage:g(c.ads),ad_user_data:g(c.ads),ad_personalization:g(c.ads)});}}catch(e){}`;
  const gtm = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${tracking.gtmId}');`;
  return consentDefault + (gtmEnabled ? gtm : "");
}
