# FEATURE-004

## ID

FEATURE-004

## Nombre

Slider Antes / Después

## Objetivo

Implementar un componente reutilizable de comparación Antes / Después con control arrastrable, y montarlo como sección en la página de Inicio. Debe permitir que el visitante vea de forma inmediata y tangible la transformación de una reforma real, que es el argumento que más convence en este sector.

## Contexto

El proyecto se desarrolla por features independientes y ordenadas. FEATURE-001 definió el sistema de diseño base, FEATURE-002 el layout global y FEATURE-003 el Hero.

Este componente se usa primero en la sección "Antes / Después" de Inicio y después se reutilizará en las páginas de proyecto individual y de servicio. Por eso se construye como componente independiente y la sección de Inicio es solo una de sus aplicaciones.

## Problema que resuelve

Las fotos finales de una reforma, por sí solas, no muestran cuánto ha cambiado el espacio. Una galería estática obliga al visitante a comparar de memoria. Un slider de comparación hace evidente el resultado en un gesto, genera confianza y empuja al visitante hacia "Pedir presupuesto".

## Alcance

- definir feature
- definir objetivo
- documentar requisitos
- documentar validación
- documentar cierre
- componente `BeforeAfterSlider` reutilizable con divisor arrastrable
- interacción con ratón, táctil y teclado
- etiquetas "Antes" y "Después" sobre la imagen
- posición inicial configurable (por defecto 50 %)
- pista visual discreta de interacción la primera vez que el componente entra en pantalla
- fallback sin JavaScript: ambas imágenes visibles una tras otra
- sección `BeforeAfterSection` para Inicio con eyebrow, título, texto breve y CTA
- selector de casos: entre 3 y 4 pares de imágenes con miniaturas o pestañas
- pie de foto con datos del proyecto (tipo de reforma, ubicación, duración) y enlace al proyecto cuando exista
- contenido de los casos definido en datos o configuración, no incrustado en el componente

## Fuera de alcance

- cambios no relacionados
- refactors generales sin necesidad
- mejoras de otra feature
- página de proyectos y proyecto individual (feature propia)
- galerías completas de fotos
- slider de vídeo o comparación de vídeos
- zoom o pantalla completa de las imágenes
- subida de imágenes por parte del usuario
- edición o procesado de imágenes (las parejas llegan ya preparadas)
- contenido real definitivo: se usan pares provisionales configurables

## Requisitos funcionales

- la feature debe tener objetivo claro
- debe listar dependencias y rutas afectadas
- debe incluir criterios de aceptación
- debe incluir validación mínima
- el visitante puede arrastrar el divisor con ratón y dedo, y hacer clic o tocar en la imagen para mover el divisor a esa posición
- el divisor se mueve también con las flechas del teclado, y salta a los extremos con `Home` y `End`
- el gesto táctil horizontal mueve el divisor sin bloquear el scroll vertical de la página
- el divisor queda limitado entre 0 % y 100 % y no se sale del contenedor
- las etiquetas "Antes" y "Después" son siempre legibles y no tapan el punto de interés
- el selector de casos cambia el par mostrado y reinicia el divisor a su posición inicial
- cada caso muestra su pie de foto con los datos del proyecto
- la pista visual de interacción se muestra una sola vez y se cancela en cuanto el usuario interactúa
- ambas imágenes de un par deben compartir la misma proporción; el componente avisa en desarrollo si no coinciden

## Requisitos técnicos

- respetar los estándares del stack
- respetar arquitectura y reglas del proyecto
- documentarse antes de implementarse
- usar exclusivamente tokens y componentes de FEATURE-001 (`Section`, `Container`, `Heading`, `Text`, `Eyebrow`, `Button`, `Badge`)
- dos imágenes superpuestas; la imagen "Después" se recorta con `clip-path` o equivalente, controlado por una variable CSS con la posición
- eventos con Pointer Events (ratón, táctil y lápiz en una sola implementación), con captura del puntero durante el arrastre
- `touch-action: pan-y` en el área interactiva para no bloquear el scroll vertical
- actualizar la posición con `requestAnimationFrame` o directamente sobre la variable CSS, sin provocar renders innecesarios
- proporción fija del contenedor (por ejemplo 4:3 o 3:2), definida por props y compartida por ambas imágenes
- imágenes con dimensiones explícitas, formatos modernos (AVIF o WebP con fallback) y `srcset`/`sizes`
- JavaScript acotado a este componente; cargarlo de forma diferida si el stack lo permite
- la pista visual se activa con `IntersectionObserver` y se desactiva con `prefers-reduced-motion`
- el estado del slider (posición) es local al componente; no requiere estado global

## Dependencias

- README
- ARCHITECTURE
- TECH-STACK
- DEVELOPMENT-RULES
- FEATURE-001 (sistema de diseño base)

Nota: la sección se coloca a continuación del Hero (FEATURE-003) en Inicio, pero no depende técnicamente de él. El layout global (FEATURE-002) envuelve la página pero tampoco es un requisito técnico del componente.

## Componentes afectados

Nuevos:

- `BeforeAfterSlider` (componente reutilizable)
- `BeforeAfterSection` (sección de Inicio)
- `CaseSelector` (selector de casos con miniaturas o pestañas)
- `CaseCaption` (pie de foto con datos del proyecto)

Reutilizados de FEATURE-001:

- `Section`
- `Container`
- `Heading`
- `Text`
- `Eyebrow`
- `Button`
- `Badge`

Archivos de contenido:

- listado de casos Antes / Después (imágenes, textos alternativos, datos del proyecto, enlace)

## Rutas afectadas

- `/` (Inicio, sección Antes / Después)
- `/design-system` (añadir el slider como referencia visual)

Rutas enlazadas desde la sección (pueden no existir aún):

- `/proyectos` y `/proyectos/[proyecto]`
- `/presupuesto`

## Datos necesarios

- 3 o 4 pares de fotografías reales de reformas, tomadas desde el mismo ángulo y con la misma proporción
- texto alternativo de cada imagen (estado antes y estado después)
- datos por caso: tipo de reforma, ubicación, duración y, opcionalmente, superficie
- enlace al proyecto correspondiente, si existe
- titular, texto breve y CTA de la sección (provisionales)

## UX

- el slider es el protagonista de la sección: grande, limpio y sin elementos que compitan con él
- el divisor es una línea fina con un tirador circular claro y reconocible, con flechas laterales
- cursor y estados visibles: hover, arrastre y foco
- etiquetas "Antes" y "Después" en píldoras pequeñas en las esquinas superiores
- la pista visual inicial es un leve movimiento del divisor una sola vez, nada insistente
- el selector de casos es discreto y permite cambiar rápido, sin recargar la página
- el pie de foto da contexto en una línea y enlaza al proyecto completo
- al final de la sección, un CTA a "Pedir presupuesto"
- movimiento suave y sin latencia al arrastrar; sin animaciones llamativas

## Responsive

- enfoque mobile-first
- el slider ocupa todo el ancho del contenedor en móvil, con proporción adecuada para no ocupar más que la pantalla visible
- el tirador mantiene un objetivo táctil mínimo de 44 x 44 px
- el selector de casos puede desplazarse horizontalmente en móvil
- en desktop, el slider se centra con ancho máximo cómodo y el selector queda debajo o al lado
- el scroll vertical de la página no se bloquea al tocar el slider
- probar en 360, 390, 768, 1024 y 1440 px de ancho, y en horizontal en móvil

## Accesibilidad

- semántica HTML
- labels correctos
- foco visible
- contraste adecuado
- el divisor es un control con `role="slider"`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow` y etiqueta clara (por ejemplo "Comparar antes y después")
- operable solo con teclado: flechas, `Home` y `End`, con foco visible en el tirador
- texto alternativo diferenciado para la imagen "Antes" y la imagen "Después"
- contraste AA de las etiquetas sobre cualquier zona de la foto
- selector de casos con semántica de pestañas o grupo de botones, con estado seleccionado anunciado (`aria-selected` o `aria-pressed`)
- `prefers-reduced-motion` desactiva la pista animada
- no depender solo del color o del arrastre para entender la interacción

## SEO

- metadata
- headings
- URLs limpias
- structured content
- encabezado de la sección con nivel semántico correcto dentro de la jerarquía de la página
- ambas imágenes con `alt` descriptivo y nombres de archivo con sentido
- los enlaces a proyectos son `<a>` reales
- el contenido de texto de cada caso está en el HTML, no solo dentro de imágenes
- no marcar datos estructurados específicos en esta feature

## Performance

- optimización de carga
- evitar JS innecesario
- optimizar imágenes
- las imágenes de la sección no son LCP: carga diferida (`loading="lazy"`) salvo el primer par si la sección quedase visible al inicio
- dimensiones explícitas para evitar CLS al cargar
- precargar bajo demanda las imágenes del siguiente caso al interactuar con el selector
- evitar cargar a la vez todos los pares a máxima resolución
- el recorte se hace con CSS y variable, no repintando con JavaScript en cada frame
- controlar el peso: tamaños responsive adecuados por dispositivo

## Seguridad

- validar inputs
- proteger datos sensibles
- no exponer secretos
- sin formularios ni envío de datos
- imágenes servidas desde el propio proyecto o un origen de confianza configurado
- no incluir en las fotos datos identificables de clientes (matrículas, documentos, rostros) sin consentimiento

## Criterios de aceptación

- la feature cumple su objetivo
- no rompe otras partes relevantes
- la validación se ha hecho
- la documentación está actualizada
- el slider se arrastra con ratón y dedo, responde a clic o toque y se controla por teclado
- en móvil, el scroll vertical de la página sigue funcionando al tocar el slider
- el divisor nunca se sale de los límites y el recorte coincide con su posición
- el selector cambia de caso, reinicia el divisor y actualiza el pie de foto
- sin JavaScript, el visitante ve ambas imágenes con su etiqueta
- con `prefers-reduced-motion` no hay animación de pista
- el control es accesible con teclado y lector de pantalla (`role="slider"` con valores correctos)
- sin CLS al cargar las imágenes y sin cargar todos los pares de golpe
- el componente se puede reutilizar con distintos datos sin modificarlo
- build, lint y typecheck pasan sin errores

## Tests necesarios

- tests unitarios o de integración según la feature
- validación manual de flujo principal
- render del slider con un par de ejemplo y con el listado de casos
- el valor del divisor se limita entre 0 y 100
- las flechas, `Home` y `End` actualizan `aria-valuenow` correctamente
- el selector de casos cambia el par y reinicia la posición
- avisos de desarrollo cuando las proporciones de un par no coinciden
- revisión manual en móvil, tablet y desktop, incluido arrastre táctil real
- comprobar que el scroll vertical funciona al deslizar sobre el slider en móvil
- prueba con teclado y con lector de pantalla
- prueba con JavaScript desactivado y con `prefers-reduced-motion`
- medición de CLS y peso de imágenes con Lighthouse

## Posibles riesgos

- sobrecarga de contenido
- cambios de diseño no alineados
- requisitos ambiguos
- fotos Antes y Después tomadas desde ángulos o con proporciones distintas, que hacen la comparación inútil
- conflicto entre el arrastre horizontal y el scroll vertical en móvil
- peso excesivo al cargar varios pares de imágenes grandes
- slider poco descubrible si la pista visual es demasiado tímida, o molesto si es demasiado insistente
- accesibilidad deficiente si el control se implementa solo con eventos de ratón
- falta de fotos reales de calidad en la fase de desarrollo
- uso de imágenes de clientes sin permiso

## Dependencias con otras features

- depende de FEATURE-001 (sistema de diseño base)
- se monta a continuación del Hero de FEATURE-003 en la página de Inicio
- la futura feature de Proyectos reutilizará `BeforeAfterSlider` en la página de proyecto individual
- las páginas de servicio (cocinas, baños...) podrán reutilizarlo con casos filtrados por tipo
- el CTA final enlaza con el formulario de Presupuesto

## Estado

PLANNED

## Feature log

- Feature: FEATURE-004 Slider Antes / Después
- Estado: PLANNED
- Objetivo: componente de comparación arrastrable y sección de Inicio con varios casos
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
- Siguiente paso: FEATURE-005 Servicios (sección de Inicio)