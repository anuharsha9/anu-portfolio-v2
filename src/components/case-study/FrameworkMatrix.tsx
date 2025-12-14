'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

interface FrameworkPrinciple {
  letter: string
  title: string
  description: string
}

interface FrameworkMatrixProps {
  principles: FrameworkPrinciple[]
  sectionMappings?: Record<string, string>
  caseStudyContext?: string
}

export default function FrameworkMatrix({
  principles,
  sectionMappings,
}: FrameworkMatrixProps) {

  const handleNavigation = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="space-y-4">
      {/* Header - Compact */}
      <div className="flex items-center justify-between">
        <h2 className="text-slate-900 text-xl md:text-2xl font-serif">
          D.E.S.I.G.N. Framework Applied
        </h2>
        <Link
          href="/me#design-framework"
          className="inline-flex items-center gap-1.5 text-[var(--accent-teal)] hover:text-[var(--accent-teal-700)] text-xs font-mono uppercase tracking-widest transition-colors duration-200 group"
        >
          <span>Full framework</span>
          <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* The Matrix Grid */}
      <div className="w-full border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => {
            const sectionId = sectionMappings?.[principle.letter]

            // Calculate border classes for grid lines
            const isLastInRow = (index + 1) % 3 === 0
            const isLastRow = index >= principles.length - (principles.length % 3 || 3)
            const isLastItem = index === principles.length - 1

            const CellWrapper = sectionId ? 'a' : 'div'
            const cellProps = sectionId ? {
              href: `#${sectionId}`,
              onClick: handleNavigation(sectionId),
            } : {}

            return (
              <CellWrapper
                key={principle.letter}
                {...cellProps}
                className={`
                  bg-white p-4 md:p-5 transition-colors duration-200 group
                  ${sectionId ? 'cursor-pointer hover:bg-[var(--accent-teal-soft)]' : ''}
                  ${!isLastInRow ? 'lg:border-r border-slate-100' : ''}
                  ${!isLastRow && !isLastItem ? 'border-b border-slate-100' : ''}
                  ${index < principles.length - 2 ? 'md:border-b border-slate-100' : ''}
                  ${index % 2 === 0 && index < principles.length - 1 ? 'md:border-r border-slate-100' : ''}
                `}
              >
                {/* Header: Letter Tag + Title */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-mono text-base font-bold text-[var(--accent-teal)]">
                    [{principle.letter}]
                  </span>
                  <h3 className={`font-serif text-base text-slate-900 ${sectionId ? 'group-hover:text-[var(--accent-teal)] transition-colors' : ''}`}>
                    {principle.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {principle.description}
                </p>

                {/* Section Link Indicator */}
                {sectionId && (
                  <div className="mt-2 text-[var(--accent-teal)] text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    → Jump to section
                  </div>
                )}
              </CellWrapper>
            )
          })}
        </div>
      </div>
    </div>
  )
}
