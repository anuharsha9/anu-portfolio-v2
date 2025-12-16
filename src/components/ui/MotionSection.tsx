'use client'

import { ReactNode, forwardRef } from 'react'

interface MotionSectionProps {
  id?: string
  className?: string
  children: ReactNode
  style?: React.CSSProperties
}

/**
 * MotionSection - Now a simple section wrapper without animations
 * 
 * The scroll-reveal animations were causing flickering issues during hydration.
 * Content is now visible immediately, which is better for:
 * - Performance (no JavaScript required for visibility)
 * - SEO (content is visible to crawlers)
 * - Accessibility (content doesn't depend on animations)
 * - User experience (no flashing/flickering)
 */
const MotionSection = forwardRef<HTMLElement, MotionSectionProps>(
  ({ id, className, children, style }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={className || ''}
        style={style}
      >
        {children}
      </section>
    )
  }
)

MotionSection.displayName = 'MotionSection'

export default MotionSection
