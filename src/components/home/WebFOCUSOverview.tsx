'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import MotionSection from '@/components/ui/MotionSection'
import MLFunctionsSection from './MLFunctionsSection'
import IQPluginSection from './IQPluginSection'

// The 4 key metrics that matter (Quality > Quantity)
const keyMetrics = [
  {
    value: '20M+',
    label: 'Schedules',
    caption: 'Processed weekly across enterprise deployments.',
  },
  {
    value: '75%',
    label: 'Fewer Clicks',
    caption: 'Reduction in friction for primary workflows.',
  },
  {
    value: '3',
    label: 'Core Systems',
    caption: 'Modernized: Scheduling, ML Training, & Insights.',
  },
  {
    value: '1',
    label: 'Design System',
    caption: 'Unified UI patterns introduced for the first time.',
  },
]

export default function WebFOCUSOverview() {
  return (
    <>
      {/* Executive Summary Section */}
      <MotionSection id="work-overview" className="bg-slate-50 py-16 md:py-24 lg:py-32 relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
          
          {/* Executive Summary: 2-Column Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start"
          >
            {/* Left Column (40%) - The Context */}
            <div className="lg:col-span-2 space-y-6">
              {/* Section Label */}
              <div className="flex items-center gap-4">
                <span className="font-mono text-[var(--accent-teal)] text-xs uppercase tracking-wider">
                  Recent Work
                </span>
                <div className="h-px flex-1 bg-slate-200 max-w-xs"></div>
              </div>

              {/* Title */}
              <h2 className="font-serif text-slate-900 text-2xl md:text-3xl lg:text-4xl leading-tight">
                Modernizing WebFOCUS at Cloud Software Group
              </h2>

              {/* Description - Larger, more readable */}
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  <a
                    href="https://www.ibi.com/products/ibi-webfocus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent-teal)] hover:underline font-medium"
                  >
                    ibi™ WebFOCUS®
                  </a>
                  {' '}is an enterprise analytics platform serving millions of users globally.
                </p>

                <p>
                  For three years, I was the <strong className="text-slate-900">UX leader</strong> for WebFOCUS—driving modernization of its most complex, highest-impact legacy subsystems with 50+ years of technical debt.
                </p>
              </div>

              {/* Link to retrospective */}
              <Link
                href="/work/reportcaster"
                className="inline-flex items-center gap-2 text-[var(--accent-teal)] font-medium hover:text-[var(--accent-teal-700)] transition-colors duration-300 group"
              >
                <span>Read the full retrospective</span>
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right Column (60%) - The Proof: Metrics + Growth Card */}
            <div className="lg:col-span-3 space-y-4">
              {/* 2x2 Metric Grid */}
              <div className="grid grid-cols-2 gap-4">
                {keyMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.1 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-[var(--accent-teal)]/30 transition-all duration-300"
                  >
                    {/* Big Number - Monospace for Engineering aesthetic */}
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="font-mono text-[var(--accent-teal)] text-3xl md:text-4xl font-bold leading-none">
                        {metric.value}
                      </span>
                      <span className="font-mono text-slate-700 text-sm md:text-base font-semibold">
                        {metric.label}
                      </span>
                    </div>
                    {/* Caption */}
                    <p className="text-slate-500 text-sm leading-snug">
                      {metric.caption}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Career Inflection Card - Growth Story */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-slate-50 border-l-4 border-violet-500 border-y border-r border-slate-200 p-6 md:p-8 rounded-r-xl"
              >
                {/* Label */}
                <span className="font-mono text-violet-600 text-[10px] uppercase tracking-widest block mb-3">
                  // THE_GROWTH
                </span>
                
                {/* Headline */}
                <h4 className="font-serif text-slate-900 text-lg md:text-xl italic mb-4">
                  WebFOCUS changed me.
                </h4>
                
                {/* Body */}
                <div className="text-slate-600 text-sm leading-relaxed mb-6 space-y-4">
                  <p>
                    I joined this team and quickly realized I was out of my depth. My only option was <strong className="text-slate-900">radical curiosity</strong>—talking to everyone, learning obsessively, earning trust through understanding. That curiosity earned me everything: autonomy, respect, and immense growth.
                  </p>
                  <p>
                    My Director of Design became my anchor. Daily 1:1s. He taught me to lead, to present, to believe in myself. He took raw potential and polished it. He called me a <strong className="text-slate-900">UX Leader</strong> before I could call myself one. Today, I mentor others because he mentored me.
                  </p>
                </div>
                
                {/* Footer Tag */}
                <span className="inline-block font-mono text-[10px] text-slate-500 uppercase tracking-widest bg-white border border-slate-200 px-3 py-1.5 rounded">
                  OUTCOME: TRANSFORMED
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Context Block - Case Studies heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="mt-20 md:mt-28 space-y-6 text-center"
          >
            <h3 className="font-serif text-slate-900 text-xl md:text-2xl">
              Three modernization initiatives I led inside WebFOCUS
            </h3>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Below are three core areas I owned within the WebFOCUS ecosystem — from a 50+ year-old scheduler to ML model training and an AI-driven insights hub.
            </p>
          </motion.div>
        </div>
      </MotionSection>

      {/* ML Functions Section - Text Left, Video Right */}
      <MLFunctionsSection />

      {/* IQ Plugin Section - Video Left, Text Right (Locked Teaser) */}
      <IQPluginSection />
    </>
  )
}
