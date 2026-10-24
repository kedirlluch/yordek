import Image from "next/image";
import { isTestPhoto } from "@/components/Photo";

// Solo fotos REALES de trabajos propios, generadas con scripts/fotos.py (las de /img/prueba/ son provisionales).
export type BeforeAfterPair = {
  before: string;
  after: string;
  /** Qué se ve en la foto, para el alt. P. ej.: "salón de un piso en Benimaclet". */
  place: string;
  caption: string;
};

export function BeforeAfterGallery({ pairs }: { pairs: BeforeAfterPair[] }) {
  return (
    <ul className="mt-8 grid gap-8 md:grid-cols-2">
      {pairs.map((p) => (
        <li key={p.after}>
          <div className="grid grid-cols-2 gap-2">
            {[
              { src: p.before, label: "Antes" },
              { src: p.after, label: "Después" },
            ].map((img) => (
              <figure key={img.label} className="relative overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={`${img.label}: ${p.place}`}
                  width={800}
                  height={600}
                  sizes="(min-width: 768px) 268px, 45vw"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="absolute left-2 top-2 rounded bg-ink/80 px-2 py-0.5 text-sm font-bold text-white">
                  {img.label}
                </figcaption>
                {isTestPhoto(img.src) && (
                  <span className="absolute bottom-1.5 right-1.5 rounded bg-tape px-1.5 text-xs font-bold text-ink">Prueba</span>
                )}
              </figure>
            ))}
          </div>
          <p className="mt-2 text-ink-soft">{p.caption}</p>
        </li>
      ))}
    </ul>
  );
}
