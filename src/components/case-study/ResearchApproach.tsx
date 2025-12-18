'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Search, Cpu, BarChart3, GraduationCap, Shield, Target, Network, Ban, Lightbulb } from 'lucide-react'

export interface ResearchMethod {
  category: string
  description: string
  items: string[]
  icon: 'book' | 'users' | 'search' | 'cpu' | 'chart' | 'graduation' | 'shield' | 'target' | 'network' | 'lightbulb'
}

export interface ResearchConstraint {
  type: 'warning' | 'success'
  label: string
  body: string
}

export interface ResearchApproachData {
  sectionTag: string
  title: string
  subtitle: string
  methods: ResearchMethod[]
  constraint?: ResearchConstraint
  strategy?: ResearchConstraint
}

interface ResearchApproachProps {
  data: ResearchApproachData
  accentColor?: 'teal' | 'amber' | 'violet'
}

const iconMap = {
  book: BookOpen,
  users: Users,
  search: Search,
  cpu: Cpu,
  chart: BarChart3,
  graduation: GraduationCap,
  shield: Shield,
  target: Target,
  network: Network,
  lightbulb: Lightbulb,
}

export default function ResearchApproach({ data, accentColor = 'teal' }: ResearchApproachProps) {
  const { sectionTag, title, subtitle, methods, constraint, strategy } = data

  const accentClasses = {
    teal: {
      tag: 'text-[var(--accent-teal)]',
      icon: 'text-[var(--accent-teal)]',
      border: 'border-[var(--accent-teal)]',
      bg: 'bg-[var(--accent-teal-50)]',
      hoverBorder: 'hover:border-[var(--accent-teal)]/30',
    },
    amber: {
      tag: 'text-amber-600',
      icon: 'text-amber-600',
      border: 'border-amber-500',
      bg: 'bg-amber-50',
      hoverBorder: 'hover:border-amber-500/30',
    },
    violet: {
      tag: 'text-violet-600',
      icon: 'text-violet-600',
      border: 'border-violet-500',
      bg: 'bg-violet-50',
      hoverBorder: 'hover:border-violet-500/30',
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

      {/* Constraint + Strategy Row (if both exist) */}
      {(constraint || strategy) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {constraint && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <Ban className="w-5 h-5 text-amber-600" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-amber-700">
                    {constraint.label}
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {constraint.body}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {strategy && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`${accent.bg} border-l-4 ${accent.border} p-5 rounded-r-lg`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-10 h-10 rounded-full ${accent.bg} flex items-center justify-center`}>
                  <Network className={`w-5 h-5 ${accent.icon}`} />
                </div>
                <div className="space-y-2">
                  <h4 className={`font-mono text-xs uppercase tracking-widest ${accent.tag}`}>
                    {strategy.label}
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {strategy.body}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {methods.map((method, i) => {
          const IconComponent = iconMap[method.icon]
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md ${accent.hoverBorder} transition-all duration-300`}
            >
              {/* Icon & Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className={`${accent.icon} flex-shrink-0`}>
                  <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-slate-900 text-base font-serif leading-tight">
                    {method.category}
                  </h4>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-sm mb-3 leading-relaxed">
                {method.description}
              </p>

              {/* Items List */}
              <ul className="space-y-1.5">
                {method.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-slate-300 font-mono text-xs mt-0.5 flex-shrink-0">→</span>
                    <span className="font-mono text-xs text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

