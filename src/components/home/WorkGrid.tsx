'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Lock } from 'lucide-react'
import HeroTerminal from '@/components/case-study/HeroTerminal'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { getTheme, spacing } from '@/lib/design-system'

const caseStudies = [
  {
    slug: 'reportcaster',
    title: 'ReportCaster',
    subtitle: '50yr Legacy → Modern Hub',
    metric: '5→1',
    metricLabel: 'unified system',
    description: 'I modernized a 50-year-old scheduler powering 20M+ schedules weekly. Reduced schedule creation from 5+ clicks to 2.',
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
    description: 'I transformed a fragmented ML process into a guided 4-step workflow. 5/5 SMEs found the entry point without help.',
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
    description: 'I unified 3 invisible DSML tools into one Hub. NLQ adoption increased 25% after launch.',
    image: '/images/case-study/iq-plugin/Final Look.png',
    fileName: 'iq_hub_unified_view.tsx',
    accentColor: 'var(--accent-violet)',
    locked: true,
  },
]

export default function WorkGrid() {
  const t = getTheme(true)
  return (
    <section id="work-overview" className="pt-space-10 pb-space-12 md:pt-space-12 md:pb-space-16">
      <div className={`${spacing.containerFull}`}>
        {/* Visually hidden heading for accessibility - maintains heading hierarchy */}
        <h2 className="sr-only">Featured Case Studies</h2>

        {/* Context - no heading, just the explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-space-8 md:mb-space-10"
        >
          <p className={`${t.textSecondary} text-lg leading-relaxed mb-space-4`}>
            I shaped the product direction of{' '}
            <a
              href="https://www.ibi.com/products/ibi-webfocus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-teal)] hover:underline font-medium"
            >
              ibi™ WebFOCUS®
            </a>
            —an enterprise analytics platform powering 25M+ users. I modernized its core workflows and created patterns that scaled across the platform.
          </p>
          <p className={`${t.textMuted} opacity-80 text-sm`}>
            Start with <Link href="/work/reportcaster" className="text-[var(--accent-teal)] hover:underline font-medium">ReportCaster</Link> — the flagship transformation.
          </p>
        </motion.div>

        {/* Work Grid - 3 Cards with HeroTerminal images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
              className="group"
            >
              <Link
                href={`/work/${study.slug}`}
                className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)] focus-visible:ring-offset-2 rounded-2xl"
              >
                <div className={`${t.bgAlt} rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl border ${t.borderSubtle} group-hover:border-slate-200 h-full flex flex-col transition-shadow duration-300`} style={{ willChange: 'box-shadow' }}>
                  {/* HeroTerminal Image with Bleed Effect - bleeds off RIGHT and BOTTOM */}
                  <div className="relative h-[300px] overflow-hidden pl-space-5 pt-space-5">
                    <div className="h-[340px] w-[calc(100%+40px)]">
                      <HeroTerminal
                        imageSrc={study.image}
                        fileName={study.fileName}
                        accentColor={study.accentColor}
                        alt={study.title}
                        disableLightbox
                      />
                    </div>

                    {/* Locked Badge - Overlay on terminal */}
                    {study.locked && (
                      <div className="absolute top-9 right-space-4 z-10">
                        <div className={`bg-white/90 backdrop-blur-sm rounded-full p-space-2 shadow-md`}>
                          <Lock className={`w-4 h-4 ${t.textMuted}`} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-space-6 flex-grow flex flex-col">
                    {/* Metric Badge */}
                    <div className="mb-space-4">
                      <div className={`inline-flex items-baseline gap-space-1.5 ${t.bg} rounded-lg px-space-3 py-space-1.5 border ${t.borderSubtle}`}>
                        <span className="font-mono text-xl font-bold text-[var(--accent-teal)]">
                          <AnimatedCounter value={study.metric} duration={1.2} />
                        </span>
                        <span className={`font-mono text-[10px] ${t.textMuted} uppercase tracking-widest`}>
                          {study.metricLabel}
                        </span>
                      </div>
                    </div>

                    {/* Title Row */}
                    <div className="flex items-start justify-between mb-space-2">
                      <div>
                        <h3 className={`font-serif text-lg ${t.text} group-hover:text-[var(--accent-teal)] transition-colors`}>
                          {study.title}
                        </h3>
                        <p className={`font-mono text-[10px] ${t.textDim} uppercase tracking-widest mt-0.5`}>
                          {study.subtitle}
                        </p>
                      </div>
                      <div className={`w-8 h-8 rounded-full ${t.bg} group-hover:bg-[var(--accent-teal)] flex items-center justify-center transition-colors flex-shrink-0`}>
                        <ArrowRight className={`w-4 h-4 ${t.textDim} group-hover:text-white transition-colors`} />
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`${t.textSecondary} text-sm leading-relaxed flex-grow`}>
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
