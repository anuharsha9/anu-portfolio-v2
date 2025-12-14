import type { Metadata } from 'next'
import HeroSplit from '@/components/home/HeroSplit'
import ImpactMetrics from '@/components/home/ImpactMetrics'
import WorkGrid from '@/components/home/WorkGrid'
import TransformationShowcase from '@/components/home/TransformationShowcase'
import GrowthStory from '@/components/home/GrowthStory'
import WritingSection from '@/components/home/WritingSection'
import CollapsibleWorkArchive from '@/components/home/CollapsibleWorkArchive'
import TalkSection from '@/components/home/TalkSection'
import ScrollGear from '@/components/ui/ScrollGear'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://anujaharsha.com'

export const metadata: Metadata = {
  title: 'Principal Product Designer | AI-Driven | Enterprise Systems Architect',
  description:
    'Principal Product Designer specializing in design systems architecture, legacy modernization, and AI-driven workflows. Designing through complexity — from Figma to Production.',
  openGraph: {
    title: 'Anuja Harsha Nimmagadda | Principal Product Designer',
    description:
      'Principal Product Designer specializing in design systems architecture, legacy modernization, and AI-driven workflows. Transforming complex systems into intuitive experiences at scale.',
    url: siteUrl,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anuja Harsha Nimmagadda - Principal Product Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anuja Harsha Nimmagadda | Principal Product Designer',
    description:
      'Principal Product Designer specializing in design systems architecture, legacy modernization, and AI-driven workflows.',
    images: ['/images/og-image.jpg'],
  },
}

export default function Home() {
  return (
    <main className="bg-white relative overflow-hidden">
      {/* Content */}
      <HeroSplit />
      <ImpactMetrics />
      <WorkGrid />
      <TransformationShowcase />
      <CollapsibleWorkArchive />
      <GrowthStory />
      <WritingSection />
      <TalkSection />

      {/* Scroll-linked rotating gear - branded progress indicator */}
      <ScrollGear />
    </main>
  )
}
