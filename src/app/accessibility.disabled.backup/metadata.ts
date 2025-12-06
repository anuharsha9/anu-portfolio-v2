import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://anujaharsha.com'

export const metadata: Metadata = {
  title: 'Accessibility Statement | WCAG 2.1 AA Compliance | Anuja Harsha Nimmagadda',
  description:
    'Accessibility statement for Anuja Harsha Nimmagadda portfolio. Committed to WCAG 2.1 Level AA compliance, inclusive design, and equal access for all users. Learn about accessibility features, testing methods, and how to report issues.',
  keywords: [
    'Accessibility Statement',
    'WCAG Compliance',
    'Web Accessibility',
    'Inclusive Design',
    'Accessible Design',
    'WCAG 2.1',
    'Screen Reader Support',
    'Keyboard Navigation',
    'ARIA Labels',
    'Accessible UX',
    'Universal Design',
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/accessibility`,
  },
}

