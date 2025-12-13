import { CaseStudyData } from '@/types/caseStudy'

export const iqPluginCaseStudy: CaseStudyData = {
  slug: 'iq-plugin',
  heroTitle: 'Driving Data Science Adoption in Enterprise BI',
  heroSubheading: 'Unifying Data Science & ML Inside WebFOCUS',
  heroSubtitle:
    'This started as a concept in the annual roadmap. I took it from idea to shipped architecture — bringing mockups to the table first, with tickets following after. I owned all three workflows and eventually handed off to two designers.',
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
    leadershipSummary: 'I owned all three DSML workflows at the same time — NLQ, Insights, and the DSML Hub. This went from a roadmap concept to shipped architecture, and I handed it off to two designers after establishing the foundation.',
    whatTheSystemWas:
      'WebFOCUS had three data science features — NLQ, Insights, and ML. They were all shipping, none were legacy. But they were invisible. Buried in different menus, different entry points. Users didn\'t know they existed.',
    myRole:
      'I owned all three workflows end-to-end. Made them responsive, ensured pattern parity across all of them, and unified them into a single discoverable hub.',
    scopeOfPractice: [],
    impactMetrics: [
      { label: 'Workflows owned', value: '3 simultaneously' },
      { label: 'Entry points unified', value: '3 → 1' },
      { label: 'NLQ adoption', value: '+25%' },
      { label: 'Designers enabled', value: '2 (1 junior, 1 senior)' },
    ],
    star: {
      situation: 'Three powerful data science features existed but were scattered across the platform. Different entry points, different patterns, low adoption. Users didn\'t know they were there.',
      task: 'Unify them into one discoverable experience. Make data science accessible without hiding it.',
      action: 'I owned all three workflows simultaneously. Defined the architecture and base screens, ensured pattern parity, and made everything responsive.',
      result: 'Unified three entry points into one. NLQ and Insights are live in production. DSML Hub shipping 2027.',
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
      summary: 'WebFOCUS had three powerful data science tools — but nobody could find them. This started as a concept in the annual roadmap. I took it from idea to shipped architecture.',
      // Components: IQBusinessCase, then IQWorkflowsBuilt + IQNLQInsightsShowcase showing what I owned
    },
    {
      id: 'section-02',
      index: 'E',
      title: 'Empathize: Who We\'re Building For',
      summary: 'We were building for business users, not just BI experts. The challenge was making data science accessible without hiding its power.',
      // Components: IQPersonaCards (locked)
    },
    {
      id: 'section-03',
      index: 'S',
      title: 'Simplify: The Architecture',
      summary: 'I unified three entry points into one. I defined the architecture before any tickets existed, ensured pattern parity across all features, and made everything responsive.',
      // Components: IQPluginArchitecture, IQArchitectureBlueprint (locked), IQEvolution (locked)
    },
    {
      id: 'section-04',
      index: 'I',
      title: 'Iterate: Before & After',
      summary: 'Same features, but better together. Drag the sliders to see the transformation.',
      body: 'Drag the sliders to see the transformation.',
      // Components: IQIterationLog, IQWorkflowComparison
    },
    {
      id: 'section-05',
      index: 'G',
      title: 'Grow: Constraints & Decisions',
      summary: 'I built within the existing Hub ecosystem — no new infrastructure required. I defined the architecture and base screens, then handed off to two designers.',
      // Components: IQEmptyStateShowcase
    },
    {
      id: 'section-06',
      index: 'N',
      title: 'Navigate: Impact',
      summary: 'NLQ and Insights are live in production now. ML Functions ships in 2026. The DSML Hub unifies everything in 2027.',
      body: 'NLQ and Insights are live now in 9.3.6. ML Functions redesign ships 2026. DSML Hub unifies everything in 2027.',
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
        description: 'WebFOCUS had three powerful data science tools — but nobody could find them. The problem wasn\'t quality. It was visibility.',
      },
      {
        letter: 'E',
        title: 'Empathize with the Ecosystem',
        description: 'I designed for both data scientists and business users. Different needs, same entry point.',
      },
      {
        letter: 'S',
        title: 'Simplify the Chaos',
        description: 'I unified three scattered entry points into one. Consistent patterns everywhere. All features fully responsive.',
      },
      {
        letter: 'I',
        title: 'Iterate with Inclusion',
        description: 'I brought mockups first — tickets followed. I collaborated with the PM to define the architecture together.',
      },
      {
        letter: 'G',
        title: 'Grow Through Constraints',
        description: 'I built within the existing Hub ecosystem. No new infrastructure — just smart integration with what was already there.',
      },
      {
        letter: 'N',
        title: 'Navigate Forward',
        description: 'NLQ and Insights are live in production. The DSML Hub ships in 2027.',
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
      body: 'WebFOCUS had three data science features — NLQ, Insights, and ML. They were all shipping. None were legacy. They just weren\'t visible. NLQ and Insights were buried in menus. ML lived in a completely separate context. Users didn\'t know they existed. I owned all three workflows and unified them into one DSML Hub.',
    },
  ],
  // ----------------------------
  // NO PASSWORD GATE - Section 01 is public, sections 02-06 are locked via LockedContent
  // ----------------------------
}
