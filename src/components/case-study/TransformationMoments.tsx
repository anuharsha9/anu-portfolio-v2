'use client'

interface TransformationMomentsProps {
  isLightBackground?: boolean
}

export default function TransformationMoments({ isLightBackground = false }: TransformationMomentsProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const moments = [
    {
      moment: 'The moment I realized RC was five subsystems, not one',
      insight: 'This wasn\'t just observation — it was a fundamental reframing that changed everything. Instead of redesigning a UI, I was unifying a product.',
    },
    {
      moment: 'The moment my director of design loved the Explorer-as-filtered-view idea',
      insight: 'That\'s when I understood the difference between solving a problem and establishing a pattern. V3 wasn\'t just about RC — it was about platform architecture.',
    },
    {
      moment: 'The moment a long-time customer praised my work in the Virtual User Group',
      insight: 'That\'s when I understood that clarity isn\'t just nice-to-have — it\'s capability. When users can understand a system, they can teach it, extend it, and rely on it.',
    },
    {
      moment: 'The moment the engineers who intimidated me initially became collaborators I respected',
      insight: 'That\'s when I understood that my credibility comes from clarity, depth, and consistent follow-through — not from title or seniority. I was the youngest in the room, but I had earned unspoken authority because I understood the system better than anyone else.',
    },
    {
      moment: 'The moment I realized I was managing two Principal-level redesigns simultaneously',
      insight: 'That\'s when I understood that leadership trusted me with complex, ambiguous work because I delivered clarity and structure, not just designs.',
    },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            Specific Transformation Moments
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-2xl mx-auto`}>
            These moments defined how I understand design, leadership, and myself.
          </p>
        </div>

        {/* Moments Timeline */}
        <div className="space-y-6">
          {moments.map((item, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < moments.length - 1 && (
                <div
                  className="absolute left-6 top-16 w-0.5 h-full"
                  style={{ backgroundColor: isLightBackground ? '#66666640' : '#ffffff40' }}
                />
              )}

              <div className="flex gap-6">
                {/* Moment Number */}
                <div className="flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: accentColor }}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 ${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-6`} style={{ borderColor: accentColor + '40' }}>
                  <div className="space-y-3">
                    <h4 className={`${textColor} text-lg font-semibold`}>{item.moment}</h4>
                    <p className={`${mutedColor} text-sm leading-relaxed`}>{item.insight}</p>
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

