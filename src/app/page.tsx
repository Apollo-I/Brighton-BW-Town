'use client'

import * as React from 'react';
import Link from 'next/link';
import { BackgroundArt } from '@/components/BackgroundArt';
import { LocationDiagram } from '@/components/LocationDiagram';
import { PartnerStrip } from '@/components/PartnerStrip';
import { PersonCard } from '@/components/PersonCard';
import { CompactLeaderCard } from '@/components/CompactLeaderCard';
import { AvatarRow } from '@/components/AvatarRow';
import { VisionModal } from '@/components/ui';
import { EmptyState, StatusNote, StatusPill } from '@/components/ui';
import type { Person } from '@/content/types';
import { publishedPeople } from '@/content/people';
import { publishedProjects, programAreas } from '@/content/projects';
import { site } from '@/content/site';

const benefits = [
  {
    title: 'Resources for local priorities',
    body: 'Organize funding and delivery around projects that matter to residents.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3v18M5 8h14M7 12h10M9 16h6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Opportunities for young people',
    body: 'Develop sports, mentoring, and community programs with local partners.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M5 19c1.2-3.2 3.8-5 7-5s5.8 1.8 7 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'A stronger local economy',
    body: 'Connect businesses and residents with opportunities that support community investment.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 19V5m0 14h16M8 15V9m4 6V7m4 8v-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Clear accountability',
    body: 'Make project leadership, funding status, and progress easier to follow.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3l7 3v5c0 4.4-3 8.2-7 10-4-1.8-7-5.6-7-10V6l7-3z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const steps = [
  { title: 'Identify priorities', body: 'Residents and local leaders surface what matters most in Brighton.' },
  { title: 'Organize projects and partners', body: 'Each priority becomes a defined project with named responsibility.' },
  { title: 'Secure and allocate resources', body: 'Funding is sought, documented, and allocated with clear records.' },
  { title: 'Deliver and report results', body: 'Work is carried out and progress is published for the community.' },
];

export default function HomePage() {
  const featuredProjects = publishedProjects.slice(0, 3);
  const mayor = publishedPeople.find((p) =>
    (p.publicOffice ?? '').toLowerCase().includes('mayor')
  );
  const [disclosureOpen, setDisclosureOpen] = React.useState(false);
  const [visionOpen, setVisionOpen] = React.useState(false);
  const [visionPerson, setVisionPerson] = React.useState<typeof mayor | null>(null);

  function showVisionModal(person: typeof mayor) {
    setVisionPerson(person);
    setVisionOpen(true);
  }

  // Compact leadership cards for the hero-adjacent section — up to 6 featured
  const featuredLeaders = publishedPeople.slice(0, 6);

  /** Returns the Person record for a given id, or null. */
  function personById(id: string) {
    return publishedPeople.find((p) => p.id === id) ?? null;
  }

  /** Up to 4 confirmed participants shown as overlapping avatars. */
  function participantAvatars(project: typeof publishedProjects[0]) {
    const confirmed: Person[] = [];
    for (const id of project.confirmedPeople) {
      const p = personById(id);
      if (p) confirmed.push(p);
    }
    const visible = confirmed.slice(0, 4);
    const extra = confirmed.length - 4;
    return { visible: visible as Person[], extra };
  }

  return (
    <>
      {/* ================= SECTION A — HERO ================= */}
      <section className="hero">
        <BackgroundArt variant="hero" />
        <div className="container hero-inner">
          <span className="hero-eyebrow" aria-hidden="true">
            Building a Brighter Future
          </span>
          <h1>
            More Opportunities.
            <br />
            Stronger Towns.
            <br />
            Brighter Futures.
          </h1>
          <p className="hero-lede">
            A proposed community partnership bringing residents, businesses,
            and civic leaders together to turn local priorities into practical
            projects.
          </p>
          {/* Compact partnership status disclosure switch */}
          <div className="hero-disclosure-row">
            <button
              type="button"
              className="disclosure-trigger"
              aria-expanded={disclosureOpen}
              aria-controls="partnership-disclosure"
              onClick={() => setDisclosureOpen((v) => !v)}
            >
              <span aria-hidden="true">About this partnership</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                style={{
                  transform: disclosureOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                }}
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {disclosureOpen && (
              <div
                id="partnership-disclosure"
                className="disclosure-panel"
                role="region"
                aria-labelledby="disc-trigger"
              >
                <p>
                  Partnership development is underway. Participation, project
                  roles, and funding are confirmed individually. This website
                  will be updated as arrangements are documented.
                </p>
              </div>
            )}
          </div>
          <div className="btn-row">
            <Link href="/projects/" className="btn btn-onnavy">
              Explore the Projects
            </Link>
            <Link href="/get-involved/" className="btn btn-onnavy-outline">
              Become a Partner
            </Link>
          </div>
          <a
            href="#leadership"
            className="hero-leadership-link"
          >
            Meet Your Town Leaders <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* ================= SECTION A2 — LEADERSHIP ================= */}
      <section
        className="section band-ivory-deep"
        aria-labelledby="leadership-heading"
        id="leadership"
      >
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Town Leaders at Work</span>
            <h2 id="leadership-heading">Meet the people serving our community—and explore their vision for its future.</h2>
          </div>

          {featuredLeaders.length > 0 ? (
            <>
              <div className="card-grid compact-grid">
                {featuredLeaders.map((person) => (
                  <CompactLeaderCard
                    key={person.id}
                    person={person}
                    showVisionModal={showVisionModal}
                    visionOpen={visionOpen}
                    visionPerson={visionPerson ?? null}
                  />
                ))}
              </div>
              {featuredLeaders.length > 0 && (
                <div style={{ marginTop: '1.6rem', textAlign: 'center' }}>
                  <Link href="/leadership/" className="text-link">
                    View All Leaders
                  </Link>
                </div>
              )}
            </>
          ) : (
            <EmptyState title="Civic leadership records are being verified">
              <p>Verified public officials will be listed here.</p>
            </EmptyState>
          )}
        </div>
      </section>

      <PartnerStrip partners={[]} />

      {/* ================= SECTION B — WHAT BRIGHTON GAINS ================= */}
      <section className="section band-ivory" aria-labelledby="gains-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What Brighton gains</span>
            <h2 id="gains-heading">What this can mean for Brighton</h2>
          </div>
          <div className="card-grid card-grid-4">
            {benefits.map((b) => (
              <article key={b.title} className="benefit-card">
                <span className="benefit-mark" aria-hidden="true">
                  {b.icon}
                </span>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION C — PRIORITY PROJECTS ================= */}
      <section className="section band-white" aria-labelledby="projects-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Priority projects</span>
            <h2 id="projects-heading">Projects with a purpose</h2>
            <p className="lede">
              Explore the initiatives being developed for Brighton, the people
              responsible, and the resources needed to move them forward.
            </p>
          </div>

          {featuredProjects.length > 0 ? (
            <div className="card-grid card-grid-3">
              {featuredProjects.map((project) => {
                const { visible, extra } = participantAvatars(project);
                return (
                  <article key={project.id} className="card">
                    <div style={{ marginBottom: '0.8rem' }}>
                      <StatusPill tone="planning">{project.status}</StatusPill>
                    </div>
                    <h3>
                      <Link
                        href={`/projects/${project.slug}/`}
                        style={{ color: 'inherit', textDecoration: 'none' }}
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-soft">{project.summary}</p>
                    <AvatarRow people={visible} extra={extra} />
                    <Link
                      href={`/projects/${project.slug}/`}
                      className="text-link"
                      style={{ marginTop: '0.6rem' }}
                    >
                      View project
                    </Link>
                  </article>
                );
              })}
            </div>
          ) : (
            <EmptyState title="Initial project priorities are being developed with local stakeholders">
              <p>
                No Brighton-specific project has been confirmed for publication
                yet. As priorities are agreed with residents and stakeholders,
                each project will appear here with its owner, status, and
                funding position.
              </p>
              <p>
                The program areas now being explored — including youth sports,
                mentorship, food access, and local commerce — are described on
                the Projects page.
              </p>
              <p>
                <Link href="/projects/" className="text-link">
                  See program areas under consideration
                </Link>
              </p>
            </EmptyState>
          )}
        </div>
      </section>

      {/* ================= SECTION D — PEOPLE AND PARTICIPATION ================= */}
      <section className="section band-ivory-deep" aria-labelledby="people-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">People and participation</span>
            <h2 id="people-heading">Local voices. Shared responsibility.</h2>
            <p className="lede">
              Community development works best when residents can see who is
              involved and how decisions are made.
            </p>
          </div>

          {mayor ? (
            <>
              <div className="card-grid card-grid-3">
                <PersonCard person={mayor} />
              </div>
              <div style={{ marginTop: '1.6rem' }}>
                <Link href="/leadership/" className="text-link">
                  Meet Brighton&apos;s civic leadership
                </Link>
              </div>
            </>
          ) : (
            <EmptyState title="Participation records are being confirmed">
              <p>
                People helping guide this initiative will be introduced here
                once their participation is confirmed and documented.
              </p>
            </EmptyState>
          )}
        </div>
      </section>

      {/* ================= SECTION E — HOW IT WORKS ================= */}
      <section className="section band-navy" aria-labelledby="how-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2 id="how-heading">From community priorities to community progress</h2>
            <p className="lede">
              The proposed model connects BW Town&apos;s community network,
              UpLift&apos;s mission, investment planning, and community fund
              management around local needs.
            </p>
          </div>
          <ol className="steps">
            {steps.map((step, i) => (
              <li key={step.title} className="step">
                <span className="step-num" aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
          <div style={{ marginTop: '2.2rem' }}>
            <Link href="/partnership/" className="btn btn-onnavy">
              Understand the Partnership
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SECTION F — FUNDING ================= */}
      <section className="section band-white" aria-labelledby="funding-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Funding</span>
            <h2 id="funding-heading">
              See where resources come from—and what they support
            </h2>
            <p className="lede">
              Track documented commitments, funds received, project allocations,
              and spending as financial information becomes available.
            </p>
          </div>
          <EmptyState title="Funding figures are being confirmed">
            <p>
              Verified funding figures will be published here as records are
              confirmed. Proposed income and documented funds received will be
              shown separately, and no figure appears on this site until its
              source is on file.
            </p>
            <p>
              <strong>Note:</strong> reported public funding for Brighton is
              municipal and state funding — it is not counted as
              partnership-generated income.
            </p>
          </EmptyState>
          <div style={{ marginTop: '1.8rem' }}>
            <Link href="/funding/" className="btn btn-primary">
              View Funding &amp; Accountability
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SECTION G — COUNTY CONNECTION ================= */}
      <section className="section band-ivory-deep" aria-labelledby="county-heading">
        <div className="container">
          <div className="split split-8-4">
            <div>
              <div className="section-head" style={{ marginBottom: '1.4rem' }}>
                <span className="eyebrow">County connection</span>
                <h2 id="county-heading">
                  Brighton&apos;s priorities. A wider network of opportunity.
                </h2>
                <p className="lede">
                  The proposed county model allows towns to collaborate on
                  sports, food, business, and other regional programs.
                  Brighton&apos;s participation and share of any resources will
                  be shown when agreements are confirmed.
                </p>
              </div>
              <div className="stack">
                <div className="callout">
                  <p className="mb-0">
                    <strong>About the program areas above:</strong> sports,
                    mentoring, food, commerce, and real-estate services are
                    program ideas from planning discussions. They are not
                    funded Brighton projects, and no county agreement has been
                    confirmed.
                  </p>
                </div>
                <p className="mb-0">
                  <Link href="/partnership/#county" className="text-link">
                    How county participation is proposed to work
                  </Link>
                </p>
              </div>
            </div>
            <div>
              <LocationDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION H — CLOSING CTA ================= */}
      <section className="section band-green" aria-labelledby="cta-heading">
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <h2 id="cta-heading">Help shape Brighton&apos;s next chapter</h2>
          <p
            className="lede"
            style={{ marginInline: 'auto', color: 'rgba(246,244,237,0.9)' }}
          >
            Bring a community priority, a business partnership, expertise, or
            project support.
          </p>
          <div
            className="btn-row"
            style={{ justifyContent: 'center', marginTop: '1.8rem' }}
          >
            <Link href="/get-involved/" className="btn btn-onnavy">
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      <VisionModal
        isOpen={visionOpen}
        onClose={() => setVisionOpen(false)}
        vision={visionPerson?.visionStatement ?? null}
        fullName={visionPerson?.fullName ?? ''}
        portrait={visionPerson?.portrait ?? null}
      />
    </>
  );
}
