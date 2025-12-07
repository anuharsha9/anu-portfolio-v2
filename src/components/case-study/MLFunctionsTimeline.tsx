'use client'

import ProjectTimeline from './ProjectTimeline'

interface MLFunctionsTimelineProps {
  isLightBackground?: boolean
}

export default function MLFunctionsTimeline({ isLightBackground = true }: MLFunctionsTimelineProps) {
  const events = [
    {
      id: 'mapping',
      label: 'S1',
      title: 'Mapping Current vs Ideal ML Lifecycle',
      description: 'Documented Train and Run as they existed, identified dead-ends, errors, broken flows, and destructive patterns.',
      details: 'Defined user-first lifecycle: Select Data → Choose Action → Train → Compare → Run → Save → Designer. This mapping became the foundation for the entire redesign, ensuring every decision aligned with user mental models rather than technical constraints.',
      type: 'standard' as const,
      evidenceImage: {
        src: '/images/case-study/ml-functions/entire ML workflow flowchart.png',
        alt: 'Complete ML workflow flowchart',
        isBlurred: true,
      },
    },
    {
      id: 'landing',
      label: 'S2',
      title: 'Designing the Smart Landing Page',
      description: 'Introduced a home for ML that lived outside the destructive Data Flow panel, with Train/Run tabs, dataset context, and model discovery.',
      details: 'Added dataset switching without breaking workflows. This landing page became the central hub for all ML operations, eliminating the need to navigate through multiple disconnected interfaces.',
      type: 'milestone' as const,
      evidenceImage: {
        src: '/images/case-study/ml-functions/1. Predict Data - Train Models - Empty State.png',
        alt: 'Train Models landing page with tiles',
        isBlurred: true,
      },
    },
    {
      id: 'stepper',
      label: 'S3',
      title: 'Building the Guided Stepper & Model Comparison',
      description: 'Built clear, predictable workflow with explanatory text and clean navigation.',
      details: 'Redesigned model comparison from pop-up with tabs to stable left-navigation model explorer. The guided stepper broke down complex ML training into digestible steps, reducing cognitive load and decision paralysis.',
      type: 'standard' as const,
      evidenceImage: {
        src: '/images/case-study/ml-functions/4. Train Model Workflow - Step 1 - Select Problem Type.png',
        alt: 'Guided stepper Step 1 - Select Problem Type',
        isBlurred: true,
      },
    },
    {
      id: 'explainability',
      label: 'S4',
      title: 'Integrating Explainability & QA Delivery',
      description: 'Integrated one-click access to interpretable ML insights and personally audited every screen before ship.',
      details: 'Personally audited every screen after handoff, flagged issues, opened QA tickets, and ensured nothing shipped until it met the bar. This rigorous quality control ensured the final product maintained design intent.',
      type: 'milestone' as const,
      evidenceImage: {
        src: '/images/case-study/ml-functions/6. Run Model -  Explanability Popup.png',
        alt: 'Explainability popup - interpretable ML insights',
        isBlurred: true,
      },
    },
  ]

  return <ProjectTimeline events={events} isLightBackground={isLightBackground} />
}

