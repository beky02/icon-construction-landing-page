import { Kicker } from '../components/Kicker';
import { services } from '../data/site';

export function Services() {
  return (
    <section id="services" className="section section--surface">
      <div className="shell">
        <Kicker>02 · Our expertise</Kicker>
        <h2 className="sectionTitle services__title">
          Capabilities across the built environment
        </h2>

        <div className="services__grid">
          {services.map((service) => (
            <article key={service.num} className="services__card">
              <span className="services__num">{service.num}</span>
              <h3 className="services__cardTitle">{service.title}</h3>
              <p className="services__cardBody">{service.body}</p>
              <span className="services__rule" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
