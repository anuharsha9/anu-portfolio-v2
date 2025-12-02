import { CaseStudyData } from '@/types/caseStudy'

interface FinalSummaryProps {
  summary: CaseStudyData['finalSummary']
  isLightBackground?: boolean
}

export default function FinalSummary({ summary, isLightBackground = false }: FinalSummaryProps) {
  if (!summary) {
    return null
  }

  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const dividerColor = isLightBackground ? 'bg-black/10' : 'bg-white/10'

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-baseline gap-4">
          <span className={`${mutedColor} text-sm font-mono uppercase tracking-wider`}>Summary</span>
          <div className={`h-px flex-1 ${dividerColor}`}></div>
        </div>
        <h2 className={`${textColor} text-3xl md:text-4xl font-serif leading-tight`}>{summary.title}</h2>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Story - Left Side (2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
          <div className={`${bgColor} rounded-lg p-6 md:p-8 border ${borderColor}`}>
            <div className={`${mutedColor} leading-relaxed whitespace-pre-line text-base md:text-lg`}>
              {summary.body}
            </div>
          </div>
        </div>

        {/* Key Points - Right Side (1/3 width) */}
        <aside className="lg:col-span-1">
          <div className={`${bgColor} rounded-lg p-6 border-2 ${borderColor} backdrop-blur-sm lg:sticky lg:top-24 shadow-lg`}>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider`}>Impact</span>
                <div className={`h-px flex-1 ${dividerColor}`}></div>
              </div>
              <h3 className={`${textColor} text-base font-semibold mb-4`}>
                Key Achievements
              </h3>
              <ul className="space-y-4">
                {summary.keyPoints.map((point, index) => (
                  <li key={index} className={`${mutedColor} text-sm md:text-base leading-relaxed flex items-start gap-2`}>
                    <span className={`text-[var(--accent-teal)] font-semibold flex-shrink-0 mt-0.5`}>•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

