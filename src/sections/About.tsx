import type { ReactNode } from 'react';
import { Figure } from '../components/Figure';
import { Kicker } from '../components/Kicker';
import { Reveal } from '../components/Reveal';
import { aboutCards } from '../data/site';
import type { AboutCard } from '../data/site';

/** The drawn stand-ins, shown until each card has a photograph. Keyed to
 *  match `aboutCards` in the data; the copy lives there, the artwork here. */
const artwork: Record<AboutCard['id'], ReactNode> = {
  people: (
    <>
      <div className="figure__layer about__valley" />
      <div className="about__mast" />
    </>
  ),
  communities: (
    <>
      <div className="figure__layer about__blocks" />
      <div className="figure__layer about__hatch" />
    </>
  ),
  progress: (
    <>
      <div className="figure__layer about__road" />
      <div className="figure__layer about__roadLine" />
    </>
  ),
};

export function About() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <Reveal className="about__head">
          <div>
            <Kicker>01 · Who we build for</Kicker>
            <h2 className="sectionTitle">
              Built for Ethiopia.
              <br />
              Built for People.
            </h2>
          </div>
          <p className="lede lede--wide">
            Icon Construction understands the specific demands of building in
            Ethiopia — the terrain, the regulatory environment, the supply chains
            and the communities that live alongside every site. We deliver
            projects that meet international engineering standards and serve the
            people who use them every day.
          </p>
        </Reveal>

        <div className="about__grid">
          {aboutCards.map((card) => (
            <Reveal key={card.id}>
              <Figure
                className={`about__figure about__figure--${card.id}`}
                caption={card.photo}
                src={card.image}
              >
                {artwork[card.id]}
              </Figure>
              <h3 className="about__cardTitle">{card.title}</h3>
              <p className="about__cardBody">{card.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
