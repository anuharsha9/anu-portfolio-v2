'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * ScrollGear - A small gear that rotates as the user scrolls
 * Fixed position in bottom-right corner, serves as a branded scroll progress indicator
 */
export default function ScrollGear() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()

  // Rotate gear based on scroll progress (0-100% scroll = 0-720deg rotation)
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720])

  // Show gear only after scrolling a bit
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50 pointer-events-none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        style={{ rotate }}
        className="w-10 h-10 md:w-12 md:h-12"
      >
        {/* Gear SVG */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-full h-full text-[var(--accent-teal)] opacity-60"
        >
          <path
            fill="currentColor"
            d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"
          />
        </svg>
      </motion.div>

      {/* Subtle glow behind gear */}
      <div className="absolute inset-0 bg-[var(--accent-teal)]/20 blur-xl rounded-full -z-10" />
    </motion.div>
  )
}
