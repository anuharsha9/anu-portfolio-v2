'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BrainGears from '@/assets/brain-gears.svg'
import VideoModal from '@/components/video/VideoModal'
import { GEAR_LABELS } from '@/data/gear-labels-preserved'

// Gear IDs for rotation setup
const GEAR_IDS = Object.keys(GEAR_LABELS)

export function HeroBrain() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const svgRootRef = useRef<SVGSVGElement | null>(null)
  const [hoverText, setHoverText] = useState<string | null>(null)

  // Debug: Log hoverText changes
  useEffect(() => {
    console.log('HeroBrain: hoverText changed to:', hoverText, 'Type:', typeof hoverText, 'Length:', hoverText?.length)
  }, [hoverText])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let cleanup: (() => void) | null = null

    const setup = () => {
      const svgRoot = container.querySelector<SVGSVGElement>('svg')
      if (!svgRoot) {
        setTimeout(setup, 100)
        return
      }
      svgRootRef.current = svgRoot
      let brainGearsGroup = svgRoot.querySelector<SVGGElement>('#brain-gears-copy')
      if (!brainGearsGroup) {
        brainGearsGroup = svgRoot.querySelector<SVGGElement>('#brain-gears')
      }
      if (!brainGearsGroup) {
        console.warn('HeroBrain: brain-gears group not found')
        return
      }

      const setupGearRotations = () => {
        // During fade-in: all gears rotate at the same speed as main gear rotation after fade-in, but 10-15% faster
        const fadeInSpeedMultiplier = 1.125 // 12.5% faster (middle of 10-15%)
        const fadeInDuration = 3 // seconds

        // Main gears
        GEAR_IDS.forEach((gearId) => {
          const gearGroup = brainGearsGroup.querySelector<SVGGElement>(`#${gearId}`)
          if (!gearGroup) return

          const gearBase = gearGroup.querySelector<SVGGElement>('[id^="gear-base"]')
          if (!gearBase) return

          const isClockwise = Math.random() > 0.5
          // After fade-in, main gears rotate at their normal speed (20-40 seconds per full rotation)
          const rotationSpeed = 20 + Math.random() * 20

          // During fade-in: rotate at same speed as after fade-in, but 10-15% faster
          const normalRotationIn3s = (360 / rotationSpeed) * fadeInDuration
          const fadeInRotationAmount = normalRotationIn3s * fadeInSpeedMultiplier * (isClockwise ? 1 : -1)

          // Set variables on the gear group so both base and hover gears inherit
          gearGroup.style.setProperty('--fade-in-rotation', `${fadeInRotationAmount}deg`)
          gearGroup.style.setProperty('--rotation-duration', `${rotationSpeed}s`)
          gearGroup.style.setProperty('--rotation-amount', isClockwise ? '360deg' : '-360deg')
        })

        // Background gears: during fade-in rotate at main gear speed (10-15% faster), then 1/3 speed after fade-in
        const bgGears = Array.from(
          brainGearsGroup.querySelectorAll<SVGGElement>('[id^="bg-gear-"]')
        )

        // Use average main gear speed for fade-in calculation
        const avgMainGearSpeed = 30 // seconds per full rotation

        bgGears.forEach((gear) => {
          const isClockwise = Math.random() > 0.5
          // Background gears rotate at 1/3 speed of main gears after fade-in (3x slower)
          const bgRotationSpeed = avgMainGearSpeed * 3

          // During fade-in: rotate at main gear speed (10-15% faster than main gear normal speed)
          const normalRotationIn3s = (360 / avgMainGearSpeed) * fadeInDuration
          const fadeInRotationAmount = normalRotationIn3s * fadeInSpeedMultiplier * (isClockwise ? 1 : -1)

          gear.style.setProperty('--fade-in-rotation', `${fadeInRotationAmount}deg`)
          gear.style.setProperty('--rotation-duration', `${bgRotationSpeed}s`)
          gear.style.setProperty('--rotation-amount', isClockwise ? '360deg' : '-360deg')
        })
      }

      const setTransformOrigins = () => {
        const allGears = brainGearsGroup.querySelectorAll<SVGGElement>('[id^="gear-base"], [id^="bg-gear-"], [id^="gear-hover"]')
        allGears.forEach((gear) => {
          try {
            const bbox = gear.getBBox()
            if (bbox.width > 0 && bbox.height > 0) {
              gear.style.transformOrigin = 'center'
              gear.style.transformBox = 'fill-box'
            }
          } catch (e) {
            gear.style.transformOrigin = 'center'
            gear.style.transformBox = 'fill-box'
          }
        })
      }

      const setupLineDrawing = () => {
        const linesBackground = brainGearsGroup.querySelector<SVGGElement>('#lines-background')
        if (!linesBackground) return

        const paths = Array.from(linesBackground.querySelectorAll<SVGPathElement>('path'))
        if (paths.length === 0) return

        // Set all paths to opacity 0 immediately - before any delays
        paths.forEach((path) => {
          path.style.opacity = '0'
          path.setAttribute('opacity', '0')
        })

        paths.forEach((path, index) => {
          setTimeout(() => {
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                try {
                  const pathLength = path.getTotalLength()
                  if (pathLength > 0 && !isNaN(pathLength) && isFinite(pathLength)) {
                    path.style.setProperty('--path-length', String(pathLength))
                    path.setAttribute('stroke-dasharray', String(pathLength))
                    path.setAttribute('stroke-dashoffset', String(pathLength))

                    // Ensure opacity is still 0 before animation starts
                    path.style.opacity = '0'
                    path.setAttribute('opacity', '0')

                    // Much slower animation - 8-12 seconds per line
                    const duration = 8000 + Math.random() * 4000
                    // Staggered delay - starts after gear fade-in (3s), then 100ms apart
                    const delay = 3000 + index * 100

                    path.style.animation = `line-draw-path ${duration}ms ease-out ${delay}ms forwards`
                  }
                } catch (e) {
                  // Silent fail
                }
              })
            })
          }, 100) // Small initial delay to ensure SVG is ready
        })
      }

      const setupHoverListeners = () => {
        // Track all hover timeouts to clear them when entering a new gear
        const allHoverTimeouts = new Map<string, NodeJS.Timeout | null>()
        
        GEAR_IDS.forEach((gearId) => {
          const gearGroup = brainGearsGroup.querySelector<SVGGElement>(`#${gearId}`)
          if (!gearGroup) return

          const gearBase = gearGroup.querySelector<SVGGElement>('[id^="gear-base"]')
          const gearHover = gearGroup.querySelector<SVGGElement>('[id^="gear-hover"]')
          if (!gearBase || !gearHover) return

          // Disable pointer events on gear group and base gear (overlay will handle all hover detection)
          gearGroup.style.pointerEvents = 'none'
          gearBase.style.pointerEvents = 'none'
          const basePaths = gearBase.querySelectorAll('*')
          basePaths.forEach((element) => {
            if (element instanceof SVGElement) {
              element.style.pointerEvents = 'none'
            }
          })

          // Create a transparent circle overlay that matches the gear's bounding box
          // This ensures only the gear area (including internal gaps) is hoverable
          try {
            const bbox = gearBase.getBBox()
            if (bbox.width > 0 && bbox.height > 0) {
              // Calculate center and radius from bounding box
              const centerX = bbox.x + bbox.width / 2
              const centerY = bbox.y + bbox.height / 2
              // Use the larger dimension to ensure full coverage of the circular gear
              // Add a tiny buffer (0.5%) to prevent edge flickering
              const radius = (Math.max(bbox.width, bbox.height) / 2) * 1.005

              let overlay = gearGroup.querySelector<SVGCircleElement>('.gear-hover-overlay')
              if (!overlay) {
                overlay = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
                overlay.setAttribute('class', 'gear-hover-overlay')
                overlay.setAttribute('cx', String(centerX))
                overlay.setAttribute('cy', String(centerY))
                overlay.setAttribute('r', String(radius))
                overlay.setAttribute('fill', 'transparent')
                overlay.setAttribute('stroke', 'none')
                overlay.style.pointerEvents = 'auto'
                overlay.style.cursor = 'pointer'
                // Ensure overlay is on top and captures all events
                overlay.style.zIndex = '1000'
                // Insert at the end so it's on top of everything
                gearGroup.appendChild(overlay)
              } else {
                // Update existing overlay
                overlay.setAttribute('cx', String(centerX))
                overlay.setAttribute('cy', String(centerY))
                overlay.setAttribute('r', String(radius))
              }
            }
          } catch (e) {
            console.warn(`HeroBrain: Could not create hover overlay for ${gearId}:`, e)
            // Continue anyway - try fallback event attachment
          }
          
          // Log if gear doesn't have a label
          if (!GEAR_LABELS[gearId]) {
            console.warn(`HeroBrain: No label found for gear ${gearId}`)
          }

          // Add debouncing to prevent rapid toggling on edges
          let hoverTimeout: NodeJS.Timeout | null = null
          let isHovering = false
          allHoverTimeouts.set(gearId, null)

          const handleEnter = () => {
            // Clear ALL pending leave timeouts from all gears immediately
            // This ensures instant text updates when moving between gears
            allHoverTimeouts.forEach((timeout, id) => {
              if (timeout) {
                clearTimeout(timeout)
                allHoverTimeouts.set(id, null)
              }
            })
            
            // Clear this gear's timeout
            if (hoverTimeout) {
              clearTimeout(hoverTimeout)
              hoverTimeout = null
              allHoverTimeouts.set(gearId, null)
            }
            
            // Remove active class from ALL other gears first to prevent multiple active gears
            GEAR_IDS.forEach((otherGearId) => {
              if (otherGearId !== gearId) {
                const otherGearGroup = brainGearsGroup.querySelector<SVGGElement>(`#${otherGearId}`)
                if (otherGearGroup) {
                  otherGearGroup.classList.remove('gear-main--active')
                }
              }
            })
            
            // Always update hover state and text immediately, even if already hovering
            // This ensures text updates instantly when moving between gears
            isHovering = true
            gearGroup.classList.add('gear-main--active')

            // Get the label for this gear and display it in the center
            const label = GEAR_LABELS[gearId] || ''
            if (!label) {
              console.warn(`HeroBrain: No label found for gear ${gearId}. Available keys:`, Object.keys(GEAR_LABELS))
              return
            }
            // Convert multi-line label to single line for display
            const singleLineLabel = label.replace(/\n/g, ' • ')
            // Update text immediately - no debouncing on enter
            if (singleLineLabel.trim()) {
              console.log(`HeroBrain: Setting hover text for ${gearId}:`, singleLineLabel)
              setHoverText(singleLineLabel)
            } else {
              console.warn(`HeroBrain: Empty label for gear ${gearId}`)
            }
          }

          const handleLeave = () => {
            // Clear any pending timeout
            if (hoverTimeout) {
              clearTimeout(hoverTimeout)
              hoverTimeout = null
              allHoverTimeouts.set(gearId, null)
            }
            
            // Mark as not hovering immediately
            isHovering = false
            
            // Small delay to prevent flickering when mouse moves quickly across edges
            hoverTimeout = setTimeout(() => {
              // Always remove active class from this gear when leaving
              gearGroup.classList.remove('gear-main--active')
              
              // Use requestAnimationFrame to ensure DOM has updated before checking
              requestAnimationFrame(() => {
                // Check if any gear is currently active (another gear might have been entered)
                const activeGears = Array.from(brainGearsGroup.querySelectorAll<SVGGElement>('.gear-main--active'))
                const isAnyGearActive = activeGears.length > 0
                
                // Only clear hover text if no other gear is active
                if (!isAnyGearActive) {
                  // Clear hover text immediately - this will show the welcome text instantly
                  setHoverText(null)
                }
              })
              
              hoverTimeout = null
              allHoverTimeouts.set(gearId, null)
            }, 10) // Reduced delay to 10ms for instant placeholder appearance
            
            allHoverTimeouts.set(gearId, hoverTimeout)
          }

          // Attach events ONLY to overlay (it covers the entire gear area including internal gaps)
          const overlay = gearGroup.querySelector<SVGCircleElement>('.gear-hover-overlay')
          if (overlay) {
            overlay.addEventListener('mouseenter', handleEnter)
            overlay.addEventListener('mouseleave', handleLeave)
            overlay.addEventListener('touchstart', handleEnter, { passive: true })
          } else {
            // Fallback: attach to gear group if overlay creation failed
            // Re-enable pointer events for the gear group
            gearGroup.style.pointerEvents = 'auto'
            // Also enable for gear hover element
            if (gearHover) {
              gearHover.style.pointerEvents = 'auto'
            }
            gearGroup.addEventListener('mouseenter', handleEnter)
            gearGroup.addEventListener('mouseleave', handleLeave)
            gearGroup.addEventListener('touchstart', handleEnter, { passive: true })
            console.warn(`HeroBrain: Using fallback hover for ${gearId} (overlay creation failed)`)
          }
        })
      }

      setTransformOrigins()
      setTimeout(setTransformOrigins, 200)
      setupGearRotations()
      setupLineDrawing()
      setupHoverListeners()

      cleanup = () => {
        // Cleanup will be handled by component unmount
      }
    }

    setup()

    return () => {
      if (cleanup) cleanup()
    }
  }, [])

  return (
    <>
      <section
        id="hero-brain"
        className="surface-dark relative flex flex-col items-center justify-center overflow-visible px-6 pt-24 pb-6 border-t border-white/5 min-h-screen"
      >
        {/* SVG Container */}
        <div
          ref={containerRef}
          className="relative w-full max-w-[1200px] overflow-visible"
          style={{ aspectRatio: '1943.4 / 1835' }}
        >
          {/* Brain SVG - gears fade in while rotating */}
          <motion.div
            className="absolute inset-0 pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} // Full opacity for SVG container
            transition={{ duration: 3, ease: 'easeOut' }}
          >
            <BrainGears
              className="h-full w-full"
              style={{ pointerEvents: 'auto', opacity: 1 }} // Full opacity for SVG
              id="brain-gears-svg"
            />
          </motion.div>

          {/* Text content - centered inside brain */}
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10" style={{ transform: 'translateY(40px)' }}>
            {/* Text container - contains welcome text and hover text */}
            <motion.div
              className="mb-16"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'translateY(40px)', // Moved up another 10px
                minHeight: '120px', // Fixed height to prevent layout shift
                width: '100%',
                maxWidth: '600px',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 40 }}
              transition={{
                duration: 4,
                delay: 3.5, // After gears fade in, before subtext
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {hoverText && typeof hoverText === 'string' && hoverText.trim() ? (
                  <motion.div
                    key={`hover-text-${hoverText}`}
                    className="text-xl md:text-2xl text-white leading-relaxed text-center px-6"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      maxWidth: '100%',
                      position: 'relative',
                      zIndex: 20,
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div style={{ position: 'relative', display: 'inline-block', paddingLeft: '1.2em', paddingRight: '1.2em' }}>
                      {/* Opening quote icon */}
                      <svg
                        style={{
                          position: 'absolute',
                          left: '0',
                          top: '-0.2em',
                          width: '1.2em',
                          height: '1.2em',
                          color: 'var(--accent-teal)',
                        }}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.433.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z"/>
                      </svg>
                      {(() => {
                        // Check if text contains ' • ' separator (old format) or is a single thought
                        const parts = hoverText.split(' • ')
                        if (parts.length > 1) {
                          // Old format with label and description
                          const label = parts[0].replace(/::/g, ':')
                          const labelWithColon = label.endsWith(':') ? label : `${label}:`
                          const rest = parts.slice(1).join(' • ')
                          return (
                            <>
                              <span>{labelWithColon}</span>
                              <br />
                              <span>{rest}</span>
                            </>
                          )
                        } else {
                          // New format: single thought, split at natural break point if long
                          const thought = hoverText.trim()
                          // Try to split at comma or semicolon for two lines, otherwise wrap naturally
                          const splitPoint = thought.match(/[,;]/)
                          if (splitPoint && splitPoint.index && splitPoint.index > 20) {
                            const firstPart = thought.substring(0, splitPoint.index + 1)
                            const secondPart = thought.substring(splitPoint.index + 1).trim()
                            return (
                              <>
                                <span>{firstPart}</span>
                                <br />
                                <span>{secondPart}</span>
                              </>
                            )
                          } else {
                            // Display as single line or wrap at middle if very long
                            const midPoint = Math.floor(thought.length / 2)
                            const spaceIndex = thought.lastIndexOf(' ', midPoint)
                            if (spaceIndex > 0 && thought.length > 50) {
                              const firstPart = thought.substring(0, spaceIndex)
                              const secondPart = thought.substring(spaceIndex + 1)
                              return (
                                <>
                                  <span>{firstPart}</span>
                                  <br />
                                  <span>{secondPart}</span>
                                </>
                              )
                            } else {
                              return <span>{thought}</span>
                            }
                          }
                        }
                      })()}
                      {/* Closing quote icon */}
                      <svg
                        style={{
                          position: 'absolute',
                          right: '0',
                          bottom: '-0.2em',
                          width: '1.2em',
                          height: '1.2em',
                          color: 'var(--accent-teal)',
                        }}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.996-2.151c2.433-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.995-3.638 3.995-5.849h-3.983v-10h9.983z"/>
                      </svg>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="welcome-content"
                    className="flex flex-col items-center justify-center"
                    style={{ position: 'relative', zIndex: 10 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* First line - Welcome to my mind */}
                    <motion.p
                      className="font-serif font-medium text-[var(--text-primary-dark)] text-center px-6"
                      style={{
                        fontSize: '3.5em', // 2x larger (was 1.75em)
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      Welcome to my mind
                    </motion.p>

                    {/* Second line - Placeholder */}
                    <motion.p
                      className="text-center px-6"
                      style={{
                        fontSize: '1.3em', // 15% larger than 1.125em
                        lineHeight: '1.4',
                        color: 'var(--accent-teal)',
                        fontFamily: 'var(--font-sans)', // Inter Tight
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      Hover on the gears to see what's on it
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Text stack - centered with max width */}
            <motion.div
              className="max-w-2xl space-y-6"
              style={{ marginTop: '10px' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 4,
                ease: [0.22, 1, 0.36, 1], // Apple-style easing
                delay: 3.8 // After placeholder text starts
              }}
            >
              {/* Subtitle - Slower fade (2x slower) */}
              <motion.p
                className="text-base md:text-lg text-[var(--text-muted-dark)] leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {(() => {
                  const text = "It holds the same chaos everyone carries — but turns it into clarity, structure, and scalable product decisions."
                  const words = text.split(' ')
                  const totalWords = words.length
                  // If odd number, first line gets more words; if even, split evenly
                  const firstLineWords = Math.ceil(totalWords / 2)
                  const firstLine = words.slice(0, firstLineWords).join(' ')
                  const secondLine = words.slice(firstLineWords).join(' ')
                  return (
                    <>
                      {firstLine}
                      <br />
                      {secondLine}
                    </>
                  )
                })()}
              </motion.p>

              {/* Buttons - Slower fade (2x slower) */}
              <motion.div 
                className="pt-4 flex items-center justify-center gap-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 4, delay: 5.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href="#work-overview"
                  className="pointer-events-auto inline-flex items-center rounded-full border border-white/20 text-white px-6 py-3 text-sm font-medium transition-all duration-300 hover:border-[var(--accent-teal)] hover:text-[var(--accent-teal)] hover:bg-[var(--accent-teal)]/10"
                >
                  View my work
                </a>

                <button
                  onClick={() => setShowVideoModal(true)}
                  className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 text-white px-6 py-3 text-sm font-medium transition-all duration-300 hover:border-[var(--accent-teal)] hover:text-[var(--accent-teal)] hover:bg-[var(--accent-teal)]/10 group"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Portfolio teaser</span>
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Hint */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs text-[var(--text-muted-dark)] uppercase tracking-wider">
              Scroll to see what my mind built
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        videoSrc="/videos/portfolio-teaser.mp4"
      />
    </>
  )
}
