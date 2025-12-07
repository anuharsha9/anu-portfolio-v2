'use client'

/**
 * SimplifySectionWrapper - "Golden Master" Component
 * 
 * This component demonstrates the Section Architecture pattern for ML Functions.
 * It wraps the existing content components (MLWorkflowMapping, ThreeCriticalPivots)
 * within the standardized SectionShell container.
 * 
 * IMPORTANT: The inner content is preserved exactly as-is.
 * Only the outer structure uses the new architecture components.
 */

import { SectionShell, SystemBrief, SystemOutcome, SubsectionHeader } from './SectionArchitecture'
import MLWorkflowMapping from './MLWorkflowMapping'
import ThreeCriticalPivots from './ThreeCriticalPivots'
import LockedContent from './LockedContent'

interface SimplifySectionWrapperProps {
  isLightBackground?: boolean
  caseStudySlug?: string
  password?: string
}

export default function SimplifySectionWrapper({ 
  isLightBackground = true,
  caseStudySlug = 'ml-functions',
  password = 'anu-access'
}: SimplifySectionWrapperProps) {
  return (
    <SectionShell
      id="SIMPLIFY"
      phase="03"
      title="Simplify the Chaos"
      subhead="From Black Box to Guided Flow"
    >
      {/* TL;DR Brief */}
      <SystemBrief
        text="The mapping revealed the problems, but solving them required multiple iterations. Three critical pivots shaped the final design — each one a hard-won decision that simplified both UX and implementation."
        tags={['WORKFLOW_MAPPING', 'USER_JOURNEY', 'ITERATIVE_DESIGN']}
      />

      {/* Diagnostic Map Section */}
      <div className="mb-16">
        <SubsectionHeader 
          label="DIAGNOSTIC" 
          title="Mapping the Workflow" 
          count={4} 
        />
        <MLWorkflowMapping isLightBackground={isLightBackground} />
      </div>

      {/* Design Pivots Section */}
      <div className="mb-8">
        <SubsectionHeader 
          label="ARCHITECTURE" 
          title="Critical Design Pivots" 
          count={3} 
        />
        <LockedContent
          password={password}
          caseStudySlug={caseStudySlug}
          unlockMessage="Password required to view design pivot details"
          isLightBackground={isLightBackground}
        >
          <ThreeCriticalPivots isLightBackground={isLightBackground} />
        </LockedContent>
      </div>

      {/* System Outcome Footer */}
      <SystemOutcome
        label="BREAKTHROUGH"
        text="Reduced 4 fragmented screens into a single, linear wizard. The breakthrough came from our domain expert's answer to 'What do you absolutely need?' — problem type, target, predictors, hyperparameters. That became the UX spine."
      />
    </SectionShell>
  )
}

