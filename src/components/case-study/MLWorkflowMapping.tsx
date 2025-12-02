'use client'

interface MLWorkflowMappingProps {
  isLightBackground?: boolean
}

export default function MLWorkflowMapping({ isLightBackground = false }: MLWorkflowMappingProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const mappedAreas = [
    {
      area: 'Data Selection',
      items: ['How users selected data', 'Data flow integration', 'Dataset compatibility'],
    },
    {
      area: 'Training Configuration',
      items: ['How they configured training', 'Hyperparameter access', 'Model type selection'],
    },
    {
      area: 'Model Execution',
      items: ['How models ran (or failed)', 'Tiny toolbar play icon', 'Hidden execution states'],
    },
    {
      area: 'Results Interpretation',
      items: ['How results were interpreted', 'Confusing "results not generated" errors', 'Unclear error messaging'],
    },
  ]

  const coreProblems = [
    'Technical language everywhere',
    'Fragmented flows across multiple screens',
    'No guidance for non-experts',
    'Hidden states and unclear errors',
    'No connection to existing WebFOCUS workflows',
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-6 md:p-8`}>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h3 className={`${textColor} text-xl md:text-2xl font-serif`}>
            Mapping the Existing Black-Box Workflow
          </h3>
          <p className={`${mutedColor} text-sm md:text-base max-w-2xl mx-auto`}>
            I documented every workflow step, every user decision point, and every place where users got stuck. This mapping became the foundation for the redesign.
          </p>
        </div>

        {/* Compact Mapped Areas Grid - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mappedAreas.map((area, index) => (
            <div
              key={index}
              className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
              style={{ borderColor: accentColor + '40' }}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                    style={{ backgroundColor: accentColor }}
                  >
                    {index + 1}
                  </div>
                  <h4 className={`${textColor} text-sm font-semibold`}>{area.area}</h4>
                </div>
                <ul className="space-y-1.5">
                  {area.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={`${mutedColor} text-xs leading-relaxed flex items-start gap-1.5`}>
                      <span className="text-[var(--accent-teal)] font-bold flex-shrink-0 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Core Problems - Compact */}
        <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-4 mt-4`} style={{ borderColor: accentColor + '60' }}>
          <h4 className={`${textColor} text-sm font-semibold mb-3`} style={{ color: accentColor }}>Core Problems Identified</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {coreProblems.map((problem, idx) => (
              <div key={idx} className={`${bgColor} rounded p-2 border ${borderColor}`}>
                <p className={`${mutedColor} text-xs flex items-start gap-1.5`}>
                  <span className="text-[var(--accent-teal)] mt-0.5 flex-shrink-0">×</span>
                  <span className="leading-tight">{problem}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note - Compact */}
        <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg p-4 border-l-4 mt-4`} style={{ borderLeftColor: accentColor }}>
          <p className={`${textColor} text-xs leading-relaxed`}>
            <span className="font-semibold" style={{ color: accentColor }}>The insight:</span> Even after I understood it, I found it frustrating and unintuitive. If a designer who knows the system finds it irritating, a new user trying to adopt ML for the first time has almost no chance. That realization directly pushed me toward inventing a guided, step-based workflow.
          </p>
        </div>
      </div>
    </div>
  )
}

