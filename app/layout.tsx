import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from './components/site-header';
import './globals.css';

export const metadata: Metadata = {
  title: 'ReformaPro | Reformas y acabados',
  description: 'Alisado, pintura y reformas para viviendas y locales.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <a href="#main-content" className="skip-link">
          Saltar al contenido
        </a>

        <div className="site-shell">
          <SiteHeader />

          <main id="main-content" className="site-main">
            {children}
          </main>

          <footer className="site-footer">
            <div>
              <p className="site-footer-title">ReformaPro</p>
              <p>Profesionalismo, limpieza y acabados para reformar con confianza.</p>
            </div>

            <div>
              <p className="site-footer-title">Navegación</p>
              <ul className="footer-links">
                <li>
                  <Link href="/">Inicio</Link>
                </li>
                <li>
                  <Link href="/servicios">Servicios</Link>
                </li>
                <li>
                  <Link href="/como-trabajamos">Cómo trabajamos</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="site-footer-title">Contacto</p>
              <ul className="footer-links">
                <li>
                  <Link href="/contacto">Contacto</Link>
                </li>
                <li>
                  <Link href="/presupuesto">Presupuesto</Link>
                </li>
                <li>
                  <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
