import { CaseStudyData } from '@/types/caseStudy'

export const iqPluginCaseStudy: CaseStudyData = {
  slug: 'iq-plugin',
  heroTitle: 'DSML HUB',
  heroSubheading: 'Unifying Data Science & ML Inside WebFOCUS',
  heroSubtitle:
    'Three powerful features. Scattered across the platform. I brought them together—and owned every piece of the journey.',
  coverImage: {
    src: '/images/case-study/iq-plugin/IQ plugin - visual - 3 in 1 IQ Hub.png',
    alt: 'DSML Hub - Unified Data Science & Machine Learning',
  },
  role: 'Principal Product Designer (Full Ownership)',
  company: 'Cloud Software Group — WebFOCUS',
  timeframe: '2023–2025',
  status: {
    label: 'IN_ENGINEERING (TARGET_RELEASE: 2027)',
    variant: 'shipping' as const,
  },
  scope: [
    'Product Vision',
    'DSML Integration',
    'Information Architecture',
    'Multi-persona UX',
    'Strategic Initiative',
  ],
  // ----------------------------
  // QUICK IMPACT OVERVIEW (Public)
  // ----------------------------
  quickOverview: {
    title: 'DSML Hub — Quick Impact Overview',
    subtitle: 'From scattered features to unified DSML Hub',
    leadershipSummary: 'Owned all three DSML workflows simultaneously. Defined the product vision before requirements existed — PM wrote tickets from my designs.',
    whatTheSystemWas:
      'WebFOCUS had three DSML features—NLQ, Insights, ML. All shipping. None legacy. Just invisible. NLQ and Insights buried in menus. ML in a separate context. Users didn\'t know they existed.',
    myRole:
      'Owned all three workflows: NLQ, Insights, and the DSML Hub. Made them responsive. Ensured pattern parity. PM had the idea—I built it.',
    scopeOfPractice: [
      {
        tag: 'FULL_OWNERSHIP',
        tagColor: 'blue',
        headline: 'Owned All 3 Workflows',
        body: 'NLQ, Insights, AND the DSML Hub. Every screen, every flow, every interaction—mine.',
        icon: 'architect',
      },
      {
        tag: 'PATTERN_PARITY',
        tagColor: 'amber',
        headline: '100% Consistency',
        body: 'Same patterns across all 3 features. Learn one, know them all.',
        icon: 'archaeologist',
      },
      {
        tag: 'RESPONSIVE',
        tagColor: 'purple',
        headline: 'All 3 Responsive',
        body: 'Enterprise BI on any screen. All features, all breakpoints.',
        icon: 'strategist',
      },
      {
        tag: 'PERSONAS',
        tagColor: 'emerald',
        headline: '2 Created + 2 Inherited',
        body: 'Built business user personas from scratch. Mapped all 4 into the system.',
        icon: 'multiplier',
      },
    ],
    impactMetrics: [
      { label: 'Workflows owned', value: '3' },
      { label: 'Pattern parity', value: '100%' },
      { label: 'Entry points', value: '1' },
      { label: 'Personas mapped', value: '4' },
    ],
    star: {
      situation: 'Three DSML features existed but were invisible. Different entry points, different patterns, low adoption.',
      task: 'Unify them. Make them discoverable. Drive adoption.',
      action: 'Owned everything—NLQ, Insights, AND the hub. Built the architecture, the flows, the tutorial system. Ensured pattern consistency. Made everything responsive.',
      result: 'DSML Hub: One-click access to all DSML. Pattern parity across features. Shipping 2027.',
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
      'Owned all 3 DSML workflows: NLQ, Insights, and the DSML Hub',
      'Achieved 100% pattern consistency across all features',
      'Made all features fully responsive across screen sizes',
      'Created 2 business user personas; inherited 2 technical',
      'Defined product vision with minimal requirements—PM created tickets after design was done',
      'Competitive positioning against Power BI, Tableau, Qlik',
    ],
    dataSheetUrl: 'https://www.ibi.com/products/ibi-webfocus',
    dataSheetLabel: 'View WebFOCUS Product Page',
    demoVideoUrl: 'https://www.youtube.com/watch?v=ggcv8b7EKXo',
    demoVideoLabel: 'Insights Public Demo',
    demoVideoUrl2: 'https://www.youtube.com/watch?v=LDaGvuS4K5Y',
    demoVideoLabel2: 'NLQ Public Demo',
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
      summary: 'Not broken. Just invisible.',
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
      summary: 'Three tools. One hub. Every pattern unified.',
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
      summary: 'Building inside an existing ecosystem.',
      // Components: IQEmptyStateShowcase
    },
    {
      id: 'section-06',
      index: 'N',
      title: 'Navigate: Impact',
      summary: 'What shipped. What\'s shipping.',
      body: 'NLQ and Insights live now in 9.3.6. ML Functions redesign ships 2026. DSML Hub unifies everything in 2027.',
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
        description: 'The problem wasn\'t quality—it was visibility. Three powerful tools nobody could find.',
        systemLogic: "diagnose(visibility).not(quality);",
      },
      {
        letter: 'E',
        title: 'Empathize with the Ecosystem',
        description: 'Built 2 business personas. Inherited 2 technical. Mapped all 4 into unified journeys.',
        systemLogic: "build(personas).map(journeys);",
      },
      {
        letter: 'S',
        title: 'Simplify the Chaos',
        description: 'Owned all 3 workflows. Unified the patterns. Made everything responsive.',
        systemLogic: "own(all).unify(patterns).responsive(true);",
      },
      {
        letter: 'I',
        title: 'Iterate with Inclusion',
        description: 'Validated with all personas. Refined until patterns matched perfectly.',
        systemLogic: "validate(allPersonas).iterate(toMatch);",
      },
      {
        letter: 'G',
        title: 'Grow Through Constraints',
        description: 'Built within existing Hub. Respected legacy while pushing forward.',
        systemLogic: "build(within).respect(existing);",
      },
      {
        letter: 'N',
        title: 'Navigate Forward',
        description: 'NLQ + Insights: now. ML: 2026. DSML Hub: 2027.',
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
      'Owned all 3 workflows: NLQ, Insights, DSML Hub',
      '100% pattern consistency across all features',
      'All features fully responsive',
      'Created 2 business personas; inherited 2 technical',
      'Unified dataset selection and onboarding',
      'Competitive positioning against Power BI, Tableau, Qlik',
    ],
  },
  // ----------------------------
  // FINAL SUMMARY
  // ----------------------------
  finalSummary: {
    title: 'The Work',
    body: 'I owned every piece of the DSML surface. NLQ. Insights. The DSML Hub that unified them. Made all three responsive. Ensured every pattern matched.',
    keyPoints: [
      'Owned NLQ, Insights, AND DSML Hub',
      '100% pattern parity',
      'All features responsive',
      '4 personas mapped',
      'Shipping 2027',
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
