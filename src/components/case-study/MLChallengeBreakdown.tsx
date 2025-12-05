'use client'

interface MLChallengeBreakdownProps {
  isLightBackground?: boolean
}

export default function MLChallengeBreakdown({ isLightBackground = false }: MLChallengeBreakdownProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const challenges = [
    {
      category: 'Fragmented Workflow',
      items: [
        '4+ step scattered path',
        'Drag "model pill" onto data flow',
        'Configure in popup',
        'Notice tiny toolbar play icon',
        'Face confusing "results not generated" errors',
      ],
    },
    {
      category: 'Hidden Complexity',
      items: [
        'Hyperparameters hidden in right-click menus',
        'Accessible only after training',
        'No guidance for non-experts',
        'Technical language everywhere',
      ],
    },
    {
      category: 'Accessibility Barriers',
      items: [
        'Required external tools or coding',
        'Specialized knowledge needed',
        'Intimidating for non-technical users',
        'Even power users struggled',
      ],
    },
    {
      category: 'Platform Disconnection',
      items: [
        'No connection to WebFOCUS workflows',
        'Felt bolted-on, not native',
        'Multiple context switches',
        'No clear entry points',
      ],
    },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-4 md:p-6`}>
      <div className="space-y-3">
        {/* Header */}
        <div className="text-center space-y-1.5">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            The ML Experience That Was Hard for Everyone
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-2xl mx-auto`}>
            The existing ML workflow wasn&apos;t just hard for beginners — it was fragmented, opaque, and frustrating even for power users.
          </p>
        </div>

        {/* Challenge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-2xl border-2 p-3 md:p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(32,170,188,0.075)]`}
              style={{ borderColor: accentColor + '40' }}
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: accentColor }}
                  >
                    {index + 1}
                  </div>
                  <h4 className={`${textColor} text-lg font-semibold`}>{challenge.category}</h4>
                </div>
                <ul className="space-y-1 pl-12">
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
        <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg p-3 border ${borderColor} mt-3`}>
          <p className={`${textColor} text-base leading-relaxed text-center`}>
            <span className="font-semibold" style={{ color: accentColor }}>The mandate:</span> Make predictive modeling usable, understandable, and trustworthy — for analysts and everyday business users. I said yes to owning the end-to-end UX, even though I had no ML background.
          </p>
        </div>
      </div>
    </div>
  )
}

