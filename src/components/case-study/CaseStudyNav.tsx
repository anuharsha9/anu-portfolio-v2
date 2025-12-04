'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { featuredCaseStudies } from '@/data/home'

export default function CaseStudyNav() {
  const pathname = usePathname()
  const currentSlug = pathname.split('/').pop()

  const otherCaseStudies = featuredCaseStudies.filter(
    (cs) => cs.slug !== currentSlug
  )

  if (otherCaseStudies.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm">
      {otherCaseStudies.map((cs, index) => (
        <span key={cs.slug} className="flex items-center">
          <Link
            href={`/work/${cs.slug}`}
            className="text-[var(--text-muted-light)] hover:text-[var(--accent-teal)] transition-colors duration-normal text-sm"
          >
            {cs.title.split(':')[0].trim()}
          </Link>
          {index < otherCaseStudies.length - 1 && (
            <span className="text-[var(--text-muted-light)]/50 mx-2">·</span>
          )}
        </span>
      ))}
    </div>
  )
}

