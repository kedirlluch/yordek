// Pasos del trabajo como una franja de paneles que va del marino del gotelé a la pared lisa:
// el orden lo marca el color, de oscuro a claro. Sin tarjetas ni números decorativos.

type Step = { title: string; text: React.ReactNode };

const RAMPS: Record<string, string[]> = {
  "light-4": ["#1e3a4c", "#3d6378", "#a9bcc6", "#ffffff"],
  "light-6": ["#1e3a4c", "#2f5468", "#4a6e80", "#a9bcc6", "#d6e0e4", "#ffffff"],
  "dark-4": ["#2f5468", "#4a6e80", "#a9bcc6", "#f4efe6"],
};

// Los tres primeros tonos llevan texto blanco (contraste ≥ 5,4:1); los claros, texto marino (≥ 6:1).
const DARK_TONES = new Set(["#1e3a4c", "#2f5468", "#3d6378", "#4a6e80"]);

export function ProcessStrip({ steps, onDark = false }: { steps: readonly Step[]; onDark?: boolean }) {
  const ramp = RAMPS[`${onDark ? "dark" : "light"}-${steps.length}`] ?? RAMPS["light-6"];
  const cols = steps.length === 4 ? "lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <ol className={`reveal grid ${cols}`}>
      {steps.map((step, i) => {
        const bg = ramp[i % ramp.length];
        const light = !DARK_TONES.has(bg);
        return (
          <li
            key={step.title}
            style={{ backgroundColor: bg }}
            className={`flex min-h-40 flex-col justify-end p-6 lg:min-h-60 lg:p-8 ${light ? "text-ink" : "text-white"}`}
          >
            <h3 className="text-lead font-extrabold tracking-[-0.015em]">{step.title}</h3>
            <p className={`mt-2 ${light ? "text-ink" : "text-white/90"}`}>{step.text}</p>
          </li>
        );
      })}
    </ol>
  );
}
