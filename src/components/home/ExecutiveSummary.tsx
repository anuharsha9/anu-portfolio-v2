'use client'

import { motion } from 'framer-motion'
import MotionSection from '@/components/ui/MotionSection'
import { SectionDivider } from '@/components/brand'

export default function ExecutiveSummary() {
  return (
    <MotionSection id="executive-summary" className="surface-dark-alt py-20 md:py-28 border-t border-white/5">
      {/* Section Divider */}
      <SectionDivider isLightBackground={false} />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20, visibility: 'hidden' as const }}
          whileInView={{ opacity: 1, y: 0, visibility: 'visible' as const }}
          viewport={{ once: true, amount: 0.15, margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: 'opacity, transform', opacity: 0, visibility: 'hidden' }}
          className="space-y-12 md:space-y-16"
        >
          {/* Header */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-serif leading-tight">
                Why I&apos;m an Asset to Your Team
              </h2>
              <p className="text-[var(--accent-teal)] text-base md:text-lg font-medium leading-relaxed">
                Principal UX Designer transforming complex enterprise systems into intuitive experiences
              </p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                With over a decade of experience across startups, agencies, enterprise products, and freelance consulting, I bring both breadth and depth to every project.
              </p>
            </div>
          </div>

          {/* Approach & Value - Structured Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {[
              {
                title: 'Versatile Across Every Space',
                description: '13 years across startups, agencies, enterprise BI, freelance, mobile, web, branding, and ML/AI. I adapt fast and can design anything from zero.',
              },
              {
                title: 'Impact Measured in Millions',
                description: 'My work reaches millions of users across Fortune 500 companies worldwide. Designing at CSG/IBI taught me how to ship clarity, reliability, and scale for real enterprise ecosystems.',
              },
              {
                title: 'I Lead Without Authority',
                description: 'I create direction when none exists, rally teams, influence decisions, and drive alignment. Bold, proactive, outcome-driven leadership — with or without the title.',
              },
              {
                title: 'I Learn Fast and Make Complexity Simple',
                description: 'I absorb new domains quickly and translate technical systems into intuitive experiences. If I can make machine learning accessible to non-technical users, I can simplify any domain.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15, margin: '0px 0px -50px 0px' }}
                transition={{
                  duration: 0.5,
                  delay: 0.05 + (index * 0.05),
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ willChange: 'opacity, transform' }}
                className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(13,148,136,0.075)] hover:border-[var(--accent-teal)]/50 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent-teal)] flex-shrink-0"></div>
                    <div className="h-px flex-1 bg-white/10"></div>
                    <div className="h-px w-8 bg-[var(--accent-teal)]"></div>
                  </div>
                  <h3 className="text-white text-lg md:text-xl font-serif group-hover:text-[var(--accent-teal)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </MotionSection>
  )
}

