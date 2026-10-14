'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { primaryNav, getInvolvedCta, site } from '@/content/site';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <Link href="/" className="wordmark" aria-label={`${site.name} — home`}>
            <span className="wordmark-mark" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 19V9.5L12 4l8 5.5V19"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 19v-5h6v5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="wordmark-text">
              Brighton Community
              <br />
              Development Partnership
              <small>Brighton, Alabama</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link href={getInvolvedCta.href} className="btn btn-primary header-cta">
              {getInvolvedCta.label}
            </Link>
          </nav>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
            Menu
          </button>
        </div>

        {open && (
          <nav id="mobile-nav" className="mobile-nav" aria-label="Main">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/resources/" className="mobile-extra-link">
              Resources
            </Link>
            <Link href={getInvolvedCta.href} className="btn btn-primary">
              {getInvolvedCta.label}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
