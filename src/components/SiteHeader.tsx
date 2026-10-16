'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { primaryNav, getInvolvedCta, site } from '@/content/site';
import { Wordmark } from '@/components/Wordmark';

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // Close the mobile menu when navigation link is clicked.
  useEffect(() => {
    const handleClick = () => setOpen(false);
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Close on Escape and restore focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const isActive = (href: string) => {
    const clean = href.replace(/\/$/, '') || '/';
    const path = pathname.replace(/\/$/, '') || '/';
    return path === clean || path.startsWith(`${clean}/`);
  };

  return (
    <header className="site-header" style={{
      background: 'white',
      borderBottom: '1px solid #e2e8f0',
    }}>
      <div className="container" style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100px',
      }}>
        {/* Top strip: "Brighton, Alabama" */}
        <div style={{
          background: '#0b233b',
          color: 'white',
          fontSize: '0.75rem',
          lineHeight: '1.2',
          padding: '4px 12px',
          textAlign: 'right',
          fontFamily: 'system-ui, sans-serif',
        }}>
          Brighton, Alabama
        </div>

        <div className="header-inner" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
          <Link href="/" className="wordmark" aria-label={`${site.name} — home`} style={{ flexShrink: 0 }}>
            <Wordmark />
          </Link>

          {/* Mobile nav toggle - hamburger icon, no "Menu" text */}
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            style={{
              display: 'block',
              flexShrink: 0,
              width: '44px',
              height: '44px',
              padding: 0,
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              style={{
                width: '20px',
                height: '20px',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeLinecap: 'round',
              }}
            >
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop nav for wider screens */}
          <nav className="desktop-nav" aria-label="Main" style={{
            display: 'none', // Hidden on mobile; shown on desktop via CSS
          }}>
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                style={{ marginLeft: '1rem', fontSize: '0.875rem' }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={getInvolvedCta.href}
              className="btn btn-primary header-cta"
              style={{ marginLeft: '1rem' }}
            >
              {getInvolvedCta.label}
            </Link>
          </nav>
        </div>

        {/* Mobile nav - appears when open */}
        {open && (
          <nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Main"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'white',
              borderTop: '1px solid #e2e8f0',
              padding: '1rem 0',
              width: '100%',
            }}
            aria-expanded="true"
          >
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                style={{
                  display: 'block',
                  padding: '0.5rem 1rem',
                  fontSize: '1rem',
                  color: '#0b233b',
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/resources/"
              className="mobile-extra-link"
              style={{
                display: 'block',
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                color: '#0b233b',
                borderTop: '1px solid #e2e8f0',
                borderBottom: '1px solid #e2e8f0',
              }}
            >
              Resources
            </Link>
            <Link
              href={getInvolvedCta.href}
              className="btn btn-primary"
              style={{
                display: 'block',
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                color: 'white',
                background: '#3182ce',
                marginTop: '0.5rem',
              }}
            >
              {getInvolvedCta.label}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}