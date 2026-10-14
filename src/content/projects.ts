/**
 * Project and program-area records.
 *
 * A program area is a category of work under consideration — it is not a
 * funded local project. Only records with publish=true appear in the Brighton
 * project portfolio. No Brighton-specific project is confirmed yet, so the
 * published portfolio is currently empty and pages show honest empty states.
 */

import type { ProgramArea, Project } from './types';

export const projects: Project[] = [
  // No Brighton-specific project records have been confirmed with owners,
  // locations, scopes, or documented statuses yet. When the first shortlist
  // is agreed with local stakeholders, add records here with publish=true.
  //
  // Example shape (kept unpublished as guidance, never rendered):
  // {
  //   id: 'project-example',
  //   slug: 'example-project',
  //   title: '',
  //   category: '',
  //   summary: '',
  //   residentBenefit: '',
  //   location: null,
  //   leadEntity: null,
  //   confirmedPeople: [],
  //   status: 'Proposed',
  //   statusEvidence: 'awaiting-confirmation',
  //   beneficiaries: null,
  //   scope: null,
  //   images: [],
  //   costEstimate: null,
  //   costEstimateSource: null,
  //   committedFunding: null,
  //   receivedFunding: null,
  //   fundingNeed: null,
  //   timeline: null,
  //   milestones: [],
  //   documents: [],
  //   impactMeasures: [],
  //   sdgTags: [],
  //   evidenceState: 'planning-proposal',
  //   sourceUrl: null,
  //   verifiedAt: null,
  //   publish: false,
  // },
];

export const publishedProjects: Project[] = projects.filter((p) => p.publish);

export function getProjectBySlug(slug: string): Project | undefined {
  return publishedProjects.find((p) => p.slug === slug);
}

/**
 * Program areas discussed in planning transcripts. These are descriptions of
 * work under consideration — not funded local projects, and without sites,
 * costs, operators, or launch dates.
 */
export const programAreas: ProgramArea[] = [
  {
    id: 'program-upsports',
    name: 'UpSports',
    description:
      'Youth sports, local teams, coaching, and connections to regional sports programs.',
    statusLabel: 'Under consideration',
    evidenceState: 'planning-proposal',
  },
  {
    id: 'program-mentorship',
    name: 'Mentorship',
    description:
      'Local mentoring and youth/community opportunities.',
    statusLabel: 'Under consideration',
    evidenceState: 'planning-proposal',
  },
  {
    id: 'program-bw-farms',
    name: 'BW Farms and food programs',
    description:
      'Farming, grocery access, food distribution, and related partnerships.',
    statusLabel: 'Under consideration',
    evidenceState: 'planning-proposal',
  },
  {
    id: 'program-local-commerce',
    name: 'Local commerce',
    description:
      'Shopping and grocery partnerships that may contribute to community resources under confirmed agreements.',
    statusLabel: 'Under consideration',
    evidenceState: 'planning-proposal',
  },
  {
    id: 'program-real-estate',
    name: 'Real estate platform',
    description:
      'Local brokerage participation and possible county-level services, with terms still to be established.',
    statusLabel: 'Under consideration',
    evidenceState: 'planning-proposal',
  },
  {
    id: 'program-community-development',
    name: 'Community development',
    description:
      'Specific neighborhood or local facility projects selected with Brighton stakeholders.',
    statusLabel: 'Under consideration',
    evidenceState: 'planning-proposal',
  },
];

/** Valid statuses for project filters. Only assign Funded/In Progress with evidence. */
export const projectStatuses: Project['status'][] = [
  'Proposed',
  'Planning',
  'Seeking Funding',
  'Funded',
  'In Progress',
  'Completed',
];

export const projectCategories: string[] = [
  'Sports and recreation',
  'Youth and mentorship',
  'Food access and agriculture',
  'Local commerce',
  'Neighborhoods and facilities',
];
