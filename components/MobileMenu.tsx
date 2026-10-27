"use client";

import { useEffect, useRef } from "react";
import { MenuIcon } from "@/components/icons";

// Menú móvil con <details>: abre y cierra sin JS. Con JS, además se cierra al tocar fuera,
// al elegir un enlace (la navegación de Next no recarga la cabecera) o con Escape.
export function MobileMenu({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const menu = ref.current;
    if (!menu) return;
    const close = () => {
      menu.open = false;
    };
    const onPointerDown = (e: PointerEvent) => {
      if (menu.open && !menu.contains(e.target as Node)) close();
    };
    const onClick = (e: MouseEvent) => {
      if ((e.target as Element).closest("a")) close();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menu.open) {
        close();
        menu.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    menu.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      menu.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <details ref={ref} className="group">
      <summary
        aria-label="Abrir menú"
        className="grid size-11 cursor-pointer list-none place-items-center rounded-full [&::-webkit-details-marker]:hidden"
      >
        <MenuIcon />
      </summary>
      {children}
    </details>
  );
}
