'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import BrainGears from '@/assets/brain-gears.svg'
import VideoModal from '@/components/video/VideoModal'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { GEAR_INSPECTOR, GearInspectorItem } from '@/data/gear-inspector'

const GEAR_IDS = Object.keys(GEAR_INSPECTOR)

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
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null)

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

        const gearGroups = new Map<string, SVGGElement>()
        GEAR_IDS.forEach((gearId) => {
          const gearGroup = brainGearsGroup.querySelector<SVGGElement>(`#${gearId}`)
          if (gearGroup) {
            gearGroups.set(gearId, gearGroup)
          }
        })

        gearGroups.forEach((gearGroup) => {
          const gearBase = gearGroup.querySelector<SVGGElement>('[id^="gear-base"]')
          if (!gearBase) return

          const isClockwise = Math.random() > 0.5
          const baseRotationSpeed = 20 + Math.random() * 20
          const fastRotationSpeed = baseRotationSpeed
          const slowRotationSpeed = baseRotationSpeed / (1 - mainGearSlowDownPercent)
          const fadeInRotationAmount = (360 / fastRotationSpeed) * fadeInDuration * (isClockwise ? 1 : -1)
          const rotationAmountValue = isClockwise ? '360deg' : '-360deg'

          gearGroup.style.setProperty('--fade-in-rotation', `${fadeInRotationAmount}deg`)
          gearGroup.style.setProperty('--rotation-duration', `${slowRotationSpeed}s`)
          gearGroup.style.setProperty('--rotation-amount', rotationAmountValue)
          gearBase.style.setProperty('--fade-in-rotation', `${fadeInRotationAmount}deg`)
          gearBase.style.setProperty('--rotation-duration', `${slowRotationSpeed}s`)
          gearBase.style.setProperty('--rotation-amount', rotationAmountValue)
          gearBase.style.setProperty('animation', `gear-fade-in-main ${fadeInDuration}s linear forwards, gear-rotate-continuous ${slowRotationSpeed}s linear infinite ${slowDownTime}s`, 'important')

          const gearHover = gearGroup.querySelector<SVGGElement>('[id^="gear-hover"]')
          if (gearHover) {
            gearHover.style.setProperty('--fade-in-rotation', `${fadeInRotationAmount}deg`)
            gearHover.style.setProperty('--rotation-duration', `${slowRotationSpeed}s`)
            gearHover.style.setProperty('--rotation-amount', rotationAmountValue)
            gearHover.style.setProperty('animation', `gear-fade-in-main ${fadeInDuration}s linear forwards, gear-rotate-continuous ${slowRotationSpeed}s linear infinite ${slowDownTime}s`, 'important')
          }
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
        const allGears = brainGearsGroup.querySelectorAll<SVGGElement>('[id^="gear-base"], [id^="bg-gear-"], [id^="gear-hover"]')
        allGears.forEach((gear) => {
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

        GEAR_IDS.forEach((gearId) => {
          const gearGroup = brainGearsGroup.querySelector<SVGGElement>(`#${gearId}`)
          if (!gearGroup) return

          const gearBase = gearGroup.querySelector<SVGGElement>('[id^="gear-base"]')
          const gearHover = gearGroup.querySelector<SVGGElement>('[id^="gear-hover"]')
          if (!gearBase || !gearHover) return

          gearGroup.style.pointerEvents = 'none'
          gearBase.style.pointerEvents = 'none'
          const basePaths = gearBase.querySelectorAll('*')
          basePaths.forEach((element) => {
            if (element instanceof SVGElement) {
              element.style.pointerEvents = 'none'
            }
          })

          try {
            const bbox = gearBase.getBBox()
            if (bbox.width > 0 && bbox.height > 0) {
              const centerX = bbox.x + bbox.width / 2
              const centerY = bbox.y + bbox.height / 2
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
                overlay.style.zIndex = '1000'
                gearGroup.appendChild(overlay)
              } else {
                overlay.setAttribute('cx', String(centerX))
                overlay.setAttribute('cy', String(centerY))
                overlay.setAttribute('r', String(radius))
              }
            }
          } catch {
            // Continue anyway
          }

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

          if (overlay) {
            overlay.addEventListener('mouseenter', handleEnter)
            overlay.addEventListener('mouseleave', handleLeave)
            overlay.addEventListener('click', handleClick)
            overlay.addEventListener('touchstart', handleEnter, { passive: true })
            listeners.push(
              { element: overlay, type: 'mouseenter', handler: handleEnter },
              { element: overlay, type: 'mouseleave', handler: handleLeave },
              { element: overlay, type: 'click', handler: handleClick },
              { element: overlay, type: 'touchstart', handler: handleEnter }
            )
          } else {
            gearGroup.style.pointerEvents = 'auto'
            if (gearHover) {
              gearHover.style.pointerEvents = 'auto'
            }
            gearGroup.addEventListener('mouseenter', handleEnter)
            gearGroup.addEventListener('mouseleave', handleLeave)
            gearGroup.addEventListener('click', handleClick)
            gearGroup.addEventListener('touchstart', handleEnter, { passive: true })
            listeners.push(
              { element: gearGroup, type: 'mouseenter', handler: handleEnter },
              { element: gearGroup, type: 'mouseleave', handler: handleLeave },
              { element: gearGroup, type: 'click', handler: handleClick },
              { element: gearGroup, type: 'touchstart', handler: handleEnter }
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
          <div className="w-[800px] h-[800px] bg-[#0BA2B5]/10 rounded-full blur-[150px]" />
        </div>

        {/* Main Content Container */}
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen py-20 lg:py-0">
            
            {/* Left Side - Text Content (5 columns) */}
            <motion.div
              className="lg:col-span-5 flex flex-col justify-center space-y-8 text-center lg:text-left order-2 lg:order-1"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Pre-headline Tag */}
              <motion.span 
                className="font-mono text-[#0BA2B5] text-xs uppercase tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                // PRINCIPAL_PRODUCT_DESIGNER
              </motion.span>

              {/* Main Headline */}
              <h1 className="font-serif text-white leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Designing<br />
                through the<br />
                <span className="text-[#0BA2B5]">complexity.</span>
              </h1>

              {/* Subhead */}
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                I bridge legacy systems and modern experiences. 
                From ambiguity to clarity, at enterprise scale.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-2">
                <a
                  href="#work-overview"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0BA2B5] text-white font-medium hover:bg-[#0990A2] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#0BA2B5]/25"
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
                  className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full border border-slate-700 text-white font-medium hover:border-[#0BA2B5] hover:bg-[#0BA2B5]/10 transition-all duration-300"
                >
                  <span className="relative flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0BA2B5] opacity-75"></span>
                    <span className="relative inline-flex items-center justify-center rounded-full h-5 w-5 bg-[#0BA2B5]">
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

              {/* GEAR INSPECTOR - The Magic Happens Here */}
              <div className="pt-4 min-h-[160px] hidden lg:block">
                <AnimatePresence mode="wait">
                  {!activeGear ? (
                    <motion.div
                      key="hint"
                      className="flex items-center gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-8 h-px bg-slate-700" />
                      <motion.span 
                        className="font-mono text-slate-500 text-xs tracking-wide"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      >
                        Hover the gears to peek inside my brain →
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
            <div className="lg:col-span-7 relative order-1 lg:order-2">
              <div
                ref={containerRef}
                className="relative w-full max-w-[550px] mx-auto lg:max-w-none lg:scale-110 xl:scale-125 origin-center gears-dark-theme"
                style={{ aspectRatio: '1 / 1' }}
              >
                <motion.div
                  className="absolute inset-0 pointer-events-auto"
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <BrainGears
                    className="h-full w-full"
                    style={{ pointerEvents: 'auto', opacity: 1 }}
                    id="brain-gears-svg"
                  />
                </motion.div>
              </div>
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
            <div className="grid grid-cols-4 divide-x divide-slate-800">
              {[
                { value: '50', suffix: 'yr', label: 'Legacy Modernized' },
                { value: '20', suffix: 'M+', label: 'Weekly Schedules' },
                { value: '75', suffix: '%', label: 'Fewer Clicks' },
                { value: '100', suffix: '%', label: 'SME Validation' },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="py-5 md:py-6 px-2 md:px-4 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.0 + index * 0.1 }}
                >
                  <div className="font-mono text-xl md:text-2xl font-semibold text-[#0BA2B5]">
                    <AnimatedCounter 
                      value={`${metric.value}${metric.suffix}`} 
                      duration={1.5 + index * 0.2}
                    />
                  </div>
                  <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-wider text-slate-500 mt-1">
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
            <div className="w-1 h-2 bg-[#0BA2B5] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      <VideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        videoSrc="/videos/portfolio-teaser.mp4"
      />
    </>
  )
}
