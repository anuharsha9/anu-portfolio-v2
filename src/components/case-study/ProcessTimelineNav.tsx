'use client'

import { useState, useEffect } from 'react'

interface ProcessPhase {
  id: string
  phase: string
  sectionId: string
  duration: string
}

interface ProcessTimelineNavProps {
  phases: ProcessPhase[]
  isLightBackground?: boolean
}

export default function ProcessTimelineNav({ phases, isLightBackground = false }: ProcessTimelineNavProps) {
  const [activePhase, setActivePhase] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showLeftIndicator, setShowLeftIndicator] = useState(false)
  const [showRightIndicator, setShowRightIndicator] = useState(false)
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const accentColor = 'var(--accent-teal)'

  // Track which section is in view
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          // Find all phases that map to this section (Phase 2 and 3 both map to version-iteration)
          const matchingPhases = phases.filter((p) => p.sectionId === sectionId)
          if (matchingPhases.length > 0) {
            // If multiple phases match, determine which one to highlight based on scroll position
            // For version-iteration, check if we're in the early part (Architecture) or later (Design)
            if (matchingPhases.length > 1 && sectionId === 'version-iteration') {
              const element = entry.target
              const rect = element.getBoundingClientRect()
              const scrollProgress = (window.innerHeight - rect.top) / (rect.height + window.innerHeight)
              // If we're in the first 60% of the section, highlight Architecture (Phase 2)
              // Otherwise highlight Design (Phase 3)
              setActivePhase(scrollProgress < 0.6 ? matchingPhases[0].id : matchingPhases[1].id)
            } else {
              setActivePhase(matchingPhases[0].id)
            }
          }
        }
      })
    }, observerOptions)

    // Wait a bit for DOM to be ready, then observe all sections
    const timeoutId = setTimeout(() => {
      phases.forEach((phase) => {
        const element = document.getElementById(phase.sectionId)
        if (element) {
          observer.observe(element)
        }
      })
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      phases.forEach((phase) => {
        const element = document.getElementById(phase.sectionId)
        if (element) {
          observer.unobserve(element)
        }
      })
      observer.disconnect()
    }
  }, [phases])

  const scrollToSection = (sectionId: string) => {
    if (typeof window === 'undefined') return
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 150 // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  // Show/hide nav based on scroll position (like SectionNav did)
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      // Show earlier to ensure visibility - check if we've scrolled past the hero/overview
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check scroll indicators for mobile nav
  useEffect(() => {
    if (typeof window === 'undefined') return

    const checkScrollIndicators = () => {
      const scrollContainer = document.querySelector('[aria-label="Process timeline navigation mobile"] .overflow-x-auto') as HTMLElement
      if (scrollContainer) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer
        setShowLeftIndicator(scrollLeft > 10)
        setShowRightIndicator(scrollLeft < scrollWidth - clientWidth - 10)
      }
    }

    // Check on mount and resize
    checkScrollIndicators()
    window.addEventListener('resize', checkScrollIndicators, { passive: true })

    const scrollContainer = document.querySelector('[aria-label="Process timeline navigation mobile"] .overflow-x-auto')
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollIndicators, { passive: true })
      
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollIndicators)
        window.removeEventListener('resize', checkScrollIndicators)
      }
    }

    return () => {
      window.removeEventListener('resize', checkScrollIndicators)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Desktop: Fixed right sidebar */}
      <nav
        aria-label="Process timeline navigation"
        className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-50"
      >
        <div className={`${isLightBackground ? 'bg-white' : 'bg-[var(--bg-dark)]'} backdrop-blur-md rounded-lg border-2 ${isLightBackground ? 'border-black/20' : 'border-white/30'} p-4 shadow-2xl`}>
          <div className="space-y-2">
            <div className={`text-xs font-mono uppercase tracking-wider mb-3 px-2 font-semibold ${isLightBackground ? 'text-[#1A1A1A]' : 'text-white'}`}>
              Process Timeline
            </div>
            {phases.map((phase, index) => {
              const isActive = activePhase === phase.id
              return (
                <button
                  key={phase.id}
                  onClick={() => scrollToSection(phase.sectionId)}
                  className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors min-h-[44px] touch-manipulation ${
                    isActive
                      ? 'bg-[var(--accent-teal)]/20 text-[var(--accent-teal)] font-semibold border border-[var(--accent-teal)]/30'
                      : isLightBackground 
                        ? 'text-[#1A1A1A] hover:text-[#1A1A1A] hover:bg-black/10 border border-transparent'
                        : 'text-white hover:text-white hover:bg-white/10 border border-transparent'
                  }`}
                  aria-label={`Navigate to ${phase.phase} phase`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs">{index + 1}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium truncate max-w-[140px]">{phase.phase}</div>
                      <div className="text-xs opacity-70">{phase.duration}</div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Mobile: Horizontal scrollable nav at top */}
      <nav 
        className="fixed top-20 left-0 right-0 z-50 lg:hidden bg-[var(--bg-dark)] backdrop-blur-md border-b-2 border-white/30 shadow-2xl"
        aria-label="Process timeline navigation mobile"
      >
        <div className="relative">
          <div 
            className="overflow-x-auto scrollbar-hide"
            onScroll={(e) => {
              if (typeof window === 'undefined') return
              const target = e.currentTarget
              const { scrollLeft, scrollWidth, clientWidth } = target
              setShowLeftIndicator(scrollLeft > 10)
              setShowRightIndicator(scrollLeft < scrollWidth - clientWidth - 10)
            }}
          >
            <div className="flex gap-2 px-4 py-3 min-w-max">
              {phases.map((phase, index) => {
                const isActive = activePhase === phase.id
                return (
                  <button
                    key={phase.id}
                    onClick={() => scrollToSection(phase.sectionId)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors min-h-[44px] min-w-[44px] touch-manipulation ${
                      isActive
                        ? 'bg-[var(--accent-teal)]/30 text-[var(--accent-teal)] font-semibold border-2 border-[var(--accent-teal)]/50'
                        : 'text-white hover:text-white hover:bg-white/15 border border-white/20'
                    }`}
                    aria-label={`Navigate to ${phase.phase} phase`}
                  >
                    <span className="font-mono text-xs">{index + 1}</span>
                    <span className="text-xs">{phase.phase}</span>
                  </button>
                )
              })}
            </div>
          </div>
          {/* Scroll indicators */}
          {showLeftIndicator && (
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[var(--bg-dark)] to-transparent pointer-events-none"></div>
          )}
          {showRightIndicator && (
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[var(--bg-dark)] to-transparent pointer-events-none"></div>
          )}
        </div>
      </nav>
    </>
  )
}

