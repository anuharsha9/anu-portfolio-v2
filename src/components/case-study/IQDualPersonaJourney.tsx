'use client'

import { getTheme } from '@/lib/design-system'

interface IQDualPersonaJourneyProps {
  isLightBackground?: boolean
}

export default function IQDualPersonaJourney({ isLightBackground = false }: IQDualPersonaJourneyProps) {
  const t = getTheme(isLightBackground)
  const subtleBorder = isLightBackground ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'

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
    { approach: 'Guided Experiences', description: 'Wizards and step-by-step flows for non-technical users, with tooltips and contextual help at every stage', benefits: ['Reduces cognitive load', 'Builds confidence', 'Enables exploration'] },
    { approach: 'Progressive Disclosure', description: 'Advanced options available but hidden behind "Show advanced" toggles. Technical users can access them when needed', benefits: ['Simple by default', 'Power when needed', 'No compromise'] },
    { approach: 'Consistent Mental Models', description: 'All four IQ pillars use the same interaction patterns, navigation, and visual language', benefits: ['Predictable experience', 'Faster learning', 'Unified system'] },
  ]

  const JourneyList = ({ items }: { items: typeof technicalJourney }) => (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ backgroundColor: t.accentVar }}>
            {i + 1}
          </div>
          <div className="flex-1">
            <p className={`${t.text} text-sm font-medium mb-1`}>{item.step}</p>
            <p className={`${t.textMuted} text-xs`}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className={`${t.bg} rounded-lg border ${t.border} p-8 md:p-12`}>
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className={`${t.text} text-2xl md:text-3xl font-serif`}>Ideation, User Journeys & Dual-Persona Design</h3>
          <p className={`${t.textMuted} text-base md:text-lg max-w-3xl mx-auto`}>
            I mapped distinct journeys for each persona and balanced their needs through guided experiences, progressive disclosure, and consistent mental models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`${t.cardBg} rounded-lg border-2 p-6`} style={{ borderColor: `${t.accentVar}40` }}>
            <div className="space-y-4">
              <div>
                <h4 className={`${t.text} text-lg font-semibold mb-1`}>Technical Business Users / Analysts</h4>
                <p className={`${t.textMuted} text-xs`}>Quick access to advanced controls and customization</p>
              </div>
              <JourneyList items={technicalJourney} />
            </div>
          </div>

          <div className={`${t.cardBg} rounded-lg border-2 p-6`} style={{ borderColor: `${t.accentVar}40` }}>
            <div className="space-y-4">
              <div>
                <h4 className={`${t.text} text-lg font-semibold mb-1`}>Non-Technical Business Users</h4>
                <p className={`${t.textMuted} text-xs`}>Guided experiences and clear explanations</p>
              </div>
              <JourneyList items={nonTechnicalJourney} />
            </div>
          </div>
        </div>

        <div>
          <h4 className={`${t.text} text-xl font-semibold mb-6 text-center`}>Design Approach: Balancing Both Personas</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {designApproach.map((d, i) => (
              <div key={i} className={`${t.cardBg} rounded-lg border-2 p-5 transition-all duration-300 hover:scale-105 hover:shadow-lg`} style={{ borderColor: `${t.accentVar}40` }}>
                <div className="space-y-3">
                  <h5 className={`${t.text} text-base font-semibold`}>{d.approach}</h5>
                  <p className={`${t.textMuted} text-xs leading-relaxed`}>{d.description}</p>
                  <div className="pt-2 border-t" style={{ borderColor: subtleBorder }}>
                    <ul className="space-y-1">
                      {d.benefits.map((b, j) => (
                        <li key={j} className={`${t.text} text-xs flex items-start gap-1.5`}>
                          <span className={`${t.textAccent} mt-0.5`}>•</span>
                          <span>{b}</span>
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
