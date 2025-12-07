'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TOCItem {
  id: string
  label: string
  letter?: string
  title: string
}

interface StickyTableOfContentsProps {
  items: TOCItem[]
  className?: string
}

export default function StickyTableOfContents({ items, className = '' }: StickyTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Debounce scroll detection
  const handleScroll = useCallback(() => {
    // Check if we're past the hero section (show ToC after ~80vh)
    const scrollY = window.scrollY
    const threshold = window.innerHeight * 0.8
    setIsVisible(scrollY > threshold)

    // Find the active section
    const sectionElements = items
      .map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }))
      .filter(item => item.element !== null)

    if (sectionElements.length === 0) return

    // Find which section is currently in view
    const viewportMiddle = scrollY + window.innerHeight * 0.4

    let currentSection = sectionElements[0].id
    for (const section of sectionElements) {
      if (section.element) {
        const rect = section.element.getBoundingClientRect()
        const sectionTop = rect.top + scrollY
        
        if (sectionTop <= viewportMiddle) {
          currentSection = section.id
        }
      }
    }

    setActiveId(currentSection)
  }, [items])

  useEffect(() => {
    // Initial check
    handleScroll()

    // Throttled scroll listener
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [handleScroll])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const navHeight = 120 // Account for sticky nav
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block ${className}`}
          aria-label="Table of Contents"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-slate-200 shadow-lg p-3 max-w-[180px]">
            {/* Header */}
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-3 px-2">
              Contents
            </div>
            
            {/* ToC Items */}
            <ul className="space-y-1">
              {items.map((item, index) => {
                const isActive = activeId === item.id
                
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-2 py-1.5 rounded-lg text-xs transition-all duration-200 flex items-center gap-2 group ${
                        isActive 
                          ? 'bg-[#0BA2B5]/10 text-[#0BA2B5]' 
                          : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                      }`}
                    >
                      {/* Letter indicator */}
                      {item.letter && (
                        <span className={`font-mono font-bold text-sm w-5 flex-shrink-0 transition-colors ${
                          isActive ? 'text-[#0BA2B5]' : 'text-slate-300 group-hover:text-slate-400'
                        }`}>
                          {item.letter}
                        </span>
                      )}
                      
                      {/* Progress dot for non-letter items */}
                      {!item.letter && (
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
                          isActive ? 'bg-[#0BA2B5]' : 'bg-slate-300'
                        }`} />
                      )}
                      
                      {/* Title */}
                      <span className="truncate font-medium">
                        {item.label}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
            
            {/* Progress indicator */}
            <div className="mt-3 pt-3 border-t border-slate-100">
              <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#0BA2B5] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: `${((items.findIndex(i => i.id === activeId) + 1) / items.length) * 100}%` 
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-[10px] text-slate-400 mt-1 text-center font-mono">
                {items.findIndex(i => i.id === activeId) + 1} / {items.length}
              </p>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

