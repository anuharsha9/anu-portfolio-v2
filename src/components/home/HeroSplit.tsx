'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState, useMemo, memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import SignatureLogo from '@/components/brand/SignatureLogo'
import VideoModal from '@/components/video/VideoModal'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import GearBottomSheet from '@/components/home/GearBottomSheet'
import { GEAR_INSPECTOR, GearInspectorItem } from '@/data/gear-inspector'

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
      className="gears-dark-theme"
      style={{
        width: 'clamp(400px, 56vw, 1120px)',
        minWidth: 'clamp(400px, 56vw, 1120px)',
        flexShrink: 0,
      }}
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
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [activeGear, setActiveGear] = useState<GearInspectorItem | null>(null)
  const [isCardHovered, setIsCardHovered] = useState(false)
  const [showMobileSheet, setShowMobileSheet] = useState(false)
  const [mobileGear, setMobileGear] = useState<GearInspectorItem | null>(null)
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [svgContent, setSvgContent] = useState<string>('')

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
          const slowBgRotationSpeed = avgMainGearSpeed * 3
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
            }
          }

          const handleLeave = () => {
            if (hoverTimeout) {
              clearTimeout(hoverTimeout)
              hoverTimeout = null
              allHoverTimeouts.set(gearId, null)
            }

            // Longer delay to allow user to move to the inspector card
            hoverTimeout = setTimeout(() => {
              gearGroup.classList.remove('gear-main--active')
              requestAnimationFrame(() => {
                const activeGears = Array.from(brainGearsGroup.querySelectorAll<SVGGElement>('.gear-main--active'))
                if (activeGears.length === 0) {
                  // Use the ref to schedule hiding (will be cancelled if card is hovered)
                  if (hideTimeoutRef.current) {
                    clearTimeout(hideTimeoutRef.current)
                  }
                  hideTimeoutRef.current = setTimeout(() => {
                    setActiveGear((current) => {
                      // Only clear if not hovering the card
                      return current
                    })
                  }, 300)
                }
              })
              hoverTimeout = null
              allHoverTimeouts.set(gearId, null)
            }, 150)

            allHoverTimeouts.set(gearId, hoverTimeout)
          }

          const overlay = gearGroup.querySelector<SVGCircleElement>('.gear-hover-overlay')
          const listeners: { element: Element; type: string; handler: EventListener }[] = []

          // Click handler to navigate to the gear's linked content
          const handleClick = () => {
            const gearData = GEAR_INSPECTOR[gearId]
            if (gearData?.link) {
              router.push(gearData.link)
            }
          }

          // Mobile tap handler - open bottom sheet
          const handleTap = (e: Event) => {
            e.preventDefault()
            e.stopPropagation()

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
            overlay.addEventListener('touchend', handleTap, { passive: false })
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
            gearGroup.addEventListener('touchend', handleTap, { passive: false })
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
  }, [])

  return (
    <>
      <section
        id="hero"
        className="bg-slate-900 relative min-h-screen flex items-center overflow-hidden"
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

        {/* Glow effect behind gears */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[800px] bg-[var(--accent-teal)]/10 rounded-full blur-[150px]" />
        </div>

        {/* Main Content Container */}
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 lg:gap-5 items-center min-h-[auto] lg:min-h-screen py-6 pb-36 sm:py-8 sm:pb-40 lg:py-0 lg:pb-0">

            {/* Left Side - Text Content (5 columns) */}
            <motion.div
              className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Logo Stamp - Desktop Only */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="hidden lg:flex justify-start"
              >
                <SignatureLogo className="w-12 h-12 text-[var(--accent-teal)]/80" />
              </motion.div>

              {/* Main Headline */}
              <h1 className="font-serif text-white leading-[1.05] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Designing<br />
                through the<br />
                <span className="text-[var(--accent-teal)]">complexity.</span>
              </h1>

              {/* Professional Title */}
              <p className="text-[var(--accent-teal)] font-mono text-xs sm:text-sm md:text-base tracking-wide max-w-md mx-auto lg:mx-0">
                Principal Product Designer · AI-Driven ·<br className="sm:hidden" /> Enterprise Systems Architect
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#work-overview"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[var(--accent-teal)] text-white font-medium hover:bg-[var(--accent-teal-700)] transition-all duration-300 hover:scale-105 shadow-lg shadow-[var(--accent-teal)]/25"
                  onClick={(e) => {
                    e.preventDefault()
                    const section = document.getElementById('work-overview')
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  <span>See the Work</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>

                <button
                  onClick={() => setShowVideoModal(true)}
                  className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full border border-slate-700 text-white font-medium hover:border-[var(--accent-teal)] hover:bg-[var(--accent-teal)]/10 transition-all duration-300"
                >
                  <span className="relative flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-teal)] opacity-75"></span>
                    <span className="relative inline-flex items-center justify-center rounded-full h-5 w-5 bg-[var(--accent-teal)]">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                  <span>Watch Intro</span>
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider hidden sm:inline">
                    20s
                  </span>
                </button>
              </div>

              {/* Mobile hint - tap the gears */}
              <div className="lg:hidden pt-2">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-6 h-px bg-slate-600" />
                  <span className="font-mono text-slate-400 text-[10px] sm:text-xs tracking-wide text-center">
                    Tap any gear → explore case studies
                  </span>
                  <div className="w-6 h-px bg-slate-600" />
                </div>
              </div>

              {/* GEAR INSPECTOR - Desktop Only */}
              <div className="pt-4 h-[280px] hidden lg:block">
                {/* Permanent hint */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-slate-600" />
                  <span className="font-mono text-slate-400 text-xs tracking-wide">
                    Each gear links to a case study section — hover to preview, click to explore
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  {!activeGear ? (
                    <motion.div
                      key="hint"
                      className="flex items-center gap-3 pt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.span
                        className="font-mono text-slate-500 text-xs tracking-wide italic"
                        animate={{ opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      >
                        ← Try hovering a gear
                      </motion.span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`gear-${activeGear.id}`}
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-4 max-w-md cursor-pointer"
                      style={{ borderColor: `${activeGear.accentColor}30` }}
                      onMouseEnter={() => {
                        setIsCardHovered(true)
                        if (hideTimeoutRef.current) {
                          clearTimeout(hideTimeoutRef.current)
                          hideTimeoutRef.current = null
                        }
                      }}
                      onMouseLeave={() => {
                        setIsCardHovered(false)
                        // Hide after leaving the card
                        hideTimeoutRef.current = setTimeout(() => {
                          setActiveGear(null)
                        }, 300)
                      }}
                    >
                      {/* Header with thought */}
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className="w-1 h-full min-h-[40px] rounded-full flex-shrink-0"
                          style={{ backgroundColor: activeGear.accentColor }}
                        />
                        <div>
                          <span
                            className="font-mono text-[10px] uppercase tracking-widest block mb-1"
                            style={{ color: activeGear.accentColor }}
                          >
                            // {activeGear.title.toUpperCase().replace(/\s+/g, '_')}
                          </span>
                          <p className="font-serif text-slate-300 text-sm italic leading-relaxed">
                            &ldquo;{activeGear.thought}&rdquo;
                          </p>
                        </div>
                      </div>

                      {/* Preview Image (if exists) */}
                      {activeGear.image && (
                        <div className="relative h-24 rounded-lg overflow-hidden mb-3 border border-slate-700">
                          <Image
                            src={activeGear.image}
                            alt={activeGear.title}
                            fill
                            className="object-cover object-top"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                        </div>
                      )}

                      {/* Insight */}
                      <p className="text-slate-400 text-xs leading-relaxed mb-3">
                        {activeGear.insight}
                      </p>

                      {/* Link to dive deeper */}
                      <Link
                        href={activeGear.link}
                        className="inline-flex items-center gap-2 text-xs font-medium transition-colors group"
                        style={{ color: activeGear.accentColor }}
                      >
                        <span>{activeGear.linkLabel}</span>
                        <svg
                          className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Side - Brain Gears (7 columns) - THE HERO */}
            <div className="lg:col-span-7 relative order-1 lg:order-2 flex items-center justify-center">
              <GearsSvgContainer svgContent={svgContent} containerRef={containerRef} />
            </div>
          </div>
        </div>

        {/* Impact Proof Bar - Bottom of Hero */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 border-t border-slate-800 bg-slate-950/80 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800">
              {[
                { value: '50+', label: 'Projects Across Career' },
                { value: '25M+', label: 'Users on WebFOCUS' },
                { value: 'Fortune 500', label: 'Enterprise Clients', isText: true },
                { value: 'Best-in-Class 2025', label: 'Dresner Award', isText: true },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="py-3 sm:py-5 md:py-6 px-1.5 sm:px-2 md:px-4 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.0 + index * 0.1 }}
                >
                  <div className={`font-mono font-semibold text-[var(--accent-teal)] ${metric.isText ? 'text-xs sm:text-sm md:text-base' : 'text-lg sm:text-xl md:text-2xl'}`}>
                    {metric.isText ? metric.value : (
                      <AnimatedCounter
                        value={metric.value}
                        duration={1.5 + index * 0.2}
                      />
                    )}
                  </div>
                  <div className="font-mono text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-wider text-slate-500 mt-0.5 sm:mt-1 leading-tight">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center pt-2"
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
