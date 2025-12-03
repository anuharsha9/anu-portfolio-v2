import { CaseStudyData } from '@/types/caseStudy'

export const iqPluginCaseStudy: CaseStudyData = {
  slug: 'iq-plugin',
  heroTitle: 'IQ PLUGIN',
  heroSubheading: 'Unifying DSML inside the WebFOCUS hub',
  heroSubtitle:
    'Designing a single, intuitive entry point for automated insights, natural language questions, and predictive analytics — so both business users and data experts can actually use data science in their day-to-day work.',
  coverImage: {
    src: '/images/case-study/iq-plugin/iq-cover.png',
    alt: 'IQ Plugin case study cover image',
  },
  role: 'Senior Product Designer (Principal-level scope & impact)',
  company: 'Cloud Software Group — WebFOCUS',
  timeframe: '2023–2024',
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
      'I owned UX strategy, IA, primary workflows, personas/journey mapping, prototypes, usability testing, and cross-functional alignment with PM, engineering, and QA. IQ was the "front door" to DSML in WebFOCUS—a strategic initiative to stay competitive with platforms like Power BI, Tableau, and Qlik while being easier for non-technical users to adopt. I led design decisions that balanced technical depth with accessibility, making complex data science capabilities approachable for business users while maintaining power for experts. This required deep technical understanding, strategic product thinking, and Principal-level leadership across functions.',
    impactMetrics: [
      { label: 'Centralized DSML capabilities', value: 'Unified experience' },
      { label: 'Reduced learning curve', value: 'Improved discoverability' },
      { label: 'Positive feedback from stakeholders', value: 'Strong validation' },
      { label: 'Scalable pattern for future DSML features', value: 'Foundation for growth' },
      { label: 'Made DSML approachable for non-technical users', value: 'Broader adoption' },
      { label: 'Competitive positioning with leading BI platforms', value: 'Market alignment' },
    ],
    star: {
      situation: 'DSML features (Automated Insights, NLQ, Predict Data) were fragmented, hard to discover, and intimidating.',
      task: 'Unify DSML capabilities into a single, approachable entry point that works for both business users and data experts.',
      action: 'Designed a unified entry point that centralizes all DSML capabilities into one cohesive experience with dual-layer UX (guided for non-technical, advanced for experts).',
      result: 'Centralized DSML capabilities, improved discoverability, and made DSML approachable for non-technical users while maintaining competitive positioning.',
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
      'Mapped distinct user journeys for multiple personas representing different DSML comfort levels',
      'Created dual-layer UX balancing guided simplicity with expert flexibility',
      'Built scalable pattern for future DSML features',
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
    title: 'UX principles behind the IQ Plugin design',
    intro: 'The design applied established UX principles to balance depth for experts with accessibility for novices:',
    principles: [
      {
        title: 'Flexibility & Efficiency: Dual-layer experience',
        description:
          'Implemented Nielsen\'s flexibility heuristic through a guided "happy path" for novices with deeper configuration accessible to experts. Accelerators and shortcuts for frequent users without overwhelming beginners.',
      },
      {
        title: 'Consistency & Standards: Unified DSML mental model',
        description:
          'Applied consistency heuristics across Automated Insights, NLQ, and Predict Data. All features share the same interaction patterns, navigation, and visual language — creating one cohesive system, not fragmented tools.',
      },
      {
        title: 'Recognition over Recall: Learnable, discoverable interface',
        description:
          'Applied Nielsen\'s recognition heuristic through tooltips, contextual help, and a Discover page. Users learn by doing, with information visible when needed rather than requiring memorization of complex DSML concepts.',
      },
      {
        title: 'Aesthetic & Minimalist Design: Reduce cognitive clutter',
        description:
          'Applied Nielsen\'s minimalist design heuristic by prioritizing essential information and progressive disclosure. Clear labeling, contextual help, and guided steps replace dense configuration screens, making complex DSML feel approachable.',
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
      title: 'Discover Deeply: Understanding the DSML Fragmentation Problem',
      summary: 'Unified three fragmented DSML features (Automated Insights, NLQ, Predict Data) into one cohesive entry point, making DSML accessible for both business users and data experts.',
      methodologies: ['Persona Mapping', 'Journey Mapping', 'Competitive Analysis', 'Usability Testing'],
      body: `After ML Functions, I was asked to unify all DSML capabilities into a single entry point. The challenge: Automated Insights, NLQ, and Predict Data were fragmented — different entry points, different mental models. Users had to hunt for features; non-technical users found it intimidating.

I said yes immediately. Opportunity: unify these into one cohesive system, making DSML usable for real people — not just data scientists. The mandate: create a "front door" to DSML that competes with leading BI platforms — but more approachable.

Before IQ, DSML features were scattered. Automated Insights lived in one place, NLQ in another, Predict Data somewhere else. Each had its own entry point, its own mental model, its own learning curve.

I mapped where these features lived and how users found them. Users had to know where to look. Non-technical users found it intimidating. Technical users found it inefficient.

I also studied the competitive landscape. Power BI and Tableau were powerful but too technical. Qlik had usability issues. There was a clear gap: platforms were either too technical or had usability problems. IQ could win by being both powerful and approachable.

I explored the fragmentation problem, mapped user journeys, and built complete context about user needs and competitive landscape before designing the unified solution.`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'Ownership & Initiative → Took on IQ immediately, seeing opportunity to unify fragmented DSML',
        'Strategic Thinking → Unifying DSML makes advanced analytics accessible to real people',
        'Competitive Analysis → Identified gap in market for approachable yet powerful DSML',
        'Building on Previous Work → Applied ML Functions patterns to create cohesive DSML ecosystem',
      ],
      images: [
        {
          src: '/images/case-study/iq-plugin/Explore Data _ NLQ _ Empty State Illustration 1.png',
          alt: 'Explore Data NLQ - Standalone experience before IQ',
          caption: 'Standalone NLQ interface before IQ unification — showing the fragmented entry point.',
          sensitive: true,
        },
        {
          src: '/images/case-study/iq-plugin/Insights - Results - Tile View 1.png',
          alt: 'Explore Data Insights - Results view',
          caption: 'Insights results in standalone Explore Data experience before IQ unification.',
          sensitive: true,
        },
      ],
    },
    {
      id: 'section-02',
      index: 'E',
      title: 'Empathize with the Ecosystem: Designing for Multiple Personas',
      body: `I balanced multiple distinct personas with different DSML comfort levels. The central tension: keep depth for technical users without overwhelming business users. I designed dual-layer experiences that served both, ensuring IQ competed with leading BI platforms while being more approachable.

IQ needed to serve multiple distinct personas, each with different needs and comfort levels with data science. The central tension was simple: How do you keep the depth technical users need without overwhelming everyone else?

I mapped distinct journeys for each persona and balanced their needs through guided experiences, progressive disclosure, and consistent mental models. All four IQ pillars used the same interaction patterns, navigation, and visual language — making IQ feel like one cohesive system, not four separate tools.`,
      images: [
        {
          src: '/images/case-study/iq-plugin/IQ Structure flowchart.png',
          alt: 'IQ Plugin structure flowchart',
          caption: 'IQ Plugin structure flowchart showing information architecture and how the four pillars connect.',
          sensitive: true,
        },
        {
          src: '/images/case-study/iq-plugin/IQ Dataset Selection Workflow 2.png',
          alt: 'IQ Dataset selection workflow',
          caption: 'Dataset selection workflow across IQ features — consistent pattern across all pillars.',
          sensitive: true,
        },
      ],
    },
    {
      id: 'section-03',
      index: 'S',
      title: 'Simplify the Chaos: Unifying the DSML Experience',
      body: `I unified three DSML features into one cohesive experience. I prioritized patterns, applied progressive disclosure, and made DSML complexity digestible for non-technical users while maintaining depth for experts.

I started with low-fidelity flows for each IQ component: Automated Insights, Ask a Question (NLQ), Predict Data, and Discover. I built iterative prototypes tested with internal users — both technical and non-technical — to validate the dual-persona approach.

Multiple rounds of usability testing revealed key insights: non-technical users needed more hand-holding in the NLQ flow, technical users wanted faster access to advanced Predict Data controls, and the Discover page needed clearer examples. Feedback drove changes to NLQ question handling, Predict Data configuration options, and the Discover page structure.`,
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
      title: 'Iterate with Inclusion: Prototyping and Testing the Unified Experience',
      body: `I prototyped the unified entry point and conducted usability testing with both technical and non-technical users. I refined guided experiences based on feedback, ensuring the Discover page, tooltips, and contextual help actually helped users learn DSML concepts.

The final IQ experience breaks down into four interconnected pillars, each designed to feel like part of the same system: Automated Insights, Ask a Question (NLQ), Predict Data, and Discover. All four pillars use consistent interaction patterns, navigation, and visual language — making IQ feel like one cohesive system, not four separate tools.`,
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
      title: 'Grow Through Constraints: Challenges, Tradeoffs & Team Alignment',
      body: `Platform constraints, engineering limitations, and the need for consistency across three different DSML features forced architectural decisions. I applied ML Functions patterns (progressive disclosure, dual-layer UX) across the entire DSML ecosystem, creating scalable foundations.

Designing IQ required balancing competing needs: technical depth vs. simplicity, multiple personas, and cross-functional alignment.

I addressed each challenge through progressive disclosure, iterative testing with both user types, and regular collaboration with PM, engineering, and QA. A lot of cross-functional collaboration was required with IQ — I collaborated with PMs from other feature teams like HUB and Designer because DSML reached everywhere. This wasn't just about designing within IQ; it was about ensuring IQ's patterns and integrations worked seamlessly across the entire WebFOCUS ecosystem.

I onboarded the team onto the IQ vision and UX constraints through demos and documentation, ensuring consistency as the project evolved. The team could execute because they understood the "why" behind every decision, not just the "what."`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'Designing for multiple personas requires careful balance — not compromise, but thoughtful layering.',
        'Progressive disclosure is critical when features span technical and non-technical users.',
        'Cross-functional alignment is essential for complex initiatives like IQ — collaborated with PMs from HUB, Designer, and other feature teams because DSML reached everywhere.',
        'Team Alignment → Onboarded entire cross-functional team through demos and documentation',
      ],
    },
    {
      id: 'section-06',
      index: 'N',
      title: 'Navigate Forward: Impact, Validation, and Reflection',
      body: `Even before full production rollout (scheduled for summer 2026), IQ showed strong promise:

Internal usability tests highlighted how much easier it was to find and understand DSML features when everything lived in one place. Stakeholders and internal teams called out the clarity of the workflows and the balance between depth and simplicity.

The learning curve dropped: new users needed fewer explanations to get started, and non-technical users were more willing to try features they previously avoided.

IQ didn't just centralize DSML features — it changed how I think about designing advanced capabilities for real people. The project demonstrated that advanced capability doesn't have to mean advanced pain, and that thoughtful UX architecture can serve both technical experts and everyday business users. I learned that serving multiple distinct personas wasn't about compromise — it was about thoughtful layering, progressive disclosure, and consistent mental models.

IQ taught me to think in ecosystems, not just individual features. This wasn't about designing within IQ; it was about ensuring IQ's patterns and integrations worked seamlessly across the entire WebFOCUS ecosystem. I collaborated with PMs from HUB, Designer, and other feature teams because DSML reached everywhere. The patterns I developed (progressive disclosure, dual-layer UX, consistent interaction patterns) became foundational for the entire DSML experience. This work reinforced my ability to lead complex, multi-persona design initiatives that balance depth with accessibility.`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'I design for both power and approachability.',
        'I can unify advanced capabilities (DSML) into flows that are actually adoptable.',
        'I think beyond a single screen — IQ is about an ecosystem and how features relate to each other.',
        'Measurable Impact → Reduced learning curve, improved discoverability, positive stakeholder feedback',
        'I can lead complex, multi-persona design initiatives without compromising on depth or simplicity.',
        'I think in systems — IQ is about an ecosystem, not individual features.',
        'I build on previous work — IQ patterns built on ML Functions patterns, creating a cohesive DSML experience.',
      ],
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
  // PASSWORD GATE (IQ Plugin requires independent unlock)
  // ----------------------------
  passwordGate: {
    password: 'anu-access',
    description: 'This case study contains sensitive company information and requires password access.',
  },
  // ----------------------------
  // D.E.S.I.G.N. FRAMEWORK CONNECTION
  // ----------------------------
  frameworkConnection: {
    principles: [
      {
        letter: 'D',
        title: 'Discover Deeply',
        description: 'I mapped distinct user journeys for four personas and studied how DSML features were scattered across the platform. I built complete context about user needs and competitive landscape before designing the unified solution.',
      },
      {
        letter: 'E',
        title: 'Empathize with the Ecosystem',
        description: 'I balanced four distinct personas with different DSML comfort levels. The central tension: keep depth for technical users without overwhelming business users. I designed dual-layer experiences that served both, ensuring IQ competed with Power BI/Tableau while being more approachable.',
      },
      {
        letter: 'S',
        title: 'Simplify the Chaos',
        description: 'I unified three DSML features into one cohesive experience. I prioritized patterns, applied progressive disclosure, and made DSML complexity digestible for non-technical users while maintaining depth for experts.',
      },
      {
        letter: 'I',
        title: 'Iterate with Inclusion',
        description: 'I prototyped the unified entry point and conducted usability testing with both technical and non-technical users. I refined guided experiences based on feedback, ensuring the Discover page, tooltips, and contextual help actually helped users learn DSML concepts.',
      },
      {
        letter: 'G',
        title: 'Grow Through Constraints',
        description: 'Platform constraints, engineering limitations, and the need for consistency across three different DSML features forced architectural decisions. I applied ML Functions patterns (progressive disclosure, dual-layer UX) across the entire DSML ecosystem, creating scalable foundations.',
      },
      {
        letter: 'N',
        title: 'Navigate Forward',
        description: 'I built a scalable pattern for future DSML features, ensuring IQ could grow and extend. The patterns I developed (progressive disclosure, dual-layer UX, consistent mental models) became foundational for the entire DSML experience in WebFOCUS.',
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
    body: `The IQ Plugin project exemplifies my ability to lead complex DSML design initiatives, collaborate closely with technical teams, and deliver user-centered experiences that balance power with approachability.

IQ didn't just centralize DSML features — it changed how I think about designing advanced capabilities for real people. The patterns I developed became part of my design vocabulary and directly influenced how I approach complex, multi-persona design challenges.

IQ proved that advanced analytics doesn't have to be intimidating. By unifying DSML into one cohesive experience, we made data science accessible to everyone — from technical experts to everyday business users. That's the kind of impact I design for.`,
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
}
