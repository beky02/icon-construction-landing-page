import { Corners } from '../components/Corners';

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__skyline" aria-hidden="true" />

      <div className="hero__survey" aria-hidden="true">
        <div className="hero__surveyMid">
          <div className="hero__surveyCore" />
        </div>
      </div>

      <div className="hero__body">
        <div className="hero__eyebrow">
          <span className="hero__eyebrowRule" aria-hidden="true" />
          <span className="hero__eyebrowText">Icon Construction · Ethiopia</span>
        </div>

        <h1 className="hero__title">Building Ethiopia's Future</h1>

        <p className="hero__lede">
          Engineering and construction solutions shaping stronger communities,
          better infrastructure, and a better future for Ethiopia.
        </p>

        <div className="btnRow">
          <a href="#projects" className="btn blueprint btnLg btnBrass">
            Explore Our Projects
            <Corners />
          </a>
          <a href="#contact" className="btn blueprint btnLg btnOnDark">
            Work With Us
            <Corners />
          </a>
        </div>
      </div>

      <div className="hero__strap">
        <span className="hero__strapItem">Building Ethiopia.</span>
        <span className="hero__strapItem">Building Communities.</span>
        <span className="hero__strapItem hero__strapItem--accent">Building the Future.</span>
      </div>
    </section>
  );
}
