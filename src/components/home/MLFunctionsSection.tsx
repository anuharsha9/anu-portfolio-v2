'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import InsightBadge from '@/components/ui/InsightBadge'

/**
 * MLFunctionsSection - The "AI UX" Story
 * Layout: Text Left, Video Right (mirroring ReportCaster)
 */

const metrics = [
  {
    value: '100%',
    label: 'Discoverable',
    note: 'vs 0% before',
  },
  {
    value: '4-Step',
    label: 'Flow',
    note: 'down from 12+',
  },
  {
    value: '0',
    label: 'Errors',
    note: 'in usability testing',
  },
  {
    value: 'Self-Service',
    label: 'Enablement',
    note: 'for analysts',
  },
]

export default function MLFunctionsSection() {
  return (
    <section id="ml-functions" className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Feature Card - Text Left, Visual Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white rounded-3xl border border-slate-200 p-6 md:p-10 lg:p-12 shadow-sm hover:shadow-md hover:border-[#0BA2B5]/30 transition-all duration-500 group">
            
            {/* Left - Content */}
            <div className="space-y-6 order-2 lg:order-1">
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-[#0BA2B5] text-xs uppercase tracking-wider font-semibold">
                  Machine Learning UX
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2">
                <InsightBadge variant="subtle" size="sm">
                  Figma
                </InsightBadge>
                <InsightBadge variant="subtle" size="sm">
                  AI Patterns
                </InsightBadge>
                <InsightBadge variant="subtle" size="sm">
                  Complex Data
                </InsightBadge>
              </div>

              {/* Title */}
              <h3 className="font-serif text-slate-900 text-3xl md:text-4xl leading-tight">
                ML Functions
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Transformed a complex 12-step coding task into a guided 4-step visual workflow for business analysts.
              </p>

              {/* Metrics Grid - 2x2 */}
              <div className="grid grid-cols-2 gap-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-slate-50 border border-slate-200 rounded-lg p-3 hover:border-[#0BA2B5]/30 transition-colors duration-300"
                  >
                    <div className="flex items-baseline gap-1">
                      <span className="font-mono text-[#0BA2B5] text-lg md:text-xl font-bold leading-none">
                        {metric.value}
                      </span>
                      <span className="text-slate-700 text-xs font-medium">
                        {metric.label}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs mt-1">
                      {metric.note}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/work/ml-functions"
                className="inline-flex items-center gap-2 text-[#0BA2B5] font-medium hover:text-[#0990A2] transition-colors duration-300 group/link"
              >
                <span>View Case Study</span>
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

            {/* Right - Visual */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 border border-slate-200 order-1 lg:order-2">
              <Image
                src="/images/case-study/ml-functions/ml-functions-cover.png"
                alt="ML Functions Training Workflow"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

