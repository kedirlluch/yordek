# Architecture

## 1. Objetivo

Definir la base arquitectónica del proyecto para que cualquier IA o desarrollador pueda entender qué se está construyendo, cómo está estructurado y qué decisiones son vinculantes.

## 2. Principios del proyecto

- Simplicidad por defecto
- Profesionalismo antes que sofisticación innecesaria
- Documentación como fuente de verdad
- Features como unidad de trabajo
- Cambios pequeños, medibles y documentados
- SEO integrado desde el inicio
- UX y accesibilidad como parte del diseño, no como añadidos
- evitardependencies no justificadas

## 3. Visión de arquitectura

El proyecto se construye sobre Next.js con React y TypeScript. La arquitectura debe permitir:

- páginas de servicio clave
- landing pages de localización
- marketing local y conversiones
- eventual ampliación de servicios
- mantenimiento claro y escalable

La estructura debe priorizar claridad sobre abstracción excesiva.

## 4. Tipo de aplicación

Se trata de un sitio web de marketing y lead generation con contenido estructurado, SEO y formularios de contacto.

No es una app de gestión compleja ni un sistema de back office. La complejidad principal está en:

- estructura de contenido
- UX orientada a conversión
- SEO local y de servicio
- validación de formularios
- calidad de diseño y rendimiento

## 5. Arquitectura técnica recomendada

### Base

- Next.js
- React
- TypeScript

### Estrategia de rendering

Se recomienda usar la arquitectura moderna de Next.js con App Router, porque la documentación oficial del framework la presenta como la opción recomendada para aplicaciones modernas con React. Esto permite mantener una estructura limpia, rutas por file system y componentes server/client según necesite cada parte.

### Regla clave

La web debe seguir una estructura basada en rutas y features, no en una jerarquía de componentes improvisada. El desarrollo se hará por feature, con un documento por feature y validación por criterios de aceptación.

## 6. Diseño de contenido

El contenido se separa en tres capas:

- Marca: LLUCH & YUCH
- Servicios: alisado, pintura, reformas y complementarios
- Localización: Valencia y ampliación futura por zona

Esto permite añadir servicios sin romper la lógica del sitio.

## 7. Arquitectura de URLs

La URL debe reflejar la estructura de contenido:

- /
- /alisado-paredes
- /alisado-techos
- /pintura-interior
- /pintura-viviendas
- /pintura-locales
- /servicios
- /contacto
- /sobre-nosotros
- /valencia

La estrategia SEO debe evitar nombres artificiales y priorizar servicios reales y zonas reales.

## 8. Seguridad

La arquitectura de seguridad debe considerar:

- variables de entorno separadas por entorno
- no exponer secretos en frontend
- validación de formularios en servidor o endpoint seguro
- control de abuso y spam
- dependencias actualizadas
- headers de seguridad aplicados por el framework y el hosting

## 9. Rendimiento

La arquitectura deberá considerar desde el comienzo:

- optimización de imágenes
- carga de fuentes controlada
- CSS y JS mínimo necesario
- evitar scripts de terceros innecesarios
- SEO y rendimiento como factores estrechamente relacionados

## 10. Accesibilidad

La base debe incluir:

- HTML semántico
- color contrast adecuado
- navegación con teclado
- labels correctos en formularios
- foco visible
- imágenes con alt text apropiado
- estructura de headings consistente

## 11. Documentación como sistema de control

La documentación es parte de la arquitectura. El repo debe tener un contrato claro para cada cambio:

- README
- PROJECT
- ARCHITECTURE
- TECH-STACK
- AI-RULES
- DEVELOPMENT-RULES
- feature docs
- ADRs
- CHANGELOG

## 12. Sistema de features

Cada feature debe ser una unidad independiente con ámbito, requisitos, riesgos y criterios de aceptación. La arquitectura no permite que una feature se haga “a ojo” sin contrato.

## 13. Fuente de verdad

La información técnica debe vive en estos documentos:

- Arquitectura: ARCHITECTURE.md
- Stack: TECH-STACK.md
- Reglas IA: AI-RULES.md
- Reglas de trabajo: DEVELOPMENT-RULES.md
- Feature: feature document
- Decisiones: ADRs
- Historial: CHANGELOG.md

## 14. Decisiones importantes por registrar

Las decisiones clave no deben cambiarse silenciosamente. Deben dejarse registradas en ADRs y revisarse antes de cualquier cambio arquitectónico.

Ejemplos:

- App Router vs Pages Router
- styling strategy
- content management approach
- local SEO structure
- deployment target
- forms and lead generation approach

## 15. Estructura proyectada del repositorio

- /README.md
- /PROJECT.md
- /ARCHITECTURE.md
- /TECH-STACK.md
- /AI-RULES.md
- /DEVELOPMENT-RULES.md
- /ROADMAP.md
- /CHANGELOG.md
- /docs/adr/
- /docs/features/
- /app/
- /public/

## 16. Decisión documentada por referencia oficial

Se ha tenido en cuenta la documentación oficial actualizada de Next.js, React, TypeScript y Vercel. En particular, la documentación actual de Next.js recomienda el App Router, TypeScript y el flujo de desarrollo moderno con estructura de rutas por archivos y despliegue en Vercel o entornos Node.js/Docker. Esta decisión guía la arquitectura base, sin descartar ajustes cuando el proyecto avance.

## 17. Riesgos arquitectónicos principales a evitar

- sobreingeniería por una empresa local
- servicios demasiado amplios desde el inicio
- falta de SEO desde el primer diseño
- decisiones técnicas sin ADR
- contenido y marcas mezcladas
- dependencias innecesarias
- mezcla de diseño, contenido y lógica sin patrones claros

## 18. Estado de arquitectura

PLANNED -> READY -> IN PROGRESS -> READY FOR REVIEW -> DONE

La arquitectura base está en estado READY para iniciar desarrollo controlado del primer bloque funcional del proyecto.
