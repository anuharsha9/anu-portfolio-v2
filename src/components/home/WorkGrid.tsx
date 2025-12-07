'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface WorkCardProps {
  title: string
  subtitle: string
  description: string
  metricValue: string
  metricLabel: string
  link: string
  imageSrc: string
  imageAlt: string
  delay: number
}

const WorkCard = ({
  title,
  subtitle,
  description,
  metricValue,
  metricLabel,
  link,
  imageSrc,
  imageAlt,
  delay,
}: WorkCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
  >
    <Link href={link} className="block group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/80">
            // {metricLabel.replace(/\s/g, '_').toUpperCase()}
          </span>
          <h3 className="font-serif text-white text-xl md:text-2xl leading-tight mt-1">
            {metricValue} {title}
          </h3>
        </div>
      </div>
      <div className="p-6 space-y-4 flex-grow">
        <p className="font-sans text-slate-700 text-base font-semibold">
          {subtitle}
        </p>
        <p className="font-sans text-slate-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      <div className="p-6 pt-0">
        <span className="inline-flex items-center gap-2 text-[var(--accent-teal)] font-medium hover:text-[var(--accent-teal-700)] transition-colors duration-300">
          <span>View Case Study</span>
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  </motion.div>
)

export default function WorkGrid() {
  return (
    <section id="work-overview" className="bg-slate-50 py-16 md:py-24 lg:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Context Block - Case Studies heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="space-y-6 text-center mb-16 md:mb-20"
        >
          <h2 className="font-serif text-slate-900 text-2xl md:text-3xl lg:text-4xl leading-tight">
            Modernizing WebFOCUS at Cloud Software Group
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            For three years, I was the <strong className="text-slate-900">UX leader</strong> for WebFOCUS—driving modernization of its most complex, highest-impact legacy subsystems with 50+ years of technical debt. Below are three core areas I owned within the WebFOCUS ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-blue)] text-white font-medium hover:bg-[var(--accent-blue-700)] transition-all duration-300 hover:scale-105 shadow-sm"
            >
              <span>Watch VUG Presentation</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
            <p className="font-mono text-xs text-slate-500 max-w-xs text-center">
              Only designer invited to present alongside my Director of Design
            </p>
          </div>
        </motion.div>

        {/* The 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <WorkCard
            title="ReportCaster"
            subtitle="50yr Legacy → Modern Hub"
            description="Modernized a 50-year-old platform's scheduler powering 20M+ schedules weekly. Integrated 5 legacy subsystems intelligently into the main product hub for a unified experience."
            metricValue="75%"
            metricLabel="Fewer Clicks"
            link="/work/reportcaster"
            imageSrc="/images/case-study/ReportCaster/ReportCaster Hero.png"
            imageAlt="ReportCaster Case Study"
            delay={0.3}
          />
          <WorkCard
            title="ML Functions"
            subtitle="Black Box → Guided Flow"
            description="Transformed complex 12-step ML training into a guided 4-step visual workflow. Zero dead-end errors in testing."
            metricValue="100%"
            metricLabel="Discoverability"
            link="/work/ml-functions"
            imageSrc="/images/case-study/ml-functions/ml-functions-cover.png"
            imageAlt="ML Functions Case Study"
            delay={0.4}
          />
          <WorkCard
            title="IQ Plugin"
            subtitle="3 Tools + Discover Page"
            description="Unified 3 DSML tools into one browser extension with a custom Discover page I designed — featuring tutorials, documentation links, and tool descriptions to drive adoption."
            metricValue="1"
            metricLabel="Unified Hub"
            link="/work/iq-plugin"
            imageSrc="/images/case-study/iq-plugin/iq-plugin-cover.png"
            imageAlt="IQ Plugin Case Study"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  )
}
