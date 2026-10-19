# Dirección visual: "Pared recién alisada"

La web tiene que parecer una pared recién terminada: lisa, limpia y recta. La idea central es pasar del gotelé a la pared lisa.

## Paleta (tokens en `app/globals.css`)
| Token | Color | Uso |
|---|---|---|
| `ink` | #1b2327 grafito | Texto, fondo de la sección del proceso y del pie |
| `paper` | #f4f1ea yeso | Fondo general |
| blanco | #ffffff | Secciones alternas, tarjetas, formulario |
| `line` | #e2dcd0 | Bordes y separadores |
| `brand` | #b4471f terracota | **Solo acciones**: llamar, pedir visita y el servicio estrella |
| `tape` | #eadba8 cinta de carrocero | Etiquetas de los antetítulos |
| `wa` | #15803d | Solo WhatsApp |

Regla: un texto o un botón terracota se puede pulsar. Los iconos pequeños (✓, ubicación) también pueden ir en terracota. Nada de degradados.
El resaltado del titular usa el color de la cinta, no terracota.

## Tipografía (autoalojada, `app/fonts/`)
- **Bricolage Grotesque**: titulares (h1–h3), con carácter de oficio y muy legible.
- **Figtree**: texto y botones.

## Elementos propios
- `.gotele-fade`: textura de gotelé que se desvanece hacia la pared lisa (fondo del hero).
- `.tape`: antetítulo con aspecto de cinta de carrocero, ligeramente torcido.
- `.level-rule`: regla de nivel para separar secciones si hace falta.
- Logo provisional: un cuadrado mitad gotelé y mitad liso.

## Botones (`components/Button.tsx`)
`buttonClass(variant, size)`. Variantes: `primary` (terracota), `whatsapp`, `dark`, `outline` y `light`. Tamaños: `icon` (cuadrado de 44 px), `md` (44 px de alto) y `lg` (56 px, el de móvil).
