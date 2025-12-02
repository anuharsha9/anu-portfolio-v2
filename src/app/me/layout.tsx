import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://anujaharsha.com'

export const metadata: Metadata = {
  title: 'About Me | Design Philosophy & Background',
  description:
    'Learn about my design journey, philosophy, and approach to enterprise UX. 13+ years transforming complex systems into intuitive experiences. Principal UX Designer specializing in legacy modernization and AI/ML UX.',
  keywords: [
    'About Anuja Harsha',
    'UX Designer Background',
    'Design Philosophy',
    'Enterprise UX Designer',
    'Design Process',
    'Design Writing',
  ],
  openGraph: {
    title: 'About Anuja Harsha Nimmagadda | Principal UX Designer',
    description:
      'Learn about my design journey, philosophy, and approach to enterprise UX. 13+ years transforming complex systems into intuitive experiences.',
    url: `${siteUrl}/me/`,
    type: 'profile',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anuja Harsha Nimmagadda - About',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Anuja Harsha Nimmagadda | Principal UX Designer',
    description:
      'Learn about my design journey, philosophy, and approach to enterprise UX.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: `${siteUrl}/me/`,
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

