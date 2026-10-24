// Banda con la curva del logo a lo ancho de la pantalla: arriba la pared lisa (color de la sección
// anterior), abajo el gotelé marino con sus puntos y, entre las dos, el trazo naranja.
// Va al final del hero y encima del pie. La sección siguiente tiene que ser marina (bg-ink).

const DOTS =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36'%3E%3Cg fill='%232F5468'%3E%3Ccircle cx='9' cy='9' r='4'/%3E%3Ccircle cx='27' cy='27' r='4'/%3E%3C/g%3E%3C/svg%3E\")";

export function CurveBand({ from = "var(--color-paper)" }: { from?: string }) {
  return (
    <div
      aria-hidden="true"
      className="relative h-[clamp(4.5rem,13vw,13rem)] bg-ink"
      style={{ backgroundImage: DOTS, backgroundSize: "36px 36px" }}
    >
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full overflow-visible">
        <path d="M0 0H100V100C63.6 51.2 31.8 22.5 0 10Z" fill={from} />
        <path
          d="M0 10C31.8 22.5 63.6 51.2 100 100"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="12"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
