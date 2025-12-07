import { CaseStudyData } from '@/types/caseStudy'

export const mlFunctionsCaseStudy: CaseStudyData = {
  slug: 'ml-functions',
  // Blueprint Hero - Architect Design System
  heroTitle: 'Making Enterprise ML Usable for Non-Experts',
  heroSubheading: 'Turning a black-box data science process into a guided, 4-step workflow',
  heroSubtitle:
    'A true story of bringing practical, accessible machine learning to WebFOCUS users — especially those without data-science backgrounds. Turning a traditionally technical process into a guided, intuitive, low-friction experience.',
  coverImage: {
    src: '/images/case-study/ml-functions/ml-functions-cover.png',
    alt: 'ML Functions case study cover image',
  },
  role: 'UX Lead / UX Owner (End-to-End Ownership)',
  company: 'Cloud Software Group — WebFOCUS',
  timeframe: '2023–2025',
  status: {
    label: 'Shipping 2026',
    variant: 'shipping' as const,
  },
  scope: [
    'AI_UX',
    'Complex_Workflows',
    'Zero_to_One',
    'ML_Democratization',
    'Cross-functional Leadership',
  ],
  // ----------------------------
  // QUICK IMPACT OVERVIEW (Public)
  // ----------------------------
  quickOverview: {
    title: 'ML Functions — Quick Impact Overview',
    subtitle: 'Predictive analytics for non-technical users',
    whatTheSystemWas:
      'A fragmented 4+ step path: drag a "model pill" onto a data flow, configure in a popup, notice a tiny toolbar play icon, then face confusing "results not generated" errors. Hyperparameters were hidden behind right-click menus, accessible only after training.',
    myRole:
      'Self-learned ML from scratch—zero domain knowledge to leading the UX vision in weeks. Owned end-to-end redesign from ambiguity to production-ready 4-step guided workflow (launching 2026). Led weekly "UX + ML" meetings with the Principal Data Scientist, bridging technical complexity with user needs. Designed the confusion matrix that the DS called "the best screen in the entire UX revamp." Collaborated cross-functionally with product, engineering, and data science to ensure feasibility while maintaining accessibility.',
    scopeOfPractice: [
      {
        tag: 'DOMAIN_MASTERY',
        tagColor: 'blue',
        headline: 'ML Self-Education',
        body: '**Zero ML knowledge → MIT certification**. Embedded weekly with data scientists. Fluent enough to challenge technical assumptions.',
        icon: 'architect',
      },
      {
        tag: 'COMPLEXITY_TRANSLATION',
        tagColor: 'amber',
        headline: 'Black Box → Guided Flow',
        body: '**12+ clicks → 4-step wizard**. Confusion matrix the Principal DS called "the best screen in the entire UX revamp."',
        icon: 'archaeologist',
      },
      {
        tag: 'CROSS_FUNCTIONAL_BRIDGE',
        tagColor: 'purple',
        headline: 'UX + ML Alignment',
        body: '**Weekly syncs** with Data Science, Engineering, Product. Bridged technical feasibility with user accessibility.',
        icon: 'strategist',
      },
      {
        tag: 'TRUST_EARNED',
        tagColor: 'emerald',
        headline: 'Subject Matter Trust',
        body: 'Principal DS: **"That\'s why I trust you."** Deep understanding of explainability unlocked full creative ownership.',
        icon: 'multiplier',
      },
    ],
    credentials: 'Professional Certificate in Product Design for AI & ML — MIT, Boston',
    impactMetrics: [
      {
        label: 'SMEs who found Predict Data from right-click without help in usability tests',
        value: '5 / 5 (100% discoverability)',
      },
      {
        label: 'Steps to reach ML from the Hub (old: 12+ scattered clicks via data flows, cascading menus, and mental hops, new: right-click → Predict Data → smooth guided flow)',
        value: 'From 12+ clicks → 7-9',
      },
      {
        label: 'Ability to configure hyperparameters at the right time',
        value: 'From hidden, post-hoc-only settings → explicit Step 4 in the guided flow',
      },
      {
        label: 'Entry point to ML training',
        value: '2-click entry point (right-click → Predict Data)',
      },
      {
        label: 'Setup speed improvement',
        value: '50% faster setup through guided 4-step workflow',
      },
      {
        label: 'Configuration errors',
        value: '60% fewer configuration errors through inline validation and guided warnings',
      },
      {
        label: 'Dead-end errors in SME test sessions ("results not generated" confusion from the old UI)',
        value: 'Reduced to zero through inline validation and guided warnings',
      },
      {
        label: 'SMEs who described the new step workflow as "much easier" and "more guiding" than the previous data flow–based UI',
        value: '5 / 5 qualitative agreement',
      },
    ],
    star: {
      situation: 'Fragmented ML training. Hidden hyperparameters. "Results not generated" dead-ends. Opaque and error-prone.',
      task: 'Make ML accessible to non-technical users. Maintain power for experts.',
      action: 'Designed 4-step guided flow. Early validation. Dual-experience (guided + advanced). Eliminated dead-ends.',
      result: '100% discoverability. 12+ clicks → 7-9. Zero dead-end errors in testing.',
    },
    technologies: [
      'Figma',
      'User Research',
      'Competitive Analysis',
      'Usability Testing',
      'ML/AI Concepts',
      'Prototyping',
      'Stakeholder Alignment',
    ],
    keyAchievements: [
      'Achieved 100% discoverability in SME usability testing',
      'Reduced ML workflow from 12+ clicks to 7-9 clicks',
      'Delivered 2-click entry point, 50% faster setup, 60% fewer configuration errors',
      'Only designer who worked on all major WebFOCUS features; owned entire ML Functions redesign solo while simultaneously leading ReportCaster and IQ Plugin',
      'Onboarded 2 designers during maternity leave transition, ensuring seamless knowledge transfer and continuity',
      'Eliminated all dead-end "results not generated" errors',
      'Created dual-experience approach for technical and non-technical users',
      'Delivered organization-wide design demos to 150-200 person business unit, presenting ML workflow redesign',
      'Self-learned ML concepts and collaborated with Principal Data Scientist',
    ],
    dataSheetUrl: 'https://www.ibi.com/content/dam/ibi/documents/data-sheet/ibi-webFOCUS-integrated-data-science-data-sheet.pdf',
    dataSheetLabel: 'View ML Functions Data Sheet',
    demoVideoUrl: 'https://www.youtube.com/watch?v=VWxMJ0E5aL0',
    demoVideoLabel: 'Old UI Public Demo',
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
    title: 'Architectural Directives',
    intro: 'Defining the immutable rules required to move ML from a "Black Box" to a "Glass Box".',
    principles: [
      {
        title: 'The Glass Box Invariant.',
        description:
          'The system must never execute "Magic." Every automated decision (e.g., auto-cleaning data) must be surfaced, logged, and reversible by the user. Explainability first.',
      },
      {
        title: 'The Tunnel Invariant.',
        description:
          'Complex ML workflows must be serialized. Branching logic is permitted *internal* to a step, but the macro-flow must remain a rigid 1-2-3-4 linear tunnel to prevent abandonment. Linear constancy.',
      },
      {
        title: 'The Guardrail Invariant.',
        description:
          'Validation occurs *upstream.* The system shall not permit the user to proceed to "Training" if the dataset contains fatal errors (e.g., NaN values). Fail fast, fail early. Error preemption.',
      },
      {
        title: 'The Pulse Invariant.',
        description:
          'Long-running ML processes (>5s) must provide deterministic feedback. A spinning loader is insufficient; the system must broadcast "Training... Validating... Scoring..." status updates. System state visibility.',
      },
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
      summary: 'Took ownership of ML Functions redesign with zero ML background. Self-learned ML concepts while designing, becoming the bridge between data scientists and users.',
      body: '', // Removed - context established by hero, STAR, and VitalSigns components
      // Note: revealsPoints and images removed - now handled by MLPersonalChallenge component
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
      summary: 'Trust is the currency of innovation. Here\'s how I earned it — and used it to lead.',
      body: '', // Narrative removed - flow goes directly to visual components
    },
    {
      id: 'section-06',
      index: 'N',
      title: 'Navigate Forward: Impact, Validation, and Reflection',
      body: `SME tests validated the transformation: error-prone flow became navigable. Internal demos (150-200 people) earned leadership support. For the first time, ML in WebFOCUS felt demo-ready—understandable, not just technically correct.

The patterns I developed here—structured flows, inline teaching, right-click entry—became the foundation for IQ Plugin.`,
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
          caption: 'A visual representation of transforming ML complexity into accessible design. This project strengthened my foundational belief: power means nothing without accessibility. I redesign myself through difficult work — I thrive in technical ambiguity, starting as an "outsider" and becoming a trusted design leader.',
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
        description: 'Zero ML knowledge. MIT certification, weekly DS embedding, AI tools. Built context before designing.',
        systemLogic: "if (ml_knowledge === 0) { learn(courses, experts, AI); }",
      },
      {
        letter: 'E',
        title: 'Empathize with the Ecosystem',
        description: 'Bridged data scientists (depth) and business users (simplicity). Became the translator.',
        systemLogic: "bridge(DataScientist.depth, BusinessUser.clarity);",
      },
      {
        letter: 'S',
        title: 'Simplify the Chaos',
        description: 'Mapped workflows into structured guided flow. Eliminated dead-ends. Made ML digestible.',
        systemLogic: "return guidedFlow(chaos.reduce(patterns));",
      },
      {
        letter: 'I',
        title: 'Iterate with Inclusion',
        description: '10+ iterations on confusion matrix with Principal DS. Weekly UX + ML syncs. Technical accuracy meets UX clarity.',
        systemLogic: "for (let i = 0; i < 10; i++) refine(confusionMatrix);",
      },
      {
        letter: 'G',
        title: 'Grow Through Constraints',
        description: 'Pivoted from unified Train+Run to separate tabs. Removed data flow from ML UI. Constraints refined solution.',
        systemLogic: "pivot(unifiedView, separateTabs); // constraint-driven",
      },
      {
        letter: 'N',
        title: 'Navigate Forward',
        description: '5/5 SME discoverability. Patterns scaled to IQ Plugin. Structured flows became foundation.',
        systemLogic: "export patterns to IQPlugin; // 100% SME approval",
      },
    ],
  },
  // ----------------------------
  // IMPACT SUMMARY
  // ----------------------------
  impactSummary: {
    heading: 'Pre-launch impact at a glance',
    bullets: [
      '5/5 SMEs found Predict Data without help in usability tests',
      'Reduced workflow from 12+ clicks to 7-9 clicks via right-click entry and smooth guided flow',
      'Eliminated "results not generated" dead ends — zero confusion errors in testing',
      'All 5 SMEs described new workflow as "much easier" and "more guiding" than previous UI',
      'First time ML in WebFOCUS felt demo-ready for 150–200 person org-wide sessions',
      'Anticipated reduction in ML-related support requests based on improved error handling and guided workflow',
    ],
  },
  // ----------------------------
  // FINAL SUMMARY
  // ----------------------------
  finalSummary: {
    title: 'The Takeaway',
    body: `ML Functions transformed expert-only ML workflows into guided, accessible experiences. Non-technical users could train models within minutes.

The patterns I developed—structured guided flows, progressive disclosure, right-click entry—became the foundation for IQ Plugin.

Key insight: accessibility and power aren't opposites. They're complementary when designed together from the start.`,
    keyPoints: [
      'Transformed expert-only ML workflows into guided, accessible experiences — enabling non-technical users to train models within minutes',
      'Learned ML domain while designing, becoming trusted design leader making Principal-level decisions',
      'Patterns became reusable — structured guided flows, progressive disclosure, and right-click entry directly shaped IQ Plugin design',
      'Proved accessibility and power are complementary — the dual-experience approach balanced simplicity with expert flexibility',
    ],
  },
}
