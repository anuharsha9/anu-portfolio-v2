'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Lock, Youtube, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const caseStudies = [
  {
    slug: 'reportcaster',
    title: 'ReportCaster',
    subtitle: '50yr Legacy → Modern Hub',
    metric: '75%',
    metricLabel: 'fewer clicks',
    description: 'Modernized a 50-year-old platform\'s scheduler powering 20M+ schedules weekly. Integrated 5 legacy subsystems intelligently into the main product hub.',
    image: '/images/case-study/ReportCaster/ReportCaster Explorer.png',
    accentColor: '#F59E0B', // Amber
    accentBg: 'from-amber-500/20 to-amber-600/5',
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
    accentColor: '#0BA2B5', // Teal
    accentBg: 'from-teal-500/20 to-teal-600/5',
    locked: false,
  },
  {
    slug: 'iq-plugin',
    title: 'IQ Plugin',
    subtitle: '3 Tools + Discover Page',
    metric: '1',
    metricLabel: 'unified hub',
    description: 'Unified 3 DSML tools into one browser extension with a custom Discover page—featuring tutorials, documentation, and tool descriptions.',
    image: '/images/case-study/iq-plugin/IQ Navigation Tiles 1.png',
    accentColor: '#8B5CF6', // Violet
    accentBg: 'from-violet-500/20 to-violet-600/5',
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

        {/* Work Grid - 3 Equal Cards with Enhanced Visuals */}
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
                {/* Card Container with Accent Border on Hover */}
                <div 
                  className="relative bg-white rounded-2xl overflow-hidden h-full transition-all duration-500 hover:shadow-2xl"
                  style={{
                    boxShadow: hoveredIndex === index 
                      ? `0 25px 50px -12px ${study.accentColor}30, 0 0 0 1px ${study.accentColor}40`
                      : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  {/* Image Container with Accent Gradient */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {/* Background Pattern */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${study.accentBg}`} />
                    
                    {/* Main Image */}
                    <div className="absolute inset-4 rounded-lg overflow-hidden shadow-xl border border-slate-200/50">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    
                    {/* Metric Badge - Floating */}
                    <div className="absolute bottom-0 left-4 translate-y-1/2 z-10">
                      <div 
                        className="rounded-xl px-4 py-2.5 shadow-lg border"
                        style={{ 
                          backgroundColor: 'white',
                          borderColor: `${study.accentColor}30`,
                        }}
                      >
                        <div className="flex items-baseline gap-1.5">
                          <span 
                            className="font-mono text-2xl font-bold"
                            style={{ color: study.accentColor }}
                          >
                            {study.metric}
                          </span>
                          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                            {study.metricLabel}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Locked Badge */}
                    {study.locked && (
                      <div className="absolute top-4 right-4">
                        <div 
                          className="backdrop-blur-sm rounded-full p-2.5 shadow-lg"
                          style={{ backgroundColor: `${study.accentColor}20` }}
                        >
                          <Lock className="w-4 h-4" style={{ color: study.accentColor }} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-8">
                    {/* Title Row */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 
                          className="font-serif text-xl text-slate-900 transition-colors duration-300"
                          style={{ color: hoveredIndex === index ? study.accentColor : undefined }}
                        >
                          {study.title}
                        </h3>
                        <p className="font-mono text-xs text-slate-400 uppercase tracking-wider mt-1">
                          {study.subtitle}
                        </p>
                      </div>
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{ 
                          backgroundColor: hoveredIndex === index ? `${study.accentColor}15` : 'transparent',
                        }}
                      >
                        <ArrowRight 
                          className="w-4 h-4 transition-all duration-300"
                          style={{ 
                            color: hoveredIndex === index ? study.accentColor : '#94a3b8',
                            transform: hoveredIndex === index ? 'translateX(2px)' : 'translateX(0)',
                          }}
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {study.description}
                    </p>

                    {/* View Case Study Link */}
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <span 
                        className="font-mono text-xs uppercase tracking-wider transition-colors duration-300"
                        style={{ color: hoveredIndex === index ? study.accentColor : '#94a3b8' }}
                      >
                        View Case Study →
                      </span>
                    </div>
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
