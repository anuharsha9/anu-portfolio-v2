'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Lock } from 'lucide-react'
import { useState } from 'react'
import HeroTerminal from '@/components/case-study/HeroTerminal'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const caseStudies = [
  {
    slug: 'reportcaster',
    title: 'ReportCaster',
    subtitle: '50yr Legacy → Modern Hub',
    metric: '5→1',
    metricLabel: 'unified system',
    description: 'I modernized a 50-year-old scheduler powering 20M+ schedules weekly—unifying 5 legacy subsystems into one coherent experience.',
    image: '/images/case-study/ReportCaster/ReportCaster Explorer.png',
    fileName: 'legacy_scheduler_refactor.js',
    accentColor: 'var(--accent-amber)',
    locked: false,
  },
  {
    slug: 'ml-functions',
    title: 'Democratizing ML',
    subtitle: 'Black Box → Guided Flow',
    metric: '12→8',
    metricLabel: 'step workflow',
    description: 'I transformed a fragmented 12-step ML process into a guided 4-step workflow. No more dead-ends—just clear guidance.',
    image: '/images/case-study/ml-functions/11. Train Model Workflow - Confusion Matrix.png',
    fileName: 'ml_wizard_pipeline.py',
    accentColor: 'var(--accent-teal)',
    locked: false,
  },
  {
    slug: 'iq-plugin',
    title: 'Driving Data Science Adoption',
    subtitle: '3 Tools → 1 Hub',
    metric: '3',
    metricLabel: 'workflows owned',
    description: 'I unified 3 scattered DSML tools into one Hub—with a Discover page featuring tutorials, docs, and everything users need to get started.',
    image: '/images/case-study/iq-plugin/Final Look.png',
    fileName: 'iq_hub_unified_view.tsx',
    accentColor: 'var(--accent-violet)',
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

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            I shaped the product direction of{' '}
            <a
              href="https://www.ibi.com/products/ibi-webfocus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-teal)] hover:underline font-medium"
            >
              ibi™ WebFOCUS®
            </a>
            —an enterprise analytics platform powering 20M+ schedules weekly across hundreds of global organizations. I led the UX modernization of its core workflows, earned trust from veteran engineers, and created patterns that scaled across the platform.
          </p>

          {/* Skimmer hint */}
          <p className="text-slate-500 text-sm">
            Start with <Link href="/work/reportcaster" className="text-[var(--accent-teal)] hover:underline font-medium">ReportCaster</Link> — the flagship transformation.
          </p>
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
                <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  {/* HeroTerminal Image with Bleed Effect - bleeds off RIGHT and BOTTOM */}
                  <div className="relative h-[300px] overflow-hidden pl-5 pt-5">
                    <div className="h-[340px] w-[calc(100%+40px)]">
                      <HeroTerminal
                        imageSrc={study.image}
                        fileName={study.fileName}
                        accentColor={study.accentColor}
                        alt={study.title}
                      />
                    </div>

                    {/* Locked Badge - Overlay on terminal */}
                    {study.locked && (
                      <div className="absolute top-9 right-4 z-10">
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
                          <AnimatedCounter value={study.metric} duration={1.2} />
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
                        className={`w-4 h-4 text-slate-400 group-hover:text-[var(--accent-teal)] transition-all duration-300 flex-shrink-0 mt-1 ${hoveredIndex === index ? 'translate-x-1' : ''
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
