import { CaseStudyData } from '@/types/caseStudy'

export const iqPluginCaseStudy: CaseStudyData = {
  slug: 'iq-plugin',
  heroTitle: 'Driving Data Science Adoption in Enterprise BI',
  heroSubheading: 'Unifying Data Science & ML Inside WebFOCUS',
  heroSubtitle:
    'From roadmap concept to shipped architecture. Brought mockups first, tickets followed. Owned 3 workflows simultaneously. Handed off to 2 designers.',
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
    leadershipSummary: 'Owned all 3 DSML workflows simultaneously. From roadmap concept to shipped architecture.',
    whatTheSystemWas:
      'Three DSML features (NLQ, Insights, ML) — all shipping, none legacy, just invisible. Users didn\'t know they existed.',
    myRole:
      'End-to-end ownership: NLQ, Insights, and DSML Hub. Full pattern parity. All features responsive.',
    scopeOfPractice: [],
    impactMetrics: [
      { label: 'Workflows owned', value: '3 simultaneously' },
      { label: 'Entry points unified', value: '3 → 1' },
      { label: 'NLQ adoption', value: '+25%' },
      { label: 'Designers enabled', value: '2 (1 junior, 1 senior)' },
    ],
    star: {
      situation: 'Three DSML features existed but were invisible. Low adoption.',
      task: 'Unify and make discoverable.',
      action: 'Owned all 3 workflows. Defined architecture.',
      result: '3 → 1. NLQ + Insights live. DSML Hub shipping 2027.',
    },
    technologies: [],
    keyAchievements: [
      '3 entry points → 1 unified DSML Hub',
      '3 workflows owned simultaneously',
      'Full pattern parity across all features',
      'From annual roadmap concept → shipped architecture',
      'Enabled 2 designers with architecture and base screens',
      'NLQ + Insights live in 9.3.6. DSML Hub shipping 2027',
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
    title: 'Design Principles Applied',
    principles: [
      { title: 'Pattern Parity', description: '' },
      { title: 'Progressive Disclosure', description: '' },
      { title: 'Cognitive Offloading', description: '' },
      { title: 'One Click Away', description: '' },
      { title: 'Responsive First', description: '' },
      { title: 'Contextual Help', description: '' },
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
      summary: 'Three powerful tools nobody could find. From annual roadmap concept to shipped architecture.',
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
      summary: 'Built within existing Hub ecosystem. Defined architecture before handoff.',
      // Components: IQEmptyStateShowcase
    },
    {
      id: 'section-06',
      index: 'N',
      title: 'Navigate: Impact',
      summary: 'NLQ + Insights live in 9.3.6. ML shipping 2026. DSML Hub shipping 2027.',
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
        description: 'Three powerful tools nobody could find. Problem was visibility, not quality.',
      },
      {
        letter: 'E',
        title: 'Empathize with the Ecosystem',
        description: '4 personas (2 created, 2 inherited). Designed for data scientists AND business users.',
      },
      {
        letter: 'S',
        title: 'Simplify the Chaos',
        description: '3 → 1. Unified patterns. Full responsiveness.',
      },
      {
        letter: 'I',
        title: 'Iterate with Inclusion',
        description: 'Mockups first, tickets followed. Collaborated with PM on architecture.',
      },
      {
        letter: 'G',
        title: 'Grow Through Constraints',
        description: 'Built within existing Hub ecosystem.',
      },
      {
        letter: 'N',
        title: 'Navigate Forward',
        description: 'NLQ + Insights live. DSML Hub shipping 2027.',
      },
    ],
  },
  // ----------------------------
  // IMPACT SUMMARY
  // ----------------------------
  impactSummary: {
    heading: 'Impact',
    bullets: [
      '3 entry points → 1 unified DSML Hub',
      '3 workflows owned simultaneously',
      'Full pattern parity across all features',
      'Handed off to 2 designers',
      'NLQ + Insights live in 9.3.6. DSML Hub shipping 2027',
    ],
  },
  // ----------------------------
  // FINAL SUMMARY - Removed (duplicates impactSummary)
  // ----------------------------
  finalSummary: undefined,
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
