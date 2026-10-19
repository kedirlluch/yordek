"use client";

import { useEffect } from "react";

export const LEAD_PENDING_KEY = "yordek_lead_pending";

// envio_formulario en /gracias/. Solo se envía si LeadForm acaba de mandar el formulario:
// una visita directa, una recarga o un bot no cuentan como conversión.
export function ConversionEvent({ event }: { event: string }) {
  useEffect(() => {
    let lead: { form_source?: string; job_type?: string } | null = null;
    try {
      lead = JSON.parse(sessionStorage.getItem(LEAD_PENDING_KEY) ?? "null");
      sessionStorage.removeItem(LEAD_PENDING_KEY);
    } catch {
      return;
    }
    if (!lead) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event,
      page_path: window.location.pathname,
      form_source: lead.form_source,
      job_type: lead.job_type,
    });
  }, [event]);

  return null;
}
