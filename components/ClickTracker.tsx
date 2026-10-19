"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

// Un único listener para todos los CTA con data-track (click_llamar, click_whatsapp).
// Así los botones siguen siendo Server Components.
export function ClickTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-track]");
      if (!el) return;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: el.dataset.track,
        page_path: window.location.pathname,
        // Teléfono o WhatsApp del negocio, nunca datos del usuario.
        link_url: el.getAttribute("href")?.split("?")[0],
        link_text: el.textContent?.trim().slice(0, 60),
      });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
