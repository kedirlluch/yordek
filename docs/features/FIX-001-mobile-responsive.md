# FIX-001

## ID

FIX-001

## Nombre

Corrección de responsive y botones en móvil

## Tipo

Corrección de errores (no es una feature nueva)

## Objetivo

Hacer que lo ya implementado funcione correctamente en móvil: que todos los botones y enlaces respondan bien al toque y que los tamaños, espaciados y layouts se adapten a pantallas pequeñas sin romperse.

## Síntomas reportados

- los botones no funcionan correctamente en móvil
- los tamaños de los elementos no son adecuados: la web es poco responsive

## Cómo reproducirlo

Completar antes de pasárselo a la IA (cuanto más concreto, mejor):

- dispositivo y navegador: (por ejemplo iPhone 13 con Safari, Android con Chrome)
- ancho de pantalla aproximado: (por ejemplo 390 px)
- botones que fallan: (por ejemplo "Pedir presupuesto" del header, botón del menú móvil, CTAs del hero)
- qué ocurre exactamente: (no responde / hay que pulsar dos veces / se activa otro elemento / se queda atascado)
- elementos con tamaño incorrecto: (por ejemplo titular demasiado grande, texto cortado, imagen desbordada, hero demasiado alto)
- capturas de pantalla: (adjuntar si es posible)
- ¿ocurre también al reducir la ventana del navegador en el ordenador?: sí / no

## Comportamiento esperado

- todos los botones y enlaces responden a la primera pulsación táctil
- los elementos interactivos tienen un tamaño táctil mínimo de 44 x 44 px
- no hay scroll horizontal en ningún ancho entre 320 y 1024 px
- los textos, imágenes y secciones se adaptan al ancho de pantalla sin cortarse ni solaparse
- el menú móvil y la barra inferior fija funcionan y no tapan contenido

## Alcance

- auditar y corregir el comportamiento táctil y el responsive de las features ya implementadas (FEATURE-001, FEATURE-002, FEATURE-003 y FEATURE-004 si está implementada)
- corregir en la causa raíz: tokens, estilos globales y componentes base antes que parches por página
- documentar causas encontradas y cambios realizados

## Fuera de alcance

- cambios no relacionados
- refactors generales sin necesidad
- rediseño visual o cambios de estilo que no sean necesarios para arreglar el problema
- nuevas funcionalidades
- mejoras de otra feature

## Proceso obligatorio

1. **Diagnosticar antes de cambiar.** Revisar el código y listar las causas probables, con archivo y línea, sin modificar nada todavía.
2. **Proponer el arreglo.** Explicar brevemente qué se va a cambiar y por qué.
3. **Corregir.** Empezar por tokens, estilos globales y componentes base; después ajustar componentes concretos solo si hace falta.
4. **Verificar.** Comprobar cada criterio de aceptación en los anchos indicados y registrar el resultado.

## Puntos a revisar (causas habituales)

### Botones y toque

- falta o mala configuración de la etiqueta `viewport` en el `head`
- elementos superpuestos que capturan el toque (overlays del hero, header, menú móvil cerrado o barra inferior con `z-index` o `pointer-events` incorrectos)
- menú móvil cerrado que sigue ocupando espacio o interceptando clics
- interacciones que dependen de `hover` y no tienen equivalente táctil
- eventos mal elegidos (solo `mouseenter` o `mousedown` en lugar de `click` o Pointer Events)
- botones con área táctil inferior a 44 x 44 px o demasiado juntos entre sí
- botones o enlaces anidados dentro de otros elementos interactivos
- el botón no es un `<button>` o `<a>` real, o el enlace no tiene `href`
- `touch-action` o bloqueo de scroll mal aplicado
- retardo o doble toque por estilos de hover persistentes en móvil

### Tamaños y layout

- anchos, alturas, paddings o fuentes en `px` fijos que no escalan
- escala tipográfica fluida (`clamp()`) con valores mínimos o máximos demasiado grandes para móvil
- uso de `100vh` en lugar de `svh` o `dvh` (la barra del navegador móvil rompe la altura)
- contenedores sin `max-width: 100%` o con `min-width` que provocan desbordamiento horizontal
- imágenes sin `max-width: 100%` ni proporción definida
- rejillas o flex que no pasan a una columna en móvil
- padding vertical de sección pensado para desktop (demasiado grande en móvil)
- textos largos o palabras sin salto que rompen el layout
- barra inferior fija que tapa CTAs, contenido o el footer, sin espacio reservado
- zonas seguras del dispositivo (`safe-area-inset`) no contempladas

## Requisitos técnicos

- respetar los estándares del stack
- respetar arquitectura y reglas del proyecto
- usar tokens existentes; si falta un token, añadirlo en lugar de poner valores sueltos
- enfoque mobile-first: estilos base para móvil y ampliaciones con `min-width`
- no introducir librerías nuevas para resolver este problema
- no romper el comportamiento en desktop

## Dependencias

- README
- ARCHITECTURE
- TECH-STACK
- DEVELOPMENT-RULES
- FEATURE-001, FEATURE-002 y FEATURE-003 (y FEATURE-004 si está implementada)

## Componentes afectados

- definir tras el diagnóstico (previsiblemente: estilos globales, `Button`, `Header`, `MobileMenu`, `MobileActionBar`, `Hero`, `Section`, `Container`)

## Rutas afectadas

- `/`
- `/design-system`
- cualquier otra ruta que use el layout global

## Accesibilidad

- foco visible conservado tras los cambios
- objetivos táctiles de al menos 44 x 44 px
- el menú móvil mantiene foco, cierre con `Esc` y atributos `aria-expanded` y `aria-controls`
- contraste y tamaño de texto legibles (cuerpo mínimo de 16 px)

## Performance

- sin JavaScript adicional salvo que sea imprescindible
- evitar saltos de layout (CLS) al corregir alturas y fuentes

## Criterios de aceptación

- no hay scroll horizontal entre 320 y 1024 px de ancho
- todos los botones y enlaces del header, menú móvil, hero, barra inferior y footer responden a la primera pulsación
- los elementos interactivos miden al menos 44 x 44 px y tienen separación suficiente
- el hero y las secciones se ven completos y proporcionados en 360, 390, 414 y 768 px, sin textos cortados ni solapamientos
- el menú móvil se abre, se cierra y no intercepta toques cuando está cerrado
- la barra inferior móvil no tapa contenido ni botones
- el comportamiento en desktop no ha cambiado
- build, lint y typecheck pasan sin errores

## Tests necesarios

- comprobación manual en emulación de móvil en los anchos 320, 360, 390, 414, 768 y 1024 px
- comprobación en un dispositivo real (iPhone y Android si es posible)
- pulsar uno a uno todos los botones y enlaces visibles en móvil
- revisión de scroll horizontal en cada ancho
- revisión en vertical y horizontal del móvil
- comprobación de contraste y tamaños táctiles con Lighthouse o herramienta equivalente

## Posibles riesgos

- arreglar síntomas con parches por página en lugar de la causa raíz
- que un cambio en estilos globales afecte a otras secciones
- que el arreglo funcione en el emulador pero no en un dispositivo real
- cambiar el diseño más de lo necesario

## Entrega esperada de la IA

Al terminar, responder con:

- causas encontradas (archivo y línea)
- cambios realizados por archivo
- resultado de cada criterio de aceptación
- problemas pendientes o deuda técnica

## Estado

READY FOR REVIEW

## Fix log

- Fix: FIX-001 Corrección de responsive y botones en móvil
- Estado: READY FOR REVIEW; falta comprobación en dispositivos físicos.
- Síntomas: rejillas y hero poco adaptables en móvil; objetivos de toque insuficientes en navegación.
- Causas encontradas: `app/globals.css` usaba un hero a `100vw` con márgenes de viewport (regla del hero, ahora acotada a desktop), ocultaba overflow horizontal en `body`, activaba el menú móvil solo hasta 900 px, mantenía `.home-detail-grid` en tres columnas y no garantizaba anchura táctil mínima en enlaces cortos. El slider dependía solo del comportamiento nativo de un rango transparente y no tenía manejo táctil propio; el menú dependía solo de `click`. Referencias actuales: `app/globals.css` reglas de hero/targets y media queries 1023/600 px; `app/components/before-after-slider.tsx` eventos Pointer/Touch; `app/components/site-navigation.tsx` activación táctil y estado del panel.
- Archivos modificados: `app/globals.css`, `app/components/site-navigation.tsx`, `app/components/before-after-slider.tsx`, `docs/features/FIX-001-mobile-responsive.md`, `CHANGELOG.md`.
- Decisiones técnicas: no se fuerza `meta viewport` porque Next.js lo genera por defecto; el slider usa Pointer Events y Touch Events con `touch-action: pan-y` para conservar el scroll vertical; el menú conserva `click` para ratón/teclado y deduplica el `click` que sigue a un toque. El panel plegable se monta debajo del header con `hidden`, fondo opaco y z-index alto, evitando el contexto de `backdrop-filter` y estados de transición invisibles. No se añade barra inferior móvil porque no existe y sería funcionalidad nueva.
- Validación: Playwright en navegador integrado; 11 rutas × 6 anchos (320, 360, 390, 414, 768 y 1024 px), además de horizontal 844 × 390 y desktop 1024 × 768. Eventos táctiles sintéticos: `touchstart` al 15 %, `touchmove` al 82 % dejó el rango en 82; un `pointerup` táctil abrió el menú y el `click` posterior no lo volvió a cerrar. Panel medido a 390 × 844: top 72 px, alto 772 px, opaco, enlace alcanzable; click del enlace navegó a `/servicios` y cerró el panel. El navegador informa `navigator.maxTouchPoints = 0`, por lo que no equivale a prueba física.
- Responsive: 0 casos de scroll horizontal en 66 combinaciones de ruta/ancho; también 0 en horizontal y desktop. La navegación desktop aparece a 1024 px y el menú móvil en anchos menores.
- Accessibility: objetivos medidos de al menos 44 × 44 px en enlaces del footer, marca, menú y CTAs; menú comprobado con `aria-expanded`, cierre con Escape, `aria-hidden` e `inert`. Foco visible del slider conservado. Contraste no medido con herramienta automatizada.
- Build: PASS (`npm run build`).
- Lint: PASS (`npm run lint`).
- Typecheck: PASS (`npx tsc --noEmit`).
- Problemas encontrados: no existe una barra fija inferior en la implementación actual; criterio de que no tape contenido no aplicable, no se añadió una feature nueva.
- Tech debt: comprobar en dispositivos iPhone y Android reales; pulsar manualmente todos los enlaces y completar una auditoría Lighthouse/contraste.
- Siguiente paso: validación física y revisión final de accesibilidad antes de marcar DONE.