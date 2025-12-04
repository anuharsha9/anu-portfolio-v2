'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BrainGears from '@/assets/brain-gears.svg'
import TopQuoteIcon from '@/assets/top-quote.svg'
import BottomQuoteIcon from '@/assets/bottom-quote.svg'
import VideoModal from '@/components/video/VideoModal'
import { GEAR_LABELS } from '@/data/gear-labels-preserved'

// Gear IDs for rotation setup
const GEAR_IDS = Object.keys(GEAR_LABELS)

export function HeroBrain() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const svgRootRef = useRef<SVGSVGElement | null>(null)
  const [hoverText, setHoverText] = useState<string | null>(null)


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
        return
      }

      const setupGearRotations = () => {
        // During fade-in: gears rotate slower, then speed up by 10-15% after fade-in
        const speedUpMultiplier = 1.125 // 12.5% faster after fade-in (middle of 10-15%)
        const fadeInDuration = 3 // seconds

        // Cache all gear groups upfront to avoid repeated DOM queries
        const gearGroups = new Map<string, SVGGElement>()
        GEAR_IDS.forEach((gearId) => {
          const gearGroup = brainGearsGroup.querySelector<SVGGElement>(`#${gearId}`)
          if (gearGroup) {
            gearGroups.set(gearId, gearGroup)
          }
        })

        // Main gears - use cached references
        gearGroups.forEach((gearGroup, gearId) => {
          const gearBase = gearGroup.querySelector<SVGGElement>('[id^="gear-base"]')
          if (!gearBase) return

          const isClockwise = Math.random() > 0.5
          // After fade-in, main gears rotate at their normal speed (20-40 seconds per full rotation)
          // But we speed them up by 10-15%, so the actual speed is faster
          const baseRotationSpeed = 20 + Math.random() * 20
          const rotationSpeed = baseRotationSpeed / speedUpMultiplier // Faster rotation after fade-in

          // During fade-in: rotate slower (at the base speed, before speed-up)
          const fadeInRotationAmount = (360 / baseRotationSpeed) * fadeInDuration * (isClockwise ? 1 : -1)

          // Set variables on the gear group so both base and hover gears inherit
          gearGroup.style.setProperty('--fade-in-rotation', `${fadeInRotationAmount}deg`)
          gearGroup.style.setProperty('--rotation-duration', `${rotationSpeed}s`)
          gearGroup.style.setProperty('--rotation-amount', isClockwise ? '360deg' : '-360deg')
        })

        // Background gears: during fade-in rotate slower, then speed up after fade-in
        const bgGears = Array.from(
          brainGearsGroup.querySelectorAll<SVGGElement>('[id^="bg-gear-"]')
        )

        // Use average main gear speed for fade-in calculation
        const avgMainGearSpeed = 30 // seconds per full rotation

        bgGears.forEach((gear) => {
          const isClockwise = Math.random() > 0.5
          // Background gears rotate at 1/3 speed of main gears after fade-in (3x slower)
          // But we speed them up by 10-15%, so the actual speed is faster
          const baseBgRotationSpeed = avgMainGearSpeed * 3
          const bgRotationSpeed = baseBgRotationSpeed / speedUpMultiplier // Faster rotation after fade-in

          // During fade-in: rotate slower (at the base speed, before speed-up)
          const fadeInRotationAmount = (360 / baseBgRotationSpeed) * fadeInDuration * (isClockwise ? 1 : -1)

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

        // Duration per line - much slower for noticeable drawing effect
        const durationPerLine = 24000 // 24 seconds per line (much slower, more noticeable)
        // Start delay after gears fade in
        const initialDelay = 3000 // 3 seconds (after gear fade-in)

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

                    // All lines draw at the same time - same delay for all
                    const delay = initialDelay

                    path.style.animation = `line-draw-path ${durationPerLine}ms ease-out ${delay}ms forwards`
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
        // Track event listeners for cleanup
        const eventListeners = new Map<string, { element: Element; type: string; handler: EventListener }[]>()

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
            // Continue anyway - try fallback event attachment
          }

          // Skip if gear doesn't have a label
          if (!GEAR_LABELS[gearId]) {
            return
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
            // Optimized: Use querySelectorAll to get all active gears at once instead of looping
            const allActiveGears = brainGearsGroup.querySelectorAll<SVGGElement>('.gear-main--active')
            allActiveGears.forEach((activeGear) => {
              if (activeGear.id !== gearId) {
                activeGear.classList.remove('gear-main--active')
              }
            })

            // Always update hover state and text immediately, even if already hovering
            // This ensures text updates instantly when moving between gears
            isHovering = true
            gearGroup.classList.add('gear-main--active')

            // Get the label for this gear and display it in the center
            const label = GEAR_LABELS[gearId] || ''
            if (!label) {
              return
            }
            // Convert multi-line label to single line for display
            const singleLineLabel = label.replace(/\n/g, ' • ')
            // Update text immediately - no debouncing on enter
            if (singleLineLabel.trim()) {
              setHoverText(singleLineLabel)
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
          const listeners: { element: Element; type: string; handler: EventListener }[] = []

          if (overlay) {
            overlay.addEventListener('mouseenter', handleEnter)
            overlay.addEventListener('mouseleave', handleLeave)
            overlay.addEventListener('touchstart', handleEnter, { passive: true })
            listeners.push(
              { element: overlay, type: 'mouseenter', handler: handleEnter },
              { element: overlay, type: 'mouseleave', handler: handleLeave },
              { element: overlay, type: 'touchstart', handler: handleEnter }
            )
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
            listeners.push(
              { element: gearGroup, type: 'mouseenter', handler: handleEnter },
              { element: gearGroup, type: 'mouseleave', handler: handleLeave },
              { element: gearGroup, type: 'touchstart', handler: handleEnter }
            )
          }

          eventListeners.set(gearId, listeners)
        })

        return () => {
          // Cleanup: clear all timeouts
          allHoverTimeouts.forEach((timeout) => {
            if (timeout) clearTimeout(timeout)
          })
          allHoverTimeouts.clear()

          // Cleanup: remove all event listeners
          eventListeners.forEach((listeners) => {
            listeners.forEach(({ element, type, handler }) => {
              element.removeEventListener(type, handler)
            })
          })
          eventListeners.clear()
        }
      }

      setTransformOrigins()
      setTimeout(setTransformOrigins, 200)
      setupGearRotations()
      setupLineDrawing()
      const hoverCleanup = setupHoverListeners()

      cleanup = () => {
        // Cleanup hover listeners
        if (hoverCleanup) hoverCleanup()
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
        className="surface-dark relative flex flex-col items-center justify-center overflow-visible px-4 md:px-6 pt-4 md:pt-16 pb-6 border-t border-white/5 min-h-screen"
      >
        {/* SVG Container - on mobile this is at top, on desktop it's positioned normally */}
        <div
          ref={containerRef}
          className="relative w-full max-w-[1200px] overflow-visible md:mt-0 -mt-12"
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

          {/* Desktop: Text content overlaid on SVG */}
          <div className="pointer-events-none hidden md:flex absolute inset-0 flex-col items-center justify-center text-center px-4 z-10" style={{ transform: 'translateY(40px)' }}>
            {/* Text container - contains welcome text and hover text */}
            <motion.div
              className="mb-16"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '180px', // Fixed height to prevent jerk when hover text appears
                width: '100%',
                maxWidth: '600px',
              }}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 40 }}
              transition={{
                duration: 4,
                delay: 3.5, // Placeholder text fades in first (after gears fade in)
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
                      <TopQuoteIcon
                        style={{
                          position: 'absolute',
                          left: '0',
                          top: '-0.2em',
                          width: '1.2em',
                          height: '1.2em',
                        }}
                        className="text-[var(--accent-teal)]"
                      />
                      {(() => {
                        // Check if text contains ' • ' separator (old format) or is a single thought
                        const parts = hoverText.split(' • ')
                        if (parts.length > 1) {
                          // If multiple parts, display each on a new line
                          if (parts.length > 2) {
                            // Multiple lines (3+)
                            return (
                              <>
                                {parts.map((part, index) => (
                                  <span key={index}>
                                    {part.trim()}
                                    {index < parts.length - 1 && <br />}
                                  </span>
                                ))}
                              </>
                            )
                          } else {
                            // Old format with label and description (2 lines)
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
                          }
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
                      <BottomQuoteIcon
                        style={{
                          position: 'absolute',
                          right: '0',
                          bottom: '-0.2em',
                          width: '1.2em',
                          height: '1.2em',
                        }}
                        className="text-[var(--accent-teal)]"
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder-text"
                    className="flex flex-col items-center justify-center"
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
                    {/* Welcome to my mind */}
                    <p
                      className="font-serif font-medium text-white text-center px-3 md:px-6 mb-2"
                      style={{
                        fontSize: 'clamp(1.75rem, 8vw, 3.5rem)',
                      }}
                    >
                      Welcome to my mind
                    </p>
                    {/* Hover hint */}
                    <motion.p
                      className="text-[var(--accent-teal)] leading-relaxed text-center px-3 md:px-6 font-medium flex items-center justify-center gap-2 uppercase"
                      style={{
                        letterSpacing: '0.08em',
                        fontSize: 'clamp(0.7rem, 2.5vw, 0.85rem)',
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span>Hover on the gears to explore</span>
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Subtext and Buttons - animate from bottom - fixed height to prevent jerk */}
            <motion.div
              className="max-w-2xl px-3 md:px-0"
              style={{ marginTop: '-10px', minHeight: '120px' }}
            >
              {/* Subtext - Inter font, regular body text */}
              <motion.p
                className="font-sans text-white/70 text-center px-3 md:px-6 mb-4 md:mb-5"
                style={{
                  fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, delay: 4.5, ease: [0.22, 1, 0.36, 1] }}
              >
                It holds the same chaos everyone carries — but turns it into clarity, structure, and scalable product decisions.
              </motion.p>

              {/* Buttons - Side by side, same size */}
              <motion.div
                className="pt-2 md:pt-3 flex flex-row items-center justify-center gap-3 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, delay: 5.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Portfolio teaser - Primary CTA - matched size */}
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="pointer-events-auto inline-flex items-center justify-center gap-2.5 rounded-full border border-[var(--accent-teal)]/50 bg-[var(--accent-teal)]/5 text-white px-5 py-2.5 md:px-6 md:py-3 text-xs md:text-sm font-medium transition-all duration-300 hover:border-[var(--accent-teal)]/80 hover:bg-[var(--accent-teal)]/10 hover:text-[var(--accent-teal)] group"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-[var(--accent-teal)]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Why I built this portfolio</span>
                </button>

                {/* View my work - Secondary CTA */}
                <a
                  href="#work-overview"
                  onClick={(e) => {
                    e.preventDefault()
                    setTimeout(() => {
                      const section = document.getElementById('work-overview')
                      if (section) {
                        // Account for navbar height on mobile (if visible)
                        const mainNavHeight = 60
                        const sectionNavHeight = 60
                        const sectionNavVisible = document.querySelector('[aria-label="Landing page section navigation"]')?.getBoundingClientRect().height || 0
                        const totalNavHeight = mainNavHeight + (sectionNavVisible > 0 ? sectionNavHeight : 0)
                        const offset = totalNavHeight + 20 // Extra padding
                        
                        const elementPosition = section.getBoundingClientRect().top + window.pageYOffset
                        const offsetPosition = Math.max(0, elementPosition - offset)

                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth',
                        })
                        
                        // Update URL hash
                        window.history.pushState(null, '', '#work-overview')
                      }
                    }, 100)
                  }}
                  className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/20 text-white/70 px-5 py-2.5 md:px-6 md:py-3 text-xs md:text-sm font-medium transition-all duration-300 hover:border-white/30 hover:text-white/90 hover:bg-white/5"
                >
                  Case Studies
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile: Text content below SVG */}
          <div className="pointer-events-none md:hidden flex flex-col items-center justify-center text-center px-3 z-10" style={{ paddingTop: 'calc(100% * 1943.4 / 1835 + 1.5rem)' }}>
            {/* Text container - contains welcome text and hover text */}
            <motion.div
              className="mb-8 w-full"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '180px', // Fixed height to prevent jerk when hover text appears
                maxWidth: '600px',
              }}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 40 }}
              transition={{
                duration: 4,
                delay: 3.5, // Placeholder text fades in first (after gears fade in)
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {hoverText && typeof hoverText === 'string' && hoverText.trim() ? (
                  <motion.div
                    key={`hover-text-mobile-${hoverText}`}
                    className="text-xl text-white leading-relaxed text-center px-6"
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
                      <TopQuoteIcon
                        style={{
                          position: 'absolute',
                          left: '0',
                          top: '-0.2em',
                          width: '1.2em',
                          height: '1.2em',
                        }}
                        className="text-[var(--accent-teal)]"
                      />
                      {(() => {
                        const parts = hoverText.split(' • ')
                        if (parts.length > 1) {
                          // If multiple parts, display each on a new line
                          if (parts.length > 2) {
                            // Multiple lines (3+)
                            return (
                              <>
                                {parts.map((part, index) => (
                                  <span key={index}>
                                    {part.trim()}
                                    {index < parts.length - 1 && <br />}
                                  </span>
                                ))}
                              </>
                            )
                          } else {
                            // Old format with label and description (2 lines)
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
                          }
                        } else {
                          const thought = hoverText.trim()
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
                      <BottomQuoteIcon
                        style={{
                          position: 'absolute',
                          right: '0',
                          bottom: '-0.2em',
                          width: '1.2em',
                          height: '1.2em',
                        }}
                        className="text-[var(--accent-teal)]"
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder-text-mobile"
                    className="flex flex-col items-center justify-center"
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
                    {/* Welcome to my mind */}
                    <p
                      className="font-serif font-medium text-white text-center px-3 mb-2"
                      style={{
                        fontSize: 'clamp(1.75rem, 8vw, 3.5rem)',
                      }}
                    >
                      Welcome to my mind
                    </p>
                    {/* Hover hint */}
                    <motion.p
                      className="text-[var(--accent-teal)] leading-relaxed text-center px-3 font-medium flex items-center justify-center gap-2 uppercase"
                      style={{
                        letterSpacing: '0.08em',
                        fontSize: 'clamp(0.7rem, 2.5vw, 0.85rem)',
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span>Hover on the gears to explore</span>
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Subtext and Buttons - animate from bottom - fixed height to prevent jerk */}
            <motion.div
              className="max-w-2xl px-3 w-full"
              style={{ marginTop: '-10px', minHeight: '120px' }}
            >
              {/* Subtext - Inter font, regular body text - fades in second */}
              <motion.p
                className="font-sans text-white/70 text-center px-3 mb-4"
                style={{
                  fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, delay: 4.5, ease: [0.22, 1, 0.36, 1] }}
              >
                It holds the same chaos everyone carries — but turns it into clarity, structure, and scalable product decisions.
              </motion.p>

              {/* Buttons - Side by side, same size - fades in third */}
              <motion.div
                className="pt-2 flex flex-row items-center justify-center gap-3 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, delay: 5.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Portfolio teaser - Primary CTA - matched size */}
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="pointer-events-auto inline-flex items-center justify-center gap-2.5 rounded-full border border-[var(--accent-teal)]/50 bg-[var(--accent-teal)]/5 text-white px-5 py-2.5 text-xs font-medium transition-all duration-300 hover:border-[var(--accent-teal)]/80 hover:bg-[var(--accent-teal)]/10 hover:text-[var(--accent-teal)] group"
                >
                  <svg
                    className="w-4 h-4 text-[var(--accent-teal)]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Why I built this portfolio</span>
                </button>

                {/* View my work - Secondary CTA */}
                <a
                  href="#work-overview"
                  onClick={(e) => {
                    e.preventDefault()
                    setTimeout(() => {
                      const section = document.getElementById('work-overview')
                      if (section) {
                        // Account for navbar height on mobile (if visible)
                        const mainNavHeight = 60
                        const sectionNavHeight = 60
                        const sectionNavVisible = document.querySelector('[aria-label="Landing page section navigation"]')?.getBoundingClientRect().height || 0
                        const totalNavHeight = mainNavHeight + (sectionNavVisible > 0 ? sectionNavHeight : 0)
                        const offset = totalNavHeight + 20 // Extra padding
                        
                        const elementPosition = section.getBoundingClientRect().top + window.pageYOffset
                        const offsetPosition = Math.max(0, elementPosition - offset)

                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth',
                        })
                        
                        // Update URL hash
                        window.history.pushState(null, '', '#work-overview')
                      }
                    }, 100)
                  }}
                  className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/20 text-white/70 px-5 py-2.5 text-xs font-medium transition-all duration-300 hover:border-white/30 hover:text-white/90 hover:bg-white/5"
                >
                  Case Studies
                </a>
              </motion.div>
            </motion.div>
          </div>

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
