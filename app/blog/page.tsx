const posts = [
  {
    title: 'Cómo elegir el mejor color para tu hogar',
    description: 'Un paso clave para crear ambientes más cálidos, claros o modernos.',
  },
  {
    title: 'Errores comunes en reformas y cómo evitarlos',
    description: 'Conocer los puntos clave antes de empezar ayuda a ahorrar tiempo y dinero.',
  },
  {
    title: 'El secreto de un acabado perfecto en paredes',
    description: 'La preparación de la superficie marca la diferencia entre un resultado bueno y excelente.',
  },
];

export default function BlogPage() {
  return (
    <section className="page-layout">
      <p className="eyebrow">Blog</p>
      <h1>Ideas, consejos y novedades</h1>
      <p className="lead">
        Exploramos temas útiles sobre reformas, pintura y acabados para ayudarte a tomar decisiones
        con más claridad.
      </p>

      <div className="stack-grid">
        {posts.map((post) => (
          <article key={post.title} className="listing-card">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
