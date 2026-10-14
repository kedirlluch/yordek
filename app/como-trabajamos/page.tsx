const steps = [
  {
    title: '1. Diagnóstico',
    description: 'Analizamos el estado del espacio, tus necesidades y el alcance del proyecto.',
  },
  {
    title: '2. Propuesta',
    description: 'Te presentamos una solución clara con materiales, tiempos y presupuesto.',
  },
  {
    title: '3. Ejecución',
    description: 'Trabajamos con orden, limpieza y atención constante a cada detalle.',
  },
  {
    title: '4. Entrega',
    description: 'Revisamos el resultado final con tu aprobación y dejamos el espacio listo.',
  },
];

export default function ComoTrabajamosPage() {
  return (
    <section className="page-layout">
      <p className="eyebrow">Proceso</p>
      <h1>Cómo trabajamos</h1>
      <p className="lead">
        Nuestra forma de trabajar está pensada para que cada reforma avance de forma segura, clara y
        sin sorpresas.
      </p>

      <div className="stack-grid">
        {steps.map((step) => (
          <article key={step.title} className="listing-card">
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
