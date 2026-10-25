import { buttonClass, type ButtonSize } from "@/components/Button";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { DEFAULT_WA_MESSAGE, site, whatsappHref } from "@/lib/site";

type Props = {
  waMessage?: string;
  callLabel?: string;
  className?: string;
};

// Botones principales. data-track lo recoge ClickTracker para Google Ads.
// En móvil van en una sola fila, mitad y mitad, para que la foto del hero entre en la primera pantalla.
export function CtaButtons({
  waMessage = DEFAULT_WA_MESSAGE,
  callLabel = "Llamar ahora",
  className = "",
}: Props) {
  return (
    <div className={`grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3 ${className}`}>
      <CallButton label={callLabel} className="whitespace-nowrap" />
      <WhatsAppButton message={waMessage} className="whitespace-nowrap" />
    </div>
  );
}

export function CallButton({
  label = "Llamar ahora",
  size = "lg",
  className = "",
}: {
  label?: string;
  size?: ButtonSize;
  className?: string;
}) {
  return (
    <a href={site.phone.href} data-track="click_llamar" className={buttonClass("primary", size, className)}>
      <PhoneIcon />
      {label}
      <span className="sr-only">: {site.phone.display}</span>
    </a>
  );
}

export function WhatsAppButton({
  message = DEFAULT_WA_MESSAGE,
  label = "WhatsApp",
  size = "lg",
  className = "",
}: {
  message?: string;
  label?: string;
  size?: ButtonSize;
  className?: string;
}) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener"
      data-track="click_whatsapp"
      className={buttonClass("whatsapp", size, className)}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}
