import { navLinks } from '../data/site';
import { Corners } from './Corners';

export function SiteNav() {
  return (
    <nav className="siteNav">
      <a className="siteNav__brand" href="#top">
        <img className="siteNav__logo" src="/images/logo/logo.png" alt="Icon Construction" />
        <span className="siteNav__brandName">Icon Construction</span>
      </a>

      <div className="siteNav__links">
        {navLinks.map((link) => (
          <a key={link.href} className="siteNav__link" href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <a href="#contact" className="btn btn-primary blueprint siteNav__cta">
        Start a Project
        <Corners />
      </a>
    </nav>
  );
}
