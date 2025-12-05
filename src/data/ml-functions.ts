import { CaseStudyData } from '@/types/caseStudy'

export const mlFunctionsCaseStudy: CaseStudyData = {
  slug: 'ml-functions',
  heroTitle: 'ML FUNCTIONS',
  heroSubheading: 'Making enterprise ML usable for real people',
  heroSubtitle:
    'A true story of bringing practical, accessible machine learning to WebFOCUS users — especially those without data-science backgrounds. Turning a traditionally technical process into a guided, intuitive, low-friction experience.',
  coverImage: {
    src: '/images/case-study/ml-functions/ml-functions-cover.png',
    alt: 'ML Functions case study cover image',
  },
  role: 'Senior Product Designer (Principal-level scope & impact)',
  company: 'Cloud Software Group — WebFOCUS',
  timeframe: '2023–2025',
  status: {
    label: 'Shipping 2026',
    variant: 'shipping' as const,
  },
  scope: [
    'Enterprise UX',
    'ML workflows',
    'Information Architecture',
    'Step-based flows',
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
      'I came in with no ML background and self-learned through courses, constant questions to our domain expert, and AI tools to fill knowledge gaps. Over 6–8 months, I owned the end-to-end redesign of the ML training experience—from ambiguity to production-ready flows (launching in 2026). I was the only designer who worked on all major WebFOCUS features, leading 3 out of 4 Principal-level initiatives (ReportCaster, ML Functions, IQ Plugin) simultaneously. I owned the entire ML Functions redesign solo while simultaneously leading ReportCaster and IQ Plugin. I collaborated directly with Directors of Design, Engineering, and Product Management on strategic initiatives and architectural decisions. I led weekly "UX + ML" meetings, bridging technical complexity with user needs, and worked cross-functionally with product, engineering, and data science to ensure technical feasibility while maintaining accessibility. During maternity leave, I onboarded 2 designers, ensuring seamless knowledge transfer and continuity. This demonstrates my ability to rapidly acquire deep domain expertise, manage multiple complex projects simultaneously, and deliver Principal-level impact in unfamiliar territories.',
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
      situation: 'ML training was fragmented across 4+ steps, hidden behind right-click menus, and produced confusing "results not generated" errors.',
      task: 'Make ML training accessible to non-technical users while maintaining power for experts.',
      action: 'Designed a guided 4-step workflow with early validation, dual-experience approach (guided + advanced), and eliminated dead-end errors through inline feedback.',
      result: '100% discoverability in testing, reduced clicks from 12+ to 7-9, and zero dead-end errors.',
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
    title: 'UX principles behind the ML Functions redesign',
    intro: 'The redesign applied established UX principles to make ML accessible without dumbing it down:',
    principles: [
      {
        title: 'Progressive Disclosure: Complexity revealed gradually',
        description:
          'Applied progressive disclosure to break complex ML workflows into digestible steps. Show only what users need at each stage, preventing information overload while maintaining full functionality for experts.',
      },
      {
        title: 'Hick\'s Law & Cognitive Load: Step-based decision making',
        description:
          'Structured the experience as a linear journey (problem type → target → predictors → hyperparameters) to reduce decision time and cognitive overhead. Each step builds on the previous, minimizing choice paralysis.',
      },
      {
        title: 'Visibility of System Status: Transparent ML states',
        description:
          'Applied Nielsen\'s visibility heuristic to translate technical ML states into human-readable summaries. Users always know what the model is doing, what it means, and what actions are available — in plain language.',
      },
      {
        title: 'Error Prevention: Early validation, clear feedback',
        description:
          'Eliminated dead-end "results not generated" errors through early validation and inline feedback. Applied Nielsen\'s error prevention heuristic by catching issues before they become problems, with plain-language explanations.',
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
      methodologies: ['Self-Directed Learning', 'Domain Expert Collaboration', 'Competitive Analysis'],
      body: `The mandate was clear: make predictive modeling usable, understandable, and trustworthy — for analysts and everyday business users.

ML tools in the BI market were powerful but inaccessible to non-technical users. Existing predictive workflows required external tools, coding, or specialized knowledge.

WebFOCUS needed a native, guided, user-friendly predictive layer that fit naturally into its ecosystem.

I said yes to owning the end-to-end UX — from ambiguity to production-ready flows (launching in 2026).

I had no ML background, but that became a strength. I learned ML fast enough to design it responsibly through competitive analysis, online courses, constant questions to our domain expert, and AI tools to fill knowledge gaps.

This practical learning approach meant I could translate between data scientists and users. I became the bridge between technical complexity and human understanding, applying that learning directly to design decisions.

I designed with incomplete knowledge but high responsibility, using practical learning to make Principal-level decisions.`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        "I don't wait for expertise — I build it while designing, even when starting from zero knowledge",
        'I learn complex domains quickly through competitive analysis, courses, and relentless questions — then apply that learning directly to design decisions',
        'I build bridges between technical teams and end users by translating domain expertise into accessible UX patterns',
        'I design with incomplete knowledge but high responsibility, using practical learning to make Principal-level decisions',
      ],
      images: [
        {
          src: '/images/case-study/ml-functions/Legacy Explanability UI.png',
          alt: 'Legacy Explanability UI',
          caption: 'Legacy Explanability UI - Before redesign',
          sensitive: true,
        },
        {
          src: '/images/case-study/ml-functions/Legacy Run Model Landing Page.png',
          alt: 'Legacy Run Model Landing Page',
          caption: 'Legacy Run Model Landing Page - Before redesign',
          sensitive: true,
        },
        {
          src: '/images/case-study/ml-functions/Legacy Train Model UI.png',
          alt: 'Legacy Train Model UI',
          caption: 'Legacy Train Model UI - Before redesign',
          sensitive: true,
        },
      ],
    },
    {
      id: 'section-02',
      index: 'E',
      title: 'Empathize with the Ecosystem: Understanding Users and Workflows',
      summary: 'Documented the fragmented 4+ step ML workflow, identified pain points, and mapped user journeys to understand how different personas interacted with ML capabilities.',
      methodologies: ['Workflow Mapping', 'User Journey Analysis', 'Usability Testing', 'Iterative Prototyping'],
      body: `I designed for the entire ML ecosystem: data scientists who needed technical depth, business users who needed simplicity, and analysts who needed both. I translated between domain expertise and non-technical users' need for clarity, becoming the bridge that made ML accessible.

The existing ML experience was opaque. I documented every workflow step, every user decision point, and every place where users got stuck.

Even after I understood it, I found it frustrating and unintuitive. If a designer who knows the system finds it irritating, a new user trying to adopt ML for the first time has almost no chance.

That realization directly pushed me toward inventing a guided, step-based workflow.`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'Reverse-engineer systems → translate technical to user language',
        'Document workflows exhaustively → principled redesign foundation',
        'Three critical pivots → simplified UX and implementation',
      ],
      subsections: [
        {
          title: 'Workflow Planning & Architecture',
          description: 'Systematic mapping of the existing workflow, user journeys, and system architecture to inform the redesign strategy. These diagrams became the foundation for understanding how users thought about ML workflows and how the system architecture needed to support the new guided experience.',
          sensitive: true,
          images: [
            {
              src: '/images/case-study/ml-functions/1. ML UI Structure.png',
              alt: 'ML UI Structure',
              caption: 'ML UI Structure: The system architecture and information architecture that became the foundation for the redesign, mapping how users think about ML workflows within WebFOCUS',
              fullWidth: true,
              sensitive: true,
            },
            {
              src: '/images/case-study/ml-functions/Overview of ML workflow based on user.png',
              alt: 'Overview of ML workflow based on user',
              caption: 'Overview of ML workflow based on user: User-based workflow mapping',
              sensitive: true,
            },
            {
              src: '/images/case-study/ml-functions/ML functions inital workflow.png',
              alt: 'ML functions initial workflow',
              caption: 'ML functions initial workflow: Early workflow planning',
              sensitive: true,
            },
            {
              src: '/images/case-study/ml-functions/all model types architecture map.png',
              alt: 'All model types architecture map',
              caption: 'All model types architecture map: Complete system architecture',
              fullWidth: true,
              sensitive: true,
            },
          ],
        },
      ],
    },
    {
      id: 'section-03',
      index: 'S',
      title: 'Simplify the Chaos: From Black Box to Guided Flow',
      summary: 'Documented the fragmented 4+ step ML workflow, identified pain points, and designed a structured 4-step guided flow that reduced clicks from 12+ to 7-9.',
      methodologies: ['Workflow Mapping', 'User Journey Analysis', 'Usability Testing', 'Iterative Prototyping'],
      body: `The mapping revealed the problems, but solving them required multiple iterations. Three critical pivots shaped the final design.

Breakthrough: structured guided flow based on what a model needs to train responsibly. Our domain expert's answer to "What do you absolutely need?" → problem type, target, predictors, hyperparameters. That became the UX spine.`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'Reverse-engineer systems → translate technical to user language',
        'Structure from domain expertise → structured guided flow from "What do you absolutely need?"',
        'Design for multiple users → personas drive decisions (Techy Analyst: right-click entry, non-technical: guided flows)',
      ],
      subsections: [
        {
          title: 'Early Ideation: Hand-Drawn Wireframes',
          description: 'The design process started with hand-drawn wireframes — capturing initial thoughts, exploring different approaches, and mapping out the user journey before moving to digital tools.',
          images: [
            {
              src: '/images/case-study/ml-functions/Machine learning functions-handdrawn-wireframes.png',
              alt: 'Machine learning functions hand-drawn wireframes',
              caption: 'Hand-drawn wireframes: The foundation of the ML Functions redesign — early ideation, concept exploration, and workflow mapping',
              fullWidth: true,
            },
          ],
        },
      ],
    },
    {
      id: 'section-04',
      index: 'I',
      title: 'Iterate with Inclusion: Balancing Control with Simplicity',
      body: `After mapping the existing workflow and understanding the problems (Section 02), and designing the structured guided flow (Section 03), I needed to set up the right structure to actually solve them. This wasn't just a design project — it was a cross-functional collaboration that I effectively led over 6–8 months of iterative work.

I worked with Product to co-define scope, with Engineering to validate feasibility, with Data Scientists to validate ML logic, and with SMEs to exercise flows. Working remotely, collaboration happened through weekly "UX + ML" meetings, shared Figma files, async documentation, and screen-shared design reviews. With our domain expert, collaboration was constant and deeply detailed — despite being remote, we maintained close alignment through structured meetings and clear documentation. The confusion matrix screen alone went through 10+ iterations as we aligned on layout, order of tabs, and what users should see first after training. He often pushed for more advanced metrics; I pushed for clarity and scan-ability. That tension produced the best results — he called it "the best screen in the entire UX revamp."`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'I lead cross-functional teams through complex technical projects over 6–8 month timelines, managing constraints and juggling multiple projects',
        'I translate between technical and user perspectives by learning enough to say "no" to scope creep while earning respect from domain experts',
        'I make Principal-level decisions with incomplete but sufficient knowledge — moving from "outsider learning ML" to trusted design leader',
      ],
      subsections: [
        {
          title: 'Multiple ways to launch ML Functions from the HUB',
          description: 'Right-click entry points driven by Techy Analyst persona. Users access Predict Data via right-click on dataset/folder or +Data menu — 100% discoverability in testing.',
          sensitive: true,
          images: [
            {
              src: '/images/case-study/ml-functions/Launch ML from the HUB - right click dataset.png',
              alt: 'Launch ML from the HUB - right click dataset',
              caption: 'Right-click on dataset: Access Predict Data directly from data source',
              sensitive: true,
            },
            {
              src: '/images/case-study/ml-functions/Launch ML from the HUB - right click folder.png',
              alt: 'Launch ML from the HUB - right click folder',
              caption: 'Right-click on folder: Access Predict Data from folder context menu',
              sensitive: true,
            },
            {
              src: '/images/case-study/ml-functions/Launch ML from the HUB - right click +Data button.png',
              alt: 'Launch ML from the HUB - right click +Data button',
              caption: '+Data button menu: Predict Data as first-class feature in Hub',
              sensitive: true,
            },
          ],
        },
        {
          title: 'The main step workflow UI',
          description: 'Structured guided flow: problem type → target → predictors → hyperparameters. Based on our domain expert\'s "What do you absolutely need?" — makes ML feel like a guided tour, not a black box.',
          sensitive: true,
          images: [
            {
              src: '/images/case-study/ml-functions/4. Train Model Workflow - Step 1 - Select Problem Type.png',
              alt: 'Train Model Workflow - Step 1 - Select Problem Type',
              caption: 'Step 1: Select Problem Type (classification/regression)',
              sensitive: true,
            },
            {
              src: '/images/case-study/ml-functions/5. Train Model Workflow - Step 2 - Specify Problem.png',
              alt: 'Train Model Workflow - Step 2 - Specify Problem',
              caption: 'Step 2: Specify Problem details',
              sensitive: true,
            },
            {
              src: '/images/case-study/ml-functions/6. Train Model Workflow - Step 3 - Select Predictors.png',
              alt: 'Train Model Workflow - Step 3 - Select Predictors',
              caption: 'Step 3: Select Predictors and features',
              sensitive: true,
            },
            {
              src: '/images/case-study/ml-functions/7. Train Model Workflow - Step 4 - Configure Hyperparameters.png',
              alt: 'Train Model Workflow - Step 4 - Configure Hyperparameters',
              caption: 'Step 4: Configure Hyperparameters (optional for experts)',
              sensitive: true,
            },
          ],
        },
        {
          title: 'Prototyping and Testing',
          description: `The biggest design challenge: how much control to expose? Too much = intimidating. Too little = limiting for experts.

Solution: Layered disclosure serving multiple user types. Worked with data scientists to identify what to show, hide, or make optional. Result: simple for beginners, powerful for experts.

I worked through 10+ iterations on confusion matrix and results screens with our domain expert, balancing technical accuracy with UX clarity. He often pushed for more advanced metrics; I pushed for clarity and scan-ability. That tension produced the best results — he called it "the best screen in the entire UX revamp."

We surface edge cases early in plain language. SME testing: zero "I don't know what to do" moments. Invalid inputs? Users knew exactly what to change.`,
        },
        {
          title: 'Component Design',
          description: 'Design system with ML-specific patterns. 12-column grid ensures 4-step workflow works across screen sizes.',
          sensitive: true,
          images: [
            {
              src: '/images/case-study/ml-functions/12 Column Grid for the Step Workflow.png',
              alt: '12 Column Grid for the Step Workflow',
              caption: '12 Column Grid for Step Workflow: The responsive grid system that ensures the 4-step workflow works seamlessly across screen sizes while maintaining design system consistency',
              fullWidth: true,
              sensitive: true,
            },
            {
              src: '/images/case-study/ml-functions/Important Styling and Structure Decisions w/Model Tile UI Guide.png',
              alt: 'Model Tile UI Guide',
              caption: 'Model Tile UI Guide: Component-level design precision for model cards — a key pivot from legacy tables that improved scanning and comparison, despite initial pushback',
              fullWidth: true,
              sensitive: true,
            },
          ],
        },
        {
          title: 'Model Details UI',
          description: 'Advanced metrics balancing DS needs (comprehensive) with user needs (scannable). Made complex outputs accessible.',
          sensitive: true,
          images: [
            {
              src: '/images/case-study/ml-functions/10. Binary Classfication - ROC Precision.png',
              alt: 'Binary Classification - ROC Precision',
              caption: 'ROC Precision: One of the advanced metrics screens that balances data scientist needs (comprehensive metrics) with user needs (scannable, understandable results)',
              sensitive: true,
            },
            {
              src: '/images/case-study/ml-functions/17. Optimize Model Popup.png',
              alt: 'Optimize Model Popup',
              caption: 'Optimize Model: Advanced controls for expert users — showing how we made Steps 3 and 4 editable post-training while locking Steps 1 and 2 to preserve modeling intent',
              sensitive: true,
            },
          ],
        },
        {
          title: 'Significant UI screens',
          description: 'Confusion matrix: 10+ iterations. Balanced DS priorities (metrics, accuracy) with UX (clarity, scan-ability).',
          quote: {
            text: "This is the best screen in the entire UX revamp — I couldn't have designed it better.",
            attribution: 'Principal Data Scientist',
          },
          sensitive: true,
          images: [
            {
              src: '/images/case-study/ml-functions/8. Train Model Workflow - Compare Models.png',
              alt: 'Train Model Workflow - Compare Models',
              caption: 'Compare Models: View and compare multiple trained models side by side — the model cards approach that replaced legacy tables, improving scanning and decision-making',
              sensitive: true,
            },
          ],
        },
        {
          title: 'Explanability UI',
          description: 'Explains why predictions were made. Transforms complex outputs into accessible insights, building trust.',
          sensitive: true,
          images: [
            {
              src: '/images/case-study/ml-functions/6. Run Model -  Explanability Popup.png',
              alt: 'Run Model - Explanability Popup',
              caption: 'Explanability Popup: The workflow culmination — making ML understandable and trustworthy by explaining why predictions were made, transforming complex model outputs into accessible insights',
              sensitive: true,
            },
          ],
        },
        {
          title: 'Entry Points',
          description: 'Empty state explains capabilities. Landing page provides clear entry to Train or Run workflows.',
          sensitive: true,
          images: [
            {
              src: '/images/case-study/ml-functions/1. Predict Data - Train Models - Empty State.png',
              alt: 'Predict Data - Train Models - Empty State',
              caption: 'Empty State: Initial view when no models exist — explains what ML Functions can do and guides users to start training their first model',
              sensitive: true,
            },
          ],
        },
      ],
    },
    {
      id: 'section-05',
      index: 'G',
      title: 'Grow Through Constraints: Aligning and Leading the Team',
      body: `After prototyping and testing the structured guided flow (Section 04), I needed to align the team and ensure technical feasibility. This wasn't just a design project — it was a cross-functional collaboration that I effectively led over 6–8 months of iterative work.

I led alignment across product, engineering, data science, and QA: co-defined scope with product, validated feasibility with engineering, validated ML logic with data scientists, and collaborated with QA on test cases.

Working remotely, collaboration happened through weekly "UX + ML" meetings, shared Figma files, async documentation, and screen-shared design reviews.

With our domain expert, collaboration was constant and deeply detailed — despite being remote, we maintained close alignment through structured meetings and clear documentation.

I was also redesigning ReportCaster simultaneously while having a 1 year old at home. This taught me to prioritize ruthlessly: architecture first, polish second.

I learned to delegate — identifying what only I could do (UX architecture, team alignment) versus what could be handed off (UI polish). The team could execute because they understood the "why" behind every decision, not just the "what."`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'I lead cross-functional teams through complex technical projects over 6–8 month timelines, managing constraints and juggling multiple projects',
        'I translate between technical and user perspectives by learning enough to say "no" to scope creep while earning respect from domain experts',
        'I make Principal-level decisions with incomplete but sufficient knowledge — moving from "outsider learning ML" to trusted design leader',
      ],
      images: [
        {
          src: '/images/case-study/ml-functions/ml-leading-team',
          alt: 'ML Functions leading team collaboration',
          caption: 'Leading the team: Weekly UX + ML meeting notes, whiteboard sketches, and design iterations showing the cross-functional collaboration process',
        },
      ],
    },
    {
      id: 'section-06',
      index: 'N',
      title: 'Navigate Forward: Impact, Validation, and Reflection',
      body: `Validation from SME tests and org-wide demos: transformed intimidating, error-prone flow into understandable, navigable experience.

Internal demos (150-200 people) received strong leadership support. First time ML in WebFOCUS felt demo-ready — understandable and teachable, not just technically correct.

The patterns developed here (structured guided flows, inline teaching, right-click entry) directly shaped IQ Plugin.

This project taught me that you don't need to become a domain expert to design responsibly. You need to learn fast enough to translate between domain expertise and user needs, then make principled decisions about what to expose and what to hide.

I started as an "outsider" learning ML, and became a trusted design leader making Principal-level decisions. That transformation — learning while designing, translating complexity into clarity — became a core part of how I approach technical design challenges.`,
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
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'Enable new capabilities → all SMEs found Predict Data without help, "much easier" workflow',
        'Eliminate barriers → zero dead-ends, demo-ready for 150-200 person sessions',
        'Create strategic value → gateway for ML adoption, not niche expert-only',
        'Redesign myself through difficult work → learned ML domain while designing, becoming trusted design leader',
        'Make complex systems accessible while respecting the science',
      ],
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
        description: 'I self-learned ML through courses, constant questions to our domain expert, and AI tools. I studied competitive landscapes, mapped user journeys, and built complete context before designing any solutions.',
      },
      {
        letter: 'E',
        title: 'Empathize with the Ecosystem',
        description: 'I bridged two worlds: data scientists who needed technical depth and business users who needed simplicity. I translated between domain expertise and non-technical users\' need for clarity, becoming the bridge that made ML accessible.',
      },
      {
        letter: 'S',
        title: 'Simplify the Chaos',
        description: 'I mapped the existing workflow and clustered it into a structured guided flow. I prioritized patterns, eliminated dead-end errors, and made ML complexity digestible for non-technical users while maintaining power for experts.',
      },
      {
        letter: 'I',
        title: 'Iterate with Inclusion',
        description: 'I worked through 10+ iterations on confusion matrix and results screens with our domain expert, balancing technical accuracy with UX clarity. Weekly "UX + ML" meetings ensured technical accuracy met user understanding.',
      },
      {
        letter: 'G',
        title: 'Grow Through Constraints',
        description: 'ML technical constraints, engineering limitations, and the need for platform integration forced hard choices. I pivoted from unified Train+Run view to separate tabs, removed data flow from ML UI despite pushback — each constraint refined the solution.',
      },
      {
        letter: 'N',
        title: 'Navigate Forward',
        description: 'I conducted usability testing with 5 SMEs (100% discoverability), iterated based on feedback, and ensured the patterns I developed (structured guided flows, progressive disclosure) could scale to future ML features and directly shape IQ Plugin.',
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
    body: `ML Functions transformed expert-only ML workflows into guided, accessible experiences — enabling non-technical users to train models within minutes.

The patterns I developed here (structured guided flows, progressive disclosure, right-click entry) directly shaped IQ Plugin.

The key insight: you don't need to become a domain expert to design responsibly. You need to learn fast enough to translate between domain expertise and user needs, then make principled decisions about what to expose and what to hide.

ML Functions proved that accessibility and power aren't opposites — they're complementary when you design with both in mind from the start.`,
    keyPoints: [
      'Transformed expert-only ML workflows into guided, accessible experiences — enabling non-technical users to train models within minutes',
      'Learned ML domain while designing, becoming trusted design leader making Principal-level decisions',
      'Patterns became reusable — structured guided flows, progressive disclosure, and right-click entry directly shaped IQ Plugin design',
      'Proved accessibility and power are complementary — the dual-experience approach balanced simplicity with expert flexibility',
    ],
  },
}
