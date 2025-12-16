import type { Metadata } from 'next'
import { Suspense } from 'react'
import './globals.css'
import PageShell from '@/components/layout/PageShell'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import StructuredData from '@/components/structured-data/StructuredData'
import LoadingScreen from '@/components/loading/LoadingScreen'
import { LightboxProvider } from '@/contexts/LightboxContext'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://anujaharsha.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Anuja Harsha Nimmagadda | Principal UX Designer | Enterprise Design & AI/ML UX',
    template: '%s | Anuja Harsha Nimmagadda',
  },
  description:
    'Principal UX Designer specializing in enterprise design, legacy modernization, and AI/ML UX. Transforming complex systems into intuitive experiences at scale. 13+ years designing for WebFOCUS, ReportCaster, and enterprise analytics platforms.',
  keywords: [
    'UX Designer',
    'Principal UX Designer',
    'Enterprise UX',
    'AI/ML UX',
    'Legacy Modernization',
    'Product Design',
    'Design Systems',
    'User Experience Design',
    'Enterprise Software Design',
    'Data Science UX',
    'Machine Learning UX',
    'WebFOCUS',
    'ReportCaster',
    'Anuja Harsha',
    'Anuja Nimmagadda',
  ],
  authors: [{ name: 'Anuja Harsha Nimmagadda' }],
  creator: 'Anuja Harsha Nimmagadda',
  publisher: 'Anuja Harsha Nimmagadda',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Anuja Harsha Nimmagadda',
    title: 'Anuja Harsha Nimmagadda | Principal UX Designer',
    description:
      'Principal UX Designer specializing in enterprise design, legacy modernization, and AI/ML UX. Transforming complex systems into intuitive experiences at scale.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Anuja Harsha Nimmagadda - Principal UX Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anuja Harsha Nimmagadda | Principal UX Designer',
    description:
      'Principal UX Designer specializing in enterprise design, legacy modernization, and AI/ML UX.',
    images: ['/images/og-image.png'],
    creator: '@anujaharsha', // Update with actual Twitter handle if available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  other: {
    'google-fonts': 'Inter Tight',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Viewport meta for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        {/* Favicon - Multiple formats for best compatibility */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" type="image/svg+xml" href="/brand/signature/signature-icon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Preload critical assets for faster LCP */}
        <link rel="preload" href="/assets/brain-gears.svg" as="fetch" crossOrigin="anonymous" />
        <link rel="preload" href="/videos/intro-video.mp4" as="video" type="video/mp4" />
        {/* Font optimization: preconnect and font-display swap for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <LoadingScreen />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <StructuredData type="website" />
        <StructuredData type="person" />
        <LightboxProvider>
          <PageShell>{children}</PageShell>
        </LightboxProvider>
        {/* Service worker cleanup - unregister any existing service workers */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if ('serviceWorker' in navigator) {
                  navigator.serviceWorker.getRegistrations().then((registrations) => {
                    registrations.forEach((registration) => {
                      registration.unregister();
                    });
                  });
                  if ('caches' in window) {
                    caches.keys().then((cacheNames) => {
                      cacheNames.forEach((cacheName) => {
                        caches.delete(cacheName);
                      });
                    });
                  }
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}

