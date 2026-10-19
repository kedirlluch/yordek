import Link from "next/link";
import { CookieSettingsButton } from "@/components/CookieBanner";
import { Logo } from "@/components/Logo";
import { services, site } from "@/lib/site";

const legal = [
  { href: "/aviso-legal/", label: "Aviso legal" },
  { href: "/politica-de-privacidad/", label: "Política de privacidad" },
  { href: "/politica-de-cookies/", label: "Política de cookies" },
];

export function Footer() {
  return (
    <footer className="bg-ink pb-24 text-white/85 lg:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-3">Alisado y pintura en {site.area}.</p>
          <p className="mt-1">
            Horario: {site.hours.opens} – {site.hours.closes} ({site.hours.days})
          </p>
        </div>

        <div>
          <h2 className="font-bold text-white">Contacto</h2>
          <ul className="mt-3 space-y-1.5">
            <li>
              <a href={site.phone.href} data-track="click_llamar" className="hover:text-white">
                {site.phone.display}
              </a>
            </li>
            <li>
              <a href={site.phoneSecondary.href} data-track="click_llamar" className="hover:text-white">
                {site.phoneSecondary.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-white">Servicios</h2>
          <ul className="mt-3 space-y-1.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}/`} className="hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-sm md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <CookieSettingsButton className="hover:text-white" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
