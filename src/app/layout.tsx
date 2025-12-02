import type { Metadata } from 'next'
import { Suspense } from 'react'
import './globals.css'
import PageShell from '@/components/layout/PageShell'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import StructuredData from '@/components/structured-data/StructuredData'
import LoadingScreen from '@/components/loading/LoadingScreen'

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
        url: '/images/og-image.jpg',
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
    images: ['/images/og-image.jpg'],
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
        {/* Favicon - Signature Logo */}
        <link rel="icon" type="image/svg+xml" href="/brand/signature/signature-icon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/favicon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/favicon-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=DM+Serif+Display:ital@0;1&display=swap"
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
        <PageShell>{children}</PageShell>
      </body>
    </html>
  )
}

