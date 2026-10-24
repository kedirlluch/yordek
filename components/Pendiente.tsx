// Marcador visible para datos que faltan. Buscar "[PENDIENTE" antes de publicar.
export function Pendiente({ children }: { children: React.ReactNode }) {
  return (
    <mark className="bg-yellow-200 px-1 font-semibold text-ink">
      [PENDIENTE: {children}]
    </mark>
  );
}
