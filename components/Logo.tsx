import Image from "next/image";
import { site } from "@/lib/site";

// Logotipo horizontal (public/img/yordek-logo-*.svg). La versión clara es para fondos oscuros.
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Image
      src={light ? "/img/yordek-logo-horizontal-claro.svg" : "/img/yordek-logo-horizontal.svg"}
      alt={`${site.name} · Alisado y pintura en ${site.area}`}
      width={592}
      height={220}
      unoptimized
      className="h-11 w-auto"
    />
  );
}
