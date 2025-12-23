'use client'

import UnifiedTimeline from './UnifiedTimeline'

interface MLFunctionsTimelineProps {
  isLightBackground?: boolean
}

export default function MLFunctionsTimeline({ isLightBackground = true }: MLFunctionsTimelineProps) {
  const phases = [
    {
      id: 'phase-01',
      phase: '01',
      title: 'MAPPING_ML_LIFECYCLE',
      body: 'Documented Train and Run as they existed, identified dead-ends, errors, broken flows, and destructive patterns. Defined user-first lifecycle: Select Data → Choose Action → Train → Compare → Run → Save → Designer.',
      status: 'COMPLETED' as const,
      image: {
        src: '/images/case-study/ml-functions/entire ML workflow flowchart.png',
        alt: 'Complete ML workflow flowchart',
        caption: 'System mapping: Documenting the entire ML workflow structure',
        isBlurred: true,
      },
    },
    {
      id: 'phase-02',
      phase: '02',
      title: 'SMART_LANDING_PAGE',
      body: 'Introduced a home for ML that lived outside the destructive Data Flow panel, with Train/Run tabs, dataset context, and model discovery. Added dataset switching without breaking workflows.',
      status: 'COMPLETED' as const,
      isCriticalPivot: true,
      image: {
        src: '/images/case-study/ml-functions/1. Predict Data - Train Models - Empty State.png',
        alt: 'Train Models landing page with tiles',
        caption: 'The Smart Landing Page: Central hub for all ML operations',
        isBlurred: true,
      },
    },
    {
      id: 'phase-03',
      phase: '03',
      title: 'GUIDED_STEPPER_SYSTEM',
      body: 'Built clear, predictable workflow with explanatory text and clean navigation. Redesigned model comparison from pop-up with tabs to stable left-navigation model explorer.',
      status: 'COMPLETED' as const,
      image: {
        src: '/images/case-study/ml-functions/4. Train Model Workflow - Step 1 - Select Problem Type.png',
        alt: 'Guided stepper Step 1 - Select Problem Type',
        caption: 'Step-based wizard: Breaking down complex ML into digestible steps',
        isBlurred: true,
      },
    },
    {
      id: 'phase-04',
      phase: '04',
      title: 'EXPLAINABILITY_&_QA',
      body: 'Integrated one-click access to interpretable ML insights. Personally audited every screen after handoff, flagged issues, opened QA tickets, and ensured nothing shipped until it met the bar.',
      status: 'COMPLETED' as const,
      image: {
        src: '/images/case-study/ml-functions/6. Run Model - Explainability Popup.png',
        alt: 'Explainability popup - interpretable ML insights',
        caption: 'Explainability: Making ML decisions transparent and trustworthy',
        isBlurred: true,
      },
    },
  ]

  return (
    <UnifiedTimeline
      phases={phases}
      header={{
        tag: '// PROJECT_TIMELINE',
        title: 'Project Evolution',
        subtitle: 'From a "rejected" V1 to a patent-pending ML system, spanning 12 months of pivot and persistence.'
      }}
      footer={{
        tag: 'CURRENT_STATE:',
        body: 'ML Functions redesign shipping in WebFOCUS 9.3.x (2026). The "Glass Box" approach is the new standard for all ML interfaces in the platform.'
      }}
      accentColor="teal"
    />
  )
}
