'use client'

import { motion } from 'framer-motion'
import { Crown, Pickaxe, Target, Users } from 'lucide-react'

export interface ScopeCard {
  tag: string
  tagColor: 'blue' | 'amber' | 'purple' | 'emerald'
  headline: string
  body: string
  icon: 'architect' | 'archaeologist' | 'strategist' | 'multiplier'
}

interface ScopeOfPracticeProps {
  cards: ScopeCard[]
  credentials?: string
}

const tagColorClasses = {
  blue: 'text-[var(--accent-blue)]',
  amber: 'text-amber-600',
  purple: 'text-[var(--accent-violet)]',
  emerald: 'text-emerald-600',
}

const iconMap = {
  architect: Crown,
  archaeologist: Pickaxe,
  strategist: Target,
  multiplier: Users,
}

export default function ScopeOfPractice({ cards, credentials }: ScopeOfPracticeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 rounded-full bg-[var(--accent-teal)] flex-shrink-0"></div>
        <div className="h-px flex-1 bg-slate-200"></div>
        <h3 className="text-[var(--accent-teal)] text-lg md:text-xl font-serif font-semibold">Scope of Practice</h3>
        <div className="h-px flex-1 bg-slate-200"></div>
        <div className="h-px w-8 bg-[var(--accent-teal)]"></div>
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => {
          const IconComponent = iconMap[card.icon]
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-slate-200 p-6 md:p-8 rounded-xl hover:border-slate-300 transition-colors"
            >
              {/* Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className={`font-mono text-[10px] uppercase tracking-widest ${tagColorClasses[card.tagColor]}`}>
                  {'// '}{card.tag}
                </span>
                <IconComponent className="w-5 h-5 text-slate-300" />
              </div>

              {/* Headline */}
              <h4 className="font-serif text-lg text-slate-900 mb-3">
                {card.headline}
              </h4>

              {/* Body - render with bold support */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {card.body.split(/(\*\*.*?\*\*)/).map((part, i) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i} className="text-slate-900">{part.slice(2, -2)}</strong>
                  }
                  return part
                })}
              </p>
            </motion.div>
          )
        })}
      </div>

      {/* Credentials Badge */}
      {credentials && (
        <div className="pt-6 mt-6 border-t border-slate-200">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-teal)]/10 border border-[var(--accent-teal)]/30">
            <svg aria-hidden="true" className="w-4 h-4 text-[var(--accent-teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span className="text-[var(--accent-teal)] text-sm font-semibold">{credentials}</span>
          </div>
        </div>
      )}
    </motion.div>
  )
}

