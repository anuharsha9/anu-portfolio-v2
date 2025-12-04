'use client'

import ProjectTimeline from './ProjectTimeline'

interface MLFunctionsTimelineProps {
  isLightBackground?: boolean
}

export default function MLFunctionsTimeline({ isLightBackground = false }: MLFunctionsTimelineProps) {
  const events = [
    {
      id: 'mapping',
      label: 'S1',
      title: 'Mapping Current vs Ideal ML Lifecycle',
      description: 'Documented Train and Run as they existed, identified dead-ends, errors, broken flows, and destructive patterns.',
      details: 'Defined user-first lifecycle: Select Data → Choose Action → Train → Compare → Run → Save → Designer. This mapping became the foundation for the entire redesign, ensuring every decision aligned with user mental models rather than technical constraints.',
    },
    {
      id: 'landing',
      label: 'S2',
      title: 'Designing the Smart Landing Page',
      description: 'Introduced a home for ML that lived outside the destructive Data Flow panel, with Train/Run tabs, dataset context, and model discovery.',
      details: 'Added dataset switching without breaking workflows. This landing page became the central hub for all ML operations, eliminating the need to navigate through multiple disconnected interfaces. The design prioritized discoverability and context preservation.',
    },
    {
      id: 'stepper',
      label: 'S3',
      title: 'Building the Guided Stepper & Redesigning Model Comparison',
      description: 'Built clear, predictable workflow with explanatory text and clean navigation.',
      details: 'Redesigned model comparison from pop-up with tabs to stable left-navigation model explorer. The guided stepper broke down complex ML training into digestible steps, reducing cognitive load and decision paralysis. Each step validated inputs before proceeding, preventing dead-end errors.',
    },
    {
      id: 'explainability',
      label: 'S4',
      title: 'Integrating Explainability & Auditing & Delivery',
      description: 'Integrated one-click access to interpretable ML insights.',
      details: 'Personally audited every screen after handoff, flagged issues, opened QA tickets, and ensured nothing shipped until it met the bar. This rigorous quality control process ensured the final product maintained the design intent and user experience standards throughout development.',
    },
  ]

  return <ProjectTimeline events={events} isLightBackground={isLightBackground} />
}

