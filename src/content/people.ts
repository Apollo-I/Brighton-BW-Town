/**
 * Person records.
 *
 * Only people with documented participation may appear as partnership
 * leadership, board members, or fund oversight members. Public office and
 * partnership role are separate fields; holding office does not imply a
 * partnership role.
 *
 * The council entries below are an editorial research register (publish=false).
 * They are not a certified roster and are never rendered publicly until the
 * city clerk confirms the current roster and seats are confirmed.
 */

import type { Person } from './types';

export const people: Person[] = [
  {
    id: 'person-joseph-edwards-sr',
    fullName: 'Joseph “JoJo” Edwards Sr.',
    publicOffice: 'Mayor of Brighton, Alabama',
    placeOrDistrict: 'Brighton, Alabama',
    publicOfficeVerified: true,
    bio: 'Joseph “JoJo” Edwards Sr. serves as Mayor of Brighton. A U.S. Navy veteran and former Brighton council member, he has a background in building technology and longstanding pastoral and community service. His published biography emphasizes economic stability, public safety, infrastructure, and community collaboration.',
    bioApproved: false,
    portrait: '/people/mayor-joseph-edwards-sr-avatar.jpg',
    portraitPermissionStatus: 'supplied-pending-permission',
    portraitSourceUrl:
      'https://jefcomayors.com/wp-content/uploads/2026/02/Mayor-Joseph-JoJo-Edwards-Sr-of-the-City-of-Brighton.jpeg',
    partnershipRole: null,
    participationConfirmed: false,
    evidenceState: 'verified-public-fact',
    sourceUrl: 'https://jefcomayors.com/our-mayors/',
    verifiedAt: '2026-10-14',
    publish: true,
    visionStatement: 'Vision statement awaiting contribution.',
    visionVideoUrl: null,
    publicNote:
      'Biography text on this page is drawn from the mayor’s published biography and is provided for editorial review; it is not an approved statement from the mayor or the city.',
    editorialNote:
      'Portrait sourced from the Jefferson County Mayors Association page at the owner’s direction; publication permission to be confirmed with the mayor’s office. Replace with a supplied/approved image when received. Draft bio is a paraphrase for editorial review, not an approved statement.',
  },
  // ---------------------------------------------------------------
  // Editorial research register — NOT certified, NOT published.
  // Needs: official names, current roster confirmation, portraits,
  // biographies, and (if any) confirmed partnership roles.
  // ---------------------------------------------------------------
  {
    id: 'person-bruce-taylor',
    fullName: 'Bruce L. Taylor',
    publicOffice: 'Brighton City Council (Place 1) — reported',
    placeOrDistrict: 'Place 1',
    publicOfficeVerified: false,
    bio: null,
    bioApproved: false,
    portrait: null,
    portraitPermissionStatus: 'not-obtained',
    portraitSourceUrl: null,
    partnershipRole: null,
    participationConfirmed: false,
    evidenceState: 'awaiting-confirmation',
    sourceUrl:
      'https://www.bhamwiki.com/w/2025_Jefferson_County_municipal_elections',
    verifiedAt: '2026-10-14',
    publish: false,
    editorialNote:
      '2025 election compilation lists “Bruce Taylor” as winner, Place 1; public posts use “Bruce L. Taylor”. Need official name, current roster confirmation, portrait, biography, and partnership role.',
  },
  {
    id: 'person-sherene-johnson',
    fullName: 'Sherene Johnson',
    publicOffice: 'Brighton City Council (Place 2) — reported',
    placeOrDistrict: 'Place 2',
    publicOfficeVerified: false,
    bio: null,
    bioApproved: false,
    portrait: null,
    portraitPermissionStatus: 'not-obtained',
    portraitSourceUrl: null,
    partnershipRole: null,
    participationConfirmed: false,
    evidenceState: 'awaiting-confirmation',
    sourceUrl:
      'https://www.facebook.com/61578141421882/posts/our-councilor-sherene-johnson-and-our-attorney-valerie-hicks-hale-at-dr-mittie-c/122209122938938047/',
    verifiedAt: '2026-10-14',
    publish: false,
    editorialNote:
      '2025 election compilation lists winner, Place 2; a Brighton city account post identifies her as a councilor in 2026. Need approved portrait, biography, and partnership role.',
  },
  {
    id: 'person-place-3-unresolved',
    fullName: 'Place 3 — officeholder unresolved',
    publicOffice: 'Brighton City Council (Place 3) — unconfirmed',
    placeOrDistrict: 'Place 3',
    publicOfficeVerified: false,
    bio: null,
    bioApproved: false,
    portrait: null,
    portraitPermissionStatus: 'not-obtained',
    portraitSourceUrl: null,
    partnershipRole: null,
    participationConfirmed: false,
    evidenceState: 'awaiting-confirmation',
    sourceUrl:
      'https://www.bhamwiki.com/w/2025_Jefferson_County_municipal_elections',
    verifiedAt: '2026-10-14',
    publish: false,
    editorialNote:
      'Annie Woods and Angelo Johnson were listed as advancing to a 2025 runoff. Current officeholder not conclusively verified. Do not publish either as incumbent without confirmation from the city clerk.',
  },
  {
    id: 'person-lester-milligan',
    fullName: 'Lester Milligan',
    publicOffice: 'Brighton City Council (Place 4) — reported',
    placeOrDistrict: 'Place 4',
    publicOfficeVerified: false,
    bio: null,
    bioApproved: false,
    portrait: null,
    portraitPermissionStatus: 'not-obtained',
    portraitSourceUrl: null,
    partnershipRole: null,
    participationConfirmed: false,
    evidenceState: 'awaiting-confirmation',
    sourceUrl:
      'https://www.wbrc.com/2026/03/05/brighton-city-council-continues-focus-illegal-dumping-issues-throughout-city/',
    verifiedAt: '2026-10-14',
    publish: false,
    editorialNote:
      '2025 election compilation lists winner, Place 4; March 2026 reporting identifies him as a Brighton councilor. Need approved portrait, civic biography, and partnership role.',
  },
  {
    id: 'person-jerome-mcmullin',
    fullName: 'Jerome McMullin',
    publicOffice: 'Brighton City Council — seat unconfirmed',
    placeOrDistrict: null,
    publicOfficeVerified: false,
    bio: null,
    bioApproved: false,
    portrait: null,
    portraitPermissionStatus: 'not-obtained',
    portraitSourceUrl: null,
    partnershipRole: null,
    participationConfirmed: false,
    evidenceState: 'awaiting-confirmation',
    sourceUrl:
      'https://www.facebook.com/61578141421882/videos/brighton-special-call-meeting-september-42026/1603342387969953/',
    verifiedAt: '2026-10-14',
    publish: false,
    editorialNote:
      'Older city records and a September 2026 meeting transcript identify him as a council member. Current place/seat and name spelling require official confirmation. Need portrait, biography, and partnership role.',
  },
];

/** Publicly visible civic leadership (public office only). */
export const publishedPeople: Person[] = people.filter((p) => p.publish);

/** Confirmed partnership participants (none confirmed yet). */
export const confirmedPartnershipTeam: Person[] = people.filter(
  (p) => p.publish && p.participationConfirmed && p.partnershipRole
);

/** Confirmed fund-oversight appointments (hidden until supplied). */
export const confirmedFundOversight: Person[] = people.filter(
  (p) =>
    p.publish &&
    p.participationConfirmed &&
    p.partnershipRole !== null &&
    p.partnershipRole.toLowerCase().includes('oversight')
);
