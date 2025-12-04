'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface ReportCasterArchitectureProps {
  isLightBackground?: boolean
}

export default function ReportCasterArchitecture({ isLightBackground = true }: ReportCasterArchitectureProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  
  // Force light background for case studies
  const textColor = 'text-[#1A1A1A]'
  const mutedColor = 'text-[#666666]'
  const borderColor = 'border-black/10'
  const bgColor = 'bg-white'
  const dividerColor = 'bg-black/10'

  const subsystems = [
    {
      id: 'scheduling',
      title: 'Scheduling Workflow',
      description: 'Core workflow for creating and managing automated schedules',
      status: 'Unified',
    },
    {
      id: 'distribution',
      title: 'Distribution List Creation',
      description: 'Creating and managing distribution lists for scheduled reports',
      status: 'Unified',
    },
    {
      id: 'access',
      title: 'Access List Creation',
      description: 'Managing access permissions and user lists',
      status: 'Unified',
    },
    {
      id: 'explorer',
      title: 'RC Explorer',
      description: 'Asset viewer for scheduled reports and lists',
      status: 'Integrated in Home',
    },
    {
      id: 'admin',
      title: 'RC Admin',
      description: 'Job health, system configuration, dashboards, and settings',
      status: 'Surfaced in Management Center',
    },
  ]

  return (
    <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className={`h-px flex-1 ${dividerColor}`}></div>
          <h3 className={`${textColor} text-lg md:text-xl font-serif font-semibold whitespace-nowrap`}>
            The Five Subsystems
          </h3>
          <div className={`h-px flex-1 ${dividerColor}`}></div>
          <div className="h-px w-8 bg-[var(--accent-teal)]"></div>
        </div>

        <div className="space-y-6">
          <p className={`${mutedColor} text-sm md:text-base leading-relaxed`}>
            ReportCaster wasn&apos;t a feature—it was a product inside a product with five independent subsystems, all scattered throughout the platform.
          </p>

          {/* Before: Scattered */}
          <div className={`${bgColor} rounded-lg p-4 md:p-5 border ${borderColor} shadow-sm`}>
            <div className="space-y-3">
              <div className={`${mutedColor} text-xs font-mono uppercase tracking-wider`}>Before: Fragmented</div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {subsystems.map((subsystem) => (
                  <div key={subsystem.id} className="bg-black/5 rounded p-3 border border-black/10">
                    <div className={`${textColor} text-sm font-semibold mb-1`}>{subsystem.title}</div>
                    <div className={`${mutedColor} text-xs`}>Buried, hidden, or deeply scattered</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* After: Unified */}
          <div className={`${bgColor} rounded-lg p-4 md:p-5 border-2 border-[var(--accent-teal)] shadow-sm`}>
            <div className="space-y-3">
              <div className={`${mutedColor} text-xs font-mono uppercase tracking-wider`}>After: Unified Architecture</div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {subsystems.map((subsystem) => (
                  <motion.div
                    key={subsystem.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4 }}
                    className={`bg-[var(--accent-teal)]/10 rounded p-3 border border-[var(--accent-teal)]/30 cursor-pointer transition-all duration-300 ${
                      hoveredId === subsystem.id ? 'bg-[var(--accent-teal)]/20 border-[var(--accent-teal)]/50 shadow-lg' : ''
                    }`}
                    whileHover={{ 
                      scale: 1.03,
                      y: -2,
                      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                    }}
                    whileTap={{ scale: 0.98 }}
                    onMouseEnter={() => setHoveredId(subsystem.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className={`${textColor} text-sm font-semibold mb-1 transition-colors ${
                      hoveredId === subsystem.id ? 'text-[var(--accent-teal)]' : ''
                    }`}>
                      {subsystem.title}
                    </div>
                    <div className="text-[var(--accent-teal)] text-xs font-medium">{subsystem.status}</div>
                    {hoveredId === subsystem.id && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`${mutedColor} text-xs mt-2 pt-2 border-t border-[var(--accent-teal)]/20`}
                      >
                        {subsystem.description}
                      </motion.p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

