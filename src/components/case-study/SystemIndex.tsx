'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface Project {
  id: string
  tag: string
  tagColor: string
  title: string
  subtitle: string
  hook: string
  link: string
  hoverColor: string
  arrowColor: string
}

interface SystemIndexProps {
  currentId: 'REPORTCASTER' | 'ML_FUNCTIONS' | 'IQ_PLUGIN'
}

const projects: Project[] = [
  {
    id: 'REPORTCASTER',
    tag: '[SYS_ID: LEGACY_MOD]',
    tagColor: 'text-emerald-500',
    title: 'ReportCaster',
    subtitle: 'Enterprise Scheduler Modernization',
    hook: 'Refactoring a 50-year-old legacy codebase into a unified React architecture, significantly reducing scheduling complexity.',
    link: '/work/reportcaster',
    hoverColor: 'group-hover:border-emerald-500/50',
    arrowColor: 'group-hover:text-emerald-400',
  },
  {
    id: 'ML_FUNCTIONS',
    tag: '[SYS_ID: AI_PIPELINE]',
    tagColor: 'text-purple-500',
    title: 'ML Functions',
    subtitle: 'No-Code Machine Learning',
    hook: "Transforming a black-box engineering script into a guided 'Glass Box' wizard that allows non-experts to train models safely.",
    link: '/work/ml-functions',
    hoverColor: 'group-hover:border-purple-500/50',
    arrowColor: 'group-hover:text-purple-400',
  },
  {
    id: 'IQ_PLUGIN',
    tag: '[SYS_ID: UNIFIED_HUB]',
    tagColor: 'text-blue-500',
    title: 'IQ Plugin',
    subtitle: 'DSML Platform Unification',
    hook: "Architecting a unified 'front door' for 3 disparate analytics engines, bridging the gap between business users and data scientists.",
    link: '/work/iq-plugin',
    hoverColor: 'group-hover:border-blue-500/50',
    arrowColor: 'group-hover:text-blue-400',
  },
]

export default function SystemIndex({ currentId }: SystemIndexProps) {
  // Filter to show only the 2 projects that aren't the current one
  const otherProjects = projects.filter((project) => project.id !== currentId)

  return (
    <section
      className="w-full bg-slate-950 py-16 md:py-24 border-t border-slate-900"
      aria-labelledby="system-index-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <span className="font-mono text-slate-500 text-xs tracking-widest uppercase mb-3 block">
            // SYSTEM_INDEX
          </span>
          <h2
            id="system-index-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-serif text-white"
          >
            Explore Other Architectures
          </h2>
        </motion.div>

        {/* Cards Grid - 2 Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Link
                href={project.link}
                className={`
                  group relative bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-xl overflow-hidden
                  transition-all duration-300 ${project.hoverColor}
                  hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:shadow-slate-900/50
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
                  h-full flex flex-col min-h-[280px]
                `}
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 flex-1">
                  {/* Tag */}
                  <span className={`font-mono text-xs tracking-widest uppercase ${project.tagColor}`}>
                    {project.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-serif text-white mt-4 mb-2 group-hover:text-white/90 transition-colors">
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">
                    {project.subtitle}
                  </p>

                  {/* Hook */}
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.hook}
                  </p>
                </div>

                {/* Arrow Icon - Bottom Right */}
                <div className="relative z-10 flex justify-end mt-6">
                  <ArrowRight
                    className={`w-8 h-8 text-slate-700 ${project.arrowColor} transition-all duration-300 group-hover:translate-x-1`}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
