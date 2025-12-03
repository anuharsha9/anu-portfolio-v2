'use client'

import { useState } from 'react'
import Image from 'next/image'

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
  const [activeVersion, setActiveVersion] = useState<'v1' | 'v2' | 'v3'>('v1')
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
        </div>
        <p className={`${mutedColor} text-sm md:text-base max-w-2xl mx-auto`}>
          I explored three directions before finding the solution that balanced platform architecture, engineering constraints, and user needs.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className={`border-b ${borderColor}`}>
        <div className="flex flex-wrap gap-2 md:gap-0">
          {versions.map((version) => {
            const isActive = activeVersion === version.id
            const tabLabel = version.id === 'v1' 
              ? 'First Attempt (Rejected)'
              : version.id === 'v2'
              ? 'Second Attempt (Rejected)'
              : 'Final Attempt (Launched)'
            
            return (
              <button
                key={version.id}
                onClick={() => setActiveVersion(version.id)}
                className={`px-4 md:px-6 py-3 text-sm md:text-base font-medium transition-all duration-300 border-b-2 ${
                  isActive
                    ? `border-[var(--accent-teal)] ${textColor} font-semibold`
                    : `border-transparent ${mutedColor} hover:${textColor} hover:border-white/20`
                }`}
              >
                {tabLabel}
              </button>
            )
          })}
        </div>
      </div>

      {/* Active Version Content */}
      {activeSection && activeVersionData && (
        <div className={`${bgColor} rounded-lg border ${borderColor} p-6 md:p-8 lg:p-12`}>
          <div className="space-y-6">
            {/* Title and Status */}
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h4 className={`${textColor} text-xl md:text-2xl font-serif`}>
                  {activeSection.title}
                </h4>
                {activeVersionData.status === 'shipped' && (
                  <span className="text-[var(--accent-teal)] text-xs font-semibold uppercase tracking-wider bg-[var(--accent-teal)]/10 px-3 py-1.5 rounded border border-[var(--accent-teal)]/30">
                    Shipped
                  </span>
                )}
                {activeVersionData.status === 'rejected' && (
                  <span className={`${mutedColor} text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded border ${borderColor}`}>
                    Rejected
                  </span>
                )}
              </div>
              
              {/* Approach and Description */}
              <div className="space-y-2">
                <h5 className={`${textColor} text-base md:text-lg font-semibold`}>
                  {activeVersionData.approach}
                </h5>
                <p className={`${mutedColor} text-sm md:text-base`}>
                  {activeVersionData.description}
                </p>
              </div>

              {/* Rationale and Rejection */}
              <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg p-4 space-y-3 border ${borderColor}`}>
                <div>
                  <p className={`${mutedColor} text-xs font-mono uppercase tracking-wider mb-1`}>Rationale</p>
                  <p className={`${textColor} text-sm`}>{activeVersionData.rationale}</p>
                </div>
                {activeVersionData.rejection && (
                  <div>
                    <p className={`${mutedColor} text-xs font-mono uppercase tracking-wider mb-1`}>Why It Was Rejected</p>
                    <p className={`${textColor} text-sm italic`}>{activeVersionData.rejection}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Body */}
            <div className={`${mutedColor} leading-relaxed space-y-4`}>
              {activeSection.body.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-sm md:text-base">{paragraph}</p>
              ))}
            </div>

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

