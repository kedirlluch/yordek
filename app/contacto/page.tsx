export default function ContactoPage() {
  return (
    <section className="page-layout contact-layout">
      <div>
        <p className="eyebrow">Contacto</p>
        <h1>Hablemos de tu proyecto</h1>
        <p className="lead">
          Estaremos encantados de ayudarte a valorar tu reforma, darte una primera orientación y
          llevarlo adelante con el mejor criterio posible.
        </p>

        <ul className="contact-list">
          <li>📞 +34 612 345 678</li>
          <li>✉️ info@reformapro.es</li>
          <li>📍 Madrid, España</li>
        </ul>
      </div>

      <form className="quote-form">
        <label>
          Nombre completo
          <input type="text" placeholder="Tu nombre" />
        </label>
        <label>
          Email
          <input type="email" placeholder="tuemail@email.com" />
        </label>
        <label>
          Mensaje
          <textarea rows={5} placeholder="Cuéntanos brevemente tu proyecto" />
        </label>
        <button type="submit" className="button button-primary">
          Enviar consulta
        </button>
      </form>
    </section>
  );
}
