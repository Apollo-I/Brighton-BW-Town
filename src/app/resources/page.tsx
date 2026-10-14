import type { Metadata } from 'next';
import { PageHero, EmptyState } from '@/components/ui';
import {
  documentCategories,
  publishedDocuments,
  municipalLinks,
} from '@/content/index';

export const metadata: Metadata = {
  title: 'Documents behind the work — Brighton, Alabama',
  description:
    'Partnership agreements, project briefs, funding records, letters of support, resolutions, and progress reports for the Brighton community development initiative — published only as they are confirmed.',
};

export default function ResourcesPage() {
  const categoriesWithDocs = documentCategories
    .map((category) => ({
      category,
      docs: publishedDocuments.filter((d) => d.category === category),
    }))
    .filter((group) => group.docs.length > 0);

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Documents behind the work"
        lede="Agreements, briefs, records, and reports appear here as they are confirmed. Nothing on this page is a placeholder."
      />

      {/* Document library */}
      <section className="section band-white" aria-labelledby="docs-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Document library</span>
            <h2 id="docs-heading">Published documents</h2>
            <p className="lede">
              Each document shows its title, issuer, date, a short description,
              and an accessible link to view or download it.
            </p>
          </div>

          {categoriesWithDocs.length > 0 ? (
            <div className="stack-lg">
              {categoriesWithDocs.map(({ category, docs }) => (
                <div key={category}>
                  <h3>{category}</h3>
                  <div className="card-grid card-grid-2">
                    {docs.map((doc) => (
                      <article key={doc.id} className="card">
                        <h4>{doc.title}</h4>
                        <p className="text-soft" style={{ fontSize: '0.9rem' }}>
                          {doc.issuer}
                          {doc.date ? ` · ${doc.date}` : ''}
                        </p>
                        <p>{doc.description}</p>
                        <a
                          href={doc.fileUrl}
                          className="text-link"
                          rel="noopener noreferrer"
                        >
                          View document
                        </a>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState title="No documents have been published yet">
              <p>
                Partnership agreements, project briefs, budget and funding
                records, letters of support, public resolutions, and progress
                reports will be listed here by category as they are confirmed.
              </p>
              <p className="mb-0">
                This site does not offer placeholder downloads — an empty
                category is hidden rather than filled with invented documents.
              </p>
            </EmptyState>
          )}
        </div>
      </section>

      {/* Municipal services */}
      <section
        className="section band-ivory-deep"
        aria-labelledby="municipal-links-heading"
        id="municipal-services"
      >
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Municipal services</span>
            <h2 id="municipal-links-heading">City of Brighton resources</h2>
            <p className="lede">
              City services — permits, payments, meetings, and official
              announcements — are handled by the City of Brighton. This is a
              community partnership project website, not the city website.
            </p>
          </div>

          <div className="card-grid card-grid-3">
            {municipalLinks.map((link) => (
              <article key={link.href} className="card">
                <h3>
                  <a
                    href={link.href}
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {link.label}
                  </a>
                </h3>
                <p className="text-soft">{link.description}</p>
                <a href={link.href} className="text-link" rel="noopener noreferrer">
                  Visit
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
