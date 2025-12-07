'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

interface FrameworkPrinciple {
  letter: string
  title: string
  description: string
  systemLogic?: string // Optional custom code comment
}

interface FrameworkMatrixProps {
  principles: FrameworkPrinciple[]
  sectionMappings?: Record<string, string>
  caseStudyContext?: string // e.g., "ML_FUNCTIONS", "IQ_PLUGIN", "REPORTCASTER"
}

// Default technical reality notes (can be overridden per-principle)
const defaultSystemLogic: Record<string, string> = {
  D: "if (context === 'unknown') throw new DesignDebt();",
  E: "import { constraints } from '@team/engineering';",
  S: "const clarity = reduce(complexity, patterns);",
  I: "while (!validated) await feedback.iterate();",
  G: "return optimize(creativity, constraints);",
  N: "deploy(vision).to('production');",
}

export default function FrameworkMatrix({ 
  principles, 
  sectionMappings,
  caseStudyContext = 'CASE_STUDY'
}: FrameworkMatrixProps) {
  
  const handleNavigation = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <span className="font-mono text-xs text-[var(--accent-teal)] uppercase tracking-widest">
          // FRAMEWORK_APPLICATION
        </span>
        <h2 className="text-slate-900 text-2xl md:text-3xl lg:text-4xl font-serif leading-tight">
          D.E.S.I.G.N. Framework in Action
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          How I applied my design methodology to this project
        </p>
        <Link 
          href="/me#design-framework" 
          className="inline-flex items-center gap-2 text-[var(--accent-teal)] hover:text-[var(--accent-teal-700)] text-xs font-mono uppercase tracking-widest transition-colors duration-200 group"
        >
          <span>View full framework</span>
          <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </motion.div>

      {/* The Matrix Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full max-w-6xl mx-auto border border-slate-200 rounded-xl overflow-hidden bg-slate-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => {
            const sectionId = sectionMappings?.[principle.letter]
            const systemLogic = principle.systemLogic || defaultSystemLogic[principle.letter]
            
            // Calculate border classes for grid lines
            const isLastInRow = (index + 1) % 3 === 0
            const isLastRow = index >= principles.length - (principles.length % 3 || 3)
            const isLastItem = index === principles.length - 1
            
            const CellWrapper = sectionId ? 'a' : 'div'
            const cellProps = sectionId ? {
              href: `#${sectionId}`,
              onClick: handleNavigation(sectionId),
            } : {}

            return (
              <CellWrapper
                key={principle.letter}
                {...cellProps}
                className={`
                  bg-white p-6 md:p-8 transition-colors duration-200 group
                  ${sectionId ? 'cursor-pointer hover:bg-[var(--accent-teal-soft)]' : ''}
                  ${!isLastInRow ? 'lg:border-r border-slate-100' : ''}
                  ${!isLastRow && !isLastItem ? 'border-b border-slate-100' : ''}
                  ${index < principles.length - 2 ? 'md:border-b border-slate-100' : ''}
                  ${index % 2 === 0 && index < principles.length - 1 ? 'md:border-r border-slate-100' : ''}
                `}
              >
                {/* Header: Letter Tag + Title */}
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-mono text-lg md:text-xl font-bold text-[var(--accent-teal)]">
                    [{principle.letter}]
                  </span>
                  <h3 className={`font-serif text-lg md:text-xl text-slate-900 ${sectionId ? 'group-hover:text-[var(--accent-teal)] transition-colors' : ''}`}>
                    {principle.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {principle.description}
                </p>

                {/* System Logic - Code Comment Style */}
                {systemLogic && (
                  <div className="font-mono text-[10px] text-slate-400 bg-slate-50 p-3 rounded border border-slate-100">
                    <span className="text-emerald-600">// SYSTEM_LOGIC:</span>{' '}
                    <span className="text-slate-500">{systemLogic}</span>
                  </div>
                )}

                {/* Section Link Indicator */}
                {sectionId && (
                  <div className="mt-4 flex items-center gap-2 text-[var(--accent-teal)] text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span>→ Jump to section</span>
                  </div>
                )}
              </CellWrapper>
            )
          })}
        </div>
      </motion.div>

      {/* Footer Context Tag */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center"
      >
        <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
          // CONTEXT: {caseStudyContext}
        </span>
      </motion.div>
    </div>
  )
}
