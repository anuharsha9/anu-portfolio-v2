'use client'

import { getTheme } from '@/lib/design-system'

interface DiscoveryVisualProps {
  isLightBackground?: boolean
}

export default function DiscoveryVisual({ isLightBackground = false }: DiscoveryVisualProps) {
  const t = getTheme(isLightBackground)

  const challenges = [
    { category: 'Age & Scale', items: ['40+ years old', '13M+ schedules daily (one customer)'] },
    { category: 'Documentation', items: ['Zero documentation', 'Only tribal knowledge'] },
    { category: 'Knowledge Gap', items: ['Head PM: surface level only', 'Design director: never seen it', 'Only 1 engineer understood it end-to-end'] },
    { category: 'Legacy Code', items: ['Extremely legacy codebase', 'Last redesign: never happened'] },
  ]

  const subsystems = [
    { id: 1, name: 'Scheduling Workflow', description: 'Core job creation and management', location: 'Buried under 4 clicks' },
    { id: 2, name: 'Distribution List', description: 'Who receives the reports', location: 'Buried under 4 clicks' },
    { id: 3, name: 'Access List', description: 'Who can manage schedules', location: 'Buried under 4 clicks' },
    { id: 4, name: 'RC Explorer', description: 'Asset viewer for schedules', location: 'Hamburger menu of main product header' },
    { id: 5, name: 'RC Status (Admin)', description: 'System configuration & dashboards', location: 'Management center > admin console' },
  ]

  const Arrow = ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-white">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )

  return (
    <div className={`${t.bg} rounded-lg border ${t.border} p-8 md:p-12`}>
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className={`${t.text} text-2xl md:text-3xl font-serif`}>
            Aha Moment: Discovering Why It Kept Getting Deferred
          </h3>
          <p className={`${t.textMuted} text-base md:text-lg max-w-3xl mx-auto`}>
            The discovery: five independent subsystems scattered across the product, each with its own entry point and mental model.
          </p>
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <span className={`${t.textMuted} text-sm font-mono uppercase tracking-wider`}>Why It Kept Getting Deferred</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge, i) => (
              <div
                key={i}
                className={`${t.cardBg} rounded-lg border-2 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
                style={{ borderColor: i % 2 === 0 ? `${t.accentVar}40` : (isLightBackground ? '#0000001A' : '#FFFFFF1A') }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ backgroundColor: t.accentVar }}>
                      {i + 1}
                    </div>
                    <h4 className={`${t.text} text-lg font-semibold`}>{challenge.category}</h4>
                  </div>
                  <ul className="space-y-2 pl-12">
                    {challenge.items.map((item, j) => (
                      <li key={j} className={`${t.textMuted} text-sm leading-relaxed flex items-start gap-2`}>
                        <span className={`${t.textAccent} font-bold flex-shrink-0 mt-0.5`}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center my-8">
          <div className="flex items-center gap-4">
            <div className={`h-px flex-1 ${t.border}`}></div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: t.accentVar }}>
              <Arrow />
            </div>
            <div className={`h-px flex-1 ${t.border}`}></div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <span className={`${t.textMuted} text-sm font-mono uppercase tracking-wider`}>The Discovery: Five Independent Subsystems</span>
          </div>

          <div className="space-y-4">
            <div className="text-center">
              <span className={`${t.textMuted} text-xs font-mono uppercase tracking-wider`}>Before</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {subsystems.map((sub) => (
                <div key={sub.id} className={`${t.cardBg} rounded-lg border-2 p-4 text-center transition-all duration-300 hover:scale-105`} style={{ borderColor: `${t.accentVar}40` }}>
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: t.accentVar }}>
                      {sub.id}
                    </div>
                  </div>
                  <h4 className={`${t.text} text-sm font-semibold mb-1`}>{sub.name}</h4>
                  <p className={`${t.textMuted} text-xs leading-relaxed mb-2`}>{sub.description}</p>
                  <p className={`${t.textMuted} text-xs italic`}>{sub.location}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className={`${t.textMuted} text-sm italic`}>Scattered across the product • Different entry points • Separate mental models</p>
            </div>
          </div>

          <div className="flex items-center justify-center my-6">
            <div className="flex items-center gap-4">
              <div className={`h-px flex-1 ${t.border}`}></div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: t.accentVar }}>
                <Arrow size={20} />
              </div>
              <div className={`h-px flex-1 ${t.border}`}></div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-center">
              <span className={`${t.textMuted} text-xs font-mono uppercase tracking-wider`}>After</span>
            </div>
            <div className="flex justify-center">
              <div className={`${t.bg} rounded-lg border-2 p-8 md:p-12 text-center max-w-2xl transition-all duration-300 hover:scale-105`} style={{ borderColor: t.accentVar }}>
                <h4 className={`${t.text} text-xl md:text-2xl font-serif mb-3`}>Unified ReportCaster</h4>
                <p className={`${t.textMuted} text-base leading-relaxed mb-4`}>
                  One coherent system with predictable entry points, consistent patterns, and a single mental model
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-6">
                  {subsystems.map((sub) => (
                    <div key={sub.id} className={`${t.cardBg} rounded px-2 py-1`}>
                      <p className={`${t.text} text-xs font-medium`}>{sub.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className={`${t.textMuted} text-sm italic`}>Platform-native • Modal-based workflows • Unified mental model</p>
            </div>
          </div>
        </div>

        <div className={`${t.cardBg} rounded-lg p-6 border ${t.border} mt-8`}>
          <p className={`${t.text} text-base leading-relaxed text-center`}>
            <span className={`font-semibold ${t.textAccent}`}>The insight:</span> This fragmentation explained the deferral. Unifying them became the path forward.
          </p>
        </div>
      </div>
    </div>
  )
}
