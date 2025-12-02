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
    <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm pb-6">
      {otherCaseStudies.map((cs, index) => (
        <span key={cs.slug} className="flex items-center">
          <Link
            href={`/work/${cs.slug}`}
            className="text-white/70 hover:text-[var(--accent-teal)] transition-colors duration-200 text-sm"
          >
            {cs.title.split(':')[0].trim()}
          </Link>
          {index < otherCaseStudies.length - 1 && (
            <span className="text-white/40 mx-2">·</span>
          )}
        </span>
      ))}
    </div>
  )
}

