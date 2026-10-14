# Development Rules

## 1. Objetivo

Estas reglas definen cómo debe trabajarse en el repositorio para que el proyecto siga siendo predecible, revisable y mantenible.

## 2. Reglas generales

- No se debe empezar a modificar código sin leer primero la documentación relevante.
- No se deben crear archivos nuevos sin necesidad.
- No se deben mezclar cambios no relacionados.
- No se deben introducir dependencias sin justificación técnica y documentada.
- No se debe hacer refactor innecesario.
- No se debe cambiar la arquitectura sin ADR o decisión documentada.

## 3. Flujo obligatorio por feature

1. Leer README
2. Leer ARCHITECTURE
3. Leer TECH-STACK
4. Leer la feature en curso
5. Revisar el código relacionado
6. Consultar documentación oficial si hay una tecnología nueva o un comportamiento incierto
7. Definir plan
8. Implementar
9. Validar
10. Documentar
11. Cerrar

## 4. Organización de trabajo

El trabajo se organiza por features. Cada feature debe tener:

- identificador
- objetivo
- requisitos
- alcance
- riesgos
- pruebas
- criterios de aceptación
- estado

## 5. Modificación de archivos

Antes de modificar un archivo, la IA debe saber:

- para qué existe
- qué dependencia tiene con otras partes del proyecto
- si afecta SEO, diseño, accessibility o performance
- si se requiere documentación adicional

## 6. Revisión de impacto

Cada cambio debe responder:

- ¿Qué afecta?
- ¿Qué no afecta?
- ¿Qué riesgos de regresión aparecen?
- ¿Qué validaciones son necesarias?
- ¿Qué documentación hay que actualizar?

## 7. Validación mínima

Toda feature debe validar al menos:

- build
- lint
- typecheck
- tests relevantes
- responsive básico
- validación del flujo principal
- accesibilidad mínima
- comprobación SEO relevante

## 8. Control de dependencias

Se debe evitar:

- paquetes sin uso claro
- duplicación funcional
- frameworks o librerías añadidas por hábito
- dependencias para un problema que puede resolverse con código simple

## 9. Sistema de cambios

Los cambios relevantes deben dejarse registrados en:

- CHANGELOG.md
- feature log
- ADR si cambia una decisión importante

## 10. Git y flujo de trabajo

- trabajar con branches por feature
- no mezclar cambios sin relación
- commits pequeños y específicos
- PR o revisión antes del cierre cuando aplique
- no hacer commit gigantes con 30 cambios no relacionados

## 11. Control de calidad

Se debe evitar:

- dejar warnings ocultos
- solución que “parece funcionar” sin validación
- aceptar cambios con tests insuficientes
- cerrar una feature sin comprobar comportamiento real

## 12. Reglas de cierre

Una feature solo termina como DONE cuando:

- cumple sus criterios de aceptación
- la validación se ha realizado
- la documentación se ha actualizado
- no queda tech debt no justificado
- hay evidencia del resultado

## 13. Principio final

El desarrollo debe ser controlado, documentado y reversible. La IA debe trabajar como un equipo cuidadoso, no como un patch improvisado.
