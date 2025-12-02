'use client'

import { motion } from 'framer-motion'
import MotionSection from '@/components/ui/MotionSection'
import Button from '@/components/ui/Button'
import {
  heroTitleVariant,
  heroSubVariant,
  heroButtonsVariant,
} from '@/lib/animations'

export default function HeroSection() {
  return (
    <MotionSection className="surface-dark py-20 md:py-28 relative overflow-hidden border-t border-white/5">
      {/* Background glow layer */}
      <div className="pointer-events-none absolute inset-x-0 -top-32 h-80">
        <div className="mx-auto h-full max-w-3xl rounded-full blur-3xl opacity-70 bg-[radial-gradient(circle_at_top,_rgba(13,148,136,0.55),_transparent_65%)]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 xl:px-8 relative z-10">
        <div className="space-y-8">
          <motion.h1
            variants={heroTitleVariant}
            initial="hidden"
            animate="visible"
            className="text-text-primary-dark text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] tracking-tight"
          >
            I redesign systems people said couldn&apos;t be fixed.
          </motion.h1>

          <motion.p
            variants={heroSubVariant}
            initial="hidden"
            animate="visible"
            className="text-text-muted-dark text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Specializing in enterprise UX and AI workflows that transform
            complex systems into intuitive experiences.
          </motion.p>

          <motion.div
            variants={heroButtonsVariant}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button
              variant="primary"
              href="/assets/Anuja-Nimmagadda-2025.pdf"
              target="_blank"
            >
              View resume
            </Button>
            <Button variant="ghost" href="#work">
              View my work
            </Button>
          </motion.div>
        </div>
      </div>
    </MotionSection>
  )
}

