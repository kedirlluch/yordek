import Link from "next/link";
import { CookieSettingsButton } from "@/components/CookieBanner";
import { CurveBand } from "@/components/CurveBand";
import { Logo } from "@/components/Logo";
import { hoursText, services, site } from "@/lib/site";

const legal = [
  { href: "/aviso-legal/", label: "Aviso legal" },
  { href: "/politica-de-privacidad/", label: "Política de privacidad" },
  { href: "/politica-de-cookies/", label: "Política de cookies" },
];

export function Footer() {
  return (
    <>
      <CurveBand />
      <footer className="bg-ink pb-24 text-white/85 lg:pb-0">
        <div className="wrap grid gap-10 pb-12 pt-4 md:grid-cols-12 lg:pb-20">
          <div className="md:col-span-5">
            <div className="w-64 sm:w-80 [&_img]:h-auto [&_img]:w-full">
              <Logo light />
            </div>
            <p className="mt-3">Alisado y pintura en {site.area}.</p>
            <p className="mt-1">{hoursText}.</p>
            <p className="mt-1">{site.hours.flexible}.</p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h2 className="text-lead font-bold text-white">Contacto</h2>
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

          <div className="md:col-span-3">
            <h2 className="text-lead font-bold text-white">Servicios</h2>
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

        <div className="bg-[#18303f]">
          <div className="wrap flex flex-col gap-2 py-6 text-small md:flex-row md:justify-between">
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
    </>
  );
}
