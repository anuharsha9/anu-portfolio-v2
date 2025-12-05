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
    console.log('[Gear Animation] HeroBrain component mounted, initializing...')
    const container = containerRef.current
    if (!container) {
      console.error('[Gear Animation] Container ref is null!')
      return
    }
    console.log('[Gear Animation] Container found')

    let cleanup: (() => void) | null = null

    const setup = () => {
      console.log('[Gear Animation] Setup function called')
      const svgRoot = container.querySelector<SVGSVGElement>('svg')
      if (!svgRoot) {
        console.log('[Gear Animation] SVG not found yet, retrying...')
        setTimeout(setup, 100)
        return
      }
      console.log('[Gear Animation] SVG found')
      svgRootRef.current = svgRoot
      let brainGearsGroup = svgRoot.querySelector<SVGGElement>('#brain-gears-copy')
      if (!brainGearsGroup) {
        brainGearsGroup = svgRoot.querySelector<SVGGElement>('#brain-gears')
      }
      if (!brainGearsGroup) {
        console.error('[Gear Animation] Brain gears group not found!')
        return
      }
      console.log('[Gear Animation] Brain gears group found')

      const setupGearRotations = () => {
        console.log('[Gear Animation] Starting gear rotation setup...')

        // Simplified: All gears fade in rotating (0-2s), then slow down at 2s
        const fadeInDuration = 2.0 // seconds - all gears fade in rotating
        const slowDownTime = 2.0 // seconds - when gears slow down
        const mainGearSlowDownPercent = 0.30 // Main gears slow down by 30% (multiply speed by 0.7)

        console.log('[Gear Animation] Configuration:', {
          fadeInDuration: `${fadeInDuration}s (all gears fade in rotating)`,
          slowDownTime: `${slowDownTime}s (gears slow down)`,
          mainGearSlowDown: `${(mainGearSlowDownPercent * 100).toFixed(0)}% slower after ${slowDownTime}s`
        })

        // Cache all gear groups upfront to avoid repeated DOM queries
        const gearGroups = new Map<string, SVGGElement>()
        GEAR_IDS.forEach((gearId) => {
          const gearGroup = brainGearsGroup.querySelector<SVGGElement>(`#${gearId}`)
          if (gearGroup) {
            gearGroups.set(gearId, gearGroup)
          }
        })

        console.log(`[Gear Animation] Found ${gearGroups.size} gear groups`)

        // Main gears - use cached references
        gearGroups.forEach((gearGroup, gearId) => {
          const gearBase = gearGroup.querySelector<SVGGElement>('[id^="gear-base"]')
          if (!gearBase) {
            console.warn(`[Gear Animation] No gear-base found for ${gearId}`)
            return
          }

          const isClockwise = Math.random() > 0.5
          // Main gears: varying speeds (20-40 seconds per full rotation)
          const baseRotationSpeed = 20 + Math.random() * 20

          // Fast speed during fade-in (0-2s)
          const fastRotationSpeed = baseRotationSpeed

          // Slow speed after 2s (30% slower = multiply duration by 1/0.7 = 1.43)
          const slowRotationSpeed = baseRotationSpeed / (1 - mainGearSlowDownPercent) // Slower = longer duration

          // Calculate fade-in rotation (2s at fast speed)
          const fadeInRotationAmount = (360 / fastRotationSpeed) * fadeInDuration * (isClockwise ? 1 : -1)

          // Set variables for simplified animation
          const rotationAmountValue = isClockwise ? '360deg' : '-360deg'
          gearGroup.style.setProperty('--fade-in-rotation', `${fadeInRotationAmount}deg`)
          gearGroup.style.setProperty('--rotation-duration', `${slowRotationSpeed}s`)
          gearGroup.style.setProperty('--rotation-amount', rotationAmountValue)

          // Also set directly on gear-base to ensure inheritance
          gearBase.style.setProperty('--fade-in-rotation', `${fadeInRotationAmount}deg`)
          gearBase.style.setProperty('--rotation-duration', `${slowRotationSpeed}s`)
          gearBase.style.setProperty('--rotation-amount', rotationAmountValue)

          // Simplified animation: fade-in rotating (0-2s), then slow continuous rotation (starts at 2s)
          gearBase.style.setProperty('animation', `gear-fade-in-main ${fadeInDuration}s linear forwards, gear-rotate-continuous ${slowRotationSpeed}s linear infinite ${slowDownTime}s`, 'important')

          // Set on hover gear if it exists
          const gearHover = gearGroup.querySelector<SVGGElement>('[id^="gear-hover"]')
          if (gearHover) {
            gearHover.style.setProperty('--fade-in-rotation', `${fadeInRotationAmount}deg`)
            gearHover.style.setProperty('--rotation-duration', `${slowRotationSpeed}s`)
            gearHover.style.setProperty('--rotation-amount', rotationAmountValue)
            gearHover.style.setProperty('animation', `gear-fade-in-main ${fadeInDuration}s linear forwards, gear-rotate-continuous ${slowRotationSpeed}s linear infinite ${slowDownTime}s`, 'important')
          }

          // Calculate angular velocities for comparison
          const fastAngularVelocity = Math.abs(fadeInRotationAmount) / fadeInDuration // degrees per second during fade-in (0-2s)
          const slowAngularVelocity = 360 / slowRotationSpeed // degrees per second after slow-down (after 2s)
          const speedDifferencePercent = ((fastAngularVelocity - slowAngularVelocity) / slowAngularVelocity) * 100

          // Verify animation and CSS variables are set correctly (use setTimeout to ensure DOM is updated)
          setTimeout(() => {
            const computedAnimation = getComputedStyle(gearBase).animation || getComputedStyle(gearBase).getPropertyValue('animation')
            const computedFadeInRotation = getComputedStyle(gearBase).getPropertyValue('--fade-in-rotation').trim()
            const computedRotationDuration = getComputedStyle(gearBase).getPropertyValue('--rotation-duration').trim()
            const computedRotationAmount = getComputedStyle(gearBase).getPropertyValue('--rotation-amount').trim()

            console.log(`[Gear Animation] ${gearId} - Verification:`, {
              animation: computedAnimation || 'NOT SET',
              fadeInRotation: computedFadeInRotation || 'NOT SET',
              rotationDuration: computedRotationDuration || 'NOT SET',
              rotationAmount: computedRotationAmount || 'NOT SET',
              expectedDuration: `${slowRotationSpeed}s`,
              slowDownTime: `${slowDownTime}s`
            })

            if (!computedFadeInRotation || !computedRotationDuration || !computedAnimation) {
              console.warn(`[Gear Animation] ${gearId}: Animation or CSS variables not set!`)
            }
          }, 100)

          // Debug: log to verify values for all gears
          console.log(`[Gear Animation] ${gearId}:`, {
            direction: isClockwise ? 'clockwise' : 'counter-clockwise',
            fastSpeed: `${fastRotationSpeed.toFixed(2)}s per rotation (0-2s)`,
            slowSpeed: `${slowRotationSpeed.toFixed(2)}s per rotation (after 2s, 30% slower)`,
            fadeInRotation: `${fadeInRotationAmount.toFixed(2)}deg over ${fadeInDuration}s`,
            fastAngularVelocity: `${fastAngularVelocity.toFixed(2)} deg/s (fade-in)`,
            slowAngularVelocity: `${slowAngularVelocity.toFixed(2)} deg/s (after slow-down)`,
            speedDifference: `${speedDifferencePercent.toFixed(1)}% slower after 2s`
          })
        })

        // Background gears: fade in rotating (0-2s), then slow down dramatically at 2s
        const bgGears = Array.from(
          brainGearsGroup.querySelectorAll<SVGGElement>('[id^="bg-gear-"]')
        )

        console.log(`[Gear Animation] Found ${bgGears.length} background gears`)

        // Use average main gear speed for fade-in calculation
        const avgMainGearSpeed = 30 // seconds per full rotation

        bgGears.forEach((gear, index) => {
          const isClockwise = Math.random() > 0.5
          // Background gears: fast during fade-in, then dramatically slower (3x slower than main gears)
          const fastBgRotationSpeed = avgMainGearSpeed // Fast speed during fade-in
          const slowBgRotationSpeed = avgMainGearSpeed * 3 // Dramatically slower after 2s (3x slower)

          // Calculate fade-in rotation (2s at fast speed)
          const fadeInRotationAmount = (360 / fastBgRotationSpeed) * fadeInDuration * (isClockwise ? 1 : -1)

          const bgRotationAmountValue = isClockwise ? '360deg' : '-360deg'
          gear.style.setProperty('--fade-in-rotation', `${fadeInRotationAmount}deg`)
          gear.style.setProperty('--rotation-duration', `${slowBgRotationSpeed}s`)
          gear.style.setProperty('--rotation-amount', bgRotationAmountValue)

          // Simplified animation: fade-in rotating (0-2s), then slow continuous rotation (starts at 2s)
          gear.style.setProperty('animation', `gear-fade-in-bg ${fadeInDuration}s linear forwards, gear-rotate-bg-slow ${slowBgRotationSpeed}s linear infinite ${slowDownTime}s`, 'important')

          if (index === 0) {
            const bgFadeInAngularVelocity = Math.abs(fadeInRotationAmount) / fadeInDuration
            const bgSlowAngularVelocity = 360 / slowBgRotationSpeed
            const bgSpeedDifferencePercent = ((bgFadeInAngularVelocity - bgSlowAngularVelocity) / bgSlowAngularVelocity) * 100

            console.log(`[Gear Animation] Background gear (sample):`, {
              direction: isClockwise ? 'clockwise' : 'counter-clockwise',
              fastSpeed: `${fastBgRotationSpeed.toFixed(2)}s per rotation (0-2s)`,
              slowSpeed: `${slowBgRotationSpeed.toFixed(2)}s per rotation (after 2s, dramatically slower)`,
              fadeInRotation: `${fadeInRotationAmount.toFixed(2)}deg over ${fadeInDuration}s`,
              fadeInAngularVelocity: `${bgFadeInAngularVelocity.toFixed(2)} deg/s (fade-in)`,
              slowAngularVelocity: `${bgSlowAngularVelocity.toFixed(2)} deg/s (after slow-down)`,
              speedDifference: `${bgSpeedDifferencePercent.toFixed(1)}% slower after 2s`
            })
          }
        })

        console.log('[Gear Animation] Gear rotation setup complete!')
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
        className="surface-dark relative flex flex-col items-center justify-center overflow-visible px-4 md:px-6 pt-0 md:pt-16 pb-6 border-t border-white/5 min-h-screen"
      >
        {/* SVG Container - on mobile this is at top, on desktop it's positioned normally */}
        <div
          ref={containerRef}
          className="relative w-full max-w-[1200px] overflow-visible md:mt-0 -mt-8"
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
                delay: 2.2, // Placeholder text fades in after gears slow down
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

              {/* Buttons - Stacked vertically */}
              <motion.div
                className="pt-2 md:pt-3 flex flex-col items-center justify-center gap-4 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, delay: 5.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Portfolio video - Primary CTA */}
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

                {/* Case Studies - Link with downward arrow */}
                <a
                  href="#work-overview"
                  onClick={(e) => {
                    e.preventDefault()
                    setTimeout(() => {
                      const section = document.getElementById('work-overview')
                      if (section) {
                        // Account for navbar height on mobile (if visible)
                        const mainNavHeight = 72 // Main nav is now taller
                        const sectionNavHeight = 48 // Section nav is now shorter
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
                  className="pointer-events-auto inline-flex flex-col items-center justify-center gap-1 text-white/70 text-xs md:text-sm font-medium transition-all duration-300 hover:text-white/90 group"
                >
                  <span>Case Studies</span>
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-white/70 transition-all duration-300 group-hover:text-white/90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
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
                delay: 2.2, // Placeholder text fades in after gears slow down
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
                    {/* Tap hint - mobile only */}
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
                      <span>Tap the gears to explore</span>
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

              {/* Buttons - Stacked vertically - fades in third */}
              <motion.div
                className="pt-2 flex flex-col items-center justify-center gap-4 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, delay: 5.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Portfolio video - Primary CTA */}
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

                {/* Case Studies - Link with downward arrow */}
                <a
                  href="#work-overview"
                  onClick={(e) => {
                    e.preventDefault()
                    setTimeout(() => {
                      const section = document.getElementById('work-overview')
                      if (section) {
                        // Account for navbar height on mobile (if visible)
                        const mainNavHeight = 72 // Main nav is now taller
                        const sectionNavHeight = 48 // Section nav is now shorter
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
                  className="pointer-events-auto inline-flex flex-col items-center justify-center gap-1 text-white/70 text-xs font-medium transition-all duration-300 hover:text-white/90 group"
                >
                  <span>Case Studies</span>
                  <svg
                    className="w-4 h-4 text-white/70 transition-all duration-300 group-hover:text-white/90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
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
