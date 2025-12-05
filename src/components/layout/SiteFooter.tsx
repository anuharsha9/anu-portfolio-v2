'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import SignatureLogo from '@/components/brand/SignatureLogo'

export default function SiteFooter() {
  const pathname = usePathname()
  const router = useRouter()
  const currentYear = new Date().getFullYear()
  const [footerBg, setFooterBg] = useState<string>('var(--bg-dark)')
  const [isLightBg, setIsLightBg] = useState(false)

  // Detect the last section's background color
  useEffect(() => {
    if (typeof window === 'undefined') return

    const detectLastSection = () => {
      // Find all sections on the page
      const sections = document.querySelectorAll('section, [class*="surface-"]')
      if (sections.length === 0) return

      const lastSection = sections[sections.length - 1]
      const computedStyle = window.getComputedStyle(lastSection)
      
      // Check for surface classes first
      const hasLightSurface = lastSection.classList.contains('surface-light') || 
                             lastSection.classList.contains('surface-light-alt')
      const hasDarkSurface = lastSection.classList.contains('surface-dark') || 
                            lastSection.classList.contains('surface-dark-alt')
      
      if (hasLightSurface) {
        setFooterBg('var(--bg-light)')
        setIsLightBg(true)
        return
      } else if (hasDarkSurface) {
        setFooterBg('var(--bg-dark)')
        setIsLightBg(false)
        return
      }

      // Fallback: check computed background color
      const bgColor = computedStyle.backgroundColor
      const rgb = bgColor.match(/\d+/g)
      if (rgb && rgb.length >= 3) {
        const r = parseInt(rgb[0])
        const g = parseInt(rgb[1])
        const b = parseInt(rgb[2])
        const brightness = (r * 299 + g * 587 + b * 114) / 1000
        
        if (brightness > 128) {
          setFooterBg('var(--bg-light)')
          setIsLightBg(true)
        } else {
          setFooterBg('var(--bg-dark)')
          setIsLightBg(false)
        }
      }
    }

    // Run on mount and when pathname changes
    detectLastSection()
    
    // Also check after a short delay to ensure DOM is ready
    const timeout = setTimeout(detectLastSection, 100)
    
    return () => clearTimeout(timeout)
  }, [pathname])

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    if (pathname === '/') {
      // Already on homepage, wait a bit for any animations to settle, then scroll
      setTimeout(() => {
        const section = document.getElementById(sectionId)
        if (section) {
          // Account for both main nav (60px) and section nav (60px) if visible
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
          window.history.pushState(null, '', `#${sectionId}`)
        }
      }, 100)
    } else {
      // On other pages (case studies, /me), use Next.js router to navigate
      // This ensures proper page transition and hash handling
      router.push(`/#${sectionId}`)
    }
  }

  return (
    <footer
      className="transition-colors duration-300"
      style={{
        backgroundColor: footerBg,
        borderTop: 'none',
        boxShadow: 'none'
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3 sm:py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <Link 
            href="/" 
            className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity duration-300 group"
          >
            <div className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0">
              <SignatureLogo className={`w-full h-full ${isLightBg ? 'text-[var(--text-primary-light)]' : 'text-[var(--text-primary-dark)]'} group-hover:text-[var(--accent-teal)] transition-colors duration-300`} />
            </div>
            <span className={`${isLightBg ? 'text-[var(--text-primary-light)]' : 'text-[var(--text-primary-dark)]'} font-medium text-sm md:text-base group-hover:text-[var(--accent-teal)] transition-colors duration-300`}>
              Anuja Harsha Nimmagadda
            </span>
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 lg:gap-6">
            {/* Navigation Links - Hidden on mobile (use hamburger menu instead) */}
            <nav className="hidden md:flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <Link
                href="/#work-overview"
                onClick={(e) => {
                  e.preventDefault()
                  if (pathname === '/') {
                    // Already on homepage, scroll to section
                    handleSectionClick(e, 'work-overview')
                  } else {
                    // Navigate to landing page work overview section
                    router.push('/#work-overview')
                  }
                }}
                className={`${isLightBg ? 'text-[var(--text-muted-light)]' : 'text-[var(--text-muted-dark)]'} hover:text-[var(--accent-teal)] transition-colors duration-300 text-sm font-medium`}
              >
                Case Studies
              </Link>
              <Link
                href="/me"
                onClick={(e) => {
                  // Always navigate to /me page (landing)
                  if (pathname !== '/me') {
                    e.preventDefault()
                    router.push('/me')
                  }
                }}
                className={`${isLightBg ? 'text-[var(--text-muted-light)]' : 'text-[var(--text-muted-dark)]'} hover:text-[var(--accent-teal)] transition-colors duration-300 text-sm font-medium`}
              >
                About Me
              </Link>
              <Link
                href="/#lets-talk"
                onClick={(e) => handleSectionClick(e, 'lets-talk')}
                className={`${isLightBg ? 'text-[var(--text-muted-light)]' : 'text-[var(--text-muted-dark)]'} hover:text-[var(--accent-teal)] transition-colors duration-300 text-sm font-medium`}
              >
                Contact
              </Link>
            </nav>
            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/anu159"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isLightBg ? 'text-[var(--text-muted-light)]' : 'text-[var(--text-muted-dark)]'} hover:text-[var(--accent-teal)] transition-colors duration-300`}
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://medium.com/@anu.anuja"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isLightBg ? 'text-[var(--text-muted-light)]' : 'text-[var(--text-muted-dark)]'} hover:text-[var(--accent-teal)] transition-colors duration-300`}
                aria-label="Medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
            </div>
            <span className={`hidden md:inline ${isLightBg ? 'text-[var(--text-muted-light)]/30' : 'text-[var(--text-muted-dark)]/30'}`}>·</span>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 lg:gap-4">
              <div className={`${isLightBg ? 'text-[var(--text-muted-light)]' : 'text-[var(--text-muted-dark)]'} text-xs md:text-sm`}>
                © {currentYear}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
