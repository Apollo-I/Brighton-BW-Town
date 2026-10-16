import type { Metadata } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PageHero, EmptyState, VisionModal } from '@/components/ui';
import { PersonCard } from '@/components/PersonCard';
import { publishedPeople, confirmedPartnershipTeam, confirmedFundOversight } from '@/content/people';
import { publishedProjects, programAreas } from '@/content/projects';

export const metadata = {
  title: '',
  description: '',
};

export const generateStaticParams = async () => {
  const params: any[] = [];
  for (const person of publishedPeople) {
    params.push({ slug: person.id });
  }
  return params;
};

function useLeaderBySlug(slug: string) {
  const person = publishedPeople.find((p) => p.id === slug);
  return person || null;
}

export default function LeaderPage({
  params,
}: {
  params: any;
}) {
  const slug = (params as any)?.slug || '';

  if (!publishedPeople.some((p) => p.id === slug)) {
    return <EmptyState title="Leader not found">Leader not found</EmptyState>;
  }

  const person = useLeaderBySlug(slug) as any;

  return (
    <>
      <PageHero
        eyebrow="Profile"
        title={person?.fullName ?? 'Leader Profile'}
        lede={person?.bio ?? ''}
      />

      <section className="section band-white" aria-labelledby="profile-heading" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: 'none' }}>
          <div className="section-head" style={{ marginBottom: '1.5rem' }}>
            <h2 id="profile-heading" style={{ color: 'var(--navy)', fontSize: '1.8rem', fontWeight: '800' }}>
              {person?.fullName}
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
            {person?.portrait && (
              <img
                src={person.portrait}
                alt={person.fullName}
                style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover' }}
                loading="lazy"
                aria-label={`Portrait of ${person.fullName}`}
              />
            )}

            <div>
              <p style={{ fontSize: '1.2rem', fontWeight: '600', color: '#0b233b' }}>
                {person?.fullName}
              </p>
              {person?.publicOffice && (
                <p style={{ fontSize: '1rem', color: '#555', marginTop: '0.2rem' }}>
                  {person.publicOffice}
                </p>
              )}
            </div>
          </div>

          {person?.bioApproved && person?.bio && (
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#334155', marginBottom: '1.5rem' }}>
              {person.bio}
            </p>
          )}

          {!person?.bioApproved && person?.bio && (
            <p style={{ fontSize: '0.9rem', color: '#666', fontStyle: 'italic', marginBottom: '1.5rem' }}>
              {person.publicNote ?? 'Biography text is provided for editorial review; it is not an approved statement from the mayor or the city.'}
            </p>
          )}

          {/* My Vision section */}
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ color: '#0b233b', fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.8rem' }}>My Vision</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#334155' }}>
              {person?.visionStatement ?? 'Vision statement awaiting contribution.'}
            </p>

            {person?.visionVideoUrl && (
              <div style={{ marginTop: '1rem' }}>
                <a href={person.visionVideoUrl} style={{ display: 'inline-block', marginTop: '0.5rem', color: 'var(--primary)', textDecoration: 'underline' }}>
                  View video
                </a>
              </div>
            )}

            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <Link
                href="/leadership/"
                style={{
                  display: 'inline-block',
                  marginTop: '0.5rem',
                  padding: '0.6rem 1.2rem',
                  background: '#3182ce',
                  color: 'white',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  borderRadius: '4px',
                  textDecoration: 'none',
                }}
              >
                View Full Profile
              </Link>
            </div>
          </div>

          {/* Priority Projects section */}
          {person && person.id && (
            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ color: '#0b233b', fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.8rem' }}>Priority Projects</h3>
              {publishedProjects.length > 0 ? (
                <div className="card-grid card-grid-2" style={{ gap: '1rem' }}>
                  {publishedProjects.slice(0, 4).map((project) => (
                    <article key={project.id} className="card" style={{ border: '1px solid #e2e8f0', borderRadius: '4px', padding: '1rem' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#0b233b', marginBottom: '0.5rem' }}>
                        {project.title}
                      </h4>
                      <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#555' }}>
                        {project.summary}
                      </p>
                      <p style={{ fontSize: '0.85rem', color: '#888', marginTop: '0.5rem' }}>
                        Status: {project.status}
                      </p>
                      <Link
        href={`/projects/${project.slug}/`}
        style={{ display: 'block', marginTop: '0.5rem', color: 'var(--primary)', textDecoration: 'underline', fontSize: '0.85rem' }}
      >View project</Link>
                    </article>
                  ))}
                </div>
              ) : (
                <p style={{ fontSize: '0.9rem', color: '#888' }}>No priority projects have been documented yet.</p>
              )}
            </div>
          )}

          {/* Community Activity section */}
          {person && person.id && (
            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ color: '#0b233b', fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.8rem' }}>Community Activity</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#555' }}>Updates, visits, meetings, and progress photographs will appear here as documented.</p>
            </div>
          )}

          {/* Related People section */}
          {person && confirmedPartnershipTeam.length > 0 && (
            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ color: '#0b233b', fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.8rem' }}>Related People</h3>
              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                {confirmedPartnershipTeam.slice(0, 4).map((related) => (
                  <Link
                    key={related.id}
                    href={`/leaders/${related.id}`}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.9rem' }}
                  >
                    {related.fullName}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {person && confirmedPartnershipTeam.length === 0 && (
            <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '1rem' }}>No confirmed partnership participants linked to this leader yet.</p>
          )}

          <div style={{ marginTop: '2rem' }}>
            <Link
              href="/leadership/"
              style={{
                display: 'inline-block',
                marginTop: '0.5rem',
                padding: '0.6rem 1.2rem',
                background: '#3182ce',
                color: 'white',
                fontSize: '0.95rem',
                fontWeight: '600',
                borderRadius: '4px',
                textDecoration: 'none',
              }}
            >
              Back to Leadership
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}