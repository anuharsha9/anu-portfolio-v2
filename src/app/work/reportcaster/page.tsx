import type { Metadata } from 'next'
import CaseStudyLayout from '@/components/case-study/CaseStudyLayout'
import { reportcasterCaseStudy } from '@/data/reportcaster'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://anujaharsha.com'

export const metadata: Metadata = {
  title: 'ReportCaster: Redesigning a 50-Year-Old Enterprise Scheduler',
  description:
    'How I redesigned ReportCaster, a 40-year-old enterprise scheduling tool, unifying 5 scattered subsystems and eliminating tab sprawl. A case study in legacy system modernization and enterprise UX.',
  keywords: [
    'ReportCaster',
    'Enterprise UX',
    'Legacy Modernization',
    'Scheduling Software',
    'Enterprise Design',
    'UX Case Study',
    'System Redesign',
  ],
  openGraph: {
    title: 'ReportCaster: Redesigning a 50-Year-Old Enterprise Scheduler | Anuja Harsha',
    description:
      'How I redesigned ReportCaster, unifying 5 scattered subsystems and eliminating tab sprawl. A case study in legacy system modernization.',
    url: `${siteUrl}/work/reportcaster/`,
    type: 'article',
    images: [
      {
        url: '/images/case-study/ReportCaster/rc-cover.png',
        width: 1200,
        height: 630,
        alt: 'ReportCaster Case Study - Enterprise Scheduler Redesign',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReportCaster: Redesigning a 50-Year-Old Enterprise Scheduler',
    description:
      'How I redesigned ReportCaster, unifying 5 scattered subsystems and eliminating tab sprawl.',
    images: ['/images/case-study/ReportCaster/rc-cover.png'],
  },
  alternates: {
    canonical: `${siteUrl}/work/reportcaster/`,
  },
}

export default function ReportCasterPage() {
  return <CaseStudyLayout data={reportcasterCaseStudy} />
}

