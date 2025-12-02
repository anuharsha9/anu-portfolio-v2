'use client'

interface ProcessTimelineProps {
  isLightBackground?: boolean
}

export default function ProcessTimeline({ isLightBackground = false }: ProcessTimelineProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const phases = [
    {
      phase: 'Research & Discovery',
      duration: 'Months',
      activities: [
        'Inherited existing research (personas, journeys)',
        'Hundreds of screenshots across system',
        'Customer Support team interviews (Gold A7)',
        'Customer rep 1:1s',
        'Engineer conversations (original builder)',
        'QA & SME tribal knowledge',
      ],
      outcome: 'First complete mental model map in RC\'s 40-year history',
    },
    {
      phase: 'Architecture Exploration',
      duration: 'Weeks',
      activities: [
        'V1: Independent product approach',
        'V2: Hub plugin integration',
        'V3: Platform-native modal approach',
        'Constraint synthesis (strategy, resourcing, technical)',
      ],
      outcome: 'V3 selected — aligned with platform patterns',
    },
    {
      phase: 'Design & Prototyping',
      duration: 'Months',
      activities: [
        'Hundreds of screens designed',
        'Modal-based workflow creation',
        'Recurrence redesign (natural language)',
        'Explorer-as-filtered-view concept',
        'Prototype creation for alignment',
      ],
      outcome: 'Complete UX architecture defined',
    },
    {
      phase: 'Team Alignment',
      duration: 'Ongoing',
      activities: [
        'Onboarded lead architect & engineer',
        'Dozens of demos to engineering squad',
        'PM, QA, documentation onboarding',
        'SME and support team alignment',
        'Mediated technical interpretations',
      ],
      outcome: 'Entire team understood the system',
    },
    {
      phase: 'Shipping & Impact',
      duration: 'Launch',
      activities: [
        '75% fewer clicks (4–6 → 1)',
        'Multi-tab workflows eliminated',
        'Reduced complexity eliminated common support pain points',
        'Customer praise in Virtual User Group',
        'PM added new features post-launch',
      ],
      outcome: 'Unified, scalable platform-native experience',
    },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-6 md:p-8`}>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h3 className={`${textColor} text-xl md:text-2xl font-serif`}>
            Process Timeline Overview
          </h3>
          <p className={`${mutedColor} text-sm md:text-base max-w-2xl mx-auto`}>
            From reverse-engineering a 40-year-old system to shipping a unified, platform-native experience — the journey from ambiguity to clarity.
          </p>
        </div>

        {/* Compact Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              style={{ borderColor: accentColor + '40' }}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: accentColor }}
                  >
                    {index + 1}
                  </div>
                  <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider`}>
                    {phase.duration}
                  </span>
                </div>
                <h4 className={`${textColor} text-base font-semibold`}>{phase.phase}</h4>
                <div className={`${bgColor} rounded p-2 border ${borderColor}`}>
                  <p className={`${textColor} text-xs font-medium`}>{phase.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

