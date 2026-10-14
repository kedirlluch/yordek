'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/como-trabajamos', label: 'Cómo trabajamos' },
  { href: '/presupuesto', label: 'Presupuesto' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/blog', label: 'Blog' },
];

export default function SiteNavigation() {
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  return (
    <>
      <nav className="site-nav" aria-label="Navegación principal">
        <ul>
          {navItems.map((item) => {
            const isCurrent = pathname === item.href;
            return (
              <li key={item.href}>
                <Link href={item.href} aria-current={isCurrent ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <Link href="/presupuesto" className="header-cta" aria-label="Solicitar presupuesto">
        Pedir presupuesto
      </Link>

      <details
        ref={mobileMenuRef}
        className="site-nav-actions"
        onKeyDown={(event) => {
          if (event.key === 'Escape') mobileMenuRef.current?.removeAttribute('open');
        }}
      >
        <summary className="menu-toggle" aria-label="Menú de navegación">
          <span />
          <span />
          <span />
        </summary>

        <div id="site-menu" className="mobile-menu-panel">
          <nav aria-label="Menú móvil">
            <ul>
              {navItems.map((item) => {
                const isCurrent = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isCurrent ? 'page' : undefined}
                      onClick={() => mobileMenuRef.current?.removeAttribute('open')}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </details>
    </>
  );
}
