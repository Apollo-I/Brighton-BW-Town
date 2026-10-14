import Link from 'next/link';
import { footerNav, municipalLinks, footerStatus, site } from '@/content/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-identity">
            <span className="wordmark" style={{ pointerEvents: 'none' }}>
              <span className="wordmark-mark" aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 19V9.5L12 4l8 5.5V19"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 19v-5h6v5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="wordmark-text">
                Brighton Community
                <br />
                Development Partnership
                <small>Brighton, Alabama</small>
              </span>
            </span>
            <p>
              A proposed community partnership bringing residents, businesses,
              civic leaders, and development partners together around
              Brighton&apos;s priorities.
            </p>
            {site.operatorName ? (
              <p>
                Operated by <strong>{site.operatorName}</strong>.
                {site.operatorContactEmail ? (
                  <>
                    {' '}
                    Contact:{' '}
                    <a href={`mailto:${site.operatorContactEmail}`}>
                      {site.operatorContactEmail}
                    </a>
                  </>
                ) : null}
              </p>
            ) : (
              <p>
                The operating organization and contact details for this
                partnership initiative will be published once confirmed.
              </p>
            )}
          </div>

          <nav aria-label="Footer">
            <h2>Explore</h2>
            <ul className="footer-links">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/privacy/">Privacy</Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2>Municipal services</h2>
            <p style={{ fontSize: '0.93rem', maxWidth: '34ch' }}>
              City services are provided by the City of Brighton. This is not
              the city website.
            </p>
            <ul className="footer-links">
              {municipalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-legal">
          <p>{footerStatus}</p>
          <p style={{ marginTop: '0.8rem' }}>
            © {new Date().getFullYear()} {site.name}.{' '}
            <Link href="/privacy/">Privacy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
