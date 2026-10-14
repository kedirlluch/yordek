# FEATURE-001

## ID

FEATURE-001

## Nombre

Sistema de diseño base

## Objetivo

Definir e implementar los fundamentos visuales y los componentes base de la web (tokens, tipografía, layout, botones y tarjetas) para que todas las features posteriores se construyan con un lenguaje visual único y coherente: **editorial cálido** (premium, cercano, con las fotos de proyectos como protagonistas).

## Contexto

El proyecto se desarrolla por features independientes y ordenadas. Esta es la primera: todas las demás (Hero, Antes/Después, Servicios, Proyectos, Presupuesto, Blog...) dependen de los tokens y componentes que se definen aquí.

La web es de una empresa de reformas de alto ticket. El diseño debe transmitir confianza, solidez y buen gusto, y facilitar el paso hacia "Presupuesto".

## Problema que resuelve

Sin una base visual común, cada sección acabaría con colores, espaciados, radios y tipografías distintos, lo que genera incoherencia, retrabajo y deuda técnica. Esta feature centraliza las decisiones de diseño en un único lugar y permite que una IA o un desarrollador construya el resto de secciones sin improvisar estilos.

## Alcance

- definir design tokens (color, tipografía, espaciado, radios, bordes, sombras, movimiento)
- cargar y configurar fuentes (serif para títulos, sans para texto y UI)
- estilos globales (reset, base tipográfica, foco visible, selección, `prefers-reduced-motion`)
- componentes de layout: `Container`, `Section` (con variantes de fondo)
- componentes de texto: `Heading` (niveles y tamaños), `Text`, `Eyebrow` (etiqueta superior pequeña)
- componente `Button` (primary, secondary, ghost; tamaños `md` y `lg`; estado disabled y loading; funciona como `<button>` o como enlace)
- componente `Card` (base y variante con imagen)
- componente `Badge` / `Tag` simple
- página interna de referencia (styleguide) para visualizar y validar todo el sistema, excluida de indexación
- documentación de tokens y componentes

## Fuera de alcance

- cambios no relacionados
- refactors generales sin necesidad
- mejoras de otra feature
- Header y Footer (feature propia)
- Hero (FEATURE-002)
- slider Antes / Después (FEATURE-003)
- campos de formulario e inputs (se definirán en la feature del formulario de Presupuesto)
- contenido real, textos finales e imágenes definitivas
- modo oscuro
- animaciones de scroll (se añadirán con cada sección que las necesite)

## Requisitos funcionales

- la feature debe tener objetivo claro
- debe listar dependencias y rutas afectadas
- debe incluir criterios de aceptación
- debe incluir validación mínima
- todos los valores visuales (colores, tamaños, espaciados, radios) deben salir de tokens; no se permiten valores sueltos en los componentes
- el `Button` debe poder renderizarse como enlace o como botón según el caso
- el `Section` debe permitir alternar fondos (crema, piedra, oscuro) para ritmo visual entre bloques
- la página de styleguide debe mostrar todos los tokens y todas las variantes y estados de los componentes

## Requisitos técnicos

- respetar los estándares del stack
- respetar arquitectura y reglas del proyecto
- documentarse antes de implementarse
- tokens definidos como CSS custom properties en un único archivo, independientes del framework
- escala tipográfica fluida con `clamp()` para evitar saltos bruscos entre breakpoints
- sin dependencias de UI de terceros salvo que lo justifique TECH-STACK
- fuentes autoalojadas o con `font-display: swap` y precarga de las críticas
- componentes sin lógica de negocio, solo presentación y variantes por props

### Tokens propuestos (punto de partida, ajustables)

**Color**

| Token | Valor | Uso |
|---|---|---|
| `--color-bg` | `#F6F2EC` | Fondo principal (crema) |
| `--color-surface` | `#FFFFFF` | Tarjetas y superficies elevadas |
| `--color-stone` | `#E8E1D6` | Secciones alternas, bordes suaves |
| `--color-border` | `#D9D0C2` | Bordes finos |
| `--color-text` | `#1E1B18` | Texto principal |
| `--color-text-muted` | `#6B6359` | Texto secundario |
| `--color-accent` | `#B5573A` | CTAs y detalles clave (terracota) |
| `--color-accent-hover` | `#9C472D` | Hover del acento |
| `--color-dark` | `#1E1B18` | Secciones oscuras |

Alternativa de acento a evaluar: verde salvia oscuro `#3F5A4B`.

Nota de contraste: el texto blanco sobre terracota cumple AA (≈4,8:1). El terracota como color de texto sobre crema (≈4,3:1) solo es válido para texto grande o decorativo; no usarlo en texto pequeño.

**Tipografía**

- Títulos: serif con carácter (Fraunces, Instrument Serif o Playfair Display; elegir una)
- Texto y UI: sans limpia (Inter o DM Sans; elegir una)
- Escala fluida: `display`, `h1`, `h2`, `h3`, `h4`, `body-lg`, `body`, `small`
- Interlineado generoso en cuerpo (1.6) y ajustado en títulos (1.1 a 1.2)

**Espaciado y layout**

- escala de espaciado base 4 px (4, 8, 12, 16, 24, 32, 48, 64, 96, 128)
- contenedor máximo de 1200 px con padding lateral responsive
- padding vertical de sección: 64 px en móvil, 96 a 128 px en desktop

**Formas y movimiento**

- radios: `sm` 8 px, `md` 12 px, `lg` 16 px, `pill` 999 px
- sombras casi inexistentes; preferir bordes de 1 px
- transiciones de 200 a 300 ms con easing suave
- respetar `prefers-reduced-motion`

## Dependencias

- README
- ARCHITECTURE
- TECH-STACK
- DEVELOPMENT-RULES

Esta feature no depende de ninguna otra feature. Requiere que el stack esté definido en TECH-STACK antes de implementar.

## Componentes afectados

Nuevos:

- `Container`
- `Section`
- `Heading`
- `Text`
- `Eyebrow`
- `Button`
- `Card`
- `Badge`

Archivos de base:

- archivo de tokens (CSS custom properties)
- archivo de estilos globales
- configuración de fuentes
- layout base de la aplicación (aplica estilos globales)

## Rutas afectadas

- `/design-system` (página interna de referencia, `noindex`, no enlazada desde la navegación pública, y deshabilitada o protegida en producción si el stack lo permite)

## Datos necesarios

- ninguno de backend
- decisión final de: fuente serif, fuente sans y color de acento (terracota o salvia)
- logotipo y nombre de marca (provisional si no existe aún)

## UX

- sensación general: premium, cálida, tranquila, con mucho aire
- jerarquía clara: un único CTA primario por bloque
- el acento se reserva para CTAs y detalles clave; el resto de la interfaz es neutra
- botones tipo píldora, con estados hover, focus, active, disabled y loading claramente diferenciados
- tarjetas con borde fino, radio medio y hover sutil (elevación mínima o zoom suave de imagen)
- movimiento discreto, sin animaciones llamativas

## Responsive

- enfoque mobile-first
- breakpoints de referencia: 640, 768, 1024, 1280 px
- tipografía fluida con `clamp()`
- objetivos táctiles de al menos 44 x 44 px en botones y elementos interactivos
- la página de styleguide debe verse correctamente en móvil, tablet y desktop

## Accesibilidad

- semántica HTML
- labels correctos
- foco visible
- contraste adecuado
- foco visible con estilo propio coherente con la marca (no eliminar `outline` sin sustituto)
- contraste mínimo AA para todas las combinaciones texto/fondo definidas en tokens
- los botones usados como enlace deben ser `<a>` y los de acción `<button>`
- el estado `loading` debe comunicarse a tecnologías de asistencia (`aria-busy` o equivalente)
- respetar `prefers-reduced-motion`

## SEO

- metadata
- headings
- URLs limpias
- structured content
- la ruta `/design-system` debe llevar `noindex` y quedar fuera del sitemap
- el componente `Heading` debe separar nivel semántico (h1 a h6) de tamaño visual, para no romper la jerarquía de headings por motivos de estilo

## Performance

- optimización de carga
- evitar JS innecesario
- optimizar imágenes
- los componentes base deben funcionar sin JavaScript en cliente
- limitar las fuentes a las familias y pesos realmente usados (idealmente variable fonts)
- precargar solo las fuentes críticas y usar `font-display: swap`
- evitar CLS por carga de fuentes (ajustar métricas de fallback si es posible)

## Seguridad

- validar inputs
- proteger datos sensibles
- no exponer secretos
- sin datos sensibles en esta feature
- si se usan fuentes externas, preferir autoalojado para evitar peticiones a terceros y problemas de privacidad (RGPD)

## Criterios de aceptación

- la feature cumple su objetivo
- no rompe otras partes relevantes
- la validación se ha hecho
- la documentación está actualizada
- existen todos los tokens definidos y ningún componente usa valores visuales fuera de ellos
- los componentes `Container`, `Section`, `Heading`, `Text`, `Eyebrow`, `Button`, `Card` y `Badge` existen con sus variantes y estados
- la ruta `/design-system` muestra tokens y componentes y es `noindex`
- todas las combinaciones de color texto/fondo documentadas cumplen contraste AA (o están marcadas como solo texto grande)
- el foco por teclado es visible en todos los elementos interactivos
- la tipografía fluida se ve bien entre 360 px y 1440 px de ancho sin saltos bruscos
- build, lint y typecheck pasan sin errores

## Tests necesarios

- tests unitarios o de integración según la feature
- validación manual de flujo principal
- render de cada componente con sus variantes principales
- `Button` como enlace y como botón (rol y comportamiento correctos)
- `Heading` con nivel semántico distinto del tamaño visual
- revisión manual de `/design-system` en móvil, tablet y desktop
- navegación completa por teclado de los elementos interactivos
- comprobación de contraste con herramienta (por ejemplo Lighthouse o axe)

## Posibles riesgos

- sobrecarga de contenido
- cambios de diseño no alineados
- requisitos ambiguos
- decidir fuentes y color de acento tarde y tener que reajustar componentes
- crear demasiados componentes o variantes "por si acaso" (limitarse a lo necesario para las siguientes features)
- fuentes pesadas que penalicen el rendimiento
- depender de fotografía real que aún no existe para validar el estilo editorial

## Dependencias con otras features

- FEATURE-002 (Hero) depende de esta
- FEATURE-003 (Antes / Después) depende de esta
- todas las features de secciones, páginas y formulario dependen de esta
- esta feature no depende de ninguna otra

## Estado

PLANNED

## Feature log

- Feature: FEATURE-001 Sistema de diseño base
- Estado: PLANNED
- Objetivo: tokens, tipografía, layout y componentes base del estilo editorial cálido
- Implementado:
- Archivos creados:
- Archivos modificados:
- Dependencias añadidas:
- Documentación consultada:
- Decisiones técnicas:
- Tests:
- Validación:
- Build:
- Lint:
- Typecheck:
- Tests:
- Responsive:
- SEO:
- Accessibility:
- Problemas encontrados:
- Tech debt:
- Siguiente paso: FEATURE-002 Hero