# Google Business Profile · YordeK

Texto y configuración listos para copiar en la ficha. Límites comprobados por script (descripción ≤750 caracteres, servicios ≤300). Sin precios, garantías ni servicios que no se hacen (CLAUDE.md).

> **NAP**: el nombre, la zona y el teléfono tienen que ser **idénticos** a los de la web y el schema: `YordeK` · `Valencia y alrededores` · `+34 699 64 52 65`.

## 1. Datos básicos

| Campo | Valor |
|---|---|
| Nombre | **YordeK** (exactamente así: sin añadir «pintores Valencia» ni keywords, va contra las directrices y puede suspender la ficha) |
| Tipo de negocio | **Negocio de zona de servicio**: vas a casa del cliente. Ocultar la dirección (Google la pide para verificar, pero no la muestra) |
| Teléfono principal | +34 699 64 52 65 |
| Teléfono adicional | +34 642 76 02 70 |
| Web | `https://yordek.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp` (la UTM separa en GA4 las visitas que vienen de la ficha) |
| Enlace de citas | `https://yordek.com/contacto/?utm_source=google&utm_medium=organic&utm_campaign=gbp-citas` |
| Horario | 8:00 – 19:00 · días `[PENDIENTE]` (el mismo que en la web) |
| Fecha de apertura | `[PENDIENTE]` (coherente con «+6 años de experiencia») |
| Redes / WhatsApp | Añadir WhatsApp (`https://wa.me/34699645265`) en «Perfiles sociales» si la opción aparece en tu ficha |

## 2. Categorías

La categoría principal es el factor que más pesa en el mapa de Google. Los nombres exactos pueden variar en el selector en español: escribe el término y elige la opción que aparezca más parecida.

| | Categoría | En inglés (referencia) | Por qué |
|---|---|---|---|
| **Principal** | **Pintor** | Painter | Cubre «pintor Valencia», «pintores en Valencia» y «pintar piso» |
| Secundaria | Yesero / Enlucidor | Plasterer | Alisado y quitar gotelé (trabajo de plastecido) |
| Secundaria | Contratista de pintura / Empresa de pintura (si aparece) | Painting contractor | Refuerza «empresa de pintura Valencia» |

**No añadir**: categorías de fachadas, impermeabilización, carpintería, techados o «contratista general»: atraen búsquedas de trabajos que no se hacen.

## 3. Zona de servicio

Hasta 20 zonas. Empezar por **Valencia** y añadir los municipios donde trabajas `[PENDIENTE: lista de municipios]`. La misma lista tiene que ir en la web (`lib/site.ts` → `municipalities`), que alimenta el schema `areaServed`.

## 4. Descripción (≤750 caracteres)

Caracteres: **598**

```text
YordeK quita el gotelé, alisa y pinta paredes y techos de pisos, casas, locales y oficinas en Valencia y alrededores. Llevamos más de 6 años en el oficio. Antes de empezar cubrimos suelos y muebles, y al terminar dejamos todo limpio. El proceso es sencillo: nos llamas o escribes por WhatsApp, vamos a ver el trabajo sin coste, te damos un presupuesto cerrado y hacemos el trabajo. El precio que te damos después de la visita es el que pagas. También reparamos grietas, fisuras, desconchones y agujeros, y dejamos las paredes listas para pintar. Pide tu visita y presupuesto gratis, sin compromiso.
```

## 5. Servicios

Crear como **servicios personalizados** dentro de la categoría «Pintor» (o la que corresponda). Sin precio.

### Quitar gotelé

Quitamos el gotelé de las paredes, plastecemos, lijamos y damos imprimación. Te entregamos las paredes lisas, listas para pintar o ya pintadas. Cubrimos suelos y muebles y limpiamos al terminar. Visita y presupuesto cerrado gratis.

<sub>231 caracteres</sub>

### Alisado de paredes y techos

Para paredes y techos sin gotelé con ondas, parches o pintura que se levanta. Rascamos, tendemos pasta, lijamos e imprimamos hasta dejar la superficie plana y lista para pintar.

<sub>177 caracteres</sub>

### Pintura de pisos y casas

Pintamos paredes y techos de pisos, casas y apartamentos: cambio de color o pintura para alquilar o vender. Tapamos agujeros y fisuras antes de pintar y protegemos suelos y muebles.

<sub>181 caracteres</sub>

### Pintura de locales y oficinas

Pintamos locales comerciales y oficinas para abrir o renovar tu negocio, con los colores de tu marca. Reparamos los agujeros del negocio anterior y dejamos el local limpio para montar.

<sub>184 caracteres</sub>

### Reparación de paredes

Reparamos grietas, fisuras, desconchones, agujeros de tacos y golpes, y pintamos para igualar el color. La pared queda lista para pintar.

<sub>137 caracteres</sub>

## 6. Fotos (lo que más mueve la ficha mientras no haya reseñas)

- **Logo** y **portada**: cuando estén (`[PENDIENTE]`). No usar la imagen provisional de la web.
- **Responsable trabajando** (la misma de /nosotros/): da cara al negocio.
- **Antes y después** reales de quitar gotelé: mismo encuadre, misma luz.
- **Protección**: suelos y muebles cubiertos antes de empezar. Demuestra la promesa de limpieza.
- **Trabajo terminado y limpio**: habitación recogida al final.
- Subir 2–3 fotos nuevas al mes, reales y de obras propias. Nada de bancos de imágenes.

## 7. Reseñas

El negocio aún no tiene reseñas: es lo primero que conviene conseguir.

- Pedirla **a todos los clientes** al entregar el trabajo, con el enlace corto de la ficha (Inicio de la ficha › «Pedir reseñas»). Mandarlo por WhatsApp ese mismo día.
- **No filtrar**: pedírsela a todos, no solo a los contentos. Preguntar antes «¿te ha gustado?» y enviar el enlace solo si dicen que sí está prohibido por Google.
- Nada de reseñas de familiares, amigos ni a cambio de descuentos.
- Responder **todas** las reseñas en 1–2 días, con el nombre del servicio y el barrio cuando salga natural («Gracias, Ana. Quitar el gotelé del piso de Benimaclet…»).
- Mejor un ritmo constante (1–2 al mes) que 10 de golpe y luego nada.
- Cuando haya reseñas reales, se pueden enlazar desde la web. **No** añadir `aggregateRating` al schema con reseñas de Google: Google no lo permite para reseñas de terceros.

## 8. Publicaciones (1 al mes como mínimo)

- Antes y después de un trabajo de gotelé con el barrio: «Piso en [barrio]: gotelé fuera y paredes lisas».
- Cómo protegéis la casa (foto de suelos y muebles cubiertos).
- Recordatorio de temporada: preparar el piso para alquilar en verano, renovar el local antes de abrir.
- Botón de cada publicación: **Llamar** o **Más información** → página del servicio con UTM.

## 9. Después de verificar la ficha

- [ ] Copiar la URL de la ficha en `PENDIENTES.md` para añadirla al schema (`sameAs`) de la web.
- [ ] Vincular la ficha con Google Ads (extensión de ubicación, ver ADS.md).
- [ ] Crear la misma ficha en **Bing Places** (se puede importar desde Google; alimenta Copilot y ChatGPT) y en **Apple Business Connect** (Apple Maps).
- [ ] Mantener el NAP idéntico en todos los directorios donde aparezca el negocio (Páginas Amarillas, Habitissimo, Cronoshare…).
- [ ] Revisar cada mes en «Rendimiento» las búsquedas que te encuentran y las llamadas.
