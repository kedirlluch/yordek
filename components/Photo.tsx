import Image from "next/image";

export type PhotoSrc = { src: string; alt: string };

// Fotos de public/img/prueba/: descargadas solo para ver el diseño. Llevan una etiqueta visible
// para que no se publiquen por error como trabajos propios (ver FOTOS.md).
export const isTestPhoto = (src: string) => src.startsWith("/img/prueba/");

export function Photo({
  src,
  alt,
  aspect = "aspect-[4/3]",
  sizes,
  preload = false,
  className = "",
}: PhotoSrc & {
  /** Clase de Tailwind con la proporción del hueco. */
  aspect?: string;
  /** Ancho real en pantalla, para que el navegador elija el archivo. */
  sizes: string;
  /** Solo para la foto principal de la página (LCP). */
  preload?: boolean;
  className?: string;
}) {
  return (
    <figure className={`relative overflow-hidden rounded-2xl bg-line ${aspect} ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} preload={preload} className="object-cover" />
      {isTestPhoto(src) && (
        <figcaption className="absolute bottom-2 right-2 rounded bg-tape px-2 py-0.5 text-xs font-bold text-ink">
          Foto de prueba
        </figcaption>
      )}
    </figure>
  );
}
