import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ClickTracker } from "@/components/ClickTracker";
import { CookieBanner } from "@/components/CookieBanner";
import { site } from "@/lib/site";
import { gtmEnabled, headScript, tracking } from "@/lib/tracking";
import "./globals.css";

// Una sola familia (Archivo, OFL), de corte cercano al rótulo del logo.
const archivo = localFont({
  src: "./fonts/archivo-latin-wght.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} · Pintores en Valencia`, template: `%s | ${site.name}` },
  openGraph: {
    locale: "es_ES",
    siteName: site.name,
    type: "website",
    // Provisional (texto sobre fondo yeso) hasta tener foto real y logo.
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${site.name} · Alisado y pintura en ${site.area}` }],
  },
};

export const viewport: Viewport = {
  themeColor: "#f4efe6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={archivo.variable}>
      <head>
        {/* Consent Mode v2 (todo denegado por defecto) y después la etiqueta de Ads. El orden importa. */}
        <script dangerouslySetInnerHTML={{ __html: headScript() }} />
      </head>
      <body className="font-sans">
        {gtmEnabled && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${tracking.gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {children}
        <ClickTracker />
        <CookieBanner />
      </body>
    </html>
  );
}
