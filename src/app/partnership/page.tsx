import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, StatusNote } from '@/components/ui';

export const metadata: Metadata = {
  title: 'How the Partnership works — Brighton, Alabama',
  description:
    'The proposed partnership brings community priorities, local participation, development programs, and funding oversight into one coordinated approach for Brighton, Alabama.',
};

const roles: { role: string; responsibility: string }[] = [
  {
    role: 'Residents',
    responsibility: 'Identify priorities, participate, and provide feedback.',
  },
  {
    role: 'Local businesses',
    responsibility:
      'Explore delivery, sponsorship, commerce, and employment opportunities.',
  },
  {
    role: 'Civic leaders',
    responsibility:
      'Help establish local priorities and public coordination; initiative roles require confirmation.',
  },
  {
    role: 'BW Town',
    responsibility:
      'Proposed community network connecting residents, businesses, and programs.',
  },
  {
    role: 'UpLift Foundation',
    responsibility:
      'Proposed mission and community-development partner; exact responsibilities to be confirmed.',
  },
  {
    role: 'Board of Investment',
    responsibility:
      'Proposed project planning and oversight function; membership and authority to be confirmed.',
  },
  {
    role: 'Community Development Fund',
    responsibility:
      'Proposed resource-management mechanism for community projects; administrator and allocation rules to be confirmed.',
  },
  {
    role: 'Program operators',
    responsibility:
      'Deliver confirmed sports, mentoring, food, commerce, and other projects under documented arrangements.',
  },
];

const faqs = [
  {
    q: 'Is the partnership already fully established?',
    a: 'The initiative is being developed. Confirmed arrangements and supporting documents will be published as they become available.',
  },
  {
    q: 'How are priorities chosen?',
    a: 'The intended approach combines local input, project feasibility, available resources, and documented oversight. The final process will be published once agreed.',
  },
  {
    q: 'Who manages the fund?',
    a: 'The administrator, oversight structure, and allocation process will be published when confirmed.',
  },
  {
    q: 'How does Brighton benefit from county programs?',
    a: 'Any participation, distributions, or revenue-sharing will depend on documented agreements. Those terms will be explained here when established.',
  },
];

export default function PartnershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Our partnership"
        title="Working together for Brighton"
        lede="The proposed partnership brings community priorities, local participation, development programs, and funding oversight into one coordinated approach."
      />

      {/* Roles */}
      <section className="section band-white" aria-labelledby="roles-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Proposed roles</span>
            <h2 id="roles-heading">Who does what in the proposed model</h2>
            <p className="lede">
              Every role below is proposed. Membership, authority, and
              responsibilities are confirmed through documented agreements
              before any of these roles are treated as established.
            </p>
          </div>

          <div className="table-wrap">
            <table className="data-table">
              <caption>
                Proposed roles in the Brighton Community Development Partnership
              </caption>
              <thead>
                <tr>
                  <th scope="col">Participant</th>
                  <th scope="col">Proposed responsibility</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((r) => (
                  <tr key={r.role}>
                    <th scope="row" style={{ whiteSpace: 'nowrap' }}>
                      {r.role}
                    </th>
                    <td>{r.responsibility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="table-note">
            All entries describe proposed roles in a developing initiative.
            None should be read as a confirmed appointment or binding agreement.
          </p>
        </div>
      </section>

      {/* Model explainer */}
      <section className="section band-navy" aria-labelledby="model-heading">
        <div className="container">
          <div className="split split-8-4">
            <div>
              <div className="section-head" style={{ marginBottom: '1.4rem' }}>
                <span className="eyebrow">The vision</span>
                <h2 id="model-heading">Coordinated stewardship, in plain terms</h2>
              </div>
              <p>
                The vision is coordinated stewardship of resources for the
                community, similar to how a family office organizes planning and
                resources for a family.
              </p>
              <p>
                In this community setting, that means priorities are gathered
                locally, projects are planned with named responsibility,
                resources are sought and allocated with documented oversight,
                and results are reported back to residents.
              </p>
              <p className="mb-0 text-soft">
                This is an analogy for planning and stewardship. It does not
                mean an investment-management service has been established, and
                residents do not automatically own shares in anything through
                this initiative.
              </p>
            </div>
            <div>
              <div className="card card-flat">
                <h3>What is confirmed today</h3>
                <ul style={{ paddingLeft: '1.1rem', marginBottom: 0 }}>
                  <li>The initiative is in development</li>
                  <li>Program ideas are being explored locally</li>
                  <li>Partnership agreements: none published yet</li>
                  <li>Fund administrator: to be confirmed</li>
                  <li>Board membership: to be confirmed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* County subsection */}
      <section
        className="section band-ivory-deep"
        aria-labelledby="county-participation-heading"
        id="county"
      >
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">County connection</span>
            <h2 id="county-participation-heading">
              Regional participation, when it is documented
            </h2>
            <p className="lede">
              The proposed county model would let participating towns
              collaborate on regional programs — sports, food, business, and
              related services — and receive benefits under agreed arrangements.
            </p>
          </div>

          <div className="card-grid card-grid-2">
            <div className="card">
              <h3>How Brighton could take part</h3>
              <p>
                Brighton&apos;s participation, the programs it joins, and any
                share of resources would be set out in documented agreements.
                Those terms will be published here when established.
              </p>
            </div>
            <div className="card">
              <h3>About RedCore Arena</h3>
              <p>
                RedCore Arena is a proposed regional connection mentioned in
                planning discussions. It is not a confirmed Brighton facility,
                it has no assigned Brighton address on this site, and its
                funding has not been confirmed.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '1.8rem' }}>
            <StatusNote>
              County program regions shown anywhere on this site are planning
              concepts labeled as program regions — not official government
              districts.
            </StatusNote>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section band-white" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Questions</span>
            <h2 id="faq-heading">Common questions about the partnership</h2>
          </div>

          <div className="faq-list">
            {faqs.map((item) => (
              <article key={item.q} className="faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
            <article className="faq-item">
              <h3>How can I participate?</h3>
              <p>
                Residents, businesses, organizations, and funding partners can
                all start on the{' '}
                <Link href="/get-involved/">Get Involved</Link> page.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
