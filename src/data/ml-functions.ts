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
  role: 'Senior Product Designer (Principal-level scope)',
  company: 'Cloud Software Group — WebFOCUS',
  timeframe: '2023–2024',
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
    subtitle: 'Democratizing predictive analytics for non-technical users',
    whatTheSystemWas:
      'The old ML experience forced users through a fragmented 4+ step path: drag a "model pill" onto a data flow, configure in a popup, notice a tiny toolbar play icon, then face confusing "results not generated" errors. Hyperparameters were hidden behind right-click menus, accessible only after training. WebFOCUS needed a native, guided, user-friendly predictive layer that fit naturally into its ecosystem — not a bolt-on that required external tools or coding.',
    myRole:
      'I came in with no ML background and self-learned through courses, constant questions to the Principal Data Scientist, and AI tools to fill knowledge gaps. Over 6–8 months, I owned the end-to-end redesign of the ML training experience, leading weekly "UX + ML" meetings and working cross-functionally with product, engineering, and data science to ensure technical feasibility while maintaining accessibility.',
    keyActions: [
      'Studied competitive landscape (Power BI, Tableau, Qlik Sense) to identify what worked, what failed, and where we could differentiate.',
      'Mapped user journeys for Techy Analyst (power user) and non-technical business users, connecting personas directly to design decisions.',
      'Designed a structured 4-step flow based on Principal Data Scientist input: problem type → target → predictors → hyperparameters.',
      'Created dual-experience approach: guided workflow for non-technical users, advanced controls for technical users — in the same interface.',
      'Eliminated "results not generated" dead ends through early validation and inline error messages in plain language.',
      'Worked through 10+ iterations on confusion matrix and results screens with Principal Data Scientist, balancing his domain expertise with my UX clarity.',
      'Conducted usability testing with 5 SMEs — all found Predict Data via right-click without help, all described new workflow as "much easier" and "more guiding".',
      'Led design evolution: tried unified Train+Run view, pivoted to separate tabs; removed data flow from ML UI despite engineering pushback.',
    ],
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
        label: 'Dead-end errors in SME test sessions ("results not generated" confusion from the old UI)',
        value: 'Reduced to zero through inline validation and guided warnings',
      },
      {
        label: 'SMEs who described the new step workflow as "much easier" and "more guiding" than the previous data flow–based UI',
        value: '5 / 5 qualitative agreement',
      },
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
    intro: 'The redesign was guided by principles that balance ML complexity with user accessibility:',
    principles: [
      {
        title: 'Progressive disclosure over information overload',
        description:
          'Break complex ML concepts into digestible steps. Show only what users need at each stage, with contextual help available when needed — never dump all controls at once.',
      },
      {
        title: 'Reduce cognitive load via step-based flows',
        description:
          'Structure the experience as a clear, linear journey: problem type → target → predictors → hyperparameters. Each step builds on the previous, reducing mental overhead.',
      },
      {
        title: 'Make states, models, and errors visible and understandable',
        description:
          'Translate technical ML states into human-readable summaries. Show what the model is doing, what it means, and what users can do next — in plain language.',
      },
      {
        title: 'Match the platform mental model',
        description:
          'Integrate seamlessly with WebFOCUS patterns: hub navigation, + menu, modals/panels. ML Functions should feel native, not bolted on.',
      },
      {
        title: 'Safe defaults with expert flexibility',
        description:
          'Provide guided, error-proof flows for non-technical users while allowing advanced users to adjust parameters, algorithms, and training configuration when needed.',
      },
      {
        title: 'Teach while enabling',
        description:
          'Use tooltips, wizards, onboarding text, and inline explanations to educate users about ML concepts as they use the tool — without overwhelming them.',
      },
    ],
  },
  // ----------------------------
  // SECTIONS (Password-protected deep dive)
  // ----------------------------
  sections: [
    {
      id: 'section-01',
      index: '01',
      title: 'How I Landed the Project',
      body: `The mandate was clear: make predictive modeling usable, understandable, and trustworthy — for analysts and everyday business users.

ML tools in the BI market were powerful but inaccessible to non-technical users. Existing predictive workflows required external tools, coding, or specialized knowledge. WebFOCUS needed a native, guided, user-friendly predictive layer that fit naturally into its ecosystem.

I said yes to owning the end-to-end UX — from ambiguity to production-ready flows (launching in 2026).

Only later did I realize the challenge: I had no ML background. Zero. But that became a strength. I had to learn ML fast enough to design it responsibly, which meant I could translate between data scientists and users. I became the bridge between technical complexity and human understanding.`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        "I don't wait for expertise — I build it while designing, even when starting from zero knowledge",
        'I operate at the intersection of technical complexity and user needs, becoming the bridge between domain experts and end users',
        'I design responsibly even when learning on the job — turning my outsider perspective into a strength for translation',
      ],
      images: [
        {
          src: '/images/case-study/ml-functions/Legacy Explanability UI.png',
          alt: 'Legacy Explanability UI',
          caption: 'Legacy Explanability UI - Before redesign',
        },
        {
          src: '/images/case-study/ml-functions/Legacy Run Model Landing Page.png',
          alt: 'Legacy Run Model Landing Page',
          caption: 'Legacy Run Model Landing Page - Before redesign',
        },
        {
          src: '/images/case-study/ml-functions/Legacy Run Models Results Page.png',
          alt: 'Legacy Run Models Results Page',
          caption: 'Legacy Run Models Results Page - Before redesign',
        },
        {
          src: '/images/case-study/ml-functions/Legacy Compare Models UI.png',
          alt: 'Legacy Compare Models UI',
          caption: 'Legacy Compare Models UI - Before redesign',
        },
        {
          src: '/images/case-study/ml-functions/Legacy Train Model UI.png',
          alt: 'Legacy Train Model UI',
          caption: 'Legacy Train Model UI - Before redesign',
        },
        {
          src: '/images/case-study/ml-functions/Legacy Train Model Resuls UI.png',
          alt: 'Legacy Train Model Results UI',
          caption: 'Legacy Train Model Results UI - Before redesign',
        },
      ],
    },
    {
      id: 'section-02',
      index: '02',
      title: 'Learning ML Fast Enough to Design It Responsibly',
      body: ``,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'I learn complex domains quickly through competitive analysis, courses, and relentless questions — then apply that learning directly to design decisions',
        'I build bridges between technical teams and end users by translating domain expertise into accessible UX patterns',
        'I design with incomplete knowledge but high responsibility, using practical learning to make Principal-level decisions',
      ],
    },
    {
      id: 'section-03',
      index: '03',
      title: 'Mapping the Existing Black-Box Workflow',
      body: `The existing ML experience was fragmented and opaque. I documented every workflow step, every user decision point, and every place where users got stuck. This mapping became the foundation for the redesign.

Even after I understood it, I found it frustrating and unintuitive. If a designer who knows the system finds it irritating, a new user trying to adopt ML for the first time has almost no chance. That realization directly pushed me toward inventing a guided, step-based workflow.

The mapping revealed the problems, but solving them required multiple iterations. Three critical pivots shaped the final design.`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'Reverse-engineer systems → translate technical to user language',
        'Document workflows exhaustively → principled redesign foundation',
        'Three critical pivots → simplified UX and implementation',
      ],
      subsections: [
        {
          title: 'Early Ideation: Hand-Drawn Wireframes',
          description: 'The design process started with hand-drawn wireframes — capturing initial thoughts, exploring different approaches, and mapping out the user journey before moving to digital tools. This foundational work informed every decision in the final design, including the critical pivot to separate Train and Run workflows.',
          images: [
            {
              src: '/images/case-study/ml-functions/Machine learning functions-handdrawn-wireframes.png',
              alt: 'Machine learning functions hand-drawn wireframes',
              caption: 'Hand-drawn wireframes: The foundation of the ML Functions redesign — early ideation, concept exploration, and workflow mapping',
              fullWidth: true,
            },
          ],
        },
        {
          title: 'Workflow Planning & Architecture',
          description: 'Systematic mapping of the existing workflow, user journeys, and system architecture to inform the redesign strategy. These diagrams became the foundation for understanding how users thought about ML workflows and how the system architecture needed to support the new guided experience.',
          images: [
            {
              src: '/images/case-study/ml-functions/1. ML UI Structure.png',
              alt: 'ML UI Structure',
              caption: 'ML UI Structure: The system architecture and information architecture that became the foundation for the redesign, mapping how users think about ML workflows within WebFOCUS',
              fullWidth: true,
            },
            {
              src: '/images/case-study/ml-functions/Overview of ML workflow based on user.png',
              alt: 'Overview of ML workflow based on user',
              caption: 'Overview of ML workflow based on user: User-based workflow mapping',
            },
            {
              src: '/images/case-study/ml-functions/ML functions inital workflow.png',
              alt: 'ML functions initial workflow',
              caption: 'ML functions initial workflow: Early workflow planning',
            },
            {
              src: '/images/case-study/ml-functions/ml functions initation from the HUB - workflow - inital stages.png',
              alt: 'ML functions initiation from the HUB - workflow - initial stages',
              caption: 'ML functions initiation from the HUB: Workflow - initial stages',
            },
            {
              src: '/images/case-study/ml-functions/all model types architecture map.png',
              alt: 'All model types architecture map',
              caption: 'All model types architecture map: Complete system architecture',
              fullWidth: true,
            },
          ],
        },
      ],
    },
    {
      id: 'section-04',
      index: '04',
      title: 'Aligning and Leading the Team',
      body: `After mapping the existing workflow and understanding the problems (Section 03), I needed to set up the right structure to actually solve them. This wasn't just a design project — it was a cross-functional collaboration that I effectively led over 6–8 months of iterative work.

I worked with Product to co-define scope, with Engineering to validate feasibility, with Data Scientists to validate ML logic, and with SMEs to exercise flows. With the Principal Data Scientist, collaboration was constant and deeply detailed. The confusion matrix screen alone went through 10+ iterations as we aligned on layout, order of tabs, and what users should see first after training. He often pushed for more advanced metrics; I pushed for clarity and scan-ability. That tension produced the best results.`,
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
      id: 'section-05',
      index: '05',
      title: 'Balancing Model Control with Simplicity',
      body: `The biggest design challenge: how much control to expose? Too much = intimidating. Too little = limiting for experts.

Solution: Layered disclosure serving multiple user types. Worked with data scientists to identify what to show, hide, or make optional. Result: simple for beginners, powerful for experts.

We surface edge cases early in plain language. SME testing: zero "I don't know what to do" moments. Invalid inputs? Users knew exactly what to change.

Locked Steps 1-2 (problem type, target) in Optimize flow — changing these creates a new model. Kept Steps 3-4 editable so users can adjust predictors/hyperparameters while preserving modeling intent.`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'Balance competing needs → work with domain experts to determine what to lock vs. edit',
        'Collaborate on error states → eliminate dead ends, achieve zero confusion in testing',
        'Layered disclosure → serve multiple users, defer features to keep v1 focused',
      ],
      subsections: [
        {
          title: 'Component Design',
          description: 'Design system with ML-specific patterns. 12-column grid ensures 4-step workflow works across screen sizes.',
          images: [
            {
              src: '/images/case-study/ml-functions/12 Column Grid for the Step Workflow.png',
              alt: '12 Column Grid for the Step Workflow',
              caption: '12 Column Grid for Step Workflow: The responsive grid system that ensures the 4-step workflow works seamlessly across screen sizes while maintaining design system consistency',
              fullWidth: true,
            },
            {
              src: '/images/case-study/ml-functions/12 Column Grid in Train Model UI.png',
              alt: '12 Column Grid in Train Model UI',
              caption: '12 Column Grid in Train Model UI: Applied grid system ensuring the Train Model workflow maintains visual hierarchy and readability across all device sizes',
              fullWidth: true,
            },
            {
              src: '/images/case-study/ml-functions/Important Styling and Structure Decisions w/Model Tile UI Guide.png',
              alt: 'Model Tile UI Guide',
              caption: 'Model Tile UI Guide: Component-level design precision for model cards — a key pivot from legacy tables that improved scanning and comparison, despite initial pushback',
              fullWidth: true,
            },
            {
              src: '/images/case-study/ml-functions/Important Styling and Structure Decisions w/Table Styling Guide.png',
              alt: 'Table Styling Guide',
              caption: 'Table Styling Guide: Visual system to distinguish three column types in data tables — the prediction column, columns used in training as predictors, and unused columns not factored into model training. Helps users understand which data contributed to predictions.',
              fullWidth: true,
            },
          ],
        },
        {
          title: 'Model Details UI',
          description: 'Advanced metrics balancing DS needs (comprehensive) with user needs (scannable). Made complex outputs accessible.',
          images: [
            {
              src: '/images/case-study/ml-functions/10. Binary Classfication - ROC Precision.png',
              alt: 'Binary Classification - ROC Precision',
              caption: 'ROC Precision: One of the advanced metrics screens that balances data scientist needs (comprehensive metrics) with user needs (scannable, understandable results)',
            },
            {
              src: '/images/case-study/ml-functions/12 Binary Classfication - Predicted Probababilites.png',
              alt: 'Binary Classification - Predicted Probabilities',
              caption: 'Predicted Probabilities: Analysis of prediction confidence — making complex model outputs accessible to non-technical users while preserving domain accuracy',
            },
            {
              src: '/images/case-study/ml-functions/13. Binary Classfication - Feature Importances.png',
              alt: 'Binary Classification - Feature Importances',
              caption: 'Feature Importances: Advanced tuning visualization that helps users understand which predictors matter most — part of the layered disclosure approach for expert users',
            },
            {
              src: '/images/case-study/ml-functions/14. Binary Classfication - Learning Curve.png',
              alt: 'Binary Classification - Learning Curve',
              caption: 'Learning Curve: Training progress visualization that shows model performance over time — helping users understand model quality at a glance',
            },
            {
              src: '/images/case-study/ml-functions/16. Binary Classfication - Training Log.png',
              alt: 'Binary Classification - Training Log',
              caption: 'Training Log: Detailed training metrics and logs — dense tabular data that demonstrates the balance between comprehensive information and scannable presentation',
            },
            {
              src: '/images/case-study/ml-functions/17. Optimize Model Popup.png',
              alt: 'Optimize Model Popup',
              caption: 'Optimize Model: Advanced controls for expert users — showing how we made Steps 3 and 4 editable post-training while locking Steps 1 and 2 to preserve modeling intent',
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
          images: [
            {
              src: '/images/case-study/ml-functions/8. Train Model Workflow - Compare Models.png',
              alt: 'Train Model Workflow - Compare Models',
              caption: 'Compare Models: View and compare multiple trained models side by side — the model cards approach that replaced legacy tables, improving scanning and decision-making',
            },
            {
              src: '/images/case-study/ml-functions/11. Train Model Workflow - Confusion Matrix.png',
              alt: 'Train Model Workflow - Confusion Matrix',
              caption: 'Confusion Matrix: The screen that went through 10+ iterations with the Principal Data Scientist, balancing his domain expertise (more metrics, exact terminology) with my UX priorities (clarity, visual hierarchy, scan-ability) — he called it "the best screen in the entire UX revamp"',
            },
          ],
        },
        {
          title: 'Explanability UI',
          description: 'Explains why predictions were made. Transforms complex outputs into accessible insights, building trust.',
          images: [
            {
              src: '/images/case-study/ml-functions/5. Run Model Workflow - Explanability hover.png',
              alt: 'Run Model Workflow - Explanability hover',
              caption: 'Explanability Hover: Preview of the Explanability feature that makes ML understandable and trustworthy by explaining why predictions were made — addressing the core challenge of building trust in ML',
            },
            {
              src: '/images/case-study/ml-functions/6. Run Model -  Explanability Popup.png',
              alt: 'Run Model - Explanability Popup',
              caption: 'Explanability Popup: The workflow culmination — making ML understandable and trustworthy by explaining why predictions were made, transforming complex model outputs into accessible insights',
            },
          ],
        },
        {
          title: 'Entry Points',
          description: 'Empty state explains capabilities. Landing page provides clear entry to Train or Run workflows.',
          images: [
            {
              src: '/images/case-study/ml-functions/1. Predict Data - Train Models - Empty State.png',
              alt: 'Predict Data - Train Models - Empty State',
              caption: 'Empty State: Initial view when no models exist — explains what ML Functions can do and guides users to start training their first model',
            },
            {
              src: '/images/case-study/ml-functions/2. ML workflow landing page - Train model tab.png',
              alt: 'ML workflow landing page - Train model tab',
              caption: 'Landing Page: Entry point to Train Model workflow — provides clear entry points to Train or Run workflows, setting the tone for the guided, accessible experience',
            },
          ],
        },
      ],
    },
    {
      id: 'section-06',
      index: '06',
      title: 'Turning an Expert-Only Flow into a Guided Experience',
      body: `Breakthrough: 4-step guided flow structured around what a model needs to train responsibly. Principal Data Scientist's answer to "What do you absolutely need?" → problem type, target, predictors, hyperparameters. That became the UX spine.

Replaced fragmented flow with honest, linear workflow. Confusion matrix: 10+ iterations balancing DS priorities (metrics, terminology) with UX (clarity, hierarchy).`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'Design for multiple users → personas drive decisions (Techy Analyst: right-click entry, non-technical: guided flows)',
        'Structure from domain expertise → 4-step flow from "What do you absolutely need?"',
        'Balance through collaboration → 10+ iterations produced "best screen in entire UX revamp"',
      ],
      subsections: [
        {
          title: 'Multiple ways to launch ML Functions from the HUB',
          description: 'Right-click entry points driven by Techy Analyst persona. Users access Predict Data via right-click on dataset/folder or +Data menu — 100% discoverability in testing.',
          images: [
            {
              src: '/images/case-study/ml-functions/Launch ML from the HUB - right click dataset.png',
              alt: 'Launch ML from the HUB - right click dataset',
              caption: 'Right-click on dataset: Access Predict Data directly from data source',
            },
            {
              src: '/images/case-study/ml-functions/Launch ML from the HUB - right click folder.png',
              alt: 'Launch ML from the HUB - right click folder',
              caption: 'Right-click on folder: Access Predict Data from folder context menu',
            },
            {
              src: '/images/case-study/ml-functions/Launch ML from the HUB - right click +Data button.png',
              alt: 'Launch ML from the HUB - right click +Data button',
              caption: '+Data button menu: Predict Data as first-class feature in Hub',
            },
          ],
        },
        {
          title: 'The main step workflow UI',
          description: '4-step guided flow: problem type → target → predictors → hyperparameters. Structure from Principal Data Scientist\'s "What do you absolutely need?" — makes ML feel like a guided tour, not a black box.',
          images: [
            {
              src: '/images/case-study/ml-functions/4. Train Model Workflow - Step 1 - Select Problem Type.png',
              alt: 'Train Model Workflow - Step 1 - Select Problem Type',
              caption: 'Step 1: Select Problem Type (classification/regression)',
            },
            {
              src: '/images/case-study/ml-functions/5. Train Model Workflow - Step 2 - Specify Problem.png',
              alt: 'Train Model Workflow - Step 2 - Specify Problem',
              caption: 'Step 2: Specify Problem details',
            },
            {
              src: '/images/case-study/ml-functions/6. Train Model Workflow - Step 3 - Select Predictors.png',
              alt: 'Train Model Workflow - Step 3 - Select Predictors',
              caption: 'Step 3: Select Predictors and features',
            },
            {
              src: '/images/case-study/ml-functions/7. Train Model Workflow - Step 4 - Configure Hyperparameters.png',
              alt: 'Train Model Workflow - Step 4 - Configure Hyperparameters',
              caption: 'Step 4: Configure Hyperparameters (optional for experts)',
            },
          ],
        },
      ],
      workflowPrototype: [
        {
          title: 'Train Model Workflow - Complete Interactive Flow',
          description: 'Navigate through the complete Train Model workflow from empty state through model training, evaluation, and saving.',
          workflowType: 'train' as const,
          steps: [
            {
              number: 1,
              src: '/images/case-study/ml-functions/1. Predict Data - Train Models - Empty State.png',
              alt: 'Predict Data - Train Models - Empty State',
              caption: 'Empty State',
              description: 'Initial state when no models exist yet - guiding users to start training',
            },
            {
              number: 2,
              src: '/images/case-study/ml-functions/2. ML workflow landing page - Train model tab.png',
              alt: 'ML workflow landing page - Train model tab',
              caption: 'Landing Page',
              description: 'Predict Data landing page - Entry point to Train Model workflow',
            },
            {
              number: 3,
              src: '/images/case-study/ml-functions/3. Train Model Workflow - View all Models + model filters.png',
              alt: 'Train Model Workflow - View all Models + model filters',
              caption: 'View All Models',
              description: 'Browse and filter existing trained models',
            },
            {
              number: 4,
              src: '/images/case-study/ml-functions/4. Train Model Workflow - Step 1 - Select Problem Type.png',
              alt: 'Train Model Workflow - Step 1 - Select Problem Type',
              caption: 'Step 1: Select Problem Type',
              description: 'Choose prediction type (classification/regression)',
            },
            {
              number: 5,
              src: '/images/case-study/ml-functions/5. Train Model Workflow - Step 2 - Specify Problem.png',
              alt: 'Train Model Workflow - Step 2 - Specify Problem',
              caption: 'Step 2: Specify Problem',
              description: 'Define the specific problem to solve',
            },
            {
              number: 6,
              src: '/images/case-study/ml-functions/6. Train Model Workflow - Step 3 - Select Predictors.png',
              alt: 'Train Model Workflow - Step 3 - Select Predictors',
              caption: 'Step 3: Select Predictors',
              description: 'Choose features and data for model training',
            },
            {
              number: 7,
              src: '/images/case-study/ml-functions/7. Train Model Workflow - Step 4 - Configure Hyperparameters.png',
              alt: 'Train Model Workflow - Step 4 - Configure Hyperparameters',
              caption: 'Step 4: Configure Hyperparameters',
              description: 'Advanced configuration for expert users (optional). This step was originally hidden post-training; bringing it forward as Step 4 made the workflow honest about what users could control.',
            },
            {
              number: 8,
              src: '/images/case-study/ml-functions/8. Train Model Workflow - Compare Models.png',
              alt: 'Train Model Workflow - Compare Models',
              caption: 'Compare Models',
              description: 'View and compare multiple trained models side by side',
            },
            {
              number: 9,
              src: '/images/case-study/ml-functions/9. Train Model Workflow - Model Details.png',
              alt: 'Train Model Workflow - Model Details',
              caption: 'Model Details',
              description: 'Deep dive into model performance and metrics',
            },
            {
              number: 10,
              src: '/images/case-study/ml-functions/10. Binary Classfication - ROC Precision.png',
              alt: 'Binary Classification - ROC Precision',
              caption: 'ROC Precision Analysis',
              description: 'Binary Classification workflow: ROC Precision visualization',
            },
            {
              number: 11,
              src: '/images/case-study/ml-functions/11. Train Model Workflow - Confusion Matrix.png',
              alt: 'Train Model Workflow - Confusion Matrix',
              caption: 'Confusion Matrix',
              description: 'Model performance visualization for classification tasks',
            },
            {
              number: 12,
              src: '/images/case-study/ml-functions/12 Binary Classfication - Predicted Probababilites.png',
              alt: 'Binary Classification - Predicted Probabilities',
              caption: 'Predicted Probabilities',
              description: 'Binary Classification workflow: Predicted Probabilities analysis',
            },
            {
              number: 13,
              src: '/images/case-study/ml-functions/13. Binary Classfication - Feature Importances.png',
              alt: 'Binary Classification - Feature Importances',
              caption: 'Feature Importances',
              description: 'Binary Classification workflow: Feature Importances visualization',
            },
            {
              number: 14,
              src: '/images/case-study/ml-functions/14. Binary Classfication - Learning Curve.png',
              alt: 'Binary Classification - Learning Curve',
              caption: 'Learning Curve',
              description: 'Binary Classification workflow: Learning Curve analysis',
            },
            {
              number: 15,
              src: '/images/case-study/ml-functions/15. Train Model Workflow - Results - Fitted Values - Table rest view.png',
              alt: 'Train Model Workflow - Results - Fitted Values - Table rest view',
              caption: 'Fitted Values Table',
              description: 'Detailed results view with fitted values in table format',
            },
            {
              number: 16,
              src: '/images/case-study/ml-functions/16. Binary Classfication - Training Log.png',
              alt: 'Binary Classification - Training Log',
              caption: 'Training Log',
              description: 'Binary Classification workflow: Training Log with detailed metrics',
            },
            {
              number: 17,
              src: '/images/case-study/ml-functions/17. Optimize Model Popup.png',
              alt: 'Optimize Model Popup',
              caption: 'Optimize Model',
              description: 'Advanced option to optimize model performance',
            },
            {
              number: 18,
              src: '/images/case-study/ml-functions/18. Train Model Workflow - Results - Step 3 Reset.png',
              alt: 'Train Model Workflow - Results - Step 3 Reset',
              caption: 'Step 3 Reset',
              description: 'Ability to go back and modify Step 3 selections',
            },
            {
              number: 19,
              src: '/images/case-study/ml-functions/19. Train Model Workflow - Results - Step 4 Reset.png',
              alt: 'Train Model Workflow - Results - Step 4 Reset',
              caption: 'Step 4 Reset',
              description: 'Ability to go back and modify Step 4 configurations',
            },
            {
              number: 20,
              src: '/images/case-study/ml-functions/20. Train Model Workflow - Results - Save Model.png',
              alt: 'Train Model Workflow - Results - Save Model',
              caption: 'Save Model',
              description: 'Save trained model popup with options',
            },
            {
              number: 21,
              src: '/images/case-study/ml-functions/21. Train Model Workflow - Results - Select Folder to Save.png',
              alt: 'Train Model Workflow - Results - Select Folder to Save',
              caption: 'Select Folder to Save',
              description: 'Choose destination folder for saved model',
            },
          ],
        },
        {
          title: 'Run Model Workflow - Complete Interactive Flow',
          description: 'Navigate through the complete Run Model workflow from empty state through model execution, evaluation, and the Explanability popup - the workflow culmination.',
          workflowType: 'run' as const,
          steps: [
            {
              number: 1,
              src: '/images/case-study/ml-functions/1. Run Model - Empty State.png',
              alt: 'Run Model - Empty State',
              caption: 'Empty State',
              description: 'Initial state when no models are available to run',
            },
            {
              number: 2,
              src: '/images/case-study/ml-functions/2. Run Model - Available models to run.png',
              alt: 'Run Model - Available models to run',
              caption: 'Available Models',
              description: 'Browse and select from available trained models',
            },
            {
              number: 3,
              src: '/images/case-study/ml-functions/3. Run Model - Result - Loading.png',
              alt: 'Run Model - Result - Loading',
              caption: 'Loading State',
              description: 'Model execution in progress with clear progress indication',
            },
            {
              number: 4,
              src: '/images/case-study/ml-functions/4. Run Model -  Results.png',
              alt: 'Run Model - Results',
              caption: 'Results',
              description: 'Model execution results showing predictions and outputs',
            },
            {
              number: 5,
              src: '/images/case-study/ml-functions/5. Run Model Workflow - Explanability hover.png',
              alt: 'Run Model Workflow - Explanability hover',
              caption: 'Explanability Hover',
              description: 'Hover state preview of the Explanability feature',
            },
            {
              number: 6,
              src: '/images/case-study/ml-functions/6. Run Model -  Explanability Popup.png',
              alt: 'Run Model - Explanability Popup',
              caption: 'Explanability Popup',
              description: 'The workflow culmination - making ML understandable and trustworthy by explaining why predictions were made',
            },
            {
              number: 7,
              src: '/images/case-study/ml-functions/7. Run Model -  Results after explanability popup.png',
              alt: 'Run Model - Results after explanability popup',
              caption: 'Results After Explanability',
              description: 'Results view after viewing Explanability - showing the complete workflow',
            },
            {
              number: 8,
              src: '/images/case-study/ml-functions/8. Run Model - Evaluation Report.png',
              alt: 'Run Model - Evaluation Report',
              caption: 'Evaluation Report',
              description: 'Detailed analysis of model performance and predictions',
            },
            {
              number: 9,
              src: '/images/case-study/ml-functions/9. Run Model - Properties.png',
              alt: 'Run Model - Properties',
              caption: 'Model Properties',
              description: 'Configuration and metadata for the run model',
            },
            {
              number: 10,
              src: '/images/case-study/ml-functions/10. Run Model -  Visualize Popup.png',
              alt: 'Run Model - Visualize Popup',
              caption: 'Visualize Popup',
              description: 'Create visualizations from model results',
            },
            {
              number: 11,
              src: '/images/case-study/ml-functions/11. Run Model - Save and Visualize Popup.png',
              alt: 'Run Model - Save and Visualize Popup',
              caption: 'Save and Visualize',
              description: 'Save predictions and create visualizations from results',
            },
          ],
        },
      ],
    },
    {
      id: 'section-07',
      index: '07',
      title: 'Impact & Validation',
      body: `Validation from SME tests and org-wide demos: transformed intimidating, error-prone flow into understandable, navigable experience.

100% discoverability: All 5 SMEs found Predict Data via right-click without help. New workflow: 7-9 clicks (down from 12+). Zero "I don't know what to do" dead-ends.

Internal demos (150-200 people) received strong leadership support. First time ML in WebFOCUS felt demo-ready — understandable and teachable, not just technically correct.`,
      revealsTitle: 'Reveals',
      revealsPoints: [
        'Enable new capabilities → 100% discoverability, "much easier" workflow',
        'Eliminate barriers → zero dead-ends, demo-ready for 150-200 person sessions',
        'Create strategic value → gateway for ML adoption, not niche expert-only',
      ],
      beforeAfter: {
        before: {
          src: '/images/case-study/ml-functions/Legacy Train Model Resuls UI.png',
          alt: 'Legacy Train Model Results UI - Before redesign',
          caption: 'Before: Legacy Train Model Results UI with fragmented workflow, hidden states, and confusing "results not generated" errors',
        },
        after: {
          src: '/images/case-study/ml-functions/11. Train Model Workflow - Confusion Matrix.png',
          alt: 'Train Model Workflow - Confusion Matrix - After redesign',
          caption: 'After: New Confusion Matrix screen with clear hierarchy, scannable metrics, and guided interpretation — the screen that received highest praise from the Principal Data Scientist',
        },
        beforeLabel: 'Before',
        afterLabel: 'After',
      },
    },
    {
      id: 'section-08',
      index: '08',
      title: 'Reflection & Vision',
      body: `From zero ML knowledge to Principal-level decisions. The patterns developed here (4-step flows, inline teaching, right-click entry) directly shaped IQ Plugin.`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'Redesign myself through difficult work → zero ML knowledge to trusted design leader',
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
    title: 'Experience the ML Functions workflow',
    description:
      'Watch the walkthrough to see how the guided 4-step flow makes machine learning accessible to non-technical users while maintaining flexibility for advanced users.',
    videoUrl: '/videos/ml-prototype-walkthrough.mp4',
    videoPoster: '/images/case-study/ml-functions/ml-prototype-poster.jpg',
  },
  // ----------------------------
  // IMPACT SUMMARY
  // ----------------------------
  impactSummary: {
    heading: 'Pre-launch impact at a glance',
    bullets: [
      '5/5 SMEs found Predict Data without help — 100% discoverability in usability tests',
      'From 12+ clicks through data flows, cascading menus, and mental hops → 7-9 clicks via right-click entry and smooth guided flow',
      'Eliminated "results not generated" dead ends — zero confusion errors in testing',
      'All 5 SMEs described new workflow as "much easier" and "more guiding" than previous UI',
      'First time ML in WebFOCUS felt demo-ready for 150–200 person org-wide sessions',
      'Anticipated reduction in ML-related support requests based on improved error handling and guided workflow',
    ],
  },
  // ----------------------------
  // PASSWORD GATE
  // ----------------------------
  passwordGate: {
    password: 'access',
    description:
      'To view the full case study (workflows, system maps, concept evolution, and detailed rationale), enter the password below.',
    learnItems: [
      'How I learned ML fast enough to design it responsibly',
      'Complete system maps and mental model diagrams',
      'Step-by-step workflow details for training and running models',
      'Concept evolution from expert-only to guided experience',
      'Edge cases, constraints, and design trade-offs',
      'Behind-the-scenes collaboration with data scientists and engineers',
    ],
  },
  // ----------------------------
  // FINAL SUMMARY
  // ----------------------------
  finalSummary: {
    title: 'The Takeaway',
    body: `ML Functions transformed expert-only ML workflows into guided, accessible experiences — enabling non-technical users to train models within minutes.

But it also transformed me: from zero ML knowledge to trusted design leader making Principal-level decisions. The patterns I developed here (4-step flows, progressive disclosure, right-click entry) directly shaped IQ Plugin.

The key insight: you don't need to become a domain expert to design responsibly. You need to learn fast enough to translate between domain expertise and user needs, then make principled decisions about what to expose and what to hide.

ML Functions proved that accessibility and power aren't opposites — they're complementary when you design with both in mind from the start.`,
    keyPoints: [
      'Transformed expert-only ML workflows into guided, accessible experiences — enabling non-technical users to train models within minutes',
      'Redesigned myself through the work — from zero ML knowledge to trusted design leader making Principal-level decisions',
      'Patterns became reusable — 4-step flows, progressive disclosure, and right-click entry directly shaped IQ Plugin design',
      'Proved accessibility and power are complementary — the dual-experience approach balanced simplicity with expert flexibility',
    ],
  },
}
