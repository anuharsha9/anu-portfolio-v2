'use client'

import { motion } from 'framer-motion'

interface EmpathizeStrategyGridProps {
  isLightBackground?: boolean
}

export default function EmpathizeStrategyGrid({ isLightBackground = true }: EmpathizeStrategyGridProps) {
  return (
    <div className="space-y-8">
      {/* CUSTOMER OBSESSION HIGHLIGHT: The Support Team Deep Dive */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="text-center space-y-6"
      >
        <div className="inline-flex items-center justify-center gap-2">
          <span className="font-mono text-[var(--accent-blue)] text-xs uppercase tracking-widest">
            {'// CUSTOMER_OBSESSION'}
          </span>
        </div>

        <h3 className="font-serif text-slate-900 text-2xl md:text-3xl max-w-4xl mx-auto">
          I Embedded Myself in Customer Support.
        </h3>

        <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
          <p>
            <strong className="text-slate-900">I didn&apos;t wait for permission.</strong> I joined the customer support team lead&apos;s meetings — multiple times over the course of a month. I interviewed <strong className="text-slate-900">every single person on the team</strong>. I asked tough questions. I grilled them. I wanted to understand the real pain, not sanitized summaries.
          </p>
          <p>
            I asked the support lead to show me actual customer tickets, frustrations, and workarounds. What I discovered was critical: <strong className="text-slate-900">customers were customizing and hacking the UI out of desperation</strong>. They weren&apos;t asking for a cosmetic refresh — they were drowning in fragmentation.
          </p>
          <p>
            This wasn&apos;t just research — it was <strong className="text-slate-900">earning trust to access truth</strong>. I gained access to private internal tickets and historical insights. I anchored my redesign on pain customers actually voiced, not assumptions.
          </p>
        </div>
      </motion.div>

      {/* Key Insight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center"
      >
        <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto">
          I designed for the <span className="font-semibold text-slate-900">entire RC ecosystem</span>: end users creating schedules, support teams handling tickets, engineers maintaining legacy code, and PMs planning features. Each role&apos;s constraints shaped the unified architecture.
        </p>
      </motion.div>
    </div>
  )
}





