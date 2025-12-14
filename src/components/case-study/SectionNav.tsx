'use client'

import { useState, useEffect, useRef } from 'react'
import { CaseStudySection } from '@/types/caseStudy'
import { useScrollManager } from '@/hooks/useScrollManager'

interface SectionNavProps {
  sections: CaseStudySection[]
}

export default function SectionNav({ sections }: SectionNavProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const [showLeftIndicator, setShowLeftIndicator] = useState(false)
  const [showRightIndicator, setShowRightIndicator] = useState(false)
  const [mainNavHeight, setMainNavHeight] = useState(64)
  const navRef = useRef<HTMLElement>(null)

  // Show nav after scrolling past hero
  useScrollManager((scrollY) => {
    const hasScrolled = scrollY > 300
    setIsVisible(hasScrolled)
  }, [])

  // Track active section based on scroll position
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '-20% 0px -60% 0px', threshold: 0 }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id)
      })
    }, observerOptions)

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (element) observer.unobserve(element)
      })
      observer.disconnect()
    }
  }, [sections])

  // Scroll to section handler
  const scrollToSection = (sectionId: string) => {
    if (typeof window === 'undefined') return
    const element = document.getElementById(sectionId)
    if (element) {
      const header = document.querySelector('header')
      const sectionNav = navRef.current
      const mainNav = header ? header.getBoundingClientRect().height : 64
      const secNav = sectionNav ? sectionNav.getBoundingClientRect().height : 48
      const offset = mainNav + secNav + 20
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      window.history.pushState(null, '', `#${sectionId}`)
    }
  }

  // Check scroll indicators for mobile
  useEffect(() => {
    if (!isVisible) return

    const checkScrollIndicators = () => {
      if (navRef.current) {
        const scrollContainer = navRef.current.querySelector('.overflow-x-auto')
        if (scrollContainer) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainer
          setShowLeftIndicator(scrollLeft > 10)
          setShowRightIndicator(scrollLeft < scrollWidth - clientWidth - 10)
        }
      }
    }

    checkScrollIndicators()
    window.addEventListener('resize', checkScrollIndicators)
    return () => window.removeEventListener('resize', checkScrollIndicators)
  }, [isVisible])

  // Track main nav height for positioning
  useEffect(() => {
    if (typeof window === 'undefined') return

    const updateNavHeight = () => {
      const header = document.querySelector('header')
      if (header) {
        const height = header.getBoundingClientRect().height
        setMainNavHeight(height > 0 ? height : 64)
      }
    }

    updateNavHeight()
    window.addEventListener('resize', updateNavHeight)

    const observer = new MutationObserver(updateNavHeight)
    const header = document.querySelector('header')
    if (header) observer.observe(header, { attributes: true, attributeFilter: ['class', 'style'] })

    return () => {
      window.removeEventListener('resize', updateNavHeight)
      observer.disconnect()
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <nav
      ref={navRef}
      className={`
        fixed left-0 right-0 z-40
        h-12 
        bg-white/90 backdrop-blur-md 
        border-b border-slate-200
        transition-all duration-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
      `}
      style={{ top: `${mainNavHeight}px` }}
      aria-label="Case study section navigation"
    >
      <div className="relative h-full">
        {/* Scrollable Container */}
        <div
          className="overflow-x-auto scrollbar-hide h-full"
          onScroll={(e) => {
            if (typeof window === 'undefined') return
            const target = e.currentTarget
            const { scrollLeft, scrollWidth, clientWidth } = target
            setShowLeftIndicator(scrollLeft > 10)
            setShowRightIndicator(scrollLeft < scrollWidth - clientWidth - 10)
          }}
        >
          {/* Tab Links - Centered */}
          <div className="flex items-center justify-center gap-6 md:gap-8 px-4 md:px-8 h-full min-w-max max-w-[1440px] mx-auto">
            {sections.map((section) => {
              const isActive = activeSection === section.id
              const rawFirstWord = section.title.split(' ')[0]
              // Remove any trailing colon so nav shows DISCOVER not DISCOVER:
              const cleanedWord = rawFirstWord.replace(/:$/, '')
              const firstLetter = cleanedWord.charAt(0)
              const restOfWord = cleanedWord.slice(1)

              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      scrollToSection(section.id)
                    }
                  }}
                  className={`
                    relative
                    font-mono text-xs uppercase tracking-widest
                    whitespace-nowrap
                    transition-all duration-200
                    h-full flex items-center
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)]/50
                    ${isActive
                      ? 'text-[var(--accent-teal)] font-semibold'
                      : 'text-slate-500 hover:text-[var(--accent-teal)]'
                    }
                  `}
                  aria-label={`Navigate to ${section.title}`}
                  aria-current={isActive ? 'true' : 'false'}
                >
                  {/* Bold first letter, rest normal */}
                  <span className="font-bold">{firstLetter}</span>
                  <span>{restOfWord}</span>

                  {/* Active Indicator - Bottom Border */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent-teal)]" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Scroll Indicators (for mobile) */}
        {showLeftIndicator && (
          <div
            className="absolute left-0 top-0 bottom-0 w-8 pointer-events-none"
            style={{ background: 'linear-gradient(to right, rgba(255, 255, 255, 0.95), transparent)' }}
          />
        )}
        {showRightIndicator && (
          <div
            className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none"
            style={{ background: 'linear-gradient(to left, rgba(255, 255, 255, 0.95), transparent)' }}
          />
        )}
      </div>
    </nav>
  )
}
