'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface IQPersonaCardsProps {
  isLightBackground?: boolean
  title?: string
  description?: string
}

export default function IQPersonaCards({
  isLightBackground = false,
  title = 'User Personas',
  description = 'Built through SME discussions, customer rep interviews, and AI-assisted synthesis. The goal: expand beyond regular BI users to reach **business users** who never touched data science tools before.'
}: IQPersonaCardsProps) {
  const personas = [
    {
      name: 'Mark Bennett',
      type: 'TECHNICAL_USER',
      title: 'The Tech Visionary',
      image: '/images/case-study/iq-plugin/Persona - Reporting Guru-technical 1.png',
      goals: [
        'Direct model parameter access',
        'Batch processing automation',
      ],
      painPoints: [
        'Abstraction hides critical controls',
        'Wizard-based flows feel slow',
      ],
      needs: [
        'Raw SQL/API exposure',
        'Keyboard-first navigation',
      ],
    },
    {
      name: 'Lisa Carter',
      type: 'BUSINESS_USER',
      title: 'The Financial Strategist',
      image: '/images/case-study/iq-plugin/Persona - Reporting Guru 1.png',
      goals: [
        'One-click insight generation',
        'Plain-language explanations',
      ],
      painPoints: [
        'Technical jargon = abandonment',
        'Configuration paralysis',
      ],
      needs: [
        'Guided "happy paths"',
        'Auto-generated summaries',
      ],
    },
    {
      name: 'Dan',
      type: 'DEVELOPER',
      title: 'The Analytics Innovator',
      image: '/images/case-study/iq-plugin/Persona - BI Developer - With Data 1.png',
      goals: [
        'Consistent component behavior',
        'Debuggable error states',
      ],
      painPoints: [
        'Inconsistent APIs across features',
        'Silent failures in pipelines',
      ],
      needs: [
        'Verbose logging modes',
        'Component-level documentation',
      ],
    },
    {
      name: 'Jamie',
      type: 'POWER_USER',
      title: 'The Techy Analyst',
      image: '/images/case-study/iq-plugin/Persona - Techy Analyst 1.png',
      goals: [
        'Self-service without IT tickets',
        'Shareable, repeatable queries',
      ],
      painPoints: [
        'Manual data prep overhead',
        'Results locked in silos',
      ],
      needs: [
        'Template-based workflows',
        'Export-anywhere capability',
      ],
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'TECHNICAL_USER': return { bg: 'bg-blue-600', text: 'text-[var(--accent-teal)]', border: 'border-[var(--accent-teal-200)]', soft: 'bg-[var(--accent-teal-50)]' }
      case 'BUSINESS_USER': return { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-200', soft: 'bg-emerald-50' }
      case 'DEVELOPER': return { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-200', soft: 'bg-purple-50' }
      case 'POWER_USER': return { bg: 'bg-amber-600', text: 'text-amber-600', border: 'border-amber-200', soft: 'bg-amber-50' }
      default: return { bg: 'bg-slate-600', text: 'text-slate-600', border: 'border-slate-200', soft: 'bg-slate-50' }
    }
  }

  // Parse markdown bold syntax in description
  const renderDescription = (text: string) => {
    const parts = text.split(/\*\*(.*?)\*\*/g)
    return parts.map((part, i) =>
      i % 2 === 1 ? <strong key={i} className="text-slate-900 font-semibold">{part}</strong> : part
    )
  }

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
          // USER_TOPOLOGY
        </span>
        <h3 className="font-serif text-slate-900 text-2xl md:text-3xl">
          {title}
        </h3>
        <p className="text-slate-600 text-base max-w-3xl mx-auto">
          {renderDescription(description)}
        </p>
      </motion.div>

      {/* 2x2 Grid of Vertical Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {personas.map((p, i) => {
          const colors = getTypeColor(p.type)
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-[var(--accent-teal)]/30 transition-all duration-300 group"
            >
              {/* Top - Image with Overlay - Desaturated by default, color on hover */}
              <div className="relative h-48 bg-slate-100 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Name & Tag Overlay - Bottom Left */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <h4 className="font-serif text-white text-xl mb-1">
                        {p.name}
                      </h4>
                      <p className="font-mono text-white/70 text-[10px] uppercase tracking-widest">
                        {p.title}
                      </p>
                    </div>
                    <span className={`
                      font-mono text-[9px] px-2 py-1 rounded uppercase tracking-widest text-white ${colors.bg}
                    `}>
                      [{p.type}]
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom - Data Grid */}
              <div className="p-5 flex-1">
                <div className="grid grid-cols-3 gap-4">
                  {/* Goals */}
                  <div>
                    <h5 className="font-mono text-[9px] text-[var(--accent-blue)] uppercase tracking-widest mb-2">
                      // GOALS
                    </h5>
                    <div className="space-y-1.5">
                      {p.goals.map((g, j) => (
                        <p key={j} className="text-slate-700 text-[11px] leading-snug flex items-start gap-1.5">
                          <span className="text-[var(--accent-blue)] mt-0.5 text-[10px]">+</span>
                          <span>{g}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Pain Points */}
                  <div>
                    <h5 className="font-mono text-[9px] text-red-500 uppercase tracking-widest mb-2">
                      // PAINS
                    </h5>
                    <div className="space-y-1.5">
                      {p.painPoints.map((pp, j) => (
                        <p key={j} className="text-slate-600 text-[11px] leading-snug flex items-start gap-1.5">
                          <span className="text-red-500 mt-0.5 text-[10px]">×</span>
                          <span>{pp}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Needs */}
                  <div>
                    <h5 className="font-mono text-[9px] text-emerald-500 uppercase tracking-widest mb-2">
                      // NEEDS
                    </h5>
                    <div className="space-y-1.5">
                      {p.needs.map((n, j) => (
                        <p key={j} className="text-slate-700 text-[11px] leading-snug flex items-start gap-1.5">
                          <span className="text-emerald-500 mt-0.5 text-[10px]">&gt;</span>
                          <span>{n}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Design Implication Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-slate-900 rounded-xl p-6"
      >
        <div className="flex items-start gap-3">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest flex-shrink-0">
            // DESIGN_IMPLICATION
          </span>
          <p className="text-slate-300 text-sm leading-relaxed">
            Four personas, one interface. The solution: <span className="text-emerald-400 font-medium">layered progressive disclosure</span> that
            surfaces simplicity by default while keeping power accessible on demand.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
