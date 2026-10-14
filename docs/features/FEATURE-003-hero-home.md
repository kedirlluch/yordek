# FEATURE-003

## ID

FEATURE-003

## Nombre

Hero de Inicio

## Objetivo

Implementar la sección Hero de la página de Inicio: la primera pantalla que ve el visitante. Debe comunicar en pocos segundos qué hace la empresa, transmitir calidad y confianza con una imagen real de proyecto, y llevar al visitante hacia "Pedir presupuesto" o "Ver proyectos".

## Contexto

El proyecto se desarrolla por features independientes y ordenadas. FEATURE-001 definió el sistema de diseño base y FEATURE-002 el layout global, incluido el header que arranca transparente cuando la página lo solicita.

El Hero es la primera sección de la página de Inicio y marca el tono visual de toda la web: editorial cálido, premium y cercano, con la fotografía como protagonista.

## Problema que resuelve

En un servicio de alto ticket, el visitante decide en segundos si la empresa le inspira confianza. Un hero genérico, lento o poco claro hace que abandone antes de ver proyectos o pedir presupuesto. Esta feature resuelve esa primera impresión: mensaje claro, imagen real, acciones evidentes y carga rápida.

## Alcance

- definir feature
- definir objetivo
- documentar requisitos
- documentar validación
- documentar cierre
- componente `Hero` reutilizable (usado en Inicio y adaptable a otras páginas)
- imagen de fondo a sangre con overlay para garantizar legibilidad
- eyebrow (etiqueta superior), titular principal (`h1`) y subtítulo
- dos CTAs: primario "Pedir presupuesto" y secundario "Ver proyectos"
- franja de microconfianza con 3 datos breves (por ejemplo años de experiencia, reformas entregadas, garantía)
- indicación visual discreta de scroll hacia la siguiente sección
- declaración de header transparente para esta página (según FEATURE-002)
- animación de entrada sutil solo con CSS
- contenido del hero definido en datos o configuración, no incrustado en el componente

## Fuera de alcance

- cambios no relacionados
- refactors generales sin necesidad
- mejoras de otra feature
- sección Confianza completa (logos, reseñas, sellos), que es una sección propia
- slider Antes / Después (FEATURE-004)
- vídeo de fondo o carruseles de imágenes
- formularios dentro del hero
- variantes de hero para páginas internas más allá de una versión simple reutilizable
- textos y fotografías definitivos (se usan provisionales configurables)

## Requisitos funcionales

- la feature debe tener objetivo claro
- debe listar dependencias y rutas afectadas
- debe incluir criterios de aceptación
- debe incluir validación mínima
- el hero ocupa la primera pantalla visible, con el header superpuesto en modo transparente
- contiene un único `h1` de la página
- el CTA primario lleva a `/presupuesto` y el secundario a `/proyectos`
- la franja de microconfianza muestra entre 3 y 4 datos cortos, editables desde la configuración
- el eyebrow indica actividad y zona (por ejemplo "Reformas integrales en Valencia"; texto provisional)
- el indicador de scroll lleva a la siguiente sección y puede omitirse sin afectar al resto
- el componente admite variantes por props: alineación del texto, altura y presencia de la franja de confianza

## Requisitos técnicos

- respetar los estándares del stack
- respetar arquitectura y reglas del proyecto
- documentarse antes de implementarse
- usar exclusivamente tokens y componentes de FEATURE-001 (`Container`, `Heading`, `Text`, `Eyebrow`, `Button`)
- activar el modo transparente del header mediante el mecanismo definido en FEATURE-002
- imagen del hero como elemento LCP: carga prioritaria (sin lazy loading), `fetchpriority="high"`, dimensiones explícitas y formatos modernos (AVIF o WebP con fallback)
- imágenes responsive con `srcset` y `sizes`, y recorte adecuado para móvil (`object-fit: cover` con punto focal configurable)
- altura con unidades `svh`/`dvh` y un mínimo razonable, para evitar saltos en móvil por la barra del navegador
- animación de entrada solo con CSS; el contenido debe ser visible aunque falle o no cargue JavaScript
- no ocultar el `h1` con opacidad 0 a la espera de JS (evita retrasar el LCP)
- respetar `prefers-reduced-motion`
- overlay con degradado oscuro suave, definido con tokens, que asegure contraste del texto y del header transparente

## Dependencias

- README
- ARCHITECTURE
- TECH-STACK
- DEVELOPMENT-RULES
- FEATURE-001 (sistema de diseño base)
- FEATURE-002 (layout global)

## Componentes afectados

Nuevos:

- `Hero`
- `HeroTrustStrip` (franja de microconfianza)
- `ScrollCue` (indicador de scroll)

Reutilizados:

- `Container`
- `Heading`
- `Text`
- `Eyebrow`
- `Button`
- `Header` (solo para solicitar modo transparente)

Archivos de contenido:

- contenido del hero (textos, CTAs, datos de confianza, imagen)

## Rutas afectadas

- `/` (Inicio)
- `/design-system` (añadir el hero como referencia visual, opcional)

## Datos necesarios

- fotografía principal de un proyecto real, en alta calidad, con zona despejada para el texto
- versión alternativa o recorte para móvil
- titular y subtítulo (provisionales hasta que haya copy final)
- texto alternativo de la imagen
- 3 o 4 datos de confianza reales (años, número de reformas, garantía, valoración)
- zona de actuación para el eyebrow

## UX

- composición editorial: imagen a sangre, titular serif grande, mucho aire y texto alineado a la izquierda sobre una zona tranquila de la foto
- un solo mensaje claro: qué haces, para quién y en qué zona
- jerarquía de acciones: "Pedir presupuesto" destacado con el color de acento y "Ver proyectos" como secundario discreto
- la franja de microconfianza queda cerca de los CTAs y no compite con ellos
- overlay sutil que no apague la fotografía
- animación de entrada discreta (fade y desplazamiento corto, en torno a 400 a 600 ms, escalonada entre titular, subtítulo y botones)
- el indicador de scroll es pequeño y no distrae

## Responsive

- enfoque mobile-first
- móvil: imagen a sangre, texto en la parte inferior, CTAs apilados o a ancho completo y franja de confianza compacta; contar con la barra inferior fija de FEATURE-002 para que no tape los botones
- tablet y desktop: texto a la izquierda con anchura de lectura limitada, CTAs en línea y franja de confianza horizontal
- titular con tamaño fluido (`clamp()`) definido en FEATURE-001
- altura mínima del hero adaptada a cada breakpoint, sin forzar scroll horizontal ni cortar el texto en pantallas bajas o apaisadas
- probar en 360, 390, 768, 1024, 1440 y 1920 px de ancho

## Accesibilidad

- semántica HTML
- labels correctos
- foco visible
- contraste adecuado
- un único `h1` en la página, dentro del hero
- contraste AA del texto sobre la imagen en todo el rango de la foto, comprobado con el overlay aplicado
- texto alternativo descriptivo en la imagen, o vacío si se considera decorativa y el contexto ya lo explica
- botones y enlaces con foco visible y objetivo táctil mínimo de 44 x 44 px
- el indicador de scroll es un enlace real con etiqueta accesible, o se oculta a tecnologías de asistencia si es solo decorativo
- las animaciones se desactivan con `prefers-reduced-motion`
- la franja de confianza usa una lista semántica

## SEO

- metadata
- headings
- URLs limpias
- structured content
- el `h1` incluye el servicio principal y, si encaja de forma natural, la zona
- metadata de la página de Inicio (title y description) coherente con el mensaje del hero
- imagen con `alt` relevante y nombre de archivo descriptivo
- imagen Open Graph para compartir, basada en el hero
- los CTAs son enlaces `<a>` reales a `/presupuesto` y `/proyectos`

## Performance

- optimización de carga
- evitar JS innecesario
- optimizar imágenes
- el hero no necesita JavaScript en cliente
- imagen LCP con prioridad alta, sin lazy loading, tamaños correctos por dispositivo y peso ajustado
- precarga de la imagen y de las fuentes críticas del titular
- sin librerías de animación; solo CSS
- evitar CLS: dimensiones reservadas para la imagen y fuentes con fallback de métricas ajustadas
- objetivo de referencia: LCP por debajo de 2,5 s en móvil con conexión estándar

## Seguridad

- validar inputs
- proteger datos sensibles
- no exponer secretos
- sin formularios ni entrada de datos en esta feature
- imágenes servidas desde el propio proyecto o un origen de confianza configurado
- enlaces internos sin parámetros sensibles

## Criterios de aceptación

- la feature cumple su objetivo
- no rompe otras partes relevantes
- la validación se ha hecho
- la documentación está actualizada
- el hero se muestra a pantalla completa en Inicio con el header transparente encima y legible
- existe un único `h1` y los dos CTAs llevan a `/presupuesto` y `/proyectos`
- el texto cumple contraste AA sobre la imagen en móvil y desktop
- la imagen se carga como LCP con prioridad alta y formatos modernos, sin CLS visible
- el contenido es visible y utilizable con JavaScript desactivado
- con `prefers-reduced-motion` no hay animación de entrada
- en móvil, la barra inferior fija no tapa CTAs ni franja de confianza
- los textos, datos de confianza e imagen se cambian desde la configuración sin tocar el componente
- build, lint y typecheck pasan sin errores

## Tests necesarios

- tests unitarios o de integración según la feature
- validación manual de flujo principal
- render del `Hero` con el contenido de ejemplo y con variantes de props
- existe un único `h1` en la página de Inicio
- los CTAs apuntan a las rutas correctas
- el hero solicita el header transparente y este se vuelve sólido al hacer scroll
- revisión manual en móvil, tablet, desktop y pantallas apaisadas o bajas
- comprobación de contraste con herramienta (por ejemplo Lighthouse o axe) sobre la imagen real
- medición de LCP y CLS con Lighthouse en móvil
- prueba con JavaScript desactivado y con `prefers-reduced-motion`
- navegación por teclado por CTAs e indicador de scroll

## Posibles riesgos

- sobrecarga de contenido
- cambios de diseño no alineados
- requisitos ambiguos
- fotografía final de baja calidad o con composición que no deje zona limpia para el texto
- imagen demasiado pesada que empeore el LCP
- texto ilegible sobre zonas claras de la foto o sobre el header transparente
- titular demasiado largo que se rompa mal en móvil
- recorte móvil que deje fuera el punto de interés de la foto
- solapamiento de los CTAs con la barra inferior fija en móvil
- datos de confianza no verificables o inventados, que dañarían la credibilidad

## Dependencias con otras features

- depende de FEATURE-001 (sistema de diseño base)
- depende de FEATURE-002 (layout global y header transparente)
- FEATURE-004 (Antes / Después) y el resto de secciones de Inicio se montan a continuación del hero
- la futura sección Confianza ampliará los datos de la franja de microconfianza, sin duplicarlos
- las páginas de servicio y proyecto individual podrán reutilizar el componente `Hero` en su variante simple

## Estado

PLANNED

## Feature log

- Feature: FEATURE-003 Hero de Inicio
- Estado: PLANNED
- Objetivo: primera pantalla de Inicio con mensaje claro, imagen real, CTAs y microconfianza
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
- Siguiente paso: FEATURE-004 Antes / Después