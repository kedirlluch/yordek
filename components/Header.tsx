import Link from "next/link";
import { buttonClass } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { MobileMenu } from "@/components/MobileMenu";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { services, site, whatsappHref } from "@/lib/site";

const navLinks = [
  { href: "/nosotros/", label: "Nosotros" },
  { href: "/contacto/", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label={`${site.name}, inicio`}>
          <Logo />
        </Link>

        {/* Escritorio */}
        <nav aria-label="Principal" className="hidden items-center gap-6 lg:flex">
          <div className="group relative">
            <Link href="/servicios/" className="py-5 font-semibold hover:text-brand">
              Servicios <span aria-hidden="true">▾</span>
            </Link>
            <ul className="absolute left-0 top-full hidden w-72 bg-white p-2 shadow-lg group-focus-within:block group-hover:block">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}/`}
                    className="block px-3 py-2 hover:bg-paper hover:text-brand"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="font-semibold hover:text-brand">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phone.href}
            data-track="click_llamar"
            className="flex items-center gap-2 text-lead font-bold text-ink hover:text-brand"
          >
            <PhoneIcon className="size-5 text-brand" />
            {site.phone.display}
          </a>
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
          <a href="#presupuesto" className={buttonClass("primary", "md")}>
            Pedir visita y presupuesto gratis
          </a>
        </div>

        {/* Móvil: menú con <details> (funciona sin JS) */}
        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={site.phone.href}
            data-track="click_llamar"
            aria-label={`Llamar al ${site.phone.display}`}
            className="grid size-11 place-items-center rounded-full text-brand"
          >
            <PhoneIcon className="size-6" />
          </a>
          <MobileMenu>
            <nav
              aria-label="Menú móvil"
              className="absolute inset-x-0 top-16 hidden bg-white px-4 pb-6 pt-2 group-open:block"
            >
              <p className="pt-2 text-small font-semibold text-ink-soft">
                Servicios
              </p>
              <ul className="mt-1">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/${s.slug}/`} className="block py-3 text-lead font-semibold">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="mt-4 bg-paper px-3 py-1">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block py-3 text-lead font-semibold">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </MobileMenu>
        </div>
      </div>
    </header>
  );
}
