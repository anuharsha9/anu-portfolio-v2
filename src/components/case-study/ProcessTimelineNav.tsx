'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface FrameworkPrinciple {
  id: string
  letter: string
  title: string
  sectionId: string
}

interface ProcessTimelineNavProps {
  principles: FrameworkPrinciple[]
  isLightBackground?: boolean
}

export default function ProcessTimelineNav({ principles, isLightBackground = false }: ProcessTimelineNavProps) {
  const pathname = usePathname()
  const [activePrinciple, setActivePrinciple] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showLeftIndicator, setShowLeftIndicator] = useState(false)
  const [showRightIndicator, setShowRightIndicator] = useState(false)
  const [currentBgIsLight, setCurrentBgIsLight] = useState(false)
  const textColor = currentBgIsLight ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = currentBgIsLight ? 'text-[#666666]' : 'text-white/70'
  const accentColor = 'var(--accent-teal)'

  // Check if we're on a case study page (where main nav is hidden)
  const isCaseStudy = pathname?.startsWith('/case-study') || 
                      pathname?.includes('/reportcaster') || 
                      pathname?.includes('/ml-functions') || 
                      pathname?.includes('/iq-plugin')

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
          // Find all principles that map to this section
          const matchingPrinciples = principles.filter((p) => p.sectionId === sectionId)
          if (matchingPrinciples.length > 0) {
            // If multiple principles match, determine which one to highlight based on scroll position
            // For version-iteration, check if we're in the early part or later
            if (matchingPrinciples.length > 1 && sectionId === 'version-iteration') {
              const element = entry.target
              const rect = element.getBoundingClientRect()
              const scrollProgress = (window.innerHeight - rect.top) / (rect.height + window.innerHeight)
              // If we're in the first 60% of the section, highlight first principle
              // Otherwise highlight second principle
              setActivePrinciple(scrollProgress < 0.6 ? matchingPrinciples[0].id : matchingPrinciples[1].id)
            } else {
              setActivePrinciple(matchingPrinciples[0].id)
            }
          }
        }
      })
    }, observerOptions)

    // Wait a bit for DOM to be ready, then observe all sections
    const timeoutId = setTimeout(() => {
      principles.forEach((principle) => {
        const element = document.getElementById(principle.sectionId)
        if (element) {
          observer.observe(element)
        }
      })
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      principles.forEach((principle) => {
        const element = document.getElementById(principle.sectionId)
        if (element) {
          observer.unobserve(element)
        }
      })
      observer.disconnect()
    }
  }, [principles])

  const scrollToSection = (sectionId: string) => {
    if (typeof window === 'undefined') return
    const element = document.getElementById(sectionId)
    if (element) {
      // Adjust offset based on whether we're on a case study (no main nav)
      const headerHeight = isCaseStudy ? 0 : 64 // 16 * 4 = 64px (top-16)
      const navHeight = 60 // Approximate nav height
      const offset = headerHeight + navHeight + 20 // Extra padding
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  // Show/hide nav based on scroll position - appear after scrolling past video/prototype section
  // Also detect current background color for dynamic text color
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      // Check if we've scrolled past the prototype/video section
      const prototypeSection = document.getElementById('prototype')
      const frameworkSection = document.getElementById('framework-connection')
      
      if (prototypeSection && frameworkSection) {
        const prototypeRect = prototypeSection.getBoundingClientRect()
        const frameworkRect = frameworkSection.getBoundingClientRect()
        
        // Show nav when:
        // 1. User has scrolled past the prototype section (bottom of prototype is above viewport)
        // 2. AND the framework section is in view or approaching
        const hasScrolledPastPrototype = prototypeRect.bottom < window.innerHeight
        const isFrameworkInView = frameworkRect.top < window.innerHeight && frameworkRect.bottom > 0
        
        setIsVisible(hasScrolledPastPrototype && isFrameworkInView)
      } else if (frameworkSection) {
        // Fallback: if no prototype section, show when framework is in view
        const rect = frameworkSection.getBoundingClientRect()
        setIsVisible(rect.top < window.innerHeight && rect.bottom > 0)
      } else {
        // Final fallback: show after scrolling past 800px
        setIsVisible(window.scrollY > 800)
      }

      // Detect current background color by checking the section at the top of viewport
      const navElement = document.querySelector('[aria-label="D.E.S.I.G.N. Framework navigation"]')
      if (navElement) {
        const navRect = navElement.getBoundingClientRect()
        const viewportCenter = navRect.top + navRect.height / 2
        
        // Find the section that contains the center of the nav
        const allSections = document.querySelectorAll('[class*="surface-"]')
        let currentSection: HTMLElement | null = null
        
        for (let i = 0; i < allSections.length; i++) {
          const section = allSections[i] as HTMLElement
          const sectionRect = section.getBoundingClientRect()
          if (viewportCenter >= sectionRect.top && viewportCenter <= sectionRect.bottom) {
            currentSection = section
            break
          }
        }
        
        // Check if current section has light background
        if (currentSection) {
          const hasLightBg = currentSection.classList.contains('surface-light')
          setCurrentBgIsLight(hasLightBg)
        } else {
          // Fallback: check element directly below nav
          const elementBelow = document.elementFromPoint(window.innerWidth / 2, navRect.bottom + 50)
          if (elementBelow) {
            const section = elementBelow.closest('[class*="surface-"]')
            if (section) {
              const hasLightBg = section.classList.contains('surface-light')
              setCurrentBgIsLight(hasLightBg)
            }
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check scroll indicators for mobile nav
  useEffect(() => {
    if (typeof window === 'undefined') return

    const checkScrollIndicators = () => {
      const scrollContainer = document.querySelector('[aria-label="D.E.S.I.G.N. Framework navigation"] .overflow-x-auto') as HTMLElement
      if (scrollContainer) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer
        setShowLeftIndicator(scrollLeft > 10)
        setShowRightIndicator(scrollLeft < scrollWidth - clientWidth - 10)
      }
    }

    // Check on mount and resize
    checkScrollIndicators()
    window.addEventListener('resize', checkScrollIndicators, { passive: true })

    const scrollContainer = document.querySelector('[aria-label="D.E.S.I.G.N. Framework navigation"] .overflow-x-auto')
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

  const bgColor = currentBgIsLight ? 'bg-white/95' : 'bg-[var(--bg-dark)]/95'
  const borderColor = currentBgIsLight ? 'border-black/10' : 'border-white/20'

  // On case study pages, main nav is hidden, so nav should be at top-0
  // On other pages, nav should be at top-16 to account for main nav
  const topPosition = isCaseStudy ? 'top-0' : 'top-16'

  return (
    <nav 
      className={`fixed ${topPosition} left-0 right-0 z-[9999] ${bgColor} backdrop-blur-md border-b ${borderColor} shadow-lg transition-all duration-300`}
      aria-label="D.E.S.I.G.N. Framework navigation"
      style={{ zIndex: 9999 }}
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
          <div className="flex gap-2 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-2.5 min-w-max max-w-[1200px] mx-auto">
            {/* Framework label - only show on larger screens */}
            <div className={`hidden md:flex items-center px-3 text-xs font-mono uppercase tracking-wider font-semibold ${currentBgIsLight ? 'text-[#1A1A1A]' : 'text-white/80'} border-r ${borderColor} mr-2`}>
              D.E.S.I.G.N.
            </div>
            
            {principles.map((principle) => {
              const isActive = activePrinciple === principle.id
              return (
                <button
                  key={principle.id}
                  onClick={() => scrollToSection(principle.sectionId)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      scrollToSection(principle.sectionId)
                    }
                  }}
                  className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm whitespace-nowrap transition-all duration-200 min-h-[40px] md:min-h-[44px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-[var(--accent-teal)] focus:ring-offset-2 focus:ring-offset-transparent ${
                    isActive
                      ? `bg-[var(--accent-teal)]/20 text-[var(--accent-teal)] font-semibold`
                      : currentBgIsLight
                        ? 'text-[#1A1A1A] hover:text-[#1A1A1A] hover:bg-black/5 border border-transparent hover:border-black/10'
                        : 'text-white/80 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20'
                  }`}
                  aria-label={`Navigate to ${principle.letter}: ${principle.title}`}
                  aria-current={isActive ? 'true' : 'false'}
                >
                  <span className={`font-mono text-xs md:text-sm font-bold ${isActive ? 'text-[var(--accent-teal)]' : (currentBgIsLight ? 'text-[#1A1A1A]' : 'text-white/80')}`}>
                    {principle.letter}
                  </span>
                  <span className="hidden sm:inline">{principle.title}</span>
                  <span className="sm:hidden text-[10px]">{principle.title.split(' ')[0]}</span>
                </button>
              )
            })}
          </div>
        </div>
        
        {/* Scroll indicators */}
        {showLeftIndicator && (
          <div className={`absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r ${currentBgIsLight ? 'from-white/95' : 'from-[var(--bg-dark)]/95'} to-transparent pointer-events-none`}></div>
        )}
        {showRightIndicator && (
          <div className={`absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l ${currentBgIsLight ? 'from-white/95' : 'from-[var(--bg-dark)]/95'} to-transparent pointer-events-none`}></div>
        )}
      </div>
    </nav>
  )
}

