"use client";

import Image from "next/image";
import { useState } from "react";
import { isTestPhoto, TestPhotoLabel } from "@/components/Photo";

// Solo fotos REALES de trabajos propios, generadas con scripts/fotos.py (las de /img/prueba/ son provisionales).
export type BeforeAfterPair = {
  before: string;
  after: string;
  /** Qué se ve en la foto, para el alt. P. ej.: "salón de un piso en Benimaclet". */
  place: string;
  caption: string;
};

const corner = "pointer-events-none absolute top-3 bg-ink px-2.5 py-1 text-small font-bold text-white";

// Comparador antes/después: se arrastra (o se mueve con las flechas del teclado) para pasar del gotelé
// a la pared lisa. Sin JavaScript se queda partido por la mitad y se ven las dos fotos.
export function BeforeAfterSlider({
  pair,
  sizes,
  caption = true,
}: {
  pair: BeforeAfterPair;
  sizes: string;
  /** false cuando el pie va en otra columna de la sección. */
  caption?: boolean;
}) {
  const [pos, setPos] = useState(50);
  return (
    <figure>
      <div className="relative aspect-[4/3] select-none overflow-hidden bg-paper-2 has-[input:focus-visible]:outline-3 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-brand">
        <Image src={pair.before} alt={`Antes: ${pair.place}`} fill sizes={sizes} className="object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
          <Image src={pair.after} alt={`Después: ${pair.place}`} fill sizes={sizes} className="object-cover" />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-1.5 -translate-x-1/2 bg-accent" style={{ left: `${pos}%` }}>
          <span className="absolute top-1/2 left-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center bg-accent text-lead font-bold text-ink">
            ↔
          </span>
        </div>
        <span className={`${corner} left-3`}>Antes</span>
        <span className={`${corner} right-3`}>Después</span>
        {(isTestPhoto(pair.before) || isTestPhoto(pair.after)) && <TestPhotoLabel />}
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Comparar antes y después: ${pair.place}`}
          className="absolute inset-0 size-full cursor-ew-resize opacity-0"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-ink-soft">{pair.caption}</figcaption>
      ) : (
        <figcaption className="sr-only">{pair.caption}</figcaption>
      )}
    </figure>
  );
}

/** Pie e instrucción del comparador cuando van junto al título de la sección. */
export function BeforeAfterNote({ pair }: { pair?: BeforeAfterPair }) {
  return (
    <>
      {pair && <p className="text-lead">{pair.caption}</p>}
      <p className={`text-ink-soft ${pair ? "mt-3" : ""}`}>Mueve la línea naranja para comparar.</p>
    </>
  );
}

/** Pareja fija, una foto junto a otra (para la segunda pareja de una sección). */
export function BeforeAfterPairStatic({ pair, sizes }: { pair: BeforeAfterPair; sizes: string }) {
  return (
    <figure>
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { src: pair.before, label: "Antes" },
          { src: pair.after, label: "Después" },
        ].map((img) => (
          <div key={img.label} className="relative aspect-[4/3] overflow-hidden bg-paper-2">
            <Image src={img.src} alt={`${img.label}: ${pair.place}`} fill sizes={sizes} className="object-cover" />
            <span className={`${corner} left-2 top-2`}>{img.label}</span>
            {isTestPhoto(img.src) && <TestPhotoLabel short />}
          </div>
        ))}
      </div>
      <figcaption className="mt-3 text-ink-soft">{pair.caption}</figcaption>
    </figure>
  );
}
