'use client'

interface IQChallengesBreakdownProps {
  isLightBackground?: boolean
}

export default function IQChallengesBreakdown({ isLightBackground = false }: IQChallengesBreakdownProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const personas = [
    {
      name: 'Mark Bennett',
      role: 'Tech Visionary',
      need: 'Powerful, scalable solutions',
    },
    {
      name: 'Lisa Carter',
      role: 'Financial Strategist',
      need: 'Clear insights without complexity',
    },
    {
      name: 'Dan',
      role: 'Analytics Innovator',
      need: 'Advanced controls',
    },
    {
      name: 'Jamie',
      role: 'Techy Analyst',
      need: 'Enable others while maintaining quality',
    },
  ]

  const challenges = [
    {
      challenge: 'Serving Four Distinct Personas',
      description: 'The central challenge was serving four distinct personas without compromise. Each persona had different needs: Mark needed powerful solutions, Lisa needed simplicity, Dan needed advanced controls, and Jamie needed to enable others.',
      solution: 'Progressive disclosure and thoughtful layering. I designed default simple paths for non-technical users (Lisa, Jamie enabling others) while making advanced options accessible for technical users (Mark, Dan) through "Show advanced" toggles and guided flows.',
      icon: '👥',
    },
    {
      challenge: 'Technical Depth vs. Simplicity',
      description: 'Deciding what to hide vs. what to expose. Technical users needed advanced controls, but non-technical users would get lost if everything was visible.',
      solution: 'Dual-layer UX architecture. Simple paths were the default, with advanced options available behind progressive disclosure. Guided flows kept non-technical users on track while allowing analysts to customize.',
      icon: '⚖️',
    },
    {
      challenge: 'Cross-functional Alignment',
      description: 'Keeping PM, engineering, and QA aligned on UX goals required constant communication and documentation. A lot of cross-functional collaboration was required — I collaborated with PMs from other feature teams like HUB and Designer because DSML reached everywhere. I became the person who could explain IQ end-to-end.',
      solution: 'Regular collaboration across feature teams (HUB, Designer, IQ), clear UX documentation, and onboarding sessions. I translated user needs into technical requirements and technical constraints into UX solutions, ensuring IQ\'s patterns worked seamlessly across the entire WebFOCUS ecosystem. The handoff was clean because the architecture was solid.',
      icon: '🤝',
    },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            Challenges, Tradeoffs & How I Handled Them
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-3xl mx-auto`}>
            Designing IQ required balancing competing needs: technical depth vs. simplicity, multiple personas, and cross-functional alignment. Here&apos;s how I approached each challenge.
          </p>
        </div>

        {/* Four Personas and Their Needs */}
        <div>
          <h4 className={`${textColor} text-lg font-semibold mb-4 text-center`}>The Four Personas and Their Competing Needs</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {personas.map((persona, index) => (
              <div
                key={index}
                className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
                style={{ borderColor: accentColor + '40' }}
              >
                <div className="space-y-2">
                  <h5 className={`${textColor} text-sm font-semibold`}>{persona.name}</h5>
                  <p className={`${mutedColor} text-xs font-mono uppercase tracking-wider`}>{persona.role}</p>
                  <div className="pt-2 border-t" style={{ borderColor: borderColor.replace('border-', '').includes('black') ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)' }}>
                    <p className={`${textColor} text-xs font-medium mb-1`} style={{ color: accentColor }}>Needs:</p>
                    <p className={`${mutedColor} text-xs leading-relaxed`}>{persona.need}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="space-y-6 mt-8">
          {challenges.map((item, index) => (
            <div
              key={index}
              className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg`}
              style={{ borderColor: accentColor + '40' }}
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  <div className="flex-1 space-y-3">
                    <div>
                      <h4 className={`${textColor} text-lg font-semibold mb-2`}>{item.challenge}</h4>
                      <p className={`${mutedColor} text-sm leading-relaxed`}>{item.description}</p>
                    </div>
                    <div className={`${bgColor} rounded-lg p-4 border ${borderColor}`}>
                      <div className="flex items-start gap-2">
                        <span className={`${textColor} text-sm font-semibold flex-shrink-0`} style={{ color: accentColor }}>
                          Solution:
                        </span>
                        <p className={`${textColor} text-sm leading-relaxed`}>{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

