'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { SignatureLogo } from '@/components/brand'

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)
  
  // Always show footer on /me page, otherwise use scroll behavior
  const alwaysVisible = pathname === '/me'

  useEffect(() => {
    if (alwaysVisible) {
      setIsVisible(true)
      return
    }

    const handleScroll = () => {
      // Show footer when user scrolls down more than 100px
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Check initial scroll position
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [alwaysVisible])

  return (
    <footer
      className={`surface-dark-alt border-t border-white/10 sticky bottom-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--bg-dark-alt)]/95 transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-full pointer-events-none invisible'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-8 py-3 md:py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <Link 
            href="/" 
            className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity duration-300 group"
          >
            <div className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0">
              <SignatureLogo className="w-full h-full text-text-primary-dark group-hover:text-[var(--accent-teal)] transition-colors duration-300" />
            </div>
            <span className="text-text-primary-dark font-medium text-sm md:text-base group-hover:text-[var(--accent-teal)] transition-colors duration-300">
              Anuja Harsha Nimmagadda
            </span>
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 lg:gap-6">
            {/* Navigation Links - Hidden on mobile (use hamburger menu instead) */}
            <nav className="hidden md:flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <Link
                href="/#selected-work"
                className="text-text-muted-dark hover:text-[var(--accent-teal)] transition-colors duration-300 text-sm font-medium"
              >
                Work
              </Link>
              <Link
                href="/me"
                className="text-text-muted-dark hover:text-[var(--accent-teal)] transition-colors duration-300 text-sm font-medium"
              >
                About Me
              </Link>
              <Link
                href="/#contact"
                className="text-text-muted-dark hover:text-[var(--accent-teal)] transition-colors duration-300 text-sm font-medium"
              >
                Contact
              </Link>
              <a
                href="/assets/Anuja-Nimmagadda-2025.pdf"
                download="Anuja-Nimmagadda-Resume-2025.pdf"
                className="text-text-muted-dark hover:text-[var(--accent-teal)] transition-colors duration-300 text-sm font-medium"
              >
                Resume
              </a>
            </nav>
            <span className="hidden md:inline text-text-muted-dark/30">·</span>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 lg:gap-4">
              <p className="text-text-muted-dark text-xs text-center md:text-left italic hidden md:block">
                Built from scratch via vibe-coding
              </p>
              <span className="hidden md:inline text-text-muted-dark/30">·</span>
              <div className="text-text-muted-dark text-xs md:text-sm">
                © {currentYear}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

