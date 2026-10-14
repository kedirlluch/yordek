# AI Rules

## 1. Propósito

Este documento define las reglas obligatorias para cualquier IA que trabaje sobre este repositorio. Su función no es improvisar ni "hacer que funcione" a toda costa; su función es trabajar dentro del contrato técnico del proyecto.

## 2. Regla fundamental

Toda modificación debe seguir este flujo:

1. Leer la documentación relevante
2. Entender el contexto del proyecto
3. Investigar documentación oficial actualizada
4. Planificar el cambio
5. Implementar con el menor alcance posible
6. Probar la parte afectada
7. Revisar posibles efectos secundarios
8. Documentar cambios
9. Cerrar la feature si cumple criterios

Nunca se debe hacer:

- improvisar
- reescribir sin necesidad
- instalar librerías sin justificar la necesidad
- cambiar arquitectura sin aprobación
- crear archivos nuevos sin motivo
- ocultar errores o warnings
- mezclar varias features en un mismo cambio
- cerrar una feature sin validación real

## 3. Antes de modificar cualquier cosa

La IA debe revisar antes de tocar código o documentación:

- README.md
- PROJECT.md
- ARCHITECTURE.md
- TECH-STACK.md
- DEVELOPMENT-RULES.md
- la feature afectada
- la documentación técnica relacionada

Si no se entiende un punto, debe investigar antes de editar.

## 4. Documentación oficial

Cuando una feature o decisión implique tecnologías externas, la IA debe:

1. consultar primero la documentación oficial
2. contrastar patrones recomendados
3. aplicar la solución más simple y compatible
4. documentar la decisión si cambia el estado del proyecto

No se debe inventar APIs, patrones ni mejores prácticas sin base documental.

## 5. Prohibido

- inventar archivos o rutas sin necesidad
- reescribir componentes sin análisis previo
- cambiar un stack sin ADR o documento que lo justifique
- introducir dependencias de forma superficial
- eliminar funcionalidad existente sin comprobar redes
- crear código muerto o duplicado
- hacer refactors no relacionados
- mezclar un cambio de estilo con una feature funcional
- ignorar errores de build, lint o typecheck
- registrar una feature como DONE sin criterios de aceptación

## 6. Registro de cambios

Toda feature que se cierre debe dejar constancia en:

- CHANGELOG.md
- feature log correspondiente
- documentos afectados, si procede

## 7. Scope y responsabilidad

La IA debe mantener el alcance de cada feature. Si el problema requiere más trabajo del previsto, debe:

- documentar la ampliación
- justificarla
- no mezclarla con otra feature sin avisar

## 8. Estado de features

Las features solo pueden estar en estos estados:

- PLANNED
- READY
- IN PROGRESS
- BLOCKED
- READY FOR REVIEW
- DONE

No se puede marcar una feature como DONE por apariencia.

## 9. Validación mínima requerida

Antes de cerrar una feature, la IA debe comprobar lo que aplique:

- build
- lint
- typecheck
- tests relevantes
- comportamiento responsive
- objetivos SEO mínimos
- accesibilidad básica

## 10. Principio de no sobreingeniería

La solución debe ser:

- simple
- profesional
- clara
- escalable
- sin exceso de capas ni dependencias

Si una solución simple funciona, se prefiere a una más compleja.

## 11. Reglas finales

- no se rompe nada sin justificarlo
- no se improvisa el diseño
- no se cambia la arquitectura silenciosamente
- no se cambia la tecnología por “hay una mejor forma”
- no se trabaja sin read -> understand -> plan -> validate -> document

## 12. Regla de cierre

Una feature solo puede cerrarse cuando:

- el trabajo está documentado
- la validación está hecha
- el impacto está entendido
- los criterios de aceptación se cumplen
- el changelog se ha actualizado
