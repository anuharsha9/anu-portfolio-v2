'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import MotionSection from '@/components/ui/MotionSection'
import WebFOCUSInitiativeRow from './WebFOCUSInitiativeRow'
import SignatureLogo from '@/components/brand/SignatureLogo'
import SectionDivider from '@/components/brand/SectionDivider'
import ScheduleRangeVisual from './ScheduleRangeVisual'

const initiatives = [
  {
    overline: 'Redesigning enterprise scheduling at massive scale',
    title: 'ReportCaster',
    bullets: [
      '75% fewer clicks in scheduling',
      'Eliminated multi-tab sprawl',
      'Reduced complexity and eliminated common support pain points',
      '5 legacy subsystems → 1 unified hub-native experience',
    ],
    impact: 'Revamping a 40-year-old scheduler powering 20 million schedules run every week.',
    ctaText: 'View ReportCaster Case Study',
    ctaHref: '/work/reportcaster',
    hoverMicrocopy: 'Redesigned a 40-year-old scheduler into a unified, hub-native experience.',
    orientation: 'image-left' as const,
    visualImage: '/images/case-study/ReportCaster/rc-cover.png',
  },
  {
    overline: 'Making machine learning usable for non-experts',
    title: 'ML Functions',
    bullets: [
      '100% discoverability in SME testing',
      '7-9 clicks from entry to training (down from 12+)',
      'Guided 4-step workflow',
      'Eliminated dead-end errors',
    ],
    impact: 'Transformed ML training into a guided workflow — improving discoverability, speed, and accuracy for business analysts.',
    ctaText: 'View ML Functions Case Study',
    ctaHref: '/work/ml-functions',
    hoverMicrocopy: 'Turned a black-box ML feature into a guided, step-based workflow for real users.',
    orientation: 'image-right' as const,
    visualImage: '/images/case-study/ml-functions/ml-functions-cover.png',
  },
  {
    overline: 'Unifying AI insights inside the WebFOCUS Hub',
    title: 'IQ Plugin',
    bullets: [
      '4 DSML tools → 1 plugin',
      'Zero context switching across insights features',
      'Immediate discoverability from the Hub',
      'Built-in guidance reduces learning curve',
    ],
    impact: 'Consolidated DSML features into one AI insights hub — reducing friction and boosting adoption across global deployments.',
    ctaText: 'View IQ Plugin Case Study',
    ctaHref: '/work/iq-plugin',
    hoverMicrocopy: 'Designed a hub-native plugin that centralizes AI, NLQ, and DSML insights.',
    orientation: 'image-left' as const,
    visualImage: '/images/case-study/iq-plugin/iq-cover.png',
  },
]

export default function WebFOCUSOverview() {
  return (
    <MotionSection id="work-overview" className="surface-light py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 relative">
      {/* Subtle Logo Watermark - Top Right Corner */}
      <div className="absolute top-8 right-8 opacity-[0.02] pointer-events-none hidden lg:block">
        <div className="w-24 h-24">
          <SignatureLogo className="w-full h-full text-black" />
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Intro Block */}
        <motion.div
          initial={{ opacity: 0, y: 20, visibility: 'hidden' as const }}
          whileInView={{ opacity: 1, y: 0, visibility: 'visible' as const }}
          viewport={{ once: true, amount: 0.15, margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: 'opacity, transform', opacity: 0, visibility: 'hidden' }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <p className="text-[var(--text-muted-light)] text-xs uppercase tracking-wider font-sans">
                My recent work
              </p>
              <h2 className="text-[var(--text-primary-light)] text-2xl xs:text-2xl sm:text-3xl md:text-4xl font-serif text-center relative">
                Modernizing WebFOCUS at Cloud Software Group
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-[var(--accent-teal)] opacity-60"></span>
              </h2>
            </div>

            {/* Company Logo & Case Study Links */}
            <div className="flex justify-center items-center gap-3 pt-2 flex-wrap">
              <a
                href="https://www.ibi.com/products/ibi-webfocus"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[var(--text-muted-light)] hover:text-[var(--accent-teal)] transition-colors duration-300 group"
                aria-label="Visit ibi WebFOCUS product page"
              >
                <span className="text-sm font-medium">ibi™ WebFOCUS®</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <span className="text-[var(--text-muted-light)]/40">·</span>
              <Link
                href="/work/reportcaster"
                className="flex items-center gap-2 text-[var(--text-muted-light)] hover:text-[var(--accent-teal)] transition-colors duration-300 group"
                aria-label="View ReportCaster case study"
              >
                <span className="text-sm font-medium">ReportCaster Case Study</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="space-y-4 text-[var(--text-muted-light)] text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            <p>
              <a
                href="https://www.ibi.com/products/ibi-webfocus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent-teal)] hover:underline"
              >
                ibi™ WebFOCUS®
              </a>
              {' '}is an enterprise analytics platform serving millions of users across hundreds of global organizations.
            </p>

            <p>
              For three years, I was the <strong>UX leader for WebFOCUS</strong>—driving modernization of its most complex, highest-impact legacy subsystems.
            </p>

            <p>
              <strong>ReportCaster</strong> (enterprise scheduling), <strong>Machine Learning Functions</strong> (model training workflows), and the <strong>IQ Plugin</strong> for Data Science & Machine Learning. These features carried 40+ years of technical debt, high user volume, and long-standing friction.
            </p>

            {/* Virtual User Group Link with Context */}
            <div className="pt-4 space-y-3">
              <p className="text-[var(--text-muted-light)] text-sm md:text-base leading-relaxed italic">
                As the only designer on the team aside from the Director of Design, I was also invited to co-host Virtual User Group Sessions for our enterprise customers—presenting alongside the Senior Product Manager of the WebFOCUS Hub.
              </p>
              <a
                href="https://www.youtube.com/watch?v=NnMGjEJFIX4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--text-muted-light)] hover:text-[var(--accent-teal)] transition-colors duration-300 text-sm font-medium"
                aria-label="Watch Virtual User Group session"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span>Watch Virtual User Group Session</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Impact Mini-Strip */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 xl:px-8 mt-12 md:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20, visibility: 'hidden' as const }}
          whileInView={{ opacity: 1, y: 0, visibility: 'visible' as const }}
          viewport={{ once: true, amount: 0.15, margin: '0px 0px -50px 0px' }}
          style={{ willChange: 'opacity, transform', opacity: 0, visibility: 'hidden' }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
            delay: 0.12
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 py-8 md:py-10 border-t border-b border-refined-light">
            <div className="relative bg-gradient-to-br from-black/5 to-black/3 rounded-2xl p-6 md:p-8 border border-refined-light border-t-2 border-t-[var(--accent-teal)]/30 hover:-translate-y-1 hover:border-[var(--accent-teal)]/40 hover:bg-gradient-to-br hover:from-black/8 hover:to-black/5 hover:shadow-[0_8px_16px_rgba(0,162,183,0.075)] transition-all duration-300 group overflow-hidden">
              {/* Subtle accent corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--accent-teal)]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-3">
                  <ScheduleRangeVisual />
                </div>
                <p className="text-sm md:text-base text-[var(--text-muted-light)] font-medium leading-snug">schedules processed per week across customer deployments</p>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-black/5 to-black/3 rounded-2xl p-6 md:p-8 border border-refined-light border-t-2 border-t-[var(--accent-teal)]/30 hover:-translate-y-1 hover:border-[var(--accent-teal)]/40 hover:bg-gradient-to-br hover:from-black/8 hover:to-black/5 hover:shadow-[0_8px_16px_rgba(0,162,183,0.075)] transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--accent-teal)]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col items-center text-center">
                <p className="text-2xl md:text-3xl font-semibold leading-none mb-3 transition-colors duration-300" style={{ color: 'var(--accent-teal)' }}>40-year-old</p>
                <p className="text-sm md:text-base text-[var(--text-muted-light)] font-medium leading-snug">workflows redesigned and unified under the WebFOCUS Hub</p>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-black/5 to-black/3 rounded-2xl p-6 md:p-8 border border-refined-light border-t-2 border-t-[var(--accent-teal)]/30 hover:-translate-y-1 hover:border-[var(--accent-teal)]/40 hover:bg-gradient-to-br hover:from-black/8 hover:to-black/5 hover:shadow-[0_8px_16px_rgba(0,162,183,0.075)] transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--accent-teal)]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col items-center text-center">
                <p className="text-2xl md:text-3xl font-semibold leading-none mb-3 transition-colors duration-300" style={{ color: 'var(--accent-teal)' }}>3 core</p>
                <p className="text-sm md:text-base text-[var(--text-muted-light)] font-medium leading-snug">subsystems modernized (scheduling, ML training, insights)</p>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-black/5 to-black/3 rounded-2xl p-6 md:p-8 border border-refined-light border-t-2 border-t-[var(--accent-teal)]/30 hover:-translate-y-1 hover:border-[var(--accent-teal)]/40 hover:bg-gradient-to-br hover:from-black/8 hover:to-black/5 hover:shadow-[0_8px_16px_rgba(0,162,183,0.075)] transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--accent-teal)]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col items-center text-center">
                <p className="text-2xl md:text-3xl font-semibold leading-none mb-3 transition-colors duration-300" style={{ color: 'var(--accent-teal)' }}>12 demos</p>
                <p className="text-sm md:text-base text-[var(--text-muted-light)] font-medium leading-snug">organization-wide presentations to 150-200 person business unit</p>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-black/5 to-black/3 rounded-2xl p-6 md:p-8 border border-refined-light border-t-2 border-t-[var(--accent-teal)]/30 hover:-translate-y-1 hover:border-[var(--accent-teal)]/40 hover:bg-gradient-to-br hover:from-black/8 hover:to-black/5 hover:shadow-[0_8px_16px_rgba(0,162,183,0.075)] transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--accent-teal)]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col items-center text-center">
                <p className="text-2xl md:text-3xl font-semibold leading-none mb-3 transition-colors duration-300" style={{ color: 'var(--accent-teal)' }}>Directors</p>
                <p className="text-sm md:text-base text-[var(--text-muted-light)] font-medium leading-snug">direct collaboration with Design, Engineering & Product leadership</p>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-black/5 to-black/3 rounded-2xl p-6 md:p-8 border border-refined-light border-t-2 border-t-[var(--accent-teal)]/30 hover:-translate-y-1 hover:border-[var(--accent-teal)]/40 hover:bg-gradient-to-br hover:from-black/8 hover:to-black/5 hover:shadow-[0_8px_16px_rgba(0,162,183,0.075)] transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--accent-teal)]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col items-center text-center">
                <p className="text-2xl md:text-3xl font-semibold leading-none mb-3 transition-colors duration-300" style={{ color: 'var(--accent-teal)' }}>Platform-wide</p>
                <p className="text-sm md:text-base text-[var(--text-muted-light)] font-medium leading-snug">UX patterns introduced for the first time in years</p>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-black/5 to-black/3 rounded-2xl p-6 md:p-8 border border-refined-light border-t-2 border-t-[var(--accent-teal)]/30 hover:-translate-y-1 hover:border-[var(--accent-teal)]/40 hover:bg-gradient-to-br hover:from-black/8 hover:to-black/5 hover:shadow-[0_8px_16px_rgba(0,162,183,0.075)] transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--accent-teal)]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col items-center text-center">
                <p className="text-2xl md:text-3xl font-semibold leading-none mb-3 transition-colors duration-300" style={{ color: 'var(--accent-teal)' }}>75% fewer</p>
                <p className="text-sm md:text-base text-[var(--text-muted-light)] font-medium leading-snug">clicks in scheduling workflows (ReportCaster redesign)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Context Block - ties tiles to WebFOCUS */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 xl:px-8 mt-16 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20, visibility: 'hidden' as const }}
          whileInView={{ opacity: 1, y: 0, visibility: 'visible' as const }}
          viewport={{ once: true, amount: 0.15, margin: '0px 0px -50px 0px' }}
          style={{ willChange: 'opacity, transform', opacity: 0, visibility: 'hidden' }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
            delay: 0.24
          }}
          className="space-y-6"
        >
          <h3 className="text-[var(--text-primary-light)] text-xl md:text-2xl font-serif text-center">
            Three modernization initiatives I led inside WebFOCUS
          </h3>
          <p className="text-[var(--text-muted-light)] text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center">
            Below are three core areas I owned within the WebFOCUS ecosystem — from a 40+ year-old scheduler to ML model training and an AI-driven insights hub.
          </p>
        </motion.div>
      </div>

      {/* Initiatives Block - wider container */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 xl:px-8 mt-16 md:mt-20">
        <div className="space-y-16 md:space-y-20">
          {initiatives.map((initiative, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <div className="flex justify-center py-2">
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
                </div>
              )}
              <WebFOCUSInitiativeRow
                overline={initiative.overline}
                title={initiative.title}
                bullets={initiative.bullets}
                impact={initiative.impact}
                ctaText={initiative.ctaText}
                ctaHref={initiative.ctaHref}
                hoverMicrocopy={initiative.hoverMicrocopy}
                orientation={initiative.orientation}
                visualImage={initiative.visualImage}
                index={index}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

