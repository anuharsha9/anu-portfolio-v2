'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import BrainGears from '@/assets/brain-gears.svg'
import VideoModal from '@/components/video/VideoModal'
import { GEAR_LABELS } from '@/data/gear-labels-preserved'

const GEAR_IDS = Object.keys(GEAR_LABELS)

/**
 * HeroSplit - Split screen hero with Designer-Led positioning
 * Left: Editorial text, Right: BrainGears animation
 */
export default function HeroSplit() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [showVideoModal, setShowVideoModal] = useState(false)
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

          if (!GEAR_LABELS[gearId]) return

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

            const allActiveGears = brainGearsGroup.querySelectorAll<SVGGElement>('.gear-main--active')
            allActiveGears.forEach((activeGear) => {
              if (activeGear.id !== gearId) {
                activeGear.classList.remove('gear-main--active')
              }
            })

            gearGroup.classList.add('gear-main--active')
            const label = GEAR_LABELS[gearId] || ''
            if (!label) return
            const singleLineLabel = label.replace(/\n/g, ' • ')
            if (singleLineLabel.trim()) {
              setHoverText(singleLineLabel)
            }
          }

          const handleLeave = () => {
            if (hoverTimeout) {
              clearTimeout(hoverTimeout)
              hoverTimeout = null
              allHoverTimeouts.set(gearId, null)
            }

            hoverTimeout = setTimeout(() => {
              gearGroup.classList.remove('gear-main--active')
              requestAnimationFrame(() => {
                const activeGears = Array.from(brainGearsGroup.querySelectorAll<SVGGElement>('.gear-main--active'))
                if (activeGears.length === 0) {
                  setHoverText(null)
                }
              })
              hoverTimeout = null
              allHoverTimeouts.set(gearId, null)
            }, 10)

            allHoverTimeouts.set(gearId, hoverTimeout)
          }

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
            gearGroup.style.pointerEvents = 'auto'
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
        className="bg-slate-50 relative min-h-screen flex items-center overflow-hidden border-b border-slate-200"
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
          {/* Split Layout: Text Left (40%), Gears Right (60%) - Gears more prominent */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 items-center py-8 lg:py-0">
            
            {/* Left Side - Editorial Text (2 of 5 columns = 40%) */}
            <motion.div
              className="order-2 lg:order-1 lg:col-span-2 flex flex-col justify-center space-y-6 md:space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Headline - Serif Editorial - Swiss Style */}
              <h1 
                className="font-serif text-slate-900 leading-[1.1] tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                Designing through the complexity.
              </h1>

              {/* Subhead - Monospace Signature - Teal Accent */}
              <p className="font-mono text-[#0BA2B5] text-sm md:text-base tracking-wide font-medium">
                Principal Product Designer · Design Systems Architect · AI-Driven
              </p>

              {/* Body Copy - slate-600 for readability */}
              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                I bridge the gap between complex requirements and clear interfaces. From legacy systems to modern experiences at scale.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-4">
                {/* Primary CTA - Teal Accent */}
                <a
                  href="#work-overview"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0BA2B5] text-white font-medium hover:bg-[#0990A2] transition-all duration-300 hover:scale-105 shadow-sm"
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

                {/* Video Intro CTA - More Prominent */}
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="group inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <span className="relative flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0BA2B5] opacity-75"></span>
                    <span className="relative inline-flex items-center justify-center rounded-full h-5 w-5 bg-[#0BA2B5]">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                  <span>20s Intro</span>
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider hidden sm:inline">
                    — I'm open to roles
                  </span>
                </button>
              </div>

              {/* Thought Inspector - Left column, below CTAs */}
              <div className="pt-8 min-h-[100px] hidden lg:block">
                <AnimatePresence mode="wait">
                  {!hoverText ? (
                    <motion.div
                      key="hint"
                      className="flex items-center gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-8 h-px bg-slate-300" />
                      <motion.span 
                        className="font-mono text-slate-400 text-xs tracking-wide"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      >
                        Hover the gears to explore my thinking →
                      </motion.span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`thought-${hoverText}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="border-l-2 border-[var(--accent-teal)] pl-4"
                    >
                      <span className="font-mono text-[10px] text-[var(--accent-teal)] uppercase tracking-widest block mb-2">
                        // THOUGHT
                      </span>
                      <p className="font-serif text-slate-700 text-base leading-relaxed italic">
                        "{hoverText}"
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Side - Brain Gears (3 of 5 columns = 60%) - More prominent */}
            <div className="order-1 lg:order-2 lg:col-span-3 relative gears-light-theme lg:-mr-12 xl:-mr-20">
              <div
                ref={containerRef}
                className="relative w-full max-w-[500px] mx-auto lg:max-w-none lg:scale-110 xl:scale-115 origin-center"
                style={{ aspectRatio: '1 / 1' }}
              >
                <motion.div
                  className="absolute inset-0 pointer-events-auto"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
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
          className="absolute bottom-0 left-0 right-0 border-t border-slate-200/60 bg-white/80 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-4 divide-x divide-slate-200/60">
              {[
                { value: '50yr', label: 'Legacy Modernized' },
                { value: '20M+', label: 'Weekly Schedules' },
                { value: '75%', label: 'Fewer Clicks' },
                { value: '100%', label: 'SME Validation' },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="py-4 md:py-5 px-2 md:px-4 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                >
                  <div className="font-mono text-lg md:text-2xl font-semibold text-[var(--accent-teal)]">
                    {metric.value}
                  </div>
                  <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-wider text-slate-500 mt-0.5">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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

