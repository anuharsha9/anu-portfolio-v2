'use client'

interface LearningBreakdownProps {
  isLightBackground?: boolean
}

export default function LearningBreakdown({ isLightBackground = false }: LearningBreakdownProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const learnings = [
    {
      category: 'Systems Thinking',
      items: [
        'Think in platform patterns — not just solving RC, but establishing patterns (Explorer-as-filtered-view) that could scale across the entire platform',
        'Redesign at architecture scale — understanding that RC wasn\'t a feature, it was a product inside a product',
        'Interpret undocumented logic — mapping 40 years of accumulated complexity, understanding rules that existed only in code and tribal knowledge',
      ],
    },
    {
      category: 'Constraint Management',
      items: [
        'Balance constraints rationally — V1 rejected for strategy, V2 rejected for resourcing, V3 succeeded by working within constraints instead of fighting them',
        'Make decisions at Staff/Principal level — proposing three architectural directions, synthesizing constraints, and landing on a solution that balanced everything',
      ],
    },
    {
      category: 'Collaboration & Communication',
      items: [
        'Collaborate with deeply technical engineers — working with the one engineer who built it decades ago, learning from his domain expertise while translating it into UX',
        'Communicate clearly — explaining complex systems to engineers, PMs, QA, and leadership who had never seen RC end-to-end',
      ],
    },
    {
      category: 'Strategic Design',
      items: [
        'Design for long-term extensibility — creating an experience where more could fit without restricting anything',
        'Understand customer realities — seeing how customers hacked their way around broken UI, then designing a system that worked with them, not against them',
        'Own outcomes end-to-end — from reverse-engineering to architecture to team alignment to shipping, I owned every aspect of the redesign',
        'Operate like a product owner when needed — operating where product, design, and engineering converge, thinking like a product strategist, design like a systems architect, and collaborate like an engineering partner',
      ],
    },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            Through RC, I Learned To
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-2xl mx-auto`}>
            This was not just a redesign. It was a turning point in how I understand product, platforms, people, and myself.
          </p>
        </div>

        {/* Learning Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learnings.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
              style={{ borderColor: accentColor + '40' }}
            >
              <div className="space-y-4">
                <h4 className={`${textColor} text-lg font-semibold`}>{category.category}</h4>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
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
      </div>
    </div>
  )
}

