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

        <p className="impact__note">
          Example figures shown for layout. Replace with verified company
          statistics before publication.
        </p>
      </div>
    </section>
  );
}
