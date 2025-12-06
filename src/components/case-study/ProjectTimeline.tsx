'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { getTheme } from '@/lib/design-system'

interface TimelineEvent {
  id: string
  label: string
  title: string
  description?: string
  details?: string
}

interface ProjectTimelineProps {
  events: TimelineEvent[]
  isLightBackground?: boolean
}

export default function ProjectTimeline({ events, isLightBackground = true }: ProjectTimelineProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const t = getTheme(true) // Force light background

  return (
    <div className="bg-[var(--bg-light)]">
      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className={`h-px flex-1 ${t.divider}`}></div>
            <h3 className={`${t.text} text-lg md:text-xl font-serif font-semibold whitespace-nowrap`}>Project Timeline</h3>
            <div className={`h-px flex-1 ${t.divider}`}></div>
            <div className="h-px w-8 bg-[var(--accent-teal)]"></div>
          </div>

          <div className="relative">
            <div className={`absolute left-6 top-0 bottom-0 w-0.5 ${t.divider}`}></div>

            <div className="space-y-4">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative flex items-start gap-4"
                >
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full ${t.cardBg} border-2 border-[var(--accent-teal)] flex items-center justify-center shadow-sm`}>
                      <span className={`${t.textAccent} text-xs font-mono font-bold`}>{event.label}</span>
                    </div>
                  </div>

                  <motion.div
                    className={`flex-1 ${t.cardBg} rounded-lg p-4 md:p-5 border ${t.border} shadow-sm transition-all duration-300 cursor-pointer group hover:shadow-md hover:border-[var(--accent-teal)]/30`}
                    onClick={() => event.details && setExpandedId(expandedId === event.id ? null : event.id)}
                    whileHover={{ y: -2, scale: 1.01, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className={`${t.text} text-base md:text-lg font-serif font-semibold group-hover:text-[var(--accent-teal)] transition-colors`}>{event.title}</h4>
                        {event.details && (
                          <button className={`${t.textAccent} opacity-0 group-hover:opacity-100 transition-opacity`} aria-label={expandedId === event.id ? 'Collapse details' : 'Expand details'}>
                            <svg className={`w-4 h-4 transition-transform ${expandedId === event.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        )}
                      </div>
                      {event.description && <p className={`${t.textMuted} text-sm md:text-base leading-relaxed`}>{event.description}</p>}
                      <AnimatePresence>
                        {expandedId === event.id && event.details && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                            <p className={`${t.textMuted} text-sm md:text-base leading-relaxed pt-2 mt-2 border-t ${t.border}`}>{event.details}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
