import { site } from "@/lib/site";

// Logotipo provisional hasta tener el real ([PENDIENTE]).
// El símbolo es la idea de la marca: mitad gotelé, mitad pared lisa.
export function Logo({ light = false }: { light?: boolean }) {
  const ink = light ? "#ffffff" : "var(--color-ink)";
  return (
    <span className="flex items-center gap-2">
      <svg viewBox="0 0 32 32" aria-hidden="true" className="size-8 shrink-0">
        <rect x="1" y="1" width="30" height="30" rx="7" fill="var(--color-brand)" />
        <path d="M31 8v16a7 7 0 0 1-7 7H8Z" fill={light ? "var(--color-ink)" : "#ffffff"} />
        <g fill="#ffffff" opacity="0.9">
          <circle cx="7" cy="7" r="1.4" />
          <circle cx="13" cy="7" r="1.4" />
          <circle cx="19" cy="7" r="1.4" />
          <circle cx="7" cy="13" r="1.4" />
          <circle cx="13" cy="13" r="1.4" />
          <circle cx="7" cy="19" r="1.4" />
        </g>
      </svg>
      <span className="font-display text-2xl font-extrabold tracking-tight" style={{ color: ink }}>
        YordeK
      </span>
      <span className="sr-only"> · {site.area}</span>
    </span>
  );
}
