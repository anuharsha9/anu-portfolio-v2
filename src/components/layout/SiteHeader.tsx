'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import AnimatedSignatureLogo from '@/components/brand/AnimatedSignatureLogo'
import { trackResumeDownload } from '@/components/analytics/GoogleAnalytics'
import { useScrollManager } from '@/hooks/useScrollManager'
import MobileMenu from './MobileMenu'
import CaseStudiesDropdown from './CaseStudiesDropdown'

export default function SiteHeader() {
  const pathname = usePathname()
  const isLandingPage = pathname === '/'
  const isCaseStudyPage = pathname?.startsWith('/work/') ?? false

  // Always visible on case study pages, otherwise start hidden
  const [isVisible, setIsVisible] = useState(isCaseStudyPage)

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    // Always show header on mobile (for hamburger menu access)
    const isMobile = window.innerWidth < 1024 // lg breakpoint
    if (isMobile) {
      setIsVisible(true)
      return
    }

    const handleResize = () => {
      const isMobileNow = window.innerWidth < 1024
      if (isMobileNow) {
        setIsVisible(true)
      } else {
        // On desktop, hide nav initially and let scroll manager handle visibility
        setIsVisible(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const [isLightBackground, setIsLightBackground] = useState(false)
  const [hasShadow, setHasShadow] = useState(false)

  // Use centralized scroll manager
  useScrollManager((scrollY) => {
    // Show header on any scroll (not just 50px)
    const hasScrolled = scrollY > 0
    setIsVisible(hasScrolled)
    setHasShadow(hasScrolled)

    // Detect background color based on what's behind the header
    if (typeof window !== 'undefined' && hasScrolled) {
      const headerElement = document.querySelector('header')
      if (headerElement) {
        const headerRect = headerElement.getBoundingClientRect()
        // Sample multiple points to get a better sense of the background
        const samplePoints = [
          { x: window.innerWidth / 4, y: headerRect.bottom + 5 },
          { x: window.innerWidth / 2, y: headerRect.bottom + 5 },
          { x: (window.innerWidth * 3) / 4, y: headerRect.bottom + 5 },
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

              // Check if background is transparent or has an image
              if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
                const bgImage = computedStyle.backgroundImage
                if (bgImage && bgImage !== 'none') {
                  // If there's a background image, assume it might be light or dark
                  // For safety, we'll use a semi-transparent overlay approach
                  break
                }
                currentElement = currentElement.parentElement
              } else {
                break
              }
            }

            if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
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
            } else {
              // If we can't determine, check for surface classes
              const hasLightSurface = currentElement?.classList.contains('surface-light') ||
                currentElement?.classList.contains('surface-light-alt')
              const hasDarkSurface = currentElement?.classList.contains('surface-dark') ||
                currentElement?.classList.contains('surface-dark-alt')

              if (hasLightSurface) {
                lightCount++
              } else if (hasDarkSurface) {
                darkCount++
              }
            }
          }
        })

        // Determine if background is predominantly light or dark
        setIsLightBackground(lightCount > darkCount)
      }
    } else if (!hasScrolled) {
      // At top of page, default to dark
      setIsLightBackground(false)
    }
  }, [isLandingPage, isCaseStudyPage])

  // Use semi-transparent background with backdrop blur for better readability over images
  const headerBgStyle = isLightBackground
    ? { backgroundColor: 'rgba(250, 250, 249, 0.85)' } // Light background with transparency
    : { backgroundColor: 'rgba(10, 10, 11, 0.85)' } // Dark background with transparency

  return (
    <header
      className={`fixed top-0 left-0 right-0 backdrop-blur-md transition-all duration-500 ${isVisible
        ? 'opacity-100 translate-y-0 h-auto'
        : 'opacity-0 -translate-y-full pointer-events-none invisible h-0 overflow-hidden'
        } ${hasShadow ? 'shadow-lg' : ''}`}
      style={{
        zIndex: 10000,
        isolation: 'isolate',
        position: 'fixed',
        ...headerBgStyle,
        borderBottom: isVisible ? (isLightBackground ? '1px solid rgba(0,0,0,0.05)' : '1px solid rgba(255,255,255,0.05)') : 'transparent'
      }}
    >
      <nav className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3 sm:py-4 flex items-center justify-center relative">
        {/* Logo - positioned absolutely on the left */}
        <Link
          href="/"
          className="absolute left-4 xs:left-5 sm:left-6 md:left-8 lg:left-12 xl:left-16 flex items-center transition-colors group"
        >
          <div className={`w-[33.6px] h-[33.6px] ${isLightBackground ? 'text-[var(--text-primary-light)] group-hover:text-green-500' : 'text-white group-hover:text-green-400'} group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.4)] transition-all duration-300`}>
            <AnimatedSignatureLogo
              className="w-full h-full"
              duration={16000}
              pauseDuration={2000}
            />
          </div>
        </Link>
        {/* Centered Navigation Links */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 md:gap-6">
            <CaseStudiesDropdown
              className={`${isLightBackground ? 'text-[var(--text-primary-light)]' : 'text-white'} transition-colors hover:text-[var(--accent-teal)]`}
            />
            <Link
              href="/me"
              className={`${isLightBackground ? 'text-[var(--text-primary-light)]' : 'text-white'} transition-colors hover:text-[var(--accent-teal)]`}
            >
              Me
            </Link>
            <Link
              href="/#lets-talk"
              className={`${isLightBackground ? 'text-[var(--text-primary-light)]' : 'text-white'} transition-colors`}
              onClick={(e) => {
                e.preventDefault()
                if (pathname === '/') {
                  // Already on homepage, wait a bit then scroll with proper offset
                  setTimeout(() => {
                    const section = document.getElementById('lets-talk')
                    if (section) {
                      // Account for both main nav (taller) and section nav (shorter) if visible
                      const mainNavHeight = 72 // Main nav is now taller
                      const sectionNavHeight = 48 // Section nav is now shorter
                      const sectionNavVisible = document.querySelector('[aria-label="Landing page section navigation"]')?.getBoundingClientRect().height || 0
                      const totalNavHeight = mainNavHeight + (sectionNavVisible > 0 ? sectionNavHeight : 0)
                      const offset = totalNavHeight + 20 // Extra padding

                      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset
                      const offsetPosition = Math.max(0, elementPosition - offset)

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth',
                      })

                      // Update URL hash
                      window.history.pushState(null, '', '#lets-talk')
                    }
                  }, 100)
                } else {
                  // On other pages (case studies, /me), navigate to home with hash
                  window.location.href = '/#lets-talk'
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-teal)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isLightBackground ? 'var(--text-primary-light)' : 'white'
              }}
            >
              Contact
            </Link>
          </div>
          {/* Resume Button - positioned absolutely on the right */}
          <a
            href="/assets/Anuja-Nimmagadda-2025.pdf"
            download="Anuja-Nimmagadda-Resume-2025.pdf"
            onClick={() => trackResumeDownload()}
            className="absolute right-4 xs:right-5 sm:right-6 md:right-8 lg:right-12 xl:right-16 hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent-teal)]/10 text-white text-sm font-semibold transition-all duration-300 hover:bg-[var(--accent-teal)]/20 hover:shadow-[0_0_20px_rgba(32,170,188,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-teal)]"
            aria-label="Download Resume"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Resume</span>
          </a>
          {/* Mobile Menu - Always visible on mobile, even when header is transitioning */}
          <div className="lg:hidden relative z-[60]">
            <MobileMenu isLandingPage={isLandingPage} />
          </div>
        </div>
      </nav>
    </header>
  )
}
