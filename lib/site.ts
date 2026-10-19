// Datos del negocio: única fuente de verdad (NAP idéntico en toda la web).
// Lo que falta va como "[PENDIENTE]" y está apuntado en PENDIENTES.md.

export const PENDIENTE = "[PENDIENTE]";

export const site = {
  name: "YordeK",
  url: "https://yordek.com",
  phone: {
    display: "699 64 52 65",
    href: "tel:+34699645265",
    e164: "+34699645265",
  },
  phoneSecondary: {
    display: "642 76 02 70",
    href: "tel:+34642760270",
  },
  whatsappNumber: "34699645265",
  email: "kedir.lluch@icloud.com",
  area: "Valencia y alrededores",
  municipalities: [] as string[], // [PENDIENTE]
  hours: { opens: "08:00", closes: "19:00", days: PENDIENTE },
  yearsExperience: 6,
  owner: { name: PENDIENTE, photo: null as string | null },
  // Datos fiscales para los legales.
  legal: {
    holder: null as string | null, // titular: autónomo (nombre y apellidos) o sociedad
    taxId: null as string | null, // NIF / CIF
    address: null as string | null, // domicilio fiscal
    registry: null as string | null, // solo si es sociedad: datos del Registro Mercantil
  },
} as const;

export const DEFAULT_WA_MESSAGE =
  "Hola, quiero pedir una visita y presupuesto gratis";

export function whatsappHref(message: string = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const trustSignals = [
  `+${site.yearsExperience} años de experiencia`,
  "Visita y presupuesto gratis",
  "Protegemos suelos y muebles y dejamos todo limpio",
] as const;

export const services = [
  {
    slug: "quitar-gotele",
    name: "Quitar gotelé",
    benefit: "Paredes lisas y listas para pintar, sin rastro del gotelé.",
    featured: true,
  },
  {
    slug: "alisado-de-paredes",
    name: "Alisado de paredes y techos",
    benefit: "Paredes y techos planos y uniformes, preparados para pintar.",
  },
  {
    slug: "pintura-de-pisos",
    name: "Pintura de pisos y casas",
    benefit: "Cambia de color o deja el piso listo para alquilar o vender.",
  },
  {
    slug: "pintura-de-locales-comerciales",
    name: "Pintura de locales y oficinas",
    benefit: "Para abrir un negocio nuevo o renovar el que ya tienes.",
  },
  {
    slug: "reparacion-de-paredes",
    name: "Reparación de paredes",
    benefit: "Grietas, fisuras, desconchones y agujeros, reparados.",
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

export function serviceBySlug(slug: ServiceSlug) {
  return services.find((s) => s.slug === slug)!;
}

export const jobTypes = [
  "Quitar gotelé",
  "Alisado",
  "Pintura de vivienda",
  "Pintura de local u oficina",
  "Reparación de paredes",
  "Otro",
] as const;

export type JobType = (typeof jobTypes)[number];

export const processSteps = [
  { title: "Llamas o escribes", text: "Nos cuentas qué necesitas por teléfono o WhatsApp." },
  { title: "Visita gratis", text: "Vamos a verlo, medimos y resolvemos tus dudas." },
  { title: "Presupuesto cerrado", text: "El precio que te damos es el que pagas." },
  { title: "Trabajo limpio y entregado", text: "Protegemos todo, hacemos el trabajo y lo dejamos limpio." },
] as const;

// Proveedor del formulario (Web3Forms, funciona con sitio estático).
export const form = {
  endpoint: "https://api.web3forms.com/submit",
  accessKey: "baf6d4cb-c2ed-4acb-b28f-656ca2c9d8a3",
  // Los adjuntos en Web3Forms son de pago: hasta confirmarlo, se piden fotos por WhatsApp.
  acceptsPhoto: false,
} as const;
