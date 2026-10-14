import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, EmptyState, StatusNote } from '@/components/ui';
import { PersonCard } from '@/components/PersonCard';
import {
  publishedPeople,
  confirmedPartnershipTeam,
  confirmedFundOversight,
} from '@/content/people';

export const metadata: Metadata = {
  title: 'Civic leadership & partnership team — Brighton, Alabama',
  description:
    'Meet Brighton’s civic leadership and, as participation is confirmed, the people helping guide this community development initiative.',
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="People serving Brighton"
        lede="Meet Brighton’s civic leadership and, as participation is confirmed, the people helping guide this community development initiative."
      />

      {/* A. Civic leadership — public offices */}
      <section className="section band-white" aria-labelledby="civic-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Section A</span>
            <h2 id="civic-heading">Brighton civic leadership</h2>
            <p className="lede">
              Public offices held by Brighton leaders, supported by current
              public sources. Holding public office does not by itself imply a
              role in this proposed partnership.
            </p>
          </div>

          {publishedPeople.length > 0 ? (
            <div className="card-grid card-grid-3">
              {publishedPeople.map((person) => (
                <PersonCard key={person.id} person={person} />
              ))}
            </div>
          ) : (
            <EmptyState title="Civic leadership records are being verified">
              <p>Verified public officials will be listed here.</p>
            </EmptyState>
          )}

          <div className="callout" style={{ marginTop: '2rem' }}>
            <p>
              <strong>About the council roster:</strong> records for additional
              council members are being verified with the city clerk before
              publication. This site will not publish council members, seats,
              or portraits that have not been confirmed against an official
              current roster.
            </p>
            <p className="mb-0">
              For official city information, see the{' '}
              <a href="https://brightonal.org/" rel="noopener noreferrer">
                City of Brighton website
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* B. Partnership team — confirmed participants only */}
      <section
        className="section band-ivory-deep"
        aria-labelledby="team-heading"
        id="partnership-team"
      >
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Section B</span>
            <h2 id="team-heading">Partnership team</h2>
            <p className="lede">
              People and organizations with a confirmed role in developing this
              initiative. Participation is listed here only after it is
              documented.
            </p>
          </div>

          {confirmedPartnershipTeam.length > 0 ? (
            <div className="card-grid card-grid-3">
              {confirmedPartnershipTeam.map((person) => (
                <PersonCard key={person.id} person={person} />
              ))}
            </div>
          ) : (
            <EmptyState title="Participation is being confirmed">
              <p>
                No partnership participant has supplied a confirmed role,
                biography, and portrait for publication yet. As participation
                is documented, each person or organization will appear here
                with their exact initiative role.
              </p>
              <p className="mb-0">
                Organizations involved in planning discussions — including BW
                Town, the UpLift Foundation, the Board of Investment, and the
                Community Development Fund — are described on the{' '}
                <Link href="/partnership/">How the Partnership Works</Link>{' '}
                page as proposed roles, not confirmed appointments.
              </p>
            </EmptyState>
          )}
        </div>
      </section>

      {/* C. Fund oversight — hidden until supplied */}
      {confirmedFundOversight.length > 0 && (
        <section className="section band-white" aria-labelledby="oversight-heading">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Section C</span>
              <h2 id="oversight-heading">Fund oversight</h2>
              <p className="lede">
                Confirmed governance appointments for the community fund.
              </p>
            </div>
            <div className="card-grid card-grid-3">
              {confirmedFundOversight.map((person) => (
                <PersonCard key={person.id} person={person} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-tight band-ivory">
        <div className="container">
          <StatusNote>
            Leadership and governance listings on this page reflect what has
            been documented and confirmed. If you believe a record here is
            inaccurate, please raise it through the Get Involved page.
          </StatusNote>
          <div style={{ marginTop: '1.4rem' }}>
            <Link href="/get-involved/" className="btn btn-secondary">
              Contact the initiative
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
