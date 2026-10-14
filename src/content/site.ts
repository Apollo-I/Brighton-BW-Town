/**
 * Site-wide identity, navigation, and standing notices.
 *
 * The operator of this site has not yet been supplied. Until it is, the site
 * identifies itself as a community partnership project in development and does
 * not present itself as an official City of Brighton website.
 */

import type { MunicipalLink } from './types';

export const site = {
  name: 'Brighton Community Development Partnership',
  shortName: 'Brighton CDP',
  locality: 'Brighton, Alabama',
  tagline: 'A proposed community partnership for Brighton, Alabama',
  description:
    'A proposed community partnership bringing Brighton, Alabama residents, businesses, civic leaders, and development partners together to turn local priorities into practical projects.',
  /** Set only when the legal/site operator is confirmed and supplied. */
  operatorName: null as string | null,
  operatorContactEmail: null as string | null,
  /** One concise status note replaces repetitive warning banners. */
  statusNote:
    'Partnership development is underway. Confirmed projects, participants, and funding will be published as they are documented.',
  statusNoteShort: 'Proposed partnership — in development',
} as const;

export const primaryNav = [
  { label: 'Projects', href: '/projects/' },
  { label: 'Leadership', href: '/leadership/' },
  { label: 'Our Partnership', href: '/partnership/' },
  { label: 'Funding', href: '/funding/' },
  { label: 'Impact', href: '/impact/' },
] as const;

export const footerNav = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Civic Leadership & Partnership Team', href: '/leadership/' },
  { label: 'How the Partnership Works', href: '/partnership/' },
  { label: 'Funding & Accountability', href: '/funding/' },
  { label: 'Progress & Community Impact', href: '/impact/' },
  { label: 'Documents & Resources', href: '/resources/' },
  { label: 'Get Involved', href: '/get-involved/' },
] as const;

/**
 * Municipal-service links. These point to the City of Brighton's own channels.
 * This website is not the city website.
 */
export const municipalLinks: MunicipalLink[] = [
  {
    label: 'City of Brighton website',
    href: 'https://brightonal.org/',
    description: 'Official city services and information',
  },
  {
    label: 'City contact page',
    href: 'https://brightonal.org/contact-us',
    description: 'Reach City of Brighton offices',
  },
  {
    label: 'City public updates',
    href: 'https://www.facebook.com/61578141421882/',
    description: 'City of Brighton public announcements',
  },
];

export const getInvolvedCta = {
  label: 'Get Involved',
  href: '/get-involved/',
} as const;

/** Legal / standing footer line. */
export const footerStatus =
  'This is a community partnership project website for the proposed Brighton Community Development Partnership. It is not an official City of Brighton website, and the partnership should not be treated as approved or established until that status is documented.';
