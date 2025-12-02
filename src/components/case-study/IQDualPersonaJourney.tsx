'use client'

interface IQDualPersonaJourneyProps {
  isLightBackground?: boolean
}

export default function IQDualPersonaJourney({ isLightBackground = false }: IQDualPersonaJourneyProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const technicalJourney = [
    { step: 'Quick access to advanced controls', description: 'Configuration options and customization available immediately' },
    { step: 'Customize ML models', description: 'Full control over model parameters and settings' },
    { step: 'Clear workflows', description: 'Consistent patterns across all IQ features' },
  ]

  const nonTechnicalJourney = [
    { step: 'Guided experiences', description: 'Wizards and step-by-step flows with tooltips' },
    { step: 'Natural language queries', description: 'Ask questions without understanding algorithms' },
    { step: 'Clear explanations', description: 'Understand what IQ is doing in plain language' },
  ]

  const designApproach = [
    {
      approach: 'Guided Experiences',
      description: 'Wizards and step-by-step flows for non-technical users, with tooltips and contextual help at every stage',
      benefits: ['Reduces cognitive load', 'Builds confidence', 'Enables exploration'],
    },
    {
      approach: 'Progressive Disclosure',
      description: 'Advanced options available but hidden behind "Show advanced" toggles. Technical users can access them when needed',
      benefits: ['Simple by default', 'Power when needed', 'No compromise'],
    },
    {
      approach: 'Consistent Mental Models',
      description: 'All four IQ pillars use the same interaction patterns, navigation, and visual language',
      benefits: ['Predictable experience', 'Faster learning', 'Unified system'],
    },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            Ideation, User Journeys & Dual-Persona Design
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-3xl mx-auto`}>
            I mapped distinct journeys for each persona and balanced their needs through guided experiences, progressive disclosure, and consistent mental models.
          </p>
        </div>

        {/* Dual Persona Journeys */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Technical Users */}
          <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-6`} style={{ borderColor: accentColor + '40' }}>
            <div className="space-y-4">
              <div>
                <h4 className={`${textColor} text-lg font-semibold mb-1`}>Technical Business Users / Analysts</h4>
                <p className={`${mutedColor} text-xs`}>Quick access to advanced controls and customization</p>
              </div>
              <div className="space-y-3">
                {technicalJourney.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: accentColor }}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className={`${textColor} text-sm font-medium mb-1`}>{item.step}</p>
                      <p className={`${mutedColor} text-xs`}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Non-Technical Users */}
          <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-6`} style={{ borderColor: accentColor + '40' }}>
            <div className="space-y-4">
              <div>
                <h4 className={`${textColor} text-lg font-semibold mb-1`}>Non-Technical Business Users</h4>
                <p className={`${mutedColor} text-xs`}>Guided experiences and clear explanations</p>
              </div>
              <div className="space-y-3">
                {nonTechnicalJourney.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: accentColor }}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className={`${textColor} text-sm font-medium mb-1`}>{item.step}</p>
                      <p className={`${mutedColor} text-xs`}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Design Approach */}
        <div>
          <h4 className={`${textColor} text-xl font-semibold mb-6 text-center`}>Design Approach: Balancing Both Personas</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {designApproach.map((item, index) => (
              <div
                key={index}
                className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-5 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                style={{ borderColor: accentColor + '40' }}
              >
                <div className="space-y-3">
                  <h5 className={`${textColor} text-base font-semibold`}>{item.approach}</h5>
                  <p className={`${mutedColor} text-xs leading-relaxed`}>{item.description}</p>
                  <div className="pt-2 border-t" style={{ borderColor: borderColor.replace('border-', '').includes('black') ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)' }}>
                    <ul className="space-y-1">
                      {item.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className={`${textColor} text-xs flex items-start gap-1.5`}>
                          <span className="text-[var(--accent-teal)] mt-0.5">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

