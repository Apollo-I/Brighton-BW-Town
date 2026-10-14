import type { ReactNode } from 'react';
import Link from 'next/link';
import { BackgroundArt } from '@/components/BackgroundArt';

/** Concise standing status note — replaces repetitive warning banners. */
export function StatusNote({
  children,
  icon = true,
}: {
  children: ReactNode;
  icon?: boolean;
}) {
  return (
    <div className="status-note" role="note">
      {icon && (
        <svg
          className="status-note-icon"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 8v.5M12 11.5V16"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
        </svg>
      )}
      <p>{children}</p>
    </div>
  );
}

/** Honest empty state used whenever records are not yet available. */
export function EmptyState({
  title,
  children,
  headingLevel = 'h3',
}: {
  title: string;
  children: ReactNode;
  headingLevel?: 'h3' | 'h4';
}) {
  const H = headingLevel;
  return (
    <div className="empty-state">
      <H>{title}</H>
      {children}
    </div>
  );
}

export type PillTone = 'proposal' | 'planning' | 'awaiting' | 'neutral';

export function StatusPill({
  children,
  tone = 'neutral',
}: {
  children: ReactNode;
  tone?: PillTone;
}) {
  const cls =
    tone === 'proposal'
      ? 'status-pill status-pill-proposal'
      : tone === 'planning'
        ? 'status-pill status-pill-planning'
        : tone === 'awaiting'
          ? 'status-pill status-pill-awaiting'
          : 'status-pill';
  return <span className={cls}>{children}</span>;
}

/** Interior page hero with breadcrumb and abstract art. */
export function PageHero({
  eyebrow,
  title,
  lede,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <section className="page-hero">
      <BackgroundArt variant="page" />
      <div className="container page-hero-inner">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb">
              {breadcrumb.map((crumb, i) => (
                <li key={`${crumb.label}-${i}`}>
                  {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : crumb.label}
                  {i < breadcrumb.length - 1 && (
                    <span aria-hidden="true" style={{ marginInline: '0.35rem' }}>
                      /
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
      </div>
    </section>
  );
}

/** Dignified initials placeholder used when no approved portrait exists. */
export function initialsOf(fullName: string): string {
  const parts = fullName
    .replace(/[“”"]/g, '')
    .split(/\s+/)
    .filter((p) => p.length > 1 && !['Sr.', 'Jr.'].includes(p));
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase() || '?';
}
