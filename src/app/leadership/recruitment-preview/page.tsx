'use client'

import type { Metadata } from 'next';
import Link from 'next/link';
import * as React from 'react';
import { BackgroundArt } from '@/components/BackgroundArt';
import { PersonCard } from '@/components/PersonCard';
import { CompactLeaderCard } from '@/components/CompactLeaderCard';
import { VisionModal } from '@/components/ui';
import { site } from '@/content/site';
import { publishedPeople } from '@/content/people';

export default function RecruitmentPreviewPage() {
  const [disclosureOpen, setDisclosureOpen] = React.useState(false);
  const [visionOpen, setVisionOpen] = React.useState(false);
  const [visionPerson, setVisionPerson] = React.useState<typeof publishedPeople[0] | null>(null);

  function showVisionModal(person: typeof publishedPeople[0]) {
    setVisionPerson(person);
    setVisionOpen(true);
  }

  const featuredLeaders = publishedPeople.slice(0, 6);
  const mayor = publishedPeople.find((p) =>
    (p.publicOffice ?? '').toLowerCase().includes('mayor')
  );

  return (
    <>
      {/* ================= HERO (reuse of new hero design) ================= */}
      <section className="rec-hero">
        <BackgroundArt variant="hero" />
        <div className="container rec-hero-inner">
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
          <p className="rec-lede">
            A proposed community partnership bringing residents, businesses,
            and civic leaders together to turn local priorities into practical
            projects.
          </p>
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
          <div className="rec-btn-row">
            <Link href="/projects/" className="btn btn-onnavy">
              Explore the Projects
            </Link>
            <Link href="/get-involved/" className="btn btn-onnavy-outline">
              Become a Partner
            </Link>
          </div>
          <a href="#leadership-preview" className="rec-leadership-link">
            Meet Your Town Leaders <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* ================= LEADERSHIP PREVIEW ================= */}
      <section
        className="section rec-leadership-section"
        aria-labelledby="rec-leadership-heading"
        id="leadership-preview"
      >
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Town Leaders at Work</span>
            <h2 id="rec-leadership-heading">
              Meet the people serving our community—and explore their vision for
              its future.
            </h2>
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
                    visionPerson={visionPerson}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="empty-state">
              <p>Verified public officials will be listed here.</p>
            </div>
          )}
        </div>
      </section>

      {/* ================= MAYOR SAMPLE PROFILE ================= */}
      {mayor && (
        <section
          className="section rec-profile-section band-white"
          aria-labelledby="rec-profile-heading"
        >
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Sample Profile</span>
              <h2 id="rec-profile-heading">
                What a leader profile will look like
              </h2>
              <p className="lede">
                This is a preview of the mayor&apos;s profile layout, using
                factual information from public sources. Missing contributions are
                clearly labeled as placeholders.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
              {mayor.portrait && (
                <img
                  src={mayor.portrait}
                  alt={mayor.fullName}
                  style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    flexShrink: 0,
                  }}
                />
              )}
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 className="rec-profile-name">{mayor.fullName}</h3>
                {mayor.publicOffice && (
                  <p className="rec-profile-role">{mayor.publicOffice}</p>
                )}
                {mayor.bio && <p className="rec-profile-bio">{mayor.bio}</p>}
                {mayor.publicNote && (
                  <p style={{ fontSize: '0.88rem', color: 'var(--gold-ink)', fontStyle: 'italic', marginTop: '1rem' }}>
                    {mayor.publicNote}
                  </p>
                )}
              </div>
            </div>

            <div className="rec-profile-section-block">
              <h3>My Vision</h3>
              <div className="rec-placeholder">
                <p>
                  {mayor.visionStatement ?? 'Vision statement awaiting contribution.'}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--gold-ink)', fontStyle: 'italic' }}>
                  Placeholder — to be replaced when a vision statement is
                  supplied.
                </p>
              </div>
            </div>

            <div className="rec-profile-section-block">
              <h3>Priority Projects</h3>
              <p style={{ color: 'var(--ink-soft)' }}>
                Project cards would appear here once the leader identifies their
                priority projects. Each card would show the project title, short
                description, status, and a link to the project page.
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--gold-ink)', fontStyle: 'italic' }}>
                Placeholder — to be replaced when priority projects are
                documented.
              </p>
            </div>

            <div className="rec-profile-section-block">
              <h3>Community Activity</h3>
              <p style={{ color: 'var(--ink-soft)' }}>
                Updates, visits, meetings, and progress photographs would appear
                here as documented.
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--gold-ink)', fontStyle: 'italic' }}>
                Placeholder — to be replaced when community activity is
                documented.
              </p>
            </div>

            <div className="rec-profile-section-block">
              <h3>Related People</h3>
              <p style={{ color: 'var(--ink-soft)' }}>
                Links to other leaders connected to the same documented projects
                would appear here.
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--gold-ink)', fontStyle: 'italic' }}>
                Placeholder — to be replaced when related people are documented.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ================= PROFILE COMPLETION CHECKLIST ================= */}
      <section
        className="section rec-checklist-section band-ivory-deep"
        aria-labelledby="rec-checklist-heading"
      >
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">For review only</span>
            <h2 id="rec-checklist-heading">To complete your profile, please provide:</h2>
          </div>
          <ol className="rec-checklist">
            <li>Preferred name and title.</li>
            <li>Portrait photograph.</li>
            <li>Short biography.</li>
            <li>Your vision for the community.</li>
            <li>Your priority projects.</li>
            <li>Confirmation of your participation and role.</li>
          </ol>
          <p className="rec-checklist-note">
            This checklist is for review purposes only. It is not part of the
            public experience and will not appear on the live website.
          </p>
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