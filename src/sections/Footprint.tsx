import { useState } from 'react';
import { Corners } from '../components/Corners';
import { Figure } from '../components/Figure';
import { Kicker } from '../components/Kicker';
import { ETHIOPIA_PATH, MAP_VIEW_BOX_ATTR, projectToPercent } from '../data/ethiopia';
import { mapSites } from '../data/site';

export function Footprint() {
  const [activeCity, setActiveCity] = useState(mapSites[0].city);
  const selected = mapSites.find((site) => site.city === activeCity) ?? mapSites[0];

  return (
    <section id="footprint" className="section">
      <div className="shell">
        <Kicker>04 · Our footprint</Kicker>

        <div className="splitHead">
          <h2 className="sectionTitle">Our work across Ethiopia</h2>
          <p className="lede">
            From urban corridors to community facilities, Icon Construction
            contributes to infrastructure development across Ethiopia. Select a
            marker to view the project.
          </p>
        </div>

        <div className="footprint__layout">
          <div className="blueprint footprint__map">
            <div className="footprint__plot">
              <svg className="footprint__svg" viewBox={MAP_VIEW_BOX_ATTR} role="presentation">
                <path className="footprint__country" d={ETHIOPIA_PATH} />
                {mapSites.map((site) => {
                  const active = site.city === selected.city;
                  return (
                    <g
                      key={site.city}
                      className="footprint__pin"
                      data-active={active}
                      transform={`translate(${site.x},${site.y})`}
                      onClick={() => setActiveCity(site.city)}
                    >
                      <circle className="footprint__pinHit" r={26} />
                      <circle className="footprint__pinRing" r={active ? 20 : 14} />
                      <circle className="footprint__pinDot" r={active ? 11 : 7} />
                    </g>
                  );
                })}
              </svg>

              {/* City names ride above the SVG rather than inside it, so they
                  stay at a readable size instead of scaling with the map. */}
              {mapSites.map((site) => {
                const active = site.city === selected.city;
                return (
                  <button
                    key={site.city}
                    type="button"
                    className="footprint__label"
                    style={projectToPercent(site.x, site.y)}
                    aria-pressed={active}
                    onClick={() => setActiveCity(site.city)}
                  >
                    {site.city}
                  </button>
                );
              })}
            </div>
            <Corners />
          </div>

          <div className="blueprint footprint__detail">
            <Figure className="footprint__photo" caption={selected.photo} framed={false}>
              <div className="figure__layer footprint__photoBlocks" />
            </Figure>

            <div className="microLabel footprint__region">{selected.region}</div>
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
