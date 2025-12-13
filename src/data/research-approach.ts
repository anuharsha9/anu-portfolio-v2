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
      category: 'System Investigation',
      description: 'Black-box reverse engineering of the undocumented legacy system.',
      items: [
        'Sandbox exploration',
        'Hundreds of screenshots',
        'Workflow mapping',
        'Dialog and state documentation',
      ],
      icon: 'search',
    },
    {
      category: 'Proxy User Research',
      description: 'Customer Support team and reps as primary sources for pain points.',
      items: [
        'Support ticket analysis',
        'Customer rep 1:1s',
        'Real-world usage patterns',
        'Workaround behaviors',
      ],
      icon: 'users',
    },
    {
      category: 'Technical Understanding',
      description: 'Tribal knowledge from the original engineer and SMEs.',
      items: [
        'Legacy engineer conversations',
        'QA & SME interviews',
        'System behavior rationale',
        'Edge case behaviors',
      ],
      icon: 'cpu',
    },
    {
      category: 'Competitive Analysis',
      description: 'Studying how other enterprise schedulers handled similar complexity.',
      items: [
        'Power BI, Tableau, Qlik NPrinting',
        'Pattern identification',
        'Opportunity mapping',
      ],
      icon: 'chart',
    },
    {
      category: 'Workflow Documentation',
      description: 'Creating the first-ever complete RC system map.',
      items: [
        'Mapped 5+ core flows end-to-end',
        'Documented legacy screen chains',
        'Traced broken flows to UX decisions',
      ],
      icon: 'target',
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
      category: 'Domain Self-Education',
      description: 'Systematic approach to learning ML concepts from scratch.',
      items: [
        'MIT AI/ML Product Design certification',
        'Weekly embedding with Principal DS',
        'AI tools for concept translation',
        'SME deep-dive sessions',
      ],
      icon: 'graduation',
    },
    {
      category: 'System Documentation',
      description: 'Mapping the fragmented Train/Run experience.',
      items: [
        'Documented Train & Run flows',
        'Identified all dead-ends and errors',
        'Mapped destructive patterns',
        'Defined user-first lifecycle',
      ],
      icon: 'search',
    },
    {
      category: 'Cross-functional Alignment',
      description: 'Bridging data scientists, engineering, and product.',
      items: [
        'Onboarded new PM myself',
        'Set up UX + ML weekly syncs',
        'Translated ML into UX decisions',
        'Unified competing preferences',
      ],
      icon: 'users',
    },
    {
      category: 'Competitive Analysis',
      description: 'Reviewing how existing ML tools handled workflows.',
      items: [
        'Entry points study',
        'Guidance patterns',
        'Model comparison approaches',
        'Explainability standards',
      ],
      icon: 'chart',
    },
    {
      category: 'Trust Building',
      description: 'Earning credibility through the Explainability redesign.',
      items: [
        'Delivered Explainability first',
        'Learned ML complexity through collaboration',
        'Built strong working relationship with DS team',
      ],
      icon: 'shield',
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
      category: 'SME Proxy Research',
      description: 'SMEs who represented real customers became the voice of users.',
      items: [
        'SME walkthrough sessions',
        'Customer rep insights',
        'Real-world use case validation',
        'Edge case identification',
      ],
      icon: 'users',
    },
    {
      category: 'Business User Personas',
      description: 'Created personas specifically for business users, not just BI experts.',
      items: [
        '2 business personas created',
        '2 technical personas inherited',
        'Journey mapping for all 4',
        'Entry point validation',
      ],
      icon: 'target',
    },
    {
      category: 'Competitive Analysis',
      description: 'Benchmarking against industry leaders for DSML discoverability.',
      items: [
        'Power BI Q&A analysis',
        'Tableau Ask Data review',
        'Qlik Insight Advisor study',
        'Opportunity gap mapping',
      ],
      icon: 'chart',
    },
    {
      category: 'Internal Validation',
      description: 'Non-technical stakeholders to sanity-check business-user flows.',
      items: [
        'Business user flow reviews',
        'Jargon elimination sessions',
        'Entry point testing',
        'Tutorial effectiveness checks',
      ],
      icon: 'lightbulb',
    },
    {
      category: 'Technical Constraints',
      description: 'Understanding what was technically possible within the Hub.',
      items: [
        'Hub architecture review',
        'Plugin container limits',
        'Dataset selection patterns',
        'Tutorial system constraints',
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

