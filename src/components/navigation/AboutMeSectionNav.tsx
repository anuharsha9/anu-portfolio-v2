'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { useScrollManager } from '@/hooks/useScrollManager'

interface Section {
  id: string
  label: string
}

const sections: Section[] = [
  { id: 'how-i-work-with-ai', label: 'How I Work with AI' },
  { id: 'adp-list', label: 'ADP List' },
  { id: 'design-writing', label: 'Design Writing' },
]

export default function AboutMeSectionNav() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const [isLightBackground, setIsLightBackground] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  // Only show on /me page
  const isAboutMePage = pathname === '/me' || pathname === '/me/'

  const [hasShadow, setHasShadow] = useState(false)

  // Show on any scroll, just like main nav (carbon copy behavior)
  useScrollManager((scrollY) => {
    if (!isAboutMePage) return

    // Show on any scroll (not just past hero) - matches main nav behavior
    const hasScrolled = scrollY > 0
    setIsVisible(hasScrolled)
    setHasShadow(hasScrolled)
  }, [isAboutMePage])

  // Use same background detection as main nav (carbon copy)
  useScrollManager((scrollY) => {
    if (!isAboutMePage) return

    // Detect background color based on what's behind the section nav (same logic as main nav)
    if (typeof window !== 'undefined' && scrollY > 0 && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect()
      // Sample multiple points to get a better sense of the background
      const samplePoints = [
        { x: window.innerWidth / 4, y: navRect.top - 5 },
        { x: window.innerWidth / 2, y: navRect.top - 5 },
        { x: (window.innerWidth * 3) / 4, y: navRect.top - 5 },
      ]

      let lightCount = 0
      let darkCount = 0

      samplePoints.forEach(point => {
        const elementBelow = document.elementFromPoint(point.x, point.y)
        if (elementBelow) {
          // Walk up the DOM tree to find the actual background
          let currentElement: Element | null = elementBelow
          let bgColor = ''

          while (currentElement && !bgColor) {
            const computedStyle = window.getComputedStyle(currentElement)
            bgColor = computedStyle.backgroundColor

            if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
              const hasLightSurface = currentElement.classList.contains('surface-light') ||
                currentElement.classList.contains('surface-light-alt')
              const hasDarkSurface = currentElement.classList.contains('surface-dark') ||
                currentElement.classList.contains('surface-dark-alt')

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
                const r = parseInt(rgb[0])
                const g = parseInt(rgb[1])
                const b = parseInt(rgb[2])
                const brightness = (r * 299 + g * 587 + b * 114) / 1000

                if (brightness > 128) {
                  lightCount++
                } else {
                  darkCount++
                }
              }
              break
            }
          }
        }
      })

      // Determine if background is predominantly light or dark
      setIsLightBackground(lightCount > darkCount)
    } else if (scrollY === 0) {
      // At top of page, default to dark
      setIsLightBackground(false)
    }
  }, [isAboutMePage])

  // Track active section
  useEffect(() => {
    if (!isAboutMePage) return

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
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
      // Calculate actual nav heights dynamically
      const header = document.querySelector('header')
      const sectionNav = navRef.current
      const mainNavHeight = header ? header.getBoundingClientRect().height : 72 // Main nav is now taller
      const sectionNavHeight = sectionNav ? sectionNav.getBoundingClientRect().height : 48 // Section nav is now shorter
      const offset = mainNavHeight + sectionNavHeight + 20
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

  // Calculate main nav height dynamically
  const [mainNavHeight, setMainNavHeight] = useState(72) // Main nav is now taller

  useEffect(() => {
    if (typeof window === 'undefined' || !isAboutMePage) return

    const updateNavHeight = () => {
      const header = document.querySelector('header')
      if (header) {
        const height = header.getBoundingClientRect().height
        setMainNavHeight(height > 0 ? height : 64)
      }
    }

    updateNavHeight()
    window.addEventListener('resize', updateNavHeight)

    // Also check when header visibility changes
    const observer = new MutationObserver(updateNavHeight)
    const header = document.querySelector('header')
    if (header) {
      observer.observe(header, { attributes: true, attributeFilter: ['class', 'style'] })
    }

    return () => {
      window.removeEventListener('resize', updateNavHeight)
      observer.disconnect()
    }
  }, [isAboutMePage, isVisible])

  if (!isAboutMePage || !isVisible) return null

  const bgStyle = isLightBackground
    ? { backgroundColor: 'rgba(250, 250, 249, 0.85)' }
    : { backgroundColor: 'rgba(10, 10, 11, 0.85)' }

  const textColor = isLightBackground ? 'text-[var(--text-primary-light)]' : 'text-white'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/20'

  return (
    <nav
      ref={navRef}
      className={`fixed left-0 right-0 backdrop-blur-md transition-all duration-500 ${isVisible
        ? 'opacity-100 translate-y-0 h-auto'
        : 'opacity-0 -translate-y-full pointer-events-none invisible h-0 overflow-hidden'
        } ${hasShadow ? 'shadow-lg' : ''}`}
      style={{
        top: `${mainNavHeight}px`,
        zIndex: 9999, // Just below main nav (10000)
        isolation: 'isolate',
        position: 'fixed',
        ...bgStyle,
        borderBottom: isVisible ? (isLightBackground ? '1px solid rgba(0,0,0,0.05)' : '1px solid rgba(255,255,255,0.05)') : 'transparent'
      }}
      aria-label="About Me section navigation"
    >
      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex gap-2 py-1 sm:py-1.5 justify-center">
          {sections.map((section) => {
            const isActive = activeSection === section.id
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center gap-2 px-3 md:px-4 py-1 rounded-lg text-xs md:text-sm whitespace-nowrap transition-all duration-200 min-h-[32px] md:min-h-[36px] focus:outline-none ${isActive
                  ? `bg-[var(--accent-teal)]/20 text-[var(--accent-teal)] font-semibold border-0`
                  : isLightBackground
                    ? 'text-[var(--text-primary-light)] hover:text-[var(--text-primary-light)] hover:bg-black/5 border-0'
                    : 'text-white/80 hover:text-white hover:bg-white/10 border-0'
                  }`}
                aria-label={`Navigate to ${section.label}`}
                aria-current={isActive ? 'true' : 'false'}
              >
                <span>{section.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
