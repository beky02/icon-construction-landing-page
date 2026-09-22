import { useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { Corners } from '../components/Corners';
import { Kicker } from '../components/Kicker';
import { themes, transformation } from '../data/site';

/** One side of the wipe. Shows the photograph if there is one and it loads,
 *  and the drawn stand-in otherwise — so a missing or mistyped file leaves
 *  the section looking deliberate instead of showing a broken image. */
function CompareLayer({
  image,
  alt,
  className,
  children,
}: {
  image?: string;
  alt: string;
  className?: string;
  children: ReactNode;
}) {
  const [failed, setFailed] = useState(false);

  if (!image || failed) return <>{children}</>;

  return (
    <img
      className={['compare__img', className].filter(Boolean).join(' ')}
      src={image}
      alt={alt}
      onError={() => setFailed(true)}
    />
  );
}

export function Transformation() {
  const [compare, setCompare] = useState(52);
  const { before, after } = transformation;

  // The comparison is a two-panel split rather than a reveal mask, so each
  // image fills its half of the frame and the divider stays in sync.
  const wipe = {
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
            <div className="compare__before">
              <CompareLayer image={before.image} alt={before.alt} className="compare__img--before">
                <div className="compare__beforeMass" />
              </CompareLayer>
              <span className="compare__tag compare__tag--before">Before</span>
            </div>

            <div className="compare__after">
              <CompareLayer image={after.image} alt={after.alt} className="compare__img--after">
                <>
                  <div className="compare__afterMass" />
                  <div className="compare__centreline" />
                  <div className="compare__walkway" />
                </>
              </CompareLayer>
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
