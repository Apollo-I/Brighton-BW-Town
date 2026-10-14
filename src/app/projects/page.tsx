import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, EmptyState, StatusPill } from '@/components/ui';
import { publishedProjects, programAreas } from '@/content/projects';

export const metadata: Metadata = {
  title: 'Projects for a stronger Brighton, Alabama',
  description:
    'Review the community priorities, proposed programs, and documented projects being developed for Brighton, Alabama — with clear labels separating confirmed projects from program ideas under consideration.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Projects for a stronger Brighton"
        lede="Review the community priorities, proposed programs, and documented projects being developed for Brighton."
      />

      {/* Brighton project portfolio */}
      <section className="section band-white" aria-labelledby="portfolio-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Brighton project portfolio</span>
            <h2 id="portfolio-heading">Confirmed and documented projects</h2>
          </div>

          {publishedProjects.length > 0 ? (
            <div className="card-grid card-grid-3">
              {publishedProjects.map((project) => (
                <article key={project.id} className="card">
                  <div
                    style={{
                      display: 'flex',
                      gap: '0.5rem',
                      flexWrap: 'wrap',
                      marginBottom: '0.8rem',
                    }}
                  >
                    <StatusPill tone="planning">{project.status}</StatusPill>
                    <StatusPill>{project.category}</StatusPill>
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
                  {project.residentBenefit && (
                    <p className="text-soft" style={{ fontStyle: 'italic' }}>
                      Resident benefit: {project.residentBenefit}
                    </p>
                  )}
                  <Link href={`/projects/${project.slug}/`} className="text-link">
                    View project details
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <EmptyState title="No Brighton project record is published yet">
              <p>
                The first Brighton projects are being agreed with residents and
                local stakeholders. Each published project will include its
                owner, location, scope, status, cost source, funding gap, and
                next milestone.
              </p>
              <p className="mb-0">
                A program category is not a funded local project — that
                distinction is kept carefully on this site.
              </p>
            </EmptyState>
          )}
        </div>
      </section>

      {/* Program areas under consideration */}
      <section
        className="section band-ivory-deep"
        aria-labelledby="programs-heading"
        id="program-areas"
      >
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Program areas under consideration</span>
            <h2 id="programs-heading">Ideas being explored in planning</h2>
            <p className="lede">
              These program areas come from planning discussions. They describe
              types of work that could serve Brighton — they are not funded
              local projects, and no sites, costs, operators, or launch dates
              have been set.
            </p>
          </div>

          <div className="card-grid card-grid-3">
            {programAreas.map((area) => (
              <article key={area.id} className="program-card">
                <div className="program-card-head">
                  <h3>{area.name}</h3>
                  <StatusPill tone="proposal">{area.statusLabel}</StatusPill>
                </div>
                <p>{area.description}</p>
              </article>
            ))}
          </div>

          <div className="callout callout-gold" style={{ marginTop: '2rem' }}>
            <p className="mb-0">
              <strong>How projects move forward:</strong> a program area
              becomes a Brighton project only when a local owner, location,
              scope, status, and funding position are documented and published
              here.
            </p>
          </div>
        </div>
      </section>

      {/* Filters note — enabled when real records exist */}
      {publishedProjects.length >= 4 && (
        <section className="section-tight band-white" aria-labelledby="filters-heading">
          <div className="container">
            <h2 id="filters-heading">Filter projects</h2>
            <p className="text-soft">
              Filter the portfolio by category and status. Statuses used on this
              site: Proposed; Planning; Seeking Funding; Funded; In Progress;
              Completed.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
