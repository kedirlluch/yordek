import { Pendiente } from "@/components/Pendiente";

// Maqueta de texto largo para las páginas legales.
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 lg:py-16">
      <h1 className="text-4xl font-extrabold tracking-tight">{title}</h1>
      <p className="mt-2 text-ink-soft">Última actualización: {updated}</p>
      <div className="mt-8 space-y-4 text-lg leading-relaxed [&_a]:font-semibold [&_a]:text-brand [&_a]:underline [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:font-extrabold [&_li]:ml-6 [&_li]:list-disc [&_table]:w-full [&_table]:text-base [&_td]:border [&_td]:border-line [&_td]:p-2 [&_td]:align-top [&_th]:border [&_th]:border-line [&_th]:bg-white [&_th]:p-2 [&_th]:text-left">
        {children}
      </div>
    </article>
  );
}

// Dato fiscal: muestra el valor o el marcador si aún no está en lib/site.ts.
export function LegalData({ value, label }: { value: string | null; label: string }) {
  return value ? <>{value}</> : <Pendiente>{label}</Pendiente>;
}
