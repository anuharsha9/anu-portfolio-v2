'use client'

interface ThreeCriticalPivotsProps {
  isLightBackground?: boolean
}

export default function ThreeCriticalPivots({ isLightBackground = false }: ThreeCriticalPivotsProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const pivots = [
    {
      number: 1,
      title: 'Split Train vs Run',
      before: 'Unified Train+Run experience',
      after: 'Separate tabs for distinct mental models',
      reason: 'We were mixing two different mental models — creating models vs applying them. Splitting them simplified both UX and implementation.',
      quote: '"Combining Train and Run looked clever on paper, but was confusing both for the architecture and the user."',
    },
    {
      number: 2,
      title: 'Remove Data Flow from ML UI',
      before: 'Engineering wanted data flow visible inside ML UI',
      after: 'Data flow accessible elsewhere, ML UI stays focused',
      reason: 'After training models hundreds of times myself, I concluded the data flow was adding noise and risking users losing progress.',
      quote: 'The compromise: data flow remains accessible elsewhere in the platform, but the ML UI itself is data-flow-free and focused on the ML task.',
    },
    {
      number: 3,
      title: 'Model Cards vs Tables',
      before: 'Legacy UI used tables for everything, including models',
      after: 'Model cards for better scanning and comparison',
      reason: 'Despite initial pushback, cards became the primary way to choose a model, with tables reserved for dense tabular data like training logs.',
      quote: 'Cards improved scanning and comparison, making model selection more intuitive.',
    },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-6 md:p-8`}>
      <div className="space-y-3">
        {/* Header */}
        <div className="text-center space-y-1">
          <h3 className={`${textColor} text-xl md:text-2xl font-serif`}>
            Three Critical Design Pivots
          </h3>
          <p className={`${mutedColor} text-sm md:text-base max-w-2xl mx-auto`}>
            The mapping revealed the problems, but solving them required multiple iterations. Three critical pivots shaped the final design.
          </p>
        </div>

        {/* Compact Pivots - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {pivots.map((pivot, index) => (
            <div
              key={index}
              className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
              style={{ borderColor: accentColor + '40' }}
            >
              <div className="space-y-2">
                {/* Header with number */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: accentColor }}
                  >
                    {pivot.number}
                  </div>
                  <h4 className={`${textColor} text-base font-semibold`}>{pivot.title}</h4>
                </div>

                {/* Before/After - Compact */}
                <div className="space-y-1">
                  <div className={`${bgColor} rounded p-2 border ${borderColor}`}>
                    <p className={`${mutedColor} text-xs font-mono uppercase tracking-wider mb-0.5`}>Before</p>
                    <p className={`${mutedColor} text-xs leading-tight`}>{pivot.before}</p>
                  </div>
                  <div className={`${bgColor} rounded p-2 border-2`} style={{ borderColor: accentColor + '60' }}>
                    <p className={`${textColor} text-xs font-mono uppercase tracking-wider mb-0.5`} style={{ color: accentColor }}>After</p>
                    <p className={`${textColor} text-xs font-medium leading-tight`}>{pivot.after}</p>
                  </div>
                </div>

                {/* Reason - Compact */}
                <div className={`${bgColor} rounded p-2 border-l-2`} style={{ borderLeftColor: accentColor }}>
                  <p className={`${mutedColor} text-xs leading-relaxed`}>{pivot.reason}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

