# PENDIENTES

Datos que faltan. En la web salen como `[PENDIENTE…]` resaltado en amarillo (en el código, componente `<Pendiente>` o
`PENDIENTE` en `lib/site.ts`). **Mientras quede alguno visible, la web no está lista para publicar.**

Revisión del 20/10/2026: 37 marcadores distintos visibles en la web.

## 1. Visibles en la web: bloquean la publicación

### Datos del negocio
- [ ] **Días del horario** (8:00–19:00 ¿L–V? ¿sábados?) → `lib/site.ts` (`hours.days`). Sale en el pie de **todas** las páginas, en /contacto/ y falta en el schema (`openingHoursSpecification`)
- [ ] **Municipios** de "Valencia y alrededores" → `lib/site.ts` (`municipalities`). Sale en Home (FAQ), /nosotros/, /contacto/ y alimenta el schema `areaServed`
- [ ] **Datos fiscales**: titular (autónomo o sociedad), NIF/CIF y domicilio fiscal → `lib/site.ts` (`legal`). Salen en /aviso-legal/ y /politica-de-privacidad/

### Textos sobre YordeK (en plural, como empresa: sin nombre ni «soy»)
- [ ] 2 o 3 frases sobre cómo trabajáis → Home (S6 «Quiénes somos»)
- [ ] Historia en 3 o 4 frases: cómo nació YordeK y por qué gotelé y pintura → /nosotros/

### Fotos reales (sin bancos de imágenes). Formatos y tamaños en FOTOS.md
- [ ] **Quitar las fotos de prueba** (`public/img/prueba/`, etiqueta "Foto de prueba") antes de que se vean en producción (`v2`). Se cambian en `lib/photos.ts`
- [ ] Hero de la Home: pared lisa recién terminada
- [ ] Alguien de YordeK trabajando (de espaldas o sin que importe quién sea) → Home (S6) y /nosotros/
- [ ] /quitar-gotele/ y /presupuesto-quitar-gotele/: pared a medio quitar el gotelé (mitad con gotelé, mitad lisa)
- [ ] /alisado-de-paredes/: techo o pared alisada con luz lateral
- [ ] /pintura-de-pisos/ y /presupuesto-pintura/: salón o habitación recién pintada
- [ ] /pintura-de-locales-comerciales/: local u oficina recién pintado
- [ ] /reparacion-de-paredes/: grieta antes y después
- [ ] Pares antes/después (mín. 4–6) → `beforeAfter` en Home y en cada servicio. Sin ellos esa sección no se muestra (no bloquea)

### Cómo trabajáis (FAQ y procesos)
- [ ] **Método para quitar el gotelé**: ¿rascado, tendido de pasta encima o según el caso? → /quitar-gotele/ (paso 3 del proceso y FAQ)
- [ ] ¿Quitáis el gotelé de los **techos**? ¿Algún tipo de gotelé que no se haga? → /quitar-gotele/ FAQ
- [ ] **Casa amueblada**: ¿se trabaja con la casa habitada? ¿Hay que vaciar habitaciones? → Home FAQ, /quitar-gotele/ FAQ, /pintura-de-pisos/ FAQ
- [ ] **Plazos típicos**: quitar gotelé de un piso de 80 m² y pintar un piso de 3 habitaciones → Home FAQ, /quitar-gotele/ FAQ, /pintura-de-pisos/ FAQ
- [ ] **Compromiso de plazo** que se puede prometer → Home (S5 "Plazo")
- [ ] ¿El presupuesto **incluye materiales y pintura**? → Home FAQ
- [ ] ¿Hay **trabajo mínimo**? → /alisado-de-paredes/ FAQ, /reparacion-de-paredes/ FAQ
- [ ] Locales: ¿se trabaja **fuera del horario** de apertura, en fin de semana o **por zonas con el negocio abierto**? → /pintura-de-locales-comerciales/ (proceso y 2 FAQ)
- [ ] ¿Se reparan **humedades**? → /reparacion-de-paredes/ FAQ

### Legales
- [ ] Privacidad: plazo de conservación de solicitudes no contratadas (p. ej. 12 meses)
- [ ] Privacidad: ubicación de los servidores de Web3Forms y mecanismo de transferencia internacional
- [ ] Privacidad: confirmar el mecanismo de transferencia internacional de Vercel (EE. UU.)
- [ ] Revisión de aviso legal, privacidad y cookies por un profesional

## 2. Configuración técnica (no se ve, pero sin ello no funciona)
- [x] **Access key de Web3Forms** (puesta el 20/10/2026; falta la prueba real tras publicar) → `lib/site.ts` (`form.accessKey`). Crearla con el email que debe recibir las solicitudes. Sin ella el formulario muestra el error y pide llamar
- [ ] **ID de GTM** → `lib/tracking.ts`, y pasos de GA4 y Ads en TRACKING.md
- [x] Hosting: Vercel (rama `v2` = producción; `main` y `v1` = respaldo de la web anterior). Cambios por rama aparte + merge a `v2`
- [x] Dominio: yordek.com
- [ ] ¿Adjuntar foto en el formulario? En Web3Forms es de pago. Mientras tanto se piden por WhatsApp (`form.acceptsPhoto = false`)

## 3. Frases que he redactado sin un dato tuyo: confirmar o quitar
No son datos inventados (cifras, reseñas, certificados), pero describen cómo trabajas y no me lo has confirmado:
- [ ] /quitar-gotele/: "Quitar gotelé es el trabajo que más polvo levanta de los que hacemos"
- [ ] /pintura-de-pisos/: "Primero techos y después paredes" y "Recorremos el piso contigo… hablamos de colores"
- [ ] /pintura-de-locales-comerciales/: "Dinos el código de color o tráenos una muestra y lo pintamos igual" (y la misma idea en su FAQ y en ADS.md)
- [ ] /reparacion-de-paredes/: "Si vemos que una grieta puede venir de un problema del edificio, te lo diremos antes de taparla"
- [ ] /gracias/: "Si ves una llamada del 699 64 52 65 o del 642 76 02 70, somos nosotros" (¿llamáis siempre desde esos números?)
- [ ] /politica-de-privacidad/: "No usamos tus datos para enviarte publicidad"

## 4. Para convertir
- [ ] Logo y colores definitivos (ahora hay un logotipo provisional) → también `public/og.png` y `app/icon.svg`
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
- [ ] ¿El 699 64 52 65 es WhatsApp Business? Activar el mensaje de bienvenida
- [ ] ¿Email del formulario definitivo (iCloud) o `info@yordek.com`?
