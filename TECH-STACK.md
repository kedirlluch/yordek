# Technical stack

## 1. Objetivo de la decisión

Definir el stack recomendado para la web de LLUCH & YUCH sin sobreingeniería ni dependencias innecesarias. La decisión debe basarse en documentación oficial y en el tipo de producto: sitio web profesional, de marketing y captación de leads.

## 2. Decisiones principales

### 2.1 Framework

- Opción recomendada: Next.js
- Motivo: es el framework recomendado por la documentación oficial de Next.js para aplicaciones React modernas, con App Router, optimizaciones de rendimiento, routing por archivos, soporte de imágenes, SEO y despliegue profesional.
- Fuente oficial consultada: Next.js Docs, React Docs, Vercel Docs

### 2.2 React

- Opción recomendada: React 19 compatible con Next.js
- Motivo: la arquitectura oficial de React y Next.js está alineada con el modelo de componentes y Server Components / Client Components. Esto permite construir una web moderna sin necesidad de un front-end manual más complejo.
- Fuente oficial consultada: React Docs

### 2.3 TypeScript

- Opción recomendada: TypeScript
- Motivo: reduce errores de runtime, mejora la mantenibilidad del proyecto, encaja con Next.js y ayuda a mantener la base estructurada para que otra IA o desarrollador trabaje con menos riesgo.
- Fuente oficial consultada: TypeScript Handbook y la documentación de Next.js

### 2.4 Styling

- Opción recomendada por defecto: CSS Modules + tokens de diseño y diseño sistemático
- Alternativa evaluada: Tailwind
- Decisión: Tailwind puede añadirse si el diseño requiere rapidez de prototipado o una convención visual muy estructurada; sin embargo, no es obligatorio como base por defecto.
- Motivo: el proyecto necesita ser simple, mantenible y profesional. CSS Modules y tokens de diseño ofrecen claridad y evitamos añadir dependencia más compleja si no hace falta.

### 2.5 Gestión de contenido

- Opción recomendada: contenido estructurado en archivos y/o MDX para la fase inicial
- Motivo: permite rápido despliegue, control del contenido, buena SEO, sin depender de un CMS para empezar
- Ampliación futura: posible CMS si el contenido crece

### 2.6 Formularios

- Opción recomendada: validación del lado del cliente y del servidor, con lógica de lead handling segura
- Motivo: la conversión depende de formularios fiables y sin spam

### 2.7 Validación

- Opción recomendada: schema validation con herramientas modernas y validación explícita del servidor
- Motivo: ayuda a mantener seguridad y consistencia sin sobrecomplicar la capa de negocio

### 2.8 SEO

- Opción recomendada: metadata, structured data, sitemaps, robots, canonical, URLs limpias, contenido objetivo por servicio y localización
- Motivo: el proyecto depende de conseguir clientes locales y servicios concretos. El SEO debe ser una arquitectura, no un refuerzo final.

### 2.9 Imágenes

- Opción recomendada: optimización nativa de Next.js con `next/image` y formatos modernos
- Motivo: mejora rendimiento y visualización profesional

### 2.10 Analytics

- Opción recomendada: Analytics básico en la capa de hosting plus event tracking mínimo
- Motivo: medir conversiones sin introducir una infraestructura pesada

### 2.11 Testing

- Opción recomendada: pruebas unitarias + pruebas de interacción + validación visual previa a cierre de feature
- Motivo: la documentación exige control de calidad antes de DONE

### 2.12 Git y GitHub

- Opción recomendada: GitFlow simple o feature branches
- Motivo: hace el flujo claro y reduce cambios masivos

### 2.13 Deployment

- Opción recomendada: Vercel para este stack
- Motivo: es el entorno natural para Next.js, con despliegue rápido, preview environments, env vars y compatibilidad con la documentación oficial
- Alternativa: despliegue Node.js/Docker si se requiere autoservicio o infraestructura propia

### 2.14 Variables de entorno

- Opción recomendada: `.env.example`, variables por entorno y validación explícita
- Motivo: evita secretos y configuración suelta

### 2.15 Seguridad

- Opción recomendada: validación estricta, secretos no expuestos, CSRF/post mail validation y headers del framework/hosting
- Motivo: la web hará captación de leads, por lo que la seguridad y la validación de formularios son primordiales

### 2.16 Performance

- Opción recomendada: foco en Core Web Vitals, fuentes, imágenes, JS/CSS limitados y mejora continua
- Motivo: SEO y UX dependen de la velocidad

## 3. Stack no recomendado por defecto

Se descarta por ahora:

- arquitecturas demasiado complejas de CMS
- librerías de UI grandes si no son necesarias
- soluciones de back-end pesadas con paneles complejos
- más de una capa de contenido/content model si no se necesita
- por una web local con foco de lead generation, la sobreingeniería sería un riesgo real

## 4. Stack propuesto inicial

- Next.js 16.x compatible con App Router
- React 19.x
- TypeScript 5.x
- CSS Modules / design tokens
- ESLint
- Next.js image optimization
- Git + GitHub
- Vercel deployment
- Testing mínimo de feature con enfoque realista

## 5. Recomendación final

El stack recomendado es simple, moderno y profesional: Next.js + React + TypeScript + diseño modular + validación + SEO + despliegue en Vercel. Esto cubre la necesidad del negocio sin generar bloat ni estabilidad innecesaria.

## 6. Documentación oficial base consultada

- https://nextjs.org/docs
- https://react.dev/learn
- https://www.typescriptlang.org/docs/
- https://vercel.com/docs
- https://nextjs.org/docs/app/building-your-application/deploying

Estas fuentes son la referencia principal para futuras decisiones técnicas.
