import Image from "next/image";
import Link from "next/link";
import { CurveCut, isTestPhoto, TestPhotoLabel, type PhotoSrc } from "@/components/Photo";
import { ArrowIcon } from "@/components/icons";

export type IndexItem = { href: string; name: string; text: string; image: PhotoSrc; note?: string };

// Índice de servicios con vista previa. En escritorio, al pasar el ratón (o el foco) por una fila, su foto
// aparece en el marco de la columna izquierda (globals.css: .index-*). En móvil cada fila lleva su foto.
// Las fotos ocultas con display:none no se descargan, así que cada tamaño de pantalla carga solo las suyas.
export function ServiceIndex({
  items,
  dark = false,
  heading,
  footer,
}: {
  items: IndexItem[];
  dark?: boolean;
  /** Título de la sección, encima del marco. */
  heading: React.ReactNode;
  /** CTA de la sección, debajo del marco. */
  footer?: React.ReactNode;
}) {
  const accent = dark ? "text-[#e8875f]" : "text-brand";
  return (
    <div className="index lg:grid lg:grid-cols-[40%_1fr] lg:gap-x-[6%]">
      <div className="lg:sticky lg:top-28 lg:self-start">
        {heading}
        <div className="index-frame relative mt-10 hidden aspect-[4/3] lg:block">
          {items.map((item) => (
            <div key={item.href} className="curve-cut absolute inset-0 overflow-hidden bg-paper-2">
              <Image src={item.image.src} alt="" fill sizes="40vw" className="object-cover" />
            </div>
          ))}
          <CurveCut />
          {isTestPhoto(items[0].image.src) && <TestPhotoLabel />}
        </div>
        {footer && <div className="mt-10 hidden lg:block">{footer}</div>}
      </div>

      <ul className="index-list reveal mt-8 lg:mt-0">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`group grid grid-cols-[6.5rem_1fr] items-start gap-x-4 py-4 sm:grid-cols-[9rem_1fr] lg:grid-cols-[1fr_auto] lg:items-center lg:py-6 ${
                dark ? "text-white" : "text-ink"
              }`}
            >
              <span className="relative aspect-[4/3] overflow-hidden bg-paper-2 lg:hidden">
                <Image src={item.image.src} alt="" fill sizes="9rem" className="object-cover" />
                {isTestPhoto(item.image.src) && <TestPhotoLabel short />}
              </span>
              <span>
                <span className={`block text-lead font-extrabold leading-[1.08] tracking-[-0.025em] transition-colors lg:text-head ${dark ? "group-hover:text-[#e8875f]" : "group-hover:text-brand"}`}>
                  {item.name}
                </span>
                {item.note && <span className={`mt-1 block text-small font-bold ${accent}`}>{item.note}</span>}
                <span className={`mt-2 block max-w-[46ch] ${dark ? "text-white/85" : "text-ink-soft"}`}>{item.text}</span>
              </span>
              <ArrowIcon className={`hidden size-7 transition-transform group-hover:translate-x-1.5 lg:block ${accent}`} />
            </Link>
          </li>
        ))}
      </ul>

      {footer && <div className="mt-8 lg:hidden">{footer}</div>}
    </div>
  );
}
