'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

interface Section {
  id: string
  label: string
}

const sections: Section[] = [
  { id: 'executive-summary', label: 'Executive Summary' },
  { id: 'work-overview', label: 'Work Overview' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'work-archive', label: 'Work Archive' },
  { id: 'contact', label: 'Contact' },
]

export default function LandingPageSectionNav() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)

  // Only show on landing page - check after hooks
  const isLandingPage = pathname === '/'

  useEffect(() => {
    if (!isLandingPage) return
    const handleScroll = () => {
      // Show after scrolling past hero (about 100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isLandingPage])

  // Track active section
  useEffect(() => {
    if (!isLandingPage) return

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
  }, [isLandingPage])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100 // Account for header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      
      // Update URL hash
      window.history.pushState(null, '', `#${sectionId}`)
      setIsOpen(false)
    }
  }

  if (!isLandingPage || !isVisible) return null

  return (
    <nav
      className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
      aria-label="Landing page section navigation"
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 border border-black/10 shadow-lg">
        <div className="space-y-1">
          <div className="text-xs font-mono uppercase tracking-wider text-[#666666] mb-2 px-2">
            Sections
          </div>
          {sections.map((section) => {
            const isActive = activeSection === section.id
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                aria-label={`Navigate to ${section.label}`}
                aria-current={isActive ? 'true' : 'false'}
                className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors min-h-[36px] ${
                  isActive
                    ? 'bg-[var(--accent-teal)]/10 text-[var(--accent-teal)] font-semibold'
                    : 'text-[#666666] hover:text-[#1A1A1A] hover:bg-black/5'
                }`}
              >
                <span className="truncate max-w-[120px] block">{section.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

