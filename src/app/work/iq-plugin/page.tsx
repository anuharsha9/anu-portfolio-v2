import type { Metadata } from 'next'
import CaseStudyLayout from '@/components/case-study/CaseStudyLayout'
import { iqPluginCaseStudy } from '@/data/iq-plugin'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://anujaharsha.com'

export const metadata: Metadata = {
  title: 'IQ Plugin: Unifying DSML Inside WebFOCUS Hub',
  description:
    'How I designed the IQ Plugin to unify automated insights, natural language query, and predictive analytics inside WebFOCUS — making DSML approachable for both technical and non-technical users. A case study in multi-persona design and progressive disclosure.',
  keywords: [
    'IQ Plugin',
    'DSML UX',
    'Data Science UX',
    'WebFOCUS',
    'Plugin Design',
    'Multi-Persona Design',
    'Progressive Disclosure',
    'UX Case Study',
  ],
  openGraph: {
    title: 'IQ Plugin: Unifying DSML Inside WebFOCUS | Anuja Harsha',
    description:
      'How I designed the IQ Plugin to unify DSML capabilities into a single, approachable entry point for both technical and non-technical users.',
    url: `${siteUrl}/work/iq-plugin/`,
    type: 'article',
    images: [
      {
        url: '/images/case-study/iq-plugin/iq-cover.png',
        width: 1200,
        height: 630,
        alt: 'IQ Plugin Case Study - DSML UX Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IQ Plugin: Unifying DSML Inside WebFOCUS',
    description:
      'How I designed the IQ Plugin to unify DSML capabilities into a single, approachable entry point.',
    images: ['/images/case-study/iq-plugin/iq-cover.png'],
  },
  alternates: {
    canonical: `${siteUrl}/work/iq-plugin/`,
  },
}

export default function IQPluginPage() {
  return <CaseStudyLayout data={iqPluginCaseStudy} />
}
