'use client'

import ProjectTimeline from './ProjectTimeline'

interface IQPluginTimelineProps {
  isLightBackground?: boolean
}

export default function IQPluginTimeline({ isLightBackground = false }: IQPluginTimelineProps) {
  const events = [
    {
      id: 'context',
      label: 'C1',
      title: 'Coming into IQ',
      description: 'Came into IQ after leading ML Functions redesign and redesigning DSML Explainability.',
      details: 'IQ sat at intersection of DSML team, Product leadership, Design leadership, and Hub team. This cross-functional positioning required strategic thinking and careful navigation of multiple stakeholder perspectives.',
    },
    {
      id: 'strategy',
      label: 'S1',
      title: 'Framing IQ as the DSML Home',
      description: 'Framed IQ as "the DSML home for business users — not just a place where features live, but where they start."',
      details: 'Led to strategic calls: Anchor in Hub, Design for business users first, Split datasets per feature, Treat tutorials as first-class. This framing shifted the entire product strategy from feature-centric to user-centric.',
    },
    {
      id: 'unified',
      label: 'T1',
      title: 'Tile 1: Defining IQ as Unified DSML Hub',
      description: 'Designed IQ as plugin anchored in Hub. Fought for clean left navigation inside IQ with clear entry points for Discover, NLQ, Insights, and Predict Data.',
      details: 'Worked with engineers to implement despite initial pushback. This required technical feasibility discussions, compromise on implementation details, and persistence to maintain design integrity.',
    },
    {
      id: 'discover',
      label: 'T2',
      title: 'Tile 2: Discover — Proper On-Ramp for Business Users',
      description: 'Took rough PM idea for "IQ landing page" and fully shaped it.',
      details: 'Structured Discover around three pillars: Teasers for each DSML feature, Tutorials & sample data, Learn more areas. This transformed a vague concept into a comprehensive onboarding experience that reduced learning curve for new users.',
    },
    {
      id: 'nlq-insights',
      label: 'T3',
      title: 'Tile 3: Reworking NLQ and Insights',
      description: 'Took NLQ from bare input to LLM-aware experience with starter questions, better empty states, iterative refinement.',
      details: 'Cleaned up Insights UI issues, introduced deliberate controls, aligned toolbars across NLQ and Insights. This created consistency across features while maintaining each feature\'s unique value proposition.',
    },
    {
      id: 'predict',
      label: 'T4',
      title: 'Tile 4: Connecting Predict Data into IQ',
      description: 'Brought ML Functions/Predict Data conceptually into IQ while respecting Reporting Server shell.',
      details: 'Worked with principal data scientist to add data preview, clarified model tiles, reduced context switching. This integration required balancing technical constraints with user experience goals, ensuring Predict Data felt native to IQ while maintaining its technical capabilities.',
    },
    {
      id: 'leadership',
      label: 'L1',
      title: 'Orchestrating Collaboration & Team Alignment',
      description: '1:1s with principal data scientist, small-group working sessions, regular weekly team meetings.',
      details: 'Created workflow diagrams, recorded videos, wrote documentation. Navigated team dynamics with engineers, architects, PMs. This leadership work ensured everyone understood not just what to build, but why, creating shared ownership and alignment.',
    },
    {
      id: 'impact',
      label: 'I1',
      title: 'Impact & Reception',
      description: 'IQ is one click from Hub home. All DSML features reachable from single place.',
      details: 'SMEs felt IQ finally reflected workflows their customers wanted. Product leadership aligned behind direction. Director of Design backed bolder UX decisions. This validation confirmed that the strategic framing and user-centric approach resonated with both users and stakeholders.',
    },
  ]

  return <ProjectTimeline events={events} isLightBackground={isLightBackground} />
}

