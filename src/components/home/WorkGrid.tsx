'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Lock, Youtube } from 'lucide-react'
import { useState } from 'react'

const caseStudies = [
  {
    slug: 'reportcaster',
    title: 'ReportCaster',
    subtitle: '50yr Legacy → Modern Hub',
    metric: '75%',
    metricLabel: 'fewer clicks',
    description: 'Modernized a 50-year-old platform\'s scheduler powering 20M+ schedules weekly. Integrated 5 legacy subsystems intelligently into the main product hub for a unified experience.',
    image: '/images/case-study/reportcaster/Schedule List UI.png',
    color: 'var(--accent-teal)',
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
    color: 'var(--accent-teal)',
    locked: false,
  },
  {
    slug: 'iq-plugin',
    title: 'IQ Plugin',
    subtitle: '3 Tools + Discover Page',
    metric: '1',
    metricLabel: 'unified hub',
    description: 'Unified 3 DSML tools into one browser extension with a custom Discover page I designed — featuring tutorials, documentation links, and tool descriptions to drive adoption.',
    image: '/images/case-study/iq-plugin/IQ Plugin Cover.png',
    color: 'var(--accent-teal)',
    locked: true,
  },
]

export default function WorkGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-slate-50 py-16 md:py-24">
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

        {/* Work Grid - 3 Equal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link 
                href={`/work/${study.slug}`}
                className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-[var(--accent-teal)]/30 transition-all duration-500 h-full"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  {/* Metric Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                      <div className="flex items-baseline gap-1">
                        <span className="font-mono text-2xl font-bold text-[var(--accent-teal)]">
                          {study.metric}
                        </span>
                        <span className="font-mono text-xs text-slate-500 uppercase">
                          {study.metricLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Locked Badge */}
                  {study.locked && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-slate-900/80 backdrop-blur-sm rounded-full p-2">
                        <Lock className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title Row */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-serif text-xl text-slate-900 group-hover:text-[var(--accent-teal)] transition-colors">
                        {study.title}
                      </h3>
                      <p className="font-mono text-xs text-slate-500 uppercase tracking-wider">
                        {study.subtitle}
                      </p>
                    </div>
                    <ArrowRight 
                      className={`w-5 h-5 text-slate-400 group-hover:text-[var(--accent-teal)] transition-all duration-300 ${
                        hoveredIndex === index ? 'translate-x-1' : ''
                      }`}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {study.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

