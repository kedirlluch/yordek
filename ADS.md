# Google Ads · YordeK

Estructura propuesta para lanzar las campañas de búsqueda. Generado y validado por script: todos los títulos tienen 30 caracteres o menos y las descripciones 90 o menos. Sin precios ni garantías, y sin servicios que no se hacen (ver CLAUDE.md).

> **Antes de lanzar**: configurar las conversiones (sección 6), el banner de cookies con Consent Mode v2 y la access key de Web3Forms. Sin medición, Google no puede optimizar y no sabrás qué keyword trae clientes.

## 1. Configuración común de las campañas

| Ajuste | Valor |
|---|---|
| Tipo | Búsqueda. Desactivar Red de Display y partners de búsqueda |
| Ubicación | Valencia + radio de `[PENDIENTE] km` (o lista de municipios cuando esté) |
| Opción de ubicación | **Presencia**: personas que están o suelen estar en la zona (no «interés») |
| Idiomas | Español y catalán |
| Horario de anuncios | Todo el día. La extensión de llamada solo de 8:00 a 19:00 (días `[PENDIENTE]`) |
| Puja inicial | Maximizar clics con CPC máximo `[PENDIENTE]` las 2–4 primeras semanas |
| Puja después | Maximizar conversiones cuando haya ~15–30 conversiones en 30 días; más tarde, CPA objetivo |
| Presupuesto diario | `[PENDIENTE]`. Reparto orientativo: 60–70 % Gotelé, 30–40 % Pintura |
| Dispositivos | Todos. Revisar a las 2 semanas: la mayoría de llamadas vendrán del móvil |
| Rotación | Optimizar (Google prioriza los anuncios que mejor funcionan) |

Concordancias: solo **frase** y **exacta** al principio. Con la ubicación ya limitada a Valencia, las keywords sin «valencia» captan a quien busca desde la zona. Revisar el informe de **términos de búsqueda** cada semana y añadir negativas.

## 2. Estructura

```
Search | Gotelé | Valencia
  └─ Quitar gotelé              → /presupuesto-quitar-gotele/
  └─ Precio quitar gotelé       → /presupuesto-quitar-gotele/
Search | Pintura | Valencia
  └─ Pintores Valencia          → /presupuesto-pintura/
  └─ Pintar piso                → /presupuesto-pintura/
  └─ Pintar local u oficina     → /presupuesto-pintura/
```
Fase 2 (cuando haya landing propia): grupo «Alisar paredes» → `/presupuesto-alisado/` `[PENDIENTE]`. Mientras no exista, no se lanza: mandarlo a una landing de gotelé rompe el *message match*.

## Campaña: Search | Gotelé | Valencia

Campaña prioritaria: servicio estrella. Recibe la mayor parte del presupuesto.

### Grupo: Quitar gotelé

URL final: `https://yordek.com/presupuesto-quitar-gotele/` · Ruta visible: `yordek.com/gotele/presupuesto`

**Keywords · exacta**

- `[quitar gotelé valencia]`
- `[quitar gotele valencia]`
- `[quitar gotelé]`
- `[quitar el gotelé]`
- `[empresa para quitar gotelé]`

**Keywords · frase**

- `"quitar gotelé"`
- `"quitar gotele"`
- `"quitar el gotelé"`
- `"eliminar gotelé"`
- `"alisar gotelé"`
- `"tapar gotelé"`
- `"empresa quitar gotelé"`
- `"quitar gotelé piso"`

**Anuncio A · Oferta** (RSA)

| # | Título | Car. | Fijar |
|---|---|---|---|
| 1 | Quitar gotelé en Valencia | 25 | Posición 1 |
| 2 | Quitamos tu gotelé | 18 | Posición 1 |
| 3 | Paredes lisas para pintar | 25 |  |
| 4 | Paredes lisas sin gotelé | 24 |  |
| 5 | Visita y presupuesto gratis | 27 |  |
| 6 | Te visitamos sin compromiso | 27 |  |
| 7 | Presupuesto cerrado | 19 |  |
| 8 | Valencia y alrededores | 22 |  |
| 9 | Llama o escribe por WhatsApp | 28 |  |
| 10 | +6 años de experiencia | 22 |  |

| # | Descripción | Car. |
|---|---|---|
| 1 | Quitamos el gotelé, plastecemos, lijamos y dejamos la pared lista para pintar. | 78 |
| 2 | ¿Piso con gotelé? Lo vemos gratis y te damos el precio cerrado de todo el trabajo. | 82 |
| 3 | Te visitamos gratis y te damos un presupuesto cerrado. Es el precio que pagas al final. | 87 |
| 4 | Llama o escríbenos por WhatsApp y concertamos la visita. Sin compromiso. | 72 |

**Anuncio B · Limpieza** (RSA)

| # | Título | Car. | Fijar |
|---|---|---|---|
| 1 | Quitar gotelé en Valencia | 25 | Posición 1 |
| 2 | Quitamos tu gotelé | 18 | Posición 1 |
| 3 | Protegemos suelos y muebles | 27 |  |
| 4 | Dejamos tu casa limpia | 22 |  |
| 5 | Visita y presupuesto gratis | 27 |  |
| 6 | Valencia y alrededores | 22 |  |
| 7 | +6 años de experiencia | 22 |  |
| 8 | Llama o escribe por WhatsApp | 28 |  |

| # | Descripción | Car. |
|---|---|---|
| 1 | Quitamos el gotelé, plastecemos, lijamos y dejamos la pared lista para pintar. | 78 |
| 2 | ¿Piso con gotelé? Lo vemos gratis y te damos el precio cerrado de todo el trabajo. | 82 |
| 3 | Cubrimos suelos y muebles antes de empezar y dejamos todo limpio al terminar. | 77 |
| 4 | Te visitamos gratis y te damos un presupuesto cerrado. Es el precio que pagas al final. | 87 |

**Anuncio C · Confianza** (RSA)

| # | Título | Car. | Fijar |
|---|---|---|---|
| 1 | Quitar gotelé en Valencia | 25 | Posición 1 |
| 2 | Quitamos tu gotelé | 18 | Posición 1 |
| 3 | Paredes lisas para pintar | 25 |  |
| 4 | Paredes lisas sin gotelé | 24 |  |
| 5 | +6 años de experiencia | 22 |  |
| 6 | Presupuesto cerrado | 19 |  |
| 7 | Sin sorpresas en el precio | 26 |  |
| 8 | Visita y presupuesto gratis | 27 |  |
| 9 | Valencia y alrededores | 22 |  |
| 10 | Protegemos suelos y muebles | 27 |  |

| # | Descripción | Car. |
|---|---|---|
| 1 | Quitamos el gotelé, plastecemos, lijamos y dejamos la pared lista para pintar. | 78 |
| 2 | ¿Piso con gotelé? Lo vemos gratis y te damos el precio cerrado de todo el trabajo. | 82 |
| 3 | Más de 6 años pintando y alisando paredes en Valencia y alrededores. | 68 |
| 4 | Te visitamos gratis y te damos un presupuesto cerrado. Es el precio que pagas al final. | 87 |

### Grupo: Precio quitar gotelé

URL final: `https://yordek.com/presupuesto-quitar-gotele/` · Ruta visible: `yordek.com/gotele/precio`

**Keywords · exacta**

- `[precio quitar gotelé]`
- `[precio quitar gotelé m2]`
- `[cuánto cuesta quitar gotelé]`
- `[presupuesto quitar gotelé]`

**Keywords · frase**

- `"precio quitar gotelé"`
- `"precio quitar gotele"`
- `"cuanto cuesta quitar gotelé"`
- `"presupuesto quitar gotelé"`
- `"quitar gotelé precio"`
- `"quitar gotelé m2"`

**Anuncio A · Oferta** (RSA)

| # | Título | Car. | Fijar |
|---|---|---|---|
| 1 | Precio de quitar gotelé | 23 | Posición 1 |
| 2 | ¿Cuánto cuesta quitar gotelé? | 29 | Posición 1 |
| 3 | Presupuesto quitar gotelé | 25 |  |
| 4 | Visita y presupuesto gratis | 27 |  |
| 5 | Te visitamos sin compromiso | 27 |  |
| 6 | Presupuesto cerrado | 19 |  |
| 7 | Valencia y alrededores | 22 |  |
| 8 | Llama o escribe por WhatsApp | 28 |  |
| 9 | +6 años de experiencia | 22 |  |

| # | Descripción | Car. |
|---|---|---|
| 1 | El precio depende del tipo de gotelé y de los metros de pared. Lo vemos gratis. | 79 |
| 2 | Te damos el precio cerrado de quitar el gotelé tras una visita gratis a tu casa. | 80 |
| 3 | Te visitamos gratis y te damos un presupuesto cerrado. Es el precio que pagas al final. | 87 |
| 4 | Llama o escríbenos por WhatsApp y concertamos la visita. Sin compromiso. | 72 |

**Anuncio B · Limpieza** (RSA)

| # | Título | Car. | Fijar |
|---|---|---|---|
| 1 | Precio de quitar gotelé | 23 | Posición 1 |
| 2 | ¿Cuánto cuesta quitar gotelé? | 29 | Posición 1 |
| 3 | Protegemos suelos y muebles | 27 |  |
| 4 | Dejamos tu casa limpia | 22 |  |
| 5 | Visita y presupuesto gratis | 27 |  |
| 6 | Valencia y alrededores | 22 |  |
| 7 | +6 años de experiencia | 22 |  |
| 8 | Llama o escribe por WhatsApp | 28 |  |

| # | Descripción | Car. |
|---|---|---|
| 1 | El precio depende del tipo de gotelé y de los metros de pared. Lo vemos gratis. | 79 |
| 2 | Te damos el precio cerrado de quitar el gotelé tras una visita gratis a tu casa. | 80 |
| 3 | Cubrimos suelos y muebles antes de empezar y dejamos todo limpio al terminar. | 77 |
| 4 | Te visitamos gratis y te damos un presupuesto cerrado. Es el precio que pagas al final. | 87 |

**Anuncio C · Confianza** (RSA)

| # | Título | Car. | Fijar |
|---|---|---|---|
| 1 | Precio de quitar gotelé | 23 | Posición 1 |
| 2 | ¿Cuánto cuesta quitar gotelé? | 29 | Posición 1 |
| 3 | Presupuesto quitar gotelé | 25 |  |
| 4 | +6 años de experiencia | 22 |  |
| 5 | Presupuesto cerrado | 19 |  |
| 6 | Sin sorpresas en el precio | 26 |  |
| 7 | Visita y presupuesto gratis | 27 |  |
| 8 | Valencia y alrededores | 22 |  |
| 9 | Protegemos suelos y muebles | 27 |  |

| # | Descripción | Car. |
|---|---|---|
| 1 | El precio depende del tipo de gotelé y de los metros de pared. Lo vemos gratis. | 79 |
| 2 | Te damos el precio cerrado de quitar el gotelé tras una visita gratis a tu casa. | 80 |
| 3 | Más de 6 años pintando y alisando paredes en Valencia y alrededores. | 68 |
| 4 | Te visitamos gratis y te damos un presupuesto cerrado. Es el precio que pagas al final. | 87 |

## Campaña: Search | Pintura | Valencia

Negativas de campaña: gotelé y gotele (concordancia de frase), para que esas búsquedas vayan a la campaña de gotelé.

### Grupo: Pintores Valencia

URL final: `https://yordek.com/presupuesto-pintura/` · Ruta visible: `yordek.com/pintores/valencia`

**Keywords · exacta**

- `[pintores en valencia]`
- `[pintor valencia]`
- `[pintores valencia]`
- `[empresa de pintura valencia]`

**Keywords · frase**

- `"pintores en valencia"`
- `"pintor en valencia"`
- `"pintor valencia"`
- `"empresa de pintura valencia"`
- `"empresa de pintores"`
- `"pintor de interiores"`

**Anuncio A · Oferta** (RSA)

| # | Título | Car. | Fijar |
|---|---|---|---|
| 1 | Pintores en Valencia | 20 | Posición 1 |
| 2 | Pintor en Valencia | 18 | Posición 1 |
| 3 | Empresa de pintura Valencia | 27 |  |
| 4 | Visita y presupuesto gratis | 27 |  |
| 5 | Te visitamos sin compromiso | 27 |  |
| 6 | Presupuesto cerrado | 19 |  |
| 7 | Valencia y alrededores | 22 |  |
| 8 | Llama o escribe por WhatsApp | 28 |  |
| 9 | +6 años de experiencia | 22 |  |

| # | Descripción | Car. |
|---|---|---|
| 1 | Pintamos pisos, casas, locales y oficinas en Valencia. Visita y presupuesto gratis. | 83 |
| 2 | Paredes y techos pintados, la casa protegida y limpia. Precio cerrado tras la visita. | 85 |
| 3 | Te visitamos gratis y te damos un presupuesto cerrado. Es el precio que pagas al final. | 87 |
| 4 | Llama o escríbenos por WhatsApp y concertamos la visita. Sin compromiso. | 72 |

**Anuncio B · Limpieza** (RSA)

| # | Título | Car. | Fijar |
|---|---|---|---|
| 1 | Pintores en Valencia | 20 | Posición 1 |
| 2 | Pintor en Valencia | 18 | Posición 1 |
| 3 | Protegemos suelos y muebles | 27 |  |
| 4 | Dejamos tu casa limpia | 22 |  |
| 5 | Visita y presupuesto gratis | 27 |  |
| 6 | Valencia y alrededores | 22 |  |
| 7 | +6 años de experiencia | 22 |  |
| 8 | Llama o escribe por WhatsApp | 28 |  |

| # | Descripción | Car. |
|---|---|---|
| 1 | Pintamos pisos, casas, locales y oficinas en Valencia. Visita y presupuesto gratis. | 83 |
| 2 | Paredes y techos pintados, la casa protegida y limpia. Precio cerrado tras la visita. | 85 |
| 3 | Cubrimos suelos y muebles antes de empezar y dejamos todo limpio al terminar. | 77 |
| 4 | Te visitamos gratis y te damos un presupuesto cerrado. Es el precio que pagas al final. | 87 |

**Anuncio C · Confianza** (RSA)

| # | Título | Car. | Fijar |
|---|---|---|---|
| 1 | Pintores en Valencia | 20 | Posición 1 |
| 2 | Pintor en Valencia | 18 | Posición 1 |
| 3 | Empresa de pintura Valencia | 27 |  |
| 4 | +6 años de experiencia | 22 |  |
| 5 | Presupuesto cerrado | 19 |  |
| 6 | Sin sorpresas en el precio | 26 |  |
| 7 | Visita y presupuesto gratis | 27 |  |
| 8 | Valencia y alrededores | 22 |  |
| 9 | Protegemos suelos y muebles | 27 |  |

| # | Descripción | Car. |
|---|---|---|
| 1 | Pintamos pisos, casas, locales y oficinas en Valencia. Visita y presupuesto gratis. | 83 |
| 2 | Paredes y techos pintados, la casa protegida y limpia. Precio cerrado tras la visita. | 85 |
| 3 | Más de 6 años pintando y alisando paredes en Valencia y alrededores. | 68 |
| 4 | Te visitamos gratis y te damos un presupuesto cerrado. Es el precio que pagas al final. | 87 |

### Grupo: Pintar piso

URL final: `https://yordek.com/presupuesto-pintura/` · Ruta visible: `yordek.com/pintar/piso`

**Keywords · exacta**

- `[pintar piso valencia]`
- `[pintar piso]`
- `[presupuesto pintar piso]`
- `[precio pintar piso]`

**Keywords · frase**

- `"pintar piso"`
- `"pintar un piso"`
- `"pintar casa"`
- `"pintar vivienda"`
- `"pintar mi piso"`
- `"presupuesto pintar piso"`
- `"precio pintar piso"`

**Anuncio A · Oferta** (RSA)

| # | Título | Car. | Fijar |
|---|---|---|---|
| 1 | Pintar piso en Valencia | 23 | Posición 1 |
| 2 | Pintamos tu piso o casa | 23 | Posición 1 |
| 3 | Pinta tu piso para alquilar | 27 |  |
| 4 | Visita y presupuesto gratis | 27 |  |
| 5 | Te visitamos sin compromiso | 27 |  |
| 6 | Presupuesto cerrado | 19 |  |
| 7 | Valencia y alrededores | 22 |  |
| 8 | Llama o escribe por WhatsApp | 28 |  |
| 9 | +6 años de experiencia | 22 |  |

| # | Descripción | Car. |
|---|---|---|
| 1 | ¿Vas a alquilar o vender? Dejamos el piso pintado y limpio para las visitas. | 76 |
| 2 | Cambio de color, paredes y techos. Tapamos agujeros y fisuras antes de pintar. | 78 |
| 3 | Te visitamos gratis y te damos un presupuesto cerrado. Es el precio que pagas al final. | 87 |
| 4 | Llama o escríbenos por WhatsApp y concertamos la visita. Sin compromiso. | 72 |

**Anuncio B · Limpieza** (RSA)

| # | Título | Car. | Fijar |
|---|---|---|---|
| 1 | Pintar piso en Valencia | 23 | Posición 1 |
| 2 | Pintamos tu piso o casa | 23 | Posición 1 |
| 3 | Protegemos suelos y muebles | 27 |  |
| 4 | Dejamos tu casa limpia | 22 |  |
| 5 | Visita y presupuesto gratis | 27 |  |
| 6 | Valencia y alrededores | 22 |  |
| 7 | +6 años de experiencia | 22 |  |
| 8 | Llama o escribe por WhatsApp | 28 |  |

| # | Descripción | Car. |
|---|---|---|
| 1 | ¿Vas a alquilar o vender? Dejamos el piso pintado y limpio para las visitas. | 76 |
| 2 | Cambio de color, paredes y techos. Tapamos agujeros y fisuras antes de pintar. | 78 |
| 3 | Cubrimos suelos y muebles antes de empezar y dejamos todo limpio al terminar. | 77 |
| 4 | Te visitamos gratis y te damos un presupuesto cerrado. Es el precio que pagas al final. | 87 |

**Anuncio C · Confianza** (RSA)

| # | Título | Car. | Fijar |
|---|---|---|---|
| 1 | Pintar piso en Valencia | 23 | Posición 1 |
| 2 | Pintamos tu piso o casa | 23 | Posición 1 |
| 3 | Pinta tu piso para alquilar | 27 |  |
| 4 | +6 años de experiencia | 22 |  |
| 5 | Presupuesto cerrado | 19 |  |
| 6 | Sin sorpresas en el precio | 26 |  |
| 7 | Visita y presupuesto gratis | 27 |  |
| 8 | Valencia y alrededores | 22 |  |
| 9 | Protegemos suelos y muebles | 27 |  |

| # | Descripción | Car. |
|---|---|---|
| 1 | ¿Vas a alquilar o vender? Dejamos el piso pintado y limpio para las visitas. | 76 |
| 2 | Cambio de color, paredes y techos. Tapamos agujeros y fisuras antes de pintar. | 78 |
| 3 | Más de 6 años pintando y alisando paredes en Valencia y alrededores. | 68 |
| 4 | Te visitamos gratis y te damos un presupuesto cerrado. Es el precio que pagas al final. | 87 |

### Grupo: Pintar local u oficina

URL final: `https://yordek.com/presupuesto-pintura/` · Ruta visible: `yordek.com/pintar/local`

**Keywords · exacta**

- `[pintar local comercial]`
- `[pintura de locales]`
- `[pintar oficina valencia]`

**Keywords · frase**

- `"pintar local"`
- `"pintar local comercial"`
- `"pintura de locales"`
- `"pintar oficina"`
- `"pintores para locales"`

**Anuncio A · Oferta** (RSA)

| # | Título | Car. | Fijar |
|---|---|---|---|
| 1 | Pintar local en Valencia | 24 | Posición 1 |
| 2 | Pintura de locales y oficinas | 29 | Posición 1 |
| 3 | Tu local listo para abrir | 25 |  |
| 4 | Visita y presupuesto gratis | 27 |  |
| 5 | Te visitamos sin compromiso | 27 |  |
| 6 | Presupuesto cerrado | 19 |  |
| 7 | Valencia y alrededores | 22 |  |
| 8 | Llama o escribe por WhatsApp | 28 |  |
| 9 | +6 años de experiencia | 22 |  |

| # | Descripción | Car. |
|---|---|---|
| 1 | ¿Vas a abrir o renovar tu negocio? Pintamos tu local u oficina con precio cerrado. | 82 |
| 2 | Tapamos los agujeros del negocio anterior y pintamos con los colores de tu marca. | 81 |
| 3 | Te visitamos gratis y te damos un presupuesto cerrado. Es el precio que pagas al final. | 87 |
| 4 | Llama o escríbenos por WhatsApp y concertamos la visita. Sin compromiso. | 72 |

**Anuncio B · Limpieza** (RSA)

| # | Título | Car. | Fijar |
|---|---|---|---|
| 1 | Pintar local en Valencia | 24 | Posición 1 |
| 2 | Pintura de locales y oficinas | 29 | Posición 1 |
| 3 | Protegemos suelos y muebles | 27 |  |
| 4 | Dejamos tu casa limpia | 22 |  |
| 5 | Visita y presupuesto gratis | 27 |  |
| 6 | Valencia y alrededores | 22 |  |
| 7 | +6 años de experiencia | 22 |  |
| 8 | Llama o escribe por WhatsApp | 28 |  |

| # | Descripción | Car. |
|---|---|---|
| 1 | ¿Vas a abrir o renovar tu negocio? Pintamos tu local u oficina con precio cerrado. | 82 |
| 2 | Tapamos los agujeros del negocio anterior y pintamos con los colores de tu marca. | 81 |
| 3 | Cubrimos suelos y muebles antes de empezar y dejamos todo limpio al terminar. | 77 |
| 4 | Te visitamos gratis y te damos un presupuesto cerrado. Es el precio que pagas al final. | 87 |

**Anuncio C · Confianza** (RSA)

| # | Título | Car. | Fijar |
|---|---|---|---|
| 1 | Pintar local en Valencia | 24 | Posición 1 |
| 2 | Pintura de locales y oficinas | 29 | Posición 1 |
| 3 | Tu local listo para abrir | 25 |  |
| 4 | +6 años de experiencia | 22 |  |
| 5 | Presupuesto cerrado | 19 |  |
| 6 | Sin sorpresas en el precio | 26 |  |
| 7 | Visita y presupuesto gratis | 27 |  |
| 8 | Valencia y alrededores | 22 |  |
| 9 | Protegemos suelos y muebles | 27 |  |

| # | Descripción | Car. |
|---|---|---|
| 1 | ¿Vas a abrir o renovar tu negocio? Pintamos tu local u oficina con precio cerrado. | 82 |
| 2 | Tapamos los agujeros del negocio anterior y pintamos con los colores de tu marca. | 81 |
| 3 | Más de 6 años pintando y alisando paredes en Valencia y alrededores. | 68 |
| 4 | Te visitamos gratis y te damos un presupuesto cerrado. Es el precio que pagas al final. | 87 |

## 3. Palabras clave negativas

Crear como **lista de negativas compartida** («Negativas YordeK») y aplicarla a las dos campañas. Concordancia amplia salvo las que llevan comillas (frase).

**Empleo y formación**

`empleo`, `"ofertas de trabajo"`, `"busco trabajo"`, `"bolsa de trabajo"`, `infojobs`, `sueldo`, `salario`, `convenio`, `oposiciones`, `curso`, `cursos`, `formación`, `fp`, `aprender`, `escuela`, `prácticas`

**Hazlo tú mismo**

`"como quitar"`, `"cómo quitar"`, `"como pintar"`, `"cómo pintar"`, `"como alisar"`, `"cómo alisar"`, `tutorial`, `video`, `vídeo`, `youtube`, `"paso a paso"`, `manual`, `"yo mismo"`, `"tú mismo"`, `"uno mismo"`, `diy`, `bricolaje`, `trucos`, `consejos`

**Productos, tiendas y herramientas**

`comprar`, `venta`, `tienda`, `"leroy merlin"`, `bricomart`, `bauhaus`, `"brico depot"`, `aki`, `amazon`, `lijadora`, `rascador`, `espátula`, `rodillo`, `pistola`, `máquina`, `masilla`, `plaste`, `"segunda mano"`, `wallapop`

**Marcas de pintura**

`titan`, `bruguer`, `valentine`, `jotun`, `montó`, `isaval`, `procolor`, `dulux`, `"sherwin williams"`, `hempel`, `cin`, `"industrias titan"`

**Servicios que no hacemos**

`fachada`, `fachadas`, `exterior`, `exteriores`, `altura`, `alturas`, `andamio`, `andamios`, `"trabajos verticales"`, `tejado`, `cubierta`, `puerta`, `puertas`, `radiador`, `radiadores`, `carpintería`, `lacar`, `lacado`, `barnizar`, `barniz`, `"pintar muebles"`, `madera`, `rejas`, `hierro`, `suelo`, `azulejos`, `piscina`, `coche`, `moto`, `chapa`, `mural`, `graffiti`, `óleo`, `acuarela`, `cuadros`, `uñas`, `tatuaje`

**Gratis sin intención de contratar (no se bloquea «gratis» suelto)**

`"gratis online"`, `"gratis pdf"`, `"plantilla gratis"`, `"app gratis"`, `descargar`, `plantilla`, `pdf`, `app`, `programa`, `excel`

**Información e inspiración**

`ideas`, `imágenes`, `"fotos de"`, `pinterest`, `wikipedia`, `"qué es"`, `"que es"`, `significado`, `"historia del gotelé"`

**Negativas de campaña (Pintura)**: `"gotelé"`, `"gotele"`.

**Ojo con estas, no añadirlas**: `gratis` suelto (bloquearía «presupuesto gratis», que es la oferta), `alquiler` (bloquearía «pintar piso para alquilar»), `barato` y `precio` (son clientes comparando).

Ciudades fuera de zona (Madrid, Barcelona, Alicante, Castellón…): añadir cuando esté la lista de municipios `[PENDIENTE]`; la ubicación por presencia ya filtra la mayoría.

## 4. Recursos (extensiones)

### Llamada

- Número: **+34 699 64 52 65**
- Horario: 8:00–19:00, días `[PENDIENTE]`
- Informes de llamadas: activados. Conversión «Llamada desde anuncio» con duración mínima de **60 s**

### Ubicación

- **Activar cuando esté la ficha de Google Business Profile** `[PENDIENTE]`: vincularla en Recursos › Ubicación.
- Si la ficha es de *zona de servicio* sin dirección pública, Google no mostrará la extensión: no pasa nada, la orientación por ubicación (sección 1) sigue funcionando.

### Enlaces de sitio

| Texto (≤25) | Línea 1 (≤35) | Línea 2 (≤35) | URL |
|---|---|---|---|
| Quitar gotelé | Paredes lisas y listas para pintar | Proceso, precio y preguntas | `/quitar-gotele/` |
| Pintura de pisos | Paredes, techos y cambio de color | Para vivir, alquilar o vender | `/pintura-de-pisos/` |
| Locales y oficinas | Para abrir o renovar tu negocio | Con los colores de tu marca | `/pintura-de-locales-comerciales/` |
| Reparar paredes | Grietas, agujeros y desconchones | Listas para pintar | `/reparacion-de-paredes/` |
| Quiénes somos | Más de 6 años en Valencia | Cómo trabajamos | `/nosotros/` |
| Contacto | Teléfono, WhatsApp y horario | Visita y presupuesto gratis | `/contacto/` |

### Textos destacados (≤25)

- Visita gratis
- Presupuesto cerrado
- +6 años de experiencia
- Muebles protegidos
- Dejamos todo limpio
- Atención por WhatsApp

### Fragmento estructurado

Encabezado: **Servicios** → Quitar gotelé, Alisado de paredes, Pintura de pisos, Pintura de locales, Reparación de paredes

## 5. Mensajes de WhatsApp prellenados

- Gotelé: «Hola, quiero un presupuesto para quitar gotelé»
- Pintura: «Hola, quiero un presupuesto de pintura»

## 6. Conversiones

| Conversión | Origen | Acción principal |
|---|---|---|
| Formulario enviado | Evento `envio_formulario` (página /gracias/) | Sí |
| Llamada desde anuncio | Extensión de llamada, ≥60 s | Sí |
| Clic en llamar | Evento `click_llamar` vía GTM | Sí |
| Clic en WhatsApp | Evento `click_whatsapp` vía GTM | Sí |

Valores de conversión `[PENDIENTE]`: si un trabajo medio de gotelé vale más que uno de pintura, darle más valor. IDs: `[GTM-ID]`, `[GA4-ID]`, `[ADS-ID]`.

## 7. Lista de comprobación antes de lanzar

- [ ] Access key de Web3Forms y prueba de envío real que llega a /gracias/
- [ ] GTM + GA4 + etiqueta de conversión de Ads publicadas, con Consent Mode v2
- [ ] Banner de cookies funcionando
- [ ] Foto real en las dos landings (ahora hay marcador `[PENDIENTE]`)
- [ ] Probar los clics de llamar y WhatsApp en el móvil y ver los eventos en GTM (modo vista previa)
- [ ] Lista de negativas compartida aplicada a las dos campañas
- [ ] Radio de ubicación y presupuesto diario decididos
- [ ] Revisar términos de búsqueda a los 3–4 días del lanzamiento
