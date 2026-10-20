import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SITE } from '@/config/site';

export const metadata: Metadata = {
  title: {
    default: `AeroAg Australia | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`
  },
  description: 'Agricultural drone supplier for Australian farmers. Turnkey spray and mapping packages.',
  metadataBase: new URL(`https://${SITE.domain}`),
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: SITE.name,
    description: SITE.tagline,
    type: 'website',
    locale: 'en_AU',
    siteName: SITE.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.name,
    description: SITE.tagline,
  },
  other: {
    'og:updated_time': new Date().toISOString(),
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className="scroll-smooth">
      <body className="antialiased text-gray-900 flex flex-col min-h-screen">
        <script src="/js/webmcp.js" defer></script>
        <a href="#main" className="skip-link">Skip to content</a>
        <Nav />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
