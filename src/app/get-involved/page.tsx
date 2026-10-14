import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, StatusNote } from '@/components/ui';
import { PreviewInquiryForm } from '@/components/PreviewInquiryForm';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Get involved — Brighton, Alabama community partnership',
  description:
    'Share a community priority, explore a business partnership, propose collaboration, or discuss project support for Brighton, Alabama.',
};

const pathways = [
  {
    title: 'Residents',
    body: 'Share a community priority or participation interest. The strongest projects start with what neighbors notice every day.',
    icon: 'R',
  },
  {
    title: 'Businesses',
    body: 'Explore program delivery, local commerce, sponsorship, or expertise that could support community projects.',
    icon: 'B',
  },
  {
    title: 'Community organizations',
    body: 'Propose collaboration or services that align with Brighton’s priorities.',
    icon: 'C',
  },
  {
    title: 'Funding partners',
    body: 'Request project information or discuss support for documented initiatives.',
    icon: 'F',
  },
];

export default function GetInvolvedPage() {
  const formActive = false; // Set true only when a real, monitored form destination exists.

  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Bring your part to Brighton’s progress"
        lede="A community priority, a business partnership, expertise, or project support — every contribution starts with a conversation."
      />

      {/* Pathways */}
      <section className="section band-white" aria-labelledby="pathways-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Four ways to take part</span>
            <h2 id="pathways-heading">Find your pathway</h2>
          </div>

          <div className="card-grid card-grid-4">
            {pathways.map((p) => (
              <article key={p.title} className="benefit-card">
                <span className="benefit-mark" aria-hidden="true">
                  <strong style={{ fontFamily: 'var(--font-heading)' }}>{p.icon}</strong>
                </span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / form */}
      <section
        className="section band-ivory-deep"
        aria-labelledby="contact-heading"
        id="contact"
      >
        <div className="container">
          <div className="split split-8-4">
            <div>
              <div className="section-head" style={{ marginBottom: '1.4rem' }}>
                <span className="eyebrow">Start a conversation</span>
                <h2 id="contact-heading">Tell us what you’d like to bring</h2>
              </div>

              {!formActive ? (
                <>
                  <StatusNote>
                    Partnership contact details will be published shortly.
                  </StatusNote>
                  <p style={{ marginTop: '1.4rem' }}>
                    This site does not yet have a monitored inquiry inbox, so no
                    form is active on the public version. Nothing you might type
                    here would reach a person, and this site will never show a
                    “message sent” confirmation without real delivery behind it.
                  </p>
                  <p>
                    In the meantime, residents can always follow or contact the
                    city through its official channels:{' '}
                    <a href="https://brightonal.org/contact-us" rel="noopener noreferrer">
                      City of Brighton contact page
                    </a>
                    .
                  </p>

                  {/* Non-submitting preview form — review only */}
                  <PreviewInquiryForm />
                </>
              ) : (
                <p>
                  Contact details are published here once a monitored inbox
                  exists.
                </p>
              )}
            </div>

            <aside aria-label="While you wait">
              <div className="card card-flat">
                <h3>While you wait</h3>
                <ul style={{ paddingLeft: '1.1rem', marginBottom: 0 }}>
                  <li>
                    <Link href="/projects/">See program areas under consideration</Link>
                  </li>
                  <li>
                    <Link href="/partnership/">Understand the proposed model</Link>
                  </li>
                  <li>
                    <Link href="/funding/">Review funding and accountability</Link>
                  </li>
                  <li>
                    <a href="https://brightonal.org/" rel="noopener noreferrer">
                      Visit the City of Brighton website
                    </a>
                  </li>
                </ul>
              </div>
              <div style={{ marginTop: '1.2rem' }}>
                <StatusNote>
                  No donation checkout or investment option appears on this
                  site. Giving programs will be described here only after a
                  recipient entity and appropriate setup are confirmed.
                </StatusNote>
              </div>
              <p className="table-note" style={{ marginTop: '1.2rem' }}>
                Site status: {site.statusNoteShort}
              </p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
