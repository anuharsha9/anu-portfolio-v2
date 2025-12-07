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
      'I owned all three DSML workflows—NLQ, Insights, AND the IQ Hub that unified them. Not just the hub: I designed each individual feature\'s UI, ensured pattern consistency across all three, and made everything responsive. PM had the idea to unify; I built every piece of it.',
    scopeOfPractice: [
      {
        tag: 'FULL_OWNERSHIP',
        tagColor: 'blue',
        headline: 'Owned All 3 Workflows',
        body: 'Not just the hub—**I owned NLQ, Insights, AND IQ Plugin**. Designed each feature\'s complete UI and workflow.',
        icon: 'architect',
      },
      {
        tag: 'SYSTEM_CONSISTENCY',
        tagColor: 'amber',
        headline: 'Unified the Patterns',
        body: '**Ensured UI, structure, and interactions matched** across all 3 features. Learn one, know them all.',
        icon: 'archaeologist',
      },
      {
        tag: 'RESPONSIVE_DESIGN',
        tagColor: 'purple',
        headline: 'Made It All Responsive',
        body: 'Spent significant effort making **all 3 features work across screen sizes**. Enterprise BI, mobile-ready.',
        icon: 'strategist',
      },
      {
        tag: 'PERSONA_RESEARCH',
        tagColor: 'emerald',
        headline: 'Built 2 New Personas',
        body: '**Created 2 business user personas** from scratch. Inherited 2 technical personas. 4 total guiding the design.',
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
      title: 'Discover Deeply: The Foundation',
      summary: 'Three workflows. Three entry points. All designed by me.',
      // Body and images removed - IQWorkflowsBuilt component handles this visually
    },
    {
      id: 'section-02',
      index: 'E',
      title: 'Empathize with the Ecosystem: Who Are We Building For?',
      summary: 'Business users, not just BI experts. I built personas to prove it.',
      body: `We had technical users. We wanted business users. I built the research to make the case.

**2 personas created from scratch.** SME discussions, customer reps, AI synthesis. Targeted the business user gap—people who could benefit from DSML but weren't touching our tools.

**2 personas inherited.** Technical users we already understood. I mapped their journeys into the new system.

The architecture and data flows below show how all 4 personas navigate the unified system.`,
      images: [
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
      title: 'Iterate with Inclusion: Current vs. IQ Plugin',
      summary: 'Same features. Better discoverability. One unified hub.',
      body: `Three features existed in WebFOCUS 9.3.6. Not legacy—just scattered. NLQ and Insights buried in the Plus menu. ML hidden in the Reporting Server.

IQ Plugin brings them home. Same capabilities, now in one place. Drag the sliders below to compare.`,
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
        description: 'Owned all 3 workflows—NLQ, Insights, AND the hub. Ensured pattern consistency across everything.',
        systemLogic: "own([NLQ, Insights, IQHub]).unify(patterns);",
      },
      {
        letter: 'S',
        title: 'Simplify the Chaos',
        description: '3 tools, 3 places → 1 hub, 1 click. Made all 3 responsive. Same UI, any screen size.',
        systemLogic: "consolidate(all).responsive(true);",
      },
      {
        letter: 'I',
        title: 'Iterate with Inclusion',
        description: 'Validated with 4 personas across comfort levels. Refined patterns across all 3 features.',
        systemLogic: "validate(allFeatures).with(allPersonas);",
      },
      {
        letter: 'G',
        title: 'Grow Through Constraints',
        description: 'Built within existing HUB ecosystem. Every feature respects existing patterns while advancing them.',
        systemLogic: "design(within).constraints(existingHUB);",
      },
      {
        letter: 'N',
        title: 'Navigate Forward',
        description: 'NLQ + Insights live now. ML in 2026. IQ Plugin unifies all in 2027.',
        systemLogic: "ship(unified).timeline(2027);",
      },
    ],
  },
  // ----------------------------
  // IMPACT SUMMARY
  // ----------------------------
  impactSummary: {
    heading: 'Impact & Outcomes',
    bullets: [
      'Owned all 3 workflows: NLQ, Insights, AND the IQ Hub',
      'Ensured 100% pattern consistency across all 3 features',
      'Made all 3 features fully responsive across screen sizes',
      'Built 4 personas from research, SMEs, customer reps, AI',
      'Created unified dataset selection and onboarding system',
      'Competitive positioning against Power BI, Tableau, Qlik',
    ],
  },
  // ----------------------------
  // FINAL SUMMARY
  // ----------------------------
  finalSummary: {
    title: 'The Takeaway',
    body: `I didn't just create a hub—I owned the entire DSML surface. Designed NLQ. Designed Insights. Designed the IQ Hub that unified them. Made all three responsive. Ensured pattern consistency across every interaction.

PM had the vision to unify. I built every piece of it.`,
    keyPoints: [
      'Owned all 3 workflows: NLQ, Insights, AND the IQ Hub',
      '100% pattern consistency across all features',
      'All 3 features fully responsive',
      'Created 2 business user personas; inherited 2 technical',
      'Unified dataset selection and onboarding system',
      'Shipping 2027. NLQ + Insights live now. ML in 2026.',
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
