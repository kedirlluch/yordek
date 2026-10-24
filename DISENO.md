# Dirección visual: "La curva del logo"

El logo de YordeK es una pared: abajo el gotelé (puntos sobre marino), arriba la pared lisa (crema) y, entre las dos, una curva naranja. Esa curva es el único motivo gráfico de la web y aparece a varias escalas:

- **Banda a lo ancho** (`components/CurveBand.tsx`): al final de cada hero y encima del pie. Arriba el color de la sección anterior, abajo el marino con los puntos del gotelé. La sección que sigue a la banda tiene que ser marina (`bg-ink`).
- **Recorte de las fotos** (`.curve-cut` en `app/globals.css` + `<CurveCut>` en `components/Photo.tsx`): la esquina inferior izquierda se corta con la misma curva de Bézier del logo y lleva el trazo naranja.
- **Viñeta de las listas** (`CurveMark` en `components/icons.tsx`): sustituye a los ✓.

Revisión hecha con la skill `design-taste-frontend` (dirección «One motif»). Sus capturas e informes quedan en `.taste-skill/` (no se sube a git).

## Paleta (tokens en `app/globals.css`)
| Token | Color | Uso |
|---|---|---|
| `ink` | #1E3A4C marino del logo | Texto, campos marinos (servicios, precio, pie) |
| `ink-2` | #2F5468 | Puntos del gotelé, hover de botones oscuros |
| `ink-soft` | #4A5D69 | Texto secundario (6:1 sobre crema) |
| `paper` | #F4EFE6 crema del logo | Fondo general |
| `paper-2` | #EAE3D6 | Un paso más oscuro, para separar superficies sin líneas |
| blanco | #FFFFFF | Secciones alternas, formulario, preguntas |
| `accent` | #D9663B naranja del logo | **Solo gráficos**: curva, viñetas, comparador. Nunca texto (no da 4,5:1) |
| `brand` | #B04A24 | **Acciones**: llamar, pedir visita, enlaces (5,4:1 con texto blanco) |
| `wa` | #15803D | Solo WhatsApp |
| — | #E8875F | Enlaces y notas sobre marino (4,6:1) |

Separación de superficies por cambio de fondo, no por bordes ni sombras. Solo llevan borde los campos del formulario. Las sombras, solo en lo que flota (menú desplegable, barra móvil, banner de cookies). Nada de degradados.

## Tipografía (autoalojada, `app/fonts/`)
- **Archivo** (OFL, variable de peso), una sola familia, de corte parecido al rótulo del logo.
- Cinco tamaños (`@theme`): `small` 14, `body` 17, `lead` 20–24, `head` 28–48 y `display` 44–100 px.
- `.display` y `.head`: peso 800, interlineado 0,95/1,02 e interletraje negativo.
- Titulares de dos líneas como máximo. El h1 del hero (`components/HeroTitle.tsx`) va en dos partes dentro del mismo h1: la búsqueda a tamaño `display` y el beneficio a tamaño `lead`.

## Composición
- Márgenes: `.wrap` (máx. 84rem, 16/32 px de lateral). Separación entre secciones: `.section` (72/128 px).
- Hero: título grande a la izquierda y foto recortada a la derecha. En móvil, la foto va justo después del título para que entre en la primera pantalla.
- **Índice de servicios con vista previa** (`components/ServiceIndex.tsx`): filas grandes; en escritorio, la foto de la fila señalada aparece en un marco fijo a la izquierda (solo CSS); en móvil, cada fila lleva su foto.
- **Proceso** (`components/ProcessStrip.tsx`): franja de paneles que va del marino del gotelé a la pared lisa. El color marca el orden; no hay números ni tarjetas.
- **Antes y después** (`components/BeforeAfter.tsx`): comparador que se arrastra, o se mueve con el teclado. Es el único componente interactivo nuevo.
- Preguntas frecuentes (`components/FaqList.tsx`): bloques rellenos, sin líneas.
- Sin antetítulos (etiquetas encima de los títulos), sin tarjetas con icono, sin monoespaciada.

## Movimiento (solo CSS, sin JavaScript)
- `.reveal`: los hijos suben 36 px al entrar en pantalla (`animation-timeline: view()`). Solo desplazamiento, sin opacidad, para que el texto mantenga siempre su contraste. Si el navegador no lo soporta, no pasa nada.
- `.drift`: leve zoom de algunas fotos al salir de pantalla.
- Respuesta al pasar el ratón y al pulsar en botones, filas y preguntas.
- Con `prefers-reduced-motion` no hay ningún movimiento.

## Botones (`components/Button.tsx`)
`buttonClass(variant, size)`. Planos, con esquinas rectas y sin sombra. Variantes: `primary` (ladrillo), `whatsapp`, `dark`, `outline` y `light`. Tamaños: `icon` (44 px), `md` (44 px de alto) y `lg` (56 px). En móvil, Llamar y WhatsApp van en una fila, mitad y mitad (`CtaButtons`).
