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
  const [currentBgIsLight, setCurrentBgIsLight] = useState(false)
  const [hasShadow, setHasShadow] = useState(false)
  const [mainNavHeight, setMainNavHeight] = useState(72)
  const navRef = useRef<HTMLElement>(null)

  useScrollManager((scrollY) => {
    const hasScrolled = scrollY > 0
    setIsVisible(hasScrolled)
    setHasShadow(hasScrolled)
  }, [])

  useScrollManager((scrollY) => {
    if (typeof window !== 'undefined' && scrollY > 0 && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect()
      const samplePoints = [
        { x: window.innerWidth / 4, y: navRect.top - 5 },
        { x: window.innerWidth / 2, y: navRect.top - 5 },
        { x: (window.innerWidth * 3) / 4, y: navRect.top - 5 },
      ]

      let lightCount = 0
      let darkCount = 0

      samplePoints.forEach((point) => {
        const elementBelow = document.elementFromPoint(point.x, point.y)
        if (elementBelow) {
          let currentElement: Element | null = elementBelow
          let bgColor = ''

          while (currentElement && !bgColor) {
            const computedStyle = window.getComputedStyle(currentElement)
            bgColor = computedStyle.backgroundColor

            if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
              const hasLightSurface = currentElement.classList.contains('surface-light') || currentElement.classList.contains('surface-light-alt')
              const hasDarkSurface = currentElement.classList.contains('surface-dark') || currentElement.classList.contains('surface-dark-alt')

              if (hasLightSurface) {
                lightCount++
                break
              } else if (hasDarkSurface) {
                darkCount++
                break
              }
              currentElement = currentElement.parentElement
            } else {
              const rgb = bgColor.match(/\d+/g)
              if (rgb && rgb.length >= 3) {
                const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000
                if (brightness > 128) lightCount++
                else darkCount++
              }
              break
            }
          }
        }
      })

      setCurrentBgIsLight(lightCount > darkCount)
    } else if (scrollY === 0) {
      setCurrentBgIsLight(false)
    }
  }, [])

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

  const scrollToSection = (sectionId: string) => {
    if (typeof window === 'undefined') return
    const element = document.getElementById(sectionId)
    if (element) {
      const header = document.querySelector('header')
      const sectionNav = navRef.current
      const mainNav = header ? header.getBoundingClientRect().height : 72
      const secNav = sectionNav ? sectionNav.getBoundingClientRect().height : 48
      const offset = mainNav + secNav + 20
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      window.history.pushState(null, '', `#${sectionId}`)
    }
  }

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

  const bgStyle = currentBgIsLight ? { backgroundColor: 'rgba(250, 250, 249, 0.85)' } : { backgroundColor: 'rgba(10, 10, 11, 0.85)' }

  return (
    <nav ref={navRef} className={`fixed left-0 right-0 backdrop-blur-md transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0 h-auto' : 'opacity-0 -translate-y-full pointer-events-none invisible h-0 overflow-hidden'} ${hasShadow ? 'shadow-lg' : ''}`} style={{ top: `${mainNavHeight}px`, zIndex: 9999, isolation: 'isolate', position: 'fixed', ...bgStyle, borderBottom: isVisible ? (currentBgIsLight ? '1px solid rgba(0,0,0,0.05)' : '1px solid rgba(255,255,255,0.05)') : 'transparent' }} aria-label="Case study section navigation">
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
          <div className="flex gap-2 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-1 sm:py-1.5 min-w-max max-w-[1200px] mx-auto justify-center">
            {sections.map((section) => {
              const isActive = activeSection === section.id
              const firstWord = section.title.split(' ')[0]
              const firstLetter = firstWord.charAt(0)
              const restOfWord = firstWord.slice(1)
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
                  className={`flex items-center gap-2 px-3 md:px-4 py-1 rounded-lg text-xs md:text-sm whitespace-nowrap transition-all duration-200 min-h-[32px] md:min-h-[36px] touch-manipulation focus:outline-none ${isActive ? `bg-[var(--accent-teal)]/20 text-[var(--accent-teal)] font-semibold border-0` : currentBgIsLight ? 'text-[var(--text-primary-light)] hover:text-[var(--text-primary-light)] hover:bg-black/5 border-0' : 'text-white/80 hover:text-white hover:bg-white/10 border-0'}`}
                  aria-label={`Navigate to ${section.title}`}
                  aria-current={isActive ? 'true' : 'false'}
                >
                  <span>
                    <span className="font-bold">{firstLetter}</span>
                    {restOfWord}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {showLeftIndicator && <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r to-transparent pointer-events-none" style={currentBgIsLight ? { background: 'linear-gradient(to right, rgba(250, 250, 249, 0.95), transparent)' } : { background: 'linear-gradient(to right, rgba(10, 10, 11, 0.95), transparent)' }}></div>}
        {showRightIndicator && <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l to-transparent pointer-events-none" style={currentBgIsLight ? { background: 'linear-gradient(to left, rgba(250, 250, 249, 0.95), transparent)' } : { background: 'linear-gradient(to left, rgba(10, 10, 11, 0.95), transparent)' }}></div>}
      </div>
    </nav>
  )
}
