/**
 * Partner logo strip. Renders only confirmed partners with supplied assets.
 * With no confirmed partners and no assets on file, this renders nothing —
 * the layout simply collapses. Never display placeholder or invented logos.
 */

export interface PartnerLogo {
  name: string;
  logoSrc: string;
  href?: string;
}

export function PartnerStrip({ partners }: { partners: PartnerLogo[] }) {
  const confirmed = partners.filter((p) => p.logoSrc);
  if (confirmed.length === 0) return null;

  return (
    <section aria-label="Confirmed partners" className="section-tight band-ivory-deep">
      <div className="container">
        <h2 className="visually-hidden">Confirmed partners</h2>
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem 2.5rem',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {confirmed.map((p) => (
            <li key={p.name}>
              {p.href ? (
                <a href={p.href} rel="noopener noreferrer">
                  <img src={p.logoSrc} alt={p.name} />
                </a>
              ) : (
                <img src={p.logoSrc} alt={p.name} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
