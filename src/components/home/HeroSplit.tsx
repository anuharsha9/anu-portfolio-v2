'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { ArrowDown, Mail } from 'lucide-react'
import BrainGears from '@/assets/brain-gears.svg'
import { GEAR_LABELS } from '@/data/gear-labels-preserved'

// Gear IDs for rotation setup
const GEAR_IDS = Object.keys(GEAR_LABELS)

// Impact metrics for the bottom bar
const impactMetrics = [
  { value: '50yr', label: 'Legacy Modernized' },
  { value: '20M+', label: 'Weekly Schedules' },
  { value: '75%', label: 'Fewer Clicks' },
  { value: '100%', label: 'SME Validation' },
]

export default function HeroSplit() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [hoverText, setHoverText] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
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
          const gearGroup = brainGearsGroup!.querySelector<SVGGElement>(`#${gearId}`)
          if (gearGroup) {
            gearGroups.set(gearId, gearGroup)
          }
        })

        gearGroups.forEach((gearGroup) => {
          const gearBase = gearGroup.querySelector<SVGGElement>('[id^="gear-base"]')
          if (!gearBase) return

          const isClockwise = Math.random() > 0.5
          const baseRotationSpeed = 20 + Math.random() * 20
          const slowRotationSpeed = baseRotationSpeed / (1 - mainGearSlowDownPercent)
          const fadeInRotationAmount = (360 / baseRotationSpeed) * fadeInDuration * (isClockwise ? 1 : -1)
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

        // Background gears
        const bgGears = Array.from(brainGearsGroup!.querySelectorAll<SVGGElement>('[id^="bg-gear-"]'))
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
        const allGears = brainGearsGroup!.querySelectorAll<SVGGElement>('[id^="gear-base"], [id^="bg-gear-"], [id^="gear-hover"]')
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

      const setupHoverListeners = () => {
        const allHoverTimeouts = new Map<string, NodeJS.Timeout | null>()
        const eventListeners = new Map<string, { element: Element; type: string; handler: EventListener }[]>()

        GEAR_IDS.forEach((gearId) => {
          const gearGroup = brainGearsGroup!.querySelector<SVGGElement>(`#${gearId}`)
          if (!gearGroup) return

          const gearBase = gearGroup.querySelector<SVGGElement>('[id^="gear-base"]')
          const gearHover = gearGroup.querySelector<SVGGElement>('[id^="gear-hover"]')
          if (!gearBase || !gearHover) return

          gearGroup.style.pointerEvents = 'none'
          gearBase.style.pointerEvents = 'none'

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
                gearGroup.appendChild(overlay)
              }
            }
          } catch {
            // Continue
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

            const allActiveGears = brainGearsGroup!.querySelectorAll<SVGGElement>('.gear-main--active')
            allActiveGears.forEach((activeGear) => {
              if (activeGear.id !== gearId) {
                activeGear.classList.remove('gear-main--active')
              }
            })

            gearGroup.classList.add('gear-main--active')
            const label = GEAR_LABELS[gearId] || ''
            if (label.trim()) {
              setHoverText(label)
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
                const activeGears = Array.from(brainGearsGroup!.querySelectorAll<SVGGElement>('.gear-main--active'))
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
            listeners.push(
              { element: overlay, type: 'mouseenter', handler: handleEnter },
              { element: overlay, type: 'mouseleave', handler: handleLeave }
            )
          }

          eventListeners.set(gearId, listeners)
        })

        return () => {
          allHoverTimeouts.forEach((timeout) => {
            if (timeout) clearTimeout(timeout)
          })
          eventListeners.forEach((listeners) => {
            listeners.forEach(({ element, type, handler }) => {
              element.removeEventListener(type, handler)
            })
          })
        }
      }

      setTransformOrigins()
      setTimeout(setTransformOrigins, 200)
      setupGearRotations()
      cleanup = setupHoverListeners()
    }

    setup()

    return () => {
      if (cleanup) cleanup()
    }
  }, [isClient])

  return (
    <section
      id="hero"
      className="bg-slate-50 relative min-h-screen flex items-center overflow-hidden border-b border-slate-200"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 py-16 lg:py-0">
        {/* Split Layout: Text Left (40%), Gears Right (60%) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center min-h-[80vh]">

          {/* Left Side - Text & CTAs (2 cols = 40%) */}
          <motion.div
            className="lg:col-span-2 order-2 lg:order-1 flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Tag */}
            <span className="font-mono text-[var(--accent-teal)] text-xs tracking-widest uppercase">
              // PRINCIPAL_PRODUCT_DESIGNER
            </span>

            {/* Headline */}
            <h1 className="font-serif text-slate-900 text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight">
              Principal Product Designer
              <span className="block text-slate-500 text-lg md:text-xl lg:text-2xl font-sans font-normal mt-2">
                Design Systems Architect · AI-Native
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-md">
              I design through complexity — from Figma to production. Modernizing legacy systems with 50+ years of technical debt.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
              <a
                href="#work-overview"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-teal)] text-white font-medium hover:bg-[var(--accent-teal-700)] transition-all duration-300 hover:scale-105 shadow-sm"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('work-overview')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span>View Case Studies</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="mailto:anuja.harsha@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-300 text-slate-700 font-medium hover:border-slate-400 hover:bg-white transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Gear Inspector - Terminal Log Style (only shows when hovering) */}
            <AnimatePresence>
              {hoverText && (
                <motion.div
                  key="gear-thought"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="mt-6 bg-slate-900 rounded-xl p-4 shadow-xl border border-slate-700/50 backdrop-blur-sm"
                >
                  {/* Window Chrome */}
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-700/50">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                    </div>
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest ml-2">
                      // THOUGHT_PROCESS
                    </span>
                  </div>
                  {/* Thought Content */}
                  <div className="font-mono text-sm text-slate-300 leading-relaxed">
                    <span className="text-emerald-400">&gt; </span>
                    {hoverText}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Side - Brain Gears (3 cols = 60%) */}
          <motion.div
            className="lg:col-span-3 order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              ref={containerRef}
              className="relative w-full gears-light-theme"
              style={{
                aspectRatio: '1943.4 / 1835',
                transform: 'scale(1.1)',
                transformOrigin: 'center center'
              }}
            >
              {isClient && (
                <BrainGears
                  className="h-full w-full"
                  style={{ pointerEvents: 'auto' }}
                  id="brain-gears-svg"
                />
              )}
            </div>

            {/* Caption with Hover Hint */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <p className="font-mono text-xs text-slate-400 uppercase tracking-widest">
                Visualizing my mental model
              </p>
              <motion.span
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-[var(--accent-teal)] font-mono text-xs"
              >
                ← Hover to explore
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Impact Metrics Bar - Bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 border-t border-slate-200/60 bg-white/80 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-4 divide-x divide-slate-200/60">
            {impactMetrics.map((metric, index) => (
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
  )
}
