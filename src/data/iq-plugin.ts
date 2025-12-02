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
  role: 'Senior Product Designer (Principal-level scope)',
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
    subtitle: 'Unifying DSML capabilities into a single, approachable entry point',
    whatTheSystemWas:
      'WebFOCUS had DSML features — Automated Insights, Natural Language Query, and Predict Data — but they were fragmented, hard to discover, and intimidating. Users had to hunt across different parts of the platform, each with its own entry point and mental model. The goal of IQ was to bring everything together into one cohesive experience inside the hub.',
    myRole:
      'I owned UX strategy, IA, primary workflows, personas/journey mapping, prototypes, usability testing, and cross-functional alignment with PM, engineering, and QA. IQ was the "front door" to DSML in WebFOCUS, and a key way to stay competitive with platforms like Power BI, Tableau, and Qlik while being easier for non-technical users to adopt.',
    keyActions: [
      'Designed a unified entry point that centralizes Automated Insights, NLQ, Predict Data, and Discover into one cohesive experience.',
      'Mapped distinct user journeys for four personas: Tech Visionary (Mark), Financial Strategist (Lisa), Analytics Innovator (Dan), and Techy Analyst (Jamie).',
      'Created dual-layer UX: guided "happy path" for non-technical users with deeper configuration options for analysts.',
      'Applied progressive disclosure, clear labeling, and contextual help to reduce cognitive load.',
      'Ensured consistency across DSML features so Automated Insights, NLQ, and Predict Data feel like parts of the same system.',
      'Built a Discover page with examples, documentation, and community resources to make DSML feel less intimidating.',
      'Conducted usability testing with both technical and non-technical users to refine guided experiences.',
      'Collaborated closely with PM, engineering, and QA to align on UX goals and technical constraints.',
    ],
    impactMetrics: [
      { label: 'Centralized DSML capabilities', value: 'Unified experience' },
      { label: 'Reduced learning curve', value: 'Improved discoverability' },
      { label: 'Positive feedback from stakeholders', value: 'Strong validation' },
      { label: 'Scalable pattern for future DSML features', value: 'Foundation for growth' },
      { label: 'Made DSML approachable for non-technical users', value: 'Broader adoption' },
      { label: 'Competitive positioning with Power BI, Tableau, Qlik', value: 'Market alignment' },
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
    intro: 'The central tension of IQ was simple: How do you keep the depth technical users need without overwhelming everyone else? These principles guided the solution:',
    principles: [
      {
        title: 'Progressive disclosure',
        description:
          'Show simple paths first; advanced controls only when users are ready. Never dump all configuration options at once.',
      },
      {
        title: 'Dual-layer UX',
        description:
          'A guided "happy path" for non-technical users, with deeper configuration options available for analysts who need more control.',
      },
      {
        title: 'Cognitive load reduction',
        description:
          'Clear labeling, guided steps, and contextual help instead of dense configuration screens. Make complex DSML feel approachable.',
      },
      {
        title: 'Consistency across DSML features',
        description:
          'Automated Insights, NLQ, and Predict Data all feel like parts of the same system, not three separate tools with different mental models.',
      },
      {
        title: 'Learnability',
        description:
          'Tooltips, prompts, and a Discover page that teaches users how to get started, not just what exists. Help users grow their DSML skills over time.',
      },
    ],
  },
  // ----------------------------
  // NARRATIVE CASE STUDY SECTIONS (01–08) - Password Gated
  // ----------------------------
  sections: [
    {
      id: 'section-01',
      index: '01',
      title: 'How I Landed the Project',
      body: `After ML Functions, I was asked to unify all DSML capabilities into a single entry point. The challenge: Automated Insights, NLQ, and Predict Data were fragmented — different entry points, different mental models. Users had to hunt for features; non-technical users found it intimidating.

I said yes immediately. Opportunity: unify these into one cohesive system, making DSML usable for real people — not just data scientists. The mandate: create a "front door" to DSML that competes with Power BI, Tableau, Qlik — but more approachable.

Applied ML Functions patterns across the entire DSML ecosystem. Vision: one unified experience serving both technical and non-technical users, without compromise.`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'Ownership & Initiative → Took on IQ immediately, seeing opportunity to unify fragmented DSML',
        'Strategic Thinking → Unifying DSML makes advanced analytics accessible to real people',
        'Building on Previous Work → Applied ML Functions patterns to create cohesive DSML ecosystem',
      ],
      images: [
        {
          src: '/images/case-study/iq-plugin/IQ plugin - visual - 3 in 1 IQ Hub.png',
          alt: 'IQ Plugin - 3 in 1 Hub visual',
          caption: 'IQ Plugin visual: 3 in 1 IQ Hub — unified entry point bringing together Automated Insights, NLQ, and Predict Data into one cohesive experience.',
        },
      ],
    },
    {
      id: 'section-02',
      index: '02',
      title: 'Understanding the DSML Fragmentation Problem',
      body: `Before IQ, DSML features were scattered. Automated Insights lived in one place, NLQ in another, Predict Data somewhere else. Each had its own entry point, its own mental model, its own learning curve.

I mapped the fragmentation: where were these features? How did users find them? Users had to know where to look. Non-technical users found it intimidating. Technical users found it inefficient.

I also studied the competitive landscape. Power BI and Tableau were powerful but too technical. Qlik had usability issues. There was a clear gap: platforms were either too technical or had usability problems. IQ could win by being both powerful and approachable.`,
      revealsTitle: 'Insight',
      revealsPoints: [
        'There was a clear gap: platforms were either too technical (Power BI, Tableau) or had usability issues (Qlik). IQ could win by being both powerful and approachable.',
        'The market needed a guided DSML experience that didn\'t require weeks of training or Python knowledge.',
        'Fragmentation wasn\'t just a UX problem — it was a product strategy problem that IQ could solve.',
      ],
      images: [
        {
          src: '/images/case-study/iq-plugin/Explore Data _ NLQ _ Empty State Illustration 1.png',
          alt: 'Explore Data NLQ - Standalone experience before IQ',
          caption: 'Standalone NLQ interface before IQ unification — showing the fragmented entry point.',
        },
        {
          src: '/images/case-study/iq-plugin/Explore Data _ NLQ _ Vertical Stacked Bar 1.png',
          alt: 'Explore Data NLQ - Results visualization',
          caption: 'NLQ results in standalone Explore Data experience before IQ unification.',
        },
        {
          src: '/images/case-study/iq-plugin/Insights Designer - Result - Tile View 1.png',
          alt: 'Insights in WebFOCUS Designer',
          caption: 'Insights integrated in WebFOCUS Designer — important feature allowing users to use insight-generated results directly in the designer canvas.',
        },
        {
          src: '/images/case-study/iq-plugin/Insights - Results - Tile View 1.png',
          alt: 'Explore Data Insights - Results view',
          caption: 'Insights results in standalone Explore Data experience before IQ unification.',
        },
      ],
    },
    {
      id: 'section-03',
      index: '03',
      title: 'Ideation & User Journeys: Designing for Four Personas',
      body: `IQ needed to serve four distinct personas, each with different needs and comfort levels with data science. The central tension was simple: How do you keep the depth technical users need without overwhelming everyone else?

I mapped distinct journeys for each persona and balanced their needs through guided experiences, progressive disclosure, and consistent mental models. All four IQ pillars used the same interaction patterns, navigation, and visual language — making IQ feel like one cohesive system, not four separate tools.`,
      images: [
        {
          src: '/images/case-study/iq-plugin/IQ Structure flowchart.png',
          alt: 'IQ Plugin structure flowchart',
          caption: 'IQ Plugin structure flowchart showing information architecture and how the four pillars connect.',
        },
        {
          src: '/images/case-study/iq-plugin/IQ Dataset Selection Workflow 2.png',
          alt: 'IQ Dataset selection workflow',
          caption: 'Dataset selection workflow across IQ features — consistent pattern across all pillars.',
        },
      ],
    },
    {
      id: 'section-04',
      index: '04',
      title: 'Design Process: From Wireframes to High-Fidelity IQ',
      body: `I started with low-fidelity flows for each IQ component: Automated Insights, Ask a Question (NLQ), Predict Data, and Discover. I built iterative prototypes tested with internal users — both technical and non-technical — to validate the dual-persona approach.

Multiple rounds of usability testing revealed key insights: non-technical users needed more hand-holding in the NLQ flow, technical users wanted faster access to advanced Predict Data controls, and the Discover page needed clearer examples. Feedback drove changes to NLQ question handling, Predict Data configuration options, and the Discover page structure.`,
      images: [
        {
          src: '/images/case-study/iq-plugin/IQ Wireframes.png',
          alt: 'IQ Plugin wireframes',
          caption: 'Low-fidelity wireframes for IQ components',
        },
        {
          src: '/images/case-study/iq-plugin/IQ Navigation Tiles 1.png',
          alt: 'IQ Plugin navigation tiles',
          caption: 'IQ navigation tiles showing the four pillars: Automated Insights, Ask a Question, Predict Data, and Discover.',
        },
        {
          src: '/images/case-study/iq-plugin/Structure Layout in HUB 1.png',
          alt: 'IQ Plugin structure layout in HUB',
          caption: 'IQ Plugin structure and layout within the WebFOCUS Hub.',
        },
        {
          src: '/images/case-study/iq-plugin/Mockups for IQ Plugin Reponsive UI 1.png',
          alt: 'IQ Plugin responsive UI mockups',
          caption: 'Responsive UI mockups showing IQ across different screen sizes',
        },
      ],
      subsections: [
        {
          title: 'The Evolution of the IQ Plugin',
          description: 'Design evolution showing the iterative process from early concept through multiple iterations to the final design.',
          images: [
            {
              src: '/images/case-study/iq-plugin/Early concept.png',
              alt: 'IQ Plugin - Early concept',
              caption: 'Early concept exploration for IQ Plugin',
            },
            {
              src: '/images/case-study/iq-plugin/Iteration 5.png',
              alt: 'IQ Plugin - Iteration 5',
              caption: 'Design iteration 5: Refining the unified experience',
            },
            {
              src: '/images/case-study/iq-plugin/Iteration 8.png',
              alt: 'IQ Plugin - Iteration 8',
              caption: 'Design iteration 8: Further refinements based on testing',
            },
            {
              src: '/images/case-study/iq-plugin/Iteration 12.png',
              alt: 'IQ Plugin - Iteration 12',
              caption: 'Design iteration 12: Final refinements before high-fidelity',
            },
          ],
        },
      ],
    },
    {
      id: 'section-05',
      index: '05',
      title: 'The Final IQ Experience: Deep Dive into the Four Pillars',
      body: `The final IQ experience breaks down into four interconnected pillars, each designed to feel like part of the same system: Automated Insights, Ask a Question (NLQ), Predict Data, and Discover. All four pillars use consistent interaction patterns, navigation, and visual language — making IQ feel like one cohesive system, not four separate tools.`,
      subsections: [
        {
          title: 'Individual NLQ Workflow (Before IQ)',
          description: 'Standalone Natural Language Query experience before IQ unification — showing the fragmented entry point that users had to navigate separately.',
          images: [
            {
              src: '/images/case-study/iq-plugin/Explore Data _ NLQ _ Empty State Illustration 1.png',
              alt: 'Explore Data NLQ - Empty state illustration',
              caption: 'Empty state illustration for standalone NLQ in Explore Data',
            },
            {
              src: '/images/case-study/iq-plugin/Explore Data _ NLQ _ Suggested Questions 1.png',
              alt: 'Explore Data NLQ - Suggested questions',
              caption: 'Suggested questions interface in standalone NLQ',
            },
            {
              src: '/images/case-study/iq-plugin/Explore Data _ NLQ _ Vertical Stacked Bar 1.png',
              alt: 'Explore Data NLQ - Results visualization',
              caption: 'Results visualization in standalone NLQ workflow',
            },
            {
              src: '/images/case-study/iq-plugin/Explore Data _ NLQ _ Empty State Illustration - Error Screen with Back Button 1.png',
              alt: 'Explore Data NLQ - Error state',
              caption: 'Error state handling in standalone NLQ',
            },
          ],
        },
        {
          title: 'Individual Insights Workflow (Before IQ)',
          description: 'Standalone Automated Insights experience before IQ unification — showing the fragmented entry point.',
          images: [
            {
              src: '/images/case-study/iq-plugin/Insights Designer - Result - Tile View 1.png',
              alt: 'Explore Data Insights - Designer results',
              caption: 'Insights Designer results in standalone Explore Data experience',
            },
            {
              src: '/images/case-study/iq-plugin/Insights - Results - Tile View 1.png',
              alt: 'Explore Data Insights - Results tile view',
              caption: 'Results displayed in tile view in standalone Insights',
            },
            {
              src: '/images/case-study/iq-plugin/Insights - Multi-fact Table 1.png',
              alt: 'Explore Data Insights - Multi-fact table',
              caption: 'Multi-fact table visualization in standalone Insights',
            },
            {
              src: '/images/case-study/iq-plugin/Insights - Success Toaster 1.png',
              alt: 'Explore Data Insights - Success feedback',
              caption: 'Success feedback in standalone Insights experience',
            },
          ],
        },
        {
          title: 'IQ NLQ Workflow',
          description: 'Natural language query workflow within IQ Plugin — from empty state through data selection, query execution, and results visualization.',
          images: [
            {
              src: '/images/case-study/iq-plugin/IQ - Ask a Question _ Empty State 1.png',
              alt: 'IQ NLQ - Empty state',
              caption: 'Empty state with tutorial guidance',
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Ask a Question _ Select Data 1.png',
              alt: 'IQ NLQ - Select data',
              caption: 'Data selection interface',
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Ask a Question _ Data Selected 1.png',
              alt: 'IQ NLQ - Data selected',
              caption: 'Data selected, ready to ask questions',
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Ask a Question - Report 1.png',
              alt: 'IQ NLQ - Report results',
              caption: 'Query results displayed as report',
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Ask a Question - Vertical Stacked Bar 1.png',
              alt: 'IQ NLQ - Chart visualization',
              caption: 'Results visualized as vertical stacked bar chart',
            },
          ],
        },
        {
          title: 'IQ Insights Workflow',
          description: 'Automated Insights workflow — generating instant summaries and patterns from datasets with filtering and visualization options.',
          images: [
            {
              src: '/images/case-study/iq-plugin/IQ - Insights _ Empty State 1.png',
              alt: 'IQ Insights - Empty state',
              caption: 'Empty state with data selection prompt',
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Insights _ Select Data 1.png',
              alt: 'IQ Insights - Select data',
              caption: 'Data selection interface',
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Insights _ Data Selected 1.png',
              alt: 'IQ Insights - Data selected',
              caption: 'Data selected, insights generating',
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Insights - Loading 1.png',
              alt: 'IQ Insights - Loading',
              caption: 'Insights being generated',
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Insights - Tile View 1.png',
              alt: 'IQ Insights - Tile view',
              caption: 'Insights displayed in tile view',
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Insights - List View 1.png',
              alt: 'IQ Insights - List view',
              caption: 'Insights displayed in list view',
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Insights - Filters Dropdown 1.png',
              alt: 'IQ Insights - Filters',
              caption: 'Filtering options for insights',
            },
          ],
        },
        {
          title: 'IQ ML Workflow (Predict Data)',
          description: 'Machine learning workflow within IQ — training models and running predictions with guided 4-step flow.',
          images: [
            {
              src: '/images/case-study/iq-plugin/IQ - Predict Data - Train Models - landing page - model tile view.png',
              alt: 'IQ Predict Data - Train models landing',
              caption: 'Train models landing page with model tiles',
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Predict Data - Train Models - empty state - select data.png',
              alt: 'IQ Predict Data - Select data',
              caption: 'Empty state prompting data selection',
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Predict Data - Train Models - Select data popup.png',
              alt: 'IQ Predict Data - Data selection popup',
              caption: 'Data selection popup',
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Predict Data - Train Model Workflow - Compare models.png',
              alt: 'IQ Predict Data - Compare models',
              caption: 'Model comparison view',
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Predict Data - Train Model Workflow - Results - Fitted Values.png',
              alt: 'IQ Predict Data - Model results',
              caption: 'Model training results with fitted values',
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Predict Data - Run Model - model tile view.png',
              alt: 'IQ Predict Data - Run model tiles',
              caption: 'Run model landing with available models',
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Predict Data - Run Model - results loading.png',
              alt: 'IQ Predict Data - Results loading',
              caption: 'Model execution in progress',
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Predict Data - Run Model - results.png',
              alt: 'IQ Predict Data - Results',
              caption: 'Model execution results',
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Predict Data - Run Model - explanability.png',
              alt: 'IQ Predict Data - Explanability',
              caption: 'Model explanability visualization',
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Predict Data - Run Model - model evaluation report.png',
              alt: 'IQ Predict Data - Evaluation report',
              caption: 'Model evaluation report',
            },
          ],
        },
        {
          title: 'IQ Preview Data Workflow',
          description: 'Preview Data workflow — exploring datasets with key analysis, sample data, and time-series views.',
          images: [
            {
              src: '/images/case-study/iq-plugin/IQ - Preview Data Sample Tab 1.png',
              alt: 'IQ Preview Data - Sample tab',
              caption: 'Sample data tab view',
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Preview Data Key Analysis Tab 1.png',
              alt: 'IQ Preview Data - Key analysis tab',
              caption: 'Key analysis tab with insights',
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Preview Data Time-series report tab 1.png',
              alt: 'IQ Preview Data - Time-series tab',
              caption: 'Time-series report visualization',
            },
            {
              src: '/images/case-study/iq-plugin/IQ - Preview Data Key Analysis Back Button 1.png',
              alt: 'IQ Preview Data - Navigation',
              caption: 'Navigation between preview views',
            },
          ],
        },
      ],
    },
    {
      id: 'section-06',
      index: '06',
      title: 'Challenges, Tradeoffs & Team Alignment',
      body: `Designing IQ required balancing competing needs: technical depth vs. simplicity, multiple personas, and cross-functional alignment.

I addressed each challenge through progressive disclosure, iterative testing with both user types, and regular collaboration with PM, engineering, and QA. A lot of cross-functional collaboration was required with IQ — I collaborated with PMs from other feature teams like HUB and Designer because DSML reached everywhere. This wasn't just about designing within IQ; it was about ensuring IQ's patterns and integrations worked seamlessly across the entire WebFOCUS ecosystem.

I became the person who could explain IQ end-to-end, onboarding the team onto the IQ vision and UX constraints, ensuring consistency as the project evolved. The handoff was clean because the architecture was solid. The team could execute because they understood the "why" behind every decision, not just the "what."`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'Designing for multiple personas requires careful balance — not compromise, but thoughtful layering.',
        'Progressive disclosure is critical when features span technical and non-technical users.',
        'Cross-functional alignment is essential for complex initiatives like IQ — collaborated with PMs from HUB, Designer, and other feature teams because DSML reached everywhere.',
        'Team Alignment → Onboarded entire cross-functional team through demos and documentation',
      ],
    },
    {
      id: 'section-07',
      index: '07',
      title: 'Impact & Validation',
      body: `Even before full production rollout (scheduled for summer 2026), IQ showed strong promise:

Internal usability tests highlighted how much easier it was to find and understand DSML features when everything lived in one place. Stakeholders and internal teams called out the clarity of the workflows and the balance between depth and simplicity.

The learning curve dropped: new users needed fewer explanations to get started, and non-technical users were more willing to try features they previously avoided.`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'I design for both power and approachability.',
        'I can unify advanced capabilities (DSML) into flows that are actually adoptable.',
        'I think beyond a single screen — IQ is about an ecosystem and how features relate to each other.',
        'Measurable Impact → Reduced learning curve, improved discoverability, positive stakeholder feedback',
      ],
    },
    {
      id: 'section-08',
      index: '08',
      title: 'Reflection & What IQ Made Me Learn',
      body: `IQ didn't just centralize DSML features — it changed how I think about designing advanced capabilities for real people.

The project demonstrated that advanced capability doesn't have to mean advanced pain, and that thoughtful UX architecture can serve both technical experts and everyday business users. I learned that serving four distinct personas wasn't about compromise — it was about thoughtful layering, progressive disclosure, and consistent mental models.

The patterns I developed in IQ (progressive disclosure, dual-layer UX, consistent interaction patterns) became part of my design vocabulary and directly influenced how I approach complex, multi-persona design challenges. This work also reinforced something I learned in ML Functions: I don't need to be the domain expert to design responsibly. I need to understand enough to translate between technical complexity and human understanding — and that's exactly what IQ required.`,
      revealsTitle: 'What this reveals',
      revealsPoints: [
        'I can lead complex, multi-persona design initiatives without compromising on depth or simplicity.',
        'I think in systems — IQ is about an ecosystem, not individual features.',
        'I build on previous work — IQ patterns built on ML Functions patterns, creating a cohesive DSML experience.',
        'I design for real people — making advanced capabilities accessible without dumbing them down.',
      ],
    },
  ],
  // ----------------------------
  // PROTOTYPE MEDIA
  // ----------------------------
  prototypeMedia: {
    title: 'Experience the IQ Plugin workflow',
    description:
      'Watch the walkthrough to see how the unified DSML entry point makes advanced analytics accessible through progressive disclosure and intuitive navigation.',
    videoUrl: '/videos/iq-prototype-walkthrough.mp4',
    videoPoster: '/images/case-study/iq-plugin/iq-prototype-poster.jpg',
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
      'Competitive positioning with Power BI, Tableau, and Qlik while being more approachable.',
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
      'Designed for four personas: Tech Visionary (Mark), Financial Strategist (Lisa), Analytics Innovator (Dan), and Techy Analyst (Jamie).',
      'Applied progressive disclosure and dual-layer UX to balance simplicity with power.',
      'Created a scalable pattern for future DSML features within WebFOCUS.',
      'Competitive positioning with Power BI, Tableau, and Qlik while being more approachable.',
      'Strengthened ability to design advanced capabilities for real people.',
    ],
  },
  // ----------------------------
  // PASSWORD GATE
  // ----------------------------
  passwordGate: {
    password: 'access',
    description:
      'To view the full case study (detailed flows, IA, design decisions, and deep dive into the four pillars), enter the password below.',
    learnItems: [
      'How I researched competitive DSML experiences and positioned IQ in the market',
      'Complete user journey maps for four personas: Mark, Lisa, Dan, and Jamie',
      'Detailed breakdown of the four IQ pillars: Automated Insights, NLQ, Predict Data, and Discover',
      'Design process from wireframes to high-fidelity prototypes',
      'Challenges, tradeoffs, and how I balanced complexity with simplicity',
      'Behind-the-scenes collaboration with PM, engineering, and QA',
    ],
  },
}
