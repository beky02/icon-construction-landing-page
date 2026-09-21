import { Corners } from '../components/Corners';

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__skyline" aria-hidden="true" />

      <div className="contact__body">
        <h2 className="contact__title">Let's build what Ethiopia needs next.</h2>
        <p className="contact__lede">
          From essential community facilities to transformative urban
          infrastructure, Icon Construction is committed to delivering projects
          that move Ethiopia forward.
        </p>

        <div className="btnRow">
          <a href="#contact" className="btn blueprint btnLg btnBrass">
            Start a Project →
            <Corners />
          </a>
          <a href="#contact" className="btn blueprint btnLg btnOnDark">
            Contact Icon Construction →
            <Corners />
          </a>
        </div>
      </div>
    </section>
  );
}
