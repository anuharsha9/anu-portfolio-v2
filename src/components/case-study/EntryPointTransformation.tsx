'use client'

import { getTheme } from '@/lib/design-system'

interface EntryPointTransformationProps {
  isLightBackground?: boolean
}

export default function EntryPointTransformation({ isLightBackground = false }: EntryPointTransformationProps) {
  const t = getTheme(isLightBackground)
  const subtleBorder = isLightBackground ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)'
  const subtleDivider = isLightBackground ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'

  const oldPath = [
    { step: 'Click on + menu', clicks: 1 },
    { step: 'Click on create data flow', clicks: 1 },
    { step: 'New reporting server tab opens', clicks: 0 },
    { step: 'Drag a data on the data flow', clicks: 1 },
    { step: 'Navigate to Train models plugin in reporting server', clicks: 1 },
    { step: 'Drag and drop the problem type on the data flow', clicks: 1 },
    { step: 'Immediately a popup comes up - select target', clicks: 1 },
    { step: 'Underneath it - select predictors', clicks: 1 },
    { step: "After saving you're staring at an empty state that looks like an error message - asking you to click the play button in the toolbar above - that actually will begin the training process", clicks: 1 },
    { step: 'You see a compare models popup', clicks: 0 },
    { step: 'You click on it to close it to see your model details', clicks: 1 },
    { step: 'Right click on the data flow problem type pill to get cascading menus drilling down 3 levels to actually get to configure hyperparameters', clicks: 1 },
    { step: 'The model trains again', clicks: 0 },
    { step: 'Then final results come', clicks: 0 },
    { step: 'Save model icon is visible on each model tab to save it', clicks: 1 },
  ]

  const newPath = [
    { step: 'Right click on dataset > Predict Data', clicks: 2 },
    { step: 'User is redirected to Predict Data Landing page in the reporting server in a new browser tab', clicks: 0 },
    { step: 'User clicks CTA: Train new Model', clicks: 1 },
    { step: 'User goes through step 1, 2, 3, 4 - covering problem selection, target and predictor selection, optional configuring hyperparameters, and then lands on a model details page, where first tab is compare model where he actually lands', clicks: 4, range: '4-6' },
    { step: 'He can click on other tabs to navigate between the different model details of different model types', clicks: 1 },
    { step: 'Save model option is available on each model tab to save it', clicks: 1 },
  ]

  const entryPoints = [
    { method: 'Right-click on dataset', description: 'Access Predict Data directly from data source' },
    { method: 'Right-click on folder', description: 'Access Predict Data from folder context menu' },
    { method: '+Data button menu', description: 'Predict Data as first-class feature in Hub' },
  ]

  return (
    <div className={`${t.bg} rounded-lg border ${t.border} p-8 md:p-12`}>
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className={`${t.text} text-2xl md:text-3xl font-serif`}>Entry Point Transformation</h3>
          <p className={`${t.textMuted} text-base md:text-lg max-w-3xl mx-auto`}>
            Right-click entry points were driven by the Techy Analyst persona who thinks in terms of &quot;I&apos;m in the data, now let me run ML on it.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`${t.cardBg} rounded-lg border-2 p-6`} style={{ borderColor: subtleBorder }}>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className={`${t.textMuted} text-xs font-mono uppercase tracking-wider`}>Old: 12+ Clicks</span>
                <div className="h-px flex-1" style={{ backgroundColor: subtleDivider }}></div>
              </div>
              <div className="space-y-2">
                {oldPath.map((item, i) => (
                  <div key={i} className={`${t.bg} rounded-lg p-3 border ${t.border}`}>
                    <div className="flex items-start justify-between gap-2">
                      <p className={`${t.text} text-xs leading-relaxed flex-1`}>{item.step}</p>
                      {item.clicks > 0 && <span className={`${t.textMuted} text-xs font-mono flex-shrink-0`}>{item.clicks} click{item.clicks > 1 ? 's' : ''}</span>}
                    </div>
                  </div>
                ))}
              </div>
              <div className={`${t.bg} rounded-lg p-3 border ${t.border} mt-4`}>
                <p className={`${t.textMuted} text-xs text-center`}>
                  <span className="font-semibold">Total:</span> ~12+ clicks + multiple mental hops + 3-level cascading menus for hyperparameters
                </p>
              </div>
            </div>
          </div>

          <div className={`${t.cardBg} rounded-lg border-2 p-6`} style={{ borderColor: `${t.accentVar}60` }}>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-mono uppercase tracking-wider font-semibold ${t.textAccent}`}>New: 7-9 Clicks</span>
                <div className="h-px flex-1" style={{ backgroundColor: `${t.accentVar}30` }}></div>
              </div>
              <div className="space-y-2">
                {newPath.map((item, i) => (
                  <div key={i} className={`${t.bg} rounded-lg border-2 p-3`} style={{ borderColor: `${t.accentVar}60` }}>
                    <div className="flex items-start justify-between gap-2">
                      <p className={`${t.text} text-xs leading-relaxed flex-1`}>{item.step}</p>
                      {item.clicks > 0 && (
                        <span className={`text-xs font-mono font-semibold flex-shrink-0 ${t.textAccent}`}>
                          {(item as { range?: string }).range || item.clicks} click{(item as { range?: string }).range ? 's' : item.clicks > 1 ? 's' : ''}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className={`${t.bg} rounded-lg p-3 border-2 mt-4`} style={{ borderColor: `${t.accentVar}60` }}>
                <p className={`text-xs text-center font-semibold ${t.textAccent}`}>
                  <span>Total:</span> 7-9 clicks from entry to training (more if configuring hyperparameters) → smooth, linear progression with guided 4-step flow
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className={`${t.text} text-lg font-semibold mb-4 text-center`}>Multiple Entry Points</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {entryPoints.map((p, i) => (
              <div key={i} className={`${t.cardBg} rounded-lg border-2 p-5 transition-all duration-300 hover:scale-105 hover:shadow-lg`} style={{ borderColor: `${t.accentVar}40` }}>
                <h5 className={`${t.text} text-sm font-semibold mb-2`}>{p.method}</h5>
                <p className={`${t.textMuted} text-xs leading-relaxed`}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`${t.cardBg} rounded-lg p-6 border-l-4 mt-8`} style={{ borderLeftColor: t.accentVar }}>
          <p className={`${t.text} text-sm leading-relaxed text-center`}>
            <span className={`font-semibold ${t.textAccent}`}>100% discoverability:</span> All 5 SMEs found Predict Data from right-click without being told — validating the entry point strategy driven by the Techy Analyst persona.
          </p>
        </div>
      </div>
    </div>
  )
}
