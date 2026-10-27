# FOTOS

Huecos de imagen de la web y el formato de cada uno. Última actualización: 24/10/2026.

**Cómo entregarlas:** deja las fotos originales del móvil, sin recortar ni comprimir, en `fotos-originales/`. Esa carpeta no se sube a git. Desde ahí se recortan y se convierten a WebP en `public/img/`, con un tamaño para móvil y otro para ordenador.

**Una misma foto sirve para móvil y ordenador**: cada hueco tiene la misma proporción en ambos y solo cambia el tamaño.

**En horizontal**, salvo la vertical para /nosotros/. La cámara del móvil saca 4:3 por defecto, que es justo la proporción de casi todos los huecos.

**Lo mínimo para publicar:** el hero de la Home, el de quitar gotelé, el de pintura de pisos, el de alisado, una vertical y una cuadrada de alguien trabajando (6 fotos). Las landings reutilizan las de los servicios.

## Fotos de prueba (ahora en la web)

Mientras no estén las reales, la web usa fotos de prueba **con la etiqueta amarilla "Foto de prueba"**. **No se puede publicar en `main` con ellas**: no son trabajos propios.

- Están en `public/img/prueba/` y se eligen en `lib/photos.ts`, un solo archivo para toda la web.
- La del hero de la Home es la imagen que dejaste en `public/img/`. La he movido a `fotos-originales/home-hero-usuario.png` porque pesaba 5 MB. Si es un trabajo real tuyo, se puede pasar a `fotos/` y quitarle la etiqueta.
- Las demás son de Flickr y StockSnap con licencia libre (CC0 o CC BY). Las CC BY obligan a citar al autor si se usan en la web publicada.
- El montaje de `/quitar-gotele/` (mitad gotelé, mitad lisa) lo genera `scripts/fotos.py` a partir de dos fotos.

**Para poner una foto real:**
1. Copia el original a `fotos-originales/`.
2. En `scripts/fotos.py`, cambia su línea en `SLOTS`: pon el archivo nuevo y la carpeta `"fotos"` en lugar de `"prueba"`.
3. Ejecuta `python3 scripts/fotos.py`. Genera 480, 800 y 1200 px en WebP.
4. En `lib/photos.ts`, cambia la ruta a `/img/fotos/...`. La etiqueta desaparece sola.

| Archivo de prueba | Título | Autor | Licencia | Origen |
|---|---|---|---|---|
| `pintor-espaldas-a.jpg` | Guy Man | Michal Jarmoluk | CC0 | https://stocksnap.io/photo/guy-man-Q67DPDQSC1 |
| `pintor-espaldas-b.jpg` | Guy Man | Michal Jarmoluk | CC0 | https://stocksnap.io/photo/guy-man-GPENZWC6X4 |
| `dormitorio-a.jpg` | Freshly Painted Guest Bedroom | emily @ go haus go | BY | https://www.flickr.com/photos/60849758@N05/16211510800 |
| `dormitorio-b.jpg` | Freshly Painted Guest Bedroom | emily @ go haus go | BY | https://www.flickr.com/photos/60849758@N05/16397995862 |
| `pared-blanca-hornacina.jpg` | Alcove, White | Orin Zebest | BY | https://www.flickr.com/photos/33917831@N00/505235846 |
| `sala-reuniones.jpg` | Round Table, chairs, TV monitor, conference room, 2nd floor, Studio C, Microsoft, Redmond, Washington, USA | Wonderlane | CC0 | https://www.flickr.com/photos/71401718@N00/5526839767 |
| `pared-lisa.jpg` | white plastered wall 2 | palmerkim29 | BY | https://www.flickr.com/photos/13993494@N06/7059375813 |
| `pared-gotele.jpg` | Stucco Plaster Wall Texture | shaire productions | BY | https://www.flickr.com/photos/9822107@N08/7401494830 |
| `pared-alisada-llana.jpg` | Bizarre Construction Problem | Uriel 1998 | BY | https://www.flickr.com/photos/21369563@N00/2685731700 |
| `pared-agrietada.jpg` | Cracked wall | árticotropical | BY | https://www.flickr.com/photos/8581973@N02/521943309 |
| `habitacion-parcheada.jpg` | Baby Room, sanded walls | Qole Pejorian | BY | https://www.flickr.com/photos/36824782@N00/120869477 |
| `picsum-954.jpg` → `pared-lisa-hueco` | Pared blanca con hueco de escalera | Todd Quackenbush | Unsplash | https://unsplash.com/photos/JJB_K8aCPU4 |
| `picsum-834.jpg` → `local-cuadros` | Local con cuadros en la pared | The Anchor | Unsplash | https://unsplash.com/photos/6hgsktgpfIE |
| `picsum-625.jpg` → `comedor-luz` | Comedor luminoso | Breather | Unsplash | https://unsplash.com/photos/DEdM9Vs6s8w |
| `picsum-1068.jpg` → `pared-azul` | Pared azul con mesa blanca | Padurariu Alexandru | Unsplash | https://unsplash.com/photos/iNmouRApXYM |
| `picsum-691.jpg` → `dormitorio-taza` | Dormitorio con luz natural | David Mao | Unsplash | https://unsplash.com/photos/m0l5J8Lqnzo |

Las cinco `picsum-*` (25/10/2026) las eligió la skill de diseño para dar ambiente mientras no haya fotos propias: solo interiores, nunca fachadas ni exteriores. Se usan en "Qué incluye" de los servicios (`paredLisa`), en /nosotros/ y en el CTA final de las landings. La licencia de Unsplash no obliga a citar, pero **tampoco son trabajos propios**: llevan la etiqueta y hay que quitarlas antes de publicar.

## Imágenes generadas con IA (en la web, sin etiqueta de prueba)

Imágenes de **ambiente** generadas con IA (Higgsfield, GPT Image 2.5, 28/10/2026). No son trabajos propios: nunca se usan en antes/después ni como prueba de un trabajo. Originales en `fotos-originales/generadas/` (no se suben a git); se procesan con `scripts/fotos.py` y salen en `public/img/generadas/`.

| Archivo | Qué es | Dónde | Fecha |
|---|---|---|---|
| `home-hero.png` → `home-hero` | Pared lisa blanca con una silla, suelo de terrazo | Hero de la Home | 28/10/2026 |
| `salon-pintado.png` → `salon-pintado` | Salón recién pintado, suelo de terrazo | Hero de `/pintura-de-pisos/` y de `/presupuesto-pintura/` | 28/10/2026 |
| `trabajando.png` → `trabajando-vertical`, `trabajando-cuadrada` | Pintor de espaldas con rodillo y alargador | Home "Quiénes somos" y `/nosotros/` | 28/10/2026 |
| `local-pintado.png` → `local-pintado` | Local vacío en blanco con pared azul | Hero de `/pintura-de-locales-comerciales/` | 28/10/2026 |
| `alisado.png` → `alisado` | Pared y techo alisados con luz rasante | Hero de `/alisado-de-paredes/` | 28/10/2026 |
| `reparacion.png` → `reparacion` | Pared con grietas y agujeros plastecidos | Hero de `/reparacion-de-paredes/` | 28/10/2026 |
| `pared-lisa.png` → `pared-lisa` | Pared blanca con hornacina | "Qué incluye" de los servicios, `/nosotros/`, CTA final de `/presupuesto-quitar-gotele/` | 28/10/2026 |
| `comedor.png` → `comedor` | Comedor recién pintado | CTA final de `/presupuesto-pintura/` | 28/10/2026 |
| `quitar-gotele.png` → `quitar-gotele` | Pared a medio quitar: mitad gotelé, mitad lisa | Hero de `/quitar-gotele/` y `/presupuesto-quitar-gotele/` | 28/10/2026 |
| `antes-gotele.png` + `despues-gotele.png` | Par antes/después de gotelé (el después es una edición del antes, mismo encuadre) | Home, `/quitar-gotele/`, `/presupuesto-quitar-gotele/` | 28/10/2026 |
| `antes-grieta.png` + `despues-grieta.png` | Par antes/después de grietas (ídem) | Home y `/reparacion-de-paredes/` | 28/10/2026 |

**Los antes/después generados llevan "(imagen ilustrativa)" en el pie**: presentarlos como trabajos propios sería publicidad engañosa. Al tener pares reales, se sustituyen y se quita esa coletilla en `lib/photos.ts`.

La primera versión del salón, generada por el cliente, queda en `fotos-originales/generadas/salon-pintado-cliente.png`.

Ya no queda ninguna foto de prueba en la web (`public/img/prueba/` no se usa). Lo ideal sigue siendo cambiar las generadas por fotos reales de vuestros trabajos, empezando por los antes/después.

## Home `/`

### 1. Hero (S1, primera pantalla): pared lisa recién terminada
- [ ] Pared o habitación lisa y pintada, con buena luz, limpia y sin trastos. Es la primera foto que ve el cliente.
- **Ordenador:** a la derecha del titular y los botones, a unos 520 × 390 px.
- **Móvil:** debajo de los botones de llamar y WhatsApp, a todo el ancho, unos 343 × 257 px.
- **Formato:** horizontal 4:3. Archivo final de 1200 × 900 px, WebP, máximo 150 KB.
- **Nombre:** `home-hero.webp`

### 2. "Quiénes somos" (S6): alguien de YordeK trabajando
- [ ] Alguien del equipo trabajando en una obra: de espaldas, de perfil o centrado en las manos y la herramienta. La web habla en plural, así que no importa quién salga y sirve aunque el equipo cambie.
- **Ordenador:** columna de la izquierda, junto a la presentación, a 280 × 280 px.
- **Móvil:** encima del texto, a 240 × 240 px.
- **Formato:** cuadrado 1:1. Archivo final de 600 × 600 px, WebP, máximo 80 KB.
- **Nombre:** `trabajando-cuadrada.webp`. Puede salir de la misma foto que la de /nosotros/ si deja margen arriba y abajo.

### 3. "Antes y después" (S3)
- [ ] 4 a 6 parejas. La sección está oculta hasta que las haya. Ver [Galerías de antes y después](#galerías-de-antes-y-después).

## Páginas de servicio: foto del hero

Mismo hueco en las cinco:
- **Ordenador:** a la derecha del titular, a unos 520 × 390 px.
- **Móvil:** debajo de los botones, a 343 × 257 px.
- **Formato:** horizontal 4:3. Archivo final de 1200 × 900 px, WebP, máximo 150 KB.

| | Página | Qué debe salir | Nombre |
|---|---|---|---|
| [ ] | `/quitar-gotele/` | Una pared a medio quitar el gotelé: **mitad con gotelé y mitad lisa**. Es la foto que más vende. | `quitar-gotele-hero.webp` |
| [ ] | `/alisado-de-paredes/` | Un techo o pared alisado **con luz que entre de lado**, para que se note que no hay ondas. | `alisado-hero.webp` |
| [x] | `/pintura-de-pisos/` | Un salón o dormitorio recién pintado, ordenado y con luz natural. **Puesta una generada con IA** (`generadas/salon-pintado`); cambiarla por una real cuando la haya. | `pintura-pisos-hero.webp` |
| [ ] | `/pintura-de-locales-comerciales/` | Un local u oficina recién pintado, sin clientes ni marcas reconocibles. | `pintura-locales-hero.webp` |
| [ ] | `/reparacion-de-paredes/` | Una grieta o desconchón **antes y después**. Puede ser una sola foto montada mitad y mitad. | `reparacion-hero.webp` |

Cada servicio admite también su propia galería de antes y después. Lo ideal son 2 parejas por servicio.

## Landings de anuncios

Las dos tienen la foto en la sección "Qué incluye", no arriba:
- **Ordenador:** a la derecha de la lista, a unos 545 × 410 px.
- **Móvil:** debajo de la lista, a 343 × 257 px.
- **Formato:** horizontal 4:3, 1200 × 900 px, WebP, máximo 150 KB.

| | Página | Qué debe salir | Nombre |
|---|---|---|---|
| [ ] | `/presupuesto-quitar-gotele/` | Pared a medio quitar el gotelé. **Puede ser la misma que la de `/quitar-gotele/`.** | `landing-gotele.webp` |
| [ ] | `/presupuesto-pintura/` | Habitación o local recién pintado. **Puede ser la misma que la de `/pintura-de-pisos/`.** | `landing-pintura.webp` |

## Nosotros `/nosotros/`

### Hero: alguien de YordeK trabajando
- [ ] Con el rodillo o la llana, de cuerpo medio. Mismo criterio que la de la Home: trabajando, sin que tenga que ser una persona concreta.
- **Ordenador:** a la derecha del titular, a 448 × 560 px.
- **Móvil:** debajo de los botones, a 343 × 429 px.
- **Formato:** **vertical 4:5**. Es la única foto que hay que hacer en vertical. Archivo final de 900 × 1125 px, WebP, máximo 150 KB.
- **Nombre:** `trabajando-vertical.webp`

## Galerías de antes y después

Están en la Home (S3) y en cada servicio, justo antes de las preguntas.
- [ ] **Qué es cada pareja:** dos fotos del **mismo sitio, desde el mismo punto y con el mismo encuadre**, una antes y otra después. Si cambia el ángulo, la comparación pierde fuerza.
- **Ordenador:** 2 parejas por fila, y cada foto se ve a unos 268 × 200 px.
- **Móvil:** 1 pareja por fila con el antes y el después lado a lado, cada foto a unos 168 × 126 px. Como se ven pequeñas, el cambio tiene que notarse a simple vista.
- **Formato:** horizontal 4:3. Archivo final de 800 × 600 px cada una, WebP, máximo 80 KB.
- **Datos de cada pareja:**
  - el tipo de trabajo;
  - la estancia y el barrio o pueblo, por ejemplo "salón en Benimaclet". Va al texto alternativo que lee Google;
  - una frase de pie de foto.
- **Nombres:** `antes-gotele-benimaclet.webp` y `despues-gotele-benimaclet.webp`.
- **Cuántas:** 4 a 6 parejas para la Home y 2 por servicio. Pueden repetirse entre la Home y los servicios.

## Imágenes de marca (no son huecos visibles)

| | Qué | Dónde se usa | Formato |
|---|---|---|---|
| [ ] | **Logo** | Cabecera, pie de página, schema de Google y favicon (`app/icon.svg`) | **SVG**, o PNG transparente de al menos 1000 px de ancho. Mientras no haya logo, sigue el provisional. |
| [ ] | **Imagen para compartir** (`public/og.png`) | Lo que sale al mandar el enlace por WhatsApp o en redes. Ahora es provisional. | **1200 × 630 px**, JPG o PNG, máximo 300 KB. Lo ideal es la mejor foto de "después" con el logo y el teléfono encima. |

## Al hacer las fotos
- **Sin bancos de imágenes:** todas tienen que ser de trabajos propios.
- **Privacidad:** que no salgan caras de clientes, fotos familiares, números de portal ni matrículas.
- **Luz:** mejor natural y de día. Con el móvil, evita el zoom digital y el modo retrato.
- **Encuadre:** deja un poco de margen alrededor de lo importante, porque al ajustar a cada proporción se recortan los bordes.
