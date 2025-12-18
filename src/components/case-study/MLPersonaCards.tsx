'use client'

import { motion } from 'framer-motion'

interface MLPersonaCardsProps {
  isLightBackground?: boolean
}

export default function MLPersonaCards({ isLightBackground = false }: MLPersonaCardsProps) {
  const personas = [
    {
      name: 'Techy Analyst',
      type: 'TECHNICAL',
      description: 'Self-sufficient power users who need right-click entry and advanced controls.',
    },
    {
      name: 'Financial Strategist',
      type: 'BUSINESS',
      description: 'Goal-oriented users who need guided workflows and plain-language explanations.',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-slate-400 text-xs tracking-widest uppercase">
          {'// USER_PERSONAS'}
        </span>
      </div>

      <h3 className="text-slate-900 text-lg md:text-xl font-serif font-semibold mb-2">
        User Personas
      </h3>
      <p className="text-slate-500 text-sm mb-5">
        Two distinct user types drove the dual-experience approach.
      </p>

      {/* Compact Persona List */}
      <div className="space-y-3">
        {personas.map((p, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-3 bg-white border border-slate-200 rounded-lg"
          >
            <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider flex-shrink-0 ${p.type === 'TECHNICAL'
                ? 'bg-[var(--accent-teal-50)] border border-[var(--accent-teal-200)] text-[var(--accent-teal)]'
                : 'bg-emerald-50 border border-emerald-200 text-emerald-600'
              }`}>
              {p.type}
            </span>
            <div>
              <span className="text-slate-900 font-medium text-sm">{p.name}</span>
              <span className="text-slate-500 text-sm"> — {p.description}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Design Implication */}
      <div className="mt-5 pt-4 border-t border-slate-200">
        <p className="text-slate-600 text-sm">
          <span className="font-mono text-[var(--accent-teal)] text-xs mr-2">→</span>
          <span className="font-medium text-slate-900">Dual-experience approach</span>: Technical users get right-click entry + advanced controls. Business users get guided workflows + inline teaching.
        </p>
      </div>
    </motion.div>
  )
}
