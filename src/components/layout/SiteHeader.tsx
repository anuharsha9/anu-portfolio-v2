'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatedSignatureLogo } from '@/components/brand'
import { trackResumeDownload } from '@/components/analytics/GoogleAnalytics'
import { useScrollManager } from '@/hooks/useScrollManager'
import MobileMenu from './MobileMenu'
import NavDropdown from './NavDropdown'

export default function SiteHeader() {
  const pathname = usePathname()
  const isLandingPage = pathname === '/'
  const isCaseStudyPage = pathname?.startsWith('/work/') ?? false

  // Shared state to ensure only one dropdown is open at a time
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

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

  // Use centralized scroll manager
  useScrollManager((scrollY) => {
    // Always show on case study pages
    if (isCaseStudyPage) {
      setIsVisible(true)
      return
    }

    // Always show on mobile
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setIsVisible(true)
      return
    }

    // On all other pages: hide at top, show when scrolling down
    const hasScrolled = scrollY > 50 // Show nav after scrolling 50px
    setIsVisible(hasScrolled)
  }, [isLandingPage, isCaseStudyPage])

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-[var(--bg-dark)] backdrop-blur-md shadow-lg transition-all duration-500 ${isVisible
        ? 'opacity-100 translate-y-0 border-b border-refined-dark h-auto'
        : 'opacity-0 -translate-y-full pointer-events-none invisible h-0 overflow-hidden border-b border-transparent'
        }`}
      style={{ zIndex: 10000, isolation: 'isolate', position: 'fixed' }}
    >
      <nav className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3 sm:py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center transition-colors group"
        >
          <div className="w-7 h-7 text-white/90 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300">
            <AnimatedSignatureLogo
              className="w-full h-full"
              duration={16000}
              pauseDuration={2000}
            />
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-6">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 md:gap-6">
            <NavDropdown
              label="Case Studies"
              items={[
                {
                  label: 'Recent Work Overview',
                  href: '/#work-overview',
                  onClick: () => {
                    if (pathname === '/') {
                      setTimeout(() => {
                        const section = document.getElementById('work-overview')
                        if (section) {
                          const mainNavHeight = 60
                          const sectionNavHeight = 60
                          const sectionNavVisible = document.querySelector('[aria-label="Landing page section navigation"]')?.getBoundingClientRect().height || 0
                          const totalNavHeight = mainNavHeight + (sectionNavVisible > 0 ? sectionNavHeight : 0)
                          const offset = totalNavHeight + 20
                          const elementPosition = section.getBoundingClientRect().top + window.pageYOffset
                          const offsetPosition = Math.max(0, elementPosition - offset)
                          window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
                          window.history.pushState(null, '', '#work-overview')
                        }
                      }, 100)
                    }
                  },
                },
                { label: 'ReportCaster', href: '/work/reportcaster' },
                { label: 'ML Functions', href: '/work/ml-functions' },
                { label: 'IQ Plugin', href: '/work/iq-plugin' },
              ]}
              isOpen={openDropdown === 'case-studies'}
              onOpenChange={(open) => {
                // When opening, ensure only this dropdown is open
                setOpenDropdown(open ? 'case-studies' : null)
              }}
            />
            <NavDropdown
              label="Me"
              items={[
                { label: 'Intro Video', href: '/me#intro-video' },
                { label: 'Origin Story', href: '/me#origin-story' },
                { label: 'How I Work with AI', href: '/me#how-i-work-with-ai' },
                { label: 'Design Writings & Essays', href: '/me#design-writings' },
                { label: 'Who I Am Outside of Work', href: '/me#outside-of-work' },
              ]}
              isOpen={openDropdown === 'me'}
              onOpenChange={(open) => {
                // When opening, ensure only this dropdown is open
                setOpenDropdown(open ? 'me' : null)
              }}
            />
            <Link
              href="/#lets-talk"
              className="text-white transition-colors"
              onClick={(e) => {
                e.preventDefault()
                if (pathname === '/') {
                  // Already on homepage, wait a bit then scroll with proper offset
                  setTimeout(() => {
                    const section = document.getElementById('lets-talk')
                    if (section) {
                      // Account for both main nav (60px) and section nav (60px) if visible
                      const mainNavHeight = 60
                      const sectionNavHeight = 60
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
                e.currentTarget.style.color = 'white'
              }}
            >
              Contact
            </Link>
            <a
              href="/assets/Anuja-Nimmagadda-2025.pdf"
              download="Anuja-Nimmagadda-Resume-2025.pdf"
              onClick={() => trackResumeDownload()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[var(--accent-teal)]/50 bg-[var(--accent-teal)]/10 text-white text-sm font-semibold transition-all duration-300 hover:border-[var(--accent-teal)] hover:bg-[var(--accent-teal)]/20 hover:shadow-[0_0_20px_rgba(13,148,136,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-teal)]"
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
          </div>
          {/* Mobile Menu - Always visible on mobile, even when header is transitioning */}
          <div className="lg:hidden relative z-[60]">
            <MobileMenu isLandingPage={isLandingPage} />
          </div>
        </div>
      </nav>
    </header>
  )
}
