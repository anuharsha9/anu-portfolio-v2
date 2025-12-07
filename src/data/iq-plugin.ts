import { CaseStudyData } from '@/types/caseStudy'

export const iqPluginCaseStudy: CaseStudyData = {
  slug: 'iq-plugin',
  heroTitle: 'IQ PLUGIN',
  heroSubheading: 'Unifying DSML inside the WebFOCUS hub',
  heroSubtitle:
    'Designing a single, intuitive entry point for automated insights, natural language questions, and predictive analytics — so both business users and data experts can actually use data science in their day-to-day work.',
  coverImage: {
    src: '/images/case-study/iq-plugin/IQ Navigation Tiles 1.png',
    alt: 'IQ Plugin Discover Page - Navigation Tiles',
  },
  role: 'UX Lead / UX Owner (End-to-End Ownership)',
  company: 'Cloud Software Group — WebFOCUS',
  timeframe: '2023–2025',
  status: {
    label: 'IN_ENGINEERING (TARGET_RELEASE: 2026)',
    variant: 'shipping' as const,
  },
  scope: [
    'Enterprise UX',
    'DSML integration',
    'IA & workflows',
    'Multi-persona design',
    'Cross-functional Leadership',
  ],
  // ----------------------------
  // QUICK IMPACT OVERVIEW (Public)
  // ----------------------------
  quickOverview: {
    title: 'IQ Plugin — Quick Impact Overview',
    subtitle: 'Unified DSML entry point',
    whatTheSystemWas:
      'DSML features — Automated Insights, Natural Language Query, and Predict Data — were fragmented, hard to discover, and intimidating. Users had to hunt across different parts of the platform, each with its own entry point and mental model.',
    myRole:
      'Inherited patterns from ML Functions and scaled them to unify 3 scattered DSML features (AutoML, Predict, Explain) into one cohesive experience. Designed the unified "front door" to DSML—a strategic initiative to compete with Power BI, Tableau, and Qlik. Created dual-layer UX: guided experiences for business users, advanced controls for data scientists. Mapped 4 distinct personas with different DSML comfort levels. Collaborated with PM, engineering, and QA to ensure scalable patterns across the entire DSML ecosystem.',
    scopeOfPractice: [
      {
        tag: 'PATTERN_SCALING',
        tagColor: 'blue',
        headline: 'Pattern Inheritance',
        body: 'Scaled **ML Functions patterns** to unify 3 DSML features into one browser extension.',
        icon: 'architect',
      },
      {
        tag: 'COMPETITIVE_STRATEGY',
        tagColor: 'amber',
        headline: 'Market Positioning',
        body: 'Unified "front door" to DSML—**competing with Power BI, Tableau, Qlik** but more approachable.',
        icon: 'archaeologist',
      },
      {
        tag: 'DUAL_LAYER_UX',
        tagColor: 'purple',
        headline: 'Persona-Driven Design',
        body: '**4 personas**, varying comfort levels. Guided paths for business users, advanced controls for data scientists.',
        icon: 'strategist',
      },
      {
        tag: 'DISCOVER_PAGE',
        tagColor: 'emerald',
        headline: 'Onboarding Architecture',
        body: 'Custom **Discover page** with tutorials and documentation—self-explanatory adoption driver.',
        icon: 'multiplier',
      },
    ],
    impactMetrics: [
      { label: 'Centralized DSML capabilities', value: 'Unified experience' },
      { label: 'Reduced learning curve', value: 'Improved discoverability' },
      { label: 'Positive feedback from stakeholders', value: 'Strong validation' },
      { label: 'Scalable pattern for future DSML features', value: 'Foundation for growth' },
      { label: 'Made DSML approachable for non-technical users', value: 'Broader adoption' },
      { label: 'Competitive positioning with leading BI platforms', value: 'Market alignment' },
    ],
    star: {
      situation: 'Three DSML features. Three entry points. Three mental models. Users hunted; non-technical users avoided.',
      task: 'Unify DSML into one approachable entry point.',
      action: 'Designed dual-layer UX: guided for non-technical, advanced for experts. One cohesive system.',
      result: 'Centralized DSML. Improved discoverability. Non-technical users now engage.',
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
      'Unified three fragmented DSML features into one cohesive experience',
      'Only designer who worked on all major WebFOCUS features; owned entire IQ Plugin initiative solo while simultaneously leading ReportCaster and ML Functions',
      'Established IQ patterns as foundational for entire DSML experience; seamless integrations across WebFOCUS ecosystem',
      'Mapped distinct user journeys for multiple personas representing different DSML comfort levels',
      'Created dual-layer UX balancing guided simplicity with expert flexibility',
      'Built scalable pattern for future DSML features',
      'Delivered organization-wide design demos to 150-200 person business unit, presenting IQ Plugin design strategy',
      'Ensured competitive positioning with leading BI platforms',
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
  // No version timeline for IQ Plugin case study
  versionTimeline: [],
  // ----------------------------
  // UX PRINCIPLES (Public)
  // ----------------------------
  uxPrinciples: {
    title: 'Architectural Directives',
    intro: 'Defining the immutable rules that govern interaction logic across the unified platform.',
    principles: [
      {
        title: 'The Speed Invariant.',
        description:
          'The system must support sub-second execution for experts (via shortcuts) *without* breaking the guided "Happy Path" for novices. Dual velocity is non-negotiable.',
      },
      {
        title: 'The Unification Invariant.',
        description:
          'Interaction cost must remain identical across all modules. If you learn to query "Insights", you effectively know how to train "Predict". Pattern parity is mandatory.',
      },
      {
        title: 'The Discovery Invariant.',
        description:
          'The system absorbs the "Thinking Cost." Tooltips and contextual guides preemptively surface knowledge before the user realizes they need it. Cognitive offloading by design.',
      },
      {
        title: 'The Signal Invariant.',
        description:
          'Complexity is preserved but concealed. Advanced configurations exist in the DOM but remain hidden until an explicit "Show Advanced" signal is received. Complexity abstraction without loss.',
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
      title: 'The System Diagnosis',
      summary: 'Three powerful engines, zero shared roads. Identified the strategic differentiator: Guided Complexity.',
      body: `Three features. Three mental models. Three fragmented entry points. Users hunted; non-technical users bounced.

**The Strategic Goal:** Unify these fragmented tools into a single 'front door' that could compete with Power BI and Tableau on power, but beat them on approachability.

**The Market Gap:** Competitors were forcing users to choose between 'Technical Depth' and 'Ease of Use.' We identified a third lane: **Guided Complexity.** This became the core differentiator for IQ.`,
      images: [
        {
          src: '/images/case-study/iq-plugin/Explore Data _ NLQ _ Empty State Illustration 1.png',
          alt: 'Explore Data NLQ - Standalone experience before IQ',
          caption: '// DIAGNOSTIC: FRAGMENTED_ENTRY_POINT — NLQ existed in isolation, disconnected from the broader analytics workflow.',
          sensitive: true,
        },
        {
          src: '/images/case-study/iq-plugin/Insights - Results - Tile View 1.png',
          alt: 'Explore Data Insights - Results view',
          caption: '// DIAGNOSTIC: DISCONNECTED_WORKFLOW — Insights generated, but no path to action or deeper analysis.',
          sensitive: true,
        },
      ],
    },
    {
      id: 'section-02',
      index: 'E',
      title: 'Mapping the Ecosystem',
      summary: 'Reconciling 4 distinct user mental models into one polymorphic workflow.',
      body: `The challenge: Four personas with four comfort levels—from data scientists demanding raw control to business analysts wanting one-click answers.

The strategy: Design a dual-layer architecture where the same interface serves both extremes. Progressive disclosure ensures complexity is available but never intrusive.`,
      images: [
        {
          src: '/images/case-study/iq-plugin/IQ Structure flowchart.png',
          alt: 'IQ Plugin structure flowchart',
          caption: '// ARTIFACT_01: INFORMATION_ARCHITECTURE — The structure map showing how four pillars connect into one unified system.',
          sensitive: true,
        },
        {
          src: '/images/case-study/iq-plugin/IQ Dataset Selection Workflow 2.png',
          alt: 'IQ Dataset selection workflow',
          caption: '// ARTIFACT_02: UNIFIED_DATA_FLOW — Consistent dataset selection pattern across all IQ features.',
          sensitive: true,
        },
      ],
    },
    {
      id: 'section-03',
      index: 'S',
      title: 'Architectural Convergence',
      summary: '3 Disparate Workflows → 1 Unified Pipeline.',
      body: `The transformation: Three siloed DSML features converged into a single platform layer. Progressive disclosure made complexity digestible while preserving depth for experts.

Validation insight: Non-technical users needed guided entry into NLQ. Technical users wanted accelerated paths to Predict Data controls. Both requirements could coexist through layered architecture.`,
      images: [
        {
          src: '/images/case-study/iq-plugin/IQ plugin - visual - 3 in 1 IQ Hub.png',
          alt: 'IQ Plugin - 3 in 1 Hub visual',
          caption: 'IQ Plugin visual: 3 in 1 IQ Hub — unified entry point bringing together Automated Insights, NLQ, and Predict Data into one cohesive experience.',
          fullWidth: true,
          sensitive: true,
        },
        {
          src: '/images/case-study/iq-plugin/IQ Wireframes.png',
          alt: 'IQ Plugin wireframes',
          caption: 'Low-fidelity wireframes for IQ components',
          sensitive: true,
        },
        {
          src: '/images/case-study/iq-plugin/IQ Navigation Tiles 1.png',
          alt: 'IQ Plugin navigation tiles',
          caption: 'IQ navigation tiles showing the four pillars: Automated Insights, Ask a Question, Predict Data, and Discover.',
          sensitive: true,
        },
        {
          src: '/images/case-study/iq-plugin/Structure Layout in HUB 1.png',
          alt: 'IQ Plugin structure layout in HUB',
          caption: 'IQ Plugin structure and layout within the WebFOCUS Hub.',
          sensitive: true,
        },
        {
          src: '/images/case-study/iq-plugin/Mockups for IQ Plugin Reponsive UI 1.png',
          alt: 'IQ Plugin responsive UI mockups',
          caption: 'Responsive UI mockups showing IQ across different screen sizes',
          sensitive: true,
        },
      ],
      subsections: [
        {
          title: 'The Evolution of the IQ Plugin',
          description: 'Design evolution showing the iterative process from early concept through multiple iterations to the final design.',
          sensitive: true,
          images: [
            {
              src: '/images/case-study/iq-plugin/Early concept.png',
              alt: 'IQ Plugin - Early concept',
              caption: 'Early concept exploration for IQ Plugin',
              sensitive: true,
            },
            {
              src: '/images/case-study/iq-plugin/Iteration 8.png',
              alt: 'IQ Plugin - Iteration 8',
              caption: 'Design iteration 8: Further refinements based on testing',
              sensitive: true,
            },
            {
              src: '/images/case-study/iq-plugin/Iteration 12.png',
              alt: 'IQ Plugin - Iteration 12',
              caption: 'Design iteration 12: Final refinements before high-fidelity',
              sensitive: true,
            },
          ],
        },
      ],
    },
    {
      id: 'section-04',
      index: 'I',
      title: 'System Iteration Log',
      summary: 'Validating shared patterns across 4 distinct data pillars.',
      body: `Prototyped and tested with both technical and non-technical users. Validated that a single interface pattern could serve diametrically opposed needs.

Final architecture: four interconnected pillars (Insights, NLQ, Predict, Discover) sharing consistent patterns—one cohesive system.`,
      subsections: [
        {
          title: 'IQ NLQ Workflow',
          description: 'Natural language query workflow within IQ Plugin — from empty state through data selection, query execution, and results visualization.',
          sensitive: true,
          images: [
            {
              src: '/images/case-study/iq-plugin/IQ - Ask a Question _ Empty State 1.png',
              alt: 'IQ NLQ - Empty state',
              caption: 'Empty state with tutorial guidance',
              sensitive: true,
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Ask a Question _ Data Selected 1.png',
              alt: 'IQ NLQ - Data selected',
              caption: 'Data selected, ready to ask questions',
              sensitive: true,
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Ask a Question - Vertical Stacked Bar 1.png',
              alt: 'IQ NLQ - Chart visualization',
              caption: 'Results visualized as vertical stacked bar chart',
              sensitive: true,
            },
          ],
        },
        {
          title: 'IQ Insights Workflow',
          description: 'Automated Insights workflow — generating instant summaries and patterns from datasets with filtering and visualization options.',
          sensitive: true,
          images: [
            {
              src: '/images/case-study/iq-plugin/IQ - Insights _ Empty State 1.png',
              alt: 'IQ Insights - Empty state',
              caption: 'Empty state with data selection prompt',
              sensitive: true,
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Insights _ Data Selected 1.png',
              alt: 'IQ Insights - Data selected',
              caption: 'Data selected, insights generating',
              sensitive: true,
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Insights - Tile View 1.png',
              alt: 'IQ Insights - Tile view',
              caption: 'Insights displayed in tile view',
              sensitive: true,
            },
          ],
        },
        {
          title: 'IQ ML Workflow (Predict Data)',
          description: 'Machine learning workflow within IQ — training models and running predictions with guided 4-step flow.',
          sensitive: true,
          images: [
            {
              src: '/images/case-study/iq-plugin/IQ - Predict Data - Train Models - landing page - model tile view.png',
              alt: 'IQ Predict Data - Train models landing',
              caption: 'Train models landing page with model tiles',
              sensitive: true,
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Predict Data - Train Model Workflow - Compare models.png',
              alt: 'IQ Predict Data - Compare models',
              caption: 'Model comparison view',
              sensitive: true,
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Predict Data - Train Model Workflow - Results - Fitted Values.png',
              alt: 'IQ Predict Data - Model results',
              caption: 'Model training results with fitted values',
              sensitive: true,
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Predict Data - Run Model - results.png',
              alt: 'IQ Predict Data - Results',
              caption: 'Model execution results',
              sensitive: true,
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Predict Data - Run Model - explanability.png',
              alt: 'IQ Predict Data - Explanability',
              caption: 'Model explanability visualization',
              sensitive: true,
            },
          ],
        },
        {
          title: 'IQ Preview Data Workflow',
          description: 'Preview Data workflow — exploring datasets with key analysis, sample data, and time-series views.',
          sensitive: true,
          images: [
            {
              src: '/images/case-study/iq-plugin/IQ - Preview Data Sample Tab 1.png',
              alt: 'IQ Preview Data - Sample tab',
              caption: 'Sample data tab view',
              sensitive: true,
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Preview Data Key Analysis Tab 1.png',
              alt: 'IQ Preview Data - Key analysis tab',
              caption: 'Key analysis tab with insights',
              sensitive: true,
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Preview Data Time-series report tab 1.png',
              alt: 'IQ Preview Data - Time-series tab',
              caption: 'Time-series report visualization',
              sensitive: true,
            },
          ],
        },
      ],
    },
    {
      id: 'section-05',
      index: 'G',
      title: 'Architectural Decision Records (ADR)',
      summary: 'Navigating zero-sum constraints where user needs and business goals collided.',
      body: `Every platform decision created downstream consequences. Choosing to standardize sacrificed short-term velocity but created compounding advantages across all feature teams.

Led alignment across multiple product teams because DSML reached everywhere. The architecture succeeded because teams understood the "why" behind every constraint.`,
    },
    {
      id: 'section-06',
      index: 'N',
      title: 'Strategic Outcomes',
      summary: 'How architectural unification drove organizational alignment before a single line of code was shipped.',
      body: `Before production rollout (summer 2026), usability tests validated the approach. The prototype was convincing enough that 3 PMs abandoned standalone roadmaps to commit to unified IQ.

The patterns defined for IQ became the official standard for all future Data Science tools in WebFOCUS.`,
    },
  ],
  // ----------------------------
  // PROTOTYPE MEDIA
  // ----------------------------
  prototypeMedia: {
    title: 'Transformation in Motion',
    description:
      'See the transformation unfold in real-time. Compare the three fragmented workflows with the new unified IQ Plugin design.',
    // Multiple before videos (3 old fragmented workflows) vs 1 new consolidated workflow
    multiBeforeAfter: {
      before: {
        title: 'Fragmented Workflows',
        videos: [
          {
            title: 'NLQ (Natural Language Query)',
            videoUrl: '/videos/iq-nlq-old-workflow.mp4',
            videoPoster: '/images/case-study/iq-plugin/iq-nlq-old-poster.jpg',
            description: 'Standalone NLQ workflow in Explore Data — separate entry point, different mental model.',
          },
          {
            title: 'Automated Insights',
            videoUrl: '/videos/iq-insights-old-workflow.mp4',
            videoPoster: '/images/case-study/iq-plugin/iq-insights-old-poster.jpg',
            description: 'Standalone Automated Insights workflow — another separate entry point with its own interface.',
          },
          {
            title: 'ML Functions (Predict Data)',
            videoUrl: '/videos/iq-ml-old-workflow.mp4',
            videoPoster: '/images/case-study/iq-plugin/iq-ml-old-poster.jpg',
            description: 'ML Functions from Reporting Server — moved to IQ Plugin, redesigned with unified patterns.',
          },
        ],
      },
      after: {
        title: 'Unified IQ Plugin',
        videoUrl: '/videos/iq-prototype-walkthrough.mp4',
        videoPoster: '/images/case-study/iq-plugin/iq-prototype-poster.jpg',
        description: 'The new unified IQ Plugin: all three DSML capabilities (NLQ, Insights, Predict Data) consolidated into one cohesive entry point with consistent patterns.',
      },
      comparisonNotes: {
        before: [
          'Three separate entry points',
          'Different mental models for each feature',
          'Users had to hunt for features',
          'Intimidating for non-technical users',
        ],
        after: [
          'Single unified entry point',
          'Consistent patterns across all features',
          'All DSML capabilities in one place',
          'Approachable for all user types',
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
        description: 'Diagnosed the architectural fracture: 3 engines, 0 shared roads. Identified the Guided Complexity differentiator.',
        systemLogic: "diagnose(silos[3]).identify(MarketGap);",
      },
      {
        letter: 'E',
        title: 'Mapping the Ecosystem',
        description: 'Mapped 4 user mental models. Designed dual-layer architecture serving both data scientists and business analysts.',
        systemLogic: "map(personas[4]).toPolymorphicWorkflow();",
      },
      {
        letter: 'S',
        title: 'Architectural Convergence',
        description: '3 disparate workflows → 1 unified pipeline. Progressive disclosure preserved depth while raising the floor.',
        systemLogic: "converge([Insights, NLQ, Predict]).into(IQPlugin);",
      },
      {
        letter: 'I',
        title: 'Iterate with Inclusion',
        description: 'Validated with both technical and non-technical users. Refined Discover page based on feedback.',
        systemLogic: "validate(DiscoverPage).with(allPersonas);",
      },
      {
        letter: 'G',
        title: 'Grow Through Constraints',
        description: 'Aligned 3 PMs around shared patterns. Moved org from Feature Teams to Platform Thinking.',
        systemLogic: "align(PMs[3]).shift(FeatureTeams, PlatformThinking);",
      },
      {
        letter: 'N',
        title: 'Navigate Forward',
        description: 'IQ is now the official North Star for WebFOCUS 2026. Design specs complete; engineering active.',
        systemLogic: "export { IQ } as WebFOCUS.roadmap.northStar;",
      },
    ],
  },
  // ----------------------------
  // IMPACT SUMMARY
  // ----------------------------
  impactSummary: {
    heading: 'Impact & Outcomes at a Glance',
    bullets: [
      'Centralized DSML capabilities into a single, unified entry point.',
      'Reduced learning curve via guided experiences and Discover content.',
      'Positive feedback from internal stakeholders and usability testing.',
      'Created a scalable pattern for future DSML features.',
      'Made DSML approachable for non-technical users without sacrificing depth for technical users.',
      'Competitive positioning with leading BI platforms while being more approachable.',
    ],
  },
  // ----------------------------
  // FINAL SUMMARY
  // ----------------------------
  finalSummary: {
    title: 'The Takeaway',
    body: `IQ unified DSML into one cohesive experience—making data science accessible from technical experts to everyday business users.

The patterns I developed here became part of my design vocabulary: progressive disclosure, dual-layer UX, ecosystem thinking. Advanced analytics doesn't have to be intimidating.`,
    keyPoints: [
      'Unified DSML capabilities into a single, approachable entry point.',
      'Designed for multiple personas representing different user types and DSML comfort levels.',
      'Applied progressive disclosure and dual-layer UX to balance simplicity with power.',
      'Created a scalable pattern for future DSML features within WebFOCUS.',
      'Competitive positioning with leading BI platforms while being more approachable.',
      'Strengthened ability to design advanced capabilities for real people.',
    ],
  },
  // ----------------------------
  // PASSWORD GATE
  // ----------------------------
  passwordGate: {
    password: 'anu-access',
    description: 'This case study contains confidential company information and cannot be made public. Enter the password to view the full case study.',
    learnItems: [
      'Complete system architecture and information design',
      'Multi-persona journey mapping and dual-layer UX patterns',
      'Step-by-step workflow details for NLQ, Insights, and Predict Data',
      'Competitive analysis and strategic positioning',
      'Cross-functional collaboration process with PM, engineering, and QA',
      'Behind-the-scenes design decisions and trade-offs',
    ],
  },
}
