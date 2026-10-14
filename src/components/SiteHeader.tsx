'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { primaryNav, getInvolvedCta, site } from '@/content/site';
import { Wordmark } from '@/components/Wordmark';

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
            <Wordmark />
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
