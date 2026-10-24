// Las fotos se generan ya optimizadas con scripts/fotos.py: <nombre>-480.webp, -800 y -1200.
// Estos anchos coinciden con images.deviceSizes de next.config.ts.
const WIDTHS = [480, 800, 1200];

export default function imageLoader({ src, width }: { src: string; width: number }) {
  if (!src.endsWith(".webp")) return src;
  const w = WIDTHS.find((x) => x >= width) ?? WIDTHS[WIDTHS.length - 1];
  return src.replace(/\.webp$/, `-${w}.webp`);
}
