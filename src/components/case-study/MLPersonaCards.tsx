'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface MLPersonaCardsProps {
  isLightBackground?: boolean
}

export default function MLPersonaCards({ isLightBackground = false }: MLPersonaCardsProps) {
  const personas = [
    {
      name: 'The Techy Analyst',
      type: 'TECHNICAL_USER',
      image: '/images/case-study/iq-plugin/Persona - Techy Analyst 1.png',
      role: 'Data Analyst / BI Analyst / Business Analyst',
      description: 'Self-sufficient, detail-oriented, and resourceful power users who understand data deeply.',
      goals: [
        'Push data-driven decision making',
        'Enable others to self-serve and explore',
        'Automate repetitive analysis tasks',
      ],
      painPoints: [
        'Manual data cleansing bottlenecks',
        'Ad hoc requests from stakeholders',
        'Data quality inconsistencies',
      ],
      needs: [
        'Right-click dataset entry (natural workflow)',
        'Advanced controls accessible when needed',
        'Keyboard shortcuts and power-user features',
      ],
    },
    {
      name: 'The Financial Strategist',
      type: 'BUSINESS_USER',
      image: '/images/case-study/iq-plugin/Persona - Reporting Guru 1.png',
      role: 'Finance Leader / Budget Strategist / Performance Analyst',
      description: 'Goal-oriented, collaborative, and analytical users who focus on informed decisions.',
      goals: [
        'Enhance financial planning with accurate data',
        'Monitor key financial metrics and KPIs',
        'Generate reliable forecasts and projections',
      ],
      painPoints: [
        'Difficulty interpreting complex data',
        'Reliance on IT for data extraction',
        'Report generation bottlenecks',
      ],
      needs: [
        'Guided 4-step workflow',
        'Inline explanations and teaching',
        'Clear, actionable error messaging',
      ],
    },
  ]

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
          // USER_PROFILES
        </span>
        <h3 className="font-serif text-slate-900 text-2xl md:text-3xl">
          User Personas
        </h3>
        <p className="text-slate-600 text-base max-w-2xl mx-auto">
          Two distinct user types drove the dual-experience approach: power users who need control, and business users who need guidance.
        </p>
      </motion.div>

      {/* Horizontal Spec Sheet Cards */}
      <div className="flex flex-col gap-6">
        {personas.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col md:flex-row bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-[var(--accent-teal)]/30 transition-all duration-300"
          >
            {/* Left Side - Image (30%) */}
            <div className="relative w-full md:w-[30%] bg-slate-50">
              <div className="relative h-56 md:h-full md:min-h-[300px]">
                <Image 
                  src={p.image} 
                  alt={p.name} 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>
              {/* Type Badge - Mobile */}
              <div className="md:hidden absolute top-3 right-3">
                <span className={`
                  font-mono text-[10px] px-2 py-1 rounded uppercase tracking-widest
                  ${p.type === 'TECHNICAL_USER' 
                    ? 'text-white bg-[var(--accent-teal)]' 
                    : 'text-white bg-emerald-600'}
                `}>
                  [{p.type}]
                </span>
              </div>
            </div>

            {/* Right Side - Content (70%) */}
            <div className="flex-1 p-6 md:p-8">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h4 className="font-serif text-slate-900 text-xl md:text-2xl">
                    {p.name}
                  </h4>
                  {/* Type Badge - Desktop */}
                  <span className={`
                    hidden md:inline-block font-mono text-[10px] px-3 py-1 rounded uppercase tracking-widest border
                    ${p.type === 'TECHNICAL_USER' 
                      ? 'text-[var(--accent-teal)] bg-[var(--accent-teal-50)] border-[var(--accent-teal-200)]' 
                      : 'text-emerald-600 bg-emerald-50 border-emerald-200'}
                  `}>
                    [{p.type}]
                  </span>
                </div>
                <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-2">
                  {p.role}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>

              {/* 3-Column Grid: Goals / Pains / Needs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-100 pt-5">
                {/* Goals */}
                <div>
                  <h5 className="font-mono text-[10px] text-[var(--accent-blue)] uppercase tracking-widest mb-3">
                    // GOALS
                  </h5>
                  <div className="space-y-2">
                    {p.goals.map((g, j) => (
                      <p key={j} className="text-slate-700 text-xs leading-relaxed flex items-start gap-2">
                        <span className="text-[var(--accent-blue)] mt-0.5">+</span>
                        <span>{g}</span>
                      </p>
                    ))}
                  </div>
                </div>

                {/* Pain Points */}
                <div>
                  <h5 className="font-mono text-[10px] text-red-500 uppercase tracking-widest mb-3">
                    // PAINS
                  </h5>
                  <div className="space-y-2">
                    {p.painPoints.map((pp, j) => (
                      <p key={j} className="text-slate-600 text-xs leading-relaxed flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">×</span>
                        <span>{pp}</span>
                      </p>
                    ))}
                  </div>
                </div>

                {/* Needs */}
                <div>
                  <h5 className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest mb-3">
                    // NEEDS
                  </h5>
                  <div className="space-y-2">
                    {p.needs.map((n, j) => (
                      <p key={j} className="text-slate-700 text-xs leading-relaxed flex items-start gap-2">
                        <span className="text-emerald-500 mt-0.5">&gt;</span>
                        <span>{n}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Design Implication Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-slate-900 rounded-xl p-6"
      >
        <div className="flex items-start gap-3">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest flex-shrink-0">
            // DESIGN_IMPLICATION
          </span>
          <p className="text-slate-300 text-sm leading-relaxed">
            These personas drove a <span className="text-emerald-400 font-medium">dual-experience approach</span>: 
            Technical Users get right-click entry points and advanced controls, 
            while Business Users get guided workflows with inline teaching.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
