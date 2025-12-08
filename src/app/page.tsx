import type { Metadata } from 'next'
import HeroSplit from '@/components/home/HeroSplit'
import TransformationShowcase from '@/components/home/TransformationShowcase'
import WorkGrid from '@/components/home/WorkGrid'
import GrowthStory from '@/components/home/GrowthStory'
import CollapsibleWorkArchive from '@/components/home/CollapsibleWorkArchive'
import FeaturedQuote from '@/components/home/FeaturedQuote'
import TalkSection from '@/components/home/TalkSection'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://anujaharsha.com'

export const metadata: Metadata = {
  title: 'Principal Product Designer | Design Systems Architect | AI-Driven',
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
      {/* 1. HERO - Who you are + Impact Proof Bar at bottom */}
      <HeroSplit />

      {/* 2. TRANSFORMATION SHOWCASE - The scroll-stopper */}
      <TransformationShowcase />

      {/* 3. WORK GRID - WebFOCUS context + 3 Case Studies */}
      <WorkGrid />

      {/* 3. GROWTH STORY - The Transformation (emotional hook) */}
      <GrowthStory />

      {/* 4. QUOTE - Social Proof */}
      <FeaturedQuote />

      {/* 5. ARCHIVE - Past Work */}
      <CollapsibleWorkArchive />

      {/* 6. CONTACT - CTA */}
      <TalkSection />
    </>
  )
}
