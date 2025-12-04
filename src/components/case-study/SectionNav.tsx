'use client'

import { useState, useEffect, useRef } from 'react'
import { CaseStudySection } from '@/types/caseStudy'
import { useScrollManager } from '@/hooks/useScrollManager'

interface SectionNavProps {
  sections: CaseStudySection[]
}

export default function SectionNav({ sections }: SectionNavProps) {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isVisible, setIsVisible] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map())

  // Use centralized scroll manager
  useScrollManager((scrollY) => {
    // Show/hide nav based on scroll position
    setIsVisible(scrollY > 400)
    
    // Update active section
    const scrollPosition = scrollY + 250 // Offset for header and some padding
    
    // Find the section that's currently at or just past the scroll position
    let currentSection = ''
    
    // Check sections in reverse order (from bottom to top)
      for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i].id)
      if (element) {
        const rect = element.getBoundingClientRect()
        const elementTop = scrollY + rect.top
        
        // If this section's top is above or at our scroll position, it's the active one
        if (elementTop <= scrollPosition) {
          currentSection = sections[i].id
          break
        }
      }
      }

    // If no section found, use the first one
    if (!currentSection && sections.length > 0) {
      currentSection = sections[0].id
    }
    
    setActiveSection(currentSection)
  }, [sections])

  useEffect(() => {

    // Use Intersection Observer as primary method (more performant than scroll listener)
    // Only use scroll listener for show/hide nav visibility
    const observerOptions = {
      root: null,
      rootMargin: '-150px 0px -50% 0px',
      threshold: [0, 0.1, 0.5, 1],
    }

    observerRef.current = new IntersectionObserver((entries) => {
      // Find the section with the most content visible at the top
      let bestSection = ''
      let bestScore = -1

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const rect = entry.boundingClientRect
          // Score based on how much is visible and how close to top
          const visibleHeight = Math.min(rect.height, window.innerHeight - rect.top)
          const topProximity = Math.max(0, 300 - rect.top) // Bonus for being near top
          const score = visibleHeight + topProximity * 0.5

          if (score > bestScore) {
            bestScore = score
            bestSection = entry.target.id
          }
        }
      })

      if (bestSection) {
        setActiveSection(bestSection)
      }
    }, observerOptions)

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        sectionRefs.current.set(section.id, element)
        observerRef.current?.observe(element)
      }
    })

    // Cleanup
    return () => {
      observerRef.current?.disconnect()
    }
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (!isVisible) return null

  return (
    <nav 
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      aria-label="Case study section navigation"
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-black/10 shadow-lg">
        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-[#666666] mb-3 px-2">
            Sections
          </div>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              aria-label={`Navigate to section ${sections.indexOf(section) + 1}: ${section.title}`}
              aria-current={activeSection === section.id ? 'true' : 'false'}
              className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                activeSection === section.id
                  ? 'bg-[var(--accent-teal)]/10 text-[var(--accent-teal)] font-semibold'
                  : 'text-[#666666] hover:text-[#1A1A1A] hover:bg-black/5'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs">{sections.indexOf(section) + 1}</span>
                <span className="truncate max-w-[120px]">{section.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

