'use client'

import { motion } from 'framer-motion'
import { sectionReveal } from '@/lib/animations'
import { ReactNode, forwardRef } from 'react'

interface MotionSectionProps {
  id?: string
  className?: string
  children: ReactNode
  style?: React.CSSProperties
}

const MotionSection = forwardRef<HTMLElement, MotionSectionProps>(
  ({ id, className, children, style }, ref) => {
    // Optimized viewport config to prevent flickering
    // once: true ensures animation only triggers once
    // amount: 0.1 provides better threshold for mobile detection
    const viewportConfig = {
      once: true, // Critical: only animate once
      amount: 0.1, // 10% of element must be visible (lower for mobile)
      margin: '0px 0px -100px 0px' // Trigger earlier to ensure mobile visibility
    }

    try {
      return (
        <motion.section
          ref={ref}
          id={id}
          className={`${className || ''} motion-section-hidden`}
          style={{
            ...style,
            willChange: 'opacity, transform', // GPU acceleration
            backfaceVisibility: 'hidden', // Prevent flickering
            // Don't set opacity/visibility here - let CSS and variants handle it
          }}
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        // Prevent re-triggering on scroll - let Framer Motion handle visibility
        // Removed direct DOM manipulation to prevent conflicts
        >
          {children}
        </motion.section>
      )
    } catch (error) {
      // Fallback to regular section with CSS animation if framer-motion fails
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
        console.warn('MotionSection: Falling back to regular section due to error:', error)
      }
      return (
        <section
          ref={ref}
          id={id}
          className={`${className || ''} animate-section-reveal`}
          style={{ ...style, opacity: 1, visibility: 'visible' }}
        >
          {children}
        </section>
      )
    }
  }
)

MotionSection.displayName = 'MotionSection'

export default MotionSection
