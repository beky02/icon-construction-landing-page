import { Kicker } from '../components/Kicker';
import { impact } from '../data/site';

export function Impact() {
  return (
    <section id="impact" className="impact">
      <div className="shell">
        <Kicker onDark>07 · Our impact</Kicker>

        <div className="impact__grid">
          {impact.map((stat) => (
            <div key={stat.label} className="impact__cell">
              <div className="impact__value">{stat.value}</div>
              <div className="impact__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
