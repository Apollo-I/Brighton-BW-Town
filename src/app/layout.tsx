import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: {
    default: 'Brighton Community Development Partnership — Brighton, Alabama',
    template: '%s | Brighton Community Development Partnership, Brighton AL',
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'Brighton Alabama',
    'community development',
    'community partnership',
    'Jefferson County',
    'neighborhood projects',
  ],
  openGraph: {
    title: 'Brighton Community Development Partnership — Brighton, Alabama',
    description: site.description,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#102B3F',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&family=Open+Sans:wght@400;600;700&display=swap"
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
