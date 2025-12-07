import { CaseStudyData } from '@/types/caseStudy'

export const iqPluginCaseStudy: CaseStudyData = {
  slug: 'iq-plugin',
  heroTitle: 'IQ PLUGIN',
  heroSubheading: 'Designing for Business Outcomes',
  heroSubtitle:
    'Three powerful features, scattered across the platform. The PM had an idea to bring them together. I figured out how to make it work—and make it easy.',
  coverImage: {
    src: '/images/case-study/iq-plugin/IQ Navigation Tiles 1.png',
    alt: 'IQ Plugin Discover Page - Navigation Tiles',
  },
  role: 'UX Lead / Product Designer (Built from scratch)',
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
    title: 'IQ Plugin — Quick Impact Overview',
    subtitle: 'From scattered features to unified DSML Hub',
    whatTheSystemWas:
      'WebFOCUS had three powerful DSML features—NLQ, Insights, and ML—all shipping in 9.3.6. Not legacy. Not broken. Just... scattered. NLQ and Insights lived in the Plus menu (2 clicks). ML lived in the Reporting Server (2 clicks). All in different places. Users didn\'t even know half of this existed.',
    myRole:
      'PM came to me with an idea: "What if we brought these together?" No requirements. No specs. I owned it from there—defined the architecture, designed the flows, built the onboarding system, created the tutorial framework. Led alignment across engineering and product. Designed for business outcomes: competitive positioning, HUB adoption, DSML discoverability.',
    scopeOfPractice: [
      {
        tag: 'PRODUCT_DEFINITION',
        tagColor: 'blue',
        headline: 'End-to-End Ownership',
        body: 'From concept to complete design system—architecture, flows, onboarding, tutorials. Shaped the product direction.',
        icon: 'architect',
      },
      {
        tag: 'COMPETITIVE_POSITIONING',
        tagColor: 'amber',
        headline: 'Market Context',
        body: 'Competitors have DSML features. We focused on **making them easy to find and use**. That\'s the gap.',
        icon: 'archaeologist',
      },
      {
        tag: 'BUSINESS_FOCUS',
        tagColor: 'purple',
        headline: 'Designed for Outcomes',
        body: 'HUB adoption. DSML discoverability. **Connected design decisions to business goals**, not just user needs.',
        icon: 'strategist',
      },
      {
        tag: 'ACCESSIBILITY',
        tagColor: 'emerald',
        headline: 'Lowered the Barrier',
        body: '3 tools → 1 click. Tutorials built-in. **Data science accessible to business users**, not just experts.',
        icon: 'multiplier',
      },
    ],
    impactMetrics: [
      { label: 'Tools consolidated', value: '3-in-1' },
      { label: 'Clicks reduced', value: '-70%' },
      { label: 'Entry points', value: '1' },
      { label: 'Adoption increase', value: '↑ Projected' },
    ],
    star: {
      situation: 'Three DSML features existed but were scattered. Users didn\'t know they existed. Competitors were eating our lunch.',
      task: 'Create a unified DSML hub to drive discoverability and adoption—with almost no requirements.',
      action: 'Built the entire product vision from scratch. Designed the hub, the flows, the tutorial system, the Discover page. PM created tickets after I finished.',
      result: 'IQ Plugin: One-click access to all DSML. Built-in tutorials. Unified dataset selection. Shipping 2027.',
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
      title: 'Discover Deeply: The Business Case',
      summary: 'Not legacy. Not broken. Just invisible. Three modern features nobody could find.',
      body: `NLQ, Insights, and ML Functions—all shipping in WebFOCUS 9.3.6. Powerful features. Modern implementations. But scattered across the platform like Easter eggs.

**The Problem Wasn't Quality—It Was Discovery:**
- NLQ and Insights: buried in the Plus menu. 2 clicks minimum.
- ML Functions: hidden in the Reporting Server. 2 clicks, different context entirely.
- Users didn't even know half of this existed.

**Why This Mattered:**
1. **Competitive pressure.** Power BI and Tableau were marketing DSML hard. We had the capabilities—we just couldn't show them off.
2. **HUB adoption.** If users don't discover features, they don't use the platform.
3. **DSML adoption.** Data science capabilities are only valuable if people can find them.`,
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
      title: 'Empathize with the Ecosystem: Building from Nothing',
      summary: 'PM had an idea. I built the product.',
      body: `The PM walked in with a concept: "What if we brought NLQ, Insights, and ML together?" That was the entire brief. No wireframes. No requirements doc. No tickets. Just an idea.

**What I Built:**
- The entire information architecture
- The hub navigation system
- The unified dataset selection flow
- The Discover page with tutorials, documentation, and YouTube links
- The cross-feature workflow patterns

The PM created Jira tickets *after* I finished the designs. This wasn't design execution—this was product invention.`,
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
      title: 'Simplify the Chaos: The IQ Hub Architecture',
      summary: 'One click to access any of the 3 tools. Unified dataset selection. Built-in tutorials.',
      body: `**The Core Value Proposition:**
IQ Plugin creates a DSML Hub inside the main WebFOCUS Hub. One-click discoverability to access NLQ, Insights, or ML—features that previously required hunting through menus and switching contexts.

**Key Design Decisions:**
1. **Unified Dataset Selection:** Select one dataset, explore it across all 3 features. No re-selecting.
2. **Discover Page:** Not just a landing page—a learning hub with tutorials, documentation, and video links.
3. **Consistent Patterns:** Learn one workflow, know them all. Pattern parity across features.
4. **Progressive Disclosure:** Business users get guided paths. Power users get advanced controls. Same interface.`,
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
      title: 'Iterate with Inclusion: System Iteration Log',
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
      title: 'Grow Through Constraints',
      summary: 'Building a new product layer within an existing ecosystem.',
      body: `**Technical Reality:**
IQ Plugin lives inside WebFOCUS Hub. Every design decision had to respect existing patterns while pushing them forward.

**The Balancing Act:**
- Couldn't break existing NLQ/Insights users who knew the old entry points
- Had to make new entry point compelling enough that users would switch
- Needed to accommodate ML Functions redesign (shipping 2026) into the IQ framework (shipping 2027)

**My Approach:**
Don't fight the constraints—use them. The existing features weren't legacy. They just needed a better home.`,
    },
    {
      id: 'section-06',
      index: 'N',
      title: 'Navigate Forward: Strategic Impact',
      summary: 'From scattered features to platform differentiator.',
      body: `**Business Outcomes:**
- **Competitive Positioning:** WebFOCUS can now market DSML as a first-class feature, not a hidden capability
- **HUB Adoption:** IQ Plugin gives users a reason to live in the Hub
- **DSML Adoption:** One-click access means users actually discover and use the features

**What I Delivered:**
Not just designs—I defined the product. The PM had a vision; I built the reality. Tickets, specs, requirements—all came after the design was done.

**Shipping 2027.** NLQ and Insights in 9.3.6 now. ML Functions in 2026. IQ Plugin brings it all home.`,
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
        description: 'Identified the real problem: not broken features, but invisible ones. 3 powerful tools nobody could find.',
        systemLogic: "diagnose(discoverability).not(quality);",
      },
      {
        letter: 'E',
        title: 'Empathize with the Ecosystem',
        description: 'PM had an idea. I owned it from there—architecture, flows, onboarding, tutorial system.',
        systemLogic: "own(concept).to(productVision);",
      },
      {
        letter: 'S',
        title: 'Simplify the Chaos',
        description: '3 tools, 3 places → 1 hub, 1 click. Unified dataset selection. Tutorials built-in.',
        systemLogic: "consolidate([NLQ, Insights, ML]).into(IQHub);",
      },
      {
        letter: 'I',
        title: 'Iterate with Inclusion',
        description: 'Validated with 4 personas across comfort levels. Discover page refined through testing.',
        systemLogic: "validate(IQHub).with(allPersonas);",
      },
      {
        letter: 'G',
        title: 'Grow Through Constraints',
        description: 'Built within existing HUB ecosystem. Respected patterns while pushing them forward.',
        systemLogic: "design(within).constraints(existingHUB);",
      },
      {
        letter: 'N',
        title: 'Navigate Forward',
        description: 'Shipping 2027. NLQ + Insights live now. ML Functions in 2026. IQ Plugin brings it all home.',
        systemLogic: "ship(IQPlugin).timeline(2027);",
      },
    ],
  },
  // ----------------------------
  // IMPACT SUMMARY
  // ----------------------------
  impactSummary: {
    heading: 'Impact & Outcomes',
    bullets: [
      '3 scattered features → 1 unified DSML Hub',
      '1-click discoverability (down from 2+ clicks across different contexts)',
      'Built-in tutorials and documentation for self-service adoption',
      'Unified dataset selection across all 3 features',
      'Competitive positioning against Power BI, Tableau, Qlik',
      'PM had the idea. I built the entire product.',
    ],
  },
  // ----------------------------
  // FINAL SUMMARY
  // ----------------------------
  finalSummary: {
    title: 'The Takeaway',
    body: `From a PM's idea to a complete product vision. Defined the architecture. Designed every flow. Built the onboarding and tutorial system. Led alignment across teams.

IQ Plugin brings three scattered features into one home. One click to access NLQ, Insights, or ML. Tutorials built-in. Dataset selection unified. Enterprise data science, made accessible.`,
    keyPoints: [
      'End-to-end ownership from concept to design system',
      '3 tools → 1 hub. One-click access to all DSML capabilities.',
      'Discover page with tutorials, documentation, and video links',
      'Unified dataset selection—pick once, explore across all features',
      'Shipping 2027. NLQ + Insights live now. ML Functions in 2026.',
      'Designed for business outcomes—competitive positioning, adoption, discoverability.',
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
