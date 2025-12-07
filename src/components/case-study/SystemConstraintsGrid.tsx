'use client'

import { motion } from 'framer-motion'
import { Cpu, Network, Undo2, Scale } from 'lucide-react'

interface SystemConstraint {
  id: string
  label: string
  title: string
  description: string
}

interface SystemConstraintsGridProps {
  constraints?: SystemConstraint[]
  title?: string
  intro?: string
}

// Map constraint IDs to icons and border colors
const constraintMeta: Record<string, { 
  icon: React.ComponentType<{ className?: string }>, 
  borderColor: string,
  labelColor: string 
}> = {
  '01': { icon: Cpu, borderColor: 'border-l-blue-500', labelColor: 'text-[var(--accent-teal)]' },
  '02': { icon: Network, borderColor: 'border-l-blue-500', labelColor: 'text-[var(--accent-teal)]' },
  '03': { icon: Undo2, borderColor: 'border-l-emerald-500', labelColor: 'text-emerald-600' },
  '04': { icon: Scale, borderColor: 'border-l-emerald-500', labelColor: 'text-emerald-600' },
}

// Default constraints based on UX Principles
const defaultConstraints: SystemConstraint[] = [
  {
    id: '01',
    label: 'COGNITIVE_LOAD',
    title: 'Reduce mental overhead',
    description: 'Users shouldn\'t need to remember information across screens or contexts.',
  },
  {
    id: '02',
    label: 'PROGRESSIVE_DISCLOSURE',
    title: 'Show complexity on demand',
    description: 'Advanced features exist but don\'t overwhelm first-time users.',
  },
  {
    id: '03',
    label: 'ERROR_PREVENTION',
    title: 'Guide before correcting',
    description: 'Prevent mistakes through smart defaults and inline validation.',
  },
  {
    id: '04',
    label: 'SYSTEM_FEEDBACK',
    title: 'Communicate state clearly',
    description: 'Users always know what happened, what\'s happening, and what to do next.',
  },
]

export default function SystemConstraintsGrid({ 
  constraints = defaultConstraints,
  title = 'Architectural Standards',
  intro = 'Non-negotiable heuristics that guided the system refactor.'
}: SystemConstraintsGridProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-3"
      >
        <span className="font-mono text-[var(--accent-teal)] text-xs tracking-widest uppercase">
          // SYSTEM_RULES
        </span>
        <h3 className="text-slate-900 text-2xl md:text-3xl font-serif">{title}</h3>
        <p className="text-slate-500 text-sm md:text-base max-w-2xl">{intro}</p>
      </motion.div>

      {/* 2x2 Grid - Technical Manifest */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {constraints.map((constraint, index) => {
          const meta = constraintMeta[constraint.id] || { 
            icon: Cpu, 
            borderColor: 'border-l-slate-400',
            labelColor: 'text-slate-500'
          }
          const IconComponent = meta.icon

          return (
            <motion.div
              key={constraint.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`
                bg-slate-50 border border-slate-200 rounded-xl p-8
                border-l-4 ${meta.borderColor}
                hover:shadow-md hover:-translate-y-0.5 transition-all duration-300
              `}
            >
              {/* Top Row - Label & Icon */}
              <div className="flex items-start justify-between mb-4">
                {/* Label */}
                <span className={`font-mono text-xs uppercase tracking-widest ${meta.labelColor}`}>
                  // {constraint.id}_{constraint.label}
                </span>
                
                {/* Icon */}
                <IconComponent className="w-6 h-6 text-slate-300 flex-shrink-0" />
              </div>

              {/* Title */}
              <h4 className="text-slate-900 text-xl font-serif font-medium">
                {constraint.title}
              </h4>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mt-3">
                {constraint.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
