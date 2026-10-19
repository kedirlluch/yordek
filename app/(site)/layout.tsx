import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

// Páginas con menú. Las landings de Ads irán en otro grupo sin cabecera completa.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:p-2"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">{children}</main>
      <Footer />
    </>
  );
}
