'use client'

import { motion } from 'framer-motion'

interface IQChallengesBreakdownProps {
  isLightBackground?: boolean
}

export default function IQChallengesBreakdown({ isLightBackground = false }: IQChallengesBreakdownProps) {
  const decisions = [
    {
      tag: 'DECISION_01: AUDIENCE_SCOPE',
      headline: 'Universality vs. Specificity',
      conflict: "Supporting 4 distinct personas usually leads to a 'lowest common denominator' interface.",
      resolution: "We rejected genericism. We chose **Bifurcated Pathways**—optimizing the 'Happy Path' for Lisa while preserving 'Power Shortcuts' for Dan.",
    },
    {
      tag: 'DECISION_02: INTERFACE_DENSITY',
      headline: 'Power vs. Approachability',
      conflict: "Technical users demand density; business users demand white space. You can't have both.",
      resolution: "We chose **Progressive Disclosure.** The interface defaults to 'Low Density' (Simplicity) but allows 'High Density' expansion on demand.",
    },
    {
      tag: 'DECISION_03: ORG_VELOCITY',
      headline: 'Autonomy vs. Standardization',
      conflict: "3 Feature Teams wanted to ship fast (Autonomy). The Platform needed consistency (Standardization).",
      resolution: "We chose **Standardization.** I slowed down initial velocity to build the 'IQ Design System,' which eventually accelerated all 3 teams by 200%.",
    },
  ]

  // Parse markdown bold syntax
  const renderText = (text: string) => {
    const parts = text.split(/\*\*(.*?)\*\*/g)
    return parts.map((part, i) =>
      i % 2 === 1 ? <strong key={i} className="text-slate-900 font-semibold">{part}</strong> : part
    )
  }

  return (
      <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-3"
      >
        <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
          // ARCHITECTURAL_DECISION_RECORDS
        </span>
        <h3 className="text-slate-900 text-2xl md:text-3xl font-serif">
          Architectural Decision Records (ADR)
        </h3>
        <p className="text-slate-500 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          Navigating the zero-sum constraints where user needs and business goals collided.
        </p>
      </motion.div>

      {/* Decision Matrix - 3 Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {decisions.map((decision, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-xl h-full flex flex-col"
          >
            {/* Tag */}
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-4">
              // {decision.tag}
            </span>

            {/* Headline */}
            <h4 className="text-slate-900 text-lg font-serif font-semibold mb-4">
              {decision.headline}
            </h4>

            {/* The Conflict */}
            <div className="mb-4">
              <span className="font-mono text-[10px] text-red-500 uppercase tracking-widest block mb-2">
                THE TENSION:
              </span>
              <p className="text-slate-600 text-sm leading-relaxed">
                {decision.conflict}
          </p>
        </div>

            {/* The Resolution */}
            <div className="mt-auto pt-4 border-t border-slate-200">
              <span className="font-mono text-[10px] text-emerald-600 uppercase tracking-widest block mb-2">
                THE CALL:
              </span>
              <p className="text-slate-600 text-sm leading-relaxed">
                {renderText(decision.resolution)}
              </p>
            </div>
          </motion.div>
          ))}
      </div>

      {/* Strategic Insight Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-slate-900 rounded-xl p-6"
      >
        <div className="flex items-start gap-3">
          <span className="font-mono text-sm text-amber-400 flex-shrink-0">
            &gt; ADR_INSIGHT:
          </span>
          <p className="text-slate-300 text-sm leading-relaxed">
            Every architectural decision created downstream consequences. The choice to standardize
            <span className="text-emerald-400 font-medium"> sacrificed short-term speed</span> but
            <span className="text-emerald-400 font-medium"> created a compounding velocity advantage</span> that
            paid dividends across all 3 feature teams.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
