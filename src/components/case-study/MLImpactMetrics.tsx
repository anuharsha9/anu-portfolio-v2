'use client'

import { motion } from 'framer-motion'

interface MLImpactMetricsProps {
  isLightBackground?: boolean
}

export default function MLImpactMetrics({ isLightBackground = false }: MLImpactMetricsProps) {
  const outcomes = [
    { 
      tag: '// BUSINESS_IMPACT',
      tagColor: 'text-[var(--accent-teal)]',
      metric: 'Demo-Ready', 
      body: 'For the first time, ML was stable enough for 200+ person org-wide demos. Sales engineering could finally showcase the capability confidently.',
      borderColor: 'border-l-[var(--accent-teal)]'
    },
    { 
      tag: '// RELIABILITY',
      tagColor: 'text-emerald-600',
      metric: 'Zero Abandonment', 
      body: 'Eliminating dead-end errors didn\'t just save clicks; it stopped users from quitting. All SME testers completed the full workflow.',
      borderColor: 'border-l-emerald-500'
    },
    { 
      tag: '// SCALABILITY',
      tagColor: 'text-purple-600',
      metric: '1 Core Pattern', 
      body: 'The 4-step guided flow pattern was so robust it was directly inherited by the IQ Plugin, reducing future design/dev time.',
      borderColor: 'border-l-purple-500'
    },
    { 
      tag: '// MARKET_EXPANSION',
      tagColor: 'text-amber-600',
      metric: 'New User Tier', 
      body: 'Lowering the technical barrier allowed Business Analysts to self-serve, expanding the addressable market beyond just Data Scientists.',
      borderColor: 'border-l-amber-500'
    },
  ]

  return (
    <div className="space-y-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-3"
      >
        <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
          // BUSINESS_OUTCOMES
        </span>
        <h3 className="font-serif text-slate-900 text-2xl md:text-3xl">
          Impact & Validation
        </h3>
        <p className="text-slate-600 text-base max-w-3xl mx-auto">
          Beyond usability metrics — these outcomes demonstrate how design decisions translated into tangible business value, system trust, and market expansion.
        </p>
      </motion.div>

      {/* Outcome Cards - 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {outcomes.map((o, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`bg-white border border-slate-200 ${o.borderColor} border-l-4 rounded-r-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300`}
          >
            {/* Tag */}
            <span className={`font-mono text-[10px] ${o.tagColor} uppercase tracking-widest block mb-4`}>
              {o.tag}
            </span>

            {/* Metric - Large Serif */}
            <h4 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">
              {o.metric}
            </h4>

            {/* Body */}
            <p className="text-slate-600 text-sm leading-relaxed">
              {o.body}
            </p>
          </motion.div>
        ))}
      </div>

      {/* System Outcome Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900 rounded-xl p-6"
      >
        <div className="flex items-start gap-3">
          <span className="font-mono text-sm text-emerald-400 flex-shrink-0">
            &gt; OUTCOME:
          </span>
          <p className="text-slate-300 text-sm leading-relaxed">
            ML Functions became a <span className="text-emerald-400 font-medium">gateway for broader ML adoption</span> across teams, 
            rather than a niche expert-only feature. Seamless workflow integration meant users stayed inside WebFOCUS instead of bouncing between tools.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
