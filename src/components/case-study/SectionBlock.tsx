'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { CaseStudySection } from '@/types/caseStudy'
import WorkflowPrototype from './WorkflowPrototype'
import ImageLightbox from './ImageLightbox'
import BeforeAfterComparison from './BeforeAfterComparison'
import AhaMoment from './AhaMoment'
import ChallengeBreakdown from './ChallengeBreakdown'
import TeamOnboardingProcess from './TeamOnboardingProcess'
import EntryPointTransformation from './EntryPointTransformation'
import FourStepFlowBreakdown from './FourStepFlowBreakdown'

interface SectionBlockProps {
  section: CaseStudySection
  isLightBackground?: boolean
  caseStudySlug?: string
}

// Helper to parse body text and extract Aha moments
function parseBodyWithAhaMoments(body: string, isLightBackground: boolean) {
  const ahaPattern = /Aha moment — ([^:\n]+):\s*([\s\S]*?)(?=\n\nAha moment|$)/g
  const parts: Array<{ type: 'text' | 'aha'; content: string; title?: string }> = []
  let lastIndex = 0
  let match

  while ((match = ahaPattern.exec(body)) !== null) {
    // Add text before the aha moment
    if (match.index > lastIndex) {
      const textBefore = body.substring(lastIndex, match.index).trim()
      if (textBefore) {
        parts.push({
          type: 'text',
          content: textBefore,
        })
      }
    }

    // Add the aha moment - capture content until next paragraph break or end
    const ahaContent = match[2].trim()
    // Find where the aha content ends (next paragraph or end of string)
    const nextAhaIndex = body.indexOf('\n\nAha moment', match.index + match[0].length)
    const contentEnd = nextAhaIndex > 0 ? nextAhaIndex : body.length
    const fullAhaContent = body.substring(match.index + match[0].indexOf(':') + 1, contentEnd).trim()

    parts.push({
      type: 'aha',
      title: match[1].trim(),
      content: fullAhaContent,
    })

    lastIndex = contentEnd
  }

  // Add remaining text
  if (lastIndex < body.length) {
    const remainingText = body.substring(lastIndex).trim()
    if (remainingText) {
      parts.push({
        type: 'text',
        content: remainingText,
      })
    }
  }

  // If no aha moments found, return original text
  if (parts.length === 0 || parts.every(p => p.type === 'text' && !p.content)) {
    return [{ type: 'text' as const, content: body }]
  }

  return parts
}

// Helper to create image groups based on content
function createImageGroups(images: CaseStudySection['images']) {
  if (!images || images.length <= 6) {
    return images ? [images.map((img, i) => ({ ...img, originalIndex: i }))] : []
  }

  const groups: Array<Array<{ src: string; alt: string; caption?: string; fullWidth?: boolean; originalIndex: number }>> = []
  let currentGroup: Array<{ src: string; alt: string; caption?: string; fullWidth?: boolean; originalIndex: number }> = []

  images.forEach((img) => {
    const caption = img.caption?.toLowerCase() || ''
    const imageWithIndex = { ...img, originalIndex: images.indexOf(img) }

    // Smart grouping based on content
    const isStep = caption.includes('step')
    const isBinaryClassification = caption.includes('binary classification') || caption.includes('classification metrics')
    const isSave = caption.includes('save') || caption.includes('select folder')
    const isWorkflowInit = caption.includes('landing page') || caption.includes('empty state')
    const isCompletion = caption.includes('compare models') || caption.includes('model details')

    // Start new group at logical breaks
    if (currentGroup.length > 0) {
      const prevCaption = currentGroup[currentGroup.length - 1].caption?.toLowerCase() || ''
      const prevIsStep = prevCaption.includes('step')
      const prevIsBinary = prevCaption.includes('binary classification') || prevCaption.includes('classification metrics')
      const prevIsSave = prevCaption.includes('save')
      const prevIsInit = prevCaption.includes('landing page') || prevCaption.includes('empty state')

      // Break groups at transitions
      if (
        (isStep && !prevIsStep && currentGroup.length > 1) ||
        (isBinaryClassification && !prevIsBinary && currentGroup.length > 1) ||
        (isSave && !prevIsSave && currentGroup.length > 1) ||
        (isCompletion && !prevIsInit && currentGroup.length > 1) ||
        currentGroup.length >= 4
      ) {
        groups.push([...currentGroup])
        currentGroup = []
      }
    }

    currentGroup.push(imageWithIndex)
  })

  if (currentGroup.length > 0) {
    groups.push(currentGroup)
  }

  return groups.length > 0 ? groups : [images.map((img, i) => ({ ...img, originalIndex: i }))]
}

export default function SectionBlock({ section, isLightBackground = false, caseStudySlug }: SectionBlockProps) {
  const [expandedGroups, setExpandedGroups] = useState<Set<number>>(new Set([0]))
  const [expandedDetailImages, setExpandedDetailImages] = useState(false)
  const [expandedSubsections, setExpandedSubsections] = useState<Set<number>>(new Set()) // All subsections collapsed by default
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; caption?: string } | null>(null)
  const [showAllLegacyImages, setShowAllLegacyImages] = useState(false) // For Section 01 collapsible gallery
  const [showAllScheduleDialogImages, setShowAllScheduleDialogImages] = useState(false) // For Schedule Dialog collapsible gallery

  // Ensure section is visible after mount (fallback for animation edge cases)
  // Must be called before early return to follow Rules of Hooks
  useEffect(() => {
    if (!section?.id || typeof window === 'undefined') return

    // Wait for DOM to be ready
    const checkAndFixVisibility = () => {
      const element = document.getElementById(section.id!)
      if (!element) return

      // Check if element is hidden (opacity 0 or visibility hidden)
      const computedStyle = window.getComputedStyle(element)
      const isHidden = computedStyle.opacity === '0' || computedStyle.visibility === 'hidden'

      // Also check parent MotionSection
      const parentSection = element.closest('section')
      if (parentSection) {
        const parentStyle = window.getComputedStyle(parentSection)
        if (parentStyle.opacity === '0' || parentStyle.visibility === 'hidden') {
          parentSection.style.opacity = '1'
          parentSection.style.visibility = 'visible'
        }
      }

      if (isHidden) {
        element.style.opacity = '1'
        element.style.visibility = 'visible'
      }
    }

    // Check immediately and after delays to catch animation timing issues
    requestAnimationFrame(() => {
      checkAndFixVisibility()
      setTimeout(checkAndFixVisibility, 100)
      setTimeout(checkAndFixVisibility, 500)
      setTimeout(checkAndFixVisibility, 1000)
    })
  }, [section?.id])

  // Safety check: ensure section exists (after hooks)
  if (!section) {
    return null
  }

  const openLightbox = (src: string, alt: string, caption?: string) => {
    setLightboxImage({ src, alt, caption })
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  // Use dark colors for light backgrounds, light colors for dark backgrounds
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const dividerColor = isLightBackground ? 'bg-black/10' : 'bg-white/10'

  // Shadow only on light backgrounds
  const imageShadow = isLightBackground
    ? 'shadow-[0_4px_12px_rgba(0,0,0,0.15)]'
    : ''
  const imageBorderRadius = 'rounded-[10px]'
  // Add outline to prevent cut-off feeling with rounded corners
  const imageOutline = isLightBackground
    ? 'outline outline-1 outline-black/5 outline-offset-[-1px]'
    : 'outline outline-1 outline-white/5 outline-offset-[-1px]'

  const images = section.images || []
  const imageGroups = images.length > 6 ? createImageGroups(images) : null

  const toggleGroup = (groupIndex: number) => {
    const newExpanded = new Set(expandedGroups)
    if (newExpanded.has(groupIndex)) {
      newExpanded.delete(groupIndex)
    } else {
      newExpanded.add(groupIndex)
    }
    setExpandedGroups(newExpanded)
  }

  const toggleSubsection = (subIndex: number) => {
    const newExpanded = new Set(expandedSubsections)
    if (newExpanded.has(subIndex)) {
      newExpanded.delete(subIndex)
    } else {
      newExpanded.add(subIndex)
    }
    setExpandedSubsections(newExpanded)
  }

  // Separate design detail images (for Section 05)
  const designDetailImages = images.filter(img =>
    img.caption?.toLowerCase().includes('ui structure') ||
    img.caption?.toLowerCase().includes('ui guide') ||
    img.caption?.toLowerCase().includes('grid') ||
    img.caption?.toLowerCase().includes('styling guide')
  )
  const workflowImages = images.filter(img => !designDetailImages.includes(img))

  // Determine if body should render at top or bottom
  const hasVisualContent = (section.subsections && Array.isArray(section.subsections) && section.subsections.length > 0) ||
    (section.workflowPrototype && Array.isArray(section.workflowPrototype) && section.workflowPrototype.length > 0) ||
    images.length > 0
  const renderBodyAtTop = !hasVisualContent

  return (
    <div
      id={section.id}
      className="space-y-16 scroll-mt-24"
    >
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-baseline gap-4">
          <span className={`${isLightBackground ? 'bg-black/5' : 'bg-white/10'} ${textColor} text-base md:text-lg font-mono uppercase tracking-wider font-bold px-3 py-1.5 rounded border ${borderColor}`}>
            {section.index}
          </span>
          <div className={`h-px flex-1 ${dividerColor}`}></div>
        </div>
        <div className="flex items-start gap-3">
          <h2 className={`${textColor} text-3xl md:text-4xl font-serif leading-tight flex-1`}>
            {section.title}
            {section.id === 'version-3' && (
              <span className="block mt-2 text-xl md:text-2xl font-normal italic" style={{ color: 'var(--accent-teal)' }}>
                The solution that balanced everything
              </span>
            )}
          </h2>
          {/* Phase Indicator */}
          {(() => {
            const phaseMap: Record<string, { phase: string; number: number }> = {
              'section-02': { phase: 'Research & Discovery', number: 1 },
              'version-iteration': { phase: 'Architecture & Design', number: 2 },
              'section-06': { phase: 'Team Alignment', number: 4 },
              'section-07': { phase: 'Shipping & Impact', number: 5 },
            }
            const phase = phaseMap[section.id]
            if (phase) {
              return (
                <div className={`${isLightBackground ? 'bg-black/5' : 'bg-white/10'} rounded-lg px-3 py-1.5 border ${borderColor} flex-shrink-0`}>
                  <div className={`${mutedColor} text-xs font-mono uppercase tracking-wider mb-0.5`}>Phase {phase.number}</div>
                  <div className={`${textColor} text-xs font-semibold`}>{phase.phase}</div>
                </div>
              )
            }
            return null
          })()}
        </div>
      </div>

      {/* Body Text - Render at top only if no visual content */}
      {renderBodyAtTop && section.body && (
        <div className={`${bgColor} rounded-lg p-6 md:p-8 border ${borderColor}`}>
          <div className={`${mutedColor} leading-relaxed text-base md:text-lg space-y-4`}>
            {/* Only parse Aha moments for ReportCaster */}
            {caseStudySlug === 'reportcaster' ? (
              parseBodyWithAhaMoments(section.body, isLightBackground).map((part, index) => {
                if (part.type === 'aha') {
                  return (
                    <AhaMoment key={`aha-${index}`} isLightBackground={isLightBackground}>
                      <strong>{part.title}:</strong> {part.content}
                    </AhaMoment>
                  )
                }
                return (
                  <p key={`text-${index}`} className="whitespace-pre-line">
                    {part.content}
                  </p>
                )
              })
            ) : (
              <p className="whitespace-pre-line">
                {section.body}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Challenge Breakdown integrated into Section 01 - ReportCaster only */}
      {section.id === 'section-01' && caseStudySlug === 'reportcaster' && (
        <div className="pt-8">
          <ChallengeBreakdown isLightBackground={isLightBackground} />
        </div>
      )}

      {/* Team Onboarding Process integrated into Section 06 - ReportCaster only */}
      {section.id === 'section-06' && caseStudySlug === 'reportcaster' && (
        <div className="pt-8">
          <TeamOnboardingProcess isLightBackground={isLightBackground} />
        </div>
      )}

      {/* Subsections */}
      {section.subsections && Array.isArray(section.subsections) && section.subsections.length > 0 && (
        <div className="space-y-8">
          {section.subsections.map((subsection, subIndex) => {
            const isExpanded = expandedSubsections.has(subIndex)
            const isFirstSubsection = subIndex === 0

            // Special handling for certain subsections - always open
            const isAlwaysOpen = subsection.title === 'Early Ideation: Hand-Drawn Wireframes' ||
              subsection.title === 'Schedule Dialog'

            // Subsections that use 2x2 grid layout
            const use2x2Grid = subsection.title === 'Distribution List' ||
              subsection.title === 'Access List'

            return (
              <div key={`subsection-${section.id}-${subIndex}`} className="space-y-4">
                {isAlwaysOpen ? (
                  // Always open, no collapse button
                  <>
                    <div className="space-y-2">
                      <h3 className={`${textColor} text-lg md:text-xl font-serif`}>{subsection.title}</h3>
                      {subsection.description && (
                        <p className={`${mutedColor} text-sm leading-relaxed`}>
                          {subsection.description}
                        </p>
                      )}
                    </div>

                    {/* Subsection Images */}
                    {subsection.images && Array.isArray(subsection.images) && subsection.images.length > 0 && (
                      <div className="space-y-8">
                        {/* For Workflow Planning: 2x2 grid for regular images */}
                        {subsection.title === 'Workflow Planning & Architecture' && (
                          <>
                            {/* Regular images in 2x2 grid */}
                            {subsection.images.filter(img => !img.fullWidth).length > 0 && (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {subsection.images
                                  .filter(img => !img.fullWidth)
                                  .map((image, imgIndex) => (
                                    <div key={`sub-img-${subIndex}-${imgIndex}`} className="space-y-2 p-2">
                                      <div
                                        className={`relative w-full ${imageBorderRadius} overflow-hidden border ${borderColor} ${imageShadow} ${imageOutline} cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg`}
                                        onClick={() => openLightbox(image.src, image.alt, image.caption)}
                                      >
                                        <Image
                                          src={image.src}
                                          alt={image.alt}
                                          width={1200}
                                          height={800}
                                          className="w-full h-auto object-contain"
                                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                          loading="lazy"
                                        />
                                      </div>
                                      {image.caption && (
                                        <p className={`${mutedColor} text-sm leading-relaxed mt-3`}>
                                          {image.caption}
                                        </p>
                                      )}
                                    </div>
                                  ))}
                              </div>
                            )}
                            {/* Full width images below the grid */}
                            {subsection.images.filter(img => img.fullWidth).map((image, imgIndex) => (
                              <div key={`sub-img-full-${subIndex}-${imgIndex}`} className="space-y-2 p-2">
                                <div
                                  className={`relative w-full ${imageBorderRadius} overflow-hidden border ${borderColor} ${imageShadow} ${imageOutline} cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg`}
                                  onClick={() => openLightbox(image.src, image.alt, image.caption)}
                                >
                                  <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto object-contain"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                                    loading="lazy"
                                  />
                                </div>
                                {image.caption && (
                                  <p className={`${mutedColor} text-sm text-center mt-3 px-6`}>
                                    {image.caption}
                                  </p>
                                )}
                              </div>
                            ))}
                          </>
                        )}
                        {/* For Schedule Dialog: Compact gallery with expand option */}
                        {subsection.title === 'Schedule Dialog' && subsection.images && Array.isArray(subsection.images) && subsection.images.length > 0 && (
                          <div className="space-y-6">
                            {/* Header with expand button */}
                            <div className="flex items-center justify-between">
                              <div>
                                <p className={`${mutedColor} text-sm`}>
                                  {showAllScheduleDialogImages ? `All ${subsection.images.length} schedule dialog screens` : `Preview: ${Math.min(6, subsection.images.length)} of ${subsection.images.length} screens`}
                                </p>
                              </div>
                              {subsection.images.length > 6 && (
                                <button
                                  onClick={() => setShowAllScheduleDialogImages(!showAllScheduleDialogImages)}
                                  className={`px-4 py-2 rounded-lg border ${borderColor} ${bgColor} ${textColor} text-sm font-medium hover:opacity-90 transition-all duration-300 flex items-center gap-2`}
                                >
                                  <span>{showAllScheduleDialogImages ? 'Show Less' : `Show All ${subsection.images.length}`}</span>
                                  <svg
                                    className={`w-4 h-4 transition-transform duration-300 ${showAllScheduleDialogImages ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </button>
                              )}
                            </div>

                            {/* First image - full width highlight (if it has fullWidth flag) */}
                            {subsection.images[0] && subsection.images[0].fullWidth && (
                              <div className="space-y-2">
                                <div
                                  className={`relative w-full ${imageBorderRadius} overflow-hidden border ${borderColor} ${imageShadow} ${imageOutline} cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg`}
                                  onClick={() => openLightbox(subsection.images![0].src, subsection.images![0].alt, subsection.images![0].caption)}
                                >
                                  <Image
                                    src={subsection.images[0].src}
                                    alt={subsection.images[0].alt}
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto object-contain"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                                    loading="lazy"
                                  />
                                </div>
                                {subsection.images[0].caption && (
                                  <p className={`${mutedColor} text-sm text-center mt-3 px-6`}>
                                    {subsection.images[0].caption}
                                  </p>
                                )}
                              </div>
                            )}

                            {/* Remaining images in compact 3-column grid */}
                            {subsection.images && subsection.images.length > (subsection.images[0]?.fullWidth ? 1 : 0) && (
                              <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 transition-all duration-500`}>
                                {(showAllScheduleDialogImages
                                  ? subsection.images.slice(subsection.images[0]?.fullWidth ? 1 : 0)
                                  : subsection.images.slice(subsection.images[0]?.fullWidth ? 1 : 0).slice(0, 6)
                                ).map((image, imgIndex) => {
                                  const startIndex = subsection.images?.[0]?.fullWidth ? 1 : 0
                                  return (
                                    <div key={`sub-img-${subIndex}-${imgIndex + startIndex}`} className="group space-y-2">
                                      <div
                                        className={`relative w-full aspect-[4/3] ${imageBorderRadius} overflow-hidden border ${borderColor} ${imageShadow} ${imageOutline} cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.03] hover:shadow-xl bg-black/5`}
                                        onClick={() => openLightbox(image.src, image.alt, image.caption)}
                                      >
                                        <Image
                                          src={image.src}
                                          alt={image.alt}
                                          fill
                                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 300px"
                                          loading="lazy"
                                        />
                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                          <svg
                                            className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                          </svg>
                                        </div>
                                      </div>
                                      {image.caption && (
                                        <p className={`${mutedColor} text-xs leading-relaxed line-clamp-2`}>
                                          {image.caption.split(':')[0]}
                                        </p>
                                      )}
                                    </div>
                                  )
                                })}
                              </div>
                            )}

                            {/* Expand hint */}
                            {!showAllScheduleDialogImages && subsection.images.length > 7 && (
                              <div className="text-center pt-2">
                                <p className={`${mutedColor} text-sm`}>
                                  Click &quot;Show All {subsection.images.length}&quot; to view all schedule dialog screens
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                        {/* For Distribution List and Access List: 2x2 grid */}
                        {use2x2Grid && subsection.images && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {subsection.images.map((image, imgIndex) => (
                              <div key={`sub-img-${subIndex}-${imgIndex}`} className="space-y-2 p-2">
                                <div
                                  className={`relative w-full ${imageBorderRadius} overflow-hidden border ${borderColor} ${imageShadow} ${imageOutline} cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg`}
                                  onClick={() => openLightbox(image.src, image.alt, image.caption)}
                                >
                                  <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto object-contain"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                    loading="lazy"
                                  />
                                </div>
                                {image.caption && (
                                  <p className={`${mutedColor} text-sm leading-relaxed mt-3`}>
                                    {image.caption}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                        {/* For other always-open subsections: default grid */}
                        {subsection.title !== 'Workflow Planning & Architecture' && subsection.title !== 'Schedule Dialog' && !use2x2Grid && subsection.images && subsection.images.length > 0 && (
                          <div className={`grid grid-cols-1 ${subsection.images.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-1'} gap-6`}>
                            {subsection.images.map((image, imgIndex) =>
                              image.fullWidth ? (
                                <div key={`sub-img-full-${subIndex}-${imgIndex}`} className="col-span-full space-y-2 p-2">
                                  <div
                                    className={`relative w-full ${imageBorderRadius} overflow-hidden border ${borderColor} ${imageShadow} ${imageOutline} cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg`}
                                    onClick={() => openLightbox(image.src, image.alt, image.caption)}
                                  >
                                    <Image
                                      src={image.src}
                                      alt={image.alt}
                                      width={1200}
                                      height={800}
                                      className="w-full h-auto object-contain"
                                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                  </div>
                                  {image.caption && (
                                    <p className={`${mutedColor} text-sm text-center mt-3 px-6`}>
                                      {image.caption}
                                    </p>
                                  )}
                                </div>
                              ) : (
                                <div key={`sub-img-${subIndex}-${imgIndex}`} className="space-y-2 p-2">
                                  <div
                                    className={`relative w-full ${imageBorderRadius} overflow-hidden border ${borderColor} ${imageShadow} ${imageOutline} cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg`}
                                    onClick={() => openLightbox(image.src, image.alt, image.caption)}
                                  >
                                    <Image
                                      src={image.src}
                                      alt={image.alt}
                                      width={1200}
                                      height={800}
                                      className="w-full h-auto object-contain"
                                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                  </div>
                                  {image.caption && (
                                    <p className={`${mutedColor} text-sm leading-relaxed mt-3`}>
                                      {image.caption}
                                    </p>
                                  )}
                                </div>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  // Regular collapsible subsection
                  <>
                    {/* Collapsible Subsection Header */}
                    <button
                      onClick={() => toggleSubsection(subIndex)}
                      aria-label={`${isExpanded ? 'Collapse' : 'Expand'} subsection: ${subsection.title}`}
                      aria-expanded={isExpanded}
                      className={`w-full text-left ${bgColor} ${imageBorderRadius} border-2 ${isExpanded ? 'border-[var(--accent-teal)]/60' : borderColor} p-6 hover:border-[var(--accent-teal)]/40 hover:shadow-lg transition-all duration-300`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center gap-3">
                            <h3 className={`${textColor} text-lg md:text-xl font-serif`}>{subsection.title}</h3>
                            {subsection.images && subsection.images.length > 0 && (
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2`} style={{
                                backgroundColor: isExpanded ? 'var(--accent-teal)' : 'transparent',
                                color: isExpanded ? 'white' : 'var(--accent-teal)',
                                borderColor: 'var(--accent-teal)'
                              }}>
                                {subsection.images.length} {subsection.images.length === 1 ? 'screen' : 'screens'}
                              </span>
                            )}
                          </div>
                          {subsection.description && (
                            <p className={`${mutedColor} text-sm leading-relaxed`}>
                              {subsection.description}
                            </p>
                          )}
                          {!isExpanded && subsection.images && subsection.images.length > 0 && (
                            <p className={`text-xs font-medium`} style={{ color: 'var(--accent-teal)' }}>
                              Click to view {subsection.images.length} {subsection.images.length === 1 ? 'screen' : 'screens'}
                            </p>
                          )}
                        </div>
                        <div className="flex flex-col items-center gap-2 flex-shrink-0">
                          <span
                            className={`text-2xl font-mono transition-all duration-300`}
                            style={{
                              color: isExpanded ? 'var(--accent-teal)' : (isLightBackground ? '#666666' : 'rgba(255,255,255,0.7)')
                            }}
                          >
                            {isExpanded ? '−' : '+'}
                          </span>
                        </div>
                      </div>
                    </button>

                    {/* Subsection Content (collapsible) */}
                    {isExpanded && (
                      <div className="space-y-8 pl-2">
                        {subsection.quote && (
                          <div className={`${bgColor} rounded-lg p-6 md:p-8 border-l-4 border-[var(--accent-teal)]`}>
                            <p className={`${textColor} italic text-lg md:text-xl leading-relaxed`}>
                              &quot;{subsection.quote.text}&quot;
                            </p>
                            {subsection.quote.attribution && (
                              <p className={`${mutedColor} text-sm mt-4`}>— {subsection.quote.attribution}</p>
                            )}
                          </div>
                        )}

                        {/* Entry Point Transformation for ML Functions Section 06 */}
                        {section.id === 'section-06' && subsection.title === 'Multiple ways to launch ML Functions from the HUB' && caseStudySlug === 'ml-functions' && (
                          <div className="pt-4">
                            <EntryPointTransformation isLightBackground={isLightBackground} />
                          </div>
                        )}

                        {/* Four Step Flow Breakdown for ML Functions Section 06 - The main step workflow UI */}
                        {section.id === 'section-06' && subsection.title === 'The main step workflow UI' && caseStudySlug === 'ml-functions' && (
                          <div className="pt-4 pb-4">
                            <FourStepFlowBreakdown isLightBackground={isLightBackground} />
                          </div>
                        )}

                        {/* Subsection Workflow Prototype */}
                        {subsection.workflowPrototype && (
                          <WorkflowPrototype
                            title={subsection.workflowPrototype.title}
                            description={subsection.workflowPrototype.description}
                            steps={subsection.workflowPrototype.steps}
                            workflowType={subsection.workflowPrototype.workflowType}
                            isLightBackground={isLightBackground}
                          />
                        )}

                        {/* Subsection Images */}
                        {subsection.images && subsection.images.length > 0 && (
                          <div className={`grid grid-cols-1 ${
                            // Special case: 4-step workflow UI should be 2x2 grid
                            section.id === 'section-06' && subsection.title === 'The main step workflow UI' && caseStudySlug === 'ml-functions' && subsection.images.length === 4
                              ? 'md:grid-cols-2'
                              // Special case: Evolution of IQ Plugin should be 2x2 grid
                              : subsection.title === 'The Evolution of the IQ Plugin' && subsection.images.length === 4
                                ? 'md:grid-cols-2'
                                // Special case: Section 05 subsections (IQ Plugin workflows) should be 2-column grid, or 2x2 for 4 images
                                : section.id === 'section-05' && caseStudySlug === 'iq-plugin'
                                  ? subsection.images.length === 4
                                    ? 'md:grid-cols-2'
                                    : 'md:grid-cols-2'
                                  : subsection.images.length === 1
                                    ? 'md:grid-cols-1'
                                    : subsection.images.length === 2
                                      ? 'md:grid-cols-2'
                                      : 'md:grid-cols-2 lg:grid-cols-3'
                            } gap-6`}>
                            {subsection.images.map((image, imgIndex) =>
                              image.fullWidth ? (
                                <div key={`sub-img-full-${subIndex}-${imgIndex}`} className="col-span-full space-y-2 p-2">
                                  <div
                                    className={`relative w-full ${imageBorderRadius} overflow-hidden border ${borderColor} ${imageShadow} ${imageOutline} cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg`}
                                    onClick={() => openLightbox(image.src, image.alt, image.caption)}
                                  >
                                    <Image
                                      src={image.src}
                                      alt={image.alt}
                                      width={1200}
                                      height={800}
                                      className="w-full h-auto object-contain"
                                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                  </div>
                                  {image.caption && (
                                    <p className={`${mutedColor} text-sm text-center mt-3 px-6`}>
                                      {image.caption}
                                    </p>
                                  )}
                                </div>
                              ) : (
                                <div key={`sub-img-${subIndex}-${imgIndex}`} className="space-y-2 p-2">
                                  <div
                                    className={`relative w-full ${imageBorderRadius} overflow-hidden border ${borderColor} ${imageShadow} ${imageOutline} cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg`}
                                    onClick={() => openLightbox(image.src, image.alt, image.caption)}
                                  >
                                    <Image
                                      src={image.src}
                                      alt={image.alt}
                                      width={1200}
                                      height={800}
                                      className="w-full h-auto object-contain"
                                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                  </div>
                                  {image.caption && (
                                    <p className={`${mutedColor} text-sm leading-relaxed mt-3`}>
                                      {image.caption}
                                    </p>
                                  )}
                                </div>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* Workflow Prototype(s) */}
      {section.workflowPrototype && Array.isArray(section.workflowPrototype) && section.workflowPrototype.length > 0 && (
        <div className="space-y-16">
          {section.workflowPrototype.map((prototype, idx) => {
            if (!prototype || !prototype.steps || !Array.isArray(prototype.steps) || prototype.steps.length === 0) {
              return null
            }

            const validSteps = prototype.steps.filter(step => step.src && step.alt && step.caption)

            if (validSteps.length === 0) {
              return null
            }

            return (
              <div key={`workflow-wrapper-${section.id}-${idx}`}>
                <WorkflowPrototype
                  title={prototype.title || 'Workflow'}
                  description={prototype.description}
                  steps={validSteps}
                  workflowType={prototype.workflowType}
                  isLightBackground={isLightBackground}
                />
              </div>
            )
          })}
        </div>
      )}

      {/* Before/After Comparison */}
      {section.beforeAfter && (
        <div className="space-y-12">
          <BeforeAfterComparison
            beforeImage={section.beforeAfter.before}
            afterImage={section.beforeAfter.after}
            beforeLabel={section.beforeAfter.beforeLabel}
            afterLabel={section.beforeAfter.afterLabel}
            isLightBackground={isLightBackground}
          />
        </div>
      )}

      {/* Images */}
      {images.length > 0 && (
        <div className="space-y-12">
          {/* Special handling for Section 1: Collapsible gallery for 8 legacy images - ReportCaster only */}
          {section.id === 'section-01' && images.length === 8 && caseStudySlug === 'reportcaster' ? (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className={`${textColor} text-lg font-serif mb-1`}>Legacy Interface Examples</h3>
                  <p className={`${mutedColor} text-sm`}>
                    {showAllLegacyImages ? 'All 8 legacy interfaces' : 'Preview of fragmented legacy system'}
                  </p>
                </div>
                <button
                  onClick={() => setShowAllLegacyImages(!showAllLegacyImages)}
                  className={`px-4 py-2 rounded-lg border ${borderColor} ${bgColor} ${textColor} text-sm font-medium hover:opacity-90 transition-all duration-300 flex items-center gap-2`}
                >
                  <span>{showAllLegacyImages ? 'Show Less' : `Show All ${images.length}`}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${showAllLegacyImages ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Image Grid */}
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-500 ${showAllLegacyImages ? 'opacity-100' : 'opacity-100'
                }`}>
                {(showAllLegacyImages ? images : images.slice(0, 4)).map((image, index) => (
                  <div
                    key={`legacy-img-${index}`}
                    className="group space-y-2"
                  >
                    <div
                      className={`relative w-full aspect-[4/3] ${imageBorderRadius} overflow-hidden border ${borderColor} ${imageShadow} ${imageOutline} cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.03] hover:shadow-xl bg-black/5`}
                      onClick={() => openLightbox(image.src, image.alt, image.caption)}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
                        loading="lazy"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                    {image.caption && (
                      <p className={`${mutedColor} text-xs leading-relaxed line-clamp-2`}>
                        {image.caption.split(':')[0]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Expand hint */}
              {!showAllLegacyImages && (
                <div className="text-center pt-4">
                  <p className={`${mutedColor} text-sm`}>
                    Click &quot;Show All 8&quot; to view all legacy interface examples
                  </p>
                </div>
              )}
            </div>
          ) : images.length === 1 ? (
            section.images![0].fullWidth ? (
              <div className="w-screen relative left-[calc(50%-50vw)]">
                <div
                  className="relative w-full cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg"
                  onClick={() => openLightbox(section.images![0].src, section.images![0].alt, section.images![0].caption)}
                >
                  <Image
                    src={section.images![0].src}
                    alt={section.images![0].alt}
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-contain"
                    sizes="100vw"
                  />
                </div>
                {section.images![0].caption && (
                  <p className={`${mutedColor} text-sm text-center mt-4 px-6`}>
                    {section.images![0].caption}
                  </p>
                )}
              </div>
            ) : (
              <div className="space-y-3 p-2">
                <div
                  className={`relative w-full ${imageBorderRadius} overflow-hidden border ${borderColor} ${imageShadow} ${imageOutline} cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg`}
                  onClick={() => openLightbox(section.images![0].src, section.images![0].alt, section.images![0].caption)}
                >
                  <Image
                    src={section.images![0].src}
                    alt={section.images![0].alt}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  />
                </div>
                {section.images![0].caption && (
                  <p className={`${mutedColor} text-sm`}>
                    {section.images![0].caption}
                  </p>
                )}
              </div>
            )
          ) : section.id === 'recurrences-redesign' && images.length > 1 ? (
            // Special layout for Recurrences section: full-width first image, then 2x2 grid
            <div className="space-y-8">
              {/* Full-width Weekly image */}
              {images.filter(img => img.fullWidth).map((image, index) => (
                <div key={`img-full-${index}`} className="space-y-2">
                  <div
                    className={`relative w-full ${imageBorderRadius} overflow-hidden border ${borderColor} ${imageShadow} ${imageOutline} cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg`}
                    onClick={() => openLightbox(image.src, image.alt, image.caption)}
                  >
                                        <Image
                                          src={image.src}
                                          alt={image.alt}
                                          width={1200}
                                          height={800}
                                          className="w-full h-auto object-contain"
                                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                                          loading="lazy"
                                        />
                  </div>
                  {image.caption && (
                    <p className={`${mutedColor} text-sm text-center mt-3 px-6`}>
                      {image.caption}
                    </p>
                  )}
                </div>
              ))}
              {/* 2x2 grid for remaining images */}
              {images.filter(img => !img.fullWidth).length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {images
                    .filter(img => !img.fullWidth)
                    .map((image, index) => (
                      <div key={`img-grid-${index}`} className="space-y-2">
                        <div
                          className={`relative w-full ${imageBorderRadius} overflow-hidden border ${borderColor} ${imageShadow} ${imageOutline} cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg`}
                          onClick={() => openLightbox(image.src, image.alt, image.caption)}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={1200}
                            height={800}
                            className="w-full h-auto object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                          />
                        </div>
                        {image.caption && (
                          <p className={`${mutedColor} text-sm leading-relaxed mt-3`}>
                            {image.caption}
                          </p>
                        )}
                      </div>
                    ))}
                </div>
              )}
            </div>
          ) : imageGroups && imageGroups.length > 1 ? (
            <div className="space-y-6">
              {imageGroups.map((group, groupIndex) => {
                const isExpanded = expandedGroups.has(groupIndex)
                const isFirstGroup = groupIndex === 0

                return (
                  <div key={`group-${groupIndex}`} className="space-y-4">
                    {!isFirstGroup && (
                      <button
                        onClick={() => toggleGroup(groupIndex)}
                        className={`w-full flex items-center justify-between p-4 ${bgColor} ${imageBorderRadius} border ${borderColor} hover:opacity-90 transition-all`}
                      >
                        <span className={`${textColor} text-sm font-medium`}>
                          {group[0].caption?.split(':')[0] || `View ${group.length} images`}
                        </span>
                        <span className={`${mutedColor} text-sm`}>
                          {isExpanded ? '−' : '+'} {group.length} {group.length === 1 ? 'image' : 'images'}
                        </span>
                      </button>
                    )}

                    {isExpanded && (
                      <div className={`grid grid-cols-1 ${group.length >= 3 ? 'md:grid-cols-2' : 'md:grid-cols-2'} ${group.length >= 6 ? 'lg:grid-cols-3' : ''} gap-4`}>
                        {group.map((image, imgIndex) => (
                          image.fullWidth ? (
                            <div
                              key={`group-img-${groupIndex}-${imgIndex}`}
                              className="col-span-full w-screen relative left-[calc(50%-50vw)]"
                            >
                              <div
                                className="relative w-full cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg"
                                onClick={() => openLightbox(image.src, image.alt, image.caption)}
                              >
                                <Image
                                  src={image.src}
                                  alt={image.alt}
                                  width={1200}
                                  height={800}
                                  className="w-full h-auto object-contain"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                              </div>
                              {image.caption && (
                                <p className={`${mutedColor} text-sm text-center mt-3 px-6`}>
                                  {image.caption}
                                </p>
                              )}
                            </div>
                          ) : (
                            <div key={`group-img-${groupIndex}-${imgIndex}`} className="space-y-2 p-2">
                              <div
                                className={`relative w-full ${imageBorderRadius} overflow-hidden border ${borderColor} ${imageShadow} ${imageOutline} cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg`}
                                onClick={() => openLightbox(image.src, image.alt, image.caption)}
                              >
                                <Image
                                  src={image.src}
                                  alt={image.alt}
                                  width={1200}
                                  height={800}
                                  className="w-full h-auto object-contain"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                              </div>
                              {image.caption && (
                                <p className={`${mutedColor} text-sm leading-relaxed mt-3`}>
                                  {image.caption}
                                </p>
                              )}
                            </div>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ) : workflowImages.length > 0 && designDetailImages.length > 0 ? (
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider`}>Workflow</span>
                  <div className={`h-px flex-1 ${dividerColor}`}></div>
                </div>
                <div className={`grid grid-cols-1 ${workflowImages.length >= 3 ? 'md:grid-cols-2' : 'md:grid-cols-2'} ${workflowImages.length >= 6 ? 'lg:grid-cols-3' : ''} gap-4`}>
                  {workflowImages.map((image, index) => (
                    image.fullWidth ? (
                      <div
                        key={`workflow-img-${index}`}
                        className="col-span-full w-screen relative left-[calc(50%-50vw)]"
                      >
                        <div
                          className="relative w-full cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg"
                          onClick={() => openLightbox(image.src, image.alt, image.caption)}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={1200}
                            height={800}
                            className="w-full h-auto object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        {image.caption && (
                          <p className={`${mutedColor} text-sm text-center mt-3 px-6`}>
                            {image.caption}
                          </p>
                        )}
                      </div>
                    ) : (
                      <div key={`workflow-img-${index}`} className="space-y-2 p-2">
                        <div
                          className={`relative w-full ${imageBorderRadius} overflow-hidden border ${borderColor} ${imageShadow} ${imageOutline} cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg`}
                          onClick={() => openLightbox(image.src, image.alt, image.caption)}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={1200}
                            height={800}
                            className="w-full h-auto object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        {image.caption && (
                          <p className={`${mutedColor} text-sm leading-relaxed mt-3`}>
                            {image.caption}
                          </p>
                        )}
                      </div>
                    )
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => setExpandedDetailImages(!expandedDetailImages)}
                  className={`w-full flex items-center justify-between p-4 ${bgColor} ${imageBorderRadius} border ${borderColor} hover:opacity-90 transition-all`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider`}>Design Details</span>
                    <span className={`${textColor} text-sm font-medium`}>
                      UI Structure, Component Guides, Grid System
                    </span>
                  </div>
                  <span className={`${mutedColor} text-sm`}>
                    {expandedDetailImages ? '−' : '+'} {designDetailImages.length} {designDetailImages.length === 1 ? 'image' : 'images'}
                  </span>
                </button>

                {expandedDetailImages && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {designDetailImages.map((image, index) => (
                      <div key={`detail-img-${index}`} className="space-y-2 p-2">
                        <div
                          className={`relative w-full ${imageBorderRadius} overflow-hidden border ${borderColor} ${imageShadow} ${imageOutline} cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg`}
                          onClick={() => openLightbox(image.src, image.alt, image.caption)}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={1200}
                            height={800}
                            className="w-full h-auto object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        {image.caption && (
                          <p className={`${mutedColor} text-sm leading-relaxed mt-3`}>
                            {image.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className={`grid grid-cols-1 ${images.length >= 3 ? 'md:grid-cols-2' : 'md:grid-cols-2'} ${images.length >= 6 ? 'lg:grid-cols-3' : ''} gap-4`}>
              {images.map((image, index) =>
                image.fullWidth ? (
                  <div
                    key={`img-${index}`}
                    className="col-span-full w-screen relative left-[calc(50%-50vw)]"
                  >
                    <div
                      className="relative w-full cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg"
                      onClick={() => openLightbox(image.src, image.alt, image.caption)}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1200}
                        height={800}
                        className="w-full h-auto object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    {image.caption && (
                      <p className={`${mutedColor} text-sm text-center mt-3 px-6`}>
                        {image.caption}
                      </p>
                    )}
                  </div>
                ) : (
                  <div key={`img-${index}`} className="space-y-2 p-2">
                    <div
                      className={`relative w-full ${imageBorderRadius} overflow-hidden border ${borderColor} ${imageShadow} ${imageOutline} cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg`}
                      onClick={() => openLightbox(image.src, image.alt, image.caption)}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1200}
                        height={800}
                        className="w-full h-auto object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    {image.caption && (
                      <p className={`${mutedColor} text-sm leading-relaxed mt-3`}>
                        {image.caption}
                      </p>
                    )}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      )}

      {/* Story and Insights - Side by Side Below Visual (only if there's visual content AND revealsPoints) */}
      {!renderBodyAtTop && section.body && section.revealsPoints && Array.isArray(section.revealsPoints) && section.revealsPoints.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className={`${bgColor} rounded-lg p-6 md:p-8 border ${borderColor}`}>
              <div className={`${mutedColor} leading-relaxed text-base md:text-lg space-y-4`}>
                {/* Only parse Aha moments for ReportCaster */}
                {caseStudySlug === 'reportcaster' ? (
                  parseBodyWithAhaMoments(section.body, isLightBackground).map((part, index) => {
                    if (part.type === 'aha') {
                      return (
                        <AhaMoment key={`aha-${index}`} isLightBackground={isLightBackground}>
                          <strong>{part.title}:</strong> {part.content}
                        </AhaMoment>
                      )
                    }
                    return (
                      <p key={`text-${index}`} className="whitespace-pre-line">
                        {part.content}
                      </p>
                    )
                  })
                ) : (
                  <p className="whitespace-pre-line">
                    {section.body}
                  </p>
                )}
              </div>
            </div>

            {section.bullets && Array.isArray(section.bullets) && section.bullets.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className={`${textColor} text-lg font-semibold`}>Key points</h3>
                  <div className={`h-px flex-1 ${dividerColor}`}></div>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {section.bullets.map((bullet, index) => (
                    <div
                      key={`bullet-${index}`}
                      className={`flex gap-3 p-4 rounded-lg ${bgColor} border ${borderColor} hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-300`}
                    >
                      <span className={`text-[var(--accent-teal)] text-base font-mono flex-shrink-0 mt-0.5 font-semibold`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className={`${mutedColor} leading-relaxed text-base`}>{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="lg:col-span-1">
            <div className={`${bgColor} rounded-lg p-6 border-2 ${borderColor} backdrop-blur-sm lg:sticky lg:top-24 shadow-lg`}>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider`}>Insight</span>
                  <div className={`h-px flex-1 ${dividerColor}`}></div>
                </div>
                {section.revealsTitle ? (
                  <h3 className={`${textColor} text-base font-semibold mb-4`}>
                    {section.revealsTitle}
                  </h3>
                ) : (
                  <h3 className={`${textColor} text-base font-semibold mb-4`}>
                    What this reveals
                  </h3>
                )}
                <ul className="space-y-4">
                  {section.revealsPoints.map((point, index) => (
                    <li key={`reveal-${index}`} className={`${mutedColor} text-sm md:text-base leading-relaxed flex items-start gap-2`}>
                      <span className={`${textColor} text-[var(--accent-teal)] font-semibold flex-shrink-0 mt-0.5`}>•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Simple Body Text - Render at bottom if there's visual content but NO revealsPoints */}
      {!renderBodyAtTop && section.body && (!section.revealsPoints || !Array.isArray(section.revealsPoints) || section.revealsPoints.length === 0) && (
        <div className={`${bgColor} rounded-lg p-6 md:p-8 border ${borderColor}`}>
          <div className={`${mutedColor} leading-relaxed text-base md:text-lg space-y-4`}>
            {/* Only parse Aha moments for ReportCaster */}
            {caseStudySlug === 'reportcaster' ? (
              parseBodyWithAhaMoments(section.body, isLightBackground).map((part, index) => {
                if (part.type === 'aha') {
                  return (
                    <AhaMoment key={`aha-${index}`} isLightBackground={isLightBackground}>
                      <strong>{part.title}:</strong> {part.content}
                    </AhaMoment>
                  )
                }
                return (
                  <p key={`text-${index}`} className="whitespace-pre-line">
                    {part.content}
                  </p>
                )
              })
            ) : (
              <p className="whitespace-pre-line">
                {section.body}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Image Lightbox */}
      {lightboxImage && (
        <ImageLightbox
          isOpen={!!lightboxImage}
          onClose={closeLightbox}
          imageSrc={lightboxImage.src}
          imageAlt={lightboxImage.alt}
          imageCaption={lightboxImage.caption}
        />
      )}
    </div>
  )
}
