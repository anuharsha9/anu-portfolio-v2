'use client'

import { motion } from 'framer-motion'
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
    },
    {
      id: 'research',
      label: 'M1-3',
      title: 'Learning the Undocumented System',
      description: 'Took hundreds of screenshots, mapped workflows, interviewed support team, customer reps, and the one engineer who built it in the 80s. Created comprehensive mind maps.',
    },
    {
      id: 'discovery',
      label: 'M3',
      title: 'The Realization',
      description: 'Discovered ReportCaster wasn\'t a feature—it was a product with 5 independent subsystems: Scheduling, Distribution Lists, Access Lists, Explorer, and Admin.',
    },
    {
      id: 'v1',
      label: 'V1',
      title: 'Version 1: Independent Product',
      description: 'Designed as standalone product (like Designer, Data Flow). Unified all 5 subsystems in one place. Rejected: "Leadership wants workflows centralized in hub."',
    },
    {
      id: 'v2',
      label: 'V2',
      title: 'Version 2: Plugin Integration',
      description: 'Brought RC into hub as a plugin, fully integrated navigation. Rejected: "Too much engineering effort, too big an addition this year."',
    },
    {
      id: 'v3',
      label: 'V3',
      title: 'Version 3: The Breakthrough',
      description: 'Designed WITH platform patterns: Modal creation from + menu, Explorer in Home view, Admin in Management Center. Aligned with architecture, constraints, and scalability.',
    },
    {
      id: 'onboarding',
      label: 'M6-9',
      title: 'Team Onboarding & Alignment',
      description: 'Onboarded lead architect, lead engineer, full engineering squad, PM, QA, Documentation, SMEs, Support. Ran dozens of demos, translated tribal knowledge into UX rationale.',
    },
    {
      id: 'shipping',
      label: 'M12',
      title: 'Shipping Impact',
      description: '4-6 clicks → 1 click. Multi-tab workflows → single contextual workflow. Support tickets dropped. Customer praised redesign in Virtual User Group session.',
    },
  ]

  return <ProjectTimeline events={events} isLightBackground={isLightBackground} />
}

