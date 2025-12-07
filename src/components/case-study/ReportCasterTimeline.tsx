'use client'

import ProjectTimeline from './ProjectTimeline'

interface ReportCasterTimelineProps {
  isLightBackground?: boolean
}

export default function ReportCasterTimeline({ isLightBackground = false }: ReportCasterTimelineProps) {
  const events = [
    {
      id: 'week-1',
      label: 'W1',
      title: 'Taking Ownership',
      description: 'One week into joining, volunteered for the legacy project no one else wanted. Given ownership immediately.',
      type: 'standard' as const,
    },
    {
      id: 'research',
      label: 'M1-3',
      title: 'Learning the Undocumented System',
      description: 'Took hundreds of screenshots, mapped workflows, interviewed support team, customer reps, and the one engineer who built it in the 80s. Created comprehensive mind maps.',
      type: 'standard' as const,
      evidenceImage: {
        src: '/images/case-study/ReportCaster/System Map - Detail (crop).png',
        alt: 'Mind Map of ReportCaster System',
        isBlurred: true,
      },
    },
    {
      id: 'discovery',
      label: 'M3',
      title: 'The Realization',
      description: 'Discovered ReportCaster wasn\'t a feature—it was a product with 5 independent subsystems: Scheduling, Distribution Lists, Access Lists, Explorer, and Admin.',
      type: 'milestone' as const,
    },
    {
      id: 'v1',
      label: 'V1',
      title: 'Version 1: Independent Product',
      description: 'Designed as standalone product (like Designer, Data Flow). Unified all 5 subsystems in one place. This aligned with industry standards—complex scheduling tools like Control-M and Tableau Prep operate as independent apps.',
      details: 'Rejected: "Leadership wants workflows centralized in the hub."',
      type: 'pivot' as const,
      evidenceImage: {
        src: '/images/case-study/ReportCaster/version-iterations/v1-concept.png',
        alt: 'Version 1 Rejected Concept',
      },
    },
    {
      id: 'v2',
      label: 'V2',
      title: 'Version 2: Plugin Integration',
      description: 'Brought RC into hub as a plugin with fully integrated navigation. This preserved feature parity while embedding in the platform ecosystem.',
      details: 'Rejected: "Too much engineering effort for this release cycle."',
      type: 'pivot' as const,
      evidenceImage: {
        src: '/images/case-study/ReportCaster/version-iterations/v2-concept.png',
        alt: 'Version 2 Rejected Concept',
      },
    },
    {
      id: 'v3',
      label: 'V3',
      title: 'Version 3: The Breakthrough',
      description: 'Designed WITH platform patterns: Modal creation from + menu, Explorer in Home view, Admin in Management Center. Aligned with architecture, constraints, and scalability.',
      type: 'milestone' as const,
    },
    {
      id: 'onboarding',
      label: 'M6-9',
      title: 'Team Onboarding & Alignment',
      description: 'Onboarded lead architect, lead engineer, full engineering squad, PM, QA, Documentation, SMEs, Support. Ran dozens of demos, translated tribal knowledge into UX rationale.',
      type: 'standard' as const,
    },
    {
      id: 'shipping',
      label: 'M12',
      title: 'Shipping Impact',
      description: '4-6 clicks → 1 click. Multi-tab workflows → single contextual workflow. Support tickets dropped. Customer praised redesign in Virtual User Group session.',
      type: 'milestone' as const,
    },
  ]

  return <ProjectTimeline events={events} isLightBackground={isLightBackground} />
}
