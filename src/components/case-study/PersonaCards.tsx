'use client'

import { motion } from 'framer-motion'

interface PersonaCardsProps {
  isLightBackground?: boolean
}

export default function PersonaCards({ isLightBackground = true }: PersonaCardsProps) {
  const personas = [
    {
      name: 'BI Developer',
      type: 'TECHNICAL',
      description: 'Developers who schedule reports but struggle with fragmented interfaces and unclear system behavior.',
    },
    {
      name: 'Reporting Guru',
      type: 'POWER USER',
      description: 'Power users who understand the system deeply but waste time context-switching between multiple tabs.',
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
        Inherited foundational research. Used to guide architectural decisions.
      </p>

      {/* Compact Persona List */}
      <div className="space-y-3">
        {personas.map((p, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-3 bg-white border border-slate-200 rounded-lg"
          >
            <span className="inline-flex items-center px-2 py-0.5 bg-slate-100 border border-slate-200 rounded text-slate-500 text-[10px] font-mono uppercase tracking-wider flex-shrink-0">
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
          Both personas share the same pain: <span className="font-medium text-slate-900">fragmented interfaces and context switching</span>. Solution unified scheduling into a single, predictable workflow.
        </p>
      </div>
    </motion.div>
  )
}
