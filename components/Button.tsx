// Sistema de botones. Terracota = llamar o pedir visita; verde = WhatsApp;
// grafito y contorno para acciones secundarias. Altura mínima 56 px (pulgar en móvil).

export type ButtonVariant = "primary" | "whatsapp" | "dark" | "outline" | "light";
export type ButtonSize = "icon" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-bold transition active:translate-y-px disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white shadow-[0_2px_0_var(--color-brand-dark)] hover:bg-brand-dark",
  whatsapp: "bg-wa text-white shadow-[0_2px_0_var(--color-wa-dark)] hover:bg-wa-dark",
  dark: "bg-ink text-white hover:bg-ink/90",
  outline: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
  light: "bg-white text-ink hover:bg-paper",
};

const sizes: Record<ButtonSize, string> = {
  icon: "size-11 shrink-0",
  md: "min-h-11 px-4 text-base",
  lg: "min-h-14 px-6 text-lg",
};

export function buttonClass(variant: ButtonVariant = "primary", size: ButtonSize = "lg", extra = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`;
}
