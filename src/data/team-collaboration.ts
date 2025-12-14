import { TeamCollaborationData } from '@/components/case-study/TeamCollaboration'

export const reportcasterTeamCollaboration: TeamCollaborationData = {
  sectionTag: 'LEADERSHIP',
  title: 'Onboarded 2 Designers. Stayed the Knowledge Hub.',
  subtitle: 'No PM for the first phase. I filled the gaps.',
  columns: [
    {
      title: 'Alignment',
      items: [
        'Workflow diagrams as shared language',
        'Phased modernization to reduce risk',
        'Early IA to design leadership',
      ],
    },
    {
      title: 'Unblocking',
      items: [
        'Translated legacy into UX decisions',
        'Managed trade-offs with engineering',
        'Lo-fi prototypes for validation',
      ],
    },
    {
      title: 'Handoff',
      items: [
        'Onboarded 2 designers mid-project',
        'Documentation, flows, and rationale',
        'Remained knowledge hub after transition',
      ],
    },
  ],
  highlight: {
    label: 'ENGINEERING_FEEDBACK',
    text: '"She impressed everyone with how quickly she grasped all aspects of a highly intricate system." — Yingchun Chen, Principal System Software Engineer',
  },
}

export const mlFunctionsTeamCollaboration: TeamCollaborationData = {
  sectionTag: 'LEADERSHIP',
  title: 'Navigated PM Change. Earned DS Trust.',
  subtitle: 'Weekly syncs with Principal Data Scientist. 10+ iterations on the confusion matrix alone.',
  columns: [
    {
      title: 'DS Partnership',
      items: [
        '1:1s with Principal Data Scientist',
        'ML concepts → UX decisions',
        'Weekly UX + ML syncs',
      ],
    },
    {
      title: 'PM Transition',
      items: [
        'PM changed mid-project',
        'Onboarded new PM to engineers',
        'Early flows as shared language',
      ],
    },
    {
      title: 'Trust Earned',
      items: [
        'Principal DS became advocate',
        'Owned ML + RC simultaneously',
        'Leadership greenlit early',
      ],
    },
  ],
  highlight: {
    label: 'DS_FEEDBACK',
    text: '"Anuja turned one of our most complex ML flows into an experience users can finally understand." — Principal Data Scientist',
  },
}

export const iqPluginTeamCollaboration: TeamCollaborationData = {
  sectionTag: 'LEADERSHIP',
  title: 'Owned All Three DSML Workflows.',
  subtitle: 'Meetings didn\'t exist—I created them. Role shifted from "designer on IQ" to DSML experience owner.',
  columns: [
    {
      title: 'Orchestration',
      items: [
        'Created the collaboration structure',
        'Looped in Hub PM who wasn\'t connected',
        'Weekly syncs with Principal DS',
      ],
    },
    {
      title: 'Visibility',
      items: [
        'Workflow diagrams for complexity',
        'Videos showing broken flows',
        'Trade-offs made explicit',
      ],
    },
    {
      title: 'Role Shift',
      items: [
        'Designer on IQ → DSML owner',
        'NLQ + Insights + Hub unification',
        'Influence matched PM on UX',
      ],
    },
  ],
  highlight: {
    label: 'PM_FEEDBACK',
    text: '"Her prototype walkthroughs became the foundation for key product decisions." — Karishma Khadge, Senior Product Manager',
  },
}

// Export all team collaboration data by slug
export const teamCollaborationData: Record<string, TeamCollaborationData> = {
  'reportcaster': reportcasterTeamCollaboration,
  'ml-functions': mlFunctionsTeamCollaboration,
  'iq-plugin': iqPluginTeamCollaboration,
}

