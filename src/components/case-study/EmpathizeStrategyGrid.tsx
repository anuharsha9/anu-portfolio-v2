'use client'

import { motion } from 'framer-motion'
import { Ban, Network } from 'lucide-react'

interface EmpathizeStrategyGridProps {
  isLightBackground?: boolean
}

export default function EmpathizeStrategyGrid({ isLightBackground = true }: EmpathizeStrategyGridProps) {
  return (
    <div className="space-y-8">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-2"
      >
        <span className="font-mono text-[var(--accent-teal)] text-xs tracking-widest uppercase">
          // RESEARCH_STRATEGY
        </span>
        <h3 className="text-slate-900 text-xl md:text-2xl font-serif">
          Navigating Enterprise Research Constraints
        </h3>
      </motion.div>

      {/* 2-Column Strategy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Card 1: The Constraint (Warning) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
              <Ban className="w-5 h-5 text-amber-600" />
            </div>
            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-widest text-amber-700">
                CONSTRAINT: NO_DIRECT_USER_ACCESS
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Enterprise security policy blocked direct access to end users. No interviews, no usability tests, no direct feedback loops.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 2: The Proxy Strategy (Success) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[var(--accent-teal-50)] border-l-4 border-[var(--accent-teal-400)] p-6 rounded-r-lg"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent-teal-100)] flex items-center justify-center">
              <Network className="w-5 h-5 text-[var(--accent-teal)]" />
            </div>
            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--accent-teal-700)]">
                STRATEGY: THE_PROXY_NETWORK
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Leveraged 50+ Support Agents and Customer Reps as high-fidelity proxies for user pain points. Built ecosystem understanding through indirect channels.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CUSTOMER OBSESSION HIGHLIGHT: The Support Team Deep Dive */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="bg-[var(--accent-blue-soft)] border-l-4 border-[var(--accent-blue)] p-6 md:p-8 rounded-r-xl"
      >
        <span className="font-mono text-[var(--accent-blue)] text-xs uppercase tracking-widest mb-4 block">
          // CUSTOMER_OBSESSION
        </span>

        <h3 className="font-serif text-slate-900 text-xl md:text-2xl mb-4">
          I Embedded Myself in Customer Support.
        </h3>

        <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed">
          <p>
            <strong className="text-slate-900">I didn&apos;t wait for permission.</strong> I joined the customer support team lead&apos;s meetings — multiple times over the course of a month. I interviewed <strong className="text-slate-900">every single person on the team</strong>. I asked tough questions. I grilled them. I wanted to understand the real pain, not sanitized summaries.
          </p>
          <p>
            I asked the support lead to show me actual customer tickets, frustrations, and workarounds. What I discovered was critical: <strong className="text-slate-900">customers were customizing and hacking the UI out of desperation</strong>. They weren&apos;t asking for a cosmetic refresh — they were drowning in fragmentation.
          </p>
          <p>
            This wasn&apos;t just research — it was <strong className="text-slate-900">earning trust to access truth</strong>. I gained access to private internal tickets and historical insights that no one else had seen. I anchored my redesign on pain customers actually voiced, not what PMs assumed.
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





