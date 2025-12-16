'use client'

import { motion, MotionProps } from 'framer-motion'
import { forwardRef, ReactNode } from 'react'

interface MotionDivProps extends MotionProps {
  children?: ReactNode
  className?: string
}

/**
 * Motion.div wrapper component.
 * Use this for consistent motion.div usage across the app.
 */
const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.div ref={ref} className={className} {...props}>
        {children}
      </motion.div>
    )
  }
)

MotionDiv.displayName = 'MotionDiv'

export default MotionDiv

