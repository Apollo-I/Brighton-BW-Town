/**
 * Content architecture for the Brighton Community Development Partnership site.
 *
 * Evidence states used across all records:
 *  - 'verified-public-fact'   : confirmed by a public source (checked on `verifiedAt`).
 *  - 'planning-proposal'      : an idea from the planning transcripts; not yet agreed.
 *  - 'awaiting-confirmation'  : information that must be confirmed before it is stated as fact.
 *
 * `publish` is the public-release switch. Records with publish=false stay in the
 * editorial research register and are never rendered on public pages.
 * `verifiedAt` is the date facts were checked — it is never inferred from "today".
 */

export type EvidenceState =
  | 'verified-public-fact'
  | 'planning-proposal'
  | 'awaiting-confirmation';

export type ProjectStatus =
  | 'Proposed'
  | 'Planning'
  | 'Seeking Funding'
  | 'Funded'
  | 'In Progress'
  | 'Completed';

export type FundingStatus =
  | 'Reported allocation'
  | 'Applied for'
  | 'Committed'
  | 'Received'
  | 'Spent';

export type PortraitPermissionStatus =
  | 'approved'
  | 'supplied-pending-permission'
  | 'not-obtained';

export interface Person {
  id: string;
  fullName: string;
  /** Public office held, e.g. "Mayor of Brighton, Alabama". Null when none. */
  publicOffice: string | null;
  placeOrDistrict: string | null;
  publicOfficeVerified: boolean;
  /** Short biography written for this site. Null hides the profile body. */
  bio: string | null;
  /** True only once the subject has approved the biography text. */
  bioApproved: boolean;
  portrait: string | null;
  portraitPermissionStatus: PortraitPermissionStatus;
  /** Where the portrait was sourced from, for public credit. */
  portraitSourceUrl: string | null;
  /** Initiative role — only meaningful when participationConfirmed is true. */
  partnershipRole: string | null;
  participationConfirmed: boolean;
  evidenceState: EvidenceState;
  sourceUrl: string | null;
  /** Date facts were last checked (YYYY-MM-DD), not the publish date. */
  verifiedAt: string | null;
  publish: boolean;
  /** Optional editorial note shown publicly when transparency needs it. */
  publicNote?: string;
  /** Internal-only editorial note. Never rendered publicly. */
  editorialNote?: string;
  /** Approved vision statement for the community. Null means it is awaiting contribution. */
  visionStatement?: string | null;
  /** URL to an approved video or additional photograph. */
  visionVideoUrl?: string | null;
}

export interface Milestone {
  label: string;
  date: string | null;
  status: 'planned' | 'complete';
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  residentBenefit: string;
  location: string | null;
  leadEntity: string | null;
  confirmedPeople: string[];
  status: ProjectStatus;
  statusEvidence: EvidenceState;
  /** Who the project is intended to serve, in words — never invented totals. */
  beneficiaries: string | null;
  /** What the project will actually do, in concrete terms. */
  scope: string | null;
  /** Supplied image paths only; no stock or generated imagery. */
  images: string[];
  costEstimate: number | null;
  costEstimateLabel?: string;
  costEstimateSource: string | null;
  committedFunding: number | null;
  receivedFunding: number | null;
  fundingNeed: number | null;
  timeline: string | null;
  milestones: Milestone[];
  documents: string[];
  impactMeasures: string[];
  sdgTags: string[];
  evidenceState: EvidenceState;
  sourceUrl: string | null;
  verifiedAt: string | null;
  publish: boolean;
  editorialNote?: string;
}

/** Program areas discussed in planning. A program area is NOT a funded local project. */
export interface ProgramArea {
  id: string;
  name: string;
  description: string;
  statusLabel: 'Under consideration';
  evidenceState: EvidenceState;
}

export interface FundingRecord {
  id: string;
  sourceName: string;
  recipientEntity: string;
  resourceCategory: string;
  projectId: string | null;
  /** Amount in USD. Null means "figures being confirmed" — never zero by default. */
  amount: number | null;
  currency: 'USD';
  cashOrInKind: 'cash' | 'in-kind';
  restrictedPurpose: string | null;
  status: FundingStatus;
  commitmentDate: string | null;
  receivedDate: string | null;
  expenseDate: string | null;
  fiscalPeriod: string | null;
  evidenceUrl: string | null;
  evidenceState: EvidenceState;
  verifiedAt: string | null;
  publish: boolean;
  editorialNote?: string;
}

export interface DocumentRecord {
  id: string;
  title: string;
  issuer: string;
  category:
    | 'Partnership agreements'
    | 'Project briefs'
    | 'Budget and funding records'
    | 'Letters of support'
    | 'Public resolutions'
    | 'Progress reports';
  date: string | null;
  description: string;
  fileUrl: string;
  evidenceState: EvidenceState;
  verifiedAt: string | null;
  publish: boolean;
}

export interface UpdateRecord {
  id: string;
  projectId: string | null;
  title: string;
  date: string;
  body: string;
  images: string[];
  evidenceUrl: string | null;
  evidenceState: EvidenceState;
  verifiedAt: string | null;
  publish: boolean;
}

export interface MunicipalLink {
  label: string;
  href: string;
  description: string;
}
