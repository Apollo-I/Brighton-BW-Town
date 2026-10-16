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

/** Vision statement modal for leader cards */
export interface VisionModalProps {
  isOpen: boolean;
  onClose: () => void;
  vision: string | null;
  fullName: string;
  portrait: string | null;
}

export function VisionModal({ isOpen, onClose, vision, fullName, portrait }: VisionModalProps) {
  const actualVision = vision || 'Vision statement awaiting contribution.';

  return (
    <div className="vision-modal-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.5)',
        display: isOpen ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
        padding: '1rem',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      aria-label="vision statement"
    >
      <div
        className="vision-modal"
        style={{
          background: 'white',
          borderRadius: '8px',
          width: '90%',
          maxWidth: '500px',
          maxHeight: '80%',
          overflow: 'auto',
          position: 'relative',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          animation: 'fadeIn 0.3s ease',
        }}
      >
        <button
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#666',
          }}
          onClick={() => onClose()}
          aria-label="Close vision modal"
        >
          ×
        </button>

        <div style={{ textAlign: 'center', padding: '2rem' }}>
          {portrait && (
            <img
              src={portrait}
              alt={`Portrait of ${fullName}`}
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                objectFit: 'cover',
                margin: '0 auto 1rem',
                border: '3px solid #e2e8f0',
              }}
            />
          )}

          <h3 style={{ margin: '0.5rem 0', fontSize: '1.4rem', fontWeight: '700', color: '#0b233b' }}>
            {fullName}
          </h3>

          <p style={{ margin: '0.8rem 0', fontSize: '1rem', lineHeight: '1.6', color: '#334155' }}>
            {actualVision}
          </p>

          <div style={{ padding: '0 1rem 1rem', textAlign: 'center' }}>
            <a
              href="/leadership/"
              style={{
                marginTop: '1rem',
                display: 'inline-block',
                padding: '0.6rem 1.2rem',
                background: '#3182ce',
                color: 'white',
                fontSize: '0.95rem',
                fontWeight: '600',
                borderRadius: '4px',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseOver={(e) => {(e.currentTarget as HTMLElement).style.background = '#2c5aa0';}}
              onMouseOut={(e) => {(e.currentTarget as HTMLElement).style.background = '#3182ce';}}
            >
              View Full Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
