'use client'

import { getTheme } from '@/lib/design-system'

interface SystemMappingBreakdownProps {
  isLightBackground?: boolean
}

export default function SystemMappingBreakdown({ isLightBackground = false }: SystemMappingBreakdownProps) {
  const t = getTheme(isLightBackground)

  const categories = [
    {
      category: 'Workflows & Navigation',
      icon: '🔄',
      items: [
        { label: 'Every scheduling workflow', detail: 'From schedule creation to distribution to monitoring' },
        { label: 'Every entry point', detail: 'Where users could access RC features (there were many, and they were inconsistent)' },
        { label: 'Every dialog and branching path', detail: 'Understanding when users saw what, and why' },
      ],
    },
    {
      category: 'System Capabilities',
      icon: '⚙️',
      items: [
        { label: 'Every admin capability', detail: 'System configuration, permissions, settings' },
        { label: 'Every explorer interaction', detail: 'How users viewed and filtered existing schedules' },
        { label: 'Every job-health pattern', detail: 'How users monitored scheduled jobs, what failure states looked like' },
      ],
    },
    {
      category: 'Reliability & Logic',
      icon: '🔧',
      items: [
        { label: 'Every failure & recovery rule', detail: 'What happened when jobs failed, how recovery worked (critical for enterprise reliability)' },
        { label: 'The burst logic, retention logic, blackout logic', detail: "Undocumented rules that users relied on but couldn't explain" },
        { label: 'The behavior users relied on but the UI never expressed', detail: 'Invisible rules that existed in code but were never surfaced' },
      ],
    },
  ]

  return (
    <div className={`${t.bg} rounded-lg border ${t.border} p-8 md:p-12`}>
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h3 className={`${t.text} text-xl md:text-2xl font-serif`}>What I Mapped: The Complete System</h3>
          <p className={`${t.textMuted} text-sm md:text-base max-w-2xl mx-auto`}>
            The categories below show the scope of mapping required to understand the complete system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <div key={i} className={`${t.cardBg} rounded-lg border-2 p-4 transition-all duration-300 hover:shadow-lg`} style={{ borderColor: `${t.accentVar}40` }}>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg flex-shrink-0" style={{ backgroundColor: `${t.accentVar}20` }}>
                    {cat.icon}
                  </div>
                  <h4 className={`${t.text} text-base font-semibold`}>{cat.category}</h4>
                </div>
                <div className="space-y-2">
                  {cat.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <span className={`${t.textAccent} font-bold flex-shrink-0 mt-0.5 text-xs`}>•</span>
                      <div className="flex-1">
                        <p className={`${t.text} text-xs font-medium leading-tight`}>{item.label}</p>
                        <p className={`${t.textMuted} text-xs italic mt-0.5 leading-tight`}>{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`${t.cardBg} rounded-lg p-4 border ${t.border} mt-6`}>
          <p className={`${t.text} text-sm leading-relaxed text-center`}>
            <span className={`font-semibold ${t.textAccent}`}>The result:</span> This mapping produced the first complete mental model in RC&apos;s 40-year history — a foundation that enabled the unified architecture.
          </p>
        </div>
      </div>
    </div>
  )
}
