// Preguntas frecuentes como bloques rellenos (sin líneas). En el fondo crema van en blanco y al revés.
export function FaqList({
  faqs,
  onWhite = false,
}: {
  faqs: readonly { q: string; a: React.ReactNode }[];
  onWhite?: boolean;
}) {
  return (
    <div className="reveal space-y-2">
      {faqs.map((f) => (
        <details key={f.q} className={`group ${onWhite ? "bg-paper" : "bg-white"}`}>
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-lead font-bold tracking-[-0.01em] transition-colors hover:text-brand sm:px-6 [&::-webkit-details-marker]:hidden">
            {f.q}
            <span aria-hidden="true" className="text-head leading-none text-brand transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="max-w-[62ch] px-5 pb-6 sm:px-6">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
