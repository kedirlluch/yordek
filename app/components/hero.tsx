import { Button } from './design-system';

const trustStats = [
  { value: '+15 años', label: 'de experiencia' },
  { value: '1.200+', label: 'proyectos' },
  { value: 'Garantía', label: 'en acabados' },
];

export default function Hero() {
  return (
    <section className="hero-home" aria-labelledby="home-hero-title">
      <div id="hero-sentinel" aria-hidden="true" />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
        alt="Interior reformado con paredes y acabados de calidad"
        className="hero-image"
        fetchPriority="high"
        sizes="(max-width: 768px) 100vw, 100vw"
      />

      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Reformas integrales en Valencia</p>
          <h1 id="home-hero-title">Renovamos espacios para vivir mejor.</h1>
          <p className="lead">
            Reformas, alisado y pintura para viviendas y locales con una ejecución cuidadosa,
            clara y orientada a la calidad final.
          </p>

          <div className="hero-actions">
            <Button as="link" href="/presupuesto" className="button-primary">
              Pedir presupuesto
            </Button>
            <Button as="link" href="/proyectos" variant="secondary" className="button-secondary">
              Ver proyectos
            </Button>
          </div>

          <ul className="micro-trust" aria-label="Datos de confianza">
            {trustStats.map((item) => (
              <li key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a href="#hero-details" className="scroll-cue" aria-label="Ir a la siguiente sección">
        <span>Scroll</span>
      </a>
    </section>
  );
}
