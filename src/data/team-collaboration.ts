import { TeamCollaborationData } from '@/components/case-study/TeamCollaboration'

export const reportcasterTeamCollaboration: TeamCollaborationData = {
  sectionTag: 'ALIGNMENT_&_LEADERSHIP',
  title: 'How I Aligned and Led the Team',
  subtitle: 'Building shared understanding across engineering, PM, QA, and design—without a PM for the first phase.',
  columns: [
    {
      title: 'Stakeholder Alignment',
      items: [
        'Built workflow diagrams everyone aligned around',
        'Created phased modernization strategy to reduce risk',
        'Walked teams through narrative walkthroughs',
        'Presented early IA to design leadership',
      ],
    },
    {
      title: 'Unblocking Teams',
      items: [
        'Translated undocumented behaviors into UX decisions',
        'Managed trade-offs when legacy limits prevented ideal states',
        'Settled feasibility disagreements',
        'Created low-fi prototypes for engineering validation',
      ],
    },
    {
      title: 'Knowledge Transfer',
      items: [
        'Mentored new designer on the project',
        'Handed off clear documentation, flows, and rationale',
        'Stayed involved to review builds and adjust details',
        'Remained knowledge hub for all RC decisions',
      ],
    },
    {
      title: 'Cross-functional Sessions',
      items: [
        'Architect + Engineering alignment',
        'PM + Design + QA reviews',
        'Support + SME feedback loops',
        'Design leadership presentations',
      ],
    },
  ],
  highlight: {
    label: 'ENGINEERING_FEEDBACK',
    text: '"From the start, she impressed everyone with how quickly she grasped all aspects of a highly intricate system and translated that understanding into a clear, modern, and user-centered design." — Yingchun Chen, Principal System Software Engineer',
  },
}

export const mlFunctionsTeamCollaboration: TeamCollaborationData = {
  sectionTag: 'CROSS_FUNCTIONAL_BRIDGE',
  title: 'How I Led and Aligned the Team',
  subtitle: 'Navigating a PM change, onboarding new stakeholders, and earning trust through delivery.',
  columns: [
    {
      title: 'Data Science Partnership',
      items: [
        '1:1s with Principal Data Scientist',
        'Translated ML concepts into UX decisions',
        'Used Explainability redesign as proof of capability',
        'Weekly UX + ML syncs established',
      ],
    },
    {
      title: 'PM Onboarding',
      items: [
        'PM changed midway through project',
        'Introduced new PM to engineers',
        'Explained Reporting Server architecture',
        'Used early flows as shared language',
      ],
    },
    {
      title: 'Cross-functional Sessions',
      items: [
        'Engineering + DS + PM + Design unified',
        'Shared Figma for async alignment',
        'Screen-reviewed design reviews',
        'QA collaboration for edge cases',
      ],
    },
    {
      title: 'Trust Earned',
      items: [
        'Principal DS became strongest advocate',
        'Directors validated judgment calls',
        'Became trusted for ML + RC simultaneously',
        'Leadership greenlit approach early',
      ],
    },
  ],
  highlight: {
    label: 'DS_FEEDBACK',
    text: '"Anuja turned one of our most complex, opaque ML flows into an experience our users can finally understand and trust." — Principal Data Scientist',
  },
}

export const iqPluginTeamCollaboration: TeamCollaborationData = {
  sectionTag: 'ORCHESTRATING_ALIGNMENT',
  title: 'How I Led and Aligned the Team',
  subtitle: 'Meetings didn\'t exist in the right shape—I created them. My role shifted from "designer on IQ" to "primary owner of the DSML experience."',
  columns: [
    {
      title: 'Orchestrating Collaboration',
      items: [
        '1:1s with Principal Data Scientist',
        'Small-group working sessions (PM + engineers + DS)',
        'Regular weekly team meetings',
        'Initiated contact with Hub PM who wasn\'t looped in',
      ],
    },
    {
      title: 'Making Complexity Visible',
      items: [
        'Created workflow diagrams for invisible complexity',
        'Recorded videos showing broken flows',
        'Wrote documentation as shared reference',
        'Made trade-offs explicit and reviewable',
      ],
    },
    {
      title: 'Navigating Team Dynamics',
      items: [
        'Engineers with 20-30 years in product',
        'Lead architect who needed active steering',
        'Quiet but critical Director of Engineering',
        'PM with vision but not detail depth',
      ],
    },
    {
      title: 'Shifting Role',
      items: [
        'Started as "designer on IQ"',
        'Became primary DSML experience owner',
        'Influence matched or exceeded PM on UX',
        'Owned NLQ, Insights, AND the Hub unification',
      ],
    },
  ],
  highlight: {
    label: 'PM_FEEDBACK',
    text: '"Her design thinking workshops and prototype walkthroughs often became the foundation for key product decisions, driving clarity and alignment across cross-functional teams." — Karishma Khadge, Senior Product Manager',
  },
}

// Export all team collaboration data by slug
export const teamCollaborationData: Record<string, TeamCollaborationData> = {
  'reportcaster': reportcasterTeamCollaboration,
  'ml-functions': mlFunctionsTeamCollaboration,
  'iq-plugin': iqPluginTeamCollaboration,
}

