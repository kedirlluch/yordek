"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/tracking";

// Un único listener para todos los CTA con data-track (click_llamar, click_whatsapp).
// Así los botones siguen siendo Server Components.
export function ClickTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-track]");
      if (!el) return;
      if (!el.dataset.track) return;
      trackEvent({
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
