'use client'

import { motion } from 'framer-motion'

interface IQPersonaCardsProps {
  isLightBackground?: boolean
  title?: string
  description?: string
}

export default function IQPersonaCards({
  isLightBackground = false,
  title = 'User Personas',
  description = '2 personas created from scratch. 2 inherited from existing research. All 4 mapped into the unified system.'
}: IQPersonaCardsProps) {
  const personas = [
    {
      name: 'Tech Visionary',
      type: 'TECHNICAL',
      description: 'Needs direct model parameter access and keyboard-first navigation.',
    },
    {
      name: 'Financial Strategist',
      type: 'BUSINESS',
      description: 'Needs one-click insight generation and plain-language explanations.',
    },
    {
      name: 'Analytics Innovator',
      type: 'DEVELOPER',
      description: 'Needs consistent component behavior and debuggable error states.',
    },
    {
      name: 'Techy Analyst',
      type: 'POWER USER',
      description: 'Needs self-service workflows and shareable, repeatable queries.',
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'TECHNICAL': return 'bg-[var(--accent-teal-50)] border-[var(--accent-teal-200)] text-[var(--accent-teal)]'
      case 'BUSINESS': return 'bg-emerald-50 border-emerald-200 text-emerald-600'
      case 'DEVELOPER': return 'bg-purple-50 border-purple-200 text-purple-600'
      case 'POWER USER': return 'bg-amber-50 border-amber-200 text-amber-600'
      default: return 'bg-slate-50 border-slate-200 text-slate-600'
    }
  }

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
          // USER_PERSONAS
        </span>
      </div>
      
      <h3 className="text-slate-900 text-lg md:text-xl font-serif font-semibold mb-2">
        {title}
      </h3>
      <p className="text-slate-500 text-sm mb-5">
        {description}
      </p>

      {/* Compact Persona Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {personas.map((p, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-3 bg-white border border-slate-200 rounded-lg"
          >
            <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider flex-shrink-0 border ${getTypeColor(p.type)}`}>
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
          Four personas, one interface. Solution: <span className="font-medium text-slate-900">layered progressive disclosure</span> that surfaces simplicity by default while keeping power accessible on demand.
        </p>
      </div>
    </motion.div>
  )
}
