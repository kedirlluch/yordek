import Image from "next/image";

// Solo fotos REALES de trabajos propios, ya convertidas a AVIF/WebP en /public/img.
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
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="absolute left-2 top-2 rounded bg-ink/80 px-2 py-0.5 text-sm font-bold text-white">
                  {img.label}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-2 text-ink-soft">{p.caption}</p>
        </li>
      ))}
    </ul>
  );
}
