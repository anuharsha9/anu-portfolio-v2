'use client'

import { motion } from 'framer-motion'
import { getTheme } from '@/lib/design-system'

interface IQCompetitiveAnalysisProps {
  isLightBackground?: boolean
}

export default function IQCompetitiveAnalysis({ isLightBackground = false }: IQCompetitiveAnalysisProps) {
  const t = getTheme(true)

  const competitors = [
    {
      name: 'Power BI',
      tag: 'STATUS: HIGH_FRICTION',
      headline: 'Deep but Daunting',
      painPoints: [
        'Azure ML requires technical expertise',
        'Configuration complexity deters business users',
        'Learning curve measured in weeks',
      ],
    },
    {
      name: 'Tableau',
      tag: 'STATUS: HIGH_FRICTION',
      headline: 'Powerful but Scripted',
      painPoints: [
        'Python/R integrations require coding',
        'Business analysts locked out of ML features',
        'High barrier to entry for non-programmers',
      ],
    },
    {
      name: 'Qlik',
      tag: 'STATUS: USABILITY_DEBT',
      headline: 'Feature-Rich but Frustrating',
      painPoints: [
        'Predictive capabilities buried in menus',
        'Inconsistent UX across features',
        'Users abandon before finding value',
      ],
    },
  ]

  const iqSolution = {
    name: 'IQ Plugin',
    tag: 'STRATEGY: GUIDED_COMPLEXITY',
    headline: 'The Third Lane.',
    body: "While competitors optimized for 'Technical Depth,' we optimized for 'Guidance.' We didn't lower the ceiling; we raised the floor.",
    keyDifferentiators: [
      'Progressive disclosure for all skill levels',
      'Same power, better pathways',
      'Business users self-serve; experts accelerate',
    ],
  }

  return (
      <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[var(--accent-teal)] text-xs tracking-widest uppercase">
            // MARKET_INTELLIGENCE
          </span>
          <div className="h-px flex-1 bg-slate-200 max-w-[100px]"></div>
        </div>
        <h3 className={`${t.text} text-2xl md:text-3xl font-serif`}>
          The Market Gap Analysis
        </h3>
        <p className={`${t.textMuted} text-sm md:text-base leading-relaxed max-w-3xl`}>
          Competitors were forcing users to choose between &apos;Technical Depth&apos; and &apos;Ease of Use.&apos; We identified a third lane.
          </p>
        </div>

      {/* 3+1 Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Competitor Cards - Muted/Grayscale */}
        {competitors.map((competitor, index) => (
          <motion.div
            key={competitor.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-slate-50 border border-slate-200 rounded-xl p-6 opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="space-y-4">
              {/* Tag */}
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">
                // {competitor.tag}
              </span>

              {/* Name */}
                <div>
                <h4 className="text-slate-700 text-lg font-serif font-semibold">
                  {competitor.name}
                </h4>
                <p className="text-slate-600 text-sm mt-1">{competitor.headline}</p>
                </div>

              {/* Pain Points */}
              <ul className="space-y-2">
                {competitor.painPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-500 text-xs">
                    <span className="text-slate-400 mt-0.5">−</span>
                    <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
          </motion.div>
        ))}

        {/* IQ Solution Card - Highlighted */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1.02 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white border-2 border-blue-500 shadow-xl rounded-xl p-6 md:p-8 relative z-10 lg:scale-105"
        >
          <div className="space-y-4">
            {/* Tag */}
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest block">
              // {iqSolution.tag}
            </span>

            {/* Name */}
                  <div>
              <h4 className="text-slate-900 text-xl font-serif font-semibold">
                {iqSolution.name}
              </h4>
              <p className="text-blue-700 text-lg font-semibold mt-1">{iqSolution.headline}</p>
            </div>

            {/* Body */}
            <p className="text-slate-600 text-sm leading-relaxed">
              {iqSolution.body}
            </p>

            {/* Key Differentiators */}
            <ul className="space-y-2 pt-2 border-t border-blue-100">
              {iqSolution.keyDifferentiators.map((diff, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                  <span className="text-blue-500 mt-0.5 font-bold">+</span>
                  <span>{diff}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
        </motion.div>
        </div>

      {/* Strategic Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6"
      >
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest block mb-2">
              // STRATEGIC_POSITION
            </span>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed">
              <span className="font-semibold">IQ&apos;s positioning:</span> Feature-rich like the leaders (Power BI, Tableau), but significantly more approachable for non-technical users. We match the depth while being easier to adopt than Qlik.
          </p>
        </div>
      </div>
      </motion.div>
    </div>
  )
}
