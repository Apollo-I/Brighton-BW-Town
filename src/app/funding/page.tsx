import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, EmptyState, StatusNote, StatusPill } from '@/components/ui';
import {
  getFundingMetrics,
  publishedFundingRecords,
  fundingGovernanceQuestions,
  formatUsd,
} from '@/content/funding';

export const metadata: Metadata = {
  title: 'Funding with clear accountability — Brighton, Alabama',
  description:
    'Understand what has been committed, what has been received, and how documented resources are allocated to Brighton, Alabama projects.',
};

export default function FundingPage() {
  const metrics = getFundingMetrics();
  const hasRecords = publishedFundingRecords.length > 0;

  return (
    <>
      <PageHero
        eyebrow="Funding"
        title="Funding with clear accountability"
        lede="Understand what has been committed, what has been received, and how documented resources are allocated to Brighton projects."
      />

      {/* Headline metrics — null values render as “Figures being confirmed” */}
      <section className="section band-white" aria-labelledby="metrics-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">At a glance</span>
            <h2 id="metrics-heading">Documented funding position</h2>
            <p className="lede">
              Commitments are pledges, not cash. Received amounts are funds
              actually in hand. Unknown figures are shown as “Figures being
              confirmed” — never as zero.
            </p>
          </div>

          <div className="metric-grid">
            {metrics.map((m) => (
              <div key={m.key} className="metric-card">
                <p className="metric-label">{m.label}</p>
                <p className={`metric-value${m.value === null ? ' unknown' : ''}`}>
                  {m.value === null ? 'Figures being confirmed' : formatUsd(m.value)}
                </p>
                <p className="metric-note">{m.note}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '1.8rem' }}>
            <StatusNote>
              {hasRecords
                ? 'Each figure above is built only from published funding records; source, recipient entity, and fiscal period appear in the register below.'
                : 'Verified funding figures will be published here as records are confirmed. Proposed income and documented funds received will be shown separately.'}
            </StatusNote>
          </div>
        </div>
      </section>

      {/* View A — existing municipal resources */}
      <section
        className="section band-ivory-deep"
        aria-labelledby="municipal-heading"
        id="municipal"
      >
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">View A</span>
            <h2 id="municipal-heading">Existing municipal resources</h2>
            <p className="lede">
              The adopted city budget, municipal revenue and spending, and
              existing public grants and capital funds belong to the City of
              Brighton — shown here only when official records are supplied,
              with a stated fiscal period.
            </p>
          </div>

          <EmptyState title="Official city financial records have not been supplied yet">
            <p>
              When the adopted budget and latest financial actuals are
              provided, this section will show them with their fiscal period
              and source documents.
            </p>
            <p>
              Municipal funding is <strong>not</strong> added to partnership
              fund balances, and overlapping city and partnership grants are
              never counted twice.
            </p>
            <p className="mb-0">
              City budget and financial information is published by the{' '}
              <a href="https://brightonal.org/" rel="noopener noreferrer">
                City of Brighton
              </a>
              .
            </p>
          </EmptyState>
        </div>
      </section>

      {/* View B — partnership resources */}
      <section
        className="section band-navy"
        aria-labelledby="partnership-funding-heading"
        id="partnership-funds"
      >
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">View B</span>
            <h2 id="partnership-funding-heading">Partnership resources</h2>
            <p className="lede">
              Grants, donations, sponsorships, program income, and agreed
              county distributions received by the relevant initiative entity —
              each record names its recipient, category, purpose, and evidence.
            </p>
          </div>

          {hasRecords ? (
            <div className="table-wrap">
              <table className="data-table">
                <caption>
                  Partnership funding records (USD) — period and source shown
                  per record
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Source</th>
                    <th scope="col">Recipient entity</th>
                    <th scope="col">Category</th>
                    <th scope="col" className="num">
                      Amount
                    </th>
                    <th scope="col">Purpose</th>
                    <th scope="col">Status</th>
                    <th scope="col">Period / date</th>
                    <th scope="col">Source document</th>
                  </tr>
                </thead>
                <tbody>
                  {publishedFundingRecords.map((record) => (
                    <tr key={record.id}>
                      <td>{record.sourceName}</td>
                      <td>{record.recipientEntity}</td>
                      <td>{record.resourceCategory}</td>
                      <td className="num">{formatUsd(record.amount)}</td>
                      <td>{record.restrictedPurpose ?? 'Unrestricted'}</td>
                      <td>
                        <StatusPill tone="planning">{record.status}</StatusPill>
                      </td>
                      <td>{record.fiscalPeriod ?? record.receivedDate ?? '—'}</td>
                      <td>
                        {record.evidenceUrl ? (
                          <a href={record.evidenceUrl} rel="noopener noreferrer">
                            View source
                          </a>
                        ) : (
                          '—'
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <EmptyState title="No partnership funds have been documented yet">
              <p>
                When the initiative entity receives documented grants,
                donations, or sponsorships, each record will appear here with
                its recipient entity, amount, purpose, status, and source
                document.
              </p>
              <p className="mb-0">
                In-kind contributions are labeled separately and are excluded
                from cash totals.
              </p>
            </EmptyState>
          )}

          <div className="callout" style={{ marginTop: '2rem', background: 'rgba(246,244,237,0.08)', borderColor: 'rgba(246,244,237,0.3)', borderLeftColor: 'var(--gold)', color: 'rgba(246,244,237,0.9)' }}>
            <p>
              <strong>How totals are calculated</strong>
            </p>
            <p>Cash remaining = opening cash + cash received − cash spent.</p>
            <p className="mb-0">
              Unallocated cash = cash remaining − outstanding allocations or
              reservations not already spent.
            </p>
          </div>

          <div style={{ marginTop: '1.8rem' }}>
            <StatusNote>
              Reported public allocations to the city — such as state
              funding reported for local blight removal — are municipal
              resources awaiting city documentation. They are not counted as
              partnership income.
            </StatusNote>
          </div>
        </div>
      </section>

      {/* Governance questions */}
      <section
        className="section band-white"
        aria-labelledby="governance-heading"
        id="governance"
      >
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Oversight</span>
            <h2 id="governance-heading">Public governance questions</h2>
            <p className="lede">
              These are the questions residents and funders should be able to
              ask about any community fund. Answers are published here once
              confirmed — names and procedures are withheld until supplied.
            </p>
          </div>

          <div className="faq-list">
            {fundingGovernanceQuestions.map((item) => (
              <article key={item.question} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>

          <div style={{ marginTop: '2rem' }} className="btn-row">
            <Link href="/resources/" className="btn btn-primary">
              Documents &amp; Resources
            </Link>
            <Link href="/get-involved/" className="btn btn-secondary">
              Ask a funding question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
