import { useState } from 'react';
import { Corners } from '../components/Corners';
import { Figure } from '../components/Figure';
import { Kicker } from '../components/Kicker';
import { ETHIOPIA_PATH, MAP_VIEW_BOX_ATTR } from '../data/ethiopia';
import { mapSites } from '../data/site';

export function Footprint() {
  const [activeSiteName, setActiveSiteName] = useState(mapSites[0].name);
  const selected = mapSites.find((site) => site.name === activeSiteName) ?? mapSites[0];

  // Every project sits in Benishangul-Gumuz, and two of them are in Assosa
  // itself, so markers overlap no matter how they are placed. Draw the
  // selected one last and it always wins the stack.
  const drawOrder = mapSites
    .map((site, index) => ({ site, index }))
    .sort((a, b) => Number(a.site.name === selected.name) - Number(b.site.name === selected.name));

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
                {drawOrder.map(({ site, index }) => (
                  <g
                    key={site.name}
                    className="footprint__pin"
                    data-active={site.name === selected.name}
                    transform={`translate(${site.x},${site.y})`}
                    onClick={() => setActiveSiteName(site.name)}
                  >
                    <circle className="footprint__pinHit" r={28} />
                    <circle className="footprint__pinRing" r={site.name === selected.name ? 24 : 18} />
                    <circle className="footprint__pinDot" r={site.name === selected.name ? 17 : 13} />
                    <text className="footprint__pinNum" textAnchor="middle" dy="0.34em">
                      {index + 1}
                    </text>
                  </g>
                ))}
              </svg>
              <Corners />
            </div>

            <ol className="footprint__key">
              {mapSites.map((site, index) => (
                <li key={site.name} className="footprint__keyRow">
                  <button
                    type="button"
                    className="footprint__keyBtn"
                    aria-pressed={site.name === selected.name}
                    onClick={() => setActiveSiteName(site.name)}
                  >
                    <span className="footprint__keyNum" aria-hidden="true">
                      {index + 1}
                    </span>
                    <span className="footprint__keyName">{site.name}</span>
                    <span className="footprint__keyCity">{site.city}</span>
                  </button>
                </li>
              ))}
            </ol>
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
