# FEATURE-002

## ID

FEATURE-002

## Nombre

Layout global (Header, Footer y navegación)

## Objetivo

Implementar la estructura común que envuelve todas las páginas de la web: header sticky con navegación, menú móvil, footer y barra de acción fija en móvil. Debe mantener siempre visible el camino hacia "Presupuesto" y transmitir confianza desde el primer scroll.

## Contexto

El proyecto se desarrolla por features independientes y ordenadas. FEATURE-001 definió el sistema de diseño base (tokens, tipografía, `Container`, `Button`...). Esta feature lo usa para construir el layout global que comparten todas las páginas.

El Hero (FEATURE-003) depende de esta feature porque el header es transparente sobre el hero y sólido al hacer scroll.

## Problema que resuelve

Sin un layout común, cada página resolvería por su cuenta la navegación, el pie y el acceso al presupuesto, con riesgo de incoherencias y duplicación. Esta feature centraliza la navegación del sitio y garantiza que el CTA principal (Presupuesto) y el contacto rápido (WhatsApp) estén siempre al alcance, sobre todo en móvil.

## Alcance

- definir feature
- definir objetivo
- documentar requisitos
- documentar validación
- documentar cierre
- componente `Header` sticky con logo, navegación principal y CTA "Pedir presupuesto"
- comportamiento del header: transparente sobre el hero (cuando la página lo solicita) y sólido tras hacer scroll
- submenú de Servicios (Reformas integrales, Cocinas, Baños, Viviendas, Locales, Interiorismo)
- menú móvil a pantalla completa, accesible por teclado
- componente `Footer` con navegación, servicios, contacto y enlaces legales
- barra inferior fija en móvil con "Presupuesto" y WhatsApp
- enlace "Saltar al contenido" y estructura de landmarks
- layout base que envuelve todas las páginas
- indicador de página activa en la navegación
- datos de contacto y navegación centralizados en un único archivo de configuración

## Fuera de alcance

- cambios no relacionados
- refactors generales sin necesidad
- mejoras de otra feature
- Hero y su contenido (FEATURE-003)
- banner de cookies y gestión de consentimiento
- contenido de las páginas legales (aviso legal, privacidad, cookies); solo se enlazan
- buscador, selector de idioma, área de cliente
- newsletter en el footer
- contenido real definitivo (logo, textos, datos de contacto): se usan placeholders configurables

## Requisitos funcionales

- la feature debe tener objetivo claro
- debe listar dependencias y rutas afectadas
- debe incluir criterios de aceptación
- debe incluir validación mínima
- el header debe ser sticky y mantener visible el botón "Pedir presupuesto" en desktop
- la página debe poder indicar si el header arranca en modo transparente (con hero) o sólido (sin hero)
- el header pasa de transparente a sólido al salir del primer tramo de la página, sin saltos visuales
- el menú de navegación principal incluye: Servicios (con submenú), Proyectos, Cómo trabajamos, Blog, Contacto y el CTA Presupuesto
- el enlace de la página actual se marca visualmente y con `aria-current="page"`
- el menú móvil se abre y se cierra con botón, con la tecla `Esc` y al navegar a otra página
- en móvil aparece una barra inferior fija con dos acciones: "Presupuesto" y WhatsApp
- la barra inferior no debe mostrarse en la página `/presupuesto` (evitar redundancia con el formulario)
- el footer incluye: logo y descripción corta, enlaces de navegación, listado de servicios, datos de contacto, redes sociales y enlaces legales
- los enlaces a rutas que aún no existen no deben romper la build (se resuelven con la configuración de navegación)

## Requisitos técnicos

- respetar los estándares del stack
- respetar arquitectura y reglas del proyecto
- documentarse antes de implementarse
- usar exclusivamente los tokens y componentes de FEATURE-001
- navegación, datos de contacto y enlaces legales definidos en un único archivo de configuración (fuente única de verdad)
- detectar el scroll del header con `IntersectionObserver` sobre un elemento centinela, no con listeners de scroll continuos
- JavaScript solo para: estado del header, menú móvil y barra inferior; el resto debe funcionar sin JS
- el menú desplegable de Servicios debe funcionar con hover y teclado en desktop, y como lista expandible en el menú móvil
- bloquear el scroll del fondo mientras el menú móvil está abierto y restaurarlo al cerrar
- reservar espacio inferior en la página cuando la barra móvil está visible, para que no tape contenido ni el footer
- enlace de WhatsApp con formato `https://wa.me/<número>` y mensaje inicial opcional configurable

## Dependencias

- README
- ARCHITECTURE
- TECH-STACK
- DEVELOPMENT-RULES
- FEATURE-001 (sistema de diseño base)

## Componentes afectados

Nuevos:

- `Header`
- `NavMenu` (desktop, con submenú de Servicios)
- `MobileMenu`
- `Footer`
- `MobileActionBar`
- `SkipLink`
- layout base de página

Reutilizados de FEATURE-001:

- `Container`
- `Button`
- `Text`

Archivos de configuración:

- configuración del sitio (nombre, navegación, servicios, contacto, redes, enlaces legales)

## Rutas afectadas

- todas las rutas públicas (el layout las envuelve)
- `/presupuesto` (la barra móvil se oculta aquí)
- `/design-system` (puede usar el layout o mantenerse aislado; decidir al implementar)

Rutas enlazadas desde la navegación (pueden no existir aún):

- `/servicios` y sus subpáginas
- `/proyectos`
- `/como-trabajamos`
- `/presupuesto`
- `/contacto`
- `/blog`
- páginas legales (aviso legal, privacidad, cookies)

## Datos necesarios

- logo (provisional si no existe)
- nombre comercial
- teléfono y número de WhatsApp
- email
- dirección y zona de trabajo
- horario de atención
- redes sociales
- datos legales de la empresa para el footer (razón social, CIF)
- mensaje inicial de WhatsApp

## UX

- header discreto y ligero; el protagonismo lo tiene el contenido
- sobre el hero: fondo transparente y texto claro; tras el scroll: fondo crema con borde fino inferior y texto oscuro
- el CTA "Pedir presupuesto" usa el color de acento y es el único elemento destacado del header
- transición del header de unos 300 ms, sin parpadeos
- submenú de Servicios claro y compacto, con los seis servicios
- menú móvil a pantalla completa con enlaces grandes, el CTA visible y los datos de contacto rápidos
- barra inferior móvil con dos botones de tamaño táctil cómodo, uno primario (Presupuesto) y uno secundario (WhatsApp)
- footer ordenado en columnas, con el contacto fácil de encontrar y el CTA final de presupuesto

## Responsive

- enfoque mobile-first
- móvil (hasta 1023 px): logo, botón de menú y barra inferior fija
- desktop (desde 1024 px): navegación horizontal completa y CTA en el header; sin barra inferior
- el footer pasa de una columna en móvil a varias columnas en desktop
- objetivos táctiles de al menos 44 x 44 px
- respetar las zonas seguras en móviles con notch o barra inferior del sistema (`safe-area-inset`)
- probar en 360, 390, 768, 1024 y 1440 px de ancho

## Accesibilidad

- semántica HTML
- labels correctos
- foco visible
- contraste adecuado
- landmarks correctos: `header`, `nav` (con `aria-label`), `main`, `footer`
- enlace "Saltar al contenido" visible al recibir foco
- botón del menú móvil con `aria-expanded`, `aria-controls` y etiqueta clara
- menú móvil con foco atrapado mientras está abierto, cierre con `Esc` y devolución del foco al botón al cerrar
- contenido de fondo inactivo mientras el menú móvil está abierto
- submenú de Servicios operable con teclado (apertura, navegación con flechas o tabulador, cierre con `Esc`)
- contraste suficiente del texto claro sobre el hero transparente (prever un degradado oscuro sutil bajo el header si hace falta)
- `aria-current="page"` en el enlace activo
- la barra inferior móvil y sus botones con etiquetas accesibles

## SEO

- metadata
- headings
- URLs limpias
- structured content
- enlaces de navegación como `<a>` reales con rutas limpias (sin JS obligatorio para navegar)
- datos estructurados `Organization` o `LocalBusiness` con nombre, contacto y redes, a partir de la configuración
- el logo no debe ser el `h1` de las páginas; el `h1` pertenece al contenido
- enlaces internos coherentes entre navegación principal y footer
- `rel="noopener"` y `target="_blank"` solo donde corresponda (redes sociales, WhatsApp)

## Performance

- optimización de carga
- evitar JS innecesario
- optimizar imágenes
- logo en SVG
- sin librerías de menú o animación externas
- sin listeners de scroll continuos (usar `IntersectionObserver`)
- evitar saltos de layout (CLS) al pasar el header de transparente a sólido y al aparecer la barra móvil
- iconos en SVG inline o sprite, solo los necesarios

## Seguridad

- validar inputs
- proteger datos sensibles
- no exponer secretos
- sin formularios en esta feature
- enlaces externos con `rel="noopener noreferrer"`
- teléfono, email y número de WhatsApp son datos públicos de negocio; no incluir datos personales de empleados

## Criterios de aceptación

- la feature cumple su objetivo
- no rompe otras partes relevantes
- la validación se ha hecho
- la documentación está actualizada
- el header es sticky y el CTA "Pedir presupuesto" siempre es visible en desktop
- el header cambia de transparente a sólido al hacer scroll en páginas con hero, y es sólido desde el inicio en páginas sin hero
- el menú móvil se abre, se cierra (botón, `Esc`, navegación), atrapa el foco y bloquea el scroll del fondo
- la barra inferior móvil aparece en móvil, no tapa contenido, y se oculta en `/presupuesto`
- el footer muestra todos los bloques definidos y sus enlaces funcionan o apuntan a rutas previstas sin romper la build
- el enlace activo se marca correctamente
- toda la navegación es operable solo con teclado
- navegación, contacto y legales salen de un único archivo de configuración
- build, lint y typecheck pasan sin errores

## Tests necesarios

- tests unitarios o de integración según la feature
- validación manual de flujo principal
- render de `Header`, `Footer` y `MobileActionBar` con la configuración de ejemplo
- el enlace activo recibe `aria-current="page"`
- el menú móvil abre y cierra con botón y con `Esc`, y devuelve el foco al botón
- el header cambia de estado al cruzar el centinela de scroll
- la barra móvil no se renderiza en `/presupuesto`
- revisión manual en móvil, tablet y desktop
- navegación completa por teclado, incluido el submenú de Servicios
- prueba con lector de pantalla del menú móvil
- comprobación de contraste con herramienta (por ejemplo Lighthouse o axe), también con el header transparente sobre una imagen

## Posibles riesgos

- sobrecarga de contenido
- cambios de diseño no alineados
- requisitos ambiguos
- mala legibilidad del header transparente sobre imágenes de hero muy claras o cambiantes
- trampas de foco o scroll bloqueado si el menú móvil se implementa mal
- la barra inferior móvil puede chocar con barras del navegador, banner de cookies o el teclado en pantalla
- enlazar a rutas inexistentes y generar errores 404 durante el desarrollo
- datos de contacto o legales aún no definidos, que bloqueen el cierre del footer

## Dependencias con otras features

- depende de FEATURE-001 (sistema de diseño base)
- FEATURE-003 (Hero) depende de esta: el hero declara que el header debe arrancar en modo transparente
- la futura feature de banner de cookies deberá convivir con la barra inferior móvil
- el formulario multi-step de Presupuesto requiere que la barra móvil se oculte en su ruta
- todas las páginas dependen de esta feature para su estructura general

## Estado

PLANNED

## Feature log

- Feature: FEATURE-002 Layout global (Header, Footer y navegación)
- Estado: PLANNED
- Objetivo: header sticky, menú móvil, footer y barra de acción fija en móvil
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
- Siguiente paso: FEATURE-003 Hero