import { motion } from 'framer-motion'
import { QuickOverview as QuickOverviewType } from '@/types/caseStudy'
import UnifiedSubsystemsVisual from './UnifiedSubsystemsVisual'
import ImpactMetricsChart from './ImpactMetricsChart'

interface QuickOverviewProps {
  data: QuickOverviewType
  heroSubtitle?: string
  caseStudySlug?: string
}

export default function QuickOverview({ data, heroSubtitle, caseStudySlug }: QuickOverviewProps) {
  // Combine heroSubtitle with subtitle for a richer subheading
  const combinedSubtitle = heroSubtitle
    ? `${heroSubtitle} ${data.subtitle}.`
    : data.subtitle

  return (
    <div className="space-y-12 w-full min-h-[200px]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1, margin: '0px 0px -100px 0px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-3 text-center"
      >
        <h2 className="text-[#1A1A1A] text-2xl md:text-3xl font-serif leading-tight">{data.title}</h2>
        <p className="text-[#666666] text-lg leading-relaxed max-w-3xl mx-auto">{combinedSubtitle}</p>
      </motion.div>

      {/* Context Cards - Structured Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* What the system was */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-black/5 rounded-2xl p-6 md:p-8 border border-black/10 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(13,148,136,0.075)] hover:border-[var(--accent-teal)]/50 transition-all duration-300 group"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[var(--accent-teal)] flex-shrink-0"></div>
              <div className="h-px flex-1 bg-black/10"></div>
              <div className="h-px w-8 bg-[var(--accent-teal)]"></div>
            </div>
            <h3 className="text-[#1A1A1A] text-lg md:text-xl font-serif group-hover:text-[var(--accent-teal)] transition-colors">What the system was</h3>
            <p className="text-[#666666] text-sm md:text-base leading-relaxed">{data.whatTheSystemWas}</p>
            {data.oldUIDemoUrl && (
              <div className="pt-3">
                <a
                  href={data.oldUIDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-[var(--accent-teal)] bg-[var(--accent-teal)]/10 text-[var(--accent-teal)] font-medium hover:bg-[var(--accent-teal)] hover:text-white transition-all duration-300 group"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span className="text-sm font-semibold">ML Functions - old UI and workflow</span>
                </a>
              </div>
            )}
          </div>
        </motion.div>

        {/* My role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-black/5 rounded-2xl p-6 md:p-8 border border-black/10 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(13,148,136,0.075)] hover:border-[var(--accent-teal)]/50 transition-all duration-300 group"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[var(--accent-teal)] flex-shrink-0"></div>
              <div className="h-px flex-1 bg-black/10"></div>
              <div className="h-px w-8 bg-[var(--accent-teal)]"></div>
            </div>
            <h3 className="text-[#1A1A1A] text-lg md:text-xl font-serif group-hover:text-[var(--accent-teal)] transition-colors">My role</h3>
            <p className="text-[#666666] text-sm md:text-base leading-relaxed">{data.myRole}</p>
          </div>
        </motion.div>
      </div>

      {/* Key Actions - Structured List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-4"
      >
        <div className="flex items-center gap-3">
          <h3 className="text-[#1A1A1A] text-xl font-semibold">Key actions</h3>
          <div className="h-px flex-1 bg-black/10"></div>
          <span className="text-[#666666] text-xs font-mono uppercase tracking-wider">
            {data.keyActions.length} initiatives
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.keyActions.map((action, index) => (
            <div
              key={index}
              className="flex gap-3 p-4 rounded-lg bg-black/3 border border-black/5 hover:bg-black/5 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <span className="text-[var(--accent-teal)] text-base font-mono flex-shrink-0 mt-0.5 font-semibold">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-[#666666] leading-relaxed text-base">{action}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Unified Subsystems Visual (combines FiveSubsystemsBreakdown and VisualSystemMap) - ReportCaster only */}
      {caseStudySlug === 'reportcaster' && (
        <div className="pt-8 border-t border-black/10">
          <UnifiedSubsystemsVisual isLightBackground={true} />
        </div>
      )}

      {/* Impact Metrics - Prominent Display */}
      <div className="space-y-6 pt-8 border-t border-black/10">
        <ImpactMetricsChart metrics={data.impactMetrics} isLightBackground={true} />
      </div>

      {/* Data Sheet Link (Demos are now in hero section) */}
      {data.dataSheetUrl && (
        <div className="pt-6 border-t border-black/10">
          <div className="flex items-center justify-center">
            <a
              href={data.dataSheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-black/20 text-[var(--text-primary-light)] font-medium hover:border-[var(--accent-teal)] hover:text-[var(--accent-teal)] transition-all duration-300 group"
            >
              <span>{data.dataSheetLabel || 'View Data Sheet'}</span>
              <svg
                className="group-hover:translate-x-1 transition-transform duration-300 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

