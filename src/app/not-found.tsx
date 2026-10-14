import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, EmptyState } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Page not found — Brighton Community Development Partnership',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Page not found"
        title="We couldn’t find that page"
        lede="The link may be out of date, or the record may not be published yet."
      />
      <section className="section band-white">
        <div className="container container-narrow">
          <EmptyState title="Records appear here only when they are documented">
            <p>
              This site publishes projects, participants, and funding figures
              only after they are confirmed. If you followed a link to a project
              or document that does not exist, the record may still be in
              development.
            </p>
            <p>
              <Link href="/projects/" className="text-link">
                Browse projects and program areas
              </Link>
            </p>
            <p className="mb-0">
              <Link href="/get-involved/" className="text-link">
                Ask a question through Get Involved
              </Link>
            </p>
          </EmptyState>
        </div>
      </section>
    </>
  );
}
