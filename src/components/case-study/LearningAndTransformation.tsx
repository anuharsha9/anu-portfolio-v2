'use client'

interface LearningAndTransformationProps {
  isLightBackground?: boolean
}

export default function LearningAndTransformation({ isLightBackground = false }: LearningAndTransformationProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const learnings = [
    {
      category: 'Systems Thinking',
      items: [
        'Think in platform patterns — establishing patterns that could scale across the entire platform',
        'Redesign at architecture scale — understanding that RC wasn\'t a feature, it was a product inside a product',
        'Interpret undocumented logic — mapping 40 years of accumulated complexity',
      ],
    },
    {
      category: 'Constraint Management',
      items: [
        'Balance constraints rationally — V1 rejected for strategy, V2 rejected for resourcing, V3 succeeded by working within constraints',
        'Make decisions at Staff/Principal level — proposing three architectural directions and landing on a solution that balanced everything',
      ],
    },
    {
      category: 'Collaboration & Communication',
      items: [
        'Collaborate with deeply technical engineers — learning from domain expertise while translating it into UX',
        'Communicate clearly — explaining complex systems to engineers, PMs, QA, and leadership',
      ],
    },
    {
      category: 'Strategic Design',
      items: [
        'Design for long-term extensibility — creating an experience where more could fit without restricting anything',
        'Understand customer realities — seeing how customers hacked their way around broken UI, then designing a system that worked with them',
        'Own outcomes end-to-end — from reverse-engineering to architecture to team alignment to shipping',
      ],
    },
  ]

  const moments = [
    {
      moment: 'The moment I realized RC was five subsystems, not one',
      insight: 'This wasn\'t just observation — it was a fundamental reframing that changed everything.',
    },
    {
      moment: 'The moment my director loved the Explorer-as-filtered-view idea',
      insight: 'That\'s when I understood the difference between solving a problem and establishing a pattern.',
    },
    {
      moment: 'The moment a long-time customer praised my work',
      insight: 'That\'s when I understood that clarity isn\'t just nice-to-have — it\'s capability.',
    },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h3 className={`${textColor} text-xl md:text-2xl font-serif`}>
            What This Project Made Me
          </h3>
          <p className={`${mutedColor} text-sm md:text-base max-w-2xl mx-auto`}>
            Through RC, I learned to think at platform scale, interpret undocumented systems, and balance constraints with clarity.
          </p>
        </div>

        {/* Learning Categories - Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {learnings.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-4 transition-all duration-300 hover:scale-[1.02]`}
              style={{ borderColor: accentColor + '40' }}
            >
              <h4 className={`${textColor} text-base font-semibold mb-3`}>{category.category}</h4>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className={`${mutedColor} text-xs leading-relaxed flex items-start gap-2`}>
                    <span className="text-[var(--accent-teal)] font-bold flex-shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Transformation Moments - Compact */}
        <div className="space-y-3 pt-4 border-t" style={{ borderColor: borderColor.replace('border-', '').includes('black') ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)' }}>
          <h4 className={`${textColor} text-lg font-semibold mb-4`}>Key Transformation Moments</h4>
          {moments.map((item, index) => (
            <div key={index} className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-4`} style={{ borderColor: accentColor + '40' }}>
              <div className="flex gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: accentColor }}
                >
                  {index + 1}
                </div>
                <div className="flex-1 space-y-1">
                  <h5 className={`${textColor} text-sm font-semibold`}>{item.moment}</h5>
                  <p className={`${mutedColor} text-xs leading-relaxed`}>{item.insight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

