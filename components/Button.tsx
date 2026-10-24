// Sistema de botones. Ladrillo (naranja oscuro del logo) = llamar o pedir visita; verde = WhatsApp;
// marino y contorno para acciones secundarias. Planos, sin sombra y con esquinas rectas en toda la web.

export type ButtonVariant = "primary" | "whatsapp" | "dark" | "outline" | "light";
export type ButtonSize = "icon" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-bold transition-[background-color,color,transform] duration-150 active:translate-y-px active:scale-[0.98] disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  whatsapp: "bg-wa text-white hover:bg-wa-dark",
  dark: "bg-ink text-white hover:bg-ink-2",
  outline: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
  light: "bg-white text-ink hover:bg-paper",
};

const sizes: Record<ButtonSize, string> = {
  icon: "size-11 shrink-0",
  md: "min-h-11 px-4 text-body",
  lg: "min-h-14 px-4 text-body sm:px-6",
};

export function buttonClass(variant: ButtonVariant = "primary", size: ButtonSize = "lg", extra = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`;
}
