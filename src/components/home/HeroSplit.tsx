'use client'

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState, useMemo, memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import VideoModal from '@/components/video/VideoModal'
import GearBottomSheet from '@/components/home/GearBottomSheet'
import { GEAR_INSPECTOR, GearInspectorItem } from '@/data/gear-inspector'
import { getTheme, spacing } from '@/lib/design-system'
import Magnetic from '@/components/ui/Magnetic'

const GEAR_IDS = Object.keys(GEAR_INSPECTOR)


// Memoized SVG container to prevent re-renders when activeGear state changes
const GearsSvgContainer = memo(function GearsSvgContainer({
  svgContent,
  containerRef
}: {
  svgContent: string
  containerRef: React.RefObject<HTMLDivElement | null>
}) {
  return (
    <motion.div
      ref={containerRef}
      className="gears-dark-theme w-full"
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  )
})

/**
 * HeroSplit - "Gear Inspector" Experience
 * Hover on gears to peek inside my brain - each gear reveals actual work
 */
export default function HeroSplit() {
  const router = useRouter()
  const t = getTheme(true)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const heroRef = useRef<HTMLElement>(null)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [activeGear, setActiveGear] = useState<GearInspectorItem | null>(null)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isCardHovered, setIsCardHovered] = useState(false)
  const [showMobileSheet, setShowMobileSheet] = useState(false)
  const [mobileGear, setMobileGear] = useState<GearInspectorItem | null>(null)
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [svgContent, setSvgContent] = useState<string>('')

  // Parallax effect for hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  const gearsY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 50])
  const glowScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.3])

  // Load SVG inline so Turbopack (no SVGR) can manipulate DOM
  // Strip width/height so SVG scales to container (like SVGR did)
  useEffect(() => {
    let isMounted = true
    fetch('/assets/brain-gears.svg')
      .then((res) => res.text())
      .then((text) => {
        if (isMounted) {
          // Remove hardcoded width/height and add responsive sizing
          let processed = text
            .replace(/width="[^"]*"/g, '')
            .replace(/height="[^"]*"/g, '')
          // Add width/height 100% to the SVG element for proper scaling
          processed = processed.replace(
            /<svg/,
            '<svg style="width:100%;height:auto"'
          )
          setSvgContent(processed)
        }
      })
      .catch(() => {
        if (isMounted) setSvgContent('')
      })
    return () => {
      isMounted = false
    }
  }, [])

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

      let brainGearsGroup = svgRoot.querySelector<SVGGElement>('#brain-gears-copy')
      if (!brainGearsGroup) {
        brainGearsGroup = svgRoot.querySelector<SVGGElement>('#brain-gears')
      }
      if (!brainGearsGroup) return

      const setupGearRotations = () => {
        const fadeInDuration = 2.0
        const slowDownTime = 2.0
        const mainGearSlowDownPercent = 0.30

        // New structure: gears are direct children of #main-gears with IDs like gear-life, gear-career-ambition
        const mainGearsGroup = brainGearsGroup.querySelector<SVGGElement>('#main-gears')
        if (!mainGearsGroup) return

        GEAR_IDS.forEach((gearId) => {
          // The gear group IS the gear itself now (not a container with gear-base inside)
          const gear = mainGearsGroup.querySelector<SVGGElement>(`#${gearId}`)
          if (!gear) return

          const isClockwise = Math.random() > 0.5
          const baseRotationSpeed = 20 + Math.random() * 20
          const fastRotationSpeed = baseRotationSpeed
          const slowRotationSpeed = baseRotationSpeed / (1 - mainGearSlowDownPercent)
          const fadeInRotationAmount = (360 / fastRotationSpeed) * fadeInDuration * (isClockwise ? 1 : -1)
          const rotationAmountValue = isClockwise ? '360deg' : '-360deg'

          gear.style.setProperty('--fade-in-rotation', `${fadeInRotationAmount}deg`)
          gear.style.setProperty('--rotation-duration', `${slowRotationSpeed}s`)
          gear.style.setProperty('--rotation-amount', rotationAmountValue)
          gear.style.setProperty('animation', `gear-fade-in-main ${fadeInDuration}s linear forwards, gear-rotate-continuous ${slowRotationSpeed}s linear infinite ${slowDownTime}s`, 'important')
          gear.style.transformOrigin = 'center'
          gear.style.transformBox = 'fill-box'

          // After fade-in completes, set opacity directly to prevent any hover state issues
          setTimeout(() => {
            gear.style.setProperty('opacity', '1', 'important')
          }, (fadeInDuration + 0.2) * 1000)
        })

        const bgGears = Array.from(brainGearsGroup.querySelectorAll<SVGGElement>('[id^="bg-gear-"]'))
        const avgMainGearSpeed = 30

        bgGears.forEach((gear) => {
          const isClockwise = Math.random() > 0.5
          const fastBgRotationSpeed = avgMainGearSpeed
          const slowBgRotationSpeed = avgMainGearSpeed * 6  // Slower rotation (half speed)
          const fadeInRotationAmount = (360 / fastBgRotationSpeed) * fadeInDuration * (isClockwise ? 1 : -1)
          const bgRotationAmountValue = isClockwise ? '360deg' : '-360deg'

          gear.style.setProperty('--fade-in-rotation', `${fadeInRotationAmount}deg`)
          gear.style.setProperty('--rotation-duration', `${slowBgRotationSpeed}s`)
          gear.style.setProperty('--rotation-amount', bgRotationAmountValue)
          gear.style.setProperty('animation', `gear-fade-in-bg ${fadeInDuration}s linear forwards, gear-rotate-bg-slow ${slowBgRotationSpeed}s linear infinite ${slowDownTime}s`, 'important')
        })
      }

      const setTransformOrigins = () => {
        // Main gears under #main-gears
        const mainGearsGroup = brainGearsGroup.querySelector<SVGGElement>('#main-gears')
        if (mainGearsGroup) {
          const mainGears = mainGearsGroup.querySelectorAll<SVGGElement>(':scope > [id^="gear-"]')
          mainGears.forEach((gear) => {
            try {
              const bbox = gear.getBBox()
              if (bbox.width > 0 && bbox.height > 0) {
                gear.style.transformOrigin = 'center'
                gear.style.transformBox = 'fill-box'
              }
            } catch {
              gear.style.transformOrigin = 'center'
              gear.style.transformBox = 'fill-box'
            }
          })
        }

        // Background gears
        const bgGears = brainGearsGroup.querySelectorAll<SVGGElement>('[id^="bg-gear-"]')
        bgGears.forEach((gear) => {
          try {
            const bbox = gear.getBBox()
            if (bbox.width > 0 && bbox.height > 0) {
              gear.style.transformOrigin = 'center'
              gear.style.transformBox = 'fill-box'
            }
          } catch {
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

        paths.forEach((path) => {
          path.style.opacity = '0'
          path.setAttribute('opacity', '0')
        })

        const durationPerLine = 24000
        const initialDelay = 3000

        paths.forEach((path) => {
          setTimeout(() => {
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                try {
                  const pathLength = path.getTotalLength()
                  if (pathLength > 0 && !isNaN(pathLength) && isFinite(pathLength)) {
                    path.style.setProperty('--path-length', String(pathLength))
                    path.setAttribute('stroke-dasharray', String(pathLength))
                    path.setAttribute('stroke-dashoffset', String(pathLength))
                    path.style.opacity = '0'
                    path.setAttribute('opacity', '0')
                    const delay = initialDelay
                    path.style.animation = `line-draw-path ${durationPerLine}ms ease-out ${delay}ms forwards`
                  }
                } catch {
                  // Silent fail
                }
              })
            })
          }, 100)
        })
      }

      const setupHoverListeners = () => {
        const allHoverTimeouts = new Map<string, NodeJS.Timeout | null>()
        const eventListeners = new Map<string, { element: Element; type: string; handler: EventListener }[]>()

        // New structure: gears are direct children of #main-gears
        const mainGearsGroup = brainGearsGroup.querySelector<SVGGElement>('#main-gears')
        if (!mainGearsGroup) return

        GEAR_IDS.forEach((gearId) => {
          // The gear group IS the gear itself now
          const gear = mainGearsGroup.querySelector<SVGGElement>(`#${gearId}`)
          if (!gear) return

          // Enable pointer events on the gear itself
          gear.style.pointerEvents = 'auto'
          gear.style.cursor = 'pointer'

          try {
            const bbox = gear.getBBox()
            if (bbox.width > 0 && bbox.height > 0) {
              const centerX = bbox.x + bbox.width / 2
              const centerY = bbox.y + bbox.height / 2
              const radius = (Math.max(bbox.width, bbox.height) / 2) * 1.005

              let overlay = gear.querySelector<SVGCircleElement>('.gear-hover-overlay')
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
                overlay.style.zIndex = '1000'
                gear.appendChild(overlay)
              } else {
                overlay.setAttribute('cx', String(centerX))
                overlay.setAttribute('cy', String(centerY))
                overlay.setAttribute('r', String(radius))
              }
            }
          } catch {
            // Continue anyway
          }

          // Reference the gear for the rest of the function (was gearGroup)
          const gearGroup = gear

          if (!GEAR_INSPECTOR[gearId]) return

          let hoverTimeout: NodeJS.Timeout | null = null
          allHoverTimeouts.set(gearId, null)

          const handleEnter = () => {
            allHoverTimeouts.forEach((timeout, id) => {
              if (timeout) {
                clearTimeout(timeout)
                allHoverTimeouts.set(id, null)
              }
            })

            if (hoverTimeout) {
              clearTimeout(hoverTimeout)
              hoverTimeout = null
              allHoverTimeouts.set(gearId, null)
            }

            // Clear hide timeout if hovering a new gear
            if (hideTimeoutRef.current) {
              clearTimeout(hideTimeoutRef.current)
              hideTimeoutRef.current = null
            }

            const allActiveGears = brainGearsGroup.querySelectorAll<SVGGElement>('.gear-main--active')
            allActiveGears.forEach((activeGear) => {
              if (activeGear.id !== gearId) {
                activeGear.classList.remove('gear-main--active')
                // Remove accent color from previously active gear
                activeGear.style.removeProperty('--gear-accent')
              }
            })

            gearGroup.classList.add('gear-main--active')
            const gearData = GEAR_INSPECTOR[gearId]
            if (gearData) {
              // Apply accent color to the gear
              gearGroup.style.setProperty('--gear-accent', gearData.accentColor)
              setActiveGear(gearData)
              setHasInteracted(true)
            }
          }

          const handleLeave = () => {
            if (hoverTimeout) {
              clearTimeout(hoverTimeout)
              hoverTimeout = null
              allHoverTimeouts.set(gearId, null)
            }

            // Short delay to allow user to move to the inspector card
            hoverTimeout = setTimeout(() => {
              gearGroup.classList.remove('gear-main--active')
              const activeGears = Array.from(brainGearsGroup.querySelectorAll<SVGGElement>('.gear-main--active'))
              if (activeGears.length === 0) {
                // Use the ref to schedule hiding (will be cancelled if card is hovered)
                if (hideTimeoutRef.current) {
                  clearTimeout(hideTimeoutRef.current)
                }
                hideTimeoutRef.current = setTimeout(() => {
                  setActiveGear((current) => current)
                }, 150)
              }
              hoverTimeout = null
              allHoverTimeouts.set(gearId, null)
            }, 80)

            allHoverTimeouts.set(gearId, hoverTimeout)
          }

          const overlay = gearGroup.querySelector<SVGCircleElement>('.gear-hover-overlay')
          const listeners: { element: Element; type: string; handler: EventListener }[] = []

          // Click handler to navigate to the gear's linked content (desktop only)
          const handleClick = (e: Event) => {
            // On mobile, we use the bottom sheet instead of direct navigation
            const isMobile = window.matchMedia('(max-width: 1023px)').matches
            if (isMobile) {
              e.preventDefault()
              e.stopPropagation()
              return // Bottom sheet handles mobile taps
            }

            const gearData = GEAR_INSPECTOR[gearId]
            if (gearData?.link) {
              router.push(gearData.link)
            }
          }

          // Mobile tap handler - open bottom sheet
          const handleTap = (e: Event) => {
            e.stopPropagation()
            e.preventDefault() // Prevent click event from also firing

            // Check if we're on mobile (no hover capability)
            const isMobile = window.matchMedia('(max-width: 1023px)').matches

            const gearData = GEAR_INSPECTOR[gearId]
            if (!gearData) return

            if (isMobile) {
              // Mobile: Open bottom sheet
              setMobileGear(gearData)
              setShowMobileSheet(true)

              // Visual feedback - highlight the tapped gear
              const allActiveGears = brainGearsGroup.querySelectorAll<SVGGElement>('.gear-main--active')
              allActiveGears.forEach((ag) => {
                ag.classList.remove('gear-main--active')
                ag.style.removeProperty('--gear-accent')
              })
              gearGroup.classList.add('gear-main--active')
              gearGroup.style.setProperty('--gear-accent', gearData.accentColor)
            } else {
              // Desktop: Toggle behavior (fallback for click)
              const isCurrentlyActive = gearGroup.classList.contains('gear-main--active')

              const allActiveGears = brainGearsGroup.querySelectorAll<SVGGElement>('.gear-main--active')
              allActiveGears.forEach((ag) => {
                ag.classList.remove('gear-main--active')
                ag.style.removeProperty('--gear-accent')
              })

              if (!isCurrentlyActive) {
                gearGroup.classList.add('gear-main--active')
                gearGroup.style.setProperty('--gear-accent', gearData.accentColor)
                setActiveGear(gearData)
                setHasInteracted(true)
              } else {
                setActiveGear(null)
              }
            }
          }

          if (overlay) {
            overlay.addEventListener('mouseenter', handleEnter)
            overlay.addEventListener('mouseleave', handleLeave)
            overlay.addEventListener('click', handleClick)
            // Mobile: use touchend for better tap handling
            overlay.addEventListener('touchend', handleTap)
            listeners.push(
              { element: overlay, type: 'mouseenter', handler: handleEnter },
              { element: overlay, type: 'mouseleave', handler: handleLeave },
              { element: overlay, type: 'click', handler: handleClick },
              { element: overlay, type: 'touchend', handler: handleTap }
            )
          } else {
            gearGroup.style.pointerEvents = 'auto'
            gearGroup.addEventListener('mouseenter', handleEnter)
            gearGroup.addEventListener('mouseleave', handleLeave)
            gearGroup.addEventListener('click', handleClick)
            // Mobile: use touchend for better tap handling
            gearGroup.addEventListener('touchend', handleTap)
            listeners.push(
              { element: gearGroup, type: 'mouseenter', handler: handleEnter },
              { element: gearGroup, type: 'mouseleave', handler: handleLeave },
              { element: gearGroup, type: 'click', handler: handleClick },
              { element: gearGroup, type: 'touchend', handler: handleTap }
            )
          }

          eventListeners.set(gearId, listeners)
        })

        return () => {
          allHoverTimeouts.forEach((timeout) => {
            if (timeout) clearTimeout(timeout)
          })
          allHoverTimeouts.clear()
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
        if (hoverCleanup) hoverCleanup()
      }
    }

    setup()

    return () => {
      if (cleanup) cleanup()
    }
  }, [router])

  // Click outside to close the hover card
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement | SVGElement

      // Check if click is on a gear element (has gear-main class or is inside one)
      const isClickOnGear = target.closest('.gear-main') !== null

      // Check if click is on the hover card
      const isClickOnCard = target.closest('[data-gear-card]') !== null

      // If click is not on a gear and not on the card, close the active gear
      if (!isClickOnGear && !isClickOnCard && activeGear) {
        // Clear any pending timeouts
        if (hideTimeoutRef.current) {
          clearTimeout(hideTimeoutRef.current)
          hideTimeoutRef.current = null
        }
        // Close the active gear card
        setActiveGear(null)
        // Also remove active class from all gears
        if (containerRef.current) {
          const activeGears = containerRef.current.querySelectorAll('.gear-main--active')
          activeGears.forEach((gear) => {
            gear.classList.remove('gear-main--active')
              ; (gear as HTMLElement).style.removeProperty('--gear-accent')
          })
        }
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [activeGear])

  return (
    <>
      <section
        ref={heroRef}
        id="hero"
        className="bg-white relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow effect behind gears - with parallax */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ y: glowY }}
        >
          <motion.div
            className="w-[750px] h-[750px] bg-[var(--accent-teal)]/10 rounded-full blur-[150px]"
            style={{ scale: glowScale }}
          />
        </motion.div>


        {/* Main Content Container - Centered Layout */}
        <div className={`${spacing.containerFull} relative z-10`}>
          <div className="flex flex-col items-center justify-center min-h-screen py-12 sm:py-16 md:py-12 pb-16 sm:pb-20 lg:py-10">

            {/* Centered Gears - THE HERO - with subtle parallax */}
            <motion.div
              className="relative w-[320px] xs:w-[380px] sm:w-[480px] md:w-[600px] lg:w-[640px] xl:w-[700px] 2xl:w-[980px] max-w-full mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ y: gearsY }}
            >
              <GearsSvgContainer svgContent={svgContent} containerRef={containerRef} />

              {/* Center hint - shown when no gear is active */}
              <AnimatePresence mode="wait">
                {!activeGear && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.3, delay: hasInteracted ? 0.1 : 1.5 } }}
                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0 } }}
                  >
                    <div className="text-center px-4">
                      <p className={`${t.textSecondary} text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed`}>
                        <span className="hidden lg:block">
                          Hover &amp; click on the rotating gears<br />
                          <span className={t.textMuted}>to explore my portfolio</span>
                        </span>
                        <span className="lg:hidden">
                          Tap on the rotating gears<br />
                          <span className={t.textMuted}>to explore my portfolio</span>
                        </span>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* GEAR INSPECTOR - Centered Overlay */}
              <AnimatePresence mode="wait">
                {activeGear && (
                  <motion.div
                    key={activeGear.id}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.12 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="pointer-events-auto"
                      onMouseEnter={() => {
                        setIsCardHovered(true)
                        if (hideTimeoutRef.current) {
                          clearTimeout(hideTimeoutRef.current)
                          hideTimeoutRef.current = null
                        }
                      }}
                      onMouseLeave={() => {
                        setIsCardHovered(false)
                        hideTimeoutRef.current = setTimeout(() => {
                          setActiveGear(null)
                        }, 150)
                      }}
                    >
                      <Link
                        href={activeGear.link}
                        data-gear-card
                        className={`block p-space-4 max-w-[300px] rounded-2xl backdrop-blur-md bg-slate-900/70 border border-white/10 shadow-2xl lg:backdrop-blur-none lg:bg-transparent lg:border-transparent lg:shadow-none text-center`}
                      >
                        <div className="space-y-space-2">
                          <p className={`text-white/95 lg:text-slate-900 text-sm sm:text-base leading-relaxed font-medium`}>
                            {activeGear.thought}
                          </p>
                          <p className={`text-white/70 lg:text-slate-600 text-xs sm:text-sm leading-relaxed`}>
                            {activeGear.insight}
                          </p>
                          {/* CTA */}
                          <span
                            className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium pt-1"
                            style={{ color: activeGear.accentColor }}
                          >
                            <span>{activeGear.linkLabel}</span>
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Text Content - Below Gears */}
            <motion.div
              className={`flex flex-col items-center text-center space-y-4 sm:space-y-5 mt-6 sm:mt-8 lg:mt-6 px-4`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Main Headline */}
              <h1 className={`font-serif ${t.text} leading-[1.15] tracking-tight text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl max-w-4xl`}>
                Designing through the <span className="text-[var(--accent-teal)]">complexity.</span>
              </h1>

              {/* Professional Title */}
              <p className="text-[var(--accent-teal)] font-mono text-xs xs:text-sm sm:text-base md:text-lg tracking-wide leading-relaxed md:whitespace-nowrap">
                Principal Product Designer · AI-Driven · Enterprise Systems Architect
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 w-full max-w-md">
                <Magnetic>
                  <a
                    href="#work-overview"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[var(--accent-teal-800)] text-white text-sm sm:text-base font-medium hover:bg-[var(--accent-teal-900)] transition-all duration-300 hover:scale-105 shadow-lg shadow-[var(--accent-teal)]/25"
                    onClick={(e) => {
                      e.preventDefault()
                      const section = document.getElementById('work-overview')
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    <span>See the Work</span>
                    <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </Magnetic>

                <Magnetic>
                  <button
                    onClick={() => setShowVideoModal(true)}
                    className={`w-full sm:w-auto group inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border ${t.borderSecondary} ${t.textSecondary} text-sm sm:text-base font-medium hover:border-[var(--accent-teal)] hover:bg-[var(--accent-teal)]/10 transition-all duration-300`}
                  >
                    <span className="relative flex h-4 w-4 sm:h-5 sm:w-5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-teal)] opacity-75"></span>
                      <span className="relative inline-flex items-center justify-center rounded-full h-4 w-4 sm:h-5 sm:w-5 bg-[var(--accent-teal)]">
                        <svg aria-hidden="true" className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </span>
                    <span>Watch Intro</span>
                    <span className={`font-mono text-[10px] ${t.textMuted} uppercase tracking-widest hidden sm:inline`}>
                      20s
                    </span>
                  </button>
                </Magnetic>
              </div>

            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-space-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-space-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <motion.div
            className={`w-6 h-10 border-2 ${t.borderSecondary} rounded-full flex justify-center pt-2`}
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1 h-2 bg-[var(--accent-teal)] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      <VideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        videoSrc="/videos/portfolio-teaser.mp4"
      />

      {/* Mobile Bottom Sheet for Gear Inspector */}
      <GearBottomSheet
        gear={mobileGear}
        isOpen={showMobileSheet}
        onClose={() => {
          setShowMobileSheet(false)
          // Clear the active gear highlight after a short delay
          setTimeout(() => {
            const container = containerRef.current
            if (container) {
              const allActiveGears = container.querySelectorAll<SVGGElement>('.gear-main--active')
              allActiveGears.forEach((ag) => {
                ag.classList.remove('gear-main--active')
                ag.style.removeProperty('--gear-accent')
              })
            }
          }, 300)
        }}
      />
    </>
  )
}
