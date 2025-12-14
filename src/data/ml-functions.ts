import { CaseStudyData } from '@/types/caseStudy'

export const mlFunctionsCaseStudy: CaseStudyData = {
  slug: 'ml-functions',
  // Blueprint Hero - Architect Design System
  heroTitle: 'Democratizing Machine Learning for Everyone',
  heroSubheading: 'Turning a black-box data science process into a guided, 4-step workflow',
  heroSubtitle:
    'I came in with zero ML background and got MIT certified to do this work. For eight months, I brought ideas to the table — the PM wrote tickets after seeing my mockups.',
  coverImage: {
    src: '/images/case-study/ml-functions/11. Train Model Workflow - Confusion Matrix.png',
    alt: 'ML Functions Confusion Matrix - Model Performance Visualization',
  },
  role: 'UX Lead / UX Owner (End-to-End Ownership)',
  company: 'Cloud Software Group — WebFOCUS',
  timeframe: 'Jan 2023 – Nov 2023 | Shipping 2026',
  status: {
    label: 'Shipping 2026',
    variant: 'shipping' as const,
  },
  scope: [
    'AI/ML UX',
    'Systems Thinking',
    'Zero-to-One',
    'Cross-functional Leadership',
    'Technical Fluency',
  ],
  // ----------------------------
  // QUICK IMPACT OVERVIEW (Public)
  // ----------------------------
  quickOverview: {
    title: 'Democratizing ML — Quick Impact Overview',
    subtitle: 'Predictive analytics for non-technical users',
    leadershipSummary: 'I owned ML Functions while leading ReportCaster and IQ Plugin at the same time. I collaborated weekly with the Principal Data Scientist for over six months to make sure I understood the domain deeply before designing.',
    whatTheSystemWas:
      'The existing workflow was fragmented — hyperparameters hidden behind right-click menus, confusing error messages, and no clear path from start to finish. It worked for experts, but it wasn\'t accessible to the broader user base.',
    myRole:
      'I took this from ambiguity to a production-ready 4-step workflow. End-to-end ownership, from learning the domain to shipping the design.',
    scopeOfPractice: [],
    credentials: 'Professional Certificate in Product Design for AI & ML — MIT, Boston',
    impactMetrics: [
      {
        label: 'Clicks reduced',
        value: '12+ → 7-9',
      },
      {
        label: 'SME discoverability',
        value: '5/5 found entry without help',
      },
      {
        label: 'Error handling',
        value: 'Dead-ends → clear guidance',
      },
      {
        label: 'Entry point',
        value: '2-click access',
      },
    ],
    star: {
      situation: 'A fragmented ML training workflow with 12+ clicks, hidden hyperparameters, and dead-end error states. It worked for data scientists but wasn\'t accessible to business users.',
      task: 'Make machine learning accessible to non-technical users without dumbing it down for experts.',
      action: 'I got MIT certified in AI/ML product design. Embedded weekly with the Principal Data Scientist for six months. Led this alongside two other major projects.',
      result: 'Reduced workflow from 12+ clicks to 7-9. All five SMEs found the entry point without help. The confusion matrix became "the best screen in the entire UX revamp."',
    },
    technologies: [],
    keyAchievements: [
      '12+ clicks → 7-9 clicks for ML workflow',
      '5/5 SMEs found entry point without help',
      'Zero ML background → MIT certified',
      'Confusion matrix: "the best screen in the entire UX revamp"',
      'Dual-experience approach (guided + advanced)',
      'Patterns became foundation for IQ Plugin',
    ],
    dataSheetUrl: 'https://www.ibi.com/content/dam/ibi/documents/data-sheet/ibi-webFOCUS-integrated-data-science-data-sheet.pdf',
    dataSheetLabel: 'View ML Functions Data Sheet',
    demoVideoUrl: 'https://www.youtube.com/watch?v=VWxMJ0E5aL0',
    demoVideoLabel: 'Old UI Public Demo',
    validationLinks: [
      {
        url: 'https://www.ibi.com/press-releases/2023/ibi-webfocus-92-addresses-the-industry-push-for-modern-business-intelligence-cloud-and-user',
        label: 'WebFOCUS 9.2 Press Release',
      },
      {
        url: 'https://community.ibi.com/articles/using-machine-learning-functions-in-webfocus-r27141/',
        label: 'ML Functions Article',
      },
      {
        url: 'https://www.ibi.com/resources/november-vug-elevate-your-analytics-game-with-dsml-and-webfocus',
        label: 'DSML Webinar',
      },
    ],
  },
  // ----------------------------
  // VERSION TIMELINE
  // ----------------------------
  // No version timeline for ML Functions case study
  versionTimeline: [],
  // ----------------------------
  // UX PRINCIPLES (Public)
  // ----------------------------
  uxPrinciples: {
    title: 'Design Principles Applied',
    principles: [
      { title: 'Explainability First', description: '' },
      { title: 'Linear Flow (No Branching)', description: '' },
      { title: 'Upstream Validation', description: '' },
      { title: 'System State Visibility', description: '' },
      { title: 'Progressive Disclosure', description: '' },
      { title: 'Dual Experience (Guided + Advanced)', description: '' },
    ],
  },
  // ----------------------------
  // SECTIONS (6 sections mapped to D.E.S.I.G.N. Framework)
  // ----------------------------
  sections: [
    {
      id: 'section-01',
      index: 'D',
      title: 'Discover Deeply: How I Landed the Project',
      summary: 'I embedded weekly with the Principal Data Scientist for over six months. I spent months understanding the domain before I designed anything.',
      body: `I came in with zero ML background. That could have been a liability — instead, I made it an advantage. I enrolled in MIT's AI/ML product design certification and embedded weekly with our Principal Data Scientist for over six months.

By the time I started designing, I understood the domain deeply enough to challenge assumptions and ask the right questions.`,
    },
    {
      id: 'section-02',
      index: 'E',
      title: 'Empathize with the Ecosystem: Understanding Users and Workflows',
      summary: 'Documented the fragmented 4+ step ML workflow, identified pain points, and mapped user journeys to understand how different personas interacted with ML capabilities.',
      body: `Three personas. Three different needs: data scientists wanted depth, business users wanted simplicity, analysts wanted both. The existing experience served none of them well.

After documenting every workflow and decision point, I realized: if I find this frustrating after weeks of study, a first-time user has no chance. That insight drove the redesign.`,
      // Note: Workflow Planning & Architecture moved to SystemTopologyBlueprint component in Simplify section
    },
    {
      id: 'section-03',
      index: 'S',
      title: 'Simplify the Chaos: From Black Box to Guided Flow',
      summary: 'Documented the fragmented 4+ step ML workflow, identified pain points, and designed a structured 4-step guided flow that reduced clicks from 12+ to 7-9.',
      body: `The mapping revealed the problems, but solving them required multiple iterations. Three critical pivots shaped the final design.

Breakthrough: structured guided flow based on what a model needs to train responsibly. Our domain expert's answer to "What do you absolutely need?" → problem type, target, predictors, hyperparameters. That became the UX spine.`,
      // Note: Hand-drawn wireframes subsection removed - repurposed in SystemTopologyBlueprint component
    },
    {
      id: 'section-04',
      index: 'I',
      title: 'Iterate with Inclusion: Balancing Control with Simplicity',
      body: `Led cross-functional alignment across Product, Engineering, and Data Science over 6–8 months. Weekly syncs. Shared Figma. Screen-reviewed design reviews.

The confusion matrix screen alone went through 10+ iterations. Our Principal DS pushed for advanced metrics; I pushed for clarity. That productive tension produced what he called "the best screen in the entire UX revamp."`,
      // Note: Subsections removed - replaced by DesignIterationLog component
    },
    {
      id: 'section-05',
      index: 'G',
      title: 'Grow Through Constraints: Earning Trust & Leading the Team',
      summary: 'I collaborated with 30-year veteran engineers over six months. At the same time, I was leading ReportCaster and the DSML Hub.',
      body: `The dual-experience approach emerged from engineering constraints. We couldn't rebuild the advanced mode — it had to coexist with the new guided flow. What felt like a limitation became a feature: experts got their power, newcomers got guidance.

I led this while simultaneously owning ReportCaster and IQ Plugin. Cross-project pattern sharing meant solutions in one project accelerated the others.`,
    },
    {
      id: 'section-06',
      index: 'N',
      title: 'Navigate Forward: Impact, Validation, and Reflection',
      body: `5/5 SMEs found the entry point without help. Dead-ends → clear guidance. Design demos to 150-200 person business unit earned leadership support.

The patterns I developed here — structured flows, upstream validation, right-click entry, dual-experience — became the foundation for IQ Plugin and platform-wide AI strategy.`,
      beforeAfter: {
        before: {
          src: '/images/case-study/ml-functions/Legacy Train Model Resuls UI.png',
          alt: 'Legacy Train Model Results UI - Before redesign',
          caption: 'Before: Legacy Train Model Results UI with fragmented workflow, hidden states, and confusing "results not generated" errors',
          sensitive: true,
        },
        after: {
          src: '/images/case-study/ml-functions/11. Train Model Workflow - Confusion Matrix.png',
          alt: 'Train Model Workflow - Confusion Matrix - After redesign',
          caption: 'After: New Confusion Matrix screen with clear hierarchy, scannable metrics, and guided interpretation — the screen that received highest praise from the Principal Data Scientist',
          sensitive: true,
        },
        beforeLabel: 'Before',
        afterLabel: 'After',
      },
      images: [
        {
          src: '/images/case-study/ml-functions/ml-functions-reflections.jpg',
          alt: 'Portrait: transforming ML complexity into accessible design',
          caption: 'Transforming ML complexity into accessible design. This project reinforced my belief: power means nothing without accessibility.',
        },
      ],
    },
  ],
  // ----------------------------
  // PROTOTYPE (placeholder URLs)
  // ----------------------------
  prototypeMedia: {
    title: 'Transformation in Motion',
    description:
      'See the transformation unfold in real-time. Compare the old fragmented workflow with the new guided design side-by-side.',
    // Before/After video comparison
    beforeAfter: {
      before: {
        title: 'Legacy ML Workflow',
        // Public YouTube video - old workflow is public (still current, new workflow hasn't launched yet)
        videoEmbedUrl: 'https://www.youtube.com/embed/VWxMJ0E5aL0', // Public demo of current ML Functions UI
        videoUrl: '/videos/ml-old-workflow.mp4', // Fallback if videoEmbedUrl not provided
        videoPoster: '/images/case-study/ml-functions/ml-old-workflow-poster.jpg',
        description: 'The old fragmented workflow: 4+ step path, drag model pill onto data flow, configure in popup, hidden hyperparameters, confusing "results not generated" errors.',
      },
      after: {
        title: 'New Guided Workflow',
        videoUrl: '/videos/ml-prototype-walkthrough.mp4',
        videoPoster: '/images/case-study/ml-functions/ml-prototype-poster.jpg',
        description: 'The new guided workflow: structured step-by-step flow, right-click entry, clear error handling, reduced from 12+ clicks to 7-9 clicks.',
        sensitive: true, // Unreleased feature - new ML UI
      },
      comparisonNotes: {
        before: [
          'Fragmented 4+ step workflow',
          '12+ clicks through data flows and menus',
          'Hidden hyperparameters behind right-click',
          'Confusing "results not generated" errors',
        ],
        after: [
          'Structured 4-step guided flow',
          '7-9 clicks via right-click entry',
          'Clear error handling and validation',
          'Accessible for non-technical users',
        ],
      },
    },
    // Fallback single video if beforeAfter not available
    videoUrl: '/videos/ml-prototype-walkthrough.mp4',
    videoPoster: '/images/case-study/ml-functions/ml-prototype-poster.jpg',
  },
  // ----------------------------
  // D.E.S.I.G.N. FRAMEWORK CONNECTION
  // ----------------------------
  frameworkConnection: {
    principles: [
      {
        letter: 'D',
        title: 'Discover Deeply',
        description: 'I came in with zero ML background. I spent months learning the domain before I touched a design file.',
      },
      {
        letter: 'E',
        title: 'Empathize with the Ecosystem',
        description: 'Data scientists wanted depth and control. Business users wanted simplicity. I had to design for both without compromising either.',
      },
      {
        letter: 'S',
        title: 'Simplify the Chaos',
        description: 'I reduced the workflow from 12+ clicks to 7-9. I created a structured 4-step flow with clear error guidance instead of dead-ends.',
      },
      {
        letter: 'I',
        title: 'Iterate with Inclusion',
        description: 'The confusion matrix alone went through 10+ iterations with the Principal Data Scientist. That tension produced the best screen in the project.',
      },
      {
        letter: 'G',
        title: 'Grow Through Constraints',
        description: 'The dual-experience approach (guided + advanced) emerged from engineering constraints. What felt like a limitation became a feature.',
      },
      {
        letter: 'N',
        title: 'Navigate Forward',
        description: 'All five SMEs found the entry point without help. The patterns I developed here scaled to the IQ Plugin and platform-wide AI strategy.',
      },
    ],
  },
  // ----------------------------
  // IMPACT SUMMARY
  // ----------------------------
  impactSummary: {
    heading: 'Pre-launch impact at a glance',
    bullets: [
      '12+ clicks → 7-9 clicks for ML workflow',
      '5/5 SMEs found entry point without help',
      'Dead-ends → clear error guidance',
      'Confusion matrix: "the best screen in the entire UX revamp"',
      'Patterns became foundation for IQ Plugin',
    ],
  },
  // ----------------------------
  // FINAL SUMMARY - Removed (duplicates impactSummary)
  // ----------------------------
  finalSummary: undefined,
}
