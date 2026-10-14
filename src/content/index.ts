/**
 * Public query helpers — the only interface pages should use.
 * Everything below filters on `publish`, so editorial research records
 * (publish=false) can never leak onto a public page.
 */

export { site, primaryNav, footerNav, municipalLinks, getInvolvedCta, footerStatus } from './site';
export {
  people,
  publishedPeople,
  confirmedPartnershipTeam,
  confirmedFundOversight,
} from './people';
export {
  projects,
  publishedProjects,
  getProjectBySlug,
  programAreas,
  projectStatuses,
  projectCategories,
} from './projects';
export {
  fundingRecords,
  publishedFundingRecords,
  getFundingMetrics,
  fundingGovernanceQuestions,
  validFundingStatuses,
  formatUsd,
} from './funding';
export {
  documents,
  documentCategories,
  publishedDocuments,
  updates,
  publishedUpdates,
} from './documents';

export type {
  Person,
  Project,
  ProgramArea,
  FundingRecord,
  DocumentRecord,
  UpdateRecord,
  EvidenceState,
  ProjectStatus,
  FundingStatus,
  MunicipalLink,
} from './types';
