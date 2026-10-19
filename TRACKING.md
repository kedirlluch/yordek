# Medición · YordeK

Lo que ya está en la web y lo que tienes que hacer tú en **Google Tag Manager**, **GA4** y **Google Ads**.
Última actualización: 19/10/2026.

## Qué hay ya en el código

| Pieza | Dónde | Qué hace |
|---|---|---|
| ID de GTM | `lib/tracking.ts` → `gtmId: "[GTM-ID]"` | GTM **no se carga** hasta que pongas un ID real (`GTM-XXXXXXX`) |
| Consent Mode v2 | `<head>` de todas las páginas | Todo **denegado** por defecto, antes de que cargue GTM. Recupera la elección guardada |
| Banner de cookies | `components/CookieBanner.tsx` | «Rechazar» y «Aceptar» con el mismo peso, «Configurar» (análisis / publicidad). Se vuelve a pedir a los 12 meses |
| «Configurar cookies» | Pie de todas las páginas y de las landings | Vuelve a abrir el banner |
| Clics | `components/ClickTracker.tsx` | Cualquier enlace con `data-track` envía su evento al `dataLayer` |
| Conversión del formulario | `/gracias/` | Envía `envio_formulario` **solo** si se acaba de enviar el formulario (una recarga o una visita directa no cuentan) |

Probado en Chrome a 375 px: consentimiento por defecto, rechazar, recargar, aceptar, los dos clics y la conversión de `/gracias/` (que no se repite al recargar).

## Plan de eventos

| Evento | Cuándo | Parámetros | Conversión |
|---|---|---|---|
| `click_llamar` | Clic en cualquier enlace `tel:` (cabecera, barra móvil, CTAs, pie, contacto) | `page_path`, `link_url`, `link_text` | Sí |
| `click_whatsapp` | Clic en cualquier enlace de WhatsApp | `page_path`, `link_url`, `link_text` | Sí |
| `envio_formulario` | Vista de `/gracias/` tras enviar el formulario | `page_path`, `form_source` (página del formulario), `job_type` (tipo de trabajo) | Sí, la principal |
| `consent_update` | El usuario elige en el banner | `consent_analytics`, `consent_ads` | No |

Sin datos personales: ningún evento lleva nombre, teléfono ni zona del cliente.

`form_source` vale `home`, `servicios`, `contacto`, el slug del servicio (`quitar-gotele`…) o `ads-gotele` / `ads-pintura` en las landings.

---

## 1. Google Tag Manager

1. Entra en [tagmanager.google.com](https://tagmanager.google.com) › **Crear cuenta** › contenedor **Web** con el dominio `yordek.com`.
2. Copia el ID (`GTM-XXXXXXX`), pégalo en `lib/tracking.ts` y vuelve a publicar la web. **No pegues** el fragmento que te ofrece GTM: ya está en el código, después del consentimiento.
3. **Administrar › Configuración del contenedor** › activa **Habilitar resumen de consentimiento**.

### Variables (Variables › Variables definidas por el usuario › Nueva › *Variable de capa de datos*)

| Nombre en GTM | Nombre de la variable de capa de datos |
|---|---|
| `DLV - link_url` | `link_url` |
| `DLV - link_text` | `link_text` |
| `DLV - form_source` | `form_source` |
| `DLV - job_type` | `job_type` |

### Activadores (Activadores › Nuevo › *Evento personalizado*)

| Nombre | Nombre del evento |
|---|---|
| `CE - click_llamar` | `click_llamar` |
| `CE - click_whatsapp` | `click_whatsapp` |
| `CE - envio_formulario` | `envio_formulario` |

### Etiquetas

| Etiqueta | Tipo | Configuración | Activador |
|---|---|---|---|
| `GA4 - Google tag` | Etiqueta de Google | ID `[GA4-ID]` (`G-XXXXXXX`) | **Initialization - All Pages** |
| `GA4 - click_llamar` | Evento de GA4 | Nombre `click_llamar` · parámetros `link_url` = `{{DLV - link_url}}`, `link_text` = `{{DLV - link_text}}` | `CE - click_llamar` |
| `GA4 - click_whatsapp` | Evento de GA4 | Nombre `click_whatsapp` · mismos parámetros | `CE - click_whatsapp` |
| `GA4 - envio_formulario` | Evento de GA4 | Nombre `envio_formulario` · `form_source` = `{{DLV - form_source}}`, `job_type` = `{{DLV - job_type}}` | `CE - envio_formulario` |
| `Ads - Vinculador de conversiones` | Vinculador de conversiones | (sin cambios) | **All Pages** |

Consentimiento: las etiquetas de Google ya traen los controles de consentimiento integrados. En **Resumen de consentimiento** déjalas en «No se requiere consentimiento adicional»; Consent Mode decide qué guardan.

4. **Vista previa** (Tag Assistant) con `https://yordek.com`:
   - Pestaña **Consentimiento**: al cargar, todo `Denied`. Tras pulsar «Aceptar», `Granted`.
   - Pulsa Llamar y WhatsApp: deben dispararse sus etiquetas, una vez cada una.
   - Envía el formulario de prueba: en `/gracias/` debe dispararse `GA4 - envio_formulario`.
5. **Enviar › Publicar** (nombre de versión: «Medición inicial»).

## 2. GA4

1. [analytics.google.com](https://analytics.google.com) › **Administrar › Crear › Propiedad** «YordeK»: zona horaria **España**, moneda **EUR**.
2. **Flujo de datos web** `https://yordek.com`. Copia el ID de medición (`G-XXXXXXX`) en la etiqueta de Google de GTM.
3. **Medición mejorada**: déjala activada, pero desactiva **Interacciones con formularios**. Su `form_submit` contaría también los envíos fallidos; la conversión buena es `envio_formulario`.
4. **Administrar › Eventos clave › Nuevo evento clave**: crea `envio_formulario`, `click_llamar` y `click_whatsapp` (puedes hacerlo antes de que lleguen los primeros datos).
5. **Administrar › Definiciones personalizadas › Crear dimensión personalizada** (ámbito *Evento*): `form_source`, `job_type`, `link_url`.
6. **Administrar › Configuración de datos › Retención de datos**: **14 meses**.
7. **Administrar › Flujos de datos › Configurar los ajustes de etiquetas › Definir tráfico interno**: tu IP de casa y del móvil, y activa el filtro en *Filtros de datos* para no contarte a ti mismo.
8. **Administrar › Vinculaciones de productos › Google Ads**: vincula la cuenta de Ads y activa la **personalización de anuncios** y el **etiquetado automático**.
9. Comprueba en **DebugView** (con la vista previa de GTM abierta) que llegan los tres eventos con sus parámetros.

## 3. Google Ads

1. **Configuración de la cuenta › Etiquetado automático**: activado.
2. **Objetivos › Conversiones › Resumen › + Crear acción de conversión › Importar › Propiedades de Google Analytics 4 › Web**. Marca `envio_formulario`, `click_llamar` y `click_whatsapp`.
3. Ajusta cada una:

| Acción | Categoría | Valor | Recuento | Ventana clic / vista | Atribución | Tipo |
|---|---|---|---|---|---|---|
| `envio_formulario` | Enviar formulario de clientes potenciales | `[PENDIENTE]` | **Una** | 30 días / 1 día | Basada en datos | **Principal** |
| `click_llamar` | Contacto | `[PENDIENTE]` | **Una** | 30 días / 1 día | Basada en datos | **Principal** |
| `click_whatsapp` | Contacto | `[PENDIENTE]` | **Una** | 30 días / 1 día | Basada en datos | **Principal** |
| Llamadas desde anuncios | Llamada telefónica | `[PENDIENTE]` | **Una** | 30 días | Basada en datos | **Principal** · duración mínima **60 s** |

   - «Una» = un cliente que llama dos veces cuenta como un contacto.
   - Valores: si un trabajo de gotelé vale de media más que uno de pintura, dale más valor a `envio_formulario`; si no, el mismo valor a todas.
   - La de **llamadas desde anuncios** se crea aparte: *+ Crear acción › Llamadas telefónicas › Llamadas desde anuncios con extensiones de llamada*. Es la que mide la extensión de llamada de ADS.md.

4. **No dupliques**: si más adelante pones también etiquetas de conversión nativas de Ads en GTM para las mismas acciones, deja como **Principal** solo una de las dos (la importada de GA4 o la nativa).
5. **Objetivos › Conversiones › Diagnóstico** a los 2–3 días: debe decir que el **modo de consentimiento** está activo y que llegan conversiones.

## 4. Antes de lanzar anuncios

- [ ] ID de GTM en `lib/tracking.ts` y web publicada
- [ ] Vista previa de GTM: consentimiento por defecto `Denied`, los tres eventos se disparan una vez
- [ ] Envío real del formulario (con la access key de Web3Forms) que llega al email **y** dispara `envio_formulario`
- [ ] Eventos clave marcados en GA4 y visibles en DebugView
- [ ] Conversiones importadas en Ads, con valores y «Una» como recuento
- [ ] Llamada de prueba desde el móvil con el banner aceptado y rechazado (con rechazado no se guardan cookies, pero Google recibe la señal sin cookies)

## Más adelante (opcional)

- **Conversiones avanzadas para leads**: mandar el teléfono del formulario cifrado (SHA-256) a Google Ads para atribuir mejor. Necesita un cambio en el código y mencionarlo en la política de privacidad; tiene sentido cuando haya volumen.
- **Importar ventas reales**: cuando un presupuesto se convierta en trabajo, subir esa conversión offline a Ads para que optimice por clientes y no por contactos.
