'use client'

import { motion } from 'framer-motion'
import { Cpu, Network, Undo2, Scale, Zap, Layers, Eye, Shield } from 'lucide-react'
import { UXPrinciple } from '@/types/caseStudy'

interface UXPrinciplesProps {
  title?: string
  intro?: string
  principles: UXPrinciple[]
  isLightBackground?: boolean
  systemTag?: string // Optional custom system tag
}

// Map principle index to icons and border colors - updated for directive style
const principleMeta = [
  { icon: Zap, borderColor: 'border-l-blue-500', labelColor: 'text-blue-600', label: 'DIRECTIVE_01' },
  { icon: Layers, borderColor: 'border-l-blue-500', labelColor: 'text-blue-600', label: 'DIRECTIVE_02' },
  { icon: Eye, borderColor: 'border-l-emerald-500', labelColor: 'text-emerald-600', label: 'DIRECTIVE_03' },
  { icon: Shield, borderColor: 'border-l-emerald-500', labelColor: 'text-emerald-600', label: 'DIRECTIVE_04' },
]

export default function UXPrinciples({
  title = 'Architectural Directives',
  intro = 'Defining the immutable rules that govern interaction logic across the system.',
  principles,
  isLightBackground = true,
  systemTag = 'SYSTEM_LOGIC'
}: UXPrinciplesProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center space-y-3"
      >
        <span className="font-mono text-slate-400 text-xs tracking-widest uppercase">
          // {systemTag}
        </span>
        <h2 className="text-slate-900 text-2xl md:text-3xl font-serif leading-tight">
          {title}
        </h2>
        {intro && (
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {intro}
          </p>
        )}
      </motion.div>

      {/* Principles Grid - Directive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {principles.map((principle, index) => {
          const meta = principleMeta[index] || {
            icon: Cpu,
            borderColor: 'border-l-slate-400',
            labelColor: 'text-slate-500',
            label: `DIRECTIVE_0${index + 1}`
          }
          const IconComponent = meta.icon

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`
                bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8
                border-l-4 ${meta.borderColor}
                hover:shadow-md hover:-translate-y-0.5 transition-all duration-300
              `}
            >
              {/* Top Row - Label & Icon */}
              <div className="flex items-start justify-between mb-4">
                {/* Label */}
                <span className={`font-mono text-xs uppercase tracking-widest ${meta.labelColor}`}>
                  &gt; {meta.label}
                </span>

                {/* Icon */}
                <IconComponent className="w-6 h-6 text-slate-300 flex-shrink-0" />
              </div>

              {/* Title */}
              <h3 className="text-slate-900 text-lg md:text-xl font-serif font-semibold">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mt-3">
                {principle.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
