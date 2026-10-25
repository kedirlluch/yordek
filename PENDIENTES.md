# PENDIENTES

Datos que faltan. En la web salen como `[PENDIENTE…]` resaltado en amarillo (en el código, componente `<Pendiente>` o
`PENDIENTE` en `lib/site.ts`). **Mientras quede alguno visible, la web no está lista para publicar.**

Revisión del 20/10/2026: 37 marcadores distintos visibles en la web.

## 1. Visibles en la web: bloquean la publicación

### Datos del negocio
- [x] **Horario**: L–V 8:00–19:00; sábados, domingos u otras horas con cita previa por WhatsApp (25/10/2026) → `lib/site.ts` (`hours`)
- [x] **Zona**: Valencia ciudad y toda su área metropolitana, sin lista cerrada (25/10/2026) → `lib/site.ts` (`coverage`)
- [ ] **Datos fiscales**: titular (autónomo o sociedad), NIF/CIF y domicilio fiscal → `lib/site.ts` (`legal`). Salen en /aviso-legal/ y /politica-de-privacidad/. **Decisión 25/10/2026:** de momento no hay titular fiscal (ni autónomo ni sociedad); en producción esas filas no se muestran, en local y previews sale el marcador. La LSSI (art. 10) pide estos datos a cualquier web con actividad económica: rellenarlos en cuanto haya titular

### Textos sobre YordeK (en plural, como empresa: sin nombre ni «soy»)
- [x] 2 o 3 frases sobre cómo trabajáis → Home (S6 «Quiénes somos»), puestas el 25/10/2026 con la pintura por delante
- [x] Historia → /nosotros/: decidido no contar el origen (25/10/2026); la sección habla de preparar la pared antes de pintar

### Fotos reales (sin bancos de imágenes). Formatos y tamaños en FOTOS.md
- [ ] **Quitar las fotos de prueba** (`public/img/prueba/`, etiqueta "Foto de prueba") antes de pasar a `v2`. Se cambian en `lib/photos.ts`. Incluye las 5 de ambiente de Unsplash añadidas el 25/10/2026 (`paredLisa`, `localCuadros`, `comedor`, `paredAzul`, `dormitorio`)
- [ ] Hero de la Home: pared lisa recién terminada
- [ ] Alguien de YordeK trabajando (de espaldas o sin que importe quién sea) → Home (S6) y /nosotros/
- [ ] /quitar-gotele/ y /presupuesto-quitar-gotele/: pared a medio quitar el gotelé (mitad con gotelé, mitad lisa)
- [ ] /alisado-de-paredes/: techo o pared alisada con luz lateral
- [ ] /pintura-de-pisos/ y /presupuesto-pintura/: salón o habitación recién pintada
- [ ] /pintura-de-locales-comerciales/: local u oficina recién pintado
- [ ] /reparacion-de-paredes/: grieta antes y después
- [ ] Pares antes/después (mín. 4–6) → `beforeAfter` en Home y en cada servicio. Sin ellos esa sección no se muestra (no bloquea)

### Cómo trabajáis (FAQ y procesos)
- [x] **Método para quitar el gotelé**: según el estado de la pared y el acabado (pasta encima o quitarlo todo), sin detalles técnicos (25/10/2026)
- [x] Techos: sí, paredes y techos, cualquier tipo de gotelé (25/10/2026)
- [x] **Casa amueblada**: se puede vivir en casa; si hay que lijar mucho, sacar los muebles de esa habitación (25/10/2026)
- [x] **Plazos típicos**: sin cifras; estimación aproximada en la visita (25/10/2026)
- [x] **Compromiso de plazo**: fecha de inicio y estimación de días; aviso si algo cambia (25/10/2026)
- [x] Materiales y pintura: incluidos; si el cliente compra la pintura, se quita del presupuesto (25/10/2026)
- [x] Trabajo mínimo: trabajos pequeños, primero fotos por WhatsApp (25/10/2026)
- [x] Locales: fuera de horario y fin de semana con cita, y por zonas con el negocio abierto (25/10/2026)
- [x] Humedades: reparamos el daño; el origen lo tiene que solucionar otro antes (25/10/2026)

### Legales
- [x] Privacidad: solicitudes no contratadas, máximo 12 meses (25/10/2026)
- [ ] Privacidad: Web3Forms tiene los servidores en EE. UU. (su FAQ: «US-East Region»; ya puesto en la web el 25/10/2026). Falta confirmar el mecanismo de transferencia: firmar su DPA (web3forms.com/dpa, v1.0 del 13/07/2026) y comprobar si incluye cláusulas contractuales tipo. Ojo: su FAQ dice que no guarda envíos, pero su política de julio de 2026 parece decir que los guarda hasta 3 años
- [ ] Privacidad: confirmar el mecanismo de transferencia internacional de Vercel (EE. UU.)
- [ ] Revisión de aviso legal, privacidad y cookies por un profesional

## 2. Configuración técnica (no se ve, pero sin ello no funciona)
- [x] **Access key de Web3Forms** (puesta el 20/10/2026; falta la prueba real tras publicar) → `lib/site.ts` (`form.accessKey`). Crearla con el email que debe recibir las solicitudes. Sin ella el formulario muestra el error y pide llamar
- [ ] **ID de GTM** → `lib/tracking.ts`, y pasos de GA4 y Ads en TRACKING.md
- [x] Hosting: Vercel (rama `main` = producción; `v1` = respaldo de la web anterior)
- [x] Dominio: yordek.com
- [ ] ¿Adjuntar foto en el formulario? En Web3Forms es de pago. Mientras tanto se piden por WhatsApp (`form.acceptsPhoto = false`)

## 3. Frases que he redactado sin un dato tuyo: confirmar o quitar
No son datos inventados (cifras, reseñas, certificados), pero describen cómo trabajas y no me lo has confirmado:
- [x] /quitar-gotele/: "Quitar gotelé es el trabajo que más polvo levanta de los que hacemos" (confirmado 25/10/2026)
- [x] /pintura-de-pisos/: quitado "Primero techos y después paredes" (no hace falta explicarlo); se queda "hablamos de colores" (25/10/2026)
- [x] /pintura-de-locales-comerciales/: suavizado a "buscamos la pintura que más se acerque" (25/10/2026). En ADS.md se queda "con los colores de tu marca"
- [x] /reparacion-de-paredes/: grietas estructurales o por causas externas vuelven si no se arregla el origen (confirmado 25/10/2026)
- [x] /nosotros/: "No nos quedamos en pintar: hacemos todo lo necesario para que la pintura quede perfecta…" (confirmado 25/10/2026)
- [x] /gracias/: "Si ves una llamada del 699 64 52 65 o del 642 76 02 70, somos nosotros" (¿llamáis siempre desde esos números?) (confirmado 25/10/2026)
- [x] /politica-de-privacidad/: "No usamos tus datos para enviarte publicidad" (confirmado 25/10/2026)

## 4. Para convertir
- [ ] `public/og.png` y `app/icon.svg` con el logo nuevo (la web ya usa sus colores desde el 25/10/2026: ver DISENO.md)
- [ ] URL de Google Business Profile y, cuando las haya, reseñas reales que enlazar

## 5. Google Ads (ver ADS.md)
- [ ] Radio de la ubicación (km alrededor de Valencia) y presupuesto diario
- [ ] CPC máximo para la fase inicial y valor de cada conversión
- [ ] Vincular Google Business Profile para la extensión de ubicación
- [ ] ¿Landing /presupuesto-alisado/ para el grupo «Alisar paredes»? (fase 2)

## 6. SEO y ficha de Google (ver GBP.md)
- [ ] Crear y verificar Google Business Profile → su URL va al schema (`sameAs`) en `lib/schema.ts`
- [ ] Logo y foto para el schema (`image`, `logo`)
- [ ] Fecha de apertura del negocio para la ficha
- [ ] Bing Places y Apple Business Connect

## 7. Menores
- [ ] ¿Versión en valenciano? (recomendado: no, de momento)
- [ ] El 699 64 52 65 es WhatsApp normal (25/10/2026): pasarlo a WhatsApp Business y activar mensajes de bienvenida y fuera de horario (encaja con el horario flexible con cita)
- [x] Email del formulario: se queda el de iCloud (25/10/2026)
