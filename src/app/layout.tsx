import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'
import PageShell from '@/components/layout/PageShell'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import StructuredData from '@/components/structured-data/StructuredData'
import LoadingScreen from '@/components/loading/LoadingScreen'
import { LightboxProvider } from '@/contexts/LightboxContext'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://anujaharsha.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Anuja Harsha Nimmagadda | Principal UX Designer | Enterprise Design & AI/ML UX',
    template: '%s | Anuja Harsha Nimmagadda',
  },
  description:
    'Principal UX Designer with 13+ years experience. Modernizing enterprise systems and AI/ML UX through multi-agent AI orchestration. Designed in Figma, built with Next.js, and refined with Antigravity & Cursor.',
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
    'AI Orchestration',
    'Antigravity AI',
    'Cursor IDE',
    'Multi-Agent Workflow',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Viewport meta for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        {/* Favicon - Multiple formats for best compatibility */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" type="image/svg+xml" href="/anuja-sign.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Preload critical assets for faster LCP */}
        <link rel="preload" href="/assets/brain-gears.svg" as="fetch" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} font-sans antialiased`} suppressHydrationWarning>
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

