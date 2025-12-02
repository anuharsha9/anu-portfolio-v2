'use client'

import { motion } from 'framer-motion'
import MotionSection from '@/components/ui/MotionSection'

export default function CredibilityStrip() {
  return (
    <MotionSection className="surface-dark py-8 md:py-10 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20, visibility: 'hidden' as const }}
          whileInView={{ opacity: 1, y: 0, visibility: 'visible' as const }}
          viewport={{ once: true, amount: 0.15, margin: '0px 0px -50px 0px' }}
          style={{ willChange: 'opacity, transform', opacity: 0, visibility: 'hidden' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6"
        >
          {/* Label */}
          <p className="text-white/60 text-xs font-mono uppercase tracking-wider">
            Designed at
          </p>

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {/* F1Studioz Logo */}
            <a
              href="https://f1studioz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity duration-300 hover:text-[var(--accent-teal)]"
              aria-label="Visit F1Studioz website"
            >
              <span className="text-white/80 text-lg md:text-xl font-semibold tracking-tight">
                F1Studioz
              </span>
            </a>

            {/* Divider */}
            <span className="text-white/20 text-2xl">·</span>

            {/* Cloud Software Group Logo */}
            <a
              href="https://www.cloud.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity duration-300 hover:text-[var(--accent-teal)]"
              aria-label="Visit Cloud Software Group website"
            >
              <span className="text-white/80 text-lg md:text-xl font-semibold tracking-tight">
                Cloud Software Group
              </span>
            </a>
          </div>

          {/* Optional: Scale Context */}
          <p className="text-white/50 text-xs md:text-sm text-center max-w-2xl">
            Work at CSG serves hundreds of global organizations through WebFOCUS
          </p>
        </motion.div>
      </div>
    </MotionSection>
  )
}

