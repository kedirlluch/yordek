import Link from "next/link";
import { buttonClass } from "@/components/Button";
import { CookieSettingsButton } from "@/components/CookieBanner";
import { Logo } from "@/components/Logo";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { site, whatsappHref } from "@/lib/site";

// Landings de Google Ads: sin menú ni enlaces de salida. Solo llamar, WhatsApp, formulario y legales.
export default function AdsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
          <Logo />
          <div className="flex items-center gap-2">
            <a
              href={site.phone.href}
              data-track="click_llamar"
              className="flex items-center gap-2 rounded-full px-2 text-lg font-bold text-ink hover:text-brand"
            >
              <PhoneIcon className="size-5 text-brand" />
              <span className="hidden sm:inline">{site.phone.display}</span>
              <span className="sr-only sm:hidden">Llamar al {site.phone.display}</span>
            </a>
            {/* En móvil ya está la barra inferior */}
            <span className="hidden lg:block">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener"
                data-track="click_whatsapp"
                aria-label="Escribir por WhatsApp"
                className={buttonClass("whatsapp", "icon")}
              >
                <WhatsAppIcon />
              </a>
            </span>
          </div>
        </div>
      </header>

      <main id="contenido">{children}</main>

      <footer className="bg-ink pb-24 text-sm text-white/75 lg:pb-0">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.area}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            <li><Link href="/aviso-legal/" className="hover:text-white">Aviso legal</Link></li>
            <li><Link href="/politica-de-privacidad/" className="hover:text-white">Privacidad</Link></li>
            <li><Link href="/politica-de-cookies/" className="hover:text-white">Cookies</Link></li>
            <li><CookieSettingsButton className="hover:text-white" /></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
