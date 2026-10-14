const services = [
  {
    title: 'Alisado de paredes',
    description: 'Preparación de superficies con un acabado uniforme y resistente.',
  },
  {
    title: 'Pintura interior',
    description: 'Acabados de calidad para espacios funcionales y con personalidad.',
  },
  {
    title: 'Reformas integrales',
    description: 'Transformación completa de viviendas y locales con más valor.',
  },
  {
    title: 'Baños y cocinas',
    description: 'Renovación de zonas clave con materiales duraderos y un diseño limpio.',
  },
  {
    title: 'Suelos y revestimientos',
    description: 'Soluciones para pisos y acabados que mejoran la experiencia diaria.',
  },
];

export default function ServiciosPage() {
  return (
    <section className="page-layout">
      <p className="eyebrow">Servicios</p>
      <h1>Soluciones completas para tu hogar</h1>
      <p className="lead">
        Reformamos espacios con orden, claridad y detalle para que cada proyecto se entregue con
        calidad y sin complicaciones.
      </p>

      <div className="stack-grid">
        {services.map((service) => (
          <article key={service.title} className="listing-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
