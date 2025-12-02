'use client'

interface SystemMappingBreakdownProps {
  isLightBackground?: boolean
}

export default function SystemMappingBreakdown({ isLightBackground = false }: SystemMappingBreakdownProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const mappingCategories = [
    {
      category: 'Workflows & Navigation',
      items: [
        { label: 'Every scheduling workflow', detail: 'From schedule creation to distribution to monitoring' },
        { label: 'Every entry point', detail: 'Where users could access RC features (there were many, and they were inconsistent)' },
        { label: 'Every dialog and branching path', detail: 'Understanding when users saw what, and why' },
      ],
      icon: '🔄',
    },
    {
      category: 'System Capabilities',
      items: [
        { label: 'Every admin capability', detail: 'System configuration, permissions, settings' },
        { label: 'Every explorer interaction', detail: 'How users viewed and filtered existing schedules' },
        { label: 'Every job-health pattern', detail: 'How users monitored scheduled jobs, what failure states looked like' },
      ],
      icon: '⚙️',
    },
    {
      category: 'Reliability & Logic',
      items: [
        { label: 'Every failure & recovery rule', detail: 'What happened when jobs failed, how recovery worked (critical for enterprise reliability)' },
        { label: 'The burst logic, retention logic, blackout logic', detail: 'Undocumented rules that users relied on but couldn\'t explain' },
        { label: 'The behavior users relied on but the UI never expressed', detail: 'Invisible rules that existed in code but were never surfaced' },
      ],
      icon: '🔧',
    },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h3 className={`${textColor} text-xl md:text-2xl font-serif`}>
            What I Mapped: The Complete System
          </h3>
          <p className={`${mutedColor} text-sm md:text-base max-w-2xl mx-auto`}>
            The process was methodical and exhausting. I spent months understanding what RC actually did, not what it was supposed to do. The gap between those two things was where the real problems lived.
          </p>
        </div>

        {/* Mapping Categories - Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mappingCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-4 transition-all duration-300 hover:shadow-lg`}
              style={{ borderColor: accentColor + '40' }}
            >
              <div className="space-y-3">
                {/* Category Header */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                    style={{ backgroundColor: accentColor + '20' }}
                  >
                    {category.icon}
                  </div>
                  <h4 className={`${textColor} text-base font-semibold`}>{category.category}</h4>
                </div>

                {/* Items - Compact */}
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-0.5">
                      <div className="flex items-start gap-2">
                        <span className="text-[var(--accent-teal)] font-bold flex-shrink-0 mt-0.5 text-xs">•</span>
                        <div className="flex-1">
                          <p className={`${textColor} text-xs font-medium leading-tight`}>{item.label}</p>
                          <p className={`${mutedColor} text-xs italic mt-0.5 leading-tight`}>{item.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note - Compact */}
        <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg p-4 border ${borderColor} mt-6`}>
          <p className={`${textColor} text-sm leading-relaxed text-center`}>
            <span className="font-semibold" style={{ color: accentColor }}>The result:</span> Eventually, I created a full mind map that represented the actual product mental model — the first one in RC&apos;s 40-year history. By the time I finished, I knew more about the system&apos;s UX and workflows than anyone else in the org.
          </p>
        </div>
      </div>
    </div>
  )
}

