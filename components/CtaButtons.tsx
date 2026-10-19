import { buttonClass, type ButtonSize } from "@/components/Button";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { DEFAULT_WA_MESSAGE, site, whatsappHref } from "@/lib/site";

type Props = {
  waMessage?: string;
  callLabel?: string;
  className?: string;
};

// Botones principales. data-track lo recoge ClickTracker para GTM.
export function CtaButtons({
  waMessage = DEFAULT_WA_MESSAGE,
  callLabel = "Llamar ahora",
  className = "",
}: Props) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <CallButton label={callLabel} />
      <WhatsAppButton message={waMessage} />
    </div>
  );
}

export function CallButton({ label = "Llamar ahora", size = "lg" }: { label?: string; size?: ButtonSize }) {
  return (
    <a href={site.phone.href} data-track="click_llamar" className={buttonClass("primary", size)}>
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
}: {
  message?: string;
  label?: string;
  size?: ButtonSize;
}) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener"
      data-track="click_whatsapp"
      className={buttonClass("whatsapp", size)}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}
