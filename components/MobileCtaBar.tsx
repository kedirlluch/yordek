import { buttonClass } from "@/components/Button";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { DEFAULT_WA_MESSAGE, site, whatsappHref } from "@/lib/site";

// Barra fija inferior en móvil. Cada página pasa su mensaje de WhatsApp.
export function MobileCtaBar({ waMessage = DEFAULT_WA_MESSAGE }: { waMessage?: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(0,0,0,0.08)] lg:hidden">
      <a
        href={site.phone.href}
        data-track="click_llamar"
        className={buttonClass("primary", "lg")}
      >
        <PhoneIcon /> Llamar
      </a>
      <a
        href={whatsappHref(waMessage)}
        target="_blank"
        rel="noopener"
        data-track="click_whatsapp"
        className={buttonClass("whatsapp", "lg")}
      >
        <WhatsAppIcon /> WhatsApp
      </a>
    </div>
  );
}
