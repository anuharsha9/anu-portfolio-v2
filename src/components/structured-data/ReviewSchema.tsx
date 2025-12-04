import { Recommendation } from '@/data/home'

interface ReviewSchemaProps {
  recommendations: Recommendation[]
}

export default function ReviewSchema({ recommendations }: ReviewSchemaProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://anujaharsha.com'

  // Create aggregate rating from all recommendations
  const aggregateRating = {
    '@type': 'AggregateRating',
    ratingValue: '5', // All testimonials are positive
    reviewCount: recommendations.length.toString(),
    bestRating: '5',
    worstRating: '1',
  }

  // Create individual reviews
  const reviews = recommendations.map((rec) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: rec.name,
      jobTitle: rec.role,
      worksFor: {
        '@type': 'Organization',
        name: rec.company || 'Enterprise',
      },
    },
    reviewBody: rec.quote,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
    },
    datePublished: new Date().toISOString().split('T')[0],
  }))

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Anuja Harsha Nimmagadda',
    jobTitle: 'Principal UX Designer',
    aggregateRating,
    review: reviews,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

