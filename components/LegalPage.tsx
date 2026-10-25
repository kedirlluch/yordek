import { isProduction, Pendiente } from "@/components/Pendiente";

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
    <article className="wrap max-w-4xl py-12 lg:py-20">
      <h1 className="head">{title}</h1>
      <p className="mt-4 text-ink-soft">Última actualización: {updated}</p>
      <div className="mt-10 max-w-[68ch] space-y-4 [&_a]:font-semibold [&_a]:text-brand [&_a]:underline [&_h2]:pt-6 [&_h2]:text-lead [&_h2]:font-extrabold [&_li]:ml-6 [&_li]:list-disc [&_table]:w-full [&_table]:text-small [&_td]:border [&_td]:border-line [&_td]:p-2 [&_td]:align-top [&_th]:border [&_th]:border-line [&_th]:bg-white [&_th]:p-2 [&_th]:text-left">
        {children}
      </div>
    </article>
  );
}

// Fila de dato fiscal. Si aún no está en lib/site.ts, sale el marcador en local y en las
// previews, y en producción la fila no aparece (de momento no hay titular fiscal: PENDIENTES.md).
export function LegalRow({ name, value, label }: { name: string; value: string | null; label: string }) {
  if (value) return <li>{name}: {value}</li>;
  if (isProduction) return null;
  return <li>{name}: <Pendiente>{label}</Pendiente></li>;
}
