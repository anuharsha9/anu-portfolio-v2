'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Lock, Youtube } from 'lucide-react'
import { useState } from 'react'
import HeroTerminal from '@/components/case-study/HeroTerminal'

const caseStudies = [
  {
    slug: 'reportcaster',
    title: 'ReportCaster',
    subtitle: '50yr Legacy → Modern Hub',
    metric: '75%',
    metricLabel: 'fewer clicks',
    description: 'Modernized a 50-year-old platform\'s scheduler powering 20M+ schedules weekly. Integrated 5 legacy subsystems intelligently into the main product hub.',
    image: '/images/case-study/ReportCaster/ReportCaster Explorer.png',
    fileName: 'legacy_scheduler_refactor.js',
    accentColor: '#F59E0B',
    locked: false,
  },
  {
    slug: 'ml-functions',
    title: 'ML Functions',
    subtitle: 'Black Box → Guided Flow',
    metric: '100%',
    metricLabel: 'discoverability',
    description: 'Transformed complex 12-step ML training into a guided 4-step visual workflow. Zero dead-end errors in testing.',
    image: '/images/case-study/ml-functions/11. Train Model Workflow - Confusion Matrix.png',
    fileName: 'ml_wizard_pipeline.py',
    accentColor: '#0BA2B5',
    locked: false,
  },
  {
    slug: 'iq-plugin',
    title: 'IQ Plugin',
    subtitle: '3 Tools + Discover Page',
    metric: '1',
    metricLabel: 'unified hub',
    description: 'Unified 3 DSML tools into one browser extension with a custom Discover page—featuring tutorials, documentation, and tool descriptions.',
    image: '/images/case-study/iq-plugin/Final Look.png',
    fileName: 'iq_hub_unified_view.tsx',
    accentColor: '#8B5CF6',
    locked: true,
  },
]

export default function WorkGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="work-overview" className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header with WebFOCUS Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-widest block mb-4">
            // RECENT_WORK
          </span>
          
          <h2 className="font-serif text-slate-900 text-2xl md:text-3xl lg:text-4xl mb-6">
            Modernizing WebFOCUS
          </h2>
          
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            <a 
              href="https://www.ibi.com/products/ibi-webfocus" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--accent-teal)] hover:underline font-medium"
            >
              ibi™ WebFOCUS®
            </a>
            {' '}is an enterprise analytics platform serving millions of users across hundreds of global organizations.
          </p>
          
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            For three years, I was the <strong className="text-slate-900">UX leader for WebFOCUS</strong>—driving modernization of its most complex, highest-impact legacy subsystems with 50+ years of technical debt.
          </p>

          {/* Virtual User Group Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full px-5 py-2.5 shadow-sm">
              <span className="text-slate-600 text-sm">
                Presented at <span className="font-medium text-slate-900">Virtual User Group Sessions</span>
              </span>
              <a 
                href="https://www.youtube.com/watch?v=fJFqAqBbLnM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[var(--accent-teal)] hover:text-[var(--accent-teal-dark)] transition-colors text-sm font-medium"
              >
                <Youtube className="w-4 h-4" />
                Watch
              </a>
            </div>
            <p className="text-slate-500 text-xs italic">
              Only designer invited to present alongside my Director of Design
            </p>
          </motion.div>
        </motion.div>

        {/* Work Grid - 3 Cards with HeroTerminal images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group"
            >
              <Link 
                href={`/work/${study.slug}`}
                className="block h-full"
              >
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-500 h-full flex flex-col">
                  {/* HeroTerminal Image with Bleed Effect */}
                  <div className="relative h-[280px] overflow-hidden" onClick={(e) => e.preventDefault()}>
                    <div className="absolute inset-x-4 top-4 bottom-[-60px]">
                      <HeroTerminal
                        imageSrc={study.image}
                        fileName={study.fileName}
                        accentColor={study.accentColor}
                        alt={study.title}
                      />
                    </div>
                    
                    {/* Locked Badge - Overlay on terminal */}
                    {study.locked && (
                      <div className="absolute top-8 right-8 z-10">
                        <div className="bg-slate-900/80 backdrop-blur-sm rounded-full p-2">
                          <Lock className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    {/* Metric Badge */}
                    <div className="mb-4">
                      <div className="inline-flex items-baseline gap-1.5 bg-slate-50 rounded-lg px-3 py-1.5 border border-slate-100">
                        <span className="font-mono text-xl font-bold text-[var(--accent-teal)]">
                          {study.metric}
                        </span>
                        <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                          {study.metricLabel}
                        </span>
                      </div>
                    </div>

                    {/* Title Row */}
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-serif text-lg text-slate-900 group-hover:text-[var(--accent-teal)] transition-colors">
                          {study.title}
                        </h3>
                        <p className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">
                          {study.subtitle}
                        </p>
                      </div>
                      <ArrowRight 
                        className={`w-4 h-4 text-slate-400 group-hover:text-[var(--accent-teal)] transition-all duration-300 flex-shrink-0 mt-1 ${
                          hoveredIndex === index ? 'translate-x-1' : ''
                        }`}
                      />
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                      {study.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
