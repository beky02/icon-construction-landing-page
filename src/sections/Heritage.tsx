import { Corners } from '../components/Corners';
import { Kicker } from '../components/Kicker';

export function Heritage() {
  return (
    <section className="section">
      <div className="shell heritage">
        <div className="blueprint heritage__emblem">
          <div className="heritage__ring1">
            <div className="heritage__ring2">
              <div className="heritage__core" />
            </div>
          </div>
          <div className="heritage__skyline" aria-hidden="true" />
          <Corners />
        </div>

        <div>
          <Kicker>06 · Heritage and engineering</Kicker>
          <h2 className="sectionTitle heritage__title">
            Rooted in Ethiopia.
            <br />
            Engineering the future.
          </h2>

          <p className="heritage__body">
            Ethiopia has built in stone for centuries. The geometry of that
            tradition — axial, repeated, precise — still reads clearly in the
            structures we put up today: bridges, corridors, civic buildings and
            the public spaces between them.
          </p>
          <p className="heritage__body">
            We work to the same standard, with modern methods, modern materials
            and Ethiopian engineers who know what the country needs next.
          </p>

          <div className="heritage__tags">
            <span className="tag tag-outline heritage__tag">Axial geometry</span>
            <span className="tag tag-outline heritage__tag">Stone and concrete</span>
            <span className="tag tag-outline heritage__tag heritage__tag--brass">
              Modern methods
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
