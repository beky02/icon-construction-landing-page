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
              Example: Bole Sub-City, Woreda 03
              <br />
              Addis Ababa, Ethiopia
              <br />
              P.O. Box 00000
            </p>
          </div>

          <div>
            <div className="microLabel siteFooter__head">Contact</div>
            <p className="siteFooter__text">
              Example: +251 11 000 0000
              <br />
              info@iconconstruction.example
              <br />
              tenders@iconconstruction.example
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
            Project names, figures and contact details on this page are
            placeholders for review.
          </span>
        </div>
      </div>
    </footer>
  );
}
