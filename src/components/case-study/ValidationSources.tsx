'use client'

interface ValidationSourcesProps {
  isLightBackground?: boolean
}

export default function ValidationSources({ isLightBackground = false }: ValidationSourcesProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const sources = [
    {
      source: 'Internal Feedback',
      description: 'During internal demos, engineers and PMs who had never understood RC could now explain it to others. The architecture made sense to people who had only seen pieces of the system before.',
      icon: '👥',
    },
    {
      source: 'Customer Feedback',
      description: 'In a Virtual User Group session I hosted, a long-time enterprise customer praised the redesign directly and said he was excited for what was coming next. That moment mattered because I had seen RC users hack their way around a broken UI for years — and now they finally had a system that worked with them, not against them.',
      icon: '💬',
    },
    {
      source: 'Support Team',
      description: 'The support team reported fewer "how do I..." questions and more "can I do..." questions — a shift from confusion to capability. People who had used RC for years were discovering features they never knew existed, simply because the interface made them discoverable.',
      icon: '🎯',
    },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            Validation Came From Multiple Sources
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-2xl mx-auto`}>
            The transformation was visible immediately. Users who had spent years working around the system&apos;s limitations could now work with it. New users could understand RC in minutes, not hours.
          </p>
        </div>

        {/* Validation Sources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sources.map((item, index) => (
            <div
              key={index}
              className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
              style={{ borderColor: accentColor + '40' }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: accentColor + '20' }}
                  >
                    {item.icon}
                  </div>
                  <h4 className={`${textColor} text-lg font-semibold`}>{item.source}</h4>
                </div>
                <p className={`${mutedColor} text-sm leading-relaxed`}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg p-6 border ${borderColor} mt-8`}>
          <p className={`${textColor} text-base leading-relaxed text-center`}>
            <span className="font-semibold" style={{ color: accentColor }}>More importantly:</span> The architecture I designed allowed the PM to add new features after launch without breaking the mental model. I had designed for extensibility, not just for the current release.
          </p>
        </div>
      </div>
    </div>
  )
}

