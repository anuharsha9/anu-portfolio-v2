'use client'

interface SMEValidationQuotesProps {
  isLightBackground?: boolean
}

export default function SMEValidationQuotes({ isLightBackground = false }: SMEValidationQuotesProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const quotes = [
    {
      quote: 'Oh, Predict Data is right here on right-click — that makes sense. This is much easier than the old flow.',
      context: 'Entry point discovery',
    },
    {
      quote: 'I don\'t have to remember what to do next — the steps walk me through it.',
      context: 'Guided workflow',
    },
    {
      quote: 'I used to get stuck at "results not generated" and had no idea what I\'d missed. Now the flow tells me what\'s wrong and what to do next.',
      context: 'Error handling',
    },
    {
      quote: 'The steps make it feel like a guided tour, not a black box.',
      context: 'User experience',
    },
    {
      quote: 'Right-click → Predict Data is exactly where I\'d expect this to be in WebFOCUS.',
      context: 'Platform integration',
    },
    {
      quote: 'Before, I always felt like I\'d done something wrong when I saw "results not generated". Here I always know what the system wants from me.',
      context: 'Clarity and guidance',
    },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            Validation from SME Usability Tests
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-2xl mx-auto`}>
            All 5 SMEs (customer reps/heavy WebFOCUS users) described the new 4-step workflow as &quot;much easier&quot; and &quot;more guiding&quot; than the previous data flow–based UI.
          </p>
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((item, index) => (
            <div
              key={index}
              className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-l-4 p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg`}
              style={{ borderLeftColor: accentColor }}
            >
              <p className={`${textColor} text-base leading-relaxed mb-3 italic`}>
                &quot;{item.quote}&quot;
              </p>
              <p className={`${mutedColor} text-xs font-mono uppercase tracking-wider`}>
                {item.context}
              </p>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg p-6 border ${borderColor} mt-8`}>
          <p className={`${textColor} text-sm leading-relaxed text-center`}>
            <span className="font-semibold" style={{ color: accentColor }}>Key insight:</span> In SME sessions, we saw zero &quot;I don&apos;t know what to do now&quot; dead-ends. This directly validated the error handling approach — when something was invalid, inline messages told them what to change. The old &quot;results not generated&quot; confusion was eliminated.
          </p>
        </div>
      </div>
    </div>
  )
}

