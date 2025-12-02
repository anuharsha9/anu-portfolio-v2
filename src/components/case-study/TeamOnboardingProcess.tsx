'use client'

interface TeamOnboardingProcessProps {
  isLightBackground?: boolean
}

export default function TeamOnboardingProcess({ isLightBackground = false }: TeamOnboardingProcessProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const stakeholders = [
    'Lead Architect',
    'Lead Engineer',
    'Engineering Squad',
    'New PM',
    'QA Team',
    'Documentation',
    'SMEs',
    'Support',
    'Leadership',
  ]

  const activities = [
    { phase: 'Discovery', items: ['Dozens of demos (old vs new)', 'Legacy quirks walkthroughs', 'Failure logic explanations'] },
    { phase: 'Alignment', items: ['IA & structural decisions', 'Interactive prototypes', 'Workflow documentation'] },
    { phase: 'Execution', items: ['Mediate engineer conflicts', 'Edge case documentation', 'Team handoff'] },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            Onboarding 9 Stakeholder Groups
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-2xl mx-auto`}>
            Most had never seen RC end-to-end. I became the person who could explain it all.
          </p>
        </div>

        {/* Stakeholders Grid */}
        <div className="space-y-6">
          <div>
            <h4 className={`${textColor} text-lg font-semibold mb-4`}>Stakeholders Brought Up to Speed</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {stakeholders.map((stakeholder, index) => (
                <div
                  key={index}
                  className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border ${borderColor} p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-md`}
                >
                  <p className={`${textColor} text-sm font-medium`}>{stakeholder}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Activities by Phase */}
          <div className="space-y-6">
            <h4 className={`${textColor} text-lg font-semibold`}>Onboarding Activities</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
                  style={{ borderColor: accentColor + '40' }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                        style={{ backgroundColor: accentColor }}
                      >
                        {index + 1}
                      </div>
                      <h5 className={`${textColor} font-semibold`}>{activity.phase}</h5>
                    </div>
                    <ul className="space-y-2">
                      {activity.items.map((item, itemIndex) => (
                        <li key={itemIndex} className={`${mutedColor} text-sm leading-relaxed flex items-start gap-2`}>
                          <span className="text-[var(--accent-teal)] font-bold flex-shrink-0 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Outcome */}
        <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg p-6 border ${borderColor} mt-8`}>
          <p className={`${textColor} text-base leading-relaxed text-center`}>
            <span className="font-semibold" style={{ color: accentColor }}>Result:</span> Engineers who initially intimidated me became collaborators I respected — and who respected me. I became the youngest in the room with unspoken authority on the experience of RC.
          </p>
        </div>
      </div>
    </div>
  )
}

