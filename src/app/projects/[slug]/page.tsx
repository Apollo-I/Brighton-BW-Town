import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero, EmptyState, StatusPill } from '@/components/ui';
import {
  getProjectBySlug,
  publishedProjects,
  formatUsd,
} from '@/content/index';

/**
 * Reusable project detail template. Static export prerenders every published
 * project; unknown slugs render the designed not-found page. No project is
 * published yet, so no detail page is currently generated — the template is
 * complete and data-driven for when records are confirmed.
 */

/**
 * Static-export constraints: only published slugs are prerendered; unknown
 * slugs are rejected. In production the exported 404 page is served for
 * unknown project URLs.
 */
export const dynamicParams = false;

/** Fully static route: rendered only at build time, never revalidated. */
export const revalidate = 0;

export function generateStaticParams() {
  return publishedProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = getProjectBySlug(slug);
    if (!project) {
      return { title: 'Project record not found' };
    }
    return {
      title: `${project.title} — Brighton, Alabama project`,
      description: project.summary,
    };
  });
}

function MoneyRow({
  label,
  value,
  note,
}: {
  label: string;
  value: number | null;
  note?: string;
}) {
  return (
    <div className="metric-card">
      <p className="metric-label">{label}</p>
      <p className={`metric-value${value === null ? ' unknown' : ''}`}>
        {value === null ? 'Figures being confirmed' : formatUsd(value)}
      </p>
      {note && <p className="metric-note">{note}</p>}
    </div>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const isEstimate = project.costEstimate !== null;

  return (
    <>
      <PageHero
        eyebrow={`${project.category} · Brighton, Alabama`}
        title={project.title}
        lede={project.summary}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects/' },
          { label: project.title },
        ]}
      />

      <section className="section band-white">
        <div className="container">
          <div
            style={{
              display: 'flex',
              gap: '0.6rem',
              flexWrap: 'wrap',
              marginBottom: '1.6rem',
            }}
          >
            <StatusPill tone="planning">{project.status}</StatusPill>
            <StatusPill>{project.category}</StatusPill>
            {project.sdgTags.map((tag) => (
              <StatusPill key={tag}>{tag}</StatusPill>
            ))}
          </div>

          <div className="split split-8-4">
            <div className="stack-lg">
              <div>
                <h2>What this means for residents</h2>
                <p>{project.residentBenefit}</p>
              </div>

              <div>
                <h2>About this project</h2>
                <p>{project.summary}</p>
                {project.scope && (
                  <p>
                    <strong>Scope:</strong> {project.scope}
                  </p>
                )}
                {project.beneficiaries && (
                  <p>
                    <strong>Who this serves:</strong> {project.beneficiaries}
                  </p>
                )}
                {project.location && (
                  <p>
                    <strong>Location:</strong> {project.location}
                  </p>
                )}
                {project.leadEntity && (
                  <p>
                    <strong>Lead organization:</strong> {project.leadEntity}
                  </p>
                )}
                {project.confirmedPeople.length > 0 && (
                  <p>
                    <strong>Confirmed project contacts:</strong>{' '}
                    {project.confirmedPeople.join(', ')}
                  </p>
                )}
              </div>

              {project.milestones.length > 0 && (
                <div>
                  <h2>Milestones</h2>
                  <div className="table-wrap">
                    <table className="data-table">
                      <caption>Milestone schedule</caption>
                      <thead>
                        <tr>
                          <th scope="col">Milestone</th>
                          <th scope="col">Date</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.milestones.map((m, i) => (
                          <tr key={`${m.label}-${i}`}>
                            <td>{m.label}</td>
                            <td>{m.date ?? 'To be scheduled'}</td>
                            <td>{m.status === 'complete' ? 'Complete' : 'Planned'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {project.impactMeasures.length > 0 && (
                <div>
                  <h2>Progress measures</h2>
                  <ul>
                    {project.impactMeasures.map((measure) => (
                      <li key={measure}>{measure}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h2>Source and verification</h2>
                <ul>
                  <li>
                    <strong>Last verified:</strong>{' '}
                    {project.verifiedAt ?? 'Not yet verified'}
                  </li>
                  {project.sourceUrl && (
                    <li>
                      <strong>Source document:</strong>{' '}
                      <a href={project.sourceUrl} rel="noopener noreferrer">
                        {project.sourceUrl}
                      </a>
                    </li>
                  )}
                  {project.documents.length > 0 ? (
                    project.documents.map((doc) => (
                      <li key={doc}>
                        <strong>Document:</strong> {doc}
                      </li>
                    ))
                  ) : (
                    <li>
                      <strong>Source documents:</strong> none supplied yet
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <aside className="stack" aria-label="Project facts">
              <div className="card card-flat">
                <h3>Project facts</h3>
                <ul style={{ paddingLeft: '1.1rem', marginBottom: 0 }}>
                  <li>
                    <strong>Status:</strong> {project.status}
                  </li>
                  <li>
                    <strong>Category:</strong> {project.category}
                  </li>
                  <li>
                    <strong>Location:</strong> {project.location ?? 'To be confirmed'}
                  </li>
                  <li>
                    <strong>Lead organization:</strong>{' '}
                    {project.leadEntity ?? 'To be confirmed'}
                  </li>
                  <li>
                    <strong>Timeline:</strong>{' '}
                    {project.timeline ?? 'To be scheduled'}
                  </li>
                </ul>
              </div>

              <div>
                <h3 style={{ marginBottom: '0.9rem' }}>Funding position</h3>
                <div className="stack-sm">
                  <MoneyRow
                    label="Estimated cost"
                    value={project.costEstimate}
                    note={
                      isEstimate && project.costEstimateSource
                        ? project.costEstimateSource
                        : 'An estimate is not a committed budget.'
                    }
                  />
                  <MoneyRow
                    label="Committed funding (pledges)"
                    value={project.committedFunding}
                    note="Commitments are not cash received."
                  />
                  <MoneyRow
                    label="Received funding (cash in hand)"
                    value={project.receivedFunding}
                  />
                  <MoneyRow
                    label="Funding sought"
                    value={project.fundingNeed}
                    note="The remaining gap to be raised."
                  />
                </div>
              </div>
            </aside>
          </div>

          <div style={{ marginTop: '2.6rem' }}>
            <EmptyState title="Something to add to this project?" headingLevel="h3">
              <p>
                Residents, businesses, and organizations can share expertise,
                offers of support, or questions about active projects.
              </p>
              <p className="mb-0">
                <Link href="/get-involved/" className="text-link">
                  Get involved
                </Link>
              </p>
            </EmptyState>
          </div>
        </div>
      </section>
    </>
  );
}
