'use client'

import { motion } from 'framer-motion'
import { getTheme } from '@/lib/design-system'

interface IQPluginTimelineProps {
  isLightBackground?: boolean
}

export default function IQPluginTimeline({ isLightBackground = false }: IQPluginTimelineProps) {
  const t = getTheme(true) // Force light background

  const phases = [
    {
      id: 'phase-01',
      phase: '01',
      title: 'STRATEGIC_DEFINITION',
      body: 'Transitioned from ML Functions to lead the broader DSML strategy. Framed IQ not as a set of features, but as the unified "Operating System" for analytics.',
      status: 'COMPLETED',
    },
    {
      id: 'phase-02',
      phase: '02',
      title: 'SYSTEM_ARCHITECTURE',
      body: 'Designed the "Hub-First" model, unifying Discover, NLQ, and Predict into a single extensible plugin architecture. Replaced 3 fragmented entry points with 1 cohesive "Front Door".',
      status: 'COMPLETED',
    },
    {
      id: 'phase-03',
      phase: '03',
      title: 'ORGANIZATIONAL_ALIGNMENT',
      body: 'Aligned 3 distinct Product Managers and the Principal Data Scientist around a shared UI pattern, moving the org from "Feature Teams" to "Platform Thinking".',
      status: 'COMPLETED',
    },
    {
      id: 'phase-04',
      phase: '04',
      title: 'ENGINEERING_HANDOFF',
      body: 'Delivered high-fidelity specs and the unified design system. The IQ Plugin is now the official "North Star" for the WebFOCUS roadmap, currently in active engineering for the 2026 cycle.',
      status: 'IN_PROGRESS',
      isCriticalPivot: true,
    },
  ]

  return (
    <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-amber-600 text-xs tracking-widest uppercase">
              // STRATEGIC_RELEASE_LOG
            </span>
            <div className="h-px flex-1 bg-slate-200 max-w-[100px]"></div>
          </div>
          <h3 className={`${t.text} text-2xl md:text-3xl font-serif`}>
            Project Evolution
          </h3>
          <p className={`${t.textMuted} text-sm md:text-base leading-relaxed max-w-2xl`}>
            From strategic definition to engineering handoff — four phases that transformed IQ from concept to platform.
          </p>
        </div>

        {/* Release Stream Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-slate-300 via-slate-300 to-amber-400"></div>

          {/* Phase Nodes */}
          <div className="space-y-0">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 md:pl-16 py-6 group"
              >
                {/* Node Dot */}
                <div className={`absolute left-2.5 md:left-4.5 top-7 w-3 h-3 rounded-full border-2 ${phase.isCriticalPivot
                  ? 'bg-amber-500 border-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]'
                  : phase.status === 'COMPLETED'
                    ? 'bg-emerald-500 border-emerald-500'
                    : 'bg-white border-slate-400'
                  }`}></div>

                {/* Content */}
                <div className={`space-y-3 ${phase.isCriticalPivot ? 'pl-4 border-l-2 border-amber-400 -ml-4' : ''}`}>
                  {/* Phase Tag */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`font-mono text-[10px] uppercase tracking-widest ${phase.isCriticalPivot ? 'text-amber-600' : 'text-slate-400'
                      }`}>
                      Phase {phase.phase}
                    </span>
                    <span className={`font-mono text-xs uppercase tracking-widest font-semibold ${phase.isCriticalPivot ? 'text-amber-700' : 'text-slate-700'
                      }`}>
                      {phase.title}
                    </span>
                    {phase.isCriticalPivot && (
                      <span className="font-mono text-[9px] uppercase tracking-widest text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                        CRITICAL_PIVOT
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <p className={`${t.textMuted} text-sm md:text-base leading-relaxed`}>
                    {phase.body}
                  </p>

                  {/* Status Badge */}
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest ${phase.status === 'IN_PROGRESS'
                      ? 'text-amber-600'
                      : 'text-emerald-600'
                      }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${phase.status === 'IN_PROGRESS'
                        ? 'bg-amber-500 animate-pulse'
                        : 'bg-emerald-500'
                        }`}></span>
                      STATUS: {phase.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="bg-slate-900 text-slate-300 p-6 rounded-lg mt-8">
          <div className="space-y-2">
            <span className="font-mono text-emerald-400 text-xs tracking-widest uppercase block">
              &gt; CURRENT_STATE:
            </span>
            <p className="text-sm md:text-base leading-relaxed text-slate-300">
              IQ Plugin is the official "North Star" for the WebFOCUS 2026 roadmap. Design specs complete; engineering in active development.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
