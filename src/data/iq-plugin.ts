import { CaseStudyData } from '@/types/caseStudy'

export const iqPluginCaseStudy: CaseStudyData = {
  slug: 'iq-plugin',
  heroTitle: 'Driving Data Science Adoption in Enterprise BI',
  heroSubheading: 'Unifying Data Science & ML Inside WebFOCUS',
  heroSubtitle:
    'From roadmap concept to shipped architecture. Drove the vision — showed final mockups, then tickets came. Owned 3 workflows simultaneously. Handed off to 2 designers.',
  coverImage: {
    src: '/images/case-study/iq-plugin/IQ plugin - visual - 3 in 1 IQ Hub.png',
    alt: 'DSML Hub - Unified Data Science & Machine Learning',
  },
  role: 'Principal Product Designer (Full Ownership)',
  company: 'Cloud Software Group — WebFOCUS',
  timeframe: 'Spring 2024 – Present | Shipping 2027',
  status: {
    label: 'IN_ENGINEERING (TARGET_RELEASE: 2027)',
    variant: 'shipping' as const,
  },
  scope: [
    'Product Vision',
    'Systems Thinking',
    'Cross-functional Leadership',
    'Platform Architecture',
    'Team Enablement',
  ],
  // ----------------------------
  // QUICK IMPACT OVERVIEW (Public)
  // ----------------------------
  quickOverview: {
    title: 'Data Science Adoption — Quick Impact Overview',
    subtitle: 'From scattered features to unified DSML Hub',
    leadershipSummary: 'Owned all three DSML workflows simultaneously. Drove the vision — brought ideas to the table, showed final mockups, THEN tickets came. PM collaborated on opinions, but I defined the architecture. Handed off to 2 designers after establishing base screens and patterns.',
    whatTheSystemWas:
      'WebFOCUS had three DSML features—NLQ, Insights, ML. All shipping. None legacy. Just invisible. NLQ and Insights buried in menus. ML in a separate context. Users didn\'t know they existed.',
    myRole:
      'Owned all three workflows: NLQ, Insights, and the DSML Hub. Made them responsive. Ensured pattern parity. Drove the vision from concept to shipped architecture.',
    scopeOfPractice: [
      {
        tag: 'OWNERSHIP',
        tagColor: 'blue',
        headline: 'Owned All 3 Workflows',
        body: 'NLQ, Insights, AND DSML Hub. **Drove the vision** — showed mockups, then tickets came.',
        icon: 'architect',
      },
      {
        tag: 'THINK_BIG',
        tagColor: 'amber',
        headline: 'Roadmap → Architecture',
        body: 'From **annual roadmap concept → shipped architecture**. Defined the future of DSML.',
        icon: 'archaeologist',
      },
      {
        tag: 'DELIVER_RESULTS',
        tagColor: 'purple',
        headline: '3 → 1 Unified',
        body: '3 entry points unified. **Full pattern parity**. All features responsive.',
        icon: 'strategist',
      },
      {
        tag: 'HIRE_DEVELOP',
        tagColor: 'emerald',
        headline: 'Enabled 2 Designers',
        body: 'Defined architecture and base screens. **Handed off to 1 junior + 1 senior**.',
        icon: 'multiplier',
      },
    ],
    impactMetrics: [
      { label: 'Workflows owned', value: '3 simultaneously' },
      { label: 'Entry points unified', value: '3 → 1' },
      { label: 'NLQ adoption', value: '+25%' },
      { label: 'Designers enabled', value: '2 (1 junior, 1 senior)' },
    ],
    star: {
      situation: 'Three DSML features (NLQ, Insights, ML) existed but were invisible. Different entry points, different patterns, low adoption. Conceptualized in annual roadmap.',
      task: 'Unify them. Make them discoverable. Define the product vision from roadmap concept to shipped architecture.',
      action: 'Owned all 3 workflows. Drove the vision — brought ideas to table, showed final mockups, then tickets came. Defined architecture and base screens. Made all features responsive. Handed off to 2 designers.',
      result: '3 entry points → 1. Full pattern parity. 2 designers enabled. NLQ + Insights live in 9.3.6. DSML Hub shipping 2027.',
    },
    technologies: [
      'Figma',
      'User Research',
      'Persona Mapping',
      'Journey Mapping',
      'Usability Testing',
      'Prototyping',
      'Stakeholder Alignment',
    ],
    keyAchievements: [
      // METRICS (Lead with impact)
      '3 entry points → 1 unified DSML Hub',
      '3 workflows owned simultaneously (NLQ, Insights, DSML Hub)',
      'Full pattern parity across all features',
      'All features fully responsive',
      // BEHAVIORS (Show how)
      'Drove the vision — brought ideas to table, showed final mockups, then tickets came',
      'From annual roadmap concept → shipped architecture',
      'Defined scope, architecture, base screens before handoff',
      // OWNERSHIP (Prove depth)
      'Created 2 business personas from scratch; inherited 2 technical',
      'Made all 3 features responsive across all breakpoints',
      // SCALE (Broader impact)
      'Enabled 2 designers (1 junior, 1 senior) with architecture and base screens',
      'Competitive positioning against Power BI, Tableau, Qlik',
      'NLQ + Insights live in 9.3.6. DSML Hub shipping 2027.',
    ],
    dataSheetUrl: 'https://www.ibi.com/products/ibi-webfocus',
    dataSheetLabel: 'View WebFOCUS Product Page',
    demoVideoUrl: 'https://www.youtube.com/watch?v=ggcv8b7EKXo',
    demoVideoLabel: 'Insights Public Demo',
    demoVideoUrl2: 'https://www.youtube.com/watch?v=LDaGvuS4K5Y',
    demoVideoLabel2: 'NLQ Public Demo',
    validationLinks: [
      {
        url: 'https://community.ibi.com/articles/from-data-to-insights-ibi-webfocus-data-science-best-feature-%E2%80%9Cinstant-insights-r37/',
        label: 'Instant Insights Article',
      },
      {
        url: 'https://www.ibi.com/products/ibi-webfocus/ai-bootcamp',
        label: 'WebFOCUS AI Bootcamp',
      },
    ],
  },
  // ----------------------------
  // VERSION TIMELINE
  // ----------------------------
  versionTimeline: [],
  // ----------------------------
  // UX PRINCIPLES (Public)
  // ----------------------------
  uxPrinciples: {
    title: 'Design Principles',
    intro: 'The rules that governed every decision across all three features.',
    principles: [
      {
        title: 'Pattern Parity',
        description:
          'Learn NLQ, know Insights, know Predict. Same navigation, same data selection, same error handling. Interaction cost stays constant.',
      },
      {
        title: 'Progressive Disclosure',
        description:
          'Business users get guided paths. Power users get advanced controls. Same interface, different depths. Complexity exists but hides until needed.',
      },
      {
        title: 'Cognitive Offloading',
        description:
          'The system does the thinking. Tooltips surface before users need them. Tutorials live inside the interface. Nobody has to guess.',
      },
      {
        title: 'One Click Away',
        description:
          'Every DSML feature accessible from Hub homepage. No hunting through menus. No switching contexts. One click to any workflow.',
      },
    ],
  },
  // ----------------------------
  // NARRATIVE CASE STUDY SECTIONS (6 sections mapped to D.E.S.I.G.N. Framework)
  // ----------------------------
  sections: [
    {
      id: 'section-01',
      index: 'D',
      title: 'Discover: The Strategic Problem',
      summary: 'Three powerful tools nobody could find. Conceptualized in annual roadmap — I drove the vision from there.',
      // Components: IQBusinessCase, then IQWorkflowsBuilt + IQNLQInsightsShowcase showing what I owned
    },
    {
      id: 'section-02',
      index: 'E',
      title: 'Empathize: Who We\'re Building For',
      summary: 'Business users, not just BI experts.',
      // Components: IQPersonaCards (locked)
    },
    {
      id: 'section-03',
      index: 'S',
      title: 'Simplify: The Architecture',
      summary: '3 → 1. Defined architecture before tickets existed. Full pattern parity. All features responsive.',
      // Components: IQPluginArchitecture, IQArchitectureBlueprint (locked), IQEvolution (locked)
    },
    {
      id: 'section-04',
      index: 'I',
      title: 'Iterate: Before & After',
      summary: 'Same features. Better together.',
      body: 'Drag the sliders to see the transformation.',
      // Components: IQIterationLog, IQWorkflowComparison
    },
    {
      id: 'section-05',
      index: 'G',
      title: 'Grow: Constraints & Decisions',
      summary: 'Built within existing Hub. Enabled 2 designers (1 junior, 1 senior) with architecture and base screens.',
      // Components: IQEmptyStateShowcase
    },
    {
      id: 'section-06',
      index: 'N',
      title: 'Navigate: Impact',
      summary: 'NLQ + Insights live in 9.3.6. ML shipping 2026. DSML Hub shipping 2027.',
      body: 'NLQ and Insights live now in 9.3.6. ML Functions redesign ships 2026. DSML Hub unifies everything in 2027. I defined the future of DSML in WebFOCUS.',
    },
  ],
  // ----------------------------
  // PROTOTYPE MEDIA
  // ----------------------------
  prototypeMedia: {
    title: 'Transformation in Motion',
    description:
      'See the transformation unfold in real-time. Compare the three existing workflows with the new unified DSML Hub design.',
    multiBeforeAfter: {
      before: {
        title: 'Current Workflows (Public)',
        videos: [
          {
            title: 'NLQ (Natural Language Query)',
            videoEmbedUrl: 'https://www.youtube.com/embed/LDaGvuS4K5Y',
            videoPoster: '/images/case-study/iq-plugin/iq-nlq-old-poster.jpg',
            description: 'Standalone NLQ workflow in Explore Data — separate entry point, different mental model.',
          },
          {
            title: 'Automated Insights',
            videoEmbedUrl: 'https://www.youtube.com/embed/ggcv8b7EKXo',
            videoPoster: '/images/case-study/iq-plugin/iq-insights-old-poster.jpg',
            description: 'Standalone Automated Insights workflow — another separate entry point with its own interface.',
          },
          {
            title: 'ML Functions (Predict Data)',
            videoEmbedUrl: 'https://www.youtube.com/embed/VWxMJ0E5aL0',
            videoPoster: '/images/case-study/iq-plugin/iq-ml-old-poster.jpg',
            description: 'ML Functions from Reporting Server — redesigned with unified patterns.',
          },
        ],
      },
      after: {
        title: 'Unified DSML Hub (Password Protected)',
        videoUrl: '/videos/iq-prototype-walkthrough.mp4',
        videoPoster: '/images/case-study/iq-plugin/iq-prototype-poster.jpg',
        description: 'The new unified DSML Hub: all three DSML capabilities consolidated into one cohesive entry point.',
        sensitive: true,
      },
      comparisonNotes: {
        before: [
          'Three separate entry points',
          'Different patterns for each feature',
          'Users had to hunt for features',
          'Intimidating for business users',
        ],
        after: [
          'Single unified entry point',
          'Consistent patterns everywhere',
          'All DSML in one place',
          'Approachable for all users',
        ],
      },
    },
  },
  // ----------------------------
  // D.E.S.I.G.N. FRAMEWORK CONNECTION
  // ----------------------------
  frameworkConnection: {
    principles: [
      {
        letter: 'D',
        title: 'Discover Deeply',
        description: 'The problem wasn\'t quality — it was visibility. Three powerful tools nobody could find. Conceptualized in annual roadmap, I drove the vision from there.',
        systemLogic: "diagnose(visibility).not(quality);",
      },
      {
        letter: 'E',
        title: 'Empathize with the Ecosystem',
        description: 'Created 2 business personas from scratch. Inherited 2 technical. Designed for all 4 simultaneously — data scientists AND business users.',
        systemLogic: "build(personas).map(journeys);",
      },
      {
        letter: 'S',
        title: 'Simplify the Chaos',
        description: '3 → 1. Owned all 3 workflows. Unified patterns. Made everything responsive. Defined architecture before tickets existed.',
        systemLogic: "own(all).unify(patterns).responsive(true);",
      },
      {
        letter: 'I',
        title: 'Iterate with Inclusion',
        description: 'Brought ideas to table, showed final mockups, then tickets came. PM collaborated on opinions, but I defined the architecture.',
        systemLogic: "validate(allPersonas).iterate(toMatch);",
      },
      {
        letter: 'G',
        title: 'Grow Through Constraints',
        description: 'Built within existing Hub ecosystem. Enabled 2 designers (1 junior, 1 senior) with architecture and base screens.',
        systemLogic: "build(within).respect(existing);",
      },
      {
        letter: 'N',
        title: 'Navigate Forward',
        description: 'NLQ + Insights live in 9.3.6. ML shipping 2026. DSML Hub shipping 2027. Defined the future of DSML in WebFOCUS.',
        systemLogic: "ship(2027);",
      },
    ],
  },
  // ----------------------------
  // IMPACT SUMMARY
  // ----------------------------
  impactSummary: {
    heading: 'Impact',
    bullets: [
      '3 entry points → 1 unified DSML Hub.',
      '3 workflows owned simultaneously.',
      'Full pattern parity across all features.',
      'All features fully responsive.',
      'Drove the vision — showed mockups, then tickets came.',
      'Enabled 2 designers with architecture and base screens.',
      'NLQ + Insights live in 9.3.6. DSML Hub shipping 2027.',
    ],
  },
  // ----------------------------
  // FINAL SUMMARY
  // ----------------------------
  finalSummary: {
    title: 'The Work',
    body: 'From annual roadmap concept → shipped architecture. Owned all 3 workflows. Drove the vision — brought ideas to table, showed final mockups, then tickets came. Enabled 2 designers. Defined the future of DSML in WebFOCUS.',
    keyPoints: [
      '3 entry points → 1 unified DSML Hub',
      'Drove vision — mockups first, tickets after',
      'Enabled 2 designers (1 junior, 1 senior)',
      'NLQ + Insights live. DSML Hub shipping 2027.',
    ],
  },
  // ----------------------------
  // PUBLIC SECTIONS (visible without password)
  // ----------------------------
  publicSections: [
    {
      id: 'section-01',
      index: 'D',
      title: 'Discover: The Strategic Problem',
      summary: 'Not broken. Just invisible.',
      body: 'WebFOCUS had three DSML features—NLQ, Insights, ML. All shipping. None legacy. Just invisible. NLQ and Insights buried in menus. ML in a separate context. Users didn\'t know they existed. I owned all three workflows and unified them into one DSML Hub.',
    },
  ],
  // ----------------------------
  // NO PASSWORD GATE - Section 01 is public, sections 02-06 are locked via LockedContent
  // ----------------------------
}
