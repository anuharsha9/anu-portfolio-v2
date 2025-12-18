'use client'

import { motion } from 'framer-motion'
import { Users, MessageSquare, FileText, Presentation, GitBranch, UserPlus } from 'lucide-react'

export interface CollaborationItem {
  title: string
  items: string[]
}

export interface TeamCollaborationData {
  sectionTag: string
  title: string
  subtitle: string
  columns: CollaborationItem[]
  highlight?: {
    label: string
    text: string
  }
}

interface TeamCollaborationProps {
  data: TeamCollaborationData
  accentColor?: 'teal' | 'amber' | 'violet'
}

const iconMap: Record<number, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  0: Users,
  1: MessageSquare,
  2: FileText,
  3: Presentation,
  4: GitBranch,
  5: UserPlus,
}

export default function TeamCollaboration({ data, accentColor = 'teal' }: TeamCollaborationProps) {
  const { sectionTag, title, subtitle, columns, highlight } = data

  const accentClasses = {
    teal: {
      tag: 'text-[var(--accent-teal)]',
      border: 'border-[var(--accent-teal)]',
      bg: 'bg-[var(--accent-teal-50)]',
      text: 'text-[var(--accent-teal)]',
    },
    amber: {
      tag: 'text-amber-600',
      border: 'border-amber-500',
      bg: 'bg-amber-50',
      text: 'text-amber-600',
    },
    violet: {
      tag: 'text-violet-600',
      border: 'border-violet-500',
      bg: 'bg-violet-50',
      text: 'text-violet-600',
    },
  }

  const accent = accentClasses[accentColor]

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3"
      >
        <span className={`font-mono text-xs tracking-widest uppercase ${accent.tag}`}>
          {'// '}{sectionTag}
        </span>
        <h3 className="text-slate-900 text-2xl md:text-3xl font-serif">
          {title}
        </h3>
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      </motion.div>

      {/* Grid of Collaboration Areas */}
      <div className={`grid grid-cols-1 md:grid-cols-2 ${columns.length > 2 ? 'lg:grid-cols-4' : ''} gap-6`}>
        {columns.map((column, i) => {
          const IconComponent = iconMap[i % 6]
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-8 h-8 rounded-lg ${accent.bg} flex items-center justify-center`}>
                  <IconComponent className={`w-4 h-4 ${accent.text}`} strokeWidth={1.5} />
                </div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-slate-500">
                  {column.title}
                </h4>
              </div>
              <ul className="space-y-2">
                {column.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                    <span className="text-slate-300 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>

      {/* Highlight/Quote */}
      {highlight && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`${accent.bg} border-l-4 ${accent.border} p-5 rounded-r-lg`}
        >
          <p className={`font-mono text-xs uppercase tracking-widest ${accent.tag} mb-2`}>
            {highlight.label}
          </p>
          <p className="text-slate-700 text-sm leading-relaxed italic">
            {highlight.text}
          </p>
        </motion.div>
      )}
    </div>
  )
}

