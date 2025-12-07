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
    <div className="space-y-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-3"
      >
        <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
          // CONFIGURATION_MATRIX
        </span>
        <h3 className="font-serif text-slate-900 text-2xl md:text-3xl">
          Balancing Model Control with Simplicity
        </h3>
        <p className="text-slate-600 text-base max-w-2xl mx-auto">
          Too much control = intimidating. Too little = limiting. Solution: Layered disclosure that serves multiple user types within a single experience.
        </p>
      </motion.div>

      {/* Configuration Matrix - 3 User Levels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {layers.map((l, i) => {
          const IconComponent = l.icon
          return (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 hover:shadow-lg hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Top: Tag + Icon */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                    {l.tag}
                  </span>
                  <IconComponent className="w-8 h-8 text-slate-200" />
                </div>

                {/* Headline */}
                <div>
                  <h4 className="font-serif text-xl text-slate-900 mb-1">{l.level}</h4>
                  <p className="font-sans text-xs text-slate-500 uppercase tracking-wider">
                    For {l.user}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  {l.features.map((f, j) => (
                    <li key={j} className="text-slate-600 text-sm flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5 font-mono text-xs">+</span>
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* System Safety Checks - QA Log */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
            // QA_LOG
          </span>
          <h4 className="font-serif text-lg text-slate-900">
            System Safety Checks
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {safetyChecks.map((check, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-emerald-50/50 border border-emerald-100 p-4 rounded-lg"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-emerald-900 text-sm font-medium leading-snug">
                  {check}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Architectural Backlog (v2) - Roadmap */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-6 md:p-8"
      >
        {/* Status Tag */}
        <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-4">
          // STATUS: POST_LAUNCH_ROADMAP
        </span>

        <h4 className="font-serif text-xl text-slate-900 mb-4">
          Architectural Backlog (v2)
        </h4>

        <ul className="space-y-3">
          {backlog.map((item, i) => (
            <li key={i} className="text-slate-600 text-sm flex items-start gap-3">
              <span className="text-slate-400 font-mono mt-0.5">→</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* System Outcome Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900 rounded-xl p-6"
      >
        <div className="flex items-start gap-3">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest flex-shrink-0">
            // DESIGN_PHILOSOPHY
          </span>
          <p className="text-slate-300 text-sm leading-relaxed">
            Layered disclosure isn&apos;t about hiding complexity — it&apos;s about <span className="text-emerald-400 font-medium">revealing it at the right moment</span>. 
            Default users never see expert controls unless they need them. Experts can dive deep without wading through tutorials.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
