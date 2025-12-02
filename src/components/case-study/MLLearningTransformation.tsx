'use client'

interface MLLearningTransformationProps {
  isLightBackground?: boolean
}

export default function MLLearningTransformation({ isLightBackground = false }: MLLearningTransformationProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const journey = [
    {
      phase: 'Starting Point',
      state: 'No ML background, zero knowledge',
      description: 'Feeling underqualified, accepting the challenge to make predictive modeling usable',
    },
    {
      phase: 'Learning Phase',
      state: 'Building expertise while designing',
      description: 'Courses, Principal Data Scientist collaboration, AI tools, workflow mapping',
    },
    {
      phase: 'Translation Phase',
      state: 'Becoming the bridge',
      description: 'Translating between data scientists and end users, understanding both languages',
    },
    {
      phase: 'Ownership Phase',
      state: 'From "outsider" to "owner"',
      description: 'Stopped just asking questions, started saying "no" to scope creep, making Principal-level decisions',
    },
  ]

  const skillsGained = [
    'Reading ML documentation and understanding evaluation metrics',
    'Translating between data science terminology and user language',
    'Making Principal-level decisions with incomplete but sufficient knowledge',
    'Leading cross-functional teams through technical ambiguity',
    "Saying 'no' to scope creep while earning respect from domain experts",
  ]

  const patterns = [
    '4-step flows',
    'Inline teaching',
    'Right-click entry',
    'Progressive disclosure',
    'Layered disclosure (default/advanced/expert)',
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-6 md:p-8`}>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            From Zero to Principal-Level Decisions
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-3xl mx-auto leading-relaxed`}>
            I started with zero ML knowledge. I ended making Principal-level decisions that shaped the product. The turning point? When I stopped asking questions and started saying &quot;No, we&apos;re not doing that in this release.&quot;
          </p>
        </div>

        {/* Compact Journey - Single row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {journey.map((phase, index) => (
            <div
              key={index}
              className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
              style={{ borderColor: accentColor + '40' }}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                    style={{ backgroundColor: accentColor }}
                  >
                    {index + 1}
                  </div>
                  <h4 className={`${textColor} text-sm font-semibold`}>{phase.phase}</h4>
                </div>
                <p className={`${textColor} text-xs font-medium`} style={{ color: accentColor }}>{phase.state}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Patterns - Compact single line */}
        <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-4`} style={{ borderColor: accentColor + '60' }}>
          <p className={`${mutedColor} text-xs mb-3 text-center`}>
            <span className="font-semibold" style={{ color: accentColor }}>Patterns that became reusable:</span> These directly influenced IQ Plugin design
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {patterns.map((pattern, idx) => (
              <div
                key={idx}
                className={`${bgColor} rounded px-3 py-1 border-2`}
                style={{ borderColor: accentColor + '60' }}
              >
                <p className={`${textColor} text-xs font-medium`} style={{ color: accentColor }}>
                  {pattern}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

