'use client'

import { motion } from 'framer-motion'
import MotionSection from '@/components/ui/MotionSection'

export default function ForEngineeringLeaders() {
  return (
    <MotionSection className="surface-light py-12 xs:py-16 sm:py-20 md:py-24 border-t border-black/5">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: '4%' }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.0, ease: [0.4, 0.0, 0.2, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/50 rounded-2xl p-6 md:p-8 lg:p-10 border border-black/10 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[#666666] text-xs font-mono uppercase tracking-wider">For Engineering & Product Leaders</span>
                <div className="h-px flex-1 bg-black/10"></div>
              </div>
              <h2 className="text-[var(--text-primary-light)] text-2xl md:text-3xl font-serif">
                I speak your language
              </h2>
            </div>

            <div className="space-y-4 text-[var(--text-muted-light)] text-base md:text-lg leading-relaxed">
              <p>
                I understand constraints, trade-offs, and deployment realities. I can ship interactive, coded prototypes (as demonstrated by this portfolio) instead of just Figma links.
              </p>
              <p>
                I leverage AI for productivity and learning — but I never treat it as a black box. I bridge design-to-implementation using AI-augmented workflows, maintaining full understanding and control over the code I ship. This portfolio demonstrates my capability to translate design intent into production-ready implementations, combining strategic design thinking with technical execution.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </MotionSection>
  )
}

