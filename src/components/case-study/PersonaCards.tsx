'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface PersonaCardsProps {
  isLightBackground?: boolean
}

export default function PersonaCards({ isLightBackground = true }: PersonaCardsProps) {
  const personas = [
    {
      name: 'BI Developer',
      image: '/images/case-study/ReportCaster/Persona - BI Developer - No Data.png',
      type: 'TECHNICAL_USER',
      description: 'Developers who need to schedule reports but may not have existing data infrastructure',
      goals: ['Schedule reports reliably', 'Understand system behavior', 'Integrate with workflows'],
      painPoints: ['Fragmented interfaces', 'Unclear system behavior', 'Complex configuration'],
      needs: ['Clear, predictable UX', 'Documentation & guidance', 'Consistent patterns'],
    },
    {
      name: 'Reporting Guru',
      image: '/images/case-study/ReportCaster/Persona - Reporting Guru.png',
      type: 'POWER_USER',
      description: 'Power users who understand the system deeply but still struggle with the fragmented interface',
      goals: ['Efficient management', 'Advanced configuration', 'Quick feature access'],
      painPoints: ['Multiple tabs/dialogs', 'Context switching', 'Hidden features'],
      needs: ['Unified interface', 'Fast workflows', 'Accessible controls'],
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
          // USER_PERSONAS
        </span>
        <h3 className="text-slate-900 text-2xl md:text-3xl font-serif">
          User Personas
        </h3>
        
        {/* Context Note - Inline at top */}
        <div className="inline-block font-mono text-xs text-slate-500 bg-slate-100 py-2 px-4 rounded-lg border border-slate-200">
          // CONTEXT: Inherited foundational research. Used to guide architectural decisions.
        </div>
      </motion.div>

      {/* Persona Cards - Stacked Horizontal Layout */}
      <div className="flex flex-col gap-6">
        {personas.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
            className="flex flex-col md:flex-row bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-[var(--accent-teal-400)]/30 transition-all duration-300 group"
          >
            {/* Left Side - Persona Image (25%) */}
            <div className="relative w-full md:w-[25%] bg-slate-100">
              <div className="relative h-48 md:h-full md:min-h-[280px]">
                <Image 
                  src={p.image} 
                  alt={p.name} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              {/* Role Type Badge - Mobile */}
              <div className="md:hidden absolute top-3 right-3">
                <span className={`
                  font-mono text-[10px] px-2 py-1 rounded uppercase tracking-widest text-white
                  ${p.type === 'TECHNICAL_USER' ? 'bg-[var(--accent-teal)]' : 'bg-purple-600'}
                `}>
                  [{p.type}]
                </span>
              </div>
            </div>

            {/* Right Side - Content (75%) */}
            <div className="flex-1 p-6 md:p-8">
              {/* Header Section */}
              <div className="mb-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h4 className="font-serif text-slate-900 text-xl md:text-2xl">
                    {p.name}
                  </h4>
                  {/* Role Type Badge - Desktop */}
                  <span className={`
                    hidden md:inline-block font-mono text-[10px] px-3 py-1 rounded uppercase tracking-widest border
                    ${p.type === 'TECHNICAL_USER' 
                      ? 'text-[var(--accent-teal)] bg-[var(--accent-teal-50)] border-[var(--accent-teal-200)]' 
                      : 'text-purple-600 bg-purple-50 border-purple-200'}
                  `}>
                    [{p.type}]
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>

              {/* Attributes Grid - 3 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 border-t border-slate-100 pt-5">
                {/* Goals Column */}
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

                {/* Pain Points Column */}
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

                {/* Needs Column */}
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
            Both personas share the same pain: <span className="text-emerald-400 font-medium">fragmented interfaces and context switching</span>. 
            The solution unified scheduling into a single, predictable workflow.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
