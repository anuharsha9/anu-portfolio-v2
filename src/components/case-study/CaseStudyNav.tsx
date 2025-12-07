'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { featuredCaseStudies } from '@/data/home'

export default function CaseStudyNav() {
  const pathname = usePathname()
  const currentSlug = pathname.split('/').pop()

  // Get all case studies for navigation
  const allCaseStudies = featuredCaseStudies

  if (allCaseStudies.length === 0) {
    return null
  }

  // Get system ID for each case study
  const getSystemId = (slug: string) => {
    if (slug === 'reportcaster') return '001'
    if (slug === 'ml-functions') return '002'
    if (slug === 'iq-plugin') return '003'
    return '000'
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
      {allCaseStudies.map((cs) => {
        const isActive = cs.slug === currentSlug
        const shortTitle = cs.title.split(':')[0].trim()
        
        return (
          <Link
            key={cs.slug}
            href={`/work/${cs.slug}`}
            className={`
              group flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-300
              ${isActive 
                ? 'bg-slate-900 border-slate-900 text-white' 
                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
              }
            `}
          >
            {/* System ID Badge */}
            <span className={`
              font-mono text-[10px] tracking-wider
              ${isActive ? 'text-slate-400' : 'text-slate-400 group-hover:text-slate-500'}
            `}>
              {getSystemId(cs.slug)}
            </span>
            
            {/* Divider */}
            <span className={`
              w-px h-3
              ${isActive ? 'bg-slate-600' : 'bg-slate-200'}
            `} />
            
            {/* Title */}
            <span className={`
              text-sm font-medium
              ${isActive ? 'text-white' : 'text-slate-700 group-hover:text-slate-900'}
            `}>
              {shortTitle}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
