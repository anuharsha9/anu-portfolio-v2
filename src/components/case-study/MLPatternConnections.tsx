'use client'

interface MLPatternConnectionsProps {
  isLightBackground?: boolean
}

export default function MLPatternConnections({ isLightBackground = false }: MLPatternConnectionsProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const patterns = [
    {
      id: 'ml',
      name: 'ML Functions',
      pattern: '4-step guided flows',
      description: 'Progressive disclosure for complex ML workflows',
      link: null,
    },
    {
      id: 'iq',
      name: 'IQ Plugin',
      pattern: 'Applied ML patterns to DSML',
      description: '4-step flow pattern became foundation for broader ML ecosystem',
      link: '/work/iq-plugin',
    },
    {
      id: 'rc',
      name: 'ReportCaster',
      pattern: 'Right-click entry points',
      description: 'Natural platform patterns for workflow initiation',
      link: '/work/reportcaster',
    },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            Patterns That Became Reusable
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-3xl mx-auto`}>
            The patterns I developed in ML Functions became part of my design vocabulary and directly influenced my other projects.
          </p>
        </div>

        {/* 3 Side-by-Side Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {patterns.map((pattern) => (
            <div
              key={pattern.id}
              className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-2xl border-2 p-6 md:p-8 h-full transition-all duration-300 hover:shadow-[0_8px_16px_rgba(13,148,136,0.075)]`}
              style={{ borderColor: accentColor }}
            >
              <div className="space-y-3">
                <h4 className={`${textColor} text-lg font-semibold`}>{pattern.name}</h4>
                <p className={`${textColor} text-sm font-medium`} style={{ color: accentColor }}>
                  {pattern.pattern}
                </p>
                <p className={`${mutedColor} text-xs leading-relaxed`}>
                  {pattern.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

