'use client'

import UnifiedTimeline from './UnifiedTimeline'

interface IQPluginTimelineProps {
  isLightBackground?: boolean
}

export default function IQPluginTimeline({ isLightBackground = false }: IQPluginTimelineProps) {
  const phases = [
    {
      id: 'phase-01',
      phase: '01',
      title: 'STRATEGIC_DEFINITION',
      body: 'Transitioned from ML Functions to lead the broader DSML strategy. Framed IQ not as a set of features, but as the unified "Operating System" for analytics.',
      status: 'COMPLETED' as const,
    },
    {
      id: 'phase-02',
      phase: '02',
      title: 'SYSTEM_ARCHITECTURE',
      body: 'Designed the "Hub-First" model, unifying Discover, NLQ, and Predict into a single extensible plugin architecture. Replaced 3 fragmented entry points with 1 cohesive "Front Door".',
      status: 'COMPLETED' as const,
    },
    {
      id: 'phase-03',
      phase: '03',
      title: 'ORGANIZATIONAL_ALIGNMENT',
      body: 'Aligned 3 distinct Product Managers and the Principal Data Scientist around a shared UI pattern, moving the org from "Feature Teams" to "Platform Thinking".',
      status: 'COMPLETED' as const,
    },
    {
      id: 'phase-04',
      phase: '04',
      title: 'ENGINEERING_HANDOFF',
      body: 'Delivered high-fidelity specs and the unified design system. The IQ Plugin is now the official "North Star" for the WebFOCUS roadmap, currently in active engineering for the 2026 cycle.',
      status: 'IN_PROGRESS' as const,
      isCriticalPivot: true,
    },
  ]

  return (
    <UnifiedTimeline
      phases={phases}
      header={{
        tag: '// STRATEGIC_RELEASE_LOG',
        title: 'Project Evolution',
        subtitle: 'From strategic definition to engineering handoff — four phases that transformed IQ from concept to platform.'
      }}
      footer={{
        tag: 'CURRENT_STATE:',
        body: 'IQ Plugin is the official "North Star" for the WebFOCUS 2026 roadmap. Design specs complete; engineering in active development.'
      }}
      accentColor="violet"
    />
  )
}
