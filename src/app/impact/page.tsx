import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, EmptyState, StatusNote } from '@/components/ui';
import { publishedUpdates } from '@/content/documents';
import { publishedProjects } from '@/content/projects';

export const metadata: Metadata = {
  title: 'Progress residents can follow — Brighton, Alabama',
  description:
    'Follow project milestones and the outcomes that matter to Brighton, Alabama — with reporting measures defined before they are published.',
};

const indicatorIdeas = [
  {
    label: 'Participants served',
    detail: 'Definition, counting period, and source required before publication.',
  },
  {
    label: 'Local businesses involved',
    detail: 'Businesses documented in confirmed delivery or sponsorship roles.',
  },
  {
    label: 'Projects completed',
    detail: 'Only projects with a documented completion record.',
  },
  {
    label: 'Mentoring sessions delivered',
    detail: 'Counted only from documented program records.',
  },
  {
    label: 'Sites improved',
    detail: 'Documented locations with before/after records on file.',
  },
];

const impactCategories = [
  'Community resilience',
  'Health',
  'Education',
  'Food access',
  'Economic opportunity',
  'Partnerships',
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="Progress residents can follow"
        lede="Follow project milestones and the outcomes that matter to Brighton."
      />

      {/* Updates */}
      <section className="section band-white" aria-labelledby="updates-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Project updates</span>
            <h2 id="updates-heading">Recent updates from the field</h2>
          </div>

          {publishedUpdates.length > 0 ? (
            <div className="stack">
              {publishedUpdates.map((update) => (
                <article key={update.id} className="card">
                  <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>
                    {update.date}
                  </p>
                  <h3>{update.title}</h3>
                  <p className="text-soft">{update.body}</p>
                </article>
              ))}
            </div>
          ) : (
            <EmptyState title="The first project milestones and reporting measures are being established">
              <p>
                Updates will be published here as activities are documented.
                Every update links to its source, and no progress is reported
                ahead of the records behind it.
              </p>
            </EmptyState>
          )}
        </div>
      </section>

      {/* Timeline */}
      <section
        className="section band-ivory-deep"
        aria-labelledby="timeline-heading"
      >
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Timeline</span>
            <h2 id="timeline-heading">How progress will be shown</h2>
            <p className="lede">
              A project timeline appears here once real dates exist. Planned
              dates will be labeled as targets, and completed milestones will
              link to the updates that document them.
            </p>
          </div>

          <EmptyState title="No dated milestones have been documented yet">
            <p className="mb-0">
              {publishedProjects.length > 0
                ? 'Published projects currently have no dated milestones on file.'
                : 'With no published projects yet, there are no milestones to chart. Dates will never be estimated for display.'}
            </p>
          </EmptyState>
        </div>
      </section>

      {/* Future indicators */}
      <section className="section band-navy" aria-labelledby="indicators-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Reporting measures</span>
            <h2 id="indicators-heading">The measures we plan to report</h2>
            <p className="lede">
              An indicator is published only when its definition, counting
              period, and source are supplied. These are the measures being
              considered — not results, and not forecasts of outcomes.
            </p>
          </div>

          <div className="card-grid card-grid-3">
            {indicatorIdeas.map((item) => (
              <article key={item.label} className="step">
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>

          <div style={{ marginTop: '2rem' }}>
            <StatusNote>
              Targets, goals, and forecasts will always be labeled as targets.
              This site does not present targets as results.
            </StatusNote>
          </div>
        </div>
      </section>

      {/* Impact categories / SDG alignment */}
      <section className="section band-white" aria-labelledby="sdg-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Outcome mapping</span>
            <h2 id="sdg-heading">How project outcomes will be mapped</h2>
            <p className="lede">
              Projects may be tagged to recognized sustainable-development
              goal categories to help funders scan fit at a glance. Each tag is
              validated against the goal number and title before it is
              displayed.
            </p>
          </div>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.7rem',
            }}
          >
            {impactCategories.map((cat) => (
              <li key={cat}>
                <span className="status-pill status-pill-planning">{cat}</span>
              </li>
            ))}
          </ul>

          <div className="callout" style={{ marginTop: '1.8rem' }}>
            <p className="mb-0">
              Mapping outcomes to global goal categories describes alignment
              only. It does not establish affiliation with, or endorsement by,
              the United Nations, the World Bank, or any other organization,
              and no such organization is presented as a partner of this
              initiative.
            </p>
          </div>

          <div className="btn-row" style={{ marginTop: '2rem' }}>
            <Link href="/projects/" className="btn btn-primary">
              Explore projects
            </Link>
            <Link href="/get-involved/" className="btn btn-secondary">
              Get involved
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
