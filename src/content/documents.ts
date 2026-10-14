/**
 * Document and update records.
 *
 * No supporting documents have been supplied yet, so categories render as
 * useful empty states rather than placeholder downloads. Never fabricate
 * agreements, briefs, resolutions, or reports.
 */

import type { DocumentRecord, UpdateRecord } from './types';

export const documents: DocumentRecord[] = [];

export const documentCategories: DocumentRecord['category'][] = [
  'Partnership agreements',
  'Project briefs',
  'Budget and funding records',
  'Letters of support',
  'Public resolutions',
  'Progress reports',
];

export const publishedDocuments: DocumentRecord[] = documents.filter(
  (d) => d.publish
);

export const updates: UpdateRecord[] = [];

export const publishedUpdates: UpdateRecord[] = updates.filter((u) => u.publish);
