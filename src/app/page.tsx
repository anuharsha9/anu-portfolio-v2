import type { Metadata } from 'next'
import WebFOCUSOverview from '@/components/home/WebFOCUSOverview'
import CollapsibleWorkArchive from '@/components/home/CollapsibleWorkArchive'
import TestimonialsWall from '@/components/home/TestimonialsWall'
import TalkSection from '@/components/home/TalkSection'
import ExecutiveSummary from '@/components/home/ExecutiveSummary'
import { recommendations } from '@/data/home'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://anujaharsha.com'

export const metadata: Metadata = {
  title: 'Principal UX Designer | Enterprise Design & AI/ML UX',
  description:
    'Principal UX Designer specializing in enterprise design, legacy modernization, and AI/ML UX. Transforming complex systems like WebFOCUS and ReportCaster into intuitive experiences used by millions.',
  openGraph: {
    title: 'Anuja Harsha Nimmagadda | Principal UX Designer',
    description:
      'Principal UX Designer specializing in enterprise design, legacy modernization, and AI/ML UX. Transforming complex systems into intuitive experiences at scale.',
    url: siteUrl,
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
  },
}

// Import HeroBrain directly instead of dynamic to ensure it loads
import { HeroBrain } from '@/components/HeroBrain'

export default function Home() {
  return (
    <>
      <HeroBrain />
      <ExecutiveSummary />
      <WebFOCUSOverview />
      <TestimonialsWall recommendations={recommendations} />
      <CollapsibleWorkArchive />
      <TalkSection />
    </>
  )
}
