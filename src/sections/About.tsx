import { Figure } from '../components/Figure';
import { Kicker } from '../components/Kicker';
import { Reveal } from '../components/Reveal';

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
          <Reveal>
            <Figure
              className="about__figure about__figure--people"
              caption="daily life on a completed corridor"
            >
              <div className="figure__layer about__valley" />
              <div className="about__mast" />
            </Figure>
            <h3 className="about__cardTitle">People</h3>
            <p className="about__cardBody">
              Infrastructure that improves everyday life.
            </p>
          </Reveal>

          <Reveal>
            <Figure
              className="about__figure about__figure--communities"
              caption="school or health centre in use"
            >
              <div className="figure__layer about__blocks" />
              <div className="figure__layer about__hatch" />
            </Figure>
            <h3 className="about__cardTitle">Communities</h3>
            <p className="about__cardBody">
              Schools, healthcare facilities, roads, and public spaces that
              connect communities.
            </p>
          </Reveal>

          <Reveal>
            <Figure
              className="about__figure about__figure--progress"
              caption="new road heading into a growing city"
            >
              <div className="figure__layer about__road" />
              <div className="figure__layer about__roadLine" />
            </Figure>
            <h3 className="about__cardTitle">Progress</h3>
            <p className="about__cardBody">
              Infrastructure supporting Ethiopia's continued urban and economic
              development.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
