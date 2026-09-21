import { useState } from 'react';
import { Corners } from '../components/Corners';
import { Figure } from '../components/Figure';
import { Kicker } from '../components/Kicker';
import { ETHIOPIA_PATH, MAP_VIEW_BOX_ATTR } from '../data/ethiopia';
import { mapMarkers, projects } from '../data/site';

export function Footprint() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const selected = projects.find((project) => project.id === activeId) ?? projects[0];

  // Every project is in Benishangul-Gumuz and three share Assosa town, so
  // markers sit close together. Draw the selected project's markers last and
  // they always win the stack.
  const drawOrder = [...mapMarkers].sort(
    (a, b) => Number(a.project.id === selected.id) - Number(b.project.id === selected.id),
  );

  return (
    <section id="footprint" className="section">
      <div className="shell">
        <Kicker>04 · Our footprint</Kicker>

        <div className="splitHead">
          <h2 className="sectionTitle">Our work across Ethiopia</h2>
          <p className="lede">
            From urban corridors to community facilities, Icon Construction
            contributes to infrastructure development across Ethiopia. Select a
            project to view it.
          </p>
        </div>

        <div className="footprint__layout">
          <div>
            <div className="blueprint footprint__map">
              {/* Decorative: the numbered key below carries the same
                  information in a form assistive tech can actually use. */}
              <svg className="footprint__svg" viewBox={MAP_VIEW_BOX_ATTR} aria-hidden="true">
                <path className="footprint__country" d={ETHIOPIA_PATH} />
                {drawOrder.map(({ project, pin, number }) => (
                  <g
                    key={`${project.id}-${pin.city}`}
                    className="footprint__pin"
                    data-active={project.id === selected.id}
                    transform={`translate(${pin.x},${pin.y})`}
                    onClick={() => setActiveId(project.id)}
                  >
                    <circle className="footprint__pinHit" r={28} />
                    <circle className="footprint__pinRing" r={project.id === selected.id ? 24 : 18} />
                    <circle className="footprint__pinDot" r={project.id === selected.id ? 17 : 13} />
                    <text className="footprint__pinNum" textAnchor="middle" dy="0.34em">
                      {number}
                    </text>
                  </g>
                ))}
              </svg>
              <Corners />
            </div>

            <ol className="footprint__key">
              {projects.map((project, index) => (
                <li key={project.id} className="footprint__keyRow">
                  <button
                    type="button"
                    className="footprint__keyBtn"
                    aria-pressed={project.id === selected.id}
                    onClick={() => setActiveId(project.id)}
                  >
                    <span className="footprint__keyNum" aria-hidden="true">
                      {index + 1}
                    </span>
                    <span className="footprint__keyName">{project.name}</span>
                    <span className="footprint__keyCity">
                      {project.pins.map((pin) => pin.city).join(' · ')}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </div>

          <div className="blueprint footprint__detail">
            <Figure className="footprint__photo" caption={selected.photo} framed={false}>
              <div className="figure__layer footprint__photoBlocks" />
            </Figure>

            <div className="microLabel footprint__region">{selected.pins[0].region}</div>
            <h3 className="footprint__name">{selected.name}</h3>

            <div className="footprint__meta">
              <div>
                <div className="microLabel footprint__metaLabel">Type</div>
                <div className="footprint__metaValue">{selected.type}</div>
              </div>
              <div>
                <div className="microLabel footprint__metaLabel">Status</div>
                <div className="footprint__metaValue footprint__metaValue--status">
                  {selected.status}
                </div>
              </div>
            </div>

            <Corners />
          </div>
        </div>
      </div>
    </section>
  );
}
