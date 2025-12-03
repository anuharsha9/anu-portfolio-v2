'use client'

interface ImpactVisualProps {
  isLightBackground?: boolean
}

export default function ImpactVisual({ isLightBackground = false }: ImpactVisualProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const entryPoints = {
    old: [
      { feature: 'Create Schedule', location: 'Buried 4 clicks deep' },
      { feature: 'Create Distribution List', location: 'Separate menu path' },
      { feature: 'Create Access List', location: 'Another separate path' },
      { feature: 'RC Explorer', location: 'Hamburger menu → hidden' },
      { feature: 'RC Admin', location: 'Management Center → Admin Console' },
    ],
    new: [
      { feature: 'Create Schedule', location: '+ menu → Create Schedule', unified: true },
      { feature: 'Create Distribution List', location: '+ menu → Create Distribution List', unified: true },
      { feature: 'Create Access List', location: '+ menu → Create Access List', unified: true },
      { feature: 'RC Explorer', location: 'Home → RC assets filter', unified: true },
      { feature: 'RC Admin', location: 'Management Center → RC Admin', unified: true },
    ],
  }

  const clickReductionTasks = [
    { task: 'Create Schedule', old: '5–6 clicks + new tab', new: '1 click', reduction: '83%' },
    { task: 'Complete Schedule Setup', old: 'Multiple steps', new: '3 clicks', reduction: 'Simplified' },
    { task: 'Access Job Log', old: '1 click (new tab)', new: '1 click (in modal)', reduction: 'No new tab' },
    { task: 'Access Explorer', old: '3 clicks', new: '1 click', reduction: '67%' },
    { task: 'Access Admin', old: '3 clicks', new: '2 clicks', reduction: '33%' },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            Impact: Entry Points, Workflows & Validation
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-2xl mx-auto`}>
            Unified entry points, streamlined workflows, and validation from multiple sources.
          </p>
        </div>

        {/* Entry Points - Enhanced */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-5`} style={{ borderColor: mutedColor.replace('text-', '').includes('666') ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)' }}>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider`}>Before: Scattered</span>
                <div className="h-px flex-1" style={{ backgroundColor: mutedColor.replace('text-', '').includes('666') ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)' }}></div>
              </div>
              <div className="space-y-2">
                {entryPoints.old.map((point, idx) => (
                  <div key={idx} className={`${bgColor} rounded-lg border ${borderColor} p-3 transition-all duration-200 hover:scale-[1.02]`}>
                    <p className={`${textColor} text-sm font-semibold mb-1`}>{point.feature}</p>
                    <p className={`${mutedColor} text-xs italic`}>{point.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-5`} style={{ borderColor: accentColor + '60' }}>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className={`${textColor} text-xs font-mono uppercase tracking-wider font-semibold`} style={{ color: accentColor }}>After: Unified</span>
                <div className="h-px flex-1" style={{ backgroundColor: accentColor + '30' }}></div>
              </div>
              <div className="space-y-2">
                {entryPoints.new.map((point, idx) => (
                  <div key={idx} className={`${bgColor} rounded-lg border-2 p-3 transition-all duration-200 hover:scale-[1.02]`} style={{ borderColor: point.unified ? accentColor + '60' : borderColor }}>
                    <p className={`${textColor} text-sm font-semibold mb-1`}>{point.feature}</p>
                    <p className={`${textColor} text-xs font-medium`} style={{ color: point.unified ? accentColor : textColor }}>
                      {point.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Click Reduction - Enhanced Grid */}
        <div className="space-y-4">
          <div className="text-center">
            <h4 className={`${textColor} text-lg font-semibold mb-1`}>Click Reduction Breakdown</h4>
            <p className={`${mutedColor} text-sm`}>Measurable improvements across key workflows</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {clickReductionTasks.map((task, idx) => (
              <div key={idx} className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg`} style={{ borderColor: accentColor + '40' }}>
                <h4 className={`${textColor} text-sm font-semibold mb-3`}>{task.task}</h4>
                <div className="space-y-2">
                  <div className="pb-2 border-b" style={{ borderColor: borderColor.replace('border-', '').includes('black') ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)' }}>
                    <p className={`${mutedColor} text-xs mb-1`}>Before</p>
                    <p className={`${textColor} text-xs`}>{task.old}</p>
                  </div>
                  <div>
                    <p className={`${mutedColor} text-xs mb-1`}>After</p>
                    <p className={`${textColor} text-sm font-bold mb-2`} style={{ color: accentColor }}>
                      {task.new}
                    </p>
                    <span
                      className="inline-block px-2.5 py-1 rounded-md text-xs font-bold text-white"
                      style={{ backgroundColor: accentColor }}
                    >
                      {task.reduction}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Validation Sources - Enhanced */}
        <div className="pt-8 border-t-2" style={{ borderColor: accentColor + '40' }}>
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h4 className={`${textColor} text-xl font-semibold`}>Validation Sources</h4>
              <p className={`${mutedColor} text-sm`}>Feedback from multiple stakeholders confirms the impact</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-5 transition-all duration-300 hover:scale-105 hover:shadow-lg`} style={{ borderColor: accentColor + '50' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl" style={{ backgroundColor: accentColor + '20' }}>
                    👥
                  </div>
                  <h5 className={`${textColor} text-base font-semibold`}>Internal Feedback</h5>
                </div>
                <p className={`${mutedColor} text-sm leading-relaxed`}>Engineers and PMs who had never understood RC could now explain it to others.</p>
              </div>
              <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-5 transition-all duration-300 hover:scale-105 hover:shadow-lg`} style={{ borderColor: accentColor + '50' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl" style={{ backgroundColor: accentColor + '20' }}>
                    💬
                  </div>
                  <h5 className={`${textColor} text-base font-semibold`}>Customer Feedback</h5>
                </div>
                <p className={`${mutedColor} text-sm leading-relaxed`}>Long-time enterprise customer praised the redesign and said he was excited for what was coming next.</p>
              </div>
              <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-5 transition-all duration-300 hover:scale-105 hover:shadow-lg`} style={{ borderColor: accentColor + '50' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl" style={{ backgroundColor: accentColor + '20' }}>
                    🎯
                  </div>
                  <h5 className={`${textColor} text-base font-semibold`}>Support Team</h5>
                </div>
                <p className={`${mutedColor} text-sm leading-relaxed`}>Fewer &quot;how do I...&quot; questions and more &quot;can I do...&quot; questions — a shift from confusion to capability.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

