// Marcador visible para datos que faltan. Buscar "[PENDIENTE" antes de publicar.

/** En producción (Vercel, VERCEL_ENV=production) se ocultan los datos que se dejan fuera a propósito. */
export const isProduction = process.env.VERCEL_ENV === "production";

export function Pendiente({ children }: { children: React.ReactNode }) {
  return (
    <mark className="bg-yellow-200 px-1 font-semibold text-ink">
      [PENDIENTE: {children}]
    </mark>
  );
}
