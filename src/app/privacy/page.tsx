import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, EmptyState } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Privacy — Brighton Community Development Partnership',
  description:
    'Plain-language privacy information for the Brighton Community Development Partnership website.',
  robots: { index: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy, in plain language"
        lede="What this website collects, who receives it, and what it does not do."
      />

      <section className="section band-white">
        <div className="container container-narrow stack-lg">
          <div>
            <h2>The short version</h2>
            <p>
              This website is a static information site. It does not have an
              active inquiry form, does not run accounts, and does not collect
              personal information through forms — because none is active yet.
            </p>
          </div>

          <div>
            <h2>Inquiry forms</h2>
            <EmptyState title="No inquiry form is active">
              <p>
                The Get Involved page currently shows a{' '}
                <strong>preview only</strong> version of a future form. Fields
                there are disabled, nothing is transmitted, and nothing is
                stored. See the{' '}
                <Link href="/get-involved/">Get Involved page</Link>.
              </p>
              <p className="mb-0">
                When a real form is connected, this page will be updated at the
                same time to name the recipient, describe what is stored, and
                state a retention period.
              </p>
            </EmptyState>
          </div>

          <div>
            <h2>What your browser receives and sends</h2>
            <p>
              Like any website, this site&apos;s hosting provider records
              standard technical request data (such as IP address, page
              requested, and time of access) for operating and securing the
              service. That handling is governed by the hosting
              provider&apos;s own policies.
            </p>
            <p>
              The site loads its typefaces from Google Fonts. Visiting a page
              may therefore cause your browser to make a request to Google,
              which receives standard web request information under{' '}
              <a
                href="https://policies.google.com/privacy"
                rel="noopener noreferrer"
              >
                Google&apos;s privacy policy
              </a>
              . If that is a concern for you or your household, the site is
              designed to remain fully readable with local system fonts if
              those requests are blocked.
            </p>
          </div>

          <div>
            <h2>What this site does not do</h2>
            <ul>
              <li>No advertising or tracking cookies are set by this site.</li>
              <li>No analytics or session-replay scripts are installed.</li>
              <li>No accounts, logins, or passwords exist.</li>
              <li>
                No financial, identity, health, or other sensitive information
                is ever requested.
              </li>
              <li>
                No donation or investment transactions take place here.
              </li>
            </ul>
          </div>

          <div>
            <h2>Questions or corrections</h2>
            <p>
              Contact details for the organization operating this site will be
              published here once they are confirmed. In the meantime, city
              matters can be directed to the{' '}
              <a
                href="https://brightonal.org/contact-us"
                rel="noopener noreferrer"
              >
                City of Brighton contact page
              </a>
              .
            </p>
          </div>

          <p className="table-note">
            Last reviewed: October 14, 2026. This page describes what the site
            actually does today — it makes no promises about services that are
            not yet in place.
          </p>
        </div>
      </section>
    </>
  );
}
