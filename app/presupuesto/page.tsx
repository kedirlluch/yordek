export default function PresupuestoPage() {
  return (
    <section className="page-layout form-page">
      <p className="eyebrow">Presupuesto</p>
      <h1>Solicita tu presupuesto</h1>
      <p className="lead">
        Cuéntanos tu proyecto y te responderemos con una propuesta clara, adaptada a tus necesidades
        y al tipo de trabajo que quieres realizar.
      </p>

      <form className="quote-form">
        <div className="form-row">
          <label>
            Nombre completo
            <input type="text" placeholder="Tu nombre" />
          </label>
          <label>
            Email
            <input type="email" placeholder="tuemail@email.com" />
          </label>
        </div>

        <div className="form-row">
          <label>
            Tipo de servicio
            <select defaultValue="">
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="alisado">Alisado</option>
              <option value="pintura">Pintura</option>
              <option value="reformas">Reformas</option>
            </select>
          </label>
          <label>
            Presupuesto estimado
            <input type="text" placeholder="Ej. 4.000€" />
          </label>
        </div>

        <label>
          Mensaje
          <textarea rows={5} placeholder="Cuéntanos qué quieres reformar, el estado del proyecto o tus ideas." />
        </label>

        <button type="submit" className="button button-primary">
          Enviar solicitud
        </button>
      </form>
    </section>
  );
}
