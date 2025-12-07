'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

interface CompetitorRow {
  name: string
  guidedFlow: boolean
  integrated: boolean
  noCode: boolean
  isOurs?: boolean
  note?: string
}

interface MLCompetitiveMatrixProps {
  isLightBackground?: boolean
}

export default function MLCompetitiveMatrix({ isLightBackground = true }: MLCompetitiveMatrixProps) {
  const competitors: CompetitorRow[] = [
    {
      name: 'Power BI',
      guidedFlow: false,
      integrated: true,
      noCode: false,
      note: 'Deep Azure ML integration, but requires technical expertise',
    },
    {
      name: 'Tableau',
      guidedFlow: false,
      integrated: false,
      noCode: false,
      note: 'Python/R integrations, script-first approach',
    },
    {
      name: 'Qlik Sense',
      guidedFlow: false,
      integrated: true,
      noCode: false,
      note: 'Powerful analytics, steep learning curve',
    },
    {
      name: 'WebFOCUS ML (New)',
      guidedFlow: true,
      integrated: true,
      noCode: true,
      isOurs: true,
      note: 'Guided 4-step flow, no coding required',
    },
  ]

  const columns = [
    { key: 'guidedFlow', label: 'Guided Flow?' },
    { key: 'integrated', label: 'Integrated?' },
    { key: 'noCode', label: 'No-Code?' },
  ]

  const CheckIcon = () => (
    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
      <Check className="w-4 h-4 text-emerald-600" />
    </div>
  )

  const XIcon = () => (
    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
      <X className="w-4 h-4 text-red-400" />
    </div>
  )

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3"
      >
        <span className="font-mono text-[var(--accent-teal)] text-xs tracking-widest uppercase">
          // COMPETITIVE_ANALYSIS
        </span>
        <h3 className="text-slate-900 text-2xl md:text-3xl font-serif">
          Feature Comparison Matrix
        </h3>
        <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
          Mapping the competitive landscape to find our differentiation opportunity.
        </p>
      </motion.div>

      {/* Matrix Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="overflow-x-auto"
      >
        <table className="w-full border-collapse">
          {/* Header */}
          <thead>
            <tr className="border-b-2 border-slate-200">
              <th className="text-left py-4 px-4 font-mono text-xs uppercase tracking-widest text-slate-400">
                Platform
              </th>
              {columns.map((col) => (
                <th 
                  key={col.key}
                  className="text-center py-4 px-4 font-mono text-xs uppercase tracking-widest text-slate-400"
                >
                  {col.label}
                </th>
              ))}
              <th className="text-left py-4 px-4 font-mono text-xs uppercase tracking-widest text-slate-400">
                Notes
              </th>
            </tr>
          </thead>
          
          {/* Body */}
          <tbody>
            {competitors.map((competitor, index) => (
              <motion.tr
                key={competitor.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`border-b border-slate-200 ${
                  competitor.isOurs 
                    ? 'bg-emerald-50' 
                    : index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                }`}
              >
                {/* Platform Name */}
                <td className="py-4 px-4">
                  <span className={`font-semibold ${
                    competitor.isOurs ? 'text-emerald-700' : 'text-slate-900'
                  }`}>
                    {competitor.name}
                  </span>
                </td>
                
                {/* Feature Columns */}
                <td className="py-4 px-4 text-center">
                  {competitor.guidedFlow ? <CheckIcon /> : <XIcon />}
                </td>
                <td className="py-4 px-4 text-center">
                  {competitor.integrated ? <CheckIcon /> : <XIcon />}
                </td>
                <td className="py-4 px-4 text-center">
                  {competitor.noCode ? <CheckIcon /> : <XIcon />}
                </td>
                
                {/* Notes */}
                <td className="py-4 px-4">
                  <span className={`text-sm ${
                    competitor.isOurs ? 'text-emerald-600 font-medium' : 'text-slate-500'
                  }`}>
                    {competitor.note}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Insight Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg"
      >
        <div className="flex items-start gap-4">
          <span className="text-2xl flex-shrink-0">💡</span>
          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-widest text-emerald-700">
              OPPORTUNITY: THE_ACCESSIBILITY_GAP
            </h4>
            <p className="text-slate-700 text-sm leading-relaxed">
              Every competitor had powerful ML capabilities, but none made them accessible to non-technical users. 
              Our differentiation: <span className="font-semibold">guided workflows that don&apos;t require coding or ML expertise</span>.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

