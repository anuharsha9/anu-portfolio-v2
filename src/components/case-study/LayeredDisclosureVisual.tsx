'use client'

import { motion } from 'framer-motion'
import { User, Sliders, Code, CheckCircle2 } from 'lucide-react'

interface LayeredDisclosureVisualProps {
  isLightBackground?: boolean
}

export default function LayeredDisclosureVisual({ isLightBackground = false }: LayeredDisclosureVisualProps) {
  const layers = [
    {
      level: 'Default Experience',
      tag: '// LEVEL_01: DEFAULT',
      user: 'Non-technical users',
      icon: User,
      features: [
        'Guided, safe, error-proof flow',
        'Clear steps, clear terminology',
        'Tooltips, wizards, onboarding text',
        'Inline explanations',
        'Progressive disclosure'
      ]
    },
    {
      level: 'Advanced Controls',
      tag: '// LEVEL_02: ADVANCED',
      user: 'Technical users',
      icon: Sliders,
      features: [
        'Expandable sections for parameters',
        'Ability to adjust algorithms',
        'Feature selection options',
        'Training configuration'
      ]
    },
    {
      level: 'Expert Mode',
      tag: '// LEVEL_03: EXPERT',
      user: 'Data scientists',
      icon: Code,
      features: [
        'Full control available but not required',
        'Advanced tuning options',
        'Hyperparameter presets',
        'All within the same unified experience'
      ]
    },
  ]

  const safetyChecks = [
    'Incompatible datasets blocked early (Step 1)',
    'Inline warnings in plain language',
    'Standardized error patterns from design system',
    'Users always have a way out: go back, change input, or safely cancel'
  ]

  const backlog = [
    'Auto-suggesting best model type based on dataset',
    'Deep hyperparameter presets and advanced tuning',
    'Unified Train+Run single-screen concept',
    'Heavier onboarding overlays / carousels'
  ]

  return (
    <div className="space-y-6">
      {/* Section Header - More Compact */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-2"
      >
        <span className="font-mono text-xs text-[var(--accent-teal)] uppercase tracking-widest">
          {'// CONFIGURATION_MATRIX'}
        </span>
        <h3 className="font-serif text-slate-900 text-2xl md:text-3xl">
          Balancing Model Control with Simplicity
        </h3>
        <p className="text-slate-500 text-sm max-w-2xl mx-auto">
          Layered disclosure: serve multiple user types within a single experience.
        </p>
      </motion.div>

      {/* Configuration Matrix - 3 User Levels - More Compact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {layers.map((l, i) => {
          const IconComponent = l.icon
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg hover:border-[var(--accent-teal-300)] transition-all duration-300"
            >
              <div className="space-y-3">
                {/* Top: Icon + Headline */}
                <div className="flex items-center gap-3">
                  <IconComponent className="w-6 h-6 text-[var(--accent-teal)]" />
                  <div>
                    <h4 className="font-serif text-lg text-slate-900">{l.level}</h4>
                    <p className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                      {l.user}
                    </p>
                  </div>
                </div>

                {/* Features List - Compact */}
                <ul className="space-y-1.5 pt-3 border-t border-slate-100">
                  {l.features.map((f, j) => (
                    <li key={j} className="text-slate-600 text-xs flex items-start gap-2">
                      <span className="text-[var(--accent-teal)] mt-0.5 font-mono text-[10px]">+</span>
                      <span className="leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Compact Two-Column Layout for Safety + Backlog */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* System Safety Checks - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-5"
        >
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="font-mono text-[10px] text-emerald-700 uppercase tracking-widest">
              {'// SAFETY_CHECKS'}
            </span>
          </div>
          <ul className="space-y-2">
            {safetyChecks.map((check, i) => (
              <li key={i} className="text-emerald-900 text-xs flex items-start gap-2">
                <span className="text-emerald-500 font-mono mt-0.5">✓</span>
                <span className="leading-snug">{check}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Architectural Backlog - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-5"
        >
          <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-3">
            {'// POST_LAUNCH_ROADMAP'}
          </span>
          <ul className="space-y-2">
            {backlog.map((item, i) => (
              <li key={i} className="text-slate-600 text-xs flex items-start gap-2">
                <span className="text-slate-400 font-mono mt-0.5">→</span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* System Outcome Footer - Compact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900 rounded-xl p-4"
      >
        <div className="flex items-start gap-3">
          <span className="font-mono text-xs text-emerald-400 flex-shrink-0">
            &gt;
          </span>
          <p className="text-slate-300 text-xs leading-relaxed">
            Default users never see expert controls unless needed. Experts can dive deep without wading through tutorials.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
