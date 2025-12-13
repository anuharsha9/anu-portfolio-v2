import type { Metadata } from 'next'
import HeroSplit from '@/components/home/HeroSplit'
import WorkGrid from '@/components/home/WorkGrid'
import TransformationShowcase from '@/components/home/TransformationShowcase'
import GrowthStory from '@/components/home/GrowthStory'
import WritingSection from '@/components/home/WritingSection'
import CollapsibleWorkArchive from '@/components/home/CollapsibleWorkArchive'
import TalkSection from '@/components/home/TalkSection'

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
    <>
      {/* 1. HERO - Dark, dramatic, gears as the centerpiece */}
      <HeroSplit />

      {/* 2. TRANSFORMATION - The scroll-stopper before/after */}
      <TransformationShowcase />

      {/* 3. WORK - Case studies */}
      <WorkGrid />

      {/* 4. ARCHIVE - Past Work */}
      <CollapsibleWorkArchive />

      {/* 5. QUOTE - Leadership testimonials */}
      <GrowthStory />

      {/* 6. WRITING - Articles & thought leadership */}
      <WritingSection />

      {/* 7. CONTACT - CTA */}
      <TalkSection />
    </>
  )
}
