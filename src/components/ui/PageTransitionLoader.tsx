'use client'

import { motion, AnimatePresence } from 'framer-motion'
import GearContact from '@/assets/gear-contact.svg'

interface PageTransitionLoaderProps {
  isLoading: boolean
  message?: string
}

export default function PageTransitionLoader({ isLoading, message }: PageTransitionLoaderProps) {
  if (!isLoading) return null

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9998] bg-[var(--bg-dark)]/80 backdrop-blur-sm flex items-center justify-center"
          aria-label="Loading"
          role="status"
        >
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* Rotating Gear SVG */}
            <div className="w-24 h-24 md:w-32 md:h-32 gear-loading">
              <GearContact className="w-full h-full text-white" />
            </div>
            {message && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white/80 text-sm md:text-base"
              >
                {message}
              </motion.p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

