import { motion } from 'framer-motion'
import { QuickOverview as QuickOverviewType } from '@/types/caseStudy'
import ImpactMetricsChart from './ImpactMetricsChart'

interface QuickOverviewProps {
  data: QuickOverviewType
  heroSubtitle?: string
  caseStudySlug?: string
}

export default function QuickOverview({ data, heroSubtitle, caseStudySlug }: QuickOverviewProps) {
  return (
    <div className="space-y-6 w-full min-h-[200px]">
      {/* 1. STAR Format - At a Glance */}
      {data.star && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-br from-[var(--accent-teal)]/10 to-[var(--accent-teal)]/5 rounded-2xl p-6 md:p-8 border-2 border-[var(--accent-teal)]/30"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[var(--accent-teal)] flex-shrink-0"></div>
            <div className="h-px flex-1 bg-[var(--accent-teal)]/20"></div>
            <h3 className="text-[#1A1A1A] text-lg md:text-xl font-serif font-semibold text-[var(--accent-teal)]">At a Glance</h3>
            <div className="h-px flex-1 bg-[var(--accent-teal)]/20"></div>
            <div className="h-px w-8 bg-[var(--accent-teal)]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            <div className="space-y-2">
              <div className="text-[#666666] text-xs uppercase tracking-wider font-mono font-semibold text-[var(--accent-teal)]">Situation</div>
              <p className="text-[#1A1A1A] text-sm md:text-base leading-relaxed">{data.star.situation}</p>
            </div>
            <div className="space-y-2">
              <div className="text-[#666666] text-xs uppercase tracking-wider font-mono font-semibold text-[var(--accent-teal)]">Task</div>
              <p className="text-[#1A1A1A] text-sm md:text-base leading-relaxed">{data.star.task}</p>
            </div>
            <div className="space-y-2">
              <div className="text-[#666666] text-xs uppercase tracking-wider font-mono font-semibold text-[var(--accent-teal)]">Action</div>
              <p className="text-[#1A1A1A] text-sm md:text-base leading-relaxed">{data.star.action}</p>
            </div>
            <div className="space-y-2">
              <div className="text-[#666666] text-xs uppercase tracking-wider font-mono font-semibold text-[var(--accent-teal)]">Result</div>
              <p className="text-[#1A1A1A] text-sm md:text-base leading-relaxed font-medium">{data.star.result}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* 2. My role - Full width */}
      {data.myRole && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-black/5 rounded-2xl p-6 md:p-8 border border-black/10 border-t-2 border-t-[var(--accent-teal)]/30 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,162,183,0.075)] hover:border-[var(--accent-teal)]/50 transition-all duration-300 group"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[var(--accent-teal)] flex-shrink-0"></div>
              <div className="h-px flex-1 bg-black/10"></div>
              <div className="h-px w-8 bg-[var(--accent-teal)]"></div>
            </div>
            <h3 className="text-[#1A1A1A] text-lg md:text-xl font-serif group-hover:text-[var(--accent-teal)] transition-colors">My role</h3>
            <ul className="text-[#666666] text-sm md:text-base leading-relaxed space-y-2 list-disc list-inside">
              {data.myRole.split('. ').filter(s => s.trim().length > 0).map((sentence, index, array) => {
                const trimmed = sentence.trim()
                if (!trimmed) return null
                // Add period back if it's not the last sentence and doesn't end with punctuation
                const text = index < array.length - 1 && !trimmed.match(/[.!?]$/) ? trimmed + '.' : trimmed
                return (
                  <li key={index} className="ml-2">{text}</li>
                )
              })}
            </ul>
            {data.credentials && (
              <div className="pt-4 mt-4 border-t border-black/10">
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[var(--accent-teal)]/15 to-[var(--accent-teal)]/10 border border-[var(--accent-teal)]/40">
                  <svg className="w-5 h-5 text-[var(--accent-teal)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span className="text-[#1A1A1A] text-sm md:text-base font-semibold text-[var(--accent-teal)]">{data.credentials}</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Scale & Importance Callout - Only for ReportCaster */}
      {caseStudySlug === 'reportcaster' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-br from-[var(--accent-teal)]/20 to-[var(--accent-teal)]/10 rounded-2xl p-6 md:p-8 border-2 border-[var(--accent-teal)]/40 border-t-2 border-t-[var(--accent-teal)]/50 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-[var(--accent-teal)] flex-shrink-0"></div>
            <div className="h-px flex-1 bg-[var(--accent-teal)]/30"></div>
            <h3 className="text-[#1A1A1A] text-xl md:text-2xl font-serif font-bold text-[var(--accent-teal)]">Scale & Responsibility</h3>
            <div className="h-px flex-1 bg-[var(--accent-teal)]/30"></div>
            <div className="h-px w-12 bg-[var(--accent-teal)]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--accent-teal)] mb-2">Millions</div>
              <div className="text-[#666666] text-sm md:text-base font-medium">of end users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--accent-teal)] mb-2">Hundreds</div>
              <div className="text-[#666666] text-sm md:text-base font-medium">of enterprise customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--accent-teal)] mb-2">20M+</div>
              <div className="text-[#666666] text-sm md:text-base font-medium">schedules processed weekly</div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-[var(--accent-teal)]/20">
            <p className="text-[#1A1A1A] text-base md:text-lg leading-relaxed font-medium text-center">
              <strong>This work is live in production</strong> — shipped as part of WebFOCUS 9.3 and actively impacting millions of users every day. This isn&apos;t concept work; it&apos;s real, production software making measurable business impact.
            </p>
          </div>
          <p className="text-[#1A1A1A] text-sm md:text-base leading-relaxed text-center italic">
            Mission-critical system that couldn&apos;t afford to break
          </p>
        </motion.div>
      )}

      {/* 3. Impact Metrics - Prominent Display */}
      <div className="space-y-6 pt-8 border-t border-black/10">
        <ImpactMetricsChart metrics={data.impactMetrics} isLightBackground={true} />
      </div>
    </div>
  )
}

