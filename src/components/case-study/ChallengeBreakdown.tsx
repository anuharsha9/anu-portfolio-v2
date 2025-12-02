'use client'

interface ChallengeBreakdownProps {
  isLightBackground?: boolean
}

export default function ChallengeBreakdown({ isLightBackground = false }: ChallengeBreakdownProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const challenges = [
    { category: 'Age & Scale', items: ['40+ years old', '13M+ schedules daily (one customer)'] },
    { category: 'Documentation', items: ['Zero documentation', 'Only tribal knowledge'] },
    { category: 'Knowledge Gap', items: ['Head PM: surface level only', 'Design director: never seen it', 'Only 1 engineer understood it end-to-end'] },
    { category: 'Legacy Code', items: ['Extremely legacy codebase', 'Last redesign: never happened'] },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            Why ReportCaster Kept Getting Deferred
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-2xl mx-auto`}>
            The scale and complexity that made this project daunting — and why volunteering for it demonstrated real leadership.
          </p>
        </div>

        {/* Challenge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
              style={{ borderColor: index % 2 === 0 ? accentColor + '40' : (isLightBackground ? '#0000001A' : '#FFFFFF1A') }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: accentColor }}
                  >
                    {index + 1}
                  </div>
                  <h4 className={`${textColor} text-lg font-semibold`}>{challenge.category}</h4>
                </div>
                <ul className="space-y-2 pl-12">
                  {challenge.items.map((item, itemIndex) => (
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

        {/* Bottom Note */}
        <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg p-6 border ${borderColor} mt-8`}>
          <p className={`${textColor} text-base leading-relaxed text-center`}>
            <span className="font-semibold" style={{ color: accentColor }}>The result:</span> One week into joining, when my director brought up this project waiting in the pipeline, I said &quot;I would like to take it up&quot; — a system that had been deferred for years due to its complexity, with only a sandbox link and tribal knowledge to start.
          </p>
        </div>
      </div>
    </div>
  )
}

