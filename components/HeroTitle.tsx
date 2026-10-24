// H1 del hero en dos partes: la búsqueda (servicio + Valencia) a tamaño de cartel y el beneficio debajo,
// a tamaño de entradilla. Es una sola frase y un solo h1, como antes, para el SEO y el message match.
export function HeroTitle({ main, sub, long = false }: { main: string; sub?: string; long?: boolean }) {
  return (
    <h1 className="text-display leading-[0.95]">
      {/* `long`: para títulos de más de ~22 caracteres por línea, que a tamaño completo pasarían de dos líneas */}
      <span className={`display -ml-[0.04em] block ${long ? "text-[clamp(2.25rem,0.8rem+4.6vw,4.5rem)]" : ""}`}>{main}</span>
      {sub && (
        <>
          {" "}
          <span className="mt-4 block max-w-[30ch] text-lead font-bold tracking-[-0.01em] lg:mt-5">{sub}</span>
        </>
      )}
    </h1>
  );
}
