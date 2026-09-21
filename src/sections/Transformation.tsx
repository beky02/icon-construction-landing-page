import { useState } from 'react';
import type { CSSProperties } from 'react';
import { Corners } from '../components/Corners';
import { Kicker } from '../components/Kicker';
import { themes } from '../data/site';

export function Transformation() {
  const [compare, setCompare] = useState(52);

  // Fed to the stylesheet rather than applied element by element, so the
  // clip and the handle can never disagree about where the wipe sits.
  const wipe = {
    '--after-clip': `${100 - compare}%`,
    '--after-pos': `${compare}%`,
  } as CSSProperties;

  return (
    <section className="section section--surfaceTop">
      <div className="shell">
        <Kicker>05 · Urban transformation</Kicker>

        <div className="splitHead">
          <h2 className="sectionTitle">
            Ethiopian cities,
            <br />
            rebuilt around people
          </h2>
          <p className="lede">
            Construction is not only concrete and roads. It changes how people
            live, work, travel, learn and reach essential services. Drag the
            handle to compare a corridor before and after delivery.
          </p>
        </div>

        <div className="blueprint compare">
          <div className="compare__viewport" style={wipe}>
            <div className="compare__beforeMass" />
            <span className="compare__tag compare__tag--before">Before</span>

            <div className="compare__after">
              <div className="compare__afterMass" />
              <div className="compare__centreline" />
              <div className="compare__walkway" />
              <span className="compare__tag compare__tag--after">After</span>
            </div>

            <input
              type="range"
              min={0}
              max={100}
              value={compare}
              onChange={(event) => setCompare(Number(event.target.value))}
              aria-label="Compare before and after"
              aria-valuetext={`${compare}% rebuilt`}
              className="compare__range"
            />
            <div className="compare__handle" />
          </div>
          <Corners />
        </div>

        <div className="themes">
          {themes.map((theme) => (
            <div key={theme.title} className="themes__cell">
              <div className="themes__title">{theme.title}</div>
              <p className="themes__body">{theme.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
