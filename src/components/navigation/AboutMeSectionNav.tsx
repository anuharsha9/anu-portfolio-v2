'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { useScrollManager } from '@/hooks/useScrollManager'

interface Section {
  id: string
  label: string
}

const sections: Section[] = [
  { id: 'intro-video', label: 'Intro Video' },
  { id: 'origin-story', label: 'Origin Story' },
  { id: 'how-i-work-with-ai', label: 'How I Work with AI' },
  { id: 'design-writings', label: 'Design Writings' },
  { id: 'outside-of-work', label: 'Outside of Work' },
  { id: 'contact', label: 'Contact' },
]

export default function AboutMeSectionNav() {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const [showLeftIndicator, setShowLeftIndicator] = useState(false)
  const [showRightIndicator, setShowRightIndicator] = useState(false)
  const [currentBgIsLight, setCurrentBgIsLight] = useState(true) // About Me page is mostly light
  const navRef = useRef<HTMLElement>(null)

  // Only show on About Me page
  const isAboutMePage = pathname === '/me'

  // Ensure component only renders on client
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Show after scrolling past hero - always visible once past hero (no hide/show on scroll)
  useScrollManager((scrollY, viewportHeight) => {
    if (!isAboutMePage) return
    
    // Show after scrolling past hero (about 100vh) - always visible once past
    const pastHero = scrollY > viewportHeight * 0.8
    setIsVisible(pastHero)
  }, [isAboutMePage])

  // Track active section and detect background color
  useEffect(() => {
    if (!isAboutMePage || typeof window === 'undefined') return

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
          
          // Detect background color of the section
          const section = entry.target as HTMLElement
          const computedStyle = window.getComputedStyle(section)
          const bgColor = computedStyle.backgroundColor
          // Check if background is light (white/light gray) or dark
          const isLight = bgColor.includes('rgb(255') || bgColor.includes('rgb(250') || bgColor.includes('rgb(245') || bgColor.includes('rgb(15') // Also check for dark backgrounds
          setCurrentBgIsLight(!bgColor.includes('rgb(10')) // Dark background is rgb(10, 10, 11)
        }
      })
    }, observerOptions)

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (element) {
          observer.unobserve(element)
        }
      })
      observer.disconnect()
    }
  }, [isAboutMePage])

  const scrollToSection = (sectionId: string) => {
    if (typeof window === 'undefined') return
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 60 // Main nav height
      const sectionNavHeight = 60 // This nav height
      const offset = navHeight + sectionNavHeight + 20 // Extra padding
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      
      // Update URL hash
      window.history.pushState(null, '', `#${sectionId}`)
    }
  }

  // Check scroll indicators
  useEffect(() => {
    if (!isAboutMePage || !isVisible) return

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

    return () => {
      window.removeEventListener('resize', checkScrollIndicators)
    }
  }, [isAboutMePage, isVisible])

  // Don't render anything during SSR
  if (typeof window === 'undefined' || !isMounted || !isAboutMePage || !isVisible) return null

  const textColor = currentBgIsLight ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = currentBgIsLight ? 'text-[#666666]' : 'text-white/70'
  const bgColor = currentBgIsLight ? 'bg-white/95' : 'bg-[var(--bg-dark)]/95'
  const borderColor = currentBgIsLight ? 'border-black/10' : 'border-white/20'

  return (
    <nav 
      ref={navRef}
      className={`fixed top-[60px] left-0 right-0 z-30 ${bgColor} backdrop-blur-md border-b ${borderColor} shadow-lg transition-all duration-300`}
      aria-label="About Me page section navigation"
      style={{ top: '60px' }} // Position below main nav (main nav is ~60px tall)
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
          <div className="flex gap-2 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-2.5 min-w-max max-w-[1200px] mx-auto justify-end">
            {sections.map((section) => {
              const isActive = activeSection === section.id
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
                  className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm whitespace-nowrap transition-all duration-200 min-h-[40px] md:min-h-[44px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-[var(--accent-teal)] focus:ring-offset-2 focus:ring-offset-transparent ${
                    isActive
                      ? `bg-[var(--accent-teal)]/20 text-[var(--accent-teal)] font-semibold`
                      : currentBgIsLight
                        ? 'text-[#1A1A1A] hover:text-[#1A1A1A] hover:bg-black/5 border border-transparent hover:border-black/10'
                        : 'text-white/80 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20'
                  }`}
                  aria-label={`Navigate to ${section.label}`}
                  aria-current={isActive ? 'true' : 'false'}
                >
                  <span className="hidden sm:inline">{section.label}</span>
                  <span className="sm:hidden text-[10px]">{section.label.split(' ')[0]}</span>
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

