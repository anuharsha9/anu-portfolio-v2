'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

interface TimelineEvent {
  id: string
  label: string
  title: string
  description?: string
  details?: string
  type?: 'standard' | 'pivot' | 'milestone'
  evidenceImage?: {
    src: string
    alt: string
    isBlurred?: boolean
  }
}

interface ProjectTimelineProps {
  events: TimelineEvent[]
  isLightBackground?: boolean
}

export default function ProjectTimeline({ events, isLightBackground = true }: ProjectTimelineProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  // Get node styling based on type
  const getNodeStyles = (type?: string) => {
    switch (type) {
      case 'pivot':
        return {
          borderColor: 'border-amber-400',
          bgColor: 'bg-amber-100',
          textColor: 'text-amber-600',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
          )
        }
      case 'milestone':
        return {
          borderColor: 'border-emerald-500',
          bgColor: 'bg-emerald-100',
          textColor: 'text-emerald-600',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )
        }
      default:
        return {
          borderColor: 'border-[var(--accent-teal)]',
          bgColor: 'bg-white',
          textColor: 'text-[var(--accent-teal)]',
          icon: null
        }
    }
  }

  return (
    <div className="bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200"></div>
            <h3 className="text-slate-900 text-lg md:text-xl font-serif font-semibold whitespace-nowrap">
              Project Timeline
            </h3>
            <div className="h-px flex-1 bg-slate-200"></div>
            <div className="h-px w-8 bg-[var(--accent-teal)]"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200"></div>

            <div className="space-y-4">
              {events.map((event, index) => {
                const nodeStyles = getNodeStyles(event.type)
                const isPivot = event.type === 'pivot'
                const isMilestone = event.type === 'milestone'
                
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="relative flex items-start gap-4"
                  >
                    {/* Timeline Node */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full ${nodeStyles.bgColor} border-2 ${nodeStyles.borderColor} flex items-center justify-center shadow-sm`}>
                        {nodeStyles.icon ? (
                          <span className={nodeStyles.textColor}>{nodeStyles.icon}</span>
                        ) : (
                          <span className={`${nodeStyles.textColor} text-xs font-mono font-bold`}>{event.label}</span>
                        )}
                      </div>
                    </div>

                    {/* Card Content - 3-column grid when has evidence */}
                    <motion.div
                      className={`flex-1 bg-white rounded-lg p-4 md:p-5 border shadow-sm transition-all duration-300 cursor-pointer group hover:shadow-md ${
                        isPivot 
                          ? 'border-l-4 border-l-amber-400 border-slate-200 hover:border-amber-400/50' 
                          : isMilestone
                            ? 'border-l-4 border-l-emerald-500 border-slate-200 hover:border-emerald-500/50'
                            : 'border-slate-200 hover:border-[var(--accent-teal)]/30'
                      }`}
                      onClick={() => event.details && setExpandedId(expandedId === event.id ? null : event.id)}
                      whileHover={{ y: -2, scale: 1.005, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`grid gap-4 ${event.evidenceImage ? 'grid-cols-1 md:grid-cols-[2fr_1fr]' : 'grid-cols-1'}`}>
                        {/* Text Content (Col 1-2) */}
                        <div className="space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2 flex-wrap">
                              {isPivot && (
                                <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-amber-100 text-amber-700 rounded border border-amber-200">
                                  Rejected
                                </span>
                              )}
                              {isMilestone && (
                                <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-emerald-100 text-emerald-700 rounded border border-emerald-200">
                                  Milestone
                                </span>
                              )}
                              <h4 className={`text-slate-900 text-base md:text-lg font-serif font-semibold group-hover:text-[var(--accent-teal)] transition-colors`}>
                                {event.title}
                              </h4>
                            </div>
                            {event.details && (
                              <button 
                                className="text-[var(--accent-teal)] opacity-0 group-hover:opacity-100 transition-opacity" 
                                aria-label={expandedId === event.id ? 'Collapse details' : 'Expand details'}
                              >
                                <svg className={`w-4 h-4 transition-transform ${expandedId === event.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                            )}
                          </div>
                          {event.description && (
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                              {event.description}
                            </p>
                          )}
                          
                          {/* Expandable Details */}
                          <AnimatePresence>
                            {expandedId === event.id && event.details && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }} 
                                animate={{ height: 'auto', opacity: 1 }} 
                                exit={{ height: 0, opacity: 0 }} 
                                transition={{ duration: 0.3 }} 
                                className="overflow-hidden"
                              >
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed pt-2 mt-2 border-t border-slate-200">
                                  {event.details}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Evidence Thumbnail (Col 3) */}
                        {event.evidenceImage && (
                          <div className={`relative aspect-video rounded-md overflow-hidden border border-slate-200 bg-slate-100 ${event.evidenceImage.isBlurred ? 'group/img' : ''}`}>
                            <Image
                              src={event.evidenceImage.src}
                              alt={event.evidenceImage.alt}
                              fill
                              className={`object-cover transition-all duration-300 ${event.evidenceImage.isBlurred ? 'blur-sm group-hover/img:blur-none' : ''}`}
                            />
                            {event.evidenceImage.isBlurred && (
                              <div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center opacity-100 group-hover/img:opacity-0 transition-opacity">
                                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 bg-white/80 px-2 py-1 rounded">
                                  Hover to reveal
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
