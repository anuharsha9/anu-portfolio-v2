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
    // amount: 0.15 provides better threshold for detection
    const viewportConfig = { 
      once: true, // Critical: only animate once
      amount: 0.15, // 15% of element must be visible
      margin: '0px 0px -50px 0px' // Trigger slightly before entering viewport
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
          // Prevent re-triggering on scroll
          onViewportEnter={() => {
            // Ensure element stays visible after animation
            if (id && typeof window !== 'undefined') {
              const element = document.getElementById(id)
              if (element) {
                element.style.willChange = 'auto' // Reset after animation
                element.style.visibility = 'visible' // Ensure visible after animation
              }
            }
          }}
          onAnimationStart={(definition) => {
            // Make visible when animation starts
            if (ref && 'current' in ref && ref.current) {
              if (definition === 'visible') {
                ref.current.style.visibility = 'visible'
                ref.current.setAttribute('data-visible', 'true')
              }
            }
          }}
        >
          {children}
        </motion.section>
      )
    } catch (error) {
      // Fallback to regular section with CSS animation if framer-motion fails
      console.warn('MotionSection: Falling back to regular section due to error:', error)
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
