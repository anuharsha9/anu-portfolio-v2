'use client'

import { motion } from 'framer-motion'
import SignatureLogo from './SignatureLogo'

interface SignaturePulseProps {
  className?: string
}

/**
 * Subtle looping pulse for CTAs (e.g., Let's Talk).
 * Very subtle scale and opacity animation.
 */
export default function SignaturePulse({ className = '' }: SignaturePulseProps) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.04, 1],
        opacity: [0.9, 1, 0.9],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
    >
      <SignatureLogo className="w-full h-full" />
    </motion.div>
  )
}

