import Image from "next/image";

export type PhotoSrc = { src: string; alt: string };

// Fotos de public/img/prueba/: descargadas solo para ver el diseño. Llevan una etiqueta visible
// para que no se publiquen por error como trabajos propios (ver FOTOS.md).
export const isTestPhoto = (src: string) => src.startsWith("/img/prueba/");

/** Etiqueta amarilla de las fotos de prueba. */
export function TestPhotoLabel({ short = false }: { short?: boolean }) {
  return (
    <span className="absolute bottom-2 right-2 bg-yellow-200 px-2 py-0.5 text-small font-bold text-ink">
      {short ? "Prueba" : "Foto de prueba"}
    </span>
  );
}

/** Trazo naranja de la curva del logo sobre el recorte de la foto (.curve-cut). */
export function CurveCut() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 size-full overflow-visible"
    >
      <path
        d="M0 68 C18.45 72.44 36.9 82.67 58 100"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="7"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function Photo({
  src,
  alt,
  aspect = "aspect-[4/3]",
  sizes,
  preload = false,
  curve = true,
  drift = false,
  className = "",
}: PhotoSrc & {
  /** Clase de Tailwind con la proporción del hueco. */
  aspect?: string;
  /** Ancho real en pantalla, para que el navegador elija el archivo. */
  sizes: string;
  /** Solo para la foto principal de la página (LCP). */
  preload?: boolean;
  /** Recorte con la curva del logo en la esquina inferior izquierda. */
  curve?: boolean;
  /** Ligero movimiento al salir de pantalla (solo CSS). */
  drift?: boolean;
  className?: string;
}) {
  return (
    <figure className={`relative ${aspect} ${className}`}>
      <div className={`absolute inset-0 overflow-hidden bg-paper-2 ${curve ? "curve-cut" : ""}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
          className={`object-cover ${drift ? "drift" : ""}`}
        />
      </div>
      {curve && <CurveCut />}
      {isTestPhoto(src) && (
        <figcaption>
          <TestPhotoLabel />
        </figcaption>
      )}
    </figure>
  );
}
