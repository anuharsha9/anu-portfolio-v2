'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import BrainGears from '@/assets/brain-gears.svg'
import VideoModal from '@/components/video/VideoModal'
import { GEAR_LABELS } from '@/data/gear-labels-preserved'

// Gear IDs for rotation setup
const GEAR_IDS = Object.keys(GEAR_LABELS)

export function HeroBrain() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const svgRootRef = useRef<SVGSVGElement | null>(null)

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
          }

          // Add debouncing to prevent rapid toggling on edges
          let hoverTimeout: NodeJS.Timeout | null = null
          let isHovering = false

          const handleEnter = () => {
            if (hoverTimeout) {
              clearTimeout(hoverTimeout)
              hoverTimeout = null
            }
            if (!isHovering) {
              isHovering = true
              // Simply add active class - CSS will handle showing hover gear and hiding base gear
              gearGroup.classList.add('gear-main--active')
            }
          }

          const handleLeave = () => {
            // Small delay to prevent flickering when mouse moves quickly across edges
            hoverTimeout = setTimeout(() => {
              if (isHovering) {
                isHovering = false
                // Remove active class - CSS will handle hiding hover gear and showing base gear
                gearGroup.classList.remove('gear-main--active')
              }
              hoverTimeout = null
            }, 50) // 50ms delay to prevent rapid toggling
          }

          // Attach events ONLY to overlay (it covers the entire gear area including internal gaps)
          const overlay = gearGroup.querySelector<SVGCircleElement>('.gear-hover-overlay')
          if (overlay) {
            overlay.addEventListener('mouseenter', handleEnter)
            overlay.addEventListener('mouseleave', handleLeave)
            overlay.addEventListener('touchstart', handleEnter, { passive: true })
          } else {
            // Fallback: attach to gear group if overlay creation failed
            gearGroup.style.pointerEvents = 'auto'
            gearGroup.addEventListener('mouseenter', handleEnter)
            gearGroup.addEventListener('mouseleave', handleLeave)
            gearGroup.addEventListener('touchstart', handleEnter, { passive: true })
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
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
            {/* Text stack - centered with max width */}
            <motion.div
              className="max-w-2xl space-y-6"
              initial={{ opacity: 0, scale: 0.85, y: -40 }}
              animate={{ opacity: 1, scale: 1.0, y: 0 }}
              transition={{
                duration: 2.5,
                ease: [0.25, 0.1, 0.25, 1], // Smoother Apple-style easing
                delay: 1.5 // Starts 1.5s earlier, while gears are still fading in
              }}
            >
              {/* Main Title - Slower fade (2x slower) */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-[var(--text-primary-dark)]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 4, delay: 3, ease: [0.22, 1, 0.36, 1] }}
              >
                Welcome to my mind
              </motion.h1>

              {/* Subtitle - Slower fade (2x slower) */}
              <motion.p
                className="text-lg md:text-xl text-[var(--text-muted-dark)] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 4, delay: 4, ease: [0.22, 1, 0.36, 1] }}
              >
                It holds the same chaos everyone carries — but turns it into clarity, structure, and scalable product decisions.
              </motion.p>

              {/* Buttons - Slower fade (2x slower) */}
              <div className="pt-4 flex items-center justify-center gap-3">
                <motion.a
                  href="#work-overview"
                  className="pointer-events-auto inline-flex items-center rounded-full border border-white/20 text-white px-6 py-3 text-sm font-medium transition-all duration-300 hover:border-[var(--accent-teal)] hover:text-[var(--accent-teal)] hover:bg-[var(--accent-teal)]/10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 4, delay: 5, ease: [0.22, 1, 0.36, 1] }}
                >
                  View my work
                </motion.a>

                <motion.button
                  onClick={() => setShowVideoModal(true)}
                  className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 text-white px-6 py-3 text-sm font-medium transition-all duration-300 hover:border-[var(--accent-teal)] hover:text-[var(--accent-teal)] hover:bg-[var(--accent-teal)]/10 group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 4, delay: 5.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Portfolio teaser</span>
                </motion.button>
              </div>
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
