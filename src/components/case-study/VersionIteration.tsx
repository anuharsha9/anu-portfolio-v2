'use client'

import { useState } from 'react'
import Image from 'next/image'
import ScheduleWorkflowComparison from './ScheduleWorkflowComparison'

interface VersionData {
  id: string
  title: string
  body: string
  images?: {
    src: string
    alt: string
    caption?: string
    fullWidth?: boolean
  }[]
  subsections?: {
    title: string
    description?: string
    images?: {
      src: string
      alt: string
      caption?: string
      fullWidth?: boolean
    }[]
  }[]
}

interface VersionIterationProps {
  v1: VersionData
  v2: VersionData
  v3: VersionData
  isLightBackground?: boolean
}

export default function VersionIteration({ v1, v2, v3, isLightBackground = false }: VersionIterationProps) {
  const [activeVersion, setActiveVersion] = useState<'v1' | 'v2' | 'v3'>('v3')
  // Start with all subsections collapsed by default
  const [collapsedSubsections, setCollapsedSubsections] = useState<Set<number>>(() => {
    // Initialize with all subsection indices collapsed
    if (v3.subsections) {
      return new Set(v3.subsections.map((_, idx) => idx))
    }
    return new Set()
  })
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'
  
  // Image styling to match SectionBlock polish
  const imageBorderRadius = 'rounded-[10px]'
  const imageShadow = isLightBackground
    ? 'shadow-[0_4px_12px_rgba(0,0,0,0.15)]'
    : ''
  const imageOutline = isLightBackground
    ? 'outline outline-1 outline-black/5 outline-offset-[-1px]'
    : 'outline outline-1 outline-white/5 outline-offset-[-1px]'

  const versions = [
    {
      id: 'v1' as const,
      label: 'V1',
      title: v1.title,
      section: v1,
      approach: 'Independent Product',
      description: 'Standalone RC environment similar to other complex tools',
      rationale: 'Match platform pattern (Designer, Data Flows)',
      rejection: 'Must be in hub',
      status: 'rejected',
    },
    {
      id: 'v2' as const,
      label: 'V2',
      title: v2.title,
      section: v2,
      approach: 'Hub Plugin',
      description: 'RC as a plugin inside the hub environment',
      rationale: 'Bring RC into hub as plugin',
      rejection: 'Too much engineering effort',
      status: 'rejected',
    },
    {
      id: 'v3' as const,
      label: 'V3',
      title: v3.title,
      section: v3,
      approach: 'Platform-Native',
      description: 'Modal-based workflows from + menu',
      rationale: 'Design WITH platform patterns (+ menu, modals)',
      rejection: null,
      status: 'shipped',
    },
  ]

  const activeSection = versions.find(v => v.id === activeVersion)?.section
  const activeVersionData = versions.find(v => v.id === activeVersion)

  const toggleSubsection = (index: number) => {
    const newCollapsed = new Set(collapsedSubsections)
    if (newCollapsed.has(index)) {
      newCollapsed.delete(index)
    } else {
      newCollapsed.add(index)
    }
    setCollapsedSubsections(newCollapsed)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-3 mb-2">
          <h3 className={`${textColor} text-xl md:text-2xl font-serif`}>
            The Iteration Journey: Three Architectural Approaches
          </h3>
          {/* Phase Indicator */}
          <div className={`${isLightBackground ? 'bg-black/5' : 'bg-white/10'} rounded-lg px-3 py-1.5 border ${borderColor}`}>
            <div className={`${mutedColor} text-xs font-mono uppercase tracking-wider mb-0.5`}>Phases 2 & 3</div>
            <div className={`${textColor} text-xs font-semibold`}>Architecture & Design</div>
          </div>
        </div>
        <p className={`${mutedColor} text-sm md:text-base max-w-2xl mx-auto`}>
          I explored three directions before finding the solution that balanced platform architecture, engineering constraints, and user needs.
        </p>
      </div>

      {/* Architectural Comparison Tiles - Clickable */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {versions.map((version) => (
          <button
            key={version.id}
            onClick={() => setActiveVersion(version.id)}
            className={`${bgColor} rounded-lg border-2 p-4 text-left transition-all duration-300 hover:scale-105 ${
              activeVersion === version.id
                ? 'border-[var(--accent-teal)] shadow-lg'
                : `border-opacity-50 ${borderColor}`
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span
                className={`font-mono text-base font-bold ${
                  version.status === 'shipped' ? 'text-[var(--accent-teal)]' : mutedColor
                }`}
              >
                {version.label}
              </span>
              {version.status === 'shipped' && (
                <span className="text-[var(--accent-teal)] text-xs font-semibold uppercase tracking-wider bg-[var(--accent-teal)]/10 px-2 py-1 rounded">
                  Shipped
                </span>
              )}
              {version.status === 'rejected' && (
                <span className={`${mutedColor} text-xs font-semibold uppercase tracking-wider`}>
                  Rejected
                </span>
              )}
            </div>
            <h4 className={`${textColor} text-sm font-semibold mb-1`}>{version.approach}</h4>
            <p className={`${mutedColor} text-xs mb-2 leading-relaxed`}>{version.description}</p>
            <div className="text-xs">
              <p className={`${mutedColor} text-xs font-mono uppercase tracking-wider mb-0.5`}>Rationale</p>
              <p className={`${textColor} text-xs`}>{version.rationale}</p>
              {version.rejection && (
                <>
                  <p className={`${mutedColor} text-xs font-mono uppercase tracking-wider mb-0.5 mt-2`}>Rejection</p>
                  <p className={`${textColor} text-xs italic`}>{version.rejection}</p>
                </>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Active Version Content */}
      {activeSection && (
        <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
          <div className="space-y-6">
            {/* Title */}
            <h4 className={`${textColor} text-xl md:text-2xl font-serif`}>
              {activeSection.title}
            </h4>

            {/* Body */}
            <div className={`${mutedColor} leading-relaxed space-y-4`}>
              {activeSection.body.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Schedule Workflow Comparison - only for V3, placed above subsections */}
            {activeVersion === 'v3' && (
              <ScheduleWorkflowComparison isLightBackground={isLightBackground} />
            )}

                   {/* Images - 2x2 Grid */}
                   {activeSection.images && activeSection.images.length > 0 && (
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                       {activeSection.images.map((image, idx) => (
                         <div key={idx} className="space-y-3 cursor-pointer group">
                           <div 
                             className={`relative w-full aspect-[4/3] ${imageBorderRadius} overflow-hidden border ${borderColor} ${imageShadow} ${imageOutline} cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg ${isLightBackground ? 'bg-black/5' : 'bg-white/5'}`}
                           >
                             <Image
                               src={image.src}
                               alt={image.alt}
                               fill
                               className="object-contain group-hover:scale-105 transition-transform duration-300"
                               sizes="(max-width: 768px) 100vw, 50vw"
                             />
                           </div>
                           {image.caption && (
                             <p className={`${mutedColor} text-sm leading-relaxed`}>{image.caption}</p>
                           )}
                         </div>
                       ))}
                     </div>
                   )}

            {/* Subsections (for V3) - Collapsible */}
            {activeSection.subsections && activeSection.subsections.length > 0 && (
              <div className="space-y-4 pt-6">
                {/* Expand All / Collapse All Button */}
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      const allCollapsed = activeSection.subsections!.every((_, i) => collapsedSubsections.has(i))
                      if (allCollapsed) {
                        // Expand all
                        setCollapsedSubsections(new Set())
                      } else {
                        // Collapse all
                        setCollapsedSubsections(new Set(activeSection.subsections!.map((_, i) => i)))
                      }
                    }}
                    className={`${mutedColor} text-xs font-mono uppercase tracking-wider hover:${textColor} transition-colors px-3 py-1.5 rounded border ${borderColor}`}
                  >
                    {activeSection.subsections!.every((_, i) => collapsedSubsections.has(i))
                      ? 'Expand All'
                      : 'Collapse All'}
                  </button>
                </div>
                {activeSection.subsections.map((subsection, idx) => {
                  const isCollapsed = collapsedSubsections.has(idx)
                  return (
                    <div key={idx} className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border ${borderColor} overflow-hidden transition-all duration-300`}>
                      <button
                        onClick={() => toggleSubsection(idx)}
                        className="w-full p-4 flex items-center justify-between hover:bg-black/5 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <h5 className={`${textColor} text-base font-semibold text-left`}>
                            {subsection.title}
                          </h5>
                          {subsection.images && subsection.images.length > 0 && (
                            <span className={`${mutedColor} text-xs font-mono px-2 py-0.5 rounded-full border ${borderColor}`}>
                              {subsection.images.length} {subsection.images.length === 1 ? 'screen' : 'screens'}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {isCollapsed && (
                            <span className={`${mutedColor} text-xs italic`}>Click to view</span>
                          )}
                                <svg
                                  className={`w-5 h-5 ${textColor} transition-all duration-300 ${isCollapsed ? '' : 'rotate-180'} group-hover:scale-110`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                        </div>
                      </button>
                      {!isCollapsed && (
                        <div className="p-4 pt-0 space-y-4 opacity-0 animate-[fadeIn_0.3s_ease-in-out_forwards]">
                          {subsection.description && (
                            <p className={`${mutedColor} text-sm leading-relaxed`}>
                              {subsection.description}
                            </p>
                          )}
                          {subsection.images && subsection.images.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                              {subsection.images.map((image, imgIdx) => (
                                <div key={imgIdx} className="space-y-3 cursor-pointer group">
                                  <div 
                                    className={`relative w-full aspect-[4/3] ${imageBorderRadius} overflow-hidden border ${borderColor} ${imageShadow} ${imageOutline} cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg ${isLightBackground ? 'bg-black/5' : 'bg-white/5'}`}
                                  >
                                    <Image
                                      src={image.src}
                                      alt={image.alt}
                                      fill
                                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                                      sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                  </div>
                                  {image.caption && (
                                    <p className={`${mutedColor} text-sm leading-relaxed`}>{image.caption}</p>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

