'use client'

interface FourStepFlowBreakdownProps {
  isLightBackground?: boolean
}

export default function FourStepFlowBreakdown({ isLightBackground = false }: FourStepFlowBreakdownProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const steps = [
    {
      number: 1,
      title: 'Problem Type',
      description: 'What kind of problem is this?',
      details: ['Classification vs regression', 'Choose prediction type'],
      userBenefit: 'Clear starting point',
    },
    {
      number: 2,
      title: 'Target',
      description: 'What are we trying to predict?',
      details: ['Select target variable', 'Example: customer attrition'],
      userBenefit: 'Defines the goal',
    },
    {
      number: 3,
      title: 'Predictors',
      description: 'Which fields help us predict that target?',
      details: ['Choose features and data', 'Select relevant predictors'],
      userBenefit: 'Builds the model foundation',
    },
    {
      number: 4,
      title: 'Hyperparameters',
      description: 'Optional tuning for experts',
      details: ['Advanced configuration', 'Previously hidden post-training', 'Now honest and transparent'],
      userBenefit: 'Expert control when needed',
      optional: true,
    },
  ]

  const oldFlow = [
    'Drag "model pill" onto data flow',
    'Configure in popup',
    'Notice tiny toolbar play icon',
    'Face confusing "results not generated" errors',
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            The 4-Step Guided Flow
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-2xl mx-auto`}>
            A key moment with the Principal Data Scientist: &quot;What do you absolutely need to train a model responsibly?&quot; Answer → problem type, target, predictors, hyperparameters. That became the spine of the UX.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
              style={{ borderColor: step.optional ? accentColor + '60' : accentColor + '40' }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                    style={{ backgroundColor: accentColor }}
                  >
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h4 className={`${textColor} text-lg font-semibold`}>
                      Step {step.number}: {step.title}
                      {step.optional && (
                        <span className={`${mutedColor} text-xs font-normal ml-2`}>(Optional)</span>
                      )}
                    </h4>
                    <p className={`${mutedColor} text-sm mt-1`}>{step.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 pl-16">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className={`${mutedColor} text-sm leading-relaxed flex items-start gap-2`}>
                      <span className="text-[var(--accent-teal)] font-bold flex-shrink-0 mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className={`${bgColor} rounded-lg p-3 border-l-4 pl-3 ml-16`} style={{ borderLeftColor: accentColor }}>
                  <p className={`${mutedColor} text-xs italic`}>
                    <span className="font-semibold" style={{ color: accentColor }}>Benefit:</span> {step.userBenefit}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Old vs New */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-6`} style={{ borderColor: mutedColor.replace('text-', '').includes('666') ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)' }}>
            <h4 className={`${textColor} text-lg font-semibold mb-4`}>Old Fragmented Flow</h4>
            <ul className="space-y-2">
              {oldFlow.map((item, idx) => (
                <li key={idx} className={`${mutedColor} text-sm flex items-start gap-2`}>
                  <span className="text-[var(--accent-teal)] mt-1">×</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border-2 p-6`} style={{ borderColor: accentColor + '60' }}>
            <h4 className={`${textColor} text-lg font-semibold mb-4`} style={{ color: accentColor }}>New Guided Flow</h4>
            <p className={`${mutedColor} text-sm leading-relaxed mb-3`}>
              The workflow is honest and linear: you see what you&apos;re about to train, and you decide how deep you want to go.
            </p>
            <p className={`${mutedColor} text-xs italic`}>
              &quot;This flow works for both a data scientist and a non-technical user. It teaches without dumbing things down.&quot; — Principal Data Scientist
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

