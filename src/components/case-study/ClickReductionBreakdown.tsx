'use client'

interface ClickReductionBreakdownProps {
  isLightBackground?: boolean
}

export default function ClickReductionBreakdown({ isLightBackground = false }: ClickReductionBreakdownProps) {
  const textColor = isLightBackground ? 'text-[#1A1A1A]' : 'text-white'
  const mutedColor = isLightBackground ? 'text-[#666666]' : 'text-white/70'
  const borderColor = isLightBackground ? 'border-black/10' : 'border-white/10'
  const bgColor = isLightBackground ? 'bg-black/5' : 'bg-white/5'
  const accentColor = 'var(--accent-teal)'

  const tasks = [
    {
      task: 'Create Schedule',
      old: { clicks: '5–6', steps: ['Go into hub', 'Navigate to workspaces', 'Click plus content button', 'Drill down in context menu', 'Select create schedule', 'Scheduler opens in new tab'] },
      new: { clicks: '1', steps: ['+ menu → Create Schedule (modal opens)'] },
      reduction: '83%',
    },
    {
      task: 'Complete Schedule Setup',
      old: { clicks: 'Multiple', steps: ['Configure properties', 'Add task', 'Select distribution method', 'Set recurrence', 'Check other settings', 'Save'] },
      new: { clicks: '3', steps: ['Add task', 'Select distribution method', 'Set recurrence (done)'] },
      reduction: 'Simplified',
    },
    {
      task: 'Access Job Log',
      old: { clicks: '1', steps: ['Opens in brand new tab'] },
      new: { clicks: '1', steps: ['Opens within schedule dialog (one click)'] },
      reduction: 'No new tab',
    },
    {
      task: 'Access Explorer',
      old: { clicks: '3', steps: ['Hamburger menu', 'Navigate to Explorer', 'Open Explorer'] },
      new: { clicks: '1', steps: ['Click Explorer in Home'] },
      reduction: '67%',
    },
    {
      task: 'Access Admin',
      old: { clicks: '3', steps: ['Management Center', 'Admin Console', 'RC Status'] },
      new: { clicks: '2', steps: ['Management Center', 'RC Admin'] },
      reduction: '33%',
    },
  ]

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-8 md:p-12`}>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h3 className={`${textColor} text-2xl md:text-3xl font-serif`}>
            Click Reduction Breakdown
          </h3>
          <p className={`${mutedColor} text-base md:text-lg max-w-2xl mx-auto`}>
            Detailed breakdown of how we reduced clicks across all major RC tasks by unifying workflows and eliminating context switching.
          </p>
        </div>

        {/* Task Breakdowns */}
        <div className="space-y-6">
          {tasks.map((task, index) => (
            <div key={index} className={`${isLightBackground ? 'bg-white' : 'bg-black/10'} rounded-lg border ${borderColor} p-6`}>
              <div className="mb-4">
                <h4 className={`${textColor} text-lg font-serif mb-2`}>{task.task}</h4>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className={`${mutedColor} text-sm`}>Before:</span>
                    <span className={`${textColor} font-bold`}>{task.old.clicks} clicks</span>
                  </div>
                  <span className={mutedColor}>→</span>
                  <div className="flex items-center gap-2">
                    <span className={`${mutedColor} text-sm`}>After:</span>
                    <span className={`${textColor} font-bold`} style={{ color: accentColor }}>
                      {task.new.clicks} click{task.new.clicks !== '1' ? 's' : ''}
                    </span>
                  </div>
                  <div className="ml-auto">
                    <span
                      className="px-3 py-1 rounded-full text-sm font-bold text-white"
                      style={{ backgroundColor: accentColor }}
                    >
                      {task.reduction} reduction
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Old Steps */}
                <div>
                  <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider`}>Old Workflow</span>
                  <div className="mt-2 space-y-2">
                    {task.old.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center gap-2">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                          style={{ backgroundColor: '#999' }}
                        >
                          {stepIndex + 1}
                        </div>
                        <p className={`${mutedColor} text-sm`}>{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* New Steps */}
                <div>
                  <span className={`${mutedColor} text-xs font-mono uppercase tracking-wider`}>New Workflow</span>
                  <div className="mt-2 space-y-2">
                    {task.new.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center gap-2">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                          style={{ backgroundColor: accentColor }}
                        >
                          {stepIndex + 1}
                        </div>
                        <p className={`${textColor} text-sm font-medium`}>{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

