const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#impact', label: 'Our Impact' },
];

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="shell">
        <div className="siteFooter__top">
          <div>
            <div className="siteFooter__brand">Icon Construction</div>
            <p className="siteFooter__blurb">
              Building Ethiopia. Building Communities. Building the Future.
            </p>
          </div>

          <div>
            <div className="microLabel siteFooter__head">Office</div>
            <p className="siteFooter__text">
              Bole Sub-City, Woreda 03
              <br />
              Hidmona Building, Office 120
              <br />
              Addis Ababa, Ethiopia
            </p>
          </div>

          <div>
            <div className="microLabel siteFooter__head">Contact</div>
            <p className="siteFooter__text">
              <a className="siteFooter__link" href="tel:+251911394757">
                +251 911 394757
              </a>
              <br />
              <a className="siteFooter__link" href="mailto:iconconstruction@gmail.com">
                iconconstruction@gmail.com
              </a>
            </p>
          </div>

          <div>
            <div className="microLabel siteFooter__head">Navigate</div>
            <div className="siteFooter__links">
              {footerLinks.map((link) => (
                <a key={link.href} className="siteFooter__link" href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="siteFooter__bottom">
          <span>© 2026 Icon Construction PLC</span>
          <span>
            Project names and figures on this page are placeholders for review.
          </span>
        </div>
      </div>
    </footer>
  );
}
