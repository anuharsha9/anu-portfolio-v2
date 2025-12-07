'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import InsightBadge from '@/components/ui/InsightBadge'

/**
 * FeaturedCaseStudy - Large feature card for ReportCaster case study
 * Focus: Design complexity and scale, not code
 */
export default function FeaturedCaseStudy() {
  return (
    <section id="featured-case-study" className="bg-slate-50 py-16 md:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          {/* Section Label */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-[#0BA2B5] text-xs uppercase tracking-wider">
              Featured Work
            </span>
            <div className="h-px flex-1 bg-slate-200 max-w-xs"></div>
          </div>

          {/* Feature Card - White with subtle shadow */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white rounded-2xl border border-slate-200 p-6 md:p-10 lg:p-12 shadow-sm hover:shadow-md hover:border-[#0BA2B5]/30 transition-all duration-500 group">
            
            {/* Left - Video/Visual */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                poster="/images/case-study/ReportCaster/rc-cover.png"
              >
                <source src="/videos/rc-prototype-walkthrough.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              {/* Overline - Design-focused tags */}
              <div className="flex flex-wrap items-center gap-3">
                <InsightBadge variant="subtle" size="sm">
                  Design Systems
                </InsightBadge>
                <InsightBadge variant="subtle" size="sm">
                  Enterprise UX
                </InsightBadge>
                <InsightBadge variant="subtle" size="sm">
                  User Research
                </InsightBadge>
              </div>

              {/* Title */}
              <h3 className="font-serif text-slate-900 text-3xl md:text-4xl lg:text-5xl leading-tight">
                Taming Enterprise Data
              </h3>

              {/* Subtitle */}
              <p className="font-mono text-slate-500 text-sm">
                ReportCaster — Redesigning a 50-year-old scheduler
              </p>

              {/* Description */}
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Revamped a 50-year-old scheduler powering 20 million schedules run every week. 
                Eliminated multi-tab sprawl, reduced complexity, and consolidated 5 legacy subsystems 
                into one unified hub-native experience.
              </p>

              {/* THE OUTCOME - Impact Block (replaces Tech Edge) */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#0BA2B5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-mono text-slate-700 text-xs uppercase tracking-wider font-semibold">
                    The Outcome
                  </span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <span className="font-semibold text-slate-900">75% reduction</span> in scheduling time. 
                  <span className="font-semibold text-slate-900"> 5 legacy tools → 1 unified Hub</span> experience 
                  serving <span className="font-semibold text-slate-900">20M+ users</span> weekly.
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/work/reportcaster"
                className="inline-flex items-center gap-2 text-[#0BA2B5] font-medium hover:text-[#0990A2] transition-colors duration-300 group/link"
              >
                <span>View Full Case Study</span>
                <svg 
                  className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
