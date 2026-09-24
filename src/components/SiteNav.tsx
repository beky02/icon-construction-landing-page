import { useEffect, useState } from 'react';
import { navLinks } from '../data/site';
import { Corners } from './Corners';

export function SiteNav() {
  const [open, setOpen] = useState(false);

  /* The drawer covers the page on a phone, so it has to behave like a
     dialog: Escape closes it, and the page underneath stops scrolling
     while it is up. Both are undone the moment it closes. */
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };

    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    document.body.classList.add('is-navOpen');

    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      document.body.classList.remove('is-navOpen');
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={open ? 'siteNav is-open' : 'siteNav'}>
        <a className="siteNav__brand" href="#top" onClick={close}>
          <img className="siteNav__logo" src="/images/logo/logo.png" alt="Icon Construction" />
          <span className="siteNav__brandName">Icon Construction</span>
        </a>

        {/* Only ever visible below the width where the bar stops fitting —
            see the narrow-viewport block in app.css. */}
        <button
          type="button"
          className="siteNav__toggle"
          id="siteNavToggle"
          aria-controls="siteNavMenu"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((wasOpen) => !wasOpen)}
        >
          <span className="siteNav__bars" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>

        {/* `display: contents` on wide screens, so the links and the CTA stay
            direct flex items of the header bar and nothing changes there. */}
        <div className="siteNav__menu" id="siteNavMenu">
          <div className="siteNav__links">
            {navLinks.map((link) => (
              <a key={link.href} className="siteNav__link" href={link.href} onClick={close}>
                {link.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="btn btn-primary blueprint siteNav__cta" onClick={close}>
            Start a Project
            <Corners />
          </a>
        </div>
      </nav>

      {/* A sibling of the header, not a child: inside it, the scrim would
          paint over the bar's own background and grey out the brand. */}
      <button
        type="button"
        className={open ? 'siteNav__scrim is-open' : 'siteNav__scrim'}
        tabIndex={-1}
        aria-hidden="true"
        onClick={close}
      />
    </>
  );
}
