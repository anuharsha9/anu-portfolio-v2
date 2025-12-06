'use client'

import { useState } from 'react'
import Image from 'next/image'
import ImageLightbox from './ImageLightbox'
import { getTheme } from '@/lib/design-system'

interface VersionData {
  id: string
  title: string
  body: string
  images?: { src: string; alt: string; caption?: string; fullWidth?: boolean }[]
  subsections?: { title: string; description?: string; images?: { src: string; alt: string; caption?: string; fullWidth?: boolean }[] }[]
}

interface VersionIterationProps {
  v1: VersionData
  v2: VersionData
  v3: VersionData
  isLightBackground?: boolean
}

export default function VersionIteration({ v1, v2, v3, isLightBackground = true }: VersionIterationProps) {
  const t = getTheme(true) // Force light background
  const [activeVersion, setActiveVersion] = useState<'v1' | 'v2' | 'v3'>('v1')
  const [collapsedSubsections, setCollapsedSubsections] = useState<Set<number>>(() => (v3.subsections ? new Set(v3.subsections.map((_, idx) => idx)) : new Set()))
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; caption?: string } | null>(null)
  const [lightboxImages, setLightboxImages] = useState<Array<{ src: string; alt: string; caption?: string }>>([])
  const [lightboxCurrentIndex, setLightboxCurrentIndex] = useState(0)

  const imageBorderRadius = 'rounded-[10px]'
  const imageShadow = 'shadow-[0_4px_12px_rgba(0,0,0,0.15)]'
  const imageOutline = 'outline outline-1 outline-black/5 outline-offset-[-1px]'

  const openLightbox = (src: string, alt: string, caption?: string, images?: Array<{ src: string; alt: string; caption?: string }>, index?: number) => {
    setLightboxImage({ src, alt, caption })
    if (images && index !== undefined) {
      setLightboxImages(images)
      setLightboxCurrentIndex(index)
    } else {
      setLightboxImages([])
      setLightboxCurrentIndex(0)
    }
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    setLightboxImages([])
    setLightboxCurrentIndex(0)
  }

  const handleLightboxNavigate = (index: number) => {
    if (lightboxImages[index]) {
      const img = lightboxImages[index]
      setLightboxImage({ src: img.src, alt: img.alt, caption: img.caption })
      setLightboxCurrentIndex(index)
    }
  }

  const versions = [
    { id: 'v1' as const, label: 'V1', title: v1.title, section: v1, approach: 'Independent Product', description: 'Standalone RC environment similar to other complex tools', rationale: 'Match platform pattern (Designer, Data Flows)', rejection: 'Must be in hub', status: 'rejected' },
    { id: 'v2' as const, label: 'V2', title: v2.title, section: v2, approach: 'Hub Plugin', description: 'RC as a plugin inside the hub environment', rationale: 'Bring RC into hub as plugin', rejection: 'Too much engineering effort', status: 'rejected' },
    { id: 'v3' as const, label: 'V3', title: v3.title, section: v3, approach: 'Platform-Native', description: 'Modal-based workflows from + menu', rationale: 'Design WITH platform patterns (+ menu, modals)', rejection: null, status: 'shipped' },
  ]

  const activeSection = versions.find((v) => v.id === activeVersion)?.section
  const activeVersionData = versions.find((v) => v.id === activeVersion)

  const toggleSubsection = (index: number) => {
    const newCollapsed = new Set(collapsedSubsections)
    if (newCollapsed.has(index)) newCollapsed.delete(index)
    else newCollapsed.add(index)
    setCollapsedSubsections(newCollapsed)
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-3 mb-2">
          <h3 className={`${t.text} text-xl md:text-2xl font-serif`}>The Iteration Journey: Three Architectural Approaches</h3>
        </div>
        <p className={`${t.textMuted} text-sm md:text-base max-w-2xl mx-auto`}>I explored three directions before finding the solution that balanced platform architecture, engineering constraints, and user needs.</p>
      </div>

      <div className={`border-b ${t.border}`}>
        <div className="flex flex-wrap gap-2 md:gap-0 justify-center">
          {versions.map((version) => {
            const isActive = activeVersion === version.id
            const tabLabel = version.id === 'v1' ? 'First Attempt (Rejected)' : version.id === 'v2' ? 'Second Attempt (Rejected)' : 'Final Attempt (Launched)'
            return (
              <button key={version.id} onClick={() => setActiveVersion(version.id)} className={`px-4 md:px-6 py-3 text-sm md:text-base font-medium transition-all duration-300 border-b-2 ${isActive ? `border-[var(--accent-teal)] ${t.text} font-semibold` : `border-transparent ${t.textMuted} hover:border-white/20`}`}>
                {tabLabel}
              </button>
            )
          })}
        </div>
      </div>

      {activeSection && activeVersionData && (
        <div className={`${t.cardBg} rounded-lg border ${t.border} p-6 md:p-8 lg:p-12`}>
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h4 className={`${t.text} text-xl md:text-2xl font-serif`}>{activeSection.title}</h4>
                {activeVersionData.status === 'shipped' && <span className={`${t.textAccent} text-xs font-semibold uppercase tracking-wider bg-[var(--accent-teal)]/10 px-3 py-1.5 rounded border border-[var(--accent-teal)]/30`}>Shipped</span>}
                {activeVersionData.status === 'rejected' && <span className={`${t.textMuted} text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded border ${t.border}`}>Rejected</span>}
              </div>

              <div className="space-y-2">
                <h5 className={`${t.text} text-base md:text-lg font-semibold`}>{activeVersionData.approach}</h5>
                <p className={`${t.textMuted} text-sm md:text-base`}>{activeVersionData.description}</p>
              </div>

              <div className={`${t.cardBg} rounded-lg p-4 space-y-3 border ${t.border}`}>
                <div>
                  <p className={`${t.textMuted} text-xs font-mono uppercase tracking-wider mb-1`}>Rationale</p>
                  <p className={`${t.text} text-sm`}>{activeVersionData.rationale}</p>
                </div>
                {activeVersionData.rejection && (
                  <div>
                    <p className={`${t.textMuted} text-xs font-mono uppercase tracking-wider mb-1`}>Why It Was Rejected</p>
                    <p className={`${t.text} text-sm italic`}>{activeVersionData.rejection}</p>
                  </div>
                )}
              </div>
            </div>

            <div className={`${t.textMuted} leading-relaxed space-y-4`}>
              {activeSection.body.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-sm md:text-base">{paragraph}</p>
              ))}
            </div>

            {activeSection.images && activeSection.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                {activeSection.images.map((image, idx) => (
                  <div key={idx} className="space-y-3 cursor-pointer group">
                    <div onClick={() => openLightbox(image.src, image.alt, image.caption, activeSection.images?.map((img) => ({ src: img.src, alt: img.alt, caption: img.caption })), idx)} className={`relative w-full aspect-[4/3] ${imageBorderRadius} overflow-hidden border ${t.border} ${imageShadow} ${imageOutline} cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg bg-black/5`}>
                      <Image src={image.src} alt={image.alt} fill className="object-contain group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                    {image.caption && <p className={`${t.textMuted} text-sm leading-relaxed`}>{image.caption}</p>}
                  </div>
                ))}
              </div>
            )}

            {activeSection.subsections && activeSection.subsections.length > 0 && (
              <div className="space-y-4 pt-6">
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      const allCollapsed = activeSection.subsections!.every((_, i) => collapsedSubsections.has(i))
                      if (allCollapsed) setCollapsedSubsections(new Set())
                      else setCollapsedSubsections(new Set(activeSection.subsections!.map((_, i) => i)))
                    }}
                    className={`${t.textMuted} text-xs font-mono uppercase tracking-wider hover:${t.text} transition-colors px-3 py-1.5 rounded border ${t.border}`}
                  >
                    {activeSection.subsections!.every((_, i) => collapsedSubsections.has(i)) ? 'Expand All' : 'Collapse All'}
                  </button>
                </div>
                {activeSection.subsections.map((subsection, idx) => {
                  const isCollapsed = collapsedSubsections.has(idx)
                  return (
                    <div key={idx} className={`${t.cardBg} rounded-lg border ${t.border} overflow-hidden transition-all duration-300`}>
                      <button onClick={() => toggleSubsection(idx)} className="w-full p-4 flex items-center justify-between hover:bg-black/5 transition-all duration-300">
                        <div className="flex items-center gap-3 flex-1">
                          <h5 className={`${t.text} text-base font-semibold text-left`}>{subsection.title}</h5>
                          {subsection.images && subsection.images.length > 0 && <span className={`${t.textMuted} text-xs font-mono px-2 py-0.5 rounded-full border ${t.border}`}>{subsection.images.length} {subsection.images.length === 1 ? 'screen' : 'screens'}</span>}
                        </div>
                        <div className="flex items-center gap-2">
                          {isCollapsed && <span className={`${t.textMuted} text-xs italic`}>Click to view</span>}
                          <svg className={`w-5 h-5 ${t.text} transition-all duration-300 ${isCollapsed ? '' : 'rotate-180'} group-hover:scale-110`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      {!isCollapsed && (
                        <div className="p-4 pt-0 space-y-4 opacity-0 animate-[fadeIn_0.3s_ease-in-out_forwards]">
                          {subsection.description && <p className={`${t.textMuted} text-sm leading-relaxed`}>{subsection.description}</p>}
                          {subsection.images && subsection.images.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                              {subsection.images.map((image, imgIdx) => (
                                <div key={imgIdx} className="space-y-3 cursor-pointer group">
                                  <div onClick={() => openLightbox(image.src, image.alt, image.caption, subsection.images?.map((img) => ({ src: img.src, alt: img.alt, caption: img.caption })), imgIdx)} className={`relative w-full aspect-[4/3] ${imageBorderRadius} overflow-hidden border ${t.border} ${imageShadow} ${imageOutline} cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg bg-black/5`}>
                                    <Image src={image.src} alt={image.alt} fill className="object-contain group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, 50vw" />
                                  </div>
                                  {image.caption && <p className={`${t.textMuted} text-sm leading-relaxed`}>{image.caption}</p>}
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

      {lightboxImage && <ImageLightbox isOpen={!!lightboxImage} onClose={closeLightbox} imageSrc={lightboxImage.src} imageAlt={lightboxImage.alt} imageCaption={lightboxImage.caption} images={lightboxImages.length > 0 ? lightboxImages : undefined} currentIndex={lightboxCurrentIndex} onNavigate={lightboxImages.length > 0 ? handleLightboxNavigate : undefined} />}
    </div>
  )
}
