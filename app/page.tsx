const services = [
  {
    title: 'Alisado de paredes',
    description: 'Superficies perfectas, lisas y preparadas para un acabado impecable.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Pintura interior',
    description: 'Colores que transforman cada estancia y dan personalidad al hogar.',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Reformas integrales',
    description: 'Soluciones completas para renovar, ampliar y mejorar tu espacio.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Baños y cocinas',
    description: 'Diseño funcional con acabados duraderos y elegante detalle.',
    image:
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Suelos y revestimientos',
    description: 'Materiales y acabados pensados para un uso diario cómodo y resistente.',
    image:
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80',
  },
];

const posts = [
  {
    category: 'Pintura',
    title: 'Cómo elegir el mejor color para tu hogar',
    date: '12 Abr 2025',
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'Reformas',
    title: 'Errores comunes en reformas y cómo evitarlos',
    date: '8 Abr 2025',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'Alisado',
    title: 'El secreto de un acabado perfecto en paredes',
    date: '2 Abr 2025',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-home" id="hero-sentinel">
        <img
          className="hero-photo"
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
          alt="Trabajador reformando un espacio interior"
        />
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">Reformas integrales</p>
            <h1>Damos vida a tus espacios</h1>
            <p className="lead">
              Especialistas en alisado y pintura, con una experiencia real en reformas y acabados
              que mejoran cada rincón de tu hogar.
            </p>

            <div className="hero-actions">
              <a href="/servicios" className="button button-primary">
                Ver servicios
              </a>
              <a href="/contacto" className="button button-secondary">
                Contactanos
              </a>
            </div>
          </div>

          <ul className="micro-trust" aria-label="Estadísticas de confianza">
            <li>
              <strong>10+</strong>
              <span>Años de experiencia</span>
            </li>
            <li>
              <strong>500+</strong>
              <span>Proyectos realizados</span>
            </li>
            <li>
              <strong>100%</strong>
              <span>Clientes satisfechos</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="services-layout">
        <div className="section-intro">
          <p className="eyebrow">Nuestros servicios</p>
          <h2>Soluciones completas para tu hogar</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <img src={service.image} alt={service.title} />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="/servicios" aria-label={`Más información sobre ${service.title}`}>
                  +
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section">
        <div className="about-visual">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
            alt="Casa reformada con grandes ventanales"
          />
        </div>

        <div className="about-copy">
          <p className="eyebrow">Sobre nosotros</p>
          <h2>Experiencia, compromiso y resultados</h2>
          <p>
            En ReformaPro llevamos años transformando hogares y espacios comerciales con un método
            claro, ordenado y cuidando cada detalle. Trabajamos con precisión, materiales de calidad
            y una atención cercana desde el primer contacto.
          </p>

          <div className="about-stats">
            <div>
              <strong>+10</strong>
              <span>Años de experiencia</span>
            </div>
            <div>
              <strong>+500</strong>
              <span>Proyectos realizados</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Clientes satisfechos</span>
            </div>
          </div>
        </div>
      </section>

      <section className="posts-section">
        <div className="section-intro split">
          <div>
            <p className="eyebrow">Nuestro blog</p>
            <h2>Ideas, consejos y novedades</h2>
          </div>
          <a href="/blog" className="text-link">
            Ver todos los artículos →
          </a>
        </div>

        <div className="posts-grid">
          {posts.map((post) => (
            <article key={post.title} className="post-card">
              <div className="post-image-wrap">
                <img src={post.image} alt={post.title} />
                <span>{post.category}</span>
              </div>
              <div className="post-body">
                <h3>{post.title}</h3>
                <p>{post.date}</p>
                <a href="/blog">Leer más →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-banner">
        <div className="contact-copy">
          <p className="eyebrow">Contacto</p>
          <h2>¿Hablamos de tu proyecto?</h2>
          <p>
            Estamos encantados de ayudarte a mejorar tu hogar o negocio con una propuesta clara,
            ajustada a tu presupuesto y llevada a cabo con profesionales.
          </p>
          <a href="/presupuesto" className="button button-primary">
            Contacta ahora
          </a>
        </div>

        <div className="contact-box">
          <div className="contact-row">
            <label>
              Nombre completo
              <input type="text" placeholder="Tu nombre" />
            </label>
            <label>
              Email
              <input type="email" placeholder="tuemail@ejemplo.com" />
            </label>
          </div>
          <label>
            Tipo de servicio
            <select defaultValue="">
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="pintura">Pintura</option>
              <option value="reformas">Reformas</option>
              <option value="alisado">Alisado</option>
            </select>
          </label>
          <label>
            Mensaje
            <textarea rows={4} placeholder="Cuéntanos tu proyecto" />
          </label>
          <button type="button" className="button button-primary full-width">
            Enviar mensaje
          </button>
        </div>
      </section>
    </>
  );
}
