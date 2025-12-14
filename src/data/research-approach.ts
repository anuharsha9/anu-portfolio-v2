import { ResearchApproachData } from '@/components/case-study/ResearchApproach'

export const reportcasterResearchApproach: ResearchApproachData = {
  sectionTag: 'RESEARCH_STRATEGY',
  title: 'Navigating Enterprise Research Constraints',
  subtitle: 'How I reconstructed an undocumented 50-year-old system when direct user research wasn\'t possible.',
  constraint: {
    type: 'warning',
    label: 'CONSTRAINT: NO_DIRECT_USER_ACCESS',
    body: 'Enterprise security policy blocked direct access to end users. No interviews, no usability tests, no direct feedback loops.',
  },
  strategy: {
    type: 'success',
    label: 'STRATEGY: THE_PROXY_NETWORK',
    body: 'Leveraged Support Agents and Customer Reps as high-fidelity proxies for user pain points. Built ecosystem understanding through indirect channels.',
  },
  methods: [
    {
      category: 'System Discovery',
      description: 'Reverse-engineered a 50-year-old black box. Created the first-ever complete system map.',
      items: [
        'Sandbox exploration + 100s of screenshots',
        'Mapped 5+ core flows end-to-end',
        'Documented every dialog and state',
      ],
      icon: 'search',
    },
    {
      category: 'Proxy Research',
      description: 'Customer Support lead became my primary SME—closer to users than anyone.',
      items: [
        'Support ticket deep-dives',
        'Real usage patterns + workarounds',
        'Pain points users couldn\'t voice directly',
      ],
      icon: 'users',
    },
    {
      category: 'Tribal Knowledge',
      description: 'Extracted decades of undocumented logic from the people who built it.',
      items: [
        'Legacy engineer 1:1s',
        'QA edge case sessions',
        'System behavior rationale',
      ],
      icon: 'cpu',
    },
  ],
}

export const mlFunctionsResearchApproach: ResearchApproachData = {
  sectionTag: 'LEARNING_CURVE',
  title: 'Building ML Fluency to Lead Design',
  subtitle: 'How I learned an entirely new domain while designing, becoming the bridge between data scientists and users.',
  constraint: {
    type: 'warning',
    label: 'CONSTRAINT: DOMAIN_GAP',
    body: 'The DSML domain was completely new to me. I inherited this project with zero ML background—learning curve was steep and timeline was tight.',
  },
  strategy: {
    type: 'success',
    label: 'STRATEGY: RADICAL_IMMERSION',
    body: 'Took MIT Product Design for AI/ML course. Embedded weekly with the Principal Data Scientist. Used AI tools to accelerate learning. Built context before designing.',
  },
  methods: [
    {
      category: 'Domain Immersion',
      description: 'Zero ML background → fluent enough to challenge assumptions.',
      items: [
        'MIT AI/ML Product Design certification',
        'Weekly 1:1s with Principal Data Scientist',
        'AI tools for rapid concept learning',
      ],
      icon: 'graduation',
    },
    {
      category: 'System Mapping',
      description: 'Documented every dead-end, error state, and destructive pattern.',
      items: [
        'Mapped Train & Run flows end-to-end',
        'Identified hidden failure modes',
        'Defined user-first lifecycle',
      ],
      icon: 'search',
    },
    {
      category: 'Cross-functional Bridge',
      description: 'Became the translator between data scientists and users.',
      items: [
        'Set up weekly UX + ML syncs',
        'Onboarded new PM to the team',
        'Unified competing stakeholder needs',
      ],
      icon: 'users',
    },
  ],
}

export const iqPluginResearchApproach: ResearchApproachData = {
  sectionTag: 'RESEARCH_STRATEGY',
  title: 'Designing for an Untapped Audience',
  subtitle: 'There were no complaints to fix—just powerful capabilities nobody could find. Research meant creating the bridge.',
  constraint: {
    type: 'warning',
    label: 'CONSTRAINT: LOW_ADOPTION_DATA',
    body: 'External DSML adoption was low—no meaningful volume of UX complaints to mine. This was less "fix glaring pain" and more "create a bridge to an untapped audience."',
  },
  strategy: {
    type: 'success',
    label: 'STRATEGY: MULTI-SOURCE_VALIDATION',
    body: 'Depended heavily on SMEs representing real customers, internal non-technical stakeholders for business-user flows, and competitive benchmarks.',
  },
  methods: [
    {
      category: 'SME as Users',
      description: 'SMEs who represented real customers became the voice of users.',
      items: [
        'Walkthrough sessions with domain experts',
        'Real-world use case validation',
        'Edge case discovery',
      ],
      icon: 'users',
    },
    {
      category: 'Persona Development',
      description: 'Created personas for business users—not just BI experts.',
      items: [
        '4 personas: 2 business, 2 technical',
        'Journey mapping for each',
        'Entry point validation',
      ],
      icon: 'target',
    },
    {
      category: 'Platform Constraints',
      description: 'Designed within Hub architecture limits—no new infrastructure.',
      items: [
        'Plugin container capabilities',
        'Dataset selection patterns',
        'Tutorial system integration',
      ],
      icon: 'cpu',
    },
  ],
}

// Export all research data by slug for easy lookup
export const researchApproachData: Record<string, ResearchApproachData> = {
  'reportcaster': reportcasterResearchApproach,
  'ml-functions': mlFunctionsResearchApproach,
  'iq-plugin': iqPluginResearchApproach,
}

