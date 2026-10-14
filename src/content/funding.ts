/**
 * Funding records.
 *
 * Two distinct resource views:
 *  A. Existing municipal resources — city budget, municipal actuals, public
 *     grants and capital funds (shown only when official records are supplied,
 *     with a stated fiscal period).
 *  B. Partnership resources — grants, donations, sponsorships, program income,
 *     and agreed county distributions received by the initiative entity.
 *
 * Rules enforced here:
 *  - Unknown amounts are null, never zero.
 *  - Commitments never count as cash received.
 *  - In-kind contributions are labeled separately and excluded from cash math.
 *  - The reported state blight-removal allocation is a public allocation
 *    awaiting city documentation — it is NOT partnership income and stays in
 *    the research register until verified.
 */

import type { FundingRecord } from './types';

export const fundingRecords: FundingRecord[] = [
  // ------------------------------------------------------------------
  // A. Existing municipal resources — official records not yet supplied.
  //    (adopted city budget, latest financial actuals, capital funds)
  // ------------------------------------------------------------------

  // ------------------------------------------------------------------
  // B. Partnership resources — no documented commitments or receipts yet.
  // ------------------------------------------------------------------

  // Editorial research register — reported public allocation. NOT counted as
  // CDF income or partnership-generated money. Awaiting city documentation of
  // receipt, scope, and spending. publish=false until verified.
  {
    id: 'fund-blight-allocation-2026',
    sourceName:
      'Alabama General Fund budget (2026–2027) blight-removal allocation, as reported',
    recipientEntity: 'City of Brighton (reported) — not the partnership fund',
    resourceCategory: 'State appropriation (reported allocation)',
    projectId: null,
    amount: 50000,
    currency: 'USD',
    cashOrInKind: 'cash',
    restrictedPurpose: 'Blight removal (reported scope)',
    status: 'Reported allocation',
    commitmentDate: null,
    receivedDate: null,
    expenseDate: null,
    fiscalPeriod: 'State fiscal year beginning October 1, 2026 (reported)',
    evidenceUrl:
      'https://www.wbrc.com/2026/04/12/alabama-lawmaker-secures-300k-schools-blight-removal-jefferson-county/',
    evidenceState: 'awaiting-confirmation',
    verifiedAt: '2026-10-14',
    publish: false,
    editorialNote:
      'WBRC reported April 12, 2026 that Brighton would receive a $50,000 allocation for blight removal, effective October 1, 2026. Reported public allocation awaiting city documentation of receipt, scope, and spending. Do not count as CDF income or partnership-generated money.',
  },
];

export const publishedFundingRecords: FundingRecord[] = fundingRecords.filter(
  (f) => f.publish
);

/** Cash-formatting helper. Null renders as "Figures being confirmed". */
export function formatUsd(amount: number | null): string {
  if (amount === null) return 'Figures being confirmed';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Headline metrics for the funding page. All values derive only from
 * published records; unknown values stay null and render as
 * "Figures being confirmed" rather than zero.
 */
export interface FundingMetric {
  key: string;
  label: string;
  value: number | null;
  note: string;
}

export function getFundingMetrics(): FundingMetric[] {
  const pub = publishedFundingRecords;
  const sum = (fn: (r: FundingRecord) => number | null): number | null => {
    const values = pub.map(fn).filter((v): v is number => v !== null);
    if (values.length === 0) return null;
    return values.reduce((a, b) => a + b, 0);
  };
  return [
    {
      key: 'cash-received',
      label: 'Cash received',
      value: sum((r) => (r.status === 'Received' || r.status === 'Spent') && r.cashOrInKind === 'cash' ? r.amount : null),
      note: 'Documented funds received by the initiative entity.',
    },
    {
      key: 'commitments-not-received',
      label: 'Commitments not yet received',
      value: sum((r) => r.status === 'Committed' ? r.amount : null),
      note: 'Pledged amounts that have not arrived. Commitments are not cash.',
    },
    {
      key: 'project-allocations',
      label: 'Project allocations',
      value: sum((r) => r.projectId ? r.amount : null),
      note: 'Amounts reserved for specific projects.',
    },
    {
      key: 'cash-spent',
      label: 'Cash spent',
      value: sum((r) => r.status === 'Spent' ? r.amount : null),
      note: 'Documented spending against partnership resources.',
    },
    {
      key: 'funding-sought',
      label: 'Funding sought',
      value: sum((r) => r.status === 'Applied for' ? r.amount : null),
      note: 'Amounts actively being sought for confirmed projects.',
    },
  ];
}

/** Governance questions answered publicly only when confirmed. */
export const fundingGovernanceQuestions: {
  question: string;
  answer: string;
  confirmed: boolean;
}[] = [
  {
    question: 'Who administers the fund?',
    answer: 'The administrator will be published when confirmed.',
    confirmed: false,
  },
  {
    question: 'Who approves allocations?',
    answer: 'The allocation-approval process will be published when confirmed.',
    confirmed: false,
  },
  {
    question: 'How often is reporting published?',
    answer: 'The reporting schedule will be published when confirmed.',
    confirmed: false,
  },
  {
    question: 'What supporting records are available?',
    answer:
      'Source documents will be published in Documents & Resources as they are confirmed.',
    confirmed: false,
  },
];

export const validFundingStatuses: FundingRecord['status'][] = [
  'Reported allocation',
  'Applied for',
  'Committed',
  'Received',
  'Spent',
];
