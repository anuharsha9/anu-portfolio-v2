'use client'

import { motion } from 'framer-motion'
import { Unplug, EyeOff, Lock, Target } from 'lucide-react'

interface IQChallengeBreakdownProps {
  isLightBackground?: boolean
}

export default function IQChallengeBreakdown({ isLightBackground = false }: IQChallengeBreakdownProps) {
  const diagnoses = [
    {
      tag: 'DIAGNOSIS: ARCHITECTURAL_SILOS',
      tagColor: 'text-red-600',
      headline: 'Disconnected Engines',
      body: 'Automated Insights, NLQ, and Predict Data lived in separate codebases. Users had to "switch tools" just to switch tasks.',
      icon: Unplug,
    },
    {
      tag: 'DIAGNOSIS: INVISIBLE_VALUE',
      tagColor: 'text-red-600',
      headline: 'Zero Discoverability',
      body: "Powerful capabilities were buried 4-levels deep in context menus. If users didn't know a feature existed, they couldn't find it.",
      icon: EyeOff,
    },
    {
      tag: 'DIAGNOSIS: HIGH_TECHNICAL_FLOOR',
      tagColor: 'text-red-600',
      headline: 'Expert-Only Default',
      body: 'The UI assumed Ph.D. level knowledge. Business users (the primary growth target) were effectively locked out of the value.',
      icon: Lock,
    },
    {
      tag: 'STRATEGY: THE_APPROACHABILITY_GAP',
      tagColor: 'text-blue-600',
      headline: 'The Market Void',
      body: 'Competitors optimized for Power. We identified an opening to win on Guidance—democratizing DSML for the non-coder.',
      icon: Target,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-red-600 text-xs tracking-widest uppercase">
            // SYSTEM_AUDIT
          </span>
          <div className="h-px flex-1 bg-slate-200 max-w-[100px]"></div>
        </div>
        <h3 className="text-slate-900 text-2xl md:text-3xl font-serif">
          The System Diagnosis
        </h3>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
          We didn&apos;t just have a usability problem; we had an architectural fracture. Three powerful engines, zero shared roads.
        </p>
      </div>

      {/* Diagnosis Cards - 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {diagnoses.map((diagnosis, index) => {
          const IconComponent = diagnosis.icon
          const isStrategy = diagnosis.tag.includes('STRATEGY')

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white border rounded-xl p-6 md:p-8 space-y-4 ${isStrategy
                ? 'border-blue-200 bg-blue-50/30'
                : 'border-slate-200'
                }`}
            >
              {/* Icon */}
              <div className="flex items-start justify-between">
                <IconComponent className={`w-6 h-6 ${isStrategy ? 'text-blue-400' : 'text-slate-400'}`} />
              </div>

              {/* Tag */}
              <span className={`font-mono text-[10px] uppercase tracking-widest ${diagnosis.tagColor}`}>
                // {diagnosis.tag}
              </span>

              {/* Headline */}
              <h4 className="text-slate-900 text-xl font-serif">
                {diagnosis.headline}
              </h4>

              {/* Body */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {diagnosis.body}
              </p>
            </motion.div>
          )
        })}
      </div>

      {/* Target Architecture Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-slate-900 text-slate-300 p-6 rounded-lg mt-8"
      >
        <div className="space-y-2">
          <span className="font-mono text-emerald-400 text-xs tracking-widest uppercase block">
            &gt; TARGET_ARCHITECTURE:
          </span>
          <p className="text-sm md:text-base leading-relaxed text-slate-300">
            Re-architect DSML as a horizontal service layer—accessible from a single &quot;Front Door&quot; (The Hub), regardless of user expertise.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
