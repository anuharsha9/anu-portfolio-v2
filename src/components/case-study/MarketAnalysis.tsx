'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

// Types for different display modes
interface Competitor {
  name: string
  tag?: string
  headline?: string
  painPoints?: string[]
  note?: string
  // For matrix mode
  features?: Record<string, boolean>
}

interface OurSolution {
  name: string
  tag: string
  headline: string
  body?: string
  differentiators: string[]
  // For matrix mode
  features?: Record<string, boolean>
  note?: string
}

interface Insight {
  tag: string
  title?: string
  body: string
}

interface MarketAnalysisProps {
  // Header
  sectionTag?: string
  title: string
  subtitle?: string

  // Data
  competitors: Competitor[]
  ourSolution: OurSolution

  // For matrix mode
  featureColumns?: { key: string; label: string }[]

  // Footer insight
  insight?: Insight

  // Styling
  accentColor?: 'teal' | 'amber' | 'violet'
  displayMode?: 'cards' | 'matrix'
  isLightBackground?: boolean
}

export default function MarketAnalysis({
  sectionTag = 'MARKET_ANALYSIS',
  title,
  subtitle,
  competitors,
  ourSolution,
  featureColumns,
  insight,
  accentColor = 'teal',
  displayMode = 'cards',
  isLightBackground = true,
}: MarketAnalysisProps) {

  // Accent color classes
  const accentClasses = {
    teal: {
      tag: 'text-[var(--accent-teal)]',
      border: 'border-[var(--accent-teal)]',
      bg: 'bg-[var(--accent-teal)]',
      bgLight: 'bg-emerald-50',
      borderLight: 'border-emerald-500',
      text: 'text-emerald-700',
      textAccent: 'text-emerald-600',
    },
    amber: {
      tag: 'text-amber-600',
      border: 'border-amber-500',
      bg: 'bg-amber-500',
      bgLight: 'bg-amber-50',
      borderLight: 'border-amber-500',
      text: 'text-amber-700',
      textAccent: 'text-amber-600',
    },
    violet: {
      tag: 'text-violet-600',
      border: 'border-violet-500',
      bg: 'bg-violet-500',
      bgLight: 'bg-violet-50',
      borderLight: 'border-violet-500',
      text: 'text-violet-700',
      textAccent: 'text-violet-600',
    },
  }

  const accent = accentClasses[accentColor]

  const CheckIcon = () => (
    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
      <Check className="w-4 h-4 text-emerald-600" />
    </div>
  )

  const XIcon = () => (
    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center mx-auto">
      <X className="w-4 h-4 text-red-400" />
    </div>
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-3"
      >
        <div className="flex items-center gap-3">
          <span className={`font-mono text-xs tracking-widest uppercase ${accent.tag}`}>
            {'// '}{sectionTag}
          </span>
          <div className="h-px flex-1 bg-slate-200 max-w-[100px]"></div>
        </div>
        <h3 className="text-slate-900 text-2xl md:text-3xl font-serif">
          {title}
        </h3>
        {subtitle && (
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        )}
      </motion.div>

      {/* Content - Cards or Matrix */}
      {displayMode === 'cards' ? (
        /* Cards Layout (2-row: competitors on top, our solution full-width below) */
        <div className="space-y-6">
          {/* Competitor Cards Row - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {competitors.map((competitor, index) => (
              <motion.div
                key={competitor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <div className="space-y-3">
                  {competitor.tag && (
                    <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest block">
                      {'// '}{competitor.tag}
                    </span>
                  )}
                  <div>
                    <h4 className="text-slate-700 text-base font-serif font-semibold">
                      {competitor.name}
                    </h4>
                    {competitor.headline && (
                      <p className="text-slate-500 text-xs mt-0.5">{competitor.headline}</p>
                    )}
                  </div>
                  {competitor.painPoints && (
                    <ul className="space-y-1.5">
                      {competitor.painPoints.slice(0, 3).map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-500 text-xs leading-snug">
                          <span className="text-red-400 mt-0.5 flex-shrink-0">−</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Our Solution Card - Full Width Below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`bg-white border-2 ${accent.border} shadow-lg rounded-xl p-6 md:p-8`}
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-8 items-start">
              {/* Left: Name & Headline */}
              <div className="space-y-2">
                <span className={`font-mono text-[10px] ${accent.textAccent} uppercase tracking-widest block`}>
                  {'// '}{ourSolution.tag}
                </span>
                <h4 className="text-slate-900 text-xl md:text-2xl font-serif font-semibold">
                  {ourSolution.name}
                </h4>
                <p className={`${accent.text} text-lg md:text-xl font-semibold`}>
                  {ourSolution.headline}
                </p>
                {ourSolution.body && (
                  <p className="text-slate-600 text-sm leading-relaxed pt-2">
                    {ourSolution.body}
                  </p>
                )}
              </div>

              {/* Right: Differentiators Grid */}
              <div className={`grid grid-cols-2 gap-3 p-4 rounded-lg ${accent.bgLight}`}>
                {ourSolution.differentiators.map((diff, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className={`${accent.textAccent} mt-0.5 font-bold flex-shrink-0`}>+</span>
                    <span className="text-slate-700 text-sm">{diff}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        /* Matrix Layout (Table) */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-4 px-4 font-mono text-xs uppercase tracking-widest text-slate-400">
                  Platform
                </th>
                {featureColumns?.map((col) => (
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
            <tbody>
              {/* Competitors */}
              {competitors.map((competitor, index) => (
                <motion.tr
                  key={competitor.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`border-b border-slate-200 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                    }`}
                >
                  <td className="py-4 px-4">
                    <span className="font-semibold text-slate-900">{competitor.name}</span>
                  </td>
                  {featureColumns?.map((col) => (
                    <td key={col.key} className="py-4 px-4 text-center">
                      {competitor.features?.[col.key] ? <CheckIcon /> : <XIcon />}
                    </td>
                  ))}
                  <td className="py-4 px-4">
                    <span className="text-sm text-slate-500">{competitor.note}</span>
                  </td>
                </motion.tr>
              ))}
              {/* Our Solution Row */}
              <motion.tr
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: competitors.length * 0.1 }}
                className={`border-b border-slate-200 ${accent.bgLight}`}
              >
                <td className="py-4 px-4">
                  <span className={`font-semibold ${accent.text}`}>{ourSolution.name}</span>
                </td>
                {featureColumns?.map((col) => (
                  <td key={col.key} className="py-4 px-4 text-center">
                    {ourSolution.features?.[col.key] ? <CheckIcon /> : <XIcon />}
                  </td>
                ))}
                <td className="py-4 px-4">
                  <span className={`text-sm ${accent.textAccent} font-medium`}>{ourSolution.note}</span>
                </td>
              </motion.tr>
            </tbody>
          </table>
        </motion.div>
      )}

      {/* Insight Footer */}
      {insight && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`${accent.bgLight} border-l-4 ${accent.borderLight} p-6 rounded-r-lg`}
        >
          <div className="flex items-start gap-4">
            <div className="flex-1 space-y-2">
              <h4 className={`font-mono text-xs uppercase tracking-widest ${accent.text}`}>
                {insight.tag}
              </h4>
              {insight.title && (
                <p className={`font-semibold ${accent.text}`}>{insight.title}</p>
              )}
              <p className="text-slate-700 text-sm leading-relaxed">
                {insight.body}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

