'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode, useLayoutEffect, useState, useRef } from 'react'
import Image from 'next/image'

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [showOverlay, setShowOverlay] = useState(false)
  const previousPathname = useRef(pathname)
  const isNavigating = useRef(false)

  useLayoutEffect(() => {
    // Only transition when pathname changes and not already navigating
    if (pathname !== previousPathname.current && !isNavigating.current) {
      isNavigating.current = true
      previousPathname.current = pathname

      // Show overlay briefly
      setShowOverlay(true)

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' })

      // Hide overlay quickly
      const timer = setTimeout(() => {
        setShowOverlay(false)
        isNavigating.current = false
      }, 250)

      return () => clearTimeout(timer)
    }
  }, [pathname])

  return (
    <>
      {/* Quick fade overlay with gear */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="fixed inset-0 z-[9998] bg-[var(--bg-dark)] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              className="w-10 h-10"
              animate={{ rotate: 180 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <Image
                src="/assets/gear-contact.svg"
                alt=""
                width={40}
                height={40}
                className="w-full h-full invert opacity-60"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content */}
      {children}
    </>
  )
}
