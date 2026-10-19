import Link from "next/link";
import { buttonClass } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { MenuIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { services, site, whatsappHref } from "@/lib/site";

const navLinks = [
  { href: "/nosotros/", label: "Nosotros" },
  { href: "/contacto/", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" aria-label={`${site.name}, inicio`}>
          <Logo />
        </Link>

        {/* Escritorio */}
        <nav aria-label="Principal" className="hidden items-center gap-6 lg:flex">
          <div className="group relative">
            <Link href="/servicios/" className="py-5 font-semibold hover:text-brand">
              Servicios <span aria-hidden="true">▾</span>
            </Link>
            <ul className="invisible absolute left-0 top-full w-72 rounded-xl border border-line bg-white p-2 opacity-0 shadow-lg transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}/`}
                    className="block rounded-lg px-3 py-2 hover:bg-paper hover:text-brand"
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
            className="flex items-center gap-2 text-lg font-bold text-ink hover:text-brand"
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

        {/* Móvil: menú sin JS con <details> */}
        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={site.phone.href}
            data-track="click_llamar"
            aria-label={`Llamar al ${site.phone.display}`}
            className="grid size-11 place-items-center rounded-full text-brand"
          >
            <PhoneIcon className="size-6" />
          </a>
          <details className="group">
            <summary
              aria-label="Abrir menú"
              className="grid size-11 cursor-pointer list-none place-items-center rounded-full [&::-webkit-details-marker]:hidden"
            >
              <MenuIcon />
            </summary>
            <nav
              aria-label="Menú móvil"
              className="absolute inset-x-0 top-16 border-b border-line bg-white px-4 pb-6 pt-2 shadow-lg"
            >
              <p className="pt-2 text-sm font-semibold uppercase tracking-wide text-ink-soft">
                Servicios
              </p>
              <ul className="mt-1">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/${s.slug}/`} className="block py-3 text-lg font-semibold">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="mt-2 border-t border-line pt-2">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block py-3 text-lg font-semibold">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
