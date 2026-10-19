// Marcador visible para datos que faltan. Buscar "[PENDIENTE" antes de publicar.
export function Pendiente({ children }: { children: React.ReactNode }) {
  return (
    <mark className="rounded bg-yellow-200 px-1 font-mono text-[0.85em] text-ink">
      [PENDIENTE: {children}]
    </mark>
  );
}
